document.addEventListener('DOMContentLoaded', function() {
  // Mobile nav toggle
  const toggle = document.querySelector('.mobile-toggle');
  const navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'none';
    }
  });

  // Fade-in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .step, .section').forEach(el => {
    observer.observe(el);
  });

  // Tracking demo
  const trackingInput = document.querySelector('.tracking-input');
  const timeline = document.querySelector('.status-timeline');
  if (trackingInput && timeline) {
    const updateTrackingDemo = (value) => {
      if (value.toLowerCase().includes('demo')) {
        timeline.innerHTML = `
          <div class="status-item">
            <div class="status-dot"></div>
            <div>
              <strong>Booked</strong><br>
              <small>2 hours ago</small>
            </div>
            <div class="status-line"></div>
          </div>
          <div class="status-item">
            <div class="status-dot"></div>
            <div>
              <strong>Picked up</strong><br>
              <small>1 hour ago</small>
            </div>
            <div class="status-line"></div>
          </div>
          <div class="status-item">
            <div class="status-dot status-inactive"></div>
            <div>
              <strong>In transit</strong><br>
              <small>ETA: 30 min</small>
            </div>
            <div class="status-line"></div>
          </div>
          <div class="status-item">
            <div class="status-dot status-inactive"></div>
            <div>
              <strong>Delivered</strong>
            </div>
          </div>
        `;
      } else {
        timeline.innerHTML = '<p style="text-align: center; color: var(--neutral-500);">Enter a Tracking ID (try "DEMO123") to see journey.</p>';
      }
    };

    trackingInput.addEventListener('input', (e) => {
      updateTrackingDemo(e.target.value);
    });

    const trackingSubmit = document.querySelector('.tracking-submit');
    if (trackingSubmit) {
      trackingSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        updateTrackingDemo(trackingInput.value);
      });
    }
  }

  // 👇 Join Us Form – Google Apps Script webhook submission
  const joinForm = document.querySelector('form');
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = joinForm.querySelector('input[name="name"]').value;
      const phone = joinForm.querySelector('input[name="phone"]').value;
      const role = joinForm.querySelector('select[name="role"]').value;

      // Send to Google Apps Script
      fetch('https://script.google.com/macros/s/AKfycbwmOPnkG313ODCHPPh0LNEJY1Afd1KxYMkjYXwWpf9HqkGVC-GDow8F3MD-TJiPFevpRg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, role }),
      });

      alert('Thanks! Our team will contact you within 24 hours.');
      joinForm.reset();
    });
  }
});

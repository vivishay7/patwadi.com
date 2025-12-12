# patwadi.com
Patwadi Website

README.md



# Patwadi - Intercity Corridor Network

A production-quality, mobile-responsive corporate website for **Patwadi Logistics**, modeled on the visual clarity and professional standards of enterprise logistics companies like CEVA Logistics.

## 🌐 Live Demo
[View the live site](https://your-username.github.io/patwadi-website/)

## 📁 Project Structure
```
patwadi-website/
├── index.html                    # Homepage
├── services.html                 # Services page
├── how-it-works.html            # How It Works page
├── tracking.html                 # Tracking page
├── drivers.html                  # Join Us / Partners page
├── contact.html                  # Contact page
├── partner-onboarding.html       # Hidden onboarding form
├── README.md                     # This file
├── assets/
│   ├── css/
│   │   └── style.css            # Main stylesheet
│   └── js/
│       └── main.js              # Main JavaScript
└── .gitignore                    # Git ignore file
```

## 🚀 Features

### **Core Website Features**
- **Fully Responsive Design**: Mobile-first approach with breakpoints at 768px
- **Modern UI/UX**: Clean, professional design with CEVA-inspired typography and spacing
- **Performance Optimized**: No external dependencies except Google Fonts
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation
- **Cross-browser Compatible**: Works on Chrome, Firefox, Safari, Edge

### **Pages & Functionality**
1. **Homepage** (`index.html`)
   - Hero banner with strong value proposition
   - Trust indicators (OTIF: 96.7%, Lost Packages: 0 in 1,100)
   - Instant corridor quote calculator
   - Live corridor coverage map with interactive nodes
   - Core strengths (Speed, Reach, Intelligence)
   - Why Patwadi? section for different customer segments

2. **Services** (`services.html`)
   - 6 core service offerings with icons
   - Enterprise SLA guarantee section
   - B2B partnership tiers (SME, Corporate, Enterprise)
   - Contract verification service

3. **How It Works** (`how-it-works.html`)
   - Simplified 5-step delivery flow
   - Icon-based visual representation
   - Clean, minimal design

4. **Tracking** (`tracking.html`)
   - Interactive tracking sandbox
   - Real-time status timeline
   - Sample parcel details
   - Track tips section

5. **Join Us** (`drivers.html`)
   - Partner network introduction
   - Express interest form with role definitions
   - Hidden onboarding link (blue circle button in footer)

6. **Contact** (`contact.html`)
   - Support form with subject categories
   - WhatsApp integration
   - Office locations (Chandigarh HQ, Delhi Hub, Manali Node)
   - Social media links

### **Technical Implementation**
- **CSS Architecture**: CSS variables for consistent theming
- **Grid/Flex Layouts**: Modern responsive layouts
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: Inter font family via Google Fonts
- **Icons**: Emoji-based icons (no external icon libraries)
- **Forms**: Client-side validation with user feedback

## 🎨 Design System

### **Color Palette**
- Primary Blue: `#1d4ed8`
- Primary Blue Dark: `#1e3a8a`
- Primary Blue Light: `#60a5fa`
- Neutral 900: `#0f172a`
- Neutral 700: `#334155`
- Neutral 500: `#64748b`
- Neutral 100: `#f1f5f9`
- Neutral 50: `#f8fafc`
- White: `#ffffff`
- Accent Green: `#10b981`

### **Typography**
- **Font Family**: Inter (300, 400, 500, 600, 700 weights)
- **Base Size**: 16px
- **Line Height**: 1.6
- **Scale**: Modular scale with clamp() for responsive typography

### **Spacing System**
- Based on multiples of 8px (0.5rem)
- Consistent spacing variables for maintainability

## 🛠️ Deployment

### **GitHub Pages**
1. Fork this repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Click Save

### **Custom Domain**
1. Add `CNAME` file with your domain
2. Update DNS records as per GitHub Pages instructions

## 📱 Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔧 Development

### **Local Development**
```bash
# Clone the repository
git clone https://github.com/your-username/patwadi-website.git

# Open in browser
open index.html
```

### **File Structure Notes**
- All HTML files are self-contained with shared header/footer
- CSS uses BEM-like naming conventions
- JavaScript is modular and non-blocking
- No build process required - works as static files

## 📄 License
All rights reserved © 2024 Patwadi Logistics Pvt Ltd.

## 📞 Contact
For website issues or contributions, please contact the development team.

---

**Patwadi Logistics Pvt Ltd**  
Chandigarh, India  
© 2024 All rights reserved

# OGA-UK Alumni Website

A modern, professional website for the Old Girls' Association (OGA-UK) college alumni community. Built with React and Vite for optimal performance and developer experience.

## 🎓 Project Overview

This website serves as a digital hub for college alumni to:
- Connect with fellow graduates
- Stay updated on events and news
- Access alumni directory and networking opportunities
- Support current students and the institution
- Celebrate achievements and milestones

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.1.1** - Modern UI library with latest features
- **Vite 7.1.7** - Ultra-fast build tool and development server
- **ES Modules** - Modern JavaScript module system

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **Hot Module Replacement (HMR)** - Instant development feedback
- **Fast Refresh** - Preserve component state during development

### **Styling & UI** *(To be added)*
- CSS Framework options: Tailwind CSS, Bootstrap, or Material-UI
- Custom CSS modules for component-specific styling
- Responsive design for all devices

### **Deployment** *(Planned)*
- Static site generation capabilities
- CDN-ready for global performance
- GitHub Pages or Vercel deployment

## 🎨 Design Concept for Alumni Website

### **Visual Identity**
- **Color Palette**: Professional academic colors (navy blue, gold, white)
- **Typography**: Clean serif fonts for headings, sans-serif for body text
- **Layout**: Clean, organized, and accessible design

### **Key Design Principles**

#### 1. **Professional Heritage**
- Emphasize school tradition and academic excellence
- Showcase institutional history and achievements
- Use dignified color schemes and typography

#### 2. **Community-Centered**
- Alumni success stories and testimonials
- Event highlights and upcoming gatherings
- Networking and mentorship opportunities

#### 3. **Information Architecture**
```
Homepage
├── Hero Section (School crest, mission statement)
├── Quick Stats (alumni count, global reach, years of excellence)
├── Featured Events
├── Alumni Spotlight
└── Call-to-Action (Join, Donate, Connect)

Main Navigation
├── About (History, Mission, Leadership)
├── Alumni Directory
├── Events & News
├── Membership (Join, Renew, Benefits)
├── Donations & Giving
└── Contact
```

#### 4. **Mobile-First Responsive Design**
- Clean layouts that work on all screen sizes
- Touch-friendly navigation and interactions
- Fast loading times for all devices

### **Content Strategy**
- **Alumni achievements** and career highlights
- **School news** and institutional updates
- **Event listings** with registration capabilities
- **Photo galleries** from reunions and gatherings
- **Donation campaigns** and fundraising initiatives

### **User Experience Goals**
- Easy alumni registration and profile management
- Seamless event discovery and RSVP
- Simple donation process with multiple payment options
- Effective search and filtering for alumni directory
- Social sharing capabilities for events and news

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation**
```bash
# Clone the repository
git clone https://github.com/vithyan/OGA-UK.git
cd OGA-UK

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Development**
```bash
# Run development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation and branding
│   ├── Footer/         # Site footer with links
│   ├── Alumni/         # Alumni-specific components
│   └── Events/         # Event-related components
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About the association
│   ├── Events.jsx      # Events and news
│   └── Contact.jsx     # Contact information
├── assets/             # Images, fonts, icons
├── styles/             # CSS and styling files
└── utils/              # Helper functions and constants
```

## 🎯 Roadmap

### **Phase 1: Foundation** *(Current)*
- [x] Set up Vite + React development environment
- [x] Project structure and build configuration
- [ ] Basic routing setup (React Router)
- [ ] UI component library integration

### **Phase 2: Core Features**
- [ ] Homepage with hero section
- [ ] Alumni directory with search
- [ ] Event listing and details pages
- [ ] About and contact pages
- [ ] Responsive design implementation

### **Phase 3: Enhanced Features**
- [ ] User authentication for alumni
- [ ] Event registration system
- [ ] Donation/giving platform integration
- [ ] Photo gallery and news section
- [ ] Social media integration

### **Phase 4: Advanced Features**
- [ ] Alumni networking tools
- [ ] Job board and career services
- [ ] Mobile app (React Native)
- [ ] Advanced analytics and reporting

## 🤝 Contributing

This project is currently in active development. Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/alumni-directory`)
3. Commit your changes (`git commit -m 'Add alumni directory'`)
4. Push to the branch (`git push origin feature/alumni-directory`)
5. Open a Pull Request

## 📧 Contact

For questions about this project or the alumni association:
- **Repository**: [OGA-UK on GitHub](https://github.com/vithyan/OGA-UK)
- **Alumni Association**: [Contact Information]

---

*Building connections, preserving traditions, inspiring futures.*

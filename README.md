# 🔍 Ultimate QR Code Generator

The most comprehensive QR code generator for all your needs.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?logo=vite)

---

## ℹ️ About

The Ultimate QR Code Generator is a powerful and versatile tool designed to help individuals and businesses easily create a wide variety of QR codes. With a user-friendly interface and advanced customization features, it empowers users to generate professional-grade QR codes for multiple purposes.

Whether you're creating codes for marketing, networking, events, or digital payment solutions, our generator supports your needs with flexibility and precision.

---

## 📸 Screenshots

### Dark Mode
[![The Ultimate QR Code Generator - Dark Mode](/public/uploads/Screenshot1.png)](https://github.com/tandouridev/ultimate-qr-code.git)

### Light Mode
[![The Ultimate QR Code Generator - Light Mode](/public/uploads/Screenshot2.png)](https://github.com/tandouridev/ultimate-qr-code.git)

### Light Mode with Generator
[![The Ultimate QR Code Generator - Generator](/public/uploads/Screenshot3.png)](https://github.com/tandouridev/ultimate-qr-code.git)

> 💡 Preview images of the application in action

---

## 🎯 Our Mission

We believe in making digital connections simple and accessible. Our QR code generator provides a comprehensive suite of tools to create QR codes for any purpose, from simple URLs to complex eSIM configurations. Whether you're a business owner, developer, or individual user, our platform offers the flexibility and customization options you need.

---

## 🚀 Features

### 📋 Comprehensive QR Code Types

| QR Code Type | Description |
|--------------|-------------|
| **Standard QR Codes** | URLs, text, email, and phone numbers |
| **WiFi QR Codes** | Quick WiFi network connection setup |
| **Contact Cards (vCard)** | Share contact details easily |
| **Location QR Codes** | Share geographic locations and maps |
| **eSIM QR Codes** | Mobile carrier profile setup |
| **Calendar Events** | Schedule events and meetings |
| **Crypto Payments** | Accept cryptocurrency payments |
| **Email Templates** | Pre-fill email drafts |
| **Social Media Links** | Share profiles and social pages |

### 🎨 Advanced Customization

- **Custom Colors & Gradients**: Choose any color or gradient for your QR codes
- **Logo Embedding**: Add your brand logo to the center of QR codes
- **Rounded Corners**: Customize corner radius for modern look
- **Error Correction Levels**: L, M, Q, H levels for different use cases
- **Size Control**: Generate QR codes from 100 to 1000+ pixels
- **Theme Support**: Dark mode and light mode support

### 💾 Multiple Export Formats

- PNG format with custom quality
- JPG/JPEG format with compression
- SVG vector format for scaling
- PDF format for printing

### ⚡ Advanced Features

- **Real-time Preview**: See changes instantly
- **Responsive Design**: Works perfectly on desktop and mobile
- **Dark/Light Theme**: Eye-friendly themes for all preferences
- **Social Integration**: Easy sharing of QR codes
- **URL Parameters**: Share generator state via URL

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm, pnpm, or bun package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/tandouridev/ultimate-qr-code.git
cd ultimate-qr-code
```

2. **Install dependencies**
```bash
npm install
# or
bun install
# or
pnpm install
```

3. **Start the development server**
```bash
npm run dev
# or
bun run dev
```

4. **Open in your browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
bun run build
```

This creates an optimized build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
bun run preview
```

---

## 📁 Project Structure

```
ultimate-qr-code/
├── src/
│   ├── components/
│   │   ├── QRCodeGenerator.tsx        # Main generator component
│   │   ├── QRCodeCustomization.tsx    # Customization options
│   │   ├── QRCodeAppearance.tsx       # Appearance settings
│   │   ├── QRCodeExportOptions.tsx    # Export configuration
│   │   ├── QRCodeContentPreview.tsx   # Content preview
│   │   ├── Header.tsx                 # Header component
│   │   ├── Footer.tsx                 # Footer component
│   │   ├── Layout.tsx                 # Layout wrapper
│   │   ├── ThemeToggle.tsx            # Dark/Light toggle
│   │   ├── SocialMediaIcons.tsx       # Social icons
│   │   │
│   │   ├── Forms/                     # QR Code type forms
│   │   │   ├── StandardQRForm.tsx     # Standard QR form
│   │   │   ├── WiFiQRForm.tsx         # WiFi QR form
│   │   │   ├── ContactQRForm.tsx      # Contact/vCard form
│   │   │   ├── ESIMQRForm.tsx         # eSIM form
│   │   │   ├── GeoLocationQRForm.tsx  # Location form
│   │   │   ├── CalendarQRForm.tsx     # Calendar event form
│   │   │   ├── CryptoQRForm.tsx       # Crypto payment form
│   │   │   ├── EmailQRForm.tsx        # Email template form
│   │   │   └── SocialQRForm.tsx       # Social media form
│   │   │
│   │   ├── FluidDropdown/             # Custom dropdown
│   │   │   ├── index.ts
│   │   │   ├── types.ts
│   │   │   ├── animations.ts
│   │   │   ├── defaultCategories.ts
│   │   │   ├── DropdownOption.tsx
│   │   │   └── IconWrapper.tsx
│   │   │
│   │   └── ui/                        # Shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── select.tsx
│   │       ├── slider.tsx
│   │       ├── switch.tsx
│   │       ├── dialog.tsx
│   │       ├── toast.tsx
│   │       └── ... (more ui components)
│   │
│   ├── context/
│   │   └── ThemeContext.tsx           # Theme management
│   │
│   ├── hooks/
│   │   ├── use-toast.ts               # Toast hook
│   │   ├── use-mobile.tsx             # Mobile detection
│   │   └── use-click-away.tsx         # Click away hook
│   │
│   ├── lib/
│   │   └── utils.ts                   # Utility functions
│   │
│   ├── pages/
│   │   ├── Index.tsx                  # Home page
│   │   ├── About.tsx                  # About page
│   │   ├── Contact.tsx                # Contact page
│   │   ├── FAQ.tsx                    # FAQ page
│   │   ├── Privacy.tsx                # Privacy policy
│   │   ├── Terms.tsx                  # Terms of service
│   │   └── NotFound.tsx               # 404 page
│   │
│   ├── types/
│   │   └── qrExport.ts                # Export types
│   │
│   ├── utils/
│   │   ├── qrCodeCanvas.ts            # Canvas utilities
│   │   ├── qrCodeDownload.ts          # Download logic
│   │   └── qrCodeExporters.ts         # Export formatters
│   │
│   ├── App.tsx                        # Main app
│   ├── main.tsx                       # Entry point
│   ├── App.css                        # App styles
│   └── index.css                      # Global styles
│
├── public/
│   ├── robots.txt
│   └── uploads/                       # Screenshot uploads
│
├── vite.config.ts                     # Vite configuration
├── tsconfig.json                      # TypeScript config
├── tailwind.config.ts                 # Tailwind config
├── postcss.config.js                  # PostCSS config
├── package.json                       # Dependencies
└── README.md                          # This file
```

---

## 💻 Tech Stack

### Frontend
- **React 18**: Modern UI library with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformations

### UI & Components
- **Shadcn/ui**: High-quality UI components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Framer Motion**: Animation library

### QR Code Generation
- **qrcode.react**: React QR code library
- **html2canvas**: Canvas manipulation
- **jsPDF**: PDF generation

### Forms & Validation
- **React Hook Form**: Efficient form management
- **Zod**: TypeScript-first schema validation

### State & Routing
- **React Router DOM**: Client-side routing
- **React Context API**: State management
- **TanStack React Query**: Data fetching

### Utilities
- **clsx**: Conditional CSS classes
- **date-fns**: Date utilities
- **Sonner**: Toast notifications

---

## 🎨 Customization Options

### QR Code Appearance
- **Size**: 100px to 1000px+ configurable
- **Colors**: Foreground and background color picker
- **Error Correction**: L, M, Q, H levels
- **Logo**: Custom image upload
- **Corner Radius**: 0-50 pixels
- **Gradient**: Linear or radial gradients

### Export Settings
- **Format**: PNG, JPG, SVG, PDF
- **Quality**: 50-100% for JPEG
- **Size**: Custom dimensions for export
- **Filename**: Custom file naming

---

## 🔧 Configuration

### Environment
No environment variables required for basic functionality.

### Customizing Theme
Edit `tailwind.config.ts` to change:
- Color palette
- Font family
- Spacing
- Dark mode settings

### Modifying UI Components
Customize components in `src/components/ui/` for:
- Button styles
- Form layouts
- Dialog appearances
- Toast notifications

---

## 📊 Available Scripts

### Development
```bash
npm run dev
```
Starts development server with hot reload on port 5173

### Build
```bash
npm run build
```
Creates optimized production build

### Build (Development)
```bash
npm run build:dev
```
Creates development build with source maps

### Preview
```bash
npm run preview
```
Preview production build locally

### Linting
```bash
npm run lint
```
Run ESLint to check code quality

---

## 🔍 Features in Detail

### QR Code Types

#### Standard QR Codes
- URL/Website links
- Plain text
- Email addresses
- Phone numbers

#### WiFi QR Codes
- Network SSID
- Security type (WPA, WEP, Open)
- Password
- Hidden network support

#### Contact Cards (vCard)
- Name, email, phone
- Organization
- Address
- Website URL

#### Location QR Codes
- Geographic coordinates
- Google Maps integration
- Altitude support
- Accuracy settings

#### eSIM QR Codes
- Operator selection
- PUK/PIN codes
- Phone number
- Activation codes

#### Calendar Events
- Event title
- Date and time
- Location
- Description

#### Crypto Payments
- Bitcoin addresses
- Ethereum addresses
- Amount and currency
- Payment labels

#### Email Templates
- Recipient email
- Subject line
- Message body
- Attachments info

#### Social Media Links
- Platform selection
- Profile/page links
- Username handling
- Deep linking

### Export Formats

#### PNG
- Lossless compression
- Full transparency support
- Highest quality
- Larger file size

#### JPG/JPEG
- Adjustable quality (50-100%)
- Smaller file size
- No transparency
- Web-optimized

#### SVG
- Vector format
- Infinite scaling
- Text-based
- Smallest file size

#### PDF
- Print-ready
- Multiple pages support
- Embedded fonts
- Document format

---

## 🐛 Error Handling

The application includes robust error handling for:
- Invalid input data
- File upload errors
- Export failures
- Missing dependencies
- Network issues

---

## ♿ Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Semantic HTML structure

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Code Guidelines
- Follow TypeScript best practices
- Use React hooks and functional components
- Maintain consistent code style with ESLint
- Add comments for complex logic
- Test changes thoroughly

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙋 Support

### Getting Help
- Check FAQ page for common questions
- Review component documentation
- Check GitHub issues

### Report Issues
1. Check existing issues on GitHub
2. Provide detailed description
3. Include screenshots if applicable
4. Mention your browser and OS

### Feature Requests
Please open an issue with:
- Clear description of the feature
- Use cases and benefits
- Any additional context

---

## 🗺️ Roadmap

### Upcoming Features
- [ ] Bulk QR code generation
- [ ] QR code analytics and tracking
- [ ] Cloud storage integration
- [ ] Collaborative QR code generation
- [ ] Advanced batch operations
- [ ] API for programmatic access
- [ ] Mobile app (iOS/Android)
- [ ] Print templates
- [ ] QR code history and management
- [ ] Advanced styling options

### Improvements
- [ ] Performance optimization
- [ ] More export formats (WebP, AVIF)
- [ ] Advanced color schemes
- [ ] Pattern options
- [ ] Better mobile UX

---

## 👨‍💻 Author

**Tandouri Dev**
- GitHub: [@tandouridev](https://github.com/tandouridev)
- Website: https://tandouri.dev

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Shadcn/ui](https://ui.shadcn.com) - UI components
- [Radix UI](https://www.radix-ui.com) - Primitives
- [Lucide Icons](https://lucide.dev) - Icons
- [QRCode.React](https://github.com/davidcreativo/qrcode.react) - QR generation
- [Framer Motion](https://www.framer.com/motion) - Animations

---

**Last Updated**: January 2026

**Current Version**: 1.0.0

**Status**: Active Development ✨


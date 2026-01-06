# ⏱️ Stopwatch Application

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A professional, high-precision stopwatch application with advanced lap timing features and a modern, responsive interface.

[Live Demo](#) · [Report Bug](https://github.com/shadab80k/SCT_WD_2/issues) · [Request Feature](https://github.com/shadab80k/SCT_WD_2/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

The **Stopwatch Application** is a precision timing tool built with modern web technologies. It provides accurate time tracking using `requestAnimationFrame`, ensuring millisecond-level precision. Perfect for athletes, developers, or anyone needing reliable time tracking with lap recording capabilities.

---

## ✨ Features

- ⚡ **High-Precision Timing**: Utilizes `requestAnimationFrame` for accurate millisecond tracking
- 🔄 **Lap Recording**: Record unlimited laps with automatic numbering
- 📊 **Performance Analysis**: Automatically identifies and highlights fastest and slowest laps
- 🎨 **Modern UI**: Beautiful, clean interface built with shadcn-ui components
- 📱 **Responsive Design**: Seamlessly adapts to desktop, tablet, and mobile devices
- 🎯 **Intuitive Controls**: Simple Start/Pause/Reset functionality
- 🏃 **Real-Time Updates**: Live time display with smooth animations
- 💾 **Persistent State**: Maintains lap data during pause/resume cycles
- 🎭 **Dark/Light Mode**: Supports system theme preferences (if configured)

---

## 📸 Screenshots

<!-- Add your screenshots here when available -->
```
Coming soon! Run the app locally to see the beautiful interface.
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library for building interactive interfaces |
| **TypeScript** | Type-safe development and enhanced IDE support |
| **Vite** | Lightning-fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **shadcn-ui** | High-quality, accessible component library |
| **Lucide React** | Beautiful, consistent icon set |
| **React Hook Form** | Efficient form state management |
| **TanStack Query** | Server state management (configured) |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

> **Tip**: Use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions easily.

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/shadab80k/SCT_WD_2.git
```

2. **Navigate to the project directory**

```bash
cd SCT_WD_2
```

3. **Install dependencies**

```bash
npm install
```

### Running the Application

1. **Start the development server**

```bash
npm run dev
```

2. **Open your browser**

Navigate to `http://localhost:8080` (or the port shown in your terminal)

3. **Build for production** (optional)

```bash
npm run build
```

The optimized build will be created in the `dist` folder.

---

## 💡 Usage

### Basic Controls

1. **Start**: Click the "Start" button to begin timing
2. **Lap**: While running, click "Lap" to record a lap time
3. **Pause**: Click "Pause" to temporarily stop the timer
4. **Resume**: Click "Resume" to continue from where you paused
5. **Reset**: When paused, click "Reset" to clear all data and start fresh

### Understanding Lap Times

- **Green highlight**: Indicates the fastest lap recorded
- **Red highlight**: Indicates the slowest lap recorded
- Laps are numbered sequentially and display individual lap times

---

## 📁 Project Structure

```
SCT_WD_2-main/
├── public/
│   ├── favicon.svg          # Stopwatch favicon
│   └── favicon.ico          # Fallback favicon
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn-ui components
│   │   ├── LapList.tsx      # Lap times display component
│   │   ├── Stopwatch.tsx    # Main stopwatch component
│   │   ├── StopwatchButton.tsx
│   │   └── TimeDisplay.tsx  # Time formatting component
│   ├── hooks/
│   │   └── useStopwatch.ts  # Core stopwatch logic
│   ├── lib/
│   │   ├── timeUtils.ts     # Time formatting utilities
│   │   └── utils.ts         # General utilities
│   ├── pages/
│   │   ├── Index.tsx        # Home page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # App root component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Project Maintainer**: [@shadab80k](https://github.com/shadab80k)

**Project Link**: [https://github.com/shadab80k/SCT_WD_2](https://github.com/shadab80k/SCT_WD_2)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ using React, TypeScript, and Tailwind CSS

</div>

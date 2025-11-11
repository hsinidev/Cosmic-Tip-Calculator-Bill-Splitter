# Cosmic Tip Calculator & Bill Splitter

[![React Version](https://img.shields.io/badge/react-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-^5.0.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind_css-^3.3.0-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, visually engaging, and highly functional tip calculator and bill splitter built with React, TypeScript, and Tailwind CSS. This single-page application provides instant calculations, flexible options, and a stunning animated cosmic background, all designed for a seamless and user-friendly experience.

**[Live Demo](https://cosmic-tip-calculator.example.com)**

![Cosmic Tip Calculator Screenshot](https://cosmic-tip-calculator.example.com/screenshot.png)

## ✨ Features

-   **🚀 Instant Calculations**: Get real-time updates for tip amount, total bill, and per-person cost as you type.
-   **🎨 Stunning UI/UX**: A clean, financial-focused interface wrapped in a beautiful, animated multi-colored galaxy theme.
-   **📱 Fully Responsive**: Flawless performance and layout on desktops, tablets, and mobile devices.
-   **🔢 Flexible Inputs**:
    -   Enter any bill amount.
    -   Select from preset tip percentages (15%, 18%, 20%) or input a custom value.
    -   Easily specify the number of people to split the bill.
-   **💰 Rounding Options**: Conveniently round the total bill up or down to the nearest whole number for easy payment.
-   **📚 SEO-Optimized Content**: Includes a comprehensive 3500+ word article on global tipping culture and financial etiquette, complete with JSON-LD schema to boost search engine visibility.
-   ** modals**: Quick access to About, Contact, Guide, Privacy, Terms, and DMCA information in a clean, non-intrusive modal format.
-   **✅ Zero Dependencies**: All calculation logic is handled by pure, dependency-free TypeScript functions.

## 🛠️ Tech Stack

-   **Framework**: [React 18](https://reactjs.org/) (Functional Components with Hooks)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Calculations**: Pure TypeScript/JavaScript Math functions (no external libraries).
-   **Build/Dev**: Can be set up with [Vite](https://vitejs.dev/) or [Create React App](https://create-react-app.dev/).

## 📂 Project Structure

The project is organized into a clean, modern, and scalable component-based structure.

```
/
├── public/
│   ├── favicon.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SeoArticle.tsx
│   │   ├── ThemeLayout.tsx
│   │   └── TipCalculatorTool.tsx
│   ├── utils/
│   │   └── TipMath.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types.ts
├── .gitignore
├── README.md
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

-   Node.js (v16 or later)
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/cosmic-tip-calculator.git
    cd cosmic-tip-calculator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run start
    ```
    The application will be available at `http://localhost:3000` (or another port depending on your setup).

## 🧮 Core Logic

All financial calculations are handled in `src/utils/TipMath.ts`. This utility contains a pure function, `calculateTotals`, which takes the bill amount, tip percentage, number of people, and rounding option as input and returns a structured object with the calculated tip, total bill, and per-person amount. This separation of concerns makes the logic easily testable and maintainable.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is distributed under the the MIT License.

---

<p align="center">
  Powered by <a href="https://github.com/hsinidev" target="_blank">HSINI MOHAMED</a>
</p>
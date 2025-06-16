/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Karla", "system-ui", "sans-serif"],
                karla: ["Karla", "system-ui", "sans-serif"],
            },
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1.5" }],
                sm: ["0.875rem", { lineHeight: "1.6" }],
                base: ["1rem", { lineHeight: "1.6" }],
                lg: ["1.125rem", { lineHeight: "1.6" }],
                xl: ["1.25rem", { lineHeight: "1.6" }],
                "2xl": ["1.5rem", { lineHeight: "1.5" }],
                "3xl": ["1.875rem", { lineHeight: "1.4" }],
                "4xl": ["2.25rem", { lineHeight: "1.3" }],
                "5xl": ["3rem", { lineHeight: "1.2" }],
                "6xl": ["3.75rem", { lineHeight: "1.1" }],
                "7xl": ["4.5rem", { lineHeight: "1.1" }],
            },
            fontWeight: {
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
            },
            borderRadius: {
                none: "0",
                sm: "4px",
                DEFAULT: "8px",
                md: "8px",
                lg: "8px",
                xl: "8px",
                "2xl": "8px",
                "3xl": "8px",
                full: "9999px",
            },
            spacing: {
                18: "4.5rem",
                88: "22rem",
                128: "32rem",
            },
            animation: {
                pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "bounce-subtle": "bounce 3s infinite",
                "fade-in": "fadeIn 0.6s ease-out",
                "slide-up": "slideUp 0.6s ease-out",
                "slide-in-left": "slideInLeft 0.6s ease-out",
                "slide-in-right": "slideInRight 0.6s ease-out",
                "scale-in": "scaleIn 0.3s ease-out",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            boxShadow: {
                "3xl": "0 35px 60px -12px rgba(0, 0, 0, 0.25)",
                elegant: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "elegant-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                "elegant-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            },
            transitionDuration: {
                400: "400ms",
                600: "600ms",
            },
            transitionTimingFunction: {
                elegant: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
        },
    },
    plugins: [],
};

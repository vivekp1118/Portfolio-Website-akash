import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

function App() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 56; // Height of fixed header (14 * 4 = 56px)
            const elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
        setIsMenuOpen(false); // Close mobile menu after navigation
    };

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "skills", "blog", "resume"];
            const scrollPosition = window.scrollY + 100; // Offset for header

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call once to set initial active section

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (isMenuOpen && !target.closest("header")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMenuOpen]);

    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <Header activeSection={activeSection} scrollToSection={scrollToSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                <main>
                    <Hero scrollToSection={scrollToSection} />
                    <About />
                    <Projects />
                    <Skills />
                    <Blog />
                    <Resume />
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;

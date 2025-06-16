import React from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
    activeSection: string;
    scrollToSection: (section: string) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "blog", label: "Blog" },
        { id: "resume", label: "Resume" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-elegant border-b border-gray-200 dark:border-gray-700">
            <div className="section-container">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-lg font-bold text-gradient" style={{ fontFamily: "Tenor Sans, serif" }}>
                            DevOps Engineer
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <div className="flex items-center space-x-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                                        activeSection === item.id
                                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                                            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </nav>

                    {/* Theme Toggle and Mobile Menu */}
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 active:scale-95"
                                aria-label="Toggle mobile menu"
                            >
                                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-slide-up">
                    <div className="section-container py-2 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                                    activeSection === item.id
                                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

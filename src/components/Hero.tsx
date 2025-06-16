import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
    scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-300 dark:bg-blue-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float"></div>
                <div
                    className="absolute top-1/3 right-1/4 w-56 h-56 bg-purple-300 dark:bg-purple-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-green-300 dark:bg-green-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float"
                    style={{ animationDelay: "4s" }}
                ></div>
            </div>

            <div className="relative z-10 text-center section-container">
                <div className="max-w-3xl mx-auto animate-fade-in">
                    {/* Main heading with proper typography hierarchy */}
                    <div className="mb-6">
                        <p className="text-lg sm:text-xl font-karla font-medium mb-2 text-gray-700 dark:text-gray-300 animate-slide-in-left">
                            Hi, I'm
                        </p>
                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl text-gradient animate-slide-in-right font-bold"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Aakashdeep Singh
                        </h1>
                    </div>

                    {/* Subtitle with improved spacing and typography */}
                    <p
                        className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-karla leading-relaxed mb-8 max-w-2xl mx-auto animate-slide-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        DevOps Engineer specializing in cloud infrastructure, automation, and building scalable systems that power modern
                        applications.
                    </p>

                    {/* CTA buttons with consistent spacing and improved animations */}
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 animate-slide-up"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <button onClick={() => scrollToSection("projects")} className="btn-primary px-6 py-3">
                            View My Work
                        </button>
                        <button onClick={() => scrollToSection("about")} className="btn-secondary px-6 py-3">
                            About Me
                        </button>
                    </div>

                    {/* Social links with consistent spacing and hover effects */}
                    <div className="flex items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
                        <a
                            href="https://github.com/aakashdeep8530"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                            aria-label="GitHub Profile"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aakashdeep-singh-b323a4243/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:aakashdeepsingh69146@gmail.com"
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                            aria-label="Email Contact"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator with improved animation */}
            <button
                onClick={() => scrollToSection("about")}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 animate-bounce-subtle"
                aria-label="Scroll to About section"
            >
                <ChevronDown size={24} />
            </button>
        </section>
    );
};

export default Hero;

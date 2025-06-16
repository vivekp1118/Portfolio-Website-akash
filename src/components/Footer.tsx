import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                                     radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
                    }}
                ></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-5">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                    Aakashdeep Singh
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                                    DevOps Engineer passionate about building scalable infrastructure and empowering development teams with
                                    cutting-edge solutions.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/aakashdeep8530"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/aakashdeep-singh-b323a4243/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:aakashdeepsingh69146@gmail.com"
                                    className="group p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/20"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-300 group-hover:text-red-400 transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="lg:col-span-3">
                            <h3 className="text-xl font-semibold mb-6 text-white">Navigation</h3>
                            <nav className="space-y-4">
                                {["About", "Skills", "Projects", "Blog"].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                                    >
                                        <span className="flex items-center">
                                            <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                                            {item}
                                        </span>
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Contact & Blog */}
                        <div className="lg:col-span-4">
                            <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
                            <div className="space-y-4 mb-8">
                                <a
                                    href="https://wa.me/918530213811"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
                                >
                                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-green-500/10 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                    </div>
                                    <span>WhatsApp</span>
                                </a>
                                <a
                                    href="tel:+918530213811"
                                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
                                >
                                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <span>Call Me</span>
                                </a>
                            </div>

                            {/* Blog CTA */}
                            <a
                                href="https://aakashdeep8530.hashnode.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                    />
                                </svg>
                                <span>Read My Blog</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50 backdrop-blur-sm">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Aakashdeep Singh. All rights reserved.</p>
                            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                <span>Made with</span>
                                <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                <span>in India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

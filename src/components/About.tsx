import React from "react";
import { Server, Cloud, Code, Users } from "lucide-react";

const About: React.FC = () => {
    const highlights = [
        {
            icon: <Server className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
            title: "Infrastructure",
            description: "1+ years designing and managing cloud infrastructure on AWS and Azure",
        },
        {
            icon: <Cloud className="w-7 h-7 text-purple-600 dark:text-purple-400" />,
            title: "Cloud Native",
            description: "Expert in Kubernetes, Docker, and microservices architecture",
        },
        {
            icon: <Code className="w-7 h-7 text-green-600 dark:text-green-400" />,
            title: "Automation",
            description: "CI/CD pipelines, Infrastructure as Code, and automated testing",
        },
        {
            icon: <Users className="w-7 h-7 text-orange-600 dark:text-orange-400" />,
            title: "Collaboration",
            description: "Bridging the gap between development and operations teams",
        },
    ];

    return (
        <section id="about" className="section-padding bg-white dark:bg-gray-900">
            <div className="section-container">
                {/* Section header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="font-karla font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
                        Passionate DevOps engineer with a track record of transforming development workflows and scaling infrastructure for
                        high-growth companies.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text content */}
                    <div className="animate-slide-in-left">
                        <div className="space-y-6 text-gray-600 dark:text-gray-300">
                            <p className="text-lg leading-relaxed">
                                With over 1 years of experience in DevOps and cloud infrastructure, I've helped organizations reduce deployment times
                                by 80% and improve system reliability to 99.9% uptime.
                            </p>
                            <p className="text-lg leading-relaxed">
                                My expertise spans across cloud platforms, container orchestration, and automation tools. I'm passionate about
                                creating robust, scalable systems that enable development teams to focus on building great products.
                            </p>
                            <p className="text-lg leading-relaxed">
                                When I'm not optimizing CI/CD pipelines or managing Kubernetes clusters, you can find me contributing to open-source
                                projects or sharing knowledge through technical blog posts.
                            </p>
                        </div>
                    </div>

                    {/* Highlights grid */}
                    <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="card p-6 group hover:scale-105 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="mb-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

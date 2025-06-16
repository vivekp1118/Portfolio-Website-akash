import React from "react";
import { Download, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";

const Resume: React.FC = () => {
    const experience = [
        {
            title: "DevOps Engineer",
            company: "Instance IT Solutions",
            location: "Surat, Gujarat",
            period: "April 2025 - Present",
            description: [
                "Led infrastructure modernization for 50+ microservices using Kubernetes and Istio",
                "Reduced deployment time by 80% through automated CI/CD pipeline optimization",
                "Implemented comprehensive monitoring solution improving MTTR by 60%",
                "Mentored junior engineers and established DevOps best practices",
            ],
        },
        {
            title: "DevOps Engineer",
            company: "CloudArcOps",
            location: "Surat, Gujarat",
            period: "Dec 2024 - April 2025",
            description: [
                "CI/CD automation using GitLab and Jenkins",
                "VPN setup and network security configuration",
                "Docker containerization and deployment",
                "AWS services management and optimization",
                "Infrastructure as Code with Terraform",
                "Monitoring setup with Grafana and Prometheus",
            ],
        },
        {
            title: "Devops Engineer Intern",
            company: "Toshal Infotech",
            location: "Surat, Gujarat",
            period: "June 2024 - Nov 2024",
            description: [
                "EC2 instance provisioning and management",
                "Jenkins server setup with security hardening",
                "CI/CD pipeline development and optimization",
                "Cloud infrastructure monitoring and maintenance",
            ],
        },
    ];

    const education = [
        {
            degree: "Master of Science IT in Cloud Computing",
            school: "University of Mumbai",
            location: "Mumbai, Maharashtra",
            period: "Aug 2022 - Aug 2024",
            details: "CGPA: 8.25/10",
        },
        {
            degree: "Bachelor of Science in Computer Science",
            school: "Veer Narmad South Gujarat University",
            location: "Surat, Gujarat",
            period: "July 2019 - April 2022",
            details: "CGPA: 5.77/10",
        },
    ];

    const certifications = ["DevOps Foundation Certification", "Terraform for Beginners", "Generative AI for DevOps"];

    return (
        <section id="resume" className="section-padding bg-white dark:bg-gray-900">
            <div className="section-container">
                {/* Section header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="font-karla font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                        A comprehensive overview of my professional experience, education, and certifications in DevOps and cloud infrastructure.
                    </p>
                    <button className="btn-primary inline-flex items-center">
                        <Download size={20} className="mr-2" />
                        Download PDF
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Experience */}
                    <div className="lg:col-span-2 animate-slide-in-left">
                        <div className="mb-12">
                            <div className="flex items-center mb-8">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
                            </div>

                            <div className="space-y-8">
                                {experience.map((job, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                                        <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 top-0"></div>
                                        <div className="card p-6 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{job.title}</h4>
                                            <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{job.company}</div>
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                                                <MapPin size={16} className="mr-1" />
                                                <span className="mr-4">{job.location}</span>
                                                <span>{job.period}</span>
                                            </div>
                                            <ul className="space-y-2">
                                                {job.description.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                                                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center mb-8">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                                    <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                            </div>

                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="card p-6 hover:scale-105 animate-slide-up"
                                        style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                                    >
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                                        <div className="text-green-600 dark:text-green-400 font-medium mb-2">{edu.school}</div>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                            <MapPin size={16} className="mr-1" />
                                            <span className="mr-4">{edu.location}</span>
                                            <span>{edu.period}</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="animate-slide-in-right">
                        <div className="flex items-center mb-8">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                        </div>

                        <div className="space-y-4 mb-8">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 hover:scale-105 transition-all duration-300 animate-slide-up"
                                    style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                                >
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact card */}
                        <div className="card p-6 animate-slide-up" style={{ animationDelay: "0.8s" }}>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect with Me</h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                Interested in discussing opportunities or collaborating on projects? Let's connect!
                            </p>
                            <a href="mailto:aakashdeepsingh69146@gmail.com" className="btn-primary inline-flex items-center text-sm">
                                <span>Send Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;

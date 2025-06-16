import React from "react";

const Skills: React.FC = () => {
    const techStacks = [
        {
            title: "Cloud Platforms",
            skills: [
                { name: "AWS", icon: "https://iamops.io/wp-content/uploads/2024/06/aws.svg", color: "text-orange-500" },
                { name: "GCP", icon: "https://iamops.io/wp-content/uploads/2024/06/Google-cloud.svg", color: "text-blue-500" },
                { name: "Azure", icon: "https://iamops.io/wp-content/uploads/2024/06/Azure.svg", color: "text-blue-600" },
            ],
        },
        {
            title: "IaC and Automation",
            skills: [
                { name: "Terraform", icon: "https://iamops.io/wp-content/uploads/2024/06/teraform.svg", color: "text-purple-600" },
                { name: "Ansible", icon: "https://iamops.io/wp-content/uploads/2024/06/Azad-Gamer.svg", color: "text-red-600" },
                { name: "CloudFormation", icon: "https://iamops.io/wp-content/uploads/2024/06/aws-2.svg", color: "text-orange-500" },
                { name: "Pulumi", icon: "https://iamops.io/wp-content/uploads/2024/07/pulmi-new.svg", color: "text-indigo-600" },
            ],
        },
        {
            title: "CI/CD",
            skills: [
                { name: "Jenkins", icon: "https://iamops.io/wp-content/uploads/2024/06/Jenkins.svg", color: "text-blue-600" },
                { name: "GitHub Actions", icon: "https://iamops.io/wp-content/uploads/2024/06/github-actions.svg", color: "text-gray-800" },
                { name: "GitLab", icon: "https://iamops.io/wp-content/uploads/2024/06/gitlab.svg", color: "text-orange-500" },
                { name: "Git", icon: "https://iamops.io/wp-content/uploads/2024/06/Git_icon.svg", color: "text-red-600" },
            ],
        },
        {
            title: "Monitoring",
            skills: [
                { name: "Prometheus", icon: "/images/skills/prometheus.svg", color: "text-red-500" },
                { name: "Grafana", icon: "https://iamops.io/wp-content/uploads/2024/06/Grafana.svg", color: "text-orange-400" },
                { name: "ELK Stack", icon: "/images/skills/elk.svg", color: "text-yellow-600" },
                { name: "New Relic", icon: "https://iamops.io/wp-content/uploads/2024/06/relic-new.png", color: "text-green-500" },
                { name: "Datadog", icon: "https://iamops.io/wp-content/uploads/2024/06/datadog.svg", color: "text-yellow-600" },
                { name: "CloudWatch", icon: "https://iamops.io/wp-content/uploads/2024/06/aws-cloudwatch.svg", color: "text-orange-500" },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="text-blue-600">My</span> Skills
                    </h2>
                </div>

                {/* Tech Stack Grid */}
                <div className="space-y-12">
                    {techStacks.map((stack, index) => (
                        <div key={index} className="tech-stack-row">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{stack.title}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {stack.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-12 h-12 mb-2"
                                            onError={(e) => {
                                                console.error(`Failed to load image for ${skill.name}`);
                                                e.currentTarget.style.display = "none";
                                            }}
                                        />
                                        <span className={`text-sm font-medium ${skill.color}`}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

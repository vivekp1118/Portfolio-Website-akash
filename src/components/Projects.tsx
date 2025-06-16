import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Microservices Platform",
            description:
                "Built a complete microservices platform using Kubernetes, Istio, and GitOps principles. Reduced deployment time from hours to minutes.",
            technologies: ["Kubernetes", "Docker", "Istio", "ArgoCD"],
            image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400",
            github: "https://github.com",
            demo: "https://demo.com",
        },
        {
            title: "Infrastructure as Code",
            description: "Automated AWS infrastructure provisioning using Terraform and Ansible. Managed 50+ services across multiple environments.",
            technologies: ["Terraform", "Ansible", "AWS", "Jenkins"],
            image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
            github: "https://github.com",
            demo: "https://demo.com",
        },
        {
            title: "Monitoring & Observability",
            description: "Implemented comprehensive monitoring solution with custom dashboards and alerting. Improved MTTR by 60%.",
            technologies: ["Prometheus", "Grafana", "ELK Stack", "Jaeger"],
            image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
            github: "https://github.com",
            demo: "https://demo.com",
        },
        {
            title: "CI/CD Pipeline Optimization",
            description: "Redesigned CI/CD pipelines for a fintech company, reducing build times by 70% and improving code quality.",
            technologies: ["Jenkins", "GitLab CI", "SonarQube", "Nexus"],
            image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400",
            github: "https://github.com",
            demo: "https://demo.com",
        },
        {
            title: "Container Orchestration",
            description: "Deployed and managed container clusters with automated scaling and load balancing across multiple regions.",
            technologies: ["Kubernetes", "Helm", "Ingress", "Cert-Manager"],
            image: "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=400",
            github: "https://github.com",
            demo: "https://demo.com",
        },
        {
            title: "Security Automation",
            description: "Integrated security scanning and compliance checks into development workflows with automated remediation.",
            technologies: ["Vault", "Falco", "OPA", "Trivy"],
            image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
            github: "https://github.com",
            demo: "https://demo.com",
        },
    ];

    // Duplicate projects for seamless infinite scroll
    const duplicatedProjects = [...projects, ...projects];

    const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => (
        <div className="card-small group flex-shrink-0 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="relative overflow-hidden rounded-t-lg">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95"
                        aria-label={`View ${project.title} code on GitHub`}
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95"
                        aria-label={`View ${project.title} live demo`}
                    >
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-sm">
                    {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 text-xs">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded border border-blue-200 dark:border-blue-800 transition-colors duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-3 pt-1">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-xs font-medium"
                    >
                        <Github size={12} />
                        <span>Code</span>
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-xs font-medium"
                    >
                        <ExternalLink size={12} />
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="section-container">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-gray-900 dark:text-white mb-3">Featured Projects</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        A showcase of infrastructure projects and automation solutions that have made a real impact.
                    </p>
                </div>

                <div className="auto-scroll-container">
                    <div className="auto-scroll">
                        {duplicatedProjects.map((project, index) => (
                            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Additional info */}
                <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Auto-scrolling projects • Hover to pause</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;

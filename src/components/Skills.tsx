import React from 'react';
import { 
  Cloud, 
  Server, 
  Code, 
  Database, 
  Shield, 
  Monitor,
  GitBranch,
  Container
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "AWS", level: 95 },
        { name: "Azure", level: 80 },
      ]
    },
    {
      title: "Container & Orchestration",
      icon: <Container className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 90 },
        { name: "Helm", level: 85 },
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: <Server className="w-8 h-8 text-green-600 dark:text-green-400" />,
      skills: [
        { name: "Terraform", level: 90 },
        { name: "Ansible", level: 85 },
        { name: "CloudFormation", level: 80 },
      ]
    },
    {
      title: "CI/CD & Version Control",
      icon: <GitBranch className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitLab CI", level: 85 },
        { name: "GitHub Actions", level: 80 },
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="w-8 h-8 text-red-600 dark:text-red-400" />,
      skills: [
        { name: "Prometheus", level: 90 },
        { name: "Grafana", level: 85 },
        { name: "ELK Stack", level: 80 },
      ]
    },
    {
      title: "Programming & Scripting",
      icon: <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Bash", level: 95 },
        { name: "YAML", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive toolkit for modern DevOps practices and cloud infrastructure management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3 transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
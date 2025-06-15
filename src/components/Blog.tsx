import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Implementing GitOps with ArgoCD and Kubernetes",
      excerpt: "Learn how to set up a complete GitOps workflow using ArgoCD for automated deployments and better infrastructure management.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "DevOps",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#"
    },
    {
      title: "Monitoring Kubernetes Clusters with Prometheus",
      excerpt: "A comprehensive guide to setting up monitoring and alerting for Kubernetes clusters using Prometheus and Grafana.",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Monitoring",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#"
    },
    {
      title: "Infrastructure as Code Best Practices",
      excerpt: "Essential patterns and practices for managing infrastructure as code with Terraform and maintaining scalable cloud environments.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#"
    },
    {
      title: "Securing CI/CD Pipelines: A Practical Guide",
      excerpt: "Security considerations and best practices for building secure CI/CD pipelines in modern development workflows.",
      date: "Nov 28, 2024",
      readTime: "15 min read",
      category: "Security",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Sharing knowledge and insights about DevOps practices, cloud infrastructure, and modern development workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-3xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 transition-colors duration-300">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300">{post.excerpt}</p>
                
                <a
                  href={post.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors duration-300"
          >
            View All Posts
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
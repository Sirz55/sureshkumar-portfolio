import { Card } from "@/components/ui/card";
import { Code, Settings, Star, Briefcase, Zap, Database, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Web Development",
      description: "End-to-end web applications using React.js, Next.js, Node.js and Express.js — from UI to backend APIs.",
      tags: ["React.js", "Next.js", "Node.js"],
      gradient: "from-indigo-500 to-blue-500",
      impact: "5+ apps built"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "WordPress Plugin Development",
      description: "Custom WordPress plugins with drag-and-drop forms, AJAX operations, email notifications and admin panel integration.",
      tags: ["WordPress", "PHP", "jQuery"],
      gradient: "from-blue-500 to-cyan-500",
      impact: "40% data entry reduced"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "AWS Cloud Deployment",
      description: "Production deployments on AWS EC2 and S3 with automated AMI recycling, cost optimization and performance tuning.",
      tags: ["AWS EC2", "AWS S3", "OCI"],
      gradient: "from-orange-500 to-yellow-500",
      impact: "15% cost reduction"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Low-Code Platform Development",
      description: "Internal business tools and workflow automation platforms using Next.js for streamlined operations.",
      tags: ["Next.js", "REST APIs", "UI/UX"],
      gradient: "from-green-500 to-emerald-500",
      impact: "25% efficiency boost"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "REST API Development",
      description: "Scalable RESTful APIs with proper authentication, error handling and documentation using Node.js and Express.",
      tags: ["Node.js", "Express.js", "Postman"],
      gradient: "from-purple-500 to-pink-500",
      impact: "Production ready"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design & Management",
      description: "Database architecture, query optimization and management using MongoDB and MySQL for scalable applications.",
      tags: ["MongoDB", "MySQL", "REST"],
      gradient: "from-teal-500 to-blue-500",
      impact: "Optimized queries"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Website Performance Optimization",
      description: "Speed optimization, lazy loading, code splitting and cloud infrastructure tuning for faster load times.",
      tags: ["Vite", "AWS", "Next.js"],
      gradient: "from-red-500 to-orange-500",
      impact: "Faster load times"
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-lg">What I build and deliver professionally</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 bg-white group rounded-2xl flex flex-col"
            >
              {/* Icon + Impact */}
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg border border-indigo-100">
                  {service.impact}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-50 text-gray-600 border border-gray-200 px-2 py-1 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import { Card } from "@/components/ui/card";
import { Code, Settings, Star, Briefcase, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "WordPress Plugin Development",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Web App Development (React.js / Next.js)",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "AWS Deployment & Optimization",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "API Integration",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Website Performance",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm group">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 leading-tight">{service.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

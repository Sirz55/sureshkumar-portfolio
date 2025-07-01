import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Warranty and Claim Management Platform",
      description: "Built using WordPress, PHP, and AWS EC2 with AMI management.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Dynamic Form Builder Plugin",
      description: "Custom WordPress plugin for drag-and-drop form creation and email submission.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "LCP (Low Code Platform)",
      description: "Next.js applications created to enhance business process automation.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

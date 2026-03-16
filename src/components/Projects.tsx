// import { Card } from "@/components/ui/card";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Warranty and Claim Management Platform",
//       description: "Built using WordPress, PHP, and AWS EC2 with AMI management.",
//       gradient: "from-blue-500 to-purple-600"
//     },
//     {
//       title: "Dynamic Form Builder Plugin",
//       description: "Custom WordPress plugin for drag-and-drop form creation and email submission.",
//       gradient: "from-green-500 to-teal-600"
//     },
//     {
//       title: "LCP (Low Code Platform)",
//       description: "Next.js applications created to enhance business process automation.",
//       gradient: "from-orange-500 to-red-600"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
//           <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
//             A showcase of my recent work and technical achievements
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
//               <div className="relative h-48 overflow-hidden">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <h3 className="text-white text-xl font-bold text-center px-4">{project.title}</h3>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <p className="text-gray-600 leading-relaxed">{project.description}</p>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
 
const projects = [
  {
    title: "Warranty & Claim Management Platform",
    description:
      "End-to-end device registration and claims management system built with WordPress + PHP, deployed on AWS EC2 with automated AMI recycling for cost efficiency.",
    impact: "☁️ Cut AWS cloud costs by 15%",
    impactColor: "text-orange-600 bg-orange-50 border-orange-100",
    tags: ["WordPress", "PHP", "AWS EC2", "MySQL", "jQuery"],
    tagColor: "bg-orange-50 text-orange-600",
    github: "https://github.com/Sirz55",
    live: "",
  },
  {
    title: "WordPress Form Builder Plugin",
    description:
      "Custom drag-and-drop form builder plugin with AJAX save/fetch operations, email notifications, jQuery DataTables admin panel integration, and MySQL storage.",
    impact: "📉 Reduced manual data entry by 40%",
    impactColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
    tags: ["WordPress", "PHP", "jQuery", "AJAX", "MySQL"],
    tagColor: "bg-indigo-50 text-indigo-600",
    github: "https://github.com/Sirz55",
    live: "",
  },
  {
    title: "Low-Code Platform (LCP)",
    description:
      "Internal business workflow management tool with dynamic UI built using Next.js to streamline operations and improve team productivity.",
    impact: "⚡ Improved workflow efficiency by 25%",
    impactColor: "text-green-600 bg-green-50 border-green-100",
    tags: ["Next.js", "React.js", "Node.js", "REST APIs"],
    tagColor: "bg-green-50 text-green-600",
    github: "https://github.com/Sirz55",
    live: "",
  },
  {
    title: "Leave Tracker App",
    description:
      "React.js application with role-based approve/reject workflows and real-time state management for employee leave tracking and management.",
    impact: "✅ Role-based workflow automation",
    impactColor: "text-purple-600 bg-purple-50 border-purple-100",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    tagColor: "bg-purple-50 text-purple-600",
    github: "https://github.com/Sirz55",
    live: "",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Sleek personal portfolio built with React + TypeScript + Vite + TailwindCSS, featuring EmailJS contact integration and deployed on Vercel.",
    impact: "🌐 Live production deployment on Vercel",
    impactColor: "text-blue-600 bg-blue-50 border-blue-100",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    tagColor: "bg-blue-50 text-blue-600",
    github: "https://github.com/Sirz55/sureshkumar-portfolio",
    live: "https://sureshkumar-portfolio.vercel.app",
  },
];
 
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-lg">Production-ready work with measurable impact</p>
        </div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="p-6 hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 hover:-translate-y-1 flex flex-col"
            >
              {/* Impact Badge */}
              <div className={`inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg border mb-4 w-fit ${project.impactColor}`}>
                {project.impact}
              </div>
 
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
 
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
 
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-1 rounded-md font-medium ${project.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
 
              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 rounded-lg text-xs">
                    <Github className="w-3 h-3" />
                    GitHub
                  </Button>
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gap-2 rounded-lg text-xs bg-indigo-600 hover:bg-indigo-700 text-white">
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Projects;

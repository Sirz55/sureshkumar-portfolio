// import {
//   Code2,
//   Server,
//   Cloud,
//   Database,
//   Wrench,
//   FileCode,
//   Paintbrush2,
//   Zap,
//   Atom,
//   SquareStack,
//   TreeDeciduous,
//   Network,
//   CodeSquare,
//   BookUser,
//   Flower2,
//   CloudSun,
//   CloudCog,
//   Shuffle,
//   Leaf
// } from "lucide-react";

// import { Card } from "@/components/ui/card";

// // Icon mapping for each skill
// const skillIcons: Record<string, JSX.Element> = {
//   // Frontend
//   HTML: <FileCode className="w-4 h-4 mr-2 text-orange-500" />,
//   CSS: <Paintbrush2 className="w-4 h-4 mr-2 text-sky-500" />,
//   JavaScript: <Zap className="w-4 h-4 mr-2 text-yellow-500" />,
//   "React.js": <Atom className="w-4 h-4 mr-2 text-cyan-500" />,
//   "Next.js": <SquareStack className="w-4 h-4 mr-2 text-gray-800" />,

//   // Backend
//   "Node.js": <TreeDeciduous className="w-4 h-4 mr-2 text-green-700" />,
//   "Express.js": <Network className="w-4 h-4 mr-2 text-zinc-600" />,
//   PHP: <CodeSquare className="w-4 h-4 mr-2 text-indigo-500" />,
//   WordPress: <BookUser className="w-4 h-4 mr-2 text-blue-700" />,
//   "Spring Boot": <Flower2 className="w-4 h-4 mr-2 text-green-600" />,

//   // Cloud
//   "AWS (EC2)": <CloudSun className="w-4 h-4 mr-2 text-orange-400" />,
//   "Oracle Cloud Infrastructure (OCI)": <CloudCog className="w-4 h-4 mr-2 text-red-600" />,

//   // Dev Tools
//   "Apache Kafka": <Shuffle className="w-4 h-4 mr-2 text-purple-600" />,

//   // Databases
//   MongoDB: <Leaf className="w-4 h-4 mr-2 text-green-700" />,
//   MySQL: <Database className="w-4 h-4 mr-2 text-teal-600" />
// };

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Frontend",
//       icon: <Code2 className="w-6 h-6" />,
//       skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       title: "Backend",
//       icon: <Server className="w-6 h-6" />,
//       skills: ["Node.js", "Express.js", "PHP", "WordPress", "Spring Boot"],
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       title: "Cloud Platforms",
//       icon: <Cloud className="w-6 h-6" />,
//       skills: ["AWS (EC2)", "Oracle Cloud Infrastructure (OCI)"],
//       color: "from-orange-500 to-red-500"
//     },
//     {
//       title: "Dev Tools",
//       icon: <Wrench className="w-6 h-6" />,
//       skills: ["Apache Kafka"],
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       title: "Databases",
//       icon: <Database className="w-6 h-6" />,
//       skills: ["MongoDB", "MySQL"],
//       color: "from-teal-500 to-green-500"
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
//           <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
//            Technologies that drive my solutions
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {skillCategories.map((category, index) => (
//             <Card
//               key={index}
//               className="p-8 transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-xl bg-white/70 backdrop-blur-md group rounded-3xl hover:shadow-2xl"
//             >
//               <div className="text-center mb-6">
//                 <div className={`inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r ${category.color} text-white mb-4 transition-transform duration-300 transform group-hover:scale-110 shadow-md`}>
//                   {category.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 tracking-wide">{category.title}</h3>
//               </div>

//               <div className="space-y-3">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div
//                     key={skillIndex}
//                     className="flex items-center justify-center p-3 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md"
//                   >
//                     <div className="flex items-center text-gray-700 font-medium">
//                       {skillIcons[skill]}
//                       <span>{skill}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



import { useState } from "react";

const allSkills = [
  // Frontend
  { name: "React.js", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: "⚡", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎭", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Express.js", icon: "🚀", category: "Backend" },
  { name: "PHP", icon: "🐘", category: "Backend" },
  { name: "WordPress", icon: "📝", category: "Backend" },
  { name: "REST APIs", icon: "🔗", category: "Backend" },
  { name: "API Integration", icon: "🔌", category: "Backend" },

  // Database
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "MySQL", icon: "🐬", category: "Database" },

  // Cloud
  { name: "AWS EC2", icon: "☁️", category: "Cloud" },
  { name: "AWS S3", icon: "🪣", category: "Cloud" },
  { name: "Oracle OCI", icon: "🔴", category: "Cloud" },
  { name: "CI/CD (Basic)", icon: "🔄", category: "Cloud" },
  { name: "Vercel", icon: "▲", category: "Cloud" },

  // Tools
  { name: "Git & GitHub", icon: "🐙", category: "Tools" },
  { name: "VS Code", icon: "💻", category: "Tools" },
  { name: "Postman", icon: "📮", category: "Tools" },
  { name: "XAMPP", icon: "🖥️", category: "Tools" },

  // Methodologies
  { name: "Agile", icon: "🔁", category: "Methodologies" },
  { name: "SDLC", icon: "📊", category: "Methodologies" },
];

const tabs = ["All", "Frontend", "Backend", "Database", "Cloud", "Tools", "Methodologies"];

const tabColors: Record<string, string> = {
  All: "bg-indigo-600 text-white border-indigo-600",
  Frontend: "bg-blue-600 text-white border-blue-600",
  Backend: "bg-green-600 text-white border-green-600",
  Database: "bg-orange-600 text-white border-orange-600",
  Cloud: "bg-yellow-500 text-white border-yellow-500",
  Tools: "bg-purple-600 text-white border-purple-600",
  Methodologies: "bg-pink-600 text-white border-pink-600",
};

const pillColors: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  Backend: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  Database: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100",
  Cloud: "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100",
  Tools: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
  Methodologies: "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100",
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? allSkills
    : allSkills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-lg">Technologies that drive my solutions</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeTab === tab
                  ? tabColors[tab]
                  : "bg-white text-gray-500 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {tab}
              {tab !== "All" && (
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab ? "bg-white/20" : "bg-gray-100 text-gray-400"
                }`}>
                  {allSkills.filter((s) => s.category === tab).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Skill Count */}
        <div className="text-center mb-8">
          <span className="text-sm text-gray-400">
            Showing <strong className="text-indigo-600">{filtered.length}</strong> skills
            {activeTab !== "All" && ` in ${activeTab}`}
          </span>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {filtered.map((skill) => (
            <span
              key={skill.name}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 cursor-default ${
                pillColors[skill.category]
              }`}
            >
              <span className="text-base">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default Skills;
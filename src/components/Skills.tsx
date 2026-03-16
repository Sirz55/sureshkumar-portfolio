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
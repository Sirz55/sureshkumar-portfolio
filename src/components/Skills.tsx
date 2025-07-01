import {
  Code2,
  Server,
  Cloud,
  Database,
  Wrench,
  FileCode,
  Paintbrush2,
  Zap,
  Atom,
  SquareStack,
  TreeDeciduous,
  Network,
  CodeSquare,
  BookUser,
  Flower2,
  CloudSun,
  CloudCog,
  Shuffle,
  Leaf
} from "lucide-react";

import { Card } from "@/components/ui/card";

// Icon mapping for each skill
const skillIcons: Record<string, JSX.Element> = {
  // Frontend
  HTML: <FileCode className="w-4 h-4 mr-2 text-orange-500" />,
  CSS: <Paintbrush2 className="w-4 h-4 mr-2 text-sky-500" />,
  JavaScript: <Zap className="w-4 h-4 mr-2 text-yellow-500" />,
  "React.js": <Atom className="w-4 h-4 mr-2 text-cyan-500" />,
  "Next.js": <SquareStack className="w-4 h-4 mr-2 text-gray-800" />,

  // Backend
  "Node.js": <TreeDeciduous className="w-4 h-4 mr-2 text-green-700" />,
  "Express.js": <Network className="w-4 h-4 mr-2 text-zinc-600" />,
  PHP: <CodeSquare className="w-4 h-4 mr-2 text-indigo-500" />,
  WordPress: <BookUser className="w-4 h-4 mr-2 text-blue-700" />,
  "Spring Boot": <Flower2 className="w-4 h-4 mr-2 text-green-600" />,

  // Cloud
  "AWS (EC2)": <CloudSun className="w-4 h-4 mr-2 text-orange-400" />,
  "Oracle Cloud Infrastructure (OCI)": <CloudCog className="w-4 h-4 mr-2 text-red-600" />,

  // Dev Tools
  "Apache Kafka": <Shuffle className="w-4 h-4 mr-2 text-purple-600" />,

  // Databases
  MongoDB: <Leaf className="w-4 h-4 mr-2 text-green-700" />,
  MySQL: <Database className="w-4 h-4 mr-2 text-teal-600" />
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "PHP", "WordPress", "Spring Boot"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS (EC2)", "Oracle Cloud Infrastructure (OCI)"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Dev Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Apache Kafka"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
           Technologies that drive my solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-xl bg-white/70 backdrop-blur-md group rounded-3xl hover:shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r ${category.color} text-white mb-4 transition-transform duration-300 transform group-hover:scale-110 shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 tracking-wide">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-center p-3 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center text-gray-700 font-medium">
                      {skillIcons[skill]}
                      <span>{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

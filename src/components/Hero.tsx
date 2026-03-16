
// import { Button } from "@/components/ui/button";
// import { ArrowDown, Mail, FileText, Github, Linkedin } from "lucide-react";

// const Hero = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
//         <div className="absolute top-1/3 right-20 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-md animate-pulse delay-500"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left side - Content */}
//           <div className="space-y-8 animate-fade-in">
//             <div className="space-y-6">
              
              
//               <h1 className="text-6xl lg:text-6xl font-black text-gray-900 leading-tight">
//                 Hi, I'm
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient">
//                   Sureshkumar M
//                 </span>
//               </h1>
              
//               <p className="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed">
//                 Software Engineer | MERN Stack | WordPress | AWS Cloud | Apache Kafka | Next.js
//               </p>
              
//               <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
//                 Building digital experiences that matter.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4">
           
// <a 
//   href="/Sureshkumar-M-Resume.pdf" 
//   target="_blank" 
//   rel="noopener noreferrer"
// >
//   <Button 
//     size="lg"
//     className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//   >
//     <FileText className="mr-2 h-5 w-5" />
//     Download Resume
//   </Button>
// </a>
//               <Button 
//                 variant="outline" 
//                 size="lg"
//                 onClick={() => scrollToSection("contact")}
//                 className="px-8 py-4 rounded-2xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 backdrop-blur-sm bg-white/50"
//               >
//                 <Mail className="mr-2 h-5 w-5" />
//                 Let's Talk
//               </Button>
//             </div>

//              {/* Social Links */}
// <div className="flex gap-4 pt-6">
//   <a
//     href="https://linkedin.com/in/sureshkumar-m-77424723a"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group p-3 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
//   >
//     <Linkedin className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform duration-300" />
//   </a>
//   <a
//     href="https://github.com/Sirz55"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group p-3 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
//   >
//     <Github className="w-5 h-5 text-gray-800 group-hover:scale-110 transition-transform duration-300" />
//   </a>
// </div>
//           </div>

//           {/* Right side - Profile Image */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               <div className="w-80 h-80 lg:w-90 lg:h-full relative">
//                 {/* Background decorative elements */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-3xl rotate-6 shadow-2xl"></div>
//                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 via-blue-500 to-purple-600 rounded-3xl -rotate-6 shadow-xl opacity-80"></div>
                
//                 {/* Profile image container with square mask */}
//           <div className="relative w-full h-full rounded-full flex items-center justify-center shadow-xl border-2 border-white overflow-hidden">

//   <img 
//     src="https://i.postimg.cc/GhFkpVm9/Sureshkumar-Image.jpg" 
//     alt="Sureshkumar M - Software Engineer"
//     className="w-full h-full object-cover object-center"
//   />
// </div>

//               </div>
              
        
              
//             </div>
//           </div>
//         </div>

        
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
 
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-indigo-50"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
 
          {/* Left Side - Text */}
          <div className="space-y-6">
 
            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Open to Full-Time Roles — Immediate Joiner
            </div>
 
            {/* Name */}
            <div>
              <p className="text-gray-500 text-lg mb-1">Hi, I'm</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">
                Sureshkumar M
              </h1>
              <h2 className="text-xl font-medium text-indigo-600">
                Full Stack Developer | MERN Stack | WordPress | AWS Cloud | Next.js
              </h2>
            </div>
 
            {/* Impact Metrics */}
            <div className="flex gap-6">
              <div>
                <div className="text-2xl font-bold text-indigo-600">40%</div>
                <div className="text-xs text-gray-500">Data Entry Reduced</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div>
                <div className="text-2xl font-bold text-purple-600">15%</div>
                <div className="text-xs text-gray-500">AWS Cost Cut</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div>
                <div className="text-2xl font-bold text-green-600">25%</div>
                <div className="text-xs text-gray-500">Efficiency Improved</div>
              </div>
            </div>
 
            {/* Tagline */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Building scalable, production-ready web applications using{" "}
              <strong>React.js, Next.js, Node.js, WordPress</strong> and{" "}
              <strong>AWS</strong> — with real measurable impact.
            </p>
 
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/Sureshkumar-M-Resume.pdf" download>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="px-6 py-3 rounded-xl gap-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50">
                  <Mail className="w-4 h-4" />
                  Let's Talk
                </Button>
              </a>
            </div>
 
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/sureshkumar-m-77424723a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Sirz55"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
 
          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl opacity-30"></div>
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://i.postimg.cc/GhFkpVm9/Sureshkumar-Image.jpg" 
                  alt="Sureshkumar M"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
                <div className="text-lg font-bold text-indigo-600">1+</div>
                <div className="text-xs text-gray-500">Years Exp.</div>
              </div>
              
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};
 
export default Hero;
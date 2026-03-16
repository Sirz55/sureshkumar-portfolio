// import { Card } from "@/components/ui/card";
// import { GraduationCap, Trophy, MapPin, Briefcase, Mail } from "lucide-react";

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">About Me</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">

//           {/* Left side - Bio */}
//           <div className="space-y-6">

//             <h3 className="text-2xl font-semibold text-gray-800">
//               Full Stack Developer — Open to Work 🟢
//             </h3>

//             <p className="text-gray-600 leading-relaxed text-lg">
//               Full Stack Developer with{" "}
//               <strong>1+ year of professional experience</strong> at{" "}
//               <strong>NearTekPod, Trichy</strong> — building and deploying
//               production-ready web applications using{" "}
//               <strong>React.js, Next.js, Node.js, WordPress, PHP</strong> and{" "}
//               <strong>AWS</strong>.
//             </p>

//             <p className="text-gray-600 leading-relaxed text-lg">
//               Delivered real, measurable impact in production:
//             </p>

//             {/* Impact Metrics */}
//             <div className="grid grid-cols-3 gap-4">
//               <div className="bg-indigo-50 rounded-xl p-4 text-center border border-indigo-100">
//                 <div className="text-2xl font-bold text-indigo-600">40%</div>
//                 <div className="text-xs text-gray-500 mt-1">Data Entry Reduced</div>
//               </div>
//               <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100">
//                 <div className="text-2xl font-bold text-purple-600">15%</div>
//                 <div className="text-xs text-gray-500 mt-1">AWS Cost Cut</div>
//               </div>
//               <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
//                 <div className="text-2xl font-bold text-green-600">25%</div>
//                 <div className="text-xs text-gray-500 mt-1">Efficiency Improved</div>
//               </div>
//             </div>

//             <p className="text-gray-600 leading-relaxed text-lg">
//               Passionate about building clean, scalable solutions and delivering
//               real value. Currently{" "}
//               <strong>open to full-time roles</strong> across India — on-site,
//               remote or hybrid.
//             </p>

//             {/* Quick Info */}
//             <div className="space-y-3 pt-2">
//               <div className="flex items-center gap-3 text-gray-600">
//                 <Briefcase className="w-4 h-4 text-indigo-500 flex-shrink-0" />
//                 <span><strong>Company:</strong> NearTekPod, Trichy</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-600">
//                 <MapPin className="w-4 h-4 text-indigo-500 flex-shrink-0" />
//                 <span><strong>Location:</strong> Trichy, Tamil Nadu, India</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-600">
//                 <Mail className="w-4 h-4 text-indigo-500 flex-shrink-0" />
//                 <span><strong>Email:</strong> sureshmurugan919@gmail.com</span>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Cards */}
//           <div className="space-y-5">

//             {/* Experience Card */}
//             <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-indigo-100 p-3 rounded-full shadow-sm flex-shrink-0">
//                   <Briefcase className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 mb-1">
//                     Associate Software Engineer
//                   </h4>
//                   <p className="text-gray-600 mb-1">NearTekPod, Trichy</p>
//                   <p className="text-sm text-gray-500 mb-3">Feb 2024 – Mar 2025</p>
//                   <div className="flex flex-wrap gap-2">
//                     {["React.js", "Next.js", "Node.js", "WordPress", "AWS", "PHP"].map((tech) => (
//                       <span key={tech} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full border border-indigo-100">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Education Card */}
//             <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-indigo-100 p-3 rounded-full shadow-sm flex-shrink-0">
//                   <GraduationCap className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 mb-2">
//                     B.E — Electronics and Communication Engineering
//                   </h4>
//                   <p className="text-gray-600 mb-1">
//                     K.Ramakrishnan College of Engineering (Autonomous), Trichy
//                   </p>
//                   <p className="text-sm text-gray-500">2019 – 2023</p>
//                   <div className="flex items-center mt-2">
//                     <Trophy className="w-4 h-4 text-orange-500 mr-2" />
//                     <span className="text-orange-600 font-medium">CGPA: 8.70</span>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Certifications Card */}
//             <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-yellow-100 p-3 rounded-full shadow-sm flex-shrink-0">
//                   <Trophy className="w-6 h-6 text-yellow-600" />
//                 </div>
//                 <div className="w-full">
//                   <h4 className="font-semibold text-gray-800 mb-3">Certifications</h4>
//                   <div className="space-y-2">
//                     {[
//                       { color: "bg-red-500", text: "Oracle Cloud Infrastructure (OCI) Foundation — Oracle" },
//                       { color: "bg-green-500", text: "MERN Stack Development — Simplilearn" },
//                       { color: "bg-orange-500", text: "AWS Cloud Basics — Simplilearn" },
//                       { color: "bg-purple-500", text: "PHP Fundamentals — Simplilearn" },
//                     ].map((cert) => (
//                       <div key={cert.text} className="flex items-center gap-2">
//                         <span className={`w-2 h-2 ${cert.color} rounded-full flex-shrink-0`}></span>
//                         <span className="text-sm text-gray-600">{cert.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Card>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import { Card } from "@/components/ui/card";
import { GraduationCap, Trophy, MapPin, Briefcase, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left side - Bio */}
          <div className="space-y-6">

            <h3 className="text-2xl font-semibold text-gray-800">
              Full Stack Developer — Open to Work 🟢
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              Full Stack Developer with{" "}
              <strong>1+ year of professional experience</strong> at{" "}
              <strong>NearTekPod, Trichy</strong> — building and deploying
              production-ready web applications using{" "}
              <strong>React.js, Next.js, Node.js, WordPress, PHP</strong> and{" "}
              <strong>AWS</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Delivered real, measurable impact in production:
            </p>

            {/* Impact Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-indigo-50 rounded-xl p-4 text-center border border-indigo-100">
                <div className="text-2xl font-bold text-indigo-600">40%</div>
                <div className="text-xs text-gray-500 mt-1">Data Entry Reduced</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">15%</div>
                <div className="text-xs text-gray-500 mt-1">AWS Cost Cut</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                <div className="text-2xl font-bold text-green-600">25%</div>
                <div className="text-xs text-gray-500 mt-1">Efficiency Improved</div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Passionate about building clean, scalable solutions and delivering
              real value. Currently{" "}
              <strong>open to full-time roles</strong> across India — on-site,
              remote or hybrid.
            </p>

            {/* Quick Info */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-600">
                <Briefcase className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span><strong>Company:</strong> NearTekPod </span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span><strong>Location:</strong> Tiruchirappalli, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span><strong>Email:</strong> sureshmurugan919@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="space-y-5">

            {/* Experience Card */}
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full shadow-sm flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Associate Software Engineer
                  </h4>
                  <p className="text-gray-600 mb-1">NearTekPod, Tiruchirappalli</p>
                  <p className="text-sm text-gray-500 mb-3">Feb 2024 – Mar 2025</p>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Next.js", "Node.js", "WordPress", "AWS", "PHP"].map((tech) => (
                      <span key={tech} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full border border-indigo-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Education Card */}
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full shadow-sm flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    B.E — Electronics and Communication Engineering
                  </h4>
                  <p className="text-gray-600 mb-1">
                    K.Ramakrishnan College of Engineering (Autonomous), Tiruchirappalli
                  </p>
                  <p className="text-sm text-gray-500">2019 – 2023</p>
                  <div className="flex items-center mt-2">
                    <Trophy className="w-4 h-4 text-orange-500 mr-2" />
                    <span className="text-orange-600 font-medium">CGPA: 8.70</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Certifications Card */}
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full shadow-sm flex-shrink-0">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="w-full">
                  <h4 className="font-semibold text-gray-800 mb-3">Certifications</h4>
                  <div className="space-y-2">
                    {[
                      { color: "bg-red-500", text: "Oracle Cloud Infrastructure (OCI) Foundation — Oracle" },
                      { color: "bg-green-500", text: "MERN Stack Development — Simplilearn" },
                      { color: "bg-orange-500", text: "AWS Cloud Basics — Simplilearn" },
                      { color: "bg-purple-500", text: "PHP Fundamentals — Simplilearn" },
                    ].map((cert) => (
                      <div key={cert.text} className="flex items-center gap-2">
                        <span className={`w-2 h-2 ${cert.color} rounded-full flex-shrink-0`}></span>
                        <span className="text-sm text-gray-600">{cert.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
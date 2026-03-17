
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";
 
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-purple-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
 
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
 
          {/* Left Side */}
          <div className="space-y-5">
 
            {/* Open to Work + Location */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Open to Work — Immediate Joiner
              </div>
              <div className="inline-flex items-center gap-1.5 text-gray-500 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                Tiruchirappalli, Tamil Nadu
              </div>
            </div>
 
            {/* Name & Title */}
            <div>
              <p className="text-gray-500 text-base leading-relaxed max-w-md ">Hi there, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
                Sureshkumar M<span className="text-indigo-20"></span>
              </h1>
              <div className="flex flex-wrap gap-2">
                {["Full Stack Developer", "MERN Stack", "WordPress", "AWS"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
 
            {/* Tagline */}
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Building scalable, production-ready web applications using{" "}
              <strong className="text-gray-700">MERN Stack, WordPress, PHP</strong>{" "}
              and <strong className="text-gray-700">AWS</strong> — with real measurable impact.
            </p>
 
            {/* Impact Metrics */}
            <div className="flex items-center gap-5 py-3 px-5 bg-white rounded-2xl border border-gray-100 shadow-sm w-fit">
              <div className="text-center">
                <div className="text-xl font-bold text-indigo-600">40%</div>
                <div className="text-xs text-gray-400 mt-0.5">Data Entry ↓</div>
              </div>
              <div className="w-px h-8 bg-gray-100"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-600">15%</div>
                <div className="text-xs text-gray-400 mt-0.5">AWS Cost ↓</div>
              </div>
              <div className="w-px h-8 bg-gray-100"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">25%</div>
                <div className="text-xs text-gray-400 mt-0.5">Efficiency ↑</div>
              </div>
            </div>
 
            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="/Sureshkumar-M-Resume.pdf" download>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl gap-2 shadow-md shadow-indigo-200">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="px-6 py-2.5 rounded-xl gap-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  Let's Talk
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
 
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-gray-400 font-medium">Find me on</span>
              <div className="w-8 h-px bg-gray-200"></div>
              <a
                href="https://linkedin.com/in/sureshkumar-m-77424723a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Sirz55"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:sureshmurugan919@gmail.com"
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
 
          </div>
 
          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
 
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl opacity-15 blur-2xl"></div>
 
              {/* Photo card */}
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl border border-gray-100">
                <div className="w-72 h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://i.postimg.cc/GhFkpVm9/Sureshkumar-Image.jpg"
                    alt="Sureshkumar M"
                    className="w-full h-full object-cover"
                  />
                </div>
 
                {/* Floating name card */}
               
              </div>
 
              {/* Floating exp badge */}
              <div className="absolute -top-3 -left-3 bg-indigo-600 text-white rounded-2xl shadow-lg px-3 py-2 text-center">
                <div className="text-lg font-bold">1+</div>
                <div className="text-xs opacity-80">Yrs Exp</div>
              </div>
 
              {/* Floating cert badge */}
               
 
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};
 
export default Hero;
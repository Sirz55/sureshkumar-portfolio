import { Card } from "@/components/ui/card";
import { GraduationCap, Trophy, School } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Passionate Software Engineer
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
  Software Engineer with 1+ years of experience building scalable web applications using the MERN stack, Next.js, WordPress customization, and PHP. 
  Skilled in AWS cloud services, Apache Kafka, and the hospitality domain, with a basic understanding of Java and Spring Boot.
</p>
<p className="text-gray-600 leading-relaxed text-lg">
  I'm passionate about solving complex problems and driving team success through innovative solutions. 
</p>
          </div>

          {/* Right side - Education Cards */}
          <div className="space-y-6">
            {/* College */}
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full shadow-sm">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    B.E - Electronics and Communication Engineering
                  </h4>
                  <p className="text-gray-600 mb-1">
                    K.Ramakrishnan College of Engineering (Autonomous),Trichy
                  </p>
                  <p className="text-sm text-gray-500">2019 - 2023</p>
                  <div className="flex items-center mt-2">
                    <Trophy className="w-4 h-4 text-orange-500 mr-2" />
                    <span className="text-orange-600 font-medium">CGPA: 8.70</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* School
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full shadow-sm">
                  <School className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Higher Secondary Education
                  </h4>
                  <p className="text-gray-600 mb-1">
                    SRV Matriculation Higher Secondary School
                  </p>
                  <p className="text-sm text-gray-500">2018 - 2019</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="flex items-center text-sm text-amber-700">
                      <Trophy className="w-4 h-4 text-amber-500 mr-1" />
                      <span className="font-medium">HSC: 69%</span>
                    </span>
                    <span className="flex items-center text-sm text-amber-700">
                      <Trophy className="w-4 h-4 text-amber-500 mr-1" />
                      <span className="font-medium">SSLC: 93%</span>
                    </span>
                  </div>
                </div>
              </div>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
// import { useState } from "react";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_7tuq5ce",
//         "template_hwmyu6d",
//         formData,
//         "VCS-NfNG3TQQmkrE-"
//       )
//       .then((response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("✅ Message sent successfully!");
//         setFormData({ name: "", email: "", subject: "", message: "" });
//       })
//       .catch((err) => {
//         console.error("FAILED...", err);
//         alert("❌ Failed to send message. Please try again.");
//       });
//   };

//   const contactInfo = [
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: "Location",
//       details: "Tiruchirappalli, TamilNadu, India",
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: "Phone",
//       details: "+91 9487092075",
//       gradient: "from-green-500 to-emerald-500"
//     },
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: "Email",
//       details: "sureshmurugan919@gmail.com",
//       gradient: "from-orange-500 to-red-500"
//     },
//     {
//       icon: <Linkedin className="w-6 h-6" />,
//       title: "LinkedIn",
//       details: "linkedin.com/in/sureshkumar-m-77424723a",
//       gradient: "from-purple-500 to-pink-500"
//     }
//   ];

//   return (
//     <section id="contact" className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
//           <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
//             Ready to start? Let's discuss how we can work together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
//               <div className="grid sm:grid-cols-2 gap-6">
//                 {contactInfo.map((info, index) => (
//                   <Card
//                     key={index}
//                     className="p-6 border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl"
//                   >
//                     <div className="flex items-center space-x-4">
//                       <div className={`p-3 rounded-full bg-gradient-to-r ${info.gradient} text-white shadow-md`}>
//                         {info.icon}
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-800 text-lg">{info.title}</h4>
//                         <p className="text-gray-600 text-sm break-words">{info.details}</p>
//                       </div>
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
//             <Card className="p-8 shadow-xl border border-gray-100 rounded-2xl">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid sm:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                     <Input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Your Name"
//                       className="focus:ring-2 focus:ring-indigo-500 transition-all"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                     <Input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="your.email@example.com"
//                       className="focus:ring-2 focus:ring-indigo-500 transition-all"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                   <Input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     placeholder=""
//                     className="focus:ring-2 focus:ring-indigo-500 transition-all"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                   <Textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder=""
//                     rows={5}
//                     className="focus:ring-2 focus:ring-indigo-500 transition-all"
//                     required
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl transition-all duration-300 text-lg font-medium"
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </Card>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="text-center mt-20 text-sm text-gray-500 -t pt-6 px-4">
//         <p>© {new Date().getFullYear()} Sureshkumar M. All rights reserved.</p>
        
//       </div>
      
//     </section>
//   );
// };

// export default Contact;


import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [sending, setSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_7tuq5ce",
        "template_hwmyu6d",
        formData,
        "VCS-NfNG3TQQmkrE-"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("✅ Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSending(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("❌ Failed to send message. Please try again.");
        setSending(false);
      });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      details: "Tiruchirappalli, Tamil Nadu, India",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: "+91 9487092075",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: "sureshmurugan919@gmail.com",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      details: "linkedin.com/in/sureshkumar-m-77424723a",
      gradient: "from-blue-600 to-indigo-500",
      link: "https://linkedin.com/in/sureshkumar-m-77424723a"
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      details: "github.com/Sirz55",
      gradient: "from-gray-700 to-gray-900",
      link: "https://github.com/Sirz55"
    }
  ];

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            I'm currently <strong>open to full-time roles</strong> — feel free to reach out
            for opportunities, collaborations, or just a chat!
          </p>

          {/* Open to Work Banner */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-5 py-2 rounded-full text-sm font-medium mt-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for Full-Time Roles — Immediate Joiner
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-5 border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-2xl cursor-pointer"
                  onClick={() => info.link && window.open(info.link, "_blank")}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${info.gradient} text-white shadow-md flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm">{info.title}</h4>
                      <p className="text-gray-500 text-xs break-words leading-relaxed">{info.details}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Preferred Roles */}
            <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-3 text-sm">Open To These Roles</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack Developer",
                  "Data Analyst",
                  "Prompt Engineer",
                  "Functional Consultant",
                  "Business Analyst",
                  "AI Tools Trainer"
                ].map((role) => (
                  <span
                    key={role}
                    className="text-xs bg-white text-indigo-600 border border-indigo-200 px-3 py-1.5 rounded-lg font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
  {[
    { label: "Pan India", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { label: "Remote", color: "bg-green-50 text-green-600 border-green-200" },
    { label: "Hybrid", color: "bg-purple-50 text-purple-600 border-purple-200" },
    { label: "On-site", color: "bg-orange-50 text-orange-600 border-orange-200" },
  ].map((item) => (
    <span
      key={item.label}
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${item.color}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
      {item.label}
    </span>
  ))}
</div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            <Card className="p-8 shadow-xl border border-gray-100 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="focus:ring-2 focus:ring-indigo-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="focus:ring-2 focus:ring-indigo-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Job Opportunity / Collaboration / Project"
                    className="focus:ring-2 focus:ring-indigo-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hi Sureshkumar, I'd like to discuss a Full Stack Developer opportunity..."
                    rows={5}
                    className="focus:ring-2 focus:ring-indigo-500 transition-all"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl transition-all duration-300 text-base font-medium"
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sureshkumar M. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://linkedin.com/in/sureshkumar-m-77424723a" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/Sirz55" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="mailto:sureshmurugan919@gmail.com"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
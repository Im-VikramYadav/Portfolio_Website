
import { Award, BadgeCheck } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Aug 2024",
      icon: <Award className="text-[#FF9900]" size={32} />,
    },
    {
      title: "DevOps Master",
      issuer: "Digital Lync Pvt Ltd",
      date: "Jun 2023",
      icon: <BadgeCheck className="text-[#00A4EF]" size={32} />,
    },
    {
      title: "Google IT Support Specialization",
      issuer: "Google Career Certification",
      date: "Dec 2022",
      icon: <BadgeCheck className="text-[#4285F4]" size={32} />,
    },
    {
      title: "Master in Networking Admin (MNA+Cloud V1)",
      issuer: "Jetking Learning Centre",
      date: "Jun 2018",
      icon: <BadgeCheck className="text-[#00A550]" size={32} />,
    },
    {
      title: "MTA – Windows Operating System Fundamentals",
      issuer: "Microsoft",
      date: "Jul 2017",
      icon: <BadgeCheck className="text-[#00A4EF]" size={32} />,
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass p-6 rounded-lg hover-lift hover-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full glass">{cert.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gradient">{cert.title}</h3>
                  <p className="text-primary mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">Issued {cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

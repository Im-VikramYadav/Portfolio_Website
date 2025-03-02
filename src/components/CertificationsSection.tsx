
import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Aug 2024",
      badge: "/lovable-uploads/3f48b6e6-5f06-48c1-b5dd-b67e92f251f3.png",
      alt: "AWS Cloud Quest Badge"
    },
    {
      title: "DevOps Master",
      issuer: "Digital Lync Pvt Ltd",
      date: "Jun 2023",
      badge: "/lovable-uploads/e606df4a-fbf4-49ef-96b5-75ebb99a0cfc.png",
      alt: "DevOps Master Badge"
    },
    {
      title: "Google IT Support Specialization",
      issuer: "Google Career Certification",
      date: "Dec 2022",
      badge: "/lovable-uploads/fc46fe84-24dd-4a2b-bfe9-e2598856dcba.png",
      alt: "Google IT Support Badge"
    },
    {
      title: "Master in Networking Admin (MNA+Cloud V1)",
      issuer: "Jetking Learning Centre",
      date: "Jun 2018",
      badge: "/lovable-uploads/2d6dc8b6-4195-4d1c-9f15-9cb7010ed201.png",
      alt: "Jetking Badge"
    },
    {
      title: "MTA – Windows Operating System Fundamentals",
      issuer: "Microsoft",
      date: "Jul 2017",
      badge: "/lovable-uploads/d8131f29-5206-4acc-926c-494e28134a66.png",
      alt: "Microsoft MTA Badge"
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
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src={cert.badge} 
                    alt={cert.alt} 
                    className="h-16 w-auto object-contain"
                  />
                </div>
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

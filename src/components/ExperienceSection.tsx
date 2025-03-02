
const ExperienceSection = () => {
  const experiences = [
    {
      period: "May 2024 - Oct 2024",
      role: "DevOps Intern",
      company: "Digital Lync Pvt Ltd",
      location: "Hyderabad, Telangana",
      description: [
        "Assisted in deploying and maintaining cloud infrastructure on AWS and Azure platforms",
        "Supported CI/CD pipeline implementation using GitHub Actions",
        "Monitored system performance and analysed logs using AWS CloudWatch"
      ],
    },
    {
      period: "Sep 2020 - Mar 2024",
      role: "Site Engineer (Technology)",
      company: "Mintbook (K-Nomic Techno Solutions Pvt Ltd)",
      location: "Bangalore",
      description: [
        "Managed servers, network devices, and user accounts for optimal system performance",
        "Configured Active Directory Domain Services (ADDS), DHCP, and DNS servers",
        "Provided remote technical support and handled client communications",
        "Performed network infrastructure setup and maintenance"
      ],
    },
    {
      period: "May 2016 - Jul 2020",
      role: "Technical Support Engineer",
      company: "Ekashila Group of Institutions",
      location: "Warangal, Huzurabad – Telangana",
      description: [
        "Managed hardware maintenance and network connectivity issues",
        "Handled system updates, patches, and software installations",
        "Provided user support and maintained technical documentation",
        "Created reports using MS Office Suite"
      ],
    },
  ];

  const volunteerExperience = {
    period: "Jul 2024 - Present",
    role: "Active Member",
    organization: "NextWork Community",
    link: "https://www.nextwork.org/",
    description: [
      "Member of Cloud & AI Learner community",
      "Actively completed 35 Cloud Projects",
      "Collaborate with peers on cloud implementation best practices"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 last:mb-0 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div 
                className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary transform -translate-x-[3px] animate-scale-in" 
                style={{ animationDelay: `${index * 200 + 100}ms` }} 
              />
              <div 
                className="glass p-6 rounded-lg hover-lift hover-glow transition-all duration-300 animate-fade-in animate-delayed"
                style={{ animationDelay: `${index * 200 + 200}ms` }}
              >
                <div className="text-sm text-muted-foreground mb-2">{exp.period}</div>
                <h3 className="text-xl font-semibold mb-2 text-gradient">{exp.role}</h3>
                <div className="text-primary mb-2">{exp.company}</div>
                <div className="text-sm text-muted-foreground mb-4">{exp.location}</div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="pl-2">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Volunteer Experience Section */}
        <h2 className="text-3xl font-bold text-center my-16 animate-fade-in">Volunteer Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div
            className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary/20 animate-fade-in"
          >
            <div 
              className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary transform -translate-x-[3px] animate-scale-in" 
            />
            <div 
              className="glass p-6 rounded-lg hover-lift hover-glow transition-all duration-300 animate-fade-in animate-delayed"
            >
              <div className="text-sm text-muted-foreground mb-2">{volunteerExperience.period}</div>
              <h3 className="text-xl font-semibold mb-2 text-gradient">{volunteerExperience.role}</h3>
              <div className="text-primary mb-4">
                <a 
                  href={volunteerExperience.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {volunteerExperience.organization}
                </a>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {volunteerExperience.description.map((point, idx) => (
                  <li key={idx} className="pl-2">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


import { Cloud, Terminal, GitBranch, Monitor } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: <Cloud size={40} />,
      title: "Cloud & Infrastructure",
      description: "AWS, Azure, Windows Server, Active Directory (ADDS)",
    },
    {
      icon: <Terminal size={40} />,
      title: "Automation & DevOps",
      description: "PowerShell, Bash, Python, GitHub Actions, Docker",
    },
    {
      icon: <GitBranch size={40} />,
      title: "Monitoring & Support",
      description: "AWS CloudWatch, Remote Support Tools, Troubleshooting",
    },
    {
      icon: <Monitor size={40} />,
      title: "Network Administration",
      description: "IP Configuration, DHCP, DNS, Network Cabling",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 glass rounded-lg hover:translate-y-[-4px] transition-transform"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

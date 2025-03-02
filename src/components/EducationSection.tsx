
const EducationSection = () => {
  const education = {
    degree: "B. Tech CSE",
    university: "Andhra University",
    graduationYear: "2016"
  };

  return (
    <section id="education" className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="glass p-8 rounded-lg hover-lift hover-glow transition-all duration-300 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">{education.degree}</h3>
            <div className="mb-2 text-lg text-primary">{education.university}</div>
            <div className="text-muted-foreground">Graduated: {education.graduationYear}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

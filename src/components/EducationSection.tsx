
import React from 'react';
import { BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = {
    degree: "B. Tech CSE",
    university: "Andhra University",
    graduationYear: "2016"
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in flex items-center justify-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-gradient">Education</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="cinematic-card p-8 rounded-xl border border-primary/20 shadow-lg hover-lift hover-glow transition-all duration-300 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gradient">{education.degree}</h3>
                <div className="mb-2 text-lg text-primary font-medium">{education.university}</div>
              </div>
              <div className="flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">
                Class of {education.graduationYear}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/10">
              <div className="text-muted-foreground italic">
                Computer Science and Engineering specialization with focus on software development and systems design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

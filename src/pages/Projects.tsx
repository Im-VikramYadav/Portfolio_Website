
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

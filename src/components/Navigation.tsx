
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';
import { useTheme } from './theme-provider';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  
  // Using a local fallback image for the logo since the uploaded one isn't loading
  const darkLogo = "/lovable-uploads/63733ed1-8711-44f9-bd87-ee7f34b75ff1.png"; // Using another uploaded image as fallback
  const lightLogo = "/lovable-uploads/b1141f02-27a7-4bed-b17f-f3337f0ff8a1.png";
  
  const logoSrc = theme === 'dark' ? darkLogo : lightLogo;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logoSrc} 
              alt="Vikram Logo" 
              className="h-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error("Failed to load image:", target.src);
                // Use text as fallback
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-text')) {
                  const fallbackText = document.createElement('span');
                  fallbackText.textContent = "Vikram";
                  fallbackText.className = "text-xl font-bold fallback-text";
                  parent.appendChild(fallbackText);
                }
              }}
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {isHome ? (
              <>
                <a href="#bio" className="hover:text-primary transition-colors">Bio</a>
                <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
                <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                <ThemeToggle />
              </>
            ) : (
              <>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                <ThemeToggle />
              </>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass mt-2 py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {isHome ? (
              <>
                <a href="#bio" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Bio</a>
                <a href="#experience" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#certifications" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Certifications</a>
                <a href="#skills" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <Link to="/projects" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </>
            ) : (
              <>
                <Link to="/" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/projects" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

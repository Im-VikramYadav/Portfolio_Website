
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="glass p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="w-5 h-5" />
                <a href="mailto:puttivikramyadav16@gmail.com" className="hover:text-primary transition-colors">
                  puttivikramyadav16@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Linkedin className="w-5 h-5" />
                <a 
                  href="https://www.linkedin.com/in/vikram-yadav-167383206/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Vikram Yadav
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Github className="w-5 h-5" />
                <a 
                  href="https://github.com/Im-VikramYadav" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Im-VikramYadav
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <MapPin className="w-5 h-5" />
                <span>Nalgonda, Telangana</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/contact">
                <Button>Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

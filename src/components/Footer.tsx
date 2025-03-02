
import { useState, useEffect } from 'react';
import ColorWheel from './ColorWheel';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem('visitorCount') || '0';
    const newCount = parseInt(savedCount) + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitorCount(newCount);
  }, []);

  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 CloudPro. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <div className="glass px-4 py-2 rounded-full text-sm animate-fade-in">
              👥 Visitors: {visitorCount}
            </div>
            <ColorWheel />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

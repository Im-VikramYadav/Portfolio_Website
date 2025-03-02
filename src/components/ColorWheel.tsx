
import { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';

const ColorWheel = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState('#000000');

  const handleColorChange = (newColor: any) => {
    setColor(newColor.hex);
    document.documentElement.style.setProperty('--primary', newColor.hex);
    localStorage.setItem('userThemeColor', newColor.hex);
  };

  useEffect(() => {
    const savedColor = localStorage.getItem('userThemeColor');
    if (savedColor) {
      setColor(savedColor);
      document.documentElement.style.setProperty('--primary', savedColor);
    }
  }, []);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setShowPicker(!showPicker)}
        className="rounded-full"
      >
        <Settings className="h-4 w-4" />
      </Button>
      
      {showPicker && (
        <div className="absolute bottom-full right-0 mb-2 z-50">
          <div 
            className="fixed inset-0" 
            onClick={() => setShowPicker(false)}
          />
          <div className="relative z-50">
            <ChromePicker
              color={color}
              onChange={handleColorChange}
              disableAlpha={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorWheel;

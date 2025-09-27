import { Phone } from "lucide-react";
import telinkouLogo from "@/assets/telinkom-logo.jpg";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src={telinkouLogo} 
              alt="TelinCom" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2 text-darkText">
              <Phone className="h-4 w-4 text-neonGreen" />
              <a 
                href="tel:+74957755006" 
                className="hover:text-neonGreen transition-colors font-medium"
              >
                +7 (495) 775-50-06
              </a>
            </div>
            
            <div className="hidden md:block text-sm text-muted-foreground">
              Нагорное Шоссе 2
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
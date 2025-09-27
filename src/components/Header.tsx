import { Phone, User } from "lucide-react";
import telinkouLogo from "@/assets/telinkom-logo.jpg";
import { Button } from "@/components/ui/button";

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
            
            <Button 
              variant="outline" 
              size="sm"
              className="border-neonGreen/20 text-darkText hover:bg-neonGreen/10 hover:text-neonGreen hover:border-neonGreen/40"
              onClick={() => window.open('/cabinet', '_blank')}
            >
              <User className="h-4 w-4 mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
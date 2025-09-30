import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-darkText mb-4">TelinCom</h3>
            <p className="text-muted-foreground mb-4">
              ООО "Современные технологии"
            </p>
            <p className="text-muted-foreground mb-4">
              Надежные телекоммуникационные услуги для дома и бизнеса. 
              Современные технологии и качественный сервис.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-darkText mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-neonGreen flex-shrink-0" />
                <a 
                  href="tel:+74957755006" 
                  className="text-muted-foreground hover:text-neonGreen transition-colors"
                >
                  +7 (495) 775-50-06
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-neonGreen flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Нагорное Шоссе 2, Химки
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-neonGreen flex-shrink-0" />
                <span className="text-muted-foreground">
                  Круглосуточная поддержка
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-darkText mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground hover:text-neonGreen transition-colors cursor-pointer">
                  Интернет от 490₽
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-neonGreen transition-colors cursor-pointer">
                  Телевидение от 149₽
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-neonGreen transition-colors cursor-pointer">
                  Техническая поддержка
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 TelinCom. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

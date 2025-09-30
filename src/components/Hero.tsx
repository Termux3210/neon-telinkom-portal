import { Wifi, Tv, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-darkText mb-6 leading-tight">
            Интернет и телевидение
            <br />
            <span className="text-neonGreen">для людей</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Надежные телекоммуникационные услуги с современным сервисом и доступными ценами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Internet Card */}
          <div className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-neonGreen/30">
            <div className="absolute inset-0 bg-gradient-to-br from-neonGreen/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-neonGreen/10 rounded-xl">
                  <Wifi className="h-8 w-8 text-neonGreen" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neonGreen">490₽</div>
                  <div className="text-sm text-muted-foreground">в месяц</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-darkText mb-3">Интернет</h3>
              <p className="text-muted-foreground mb-6">
                Высокоскоростной интернет для дома и офиса. Стабильное соединение без ограничений.
              </p>
              
              <Button 
                className="w-full bg-neonGreen text-white hover:bg-neonGreen/90 shadow-lg hover:shadow-neonGreen/30 transition-all"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).b24form && (window as any).b24form.App) {
                    (window as any).b24form.App.initFormScript24({
                      "id":"68",
                      "sec":"vj8514",
                      "lang":"ru",
                      "address":"https://legche24.ru",
                      "views":{"click":{"type":"popup","position":"center","vertical":"center"}}
                    });
                  }
                }}
              >
                Подключить интернет
              </Button>
            </div>
          </div>

          {/* TV Card */}
          <div className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-neonGreen/30">
            <div className="absolute inset-0 bg-gradient-to-br from-neonGreen/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-neonGreen/10 rounded-xl">
                  <Tv className="h-8 w-8 text-neonGreen" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neonGreen">149₽</div>
                  <div className="text-sm text-muted-foreground">в месяц</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-darkText mb-3">Телевидение</h3>
              <p className="text-muted-foreground mb-6">
                Цифровое телевидение высокого качества. Множество каналов и интерактивные сервисы.
              </p>
              
              <Button 
                className="w-full bg-neonGreen text-white hover:bg-neonGreen/90 shadow-lg hover:shadow-neonGreen/30 transition-all"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).b24form && (window as any).b24form.App) {
                    (window as any).b24form.App.initFormScript24({
                      "id":"68",
                      "sec":"vj8514",
                      "lang":"ru",
                      "address":"https://legche24.ru",
                      "views":{"click":{"type":"popup","position":"center","vertical":"center"}}
                    });
                  }
                }}
              >
                Подключить ТВ
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="mb-6 border-neonGreen/30 text-darkText hover:bg-neonGreen/10 hover:text-neonGreen hover:border-neonGreen/60"
            onClick={() => window.open('https://cabinet.telincom.ru', '_blank')}
          >
            <User className="h-5 w-5 mr-2" />
            Личный кабинет
          </Button>
          
          <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
            <Phone className="h-4 w-4 text-neonGreen" />
            <span>Звоните прямо сейчас</span>
          </div>
          <a 
            href="tel:+74957755006" 
            className="text-2xl font-bold text-neonGreen hover:text-neonGreen/80 transition-colors"
          >
            +7 (495) 775-50-06
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Wifi, Shield, Clock, Zap, TrendingUp, Headphones } from "lucide-react";

const Features = () => {
  const internetFeatures = [
    {
      icon: Zap,
      title: "До 1000 Мбит/с",
      description: "Высокая скорость для комфортной работы и развлечений"
    },
    {
      icon: Shield,
      title: "Стабильное соединение",
      description: "Надежное подключение без обрывов и задержек"
    },
    {
      icon: Clock,
      title: "Круглосуточно",
      description: "Безлимитный доступ в интернет 24/7"
    },
    {
      icon: TrendingUp,
      title: "Без ограничений",
      description: "Никаких лимитов на трафик и скорость"
    }
  ];

  const tvFeatures = [
    {
      icon: Wifi,
      title: "200+ каналов",
      description: "Широкий выбор телеканалов на любой вкус"
    },
    {
      icon: Headphones,
      title: "HD качество",
      description: "Кристально чистое изображение и звук"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-darkText mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современные технологии и качественный сервис для вашего комфорта
          </p>
        </div>

        {/* Internet Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-darkText mb-8 text-center">
            Интернет
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internetFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-border/50 hover:border-neonGreen/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 p-3 bg-neonGreen/10 rounded-xl w-fit group-hover:bg-neonGreen/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-neonGreen" />
                </div>
                <h4 className="text-lg font-bold text-darkText mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TV Features */}
        <div>
          <h3 className="text-2xl font-bold text-darkText mb-8 text-center">
            Телевидение
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {tvFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-border/50 hover:border-neonGreen/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 p-3 bg-neonGreen/10 rounded-xl w-fit group-hover:bg-neonGreen/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-neonGreen" />
                </div>
                <h4 className="text-lg font-bold text-darkText mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

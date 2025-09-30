const ContactForm = () => {
  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-darkText mb-4">
            Оставьте заявку
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы свяжемся с вами и расскажем обо всех наших услугах
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-xl border border-border/50">
          <div id="b24form-container"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

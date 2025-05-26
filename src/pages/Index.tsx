
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, MessageSquare, Phone, LinkedinIcon } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send to backend
    alert('Спасибо за заявку! Свяжусь с вами в течение часа.');
  };

  const services = [
    {
      title: "Landing Page",
      description: "Продающая страница для максимальной конверсии",
      price: "от 10 000 ₸",
      icon: "📄"
    },
    {
      title: "Сайт-визитка",
      description: "Представительский сайт для малого бизнеса",
      price: "от 10 000 ₸",
      icon: "🌐"
    },
    {
      title: "Корпоративный сайт",
      description: "Многостраничный сайт для компании",
      price: "от 100 000 ₸",
      icon: "🏢"
    },
    {
      title: "Сайт-каталог",
      description: "Каталог товаров с фильтрацией",
      price: "от 100 000 ₸",
      icon: "📋"
    },
    {
      title: "Интернет-магазин",
      description: "Полноценный e-commerce с корзиной",
      price: "от 100 000 ₸",
      icon: "🛒"
    },
    {
      title: "GPT-4o чат-бот",
      description: "ИИ-помощник для автоматизации продаж",
      price: "от 40 000 ₸",
      icon: "🤖"
    }
  ];

  const advantages = [
    { icon: "⏱️", title: "Срок 2–3 дня", description: "Быстрая разработка без потери качества" },
    { icon: "💰", title: "Фиксированная цена", description: "Никаких скрытых доплат" },
    { icon: "📱", title: "Адаптив + SEO", description: "Работает на всех устройствах" },
    { icon: "🛠️", title: "7 дней поддержки", description: "Бесплатные правки после сдачи" }
  ];

  const timeline = [
    { step: "1", title: "Бриф", description: "Обсуждаем задачи и цели" },
    { step: "2", title: "Прототип", description: "Создаю макет и структуру" },
    { step: "3", title: "Разработка", description: "Верстка и программирование" },
    { step: "4", title: "Запуск", description: "Тестирование и публикация" },
    { step: "5", title: "Поддержка", description: "7 дней бесплатных правок" }
  ];

  const portfolio = [
    { title: "E-commerce магазин", category: "Интернет-магазин", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400" },
    { title: "Корпоративный сайт", category: "Бизнес", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" },
    { title: "Landing Page", category: "Лендинг", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400" },
    { title: "Сайт-каталог", category: "Каталог", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400" },
    { title: "ChatBot интеграция", category: "ИИ", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400" },
    { title: "Мобильное приложение", category: "Мобайл", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400" }
  ];

  const testimonials = [
    {
      name: "Алексей Петров",
      company: "ТОО «Строй-Сервис»",
      text: "Отличная работа! Сайт сделали за 2 дня, все пожелания учли. Заявки пошли сразу.",
      rating: 5
    },
    {
      name: "Мария Иванова",
      company: "Салон красоты «Элит»",
      text: "Профессиональный подход, красивый дизайн. Клиенты в восторге от нового сайта!",
      rating: 5
    },
    {
      name: "Сергей Козлов",
      company: "IT-консалтинг",
      text: "Чат-бот на GPT-4 увеличил конверсию на 40%. Рекомендую!",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Сколько времени займет разработка сайта?",
      answer: "Простой сайт-визитка или лендинг — 2-3 дня. Корпоративный сайт или интернет-магазин — до 1 недели. Точные сроки обсуждаем после брифа."
    },
    {
      question: "Входит ли в стоимость адаптивная верстка?",
      answer: "Да, все сайты изначально адаптивные и корректно отображаются на мобильных устройствах, планшетах и десктопах."
    },
    {
      question: "Предоставляете ли вы хостинг и домен?",
      answer: "Помогаю с выбором и настройкой хостинга и домена. Стоимость хостинга оплачивается отдельно (обычно 3000-5000₸ в год)."
    },
    {
      question: "Можно ли внести изменения после сдачи проекта?",
      answer: "Да, первые 7 дней поддержки бесплатно. Далее мелкие правки — 2000₸, крупные изменения обсуждаем отдельно."
    },
    {
      question: "Как происходит оплата?",
      answer: "50% предоплата для старта работ, 50% по готовности. Принимаю оплату по карте, Kaspi или банковским переводом."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e0f2f1" fill-opacity="0.3"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Сайты и ИИ-агенты
                <span className="block text-cyan-600">за 2 дня</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Запускаю онлайн-продажи под ключ от 10 000 ₸
              </p>
              <Button 
                size="lg" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Получить бесплатный аудит
              </Button>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">3 года</div>
                <div className="text-gray-600">опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">30+</div>
                <div className="text-gray-600">проектов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">48-72ч</div>
                <div className="text-gray-600">срок работы</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" data-animate>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 mx-auto mb-6 flex items-center justify-center text-4xl text-white font-bold">
                ДМ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Дмитрий Максимов
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Full-stack разработчик с опытом создания высокоэффективных веб-решений. 
                Специализируюсь на React/Next.js и интеграции ИИ-технологий. 
                Создаю сайты, которые не просто красиво выглядят, а реально продают.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-cyan-600 text-3xl mb-3">⚛️</div>
                <h3 className="font-semibold text-lg mb-2">React / Next.js</h3>
                <p className="text-gray-600">Современные технологии для быстрых сайтов</p>
              </div>
              <div className="text-center p-6">
                <div className="text-cyan-600 text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-lg mb-2">GPT-4o интеграция</h3>
                <p className="text-gray-600">ИИ-помощники для автоматизации</p>
              </div>
              <div className="text-center p-6">
                <div className="text-cyan-600 text-3xl mb-3">🚀</div>
                <h3 className="font-semibold text-lg mb-2">SEO оптимизация</h3>
                <p className="text-gray-600">Продвижение в поисковых системах</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги
            </h2>
            <p className="text-lg text-gray-600">
              Создаю эффективные веб-решения для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 bg-white border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-600">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Преимущества работы со мной
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Этапы работы
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center flex-1">
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-cyan-200 transform translate-x-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Портфолио
            </h2>
            <p className="text-lg text-gray-600">
              Примеры выполненных проектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="mb-2 bg-cyan-600">{project.category}</Badge>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь со мной
            </h2>
            <p className="text-lg text-gray-600">
              Готов обсудить ваш проект и дать бесплатную консультацию
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="p-8 bg-white border-0 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full"
                      placeholder="+7 (777) 123-45-67"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32"
                      placeholder="Опишите ваш проект..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Другие способы связи
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://t.me/webdev_dm" 
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <MessageSquare className="w-6 h-6 text-cyan-600 mr-4" />
                    <div>
                      <div className="font-semibold text-gray-900">Telegram</div>
                      <div className="text-gray-600">@webdev_dm</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/77771234567" 
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <Phone className="w-6 h-6 text-cyan-600 mr-4" />
                    <div>
                      <div className="font-semibold text-gray-900">WhatsApp</div>
                      <div className="text-gray-600">+7 (777) 123-45-67</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/webdev-dm" 
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <LinkedinIcon className="w-6 h-6 text-cyan-600 mr-4" />
                    <div>
                      <div className="font-semibold text-gray-900">LinkedIn</div>
                      <div className="text-gray-600">webdev-dm</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">
                  📞 Бесплатная консультация
                </h4>
                <p className="text-gray-600 text-sm">
                  Обсудим ваш проект, дам экспертную оценку 
                  и предложу оптимальное решение
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Дмитрий Максимов</h3>
              <p className="text-gray-400">Веб-разработчик, Алматы</p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://t.me/webdev_dm" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </a>
              <a href="https://wa.me/77771234567" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/webdev-dm" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm mb-2">
                © 2024 Дмитрий Максимов — веб-разработчик, Алматы
              </p>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, MessageSquare, Phone, LinkedinIcon, Code, Smartphone, Zap, Clock, DollarSign, Shield, CheckCircle, Globe, Briefcase, Target, Award, Star } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Свяжусь с вами в течение часа.');
  };

  const services = [
    {
      title: "Landing Page",
      description: "Продающая страница для максимальной конверсии",
      price: "от 10 000 ₸",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Сайт-визитка",
      description: "Представительский сайт для малого бизнеса",
      price: "от 10 000 ₸",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Корпоративный сайт",
      description: "Многостраничный сайт для компании",
      price: "от 50 000 ₸",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Сайт-каталог",
      description: "Каталог товаров с фильтрацией",
      price: "от 50 000 ₸",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Интернет-магазин",
      description: "Полноценный e-commerce с корзиной",
      price: "от 50 000 ₸",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "GPT-4o чат-бот",
      description: "ИИ-помощник для автоматизации продаж",
      price: "от 40 000 ₸",
      icon: <Code className="w-8 h-8" />
    }
  ];

  const advantages = [
    { icon: <Clock className="w-12 h-12" />, title: "Срок 2–3 дня", description: "Быстрая разработка без потери качества" },
    { icon: <DollarSign className="w-12 h-12" />, title: "Фиксированная цена", description: "Никаких скрытых доплат" },
    { icon: <Smartphone className="w-12 h-12" />, title: "Адаптив + SEO", description: "Работает на всех устройствах" },
    { icon: <Shield className="w-12 h-12" />, title: "7 дней поддержки", description: "Бесплатные правки после сдачи" }
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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Создаю сайты и ИИ-решения
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">за 2-3 дня</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Создаем лендинг пейджи и веб-сайты с возможностью интеграции ИИ от 10 000 ₸
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить бесплатную консультацию
              </Button>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3 года</div>
                <div className="text-gray-300">коммерческого опыта</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">успешных проектов</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2-3 дня</div>
                <div className="text-gray-300">средний срок работы</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" data-animate>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 mx-auto lg:mx-0 mb-8 flex items-center justify-center text-5xl text-white font-bold shadow-xl">
                  АИ
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Алихан Ибраев
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Full-stack разработчик с опытом создания высокоэффективных веб-решений. 
                  Специализируюсь на современных технологиях React/Next.js и интеграции ИИ. 
                  Создаю не просто красивые сайты, а инструменты для роста вашего бизнеса.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">React / Next.js</h3>
                    <p className="text-gray-600 text-sm">Современный стек технологий</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">GPT интеграция</h3>
                    <p className="text-gray-600 text-sm">ИИ-решения для автоматизации</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">SEO оптимизация</h3>
                    <p className="text-gray-600 text-sm">Продвижение в поисковых системах</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Создаю эффективные веб-решения для роста вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 bg-white border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Почему выбирают меня
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Преимущества работы с профессиональным разработчиком
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 group hover:bg-gray-50 rounded-xl transition-all duration-300">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Процесс работы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачный и структурированный подход к каждому проекту
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center flex-1 relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200 transform translate-x-2"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Портфолио
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры реализованных проектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 border-0">{project.category}</Badge>
                    <h3 className="text-xl font-bold">{project.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о моей работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 font-medium">{testimonial.company}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ответы на популярные вопросы о сотрудничестве
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Начнем сотрудничество
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Готов обсудить ваш проект и предложить оптимальное решение
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Телефон *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      placeholder="+7 (777) 123-45-67"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      placeholder="Опишите ваш проект..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 border-0"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">
                  Другие способы связи
                </h3>
                
                <div className="space-y-6">
                  <a 
                    href="https://t.me/webdev_dm" 
                    className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <MessageSquare className="w-8 h-8 text-cyan-400 mr-6" />
                    <div>
                      <div className="font-semibold text-white text-lg">Telegram</div>
                      <div className="text-gray-300">@webdev_dm</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/77771234567" 
                    className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <Phone className="w-8 h-8 text-cyan-400 mr-6" />
                    <div>
                      <div className="font-semibold text-white text-lg">WhatsApp</div>
                      <div className="text-gray-300">+7 (777) 123-45-67</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/webdev-dm" 
                    className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <LinkedinIcon className="w-8 h-8 text-cyan-400 mr-6" />
                    <div>
                      <div className="font-semibold text-white text-lg">LinkedIn</div>
                      <div className="text-gray-300">webdev-dm</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-cyan-600/20 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/30">
                <h4 className="font-bold text-white text-xl mb-3 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-cyan-400" />
                  Бесплатная консультация
                </h4>
                <p className="text-gray-300">
                  Обсудим ваш проект, проведу техническую экспертизу 
                  и предложу оптимальное решение для ваших задач
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
              <h3 className="text-2xl font-bold mb-2">Алихан Ибраев</h3>
              <p className="text-gray-400">Full-stack разработчик, Алматы</p>
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
                © 2024 Алихан Ибраев — профессиональная веб-разработка
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

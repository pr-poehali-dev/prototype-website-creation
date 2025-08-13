import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Prototype() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [email, setEmail] = useState('');

  const features = [
    {
      title: "Быстрое прототипирование",
      description: "Создавайте интерактивные прототипы за минуты, а не дни",
      icon: "Zap",
      demo: "wireframe"
    },
    {
      title: "Компоненты UI",
      description: "Библиотека готовых компонентов для быстрой разработки",
      icon: "Layers",
      demo: "components"
    },
    {
      title: "Адаптивный дизайн",
      description: "Автоматическая адаптация под любые экраны",
      icon: "Smartphone",
      demo: "responsive"
    },
    {
      title: "Совместная работа",
      description: "Работайте в команде над проектами в реальном времени",
      icon: "Users",
      demo: "collaboration"
    }
  ];

  const prototypes = [
    {
      title: "E-commerce App",
      category: "Мобильное приложение",
      status: "В разработке",
      image: "img/2d9c8930-b2b9-4980-8c06-01bbb896ed68.jpg",
      progress: 75
    },
    {
      title: "Dashboard Analytics",
      category: "Веб-приложение",
      status: "Готов",
      image: "img/5c3374ab-a218-4d1f-ba00-3b25b1a3e5ad.jpg",
      progress: 100
    },
    {
      title: "Social Media Platform",
      category: "Веб-платформа",
      status: "Концепт",
      image: "img/cdcc8c06-1122-411a-9160-072c4836732a.jpg",
      progress: 25
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Layers" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">ProtoLab</h1>
                <p className="text-sm text-slate-600">Платформа прототипирования</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Возможности</a>
              <a href="#prototypes" className="text-slate-600 hover:text-slate-900 transition-colors">Прототипы</a>
              <a href="#demo" className="text-slate-600 hover:text-slate-900 transition-colors">Демо</a>
              <Button>Начать</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Icon name="Sparkles" className="w-4 h-4 mr-1" />
              Новая версия 2.0
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Создавайте прототипы
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                молниеносно
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              ProtoLab — это современная платформа для быстрого создания интерактивных прототипов. 
              От идеи до готового макета за несколько кликов.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Попробовать бесплатно
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Video" className="w-5 h-5 mr-2" />
              Посмотреть демо
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-slate-900">10k+</div>
              <div className="text-slate-600">Прототипов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">500+</div>
              <div className="text-slate-600">Компаний</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">99%</div>
              <div className="text-slate-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-slate-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Всё для успешного прототипирования
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мощные инструменты и интуитивный интерфейс для создания прототипов любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedFeature === index
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500'
                      : 'hover:bg-slate-50'
                  }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      selectedFeature === index 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon name={feature.icon as any} className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <div className="text-center">
                      <Icon name={features[selectedFeature].icon as any} className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-slate-700 mb-2">
                        {features[selectedFeature].title}
                      </h4>
                      <p className="text-slate-500">
                        Демонстрация функции
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prototypes Gallery */}
      <section id="prototypes" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Примеры прототипов
            </h2>
            <p className="text-xl text-slate-600">
              Посмотрите, что можно создать с помощью ProtoLab
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prototypes.map((prototype, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={prototype.image}
                    alt={prototype.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{prototype.title}</CardTitle>
                    <Badge variant={prototype.status === 'Готов' ? 'default' : 'secondary'}>
                      {prototype.status}
                    </Badge>
                  </div>
                  <p className="text-slate-600">{prototype.category}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-600">Прогресс</span>
                      <span className="text-sm font-medium">{prototype.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${prototype.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Eye" className="w-4 h-4 mr-1" />
                      Просмотр
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Copy" className="w-4 h-4 mr-1" />
                      Клонировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Попробуйте прямо сейчас
            </h2>
            <p className="text-xl text-slate-600">
              Интерактивная демонстрация основных возможностей
            </p>
          </div>

          <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="design">Дизайн</TabsTrigger>
              <TabsTrigger value="components">Компоненты</TabsTrigger>
              <TabsTrigger value="preview">Превью</TabsTrigger>
            </TabsList>

            <TabsContent value="design" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Редактор дизайна</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Цвет темы</label>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer ring-2 ring-blue-200"></div>
                          <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></div>
                          <div className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></div>
                          <div className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"></div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Шрифт</label>
                        <select className="w-full p-2 border border-slate-300 rounded-lg">
                          <option>Inter</option>
                          <option>Roboto</option>
                          <option>Open Sans</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Размер</label>
                        <input type="range" className="w-full" min="12" max="24" defaultValue="16" />
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">Предварительный просмотр</h3>
                        <p className="text-slate-600 mb-4">Так будет выглядеть ваш дизайн</p>
                        <Button className="bg-blue-500 hover:bg-blue-600">
                          Кнопка действия
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="components" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Библиотека компонентов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Button', 'Card', 'Input', 'Modal', 'Table', 'Chart', 'Form', 'Navigation'].map((component) => (
                      <div key={component} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <Icon name="Square" className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <div className="text-center text-sm font-medium">{component}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preview" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Интерактивное превью</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
                        <h3 className="text-xl font-semibold mb-2">Добро пожаловать!</h3>
                        <p className="text-slate-600">Создайте аккаунт для продолжения</p>
                      </div>
                      <div className="space-y-4">
                        <Input placeholder="Email" type="email" />
                        <Input placeholder="Пароль" type="password" />
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                          Зарегистрироваться
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы начать создавать?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам дизайнеров и разработчиков, которые уже используют ProtoLab
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <Input 
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Начать бесплатно
            </Button>
          </div>
          <p className="text-sm text-blue-100">
            Бесплатно 14 дней. Не требуется кредитная карта.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Layers" className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ProtoLab</span>
              </div>
              <p className="text-slate-400">
                Платформа для быстрого создания интерактивных прототипов
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Интеграции</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статус</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресса</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2024 ProtoLab. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Github" className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
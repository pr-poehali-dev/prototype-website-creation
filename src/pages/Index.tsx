import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Современная платформа для онлайн-торговли с React и Node.js",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demo: "#",
      code: "#",
      image: "img/cdcc8c06-1122-411a-9160-072c4836732a.jpg"
    },
    {
      title: "Task Management App",
      description: "Приложение для управления проектами с реалтайм обновлениями",
      tech: ["TypeScript", "Socket.io", "MongoDB", "Express"],
      demo: "#",
      code: "#",
      image: "img/72da7f69-5723-466a-85b4-f534f1a1f4bf.jpg"
    },
    {
      title: "Weather Dashboard",
      description: "Интерактивный дашборд погоды с красивой визуализацией",
      tech: ["React", "D3.js", "Weather API", "Tailwind"],
      demo: "#",
      code: "#",
      image: "img/47be3d8e-b8f9-4dbe-b8c1-7b65be121de0.jpg"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "React", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "PostgreSQL", level: 82 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">{'</'}</span>
              <span>Алексей</span>
              <span className="text-primary">{'>'}</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#skills" className="hover:text-primary transition-colors">Навыки</a>
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans">
              Привет, я <span className="text-primary">Алексей</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body max-w-3xl mx-auto">
              Веб-разработчик полного стека, создающий современные и масштабируемые решения
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <Icon name="Download" className="mr-2 h-5 w-5" />
                Скачать резюме
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Mail" className="mr-2 h-5 w-5" />
                Связаться
              </Button>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="relative">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-bounce"></div>
            <div className="absolute top-32 right-16 w-12 h-12 bg-secondary/20 rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-bounce delay-700"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-sans">
            Обо <span className="text-primary">мне</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
                Я веб-разработчик с 5+ годами опыта создания инновационных цифровых решений. 
                Специализируюсь на современных технологиях и люблю решать сложные задачи.
              </p>
              <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
                Моя цель — создавать продукты, которые не просто работают, а вдохновляют пользователей 
                и приносят реальную пользу бизнесу.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Icon name="Code" className="mr-1 h-3 w-3" />
                  Full Stack
                </Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                  <Icon name="Smartphone" className="mr-1 h-3 w-3" />
                  Mobile First
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Icon name="Zap" className="mr-1 h-3 w-3" />
                  Performance
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <Icon name="User" className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-sans">
            Мои <span className="text-primary">навыки</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium font-body">{skill.name}</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-sans">
            Мои <span className="text-primary">проекты</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="h-48 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-all duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-sans">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 font-body">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/20 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 flex-1">
                      <Icon name="ExternalLink" className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground flex-1">
                      <Icon name="Github" className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-sans">
            Давайте <span className="text-primary">поработаем</span> вместе
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-body">
            Готов обсудить ваш проект и найти лучшее решение
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-sans">Email</h3>
              <p className="text-muted-foreground font-body">alexey@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Github" className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2 font-sans">GitHub</h3>
              <p className="text-muted-foreground font-body">github.com/alexey</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Linkedin" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-sans">LinkedIn</h3>
              <p className="text-muted-foreground font-body">linkedin.com/in/alexey</p>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Send" className="mr-2 h-5 w-5" />
            Написать мне
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-body">
            © 2024 Алексей. Все права защищены. Сделано с ❤️ в России
          </p>
        </div>
      </footer>
    </div>
  );
}
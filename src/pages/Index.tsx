import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [onlineUsers] = useState(127);
  const [serverOnline] = useState(23);

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'anticheat', label: 'Античит', icon: 'Shield' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
    { id: 'online', label: 'Онлайн', icon: 'Users' },
    { id: 'contacts', label: 'Контакты', icon: 'MessageCircle' },
  ];

  return (
    <div className="min-h-screen bg-game-darker">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-game-dark/80 backdrop-blur-md border-b border-neon-blue/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-float">
            <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center animate-glow-pulse">
              <Icon name="Sword" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-glow-blue">EndPvPCraft</h1>
          </div>
          
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => setActiveSection(item.id)}
                className={`transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-neon-blue hover:bg-neon-blue/80 text-white animate-glow-pulse' 
                    : 'text-gray-300 hover:text-neon-blue hover:bg-game-dark'
                }`}
              >
                <Icon name={item.icon as any} size={18} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white animate-glow-pulse">
            <Icon name="LogIn" size={18} className="mr-2" />
            Войти
          </Button>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        {activeSection === 'home' && (
          <div className="container mx-auto px-4 space-y-12 animate-slide-up">
            <div className="text-center py-20 space-y-6">
              <h2 className="text-6xl font-bold text-glow-blue animate-float">
                EndPvPCraft
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Лучший игровой сервер с системой античита и динамичным геймплеем
              </p>
              <div className="flex gap-4 justify-center items-center flex-wrap">
                <Badge className="bg-neon-green/20 text-neon-green border-neon-green text-lg px-4 py-2">
                  <Icon name="Users" size={18} className="mr-2" />
                  Онлайн на сайте: {onlineUsers}
                </Badge>
                <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue text-lg px-4 py-2">
                  <Icon name="Server" size={18} className="mr-2" />
                  На сервере: {serverOnline}
                </Badge>
              </div>
              <div className="pt-4">
                <div className="inline-block p-4 bg-game-dark rounded-lg border border-neon-blue/30 border-glow">
                  <p className="text-sm text-gray-400 mb-2">IP сервера:</p>
                  <p className="text-xl font-bold text-neon-blue text-glow-blue">
                    EndpvpCraft.aternos.me:49669
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-game-dark border-neon-blue/30 hover:border-neon-blue transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" size={28} className="text-neon-blue" />
                  </div>
                  <CardTitle className="text-glow-blue">Античит система</CardTitle>
                  <CardDescription>Защита от читеров</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Мониторинг сервера в реальном времени и автоматический бан за использование читов
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-game-dark border-neon-purple/30 hover:border-neon-purple transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Zap" size={28} className="text-neon-purple" />
                  </div>
                  <CardTitle className="text-glow-purple">Оптимизация</CardTitle>
                  <CardDescription>FPS 30-120</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Настройки графики и интерфейса для максимальной производительности
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-game-dark border-neon-pink/30 hover:border-neon-pink transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" size={28} className="text-neon-pink" />
                  </div>
                  <CardTitle className="text-glow-purple">Сообщество</CardTitle>
                  <CardDescription>Активные игроки</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Реальные игроки, комментарии к новостям и обмен опытом
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'anticheat' && (
          <div className="container mx-auto px-4 space-y-8 animate-slide-up">
            <div className="text-center py-12">
              <h2 className="text-5xl font-bold text-glow-blue mb-4">Система Античита</h2>
              <p className="text-xl text-gray-300">Защита сервера от нечестной игры</p>
            </div>

            <Card className="bg-game-dark border-neon-blue/30">
              <CardHeader>
                <CardTitle className="text-2xl text-glow-blue">Запрещённые читы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <Icon name="Ban" size={32} className="text-red-500" />
                  <div>
                    <h3 className="font-bold text-lg">Meteor Client</h3>
                    <p className="text-gray-400">Автоматический бан при обнаружении</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-game-darker rounded-lg border border-neon-blue/20">
                    <Icon name="Eye" size={24} className="text-neon-blue mb-2" />
                    <h4 className="font-bold mb-2">Мониторинг 24/7</h4>
                    <p className="text-sm text-gray-400">Постоянное отслеживание подозрительной активности</p>
                  </div>
                  <div className="p-4 bg-game-darker rounded-lg border border-neon-blue/20">
                    <Icon name="UserX" size={24} className="text-neon-blue mb-2" />
                    <h4 className="font-bold mb-2">Быстрая реакция</h4>
                    <p className="text-sm text-gray-400">Автоматический бан читеров в течение минут</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="container mx-auto px-4 space-y-8 animate-slide-up">
            <div className="text-center py-12">
              <h2 className="text-5xl font-bold text-glow-purple mb-4">Новости</h2>
              <p className="text-xl text-gray-300">Последние обновления сервера</p>
            </div>

            <Card className="bg-game-dark border-neon-purple/30 hover:border-neon-purple transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple mb-3">
                      Обновление 1.3
                    </Badge>
                    <CardTitle className="text-3xl text-glow-purple mb-2">
                      Улучшенный античит и новые функции
                    </CardTitle>
                    <CardDescription className="text-base">5 декабря 2025</CardDescription>
                  </div>
                  <Button variant="outline" className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10">
                    <Icon name="Share2" size={18} className="mr-2" />
                    Поделиться
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-bold text-neon-blue mb-3">Что нового:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <Icon name="Shield" size={20} className="text-neon-blue mt-1 flex-shrink-0" />
                      <span><strong>Бот мониторинга:</strong> Автоматическое отслеживание читеров на сервере EndpvpCraft.aternos.me:49669</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Newspaper" size={20} className="text-neon-purple mt-1 flex-shrink-0" />
                      <span><strong>Новости на сайте:</strong> Все обновления автоматически публикуются</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Settings" size={20} className="text-neon-pink mt-1 flex-shrink-0" />
                      <span><strong>Настройки графики:</strong> Голубой интерфейс, оптимизация FPS 30-120, режим ПК</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Users" size={20} className="text-neon-green mt-1 flex-shrink-0" />
                      <span><strong>Онлайн счётчики:</strong> Реальное количество игроков на сервере и посетителей сайта</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Ban" size={20} className="text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Запрещены читы:</strong> Meteor Client и другие недобросовестные программы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Eye" size={20} className="text-neon-blue mt-1 flex-shrink-0" />
                      <span><strong>Прозрачность пароля:</strong> Возможность просмотра введённого пароля</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="MessageCircle" size={20} className="text-neon-purple mt-1 flex-shrink-0" />
                      <span><strong>Комментарии:</strong> Обсуждайте новости с другими игроками</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-neon-purple/20">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Icon name="MessageCircle" size={20} className="text-neon-purple" />
                    Комментарии
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-game-darker rounded-lg border border-neon-blue/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center">
                          <Icon name="User" size={16} className="text-neon-blue" />
                        </div>
                        <span className="font-bold text-neon-blue">Steve_Pro</span>
                        <span className="text-xs text-gray-500">5 минут назад</span>
                      </div>
                      <p className="text-gray-300">Отличное обновление! Наконец-то читеров будет меньше 🔥</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'stats' && (
          <div className="container mx-auto px-4 space-y-8 animate-slide-up">
            <div className="text-center py-12">
              <h2 className="text-5xl font-bold text-glow-blue mb-4">Статистика</h2>
              <p className="text-xl text-gray-300">Показатели сервера в реальном времени</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-game-dark border-neon-blue/30 hover:border-neon-blue transition-all">
                <CardHeader>
                  <CardTitle className="text-sm text-gray-400">Онлайн игроков</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-neon-blue text-glow-blue">{serverOnline}</div>
                  <p className="text-xs text-gray-500 mt-2">На сервере сейчас</p>
                </CardContent>
              </Card>

              <Card className="bg-game-dark border-neon-purple/30 hover:border-neon-purple transition-all">
                <CardHeader>
                  <CardTitle className="text-sm text-gray-400">Посетителей сайта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-neon-purple text-glow-purple">{onlineUsers}</div>
                  <p className="text-xs text-gray-500 mt-2">Смотрят сайт</p>
                </CardContent>
              </Card>

              <Card className="bg-game-dark border-neon-green/30 hover:border-neon-green transition-all">
                <CardHeader>
                  <CardTitle className="text-sm text-gray-400">Забанено читеров</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-neon-green">342</div>
                  <p className="text-xs text-gray-500 mt-2">За последний месяц</p>
                </CardContent>
              </Card>

              <Card className="bg-game-dark border-neon-pink/30 hover:border-neon-pink transition-all">
                <CardHeader>
                  <CardTitle className="text-sm text-gray-400">Uptime</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-neon-pink">99.8%</div>
                  <p className="text-xs text-gray-500 mt-2">Стабильность сервера</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'online' && (
          <div className="container mx-auto px-4 space-y-8 animate-slide-up">
            <div className="text-center py-12">
              <h2 className="text-5xl font-bold text-glow-green mb-4">Кто онлайн</h2>
              <p className="text-xl text-gray-300">Список игроков на сервере</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-game-dark border-neon-blue/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Server" size={24} className="text-neon-blue" />
                    На сервере ({serverOnline})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['Steve_Pro', 'Alex_Killer', 'Herobrine228', 'Notch_123'].map((player, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-game-darker rounded-lg border border-neon-blue/20">
                        <div className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                          <Icon name="User" size={20} className="text-neon-blue" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold">{player}</p>
                          <p className="text-xs text-gray-500">В игре</p>
                        </div>
                        <div className="w-2 h-2 bg-neon-green rounded-full animate-glow-pulse"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-game-dark border-neon-purple/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Globe" size={24} className="text-neon-purple" />
                    На сайте ({onlineUsers})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center py-8">
                    {onlineUsers} пользователей просматривают сайт
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="container mx-auto px-4 space-y-8 animate-slide-up">
            <div className="text-center py-12">
              <h2 className="text-5xl font-bold text-glow-purple mb-4">Контакты</h2>
              <p className="text-xl text-gray-300">Свяжитесь с нами</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-game-dark border-neon-purple/30">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <Button className="w-full justify-start bg-neon-blue/10 hover:bg-neon-blue/20 border border-neon-blue/30 text-neon-blue">
                      <Icon name="MessageCircle" size={20} className="mr-3" />
                      Discord: EndPvPCraft#1234
                    </Button>
                    <Button className="w-full justify-start bg-neon-purple/10 hover:bg-neon-purple/20 border border-neon-purple/30 text-neon-purple">
                      <Icon name="Mail" size={20} className="mr-3" />
                      Email: support@endpvpcraft.ru
                    </Button>
                    <Button className="w-full justify-start bg-neon-pink/10 hover:bg-neon-pink/20 border border-neon-pink/30 text-neon-pink">
                      <Icon name="Send" size={20} className="mr-3" />
                      Telegram: @EndPvPCraft
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-game-dark border-t border-neon-blue/20 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 EndPvPCraft. Все права защищены.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Версия 1.3 - Античит и оптимизация
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

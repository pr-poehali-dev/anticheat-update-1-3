import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'anticheat', label: 'Античит', icon: 'Shield' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
    { id: 'online', label: 'Онлайн', icon: 'Users' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center animate-glow-pulse">
              <Icon name="Sword" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-glow-blue">EndPvP Craft</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onNavigate(item.id)}
                className={`gap-2 ${
                  activeSection === item.id 
                    ? 'bg-gradient-neon text-white' 
                    : 'hover:text-primary'
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </Button>
            ))}
          </div>

          <Button className="bg-gradient-neon hover:opacity-90">
            <Icon name="LogIn" size={16} className="mr-2" />
            Вход
          </Button>
        </div>
      </div>
    </nav>
  );
}

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-blue">
          Свяжитесь с нами
        </h2>
        <p className="text-xl text-muted-foreground">
          Есть вопросы? Мы всегда на связи
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="p-8 bg-card/50 backdrop-blur-md border-primary/30">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="MessageSquare" size={24} className="text-primary" />
            Отправить сообщение
          </h3>
          
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ваше имя</label>
              <Input placeholder="Введите ваше имя" />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Сообщение</label>
              <textarea 
                className="w-full min-h-[120px] px-3 py-2 rounded-md border border-input bg-background resize-none"
                placeholder="Напишите ваше сообщение..."
              />
            </div>

            <Button className="w-full bg-gradient-neon hover:opacity-90" size="lg">
              <Icon name="Send" size={20} className="mr-2" />
              Отправить
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/30 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Discord сервер</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Присоединяйся к нашему сообществу
                </p>
                <Button variant="outline" size="sm" className="border-primary/50">
                  Присоединиться
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/30 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Send" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Telegram канал</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Новости и обновления сервера
                </p>
                <Button variant="outline" size="sm" className="border-primary/50">
                  Подписаться
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/30 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Youtube" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">YouTube канал</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Гайды, обзоры и геймплей
                </p>
                <Button variant="outline" size="sm" className="border-primary/50">
                  Смотреть
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="border-t border-border pt-8 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center">
              <Icon name="Sword" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold">EndPvP Craft</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 EndPvP Craft. Все права защищены.
          </p>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Send" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

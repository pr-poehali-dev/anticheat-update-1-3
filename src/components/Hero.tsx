import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const serverIp = 'EndpvpCraft.aternos.me:49669';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIp);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow-blue">
            EndPvP Craft
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Лучший PvP сервер Minecraft | Обновление 1.3
          </p>
          
          <Card className="inline-block px-6 py-4 mb-8 bg-card/50 backdrop-blur-md border-primary/30 border-glow">
            <div className="flex items-center gap-4">
              <Icon name="Server" size={24} className="text-primary" />
              <code className="text-lg font-mono text-primary">{serverIp}</code>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={copyToClipboard}
                className="hover:text-primary"
              >
                <Icon name="Copy" size={16} />
              </Button>
            </div>
          </Card>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-neon hover:opacity-90 text-white animate-glow-pulse">
              <Icon name="Play" size={20} className="mr-2" />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Discord
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-card/30 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
              <Icon name="Shield" size={32} className="mx-auto mb-4 text-neon-blue" />
              <h3 className="text-xl font-bold mb-2">Защита от читеров</h3>
              <p className="text-muted-foreground">Продвинутый античит отслеживает нечестную игру</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
              <Icon name="Zap" size={32} className="mx-auto mb-4 text-neon-purple" />
              <h3 className="text-xl font-bold mb-2">Высокая производительность</h3>
              <p className="text-muted-foreground">FPS 30-120 с оптимизацией</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
              <Icon name="Users" size={32} className="mx-auto mb-4 text-neon-pink" />
              <h3 className="text-xl font-bold mb-2">Активное сообщество</h3>
              <p className="text-muted-foreground">Присоединяйся к тысячам игроков</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function AntiCheat() {
  const bannedCheats = [
    { name: 'Meteor Client', danger: 'high', detections: 147 },
    { name: 'Wurst', danger: 'high', detections: 89 },
    { name: 'LiquidBounce', danger: 'high', detections: 62 },
    { name: 'Impact', danger: 'medium', detections: 34 },
  ];

  const recentBans = [
    { player: 'xXHackerXx', reason: 'Meteor Client', time: '2 мин назад' },
    { player: 'CheatMaster', reason: 'Kill Aura', time: '15 мин назад' },
    { player: 'FlyHacker123', reason: 'Flight', time: '1 час назад' },
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-purple">
          Система Античита
        </h2>
        <p className="text-xl text-muted-foreground">
          Обновление 1.3: Усиленная защита от читеров
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="p-8 bg-card/50 backdrop-blur-md border-primary/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Icon name="ShieldAlert" size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">Запрещённые читы</h3>
          </div>
          
          <div className="space-y-4">
            {bannedCheats.map((cheat) => (
              <div key={cheat.name} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-destructive/30">
                <div className="flex items-center gap-3">
                  <Icon name="XCircle" size={20} className="text-destructive" />
                  <div>
                    <p className="font-semibold">{cheat.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cheat.detections} обнаружений
                    </p>
                  </div>
                </div>
                <Badge variant="destructive" className={cheat.danger === 'high' ? 'animate-pulse' : ''}>
                  {cheat.danger === 'high' ? 'Высокая угроза' : 'Средняя угроза'}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-card/50 backdrop-blur-md border-primary/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center animate-pulse">
              <Icon name="ShieldCheck" size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">Последние баны</h3>
          </div>
          
          <div className="space-y-4">
            {recentBans.map((ban, index) => (
              <div key={index} className="flex items-start justify-between p-4 bg-muted/30 rounded-lg border border-primary/20">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="User" size={16} className="text-primary" />
                    <p className="font-semibold">{ban.player}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{ban.reason}</p>
                  <p className="text-xs text-muted-foreground">{ban.time}</p>
                </div>
                <Badge variant="outline" className="border-primary/50">
                  Забанен
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md border-primary/50 border-glow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center animate-glow-pulse">
              <Icon name="Activity" size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Античит работает 24/7</h3>
              <p className="text-muted-foreground">Автоматическое обнаружение и бан читеров</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-1">332</p>
            <p className="text-sm text-muted-foreground">Читеров забанено</p>
          </div>
        </div>
      </Card>
    </section>
  );
}

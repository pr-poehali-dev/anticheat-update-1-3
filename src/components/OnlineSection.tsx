import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Player {
  id: number;
  name: string;
  status: 'online' | 'afk';
  playtime: string;
  ping: number;
}

export default function OnlineSection() {
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: 'ProGamer2024', status: 'online', playtime: '2ч 45м', ping: 23 },
    { id: 2, name: 'PvPMaster', status: 'online', playtime: '1ч 30м', ping: 45 },
    { id: 3, name: 'WarriorKing', status: 'afk', playtime: '45м', ping: 67 },
    { id: 4, name: 'BladeRunner', status: 'online', playtime: '3ч 12м', ping: 34 },
    { id: 5, name: 'ShadowNinja', status: 'online', playtime: '1ч 05м', ping: 28 },
  ]);

  const [serverStats, setServerStats] = useState({
    online: 5,
    maxPlayers: 100,
    tps: 20.0,
    uptime: '23ч 45м',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers(prev => prev.map(p => ({
        ...p,
        ping: Math.max(10, Math.min(100, p.ping + Math.floor(Math.random() * 10) - 5))
      })));
      setServerStats(prev => ({
        ...prev,
        tps: Math.max(19.5, Math.min(20.0, prev.tps + (Math.random() - 0.5) * 0.1))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPingColor = (ping: number) => {
    if (ping < 50) return 'text-green-500';
    if (ping < 100) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-blue">
          Игроки онлайн
        </h2>
        <p className="text-xl text-muted-foreground">
          Кто сейчас играет на сервере
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/30">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Users" size={24} className="text-primary" />
            <h3 className="text-lg font-semibold">Игроки</h3>
          </div>
          <p className="text-3xl font-bold">
            {serverStats.online}/{serverStats.maxPlayers}
          </p>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/30">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Gauge" size={24} className="text-green-500" />
            <h3 className="text-lg font-semibold">TPS</h3>
          </div>
          <p className="text-3xl font-bold text-green-500">
            {serverStats.tps.toFixed(1)}
          </p>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/30">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Clock" size={24} className="text-purple-500" />
            <h3 className="text-lg font-semibold">Аптайм</h3>
          </div>
          <p className="text-3xl font-bold">
            {serverStats.uptime}
          </p>
        </Card>
      </div>

      <Card className="p-8 bg-card/50 backdrop-blur-md border-primary/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <Icon name="Users" size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold">Список игроков</h3>
        </div>

        {players.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="UserX" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Сейчас никого нет на сервере</p>
          </div>
        ) : (
          <div className="space-y-3">
            {players.map((player) => (
              <div 
                key={player.id} 
                className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-white" />
                    </div>
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${
                      player.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{player.name}</p>
                      {player.status === 'online' ? (
                        <Badge variant="outline" className="border-green-500/50 text-green-500">
                          Онлайн
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="border-yellow-500/50 text-yellow-500">
                          AFK
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Clock" size={12} className="inline mr-1" />
                      {player.playtime}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Icon name="Wifi" size={16} className={getPingColor(player.ping)} />
                    <span className={`font-semibold ${getPingColor(player.ping)}`}>
                      {player.ping}ms
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </section>
  );
}

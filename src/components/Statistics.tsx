import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Statistics() {
  const stats = [
    { label: 'Всего игроков', value: '15,234', icon: 'Users', color: 'text-neon-blue' },
    { label: 'Онлайн сейчас', value: '342', icon: 'Activity', color: 'text-neon-green' },
    { label: 'PvP матчей', value: '8,912', icon: 'Swords', color: 'text-neon-purple' },
    { label: 'Забанено читеров', value: '332', icon: 'ShieldAlert', color: 'text-neon-pink' },
  ];

  const topPlayers = [
    { rank: 1, name: 'ProGamer2024', kills: 1543, deaths: 234, kd: '6.59' },
    { rank: 2, name: 'PvPMaster', kills: 1402, deaths: 298, kd: '4.70' },
    { rank: 3, name: 'WarriorKing', kills: 1289, deaths: 312, kd: '4.13' },
    { rank: 4, name: 'BladeRunner', kills: 1156, deaths: 289, kd: '4.00' },
    { rank: 5, name: 'ShadowNinja', kills: 1087, deaths: 276, kd: '3.94' },
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-purple">
          Статистика сервера
        </h2>
        <p className="text-xl text-muted-foreground">
          Цифры и достижения нашего сообщества
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6 bg-card/50 backdrop-blur-md border-primary/30 hover:border-primary/50 transition-all hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mb-4 ${stat.color}`}>
                <Icon name={stat.icon as any} size={32} />
              </div>
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-card/50 backdrop-blur-md border-primary/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Icon name="Trophy" size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold">Топ игроков</h3>
        </div>

        <div className="space-y-3">
          {topPlayers.map((player) => (
            <div 
              key={player.rank} 
              className={`flex items-center justify-between p-4 rounded-lg border transition-all hover:scale-[1.02] ${
                player.rank === 1 
                  ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/50' 
                  : player.rank === 2
                  ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/50'
                  : player.rank === 3
                  ? 'bg-gradient-to-r from-orange-700/20 to-orange-800/20 border-orange-700/50'
                  : 'bg-muted/30 border-primary/20'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                  player.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' :
                  player.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                  player.rank === 3 ? 'bg-gradient-to-br from-orange-600 to-orange-800 text-white' :
                  'bg-muted text-foreground'
                }`}>
                  #{player.rank}
                </div>
                <div>
                  <p className="font-semibold flex items-center gap-2">
                    {player.name}
                    {player.rank <= 3 && <Icon name="Crown" size={16} className="text-yellow-500" />}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    K/D: {player.kd}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-primary">{player.kills} убийств</p>
                <p className="text-sm text-muted-foreground">{player.deaths} смертей</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

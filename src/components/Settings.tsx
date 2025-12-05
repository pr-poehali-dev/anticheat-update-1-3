import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Settings() {
  const [fps, setFps] = useState([60]);
  const [uiScale, setUiScale] = useState([100]);
  const [blueInterface, setBlueInterface] = useState(true);
  const [fpsOptimization, setFpsOptimization] = useState(true);
  const [pcMode, setPcMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const applySettings = () => {
    console.log('Настройки применены:', {
      fps: fps[0],
      uiScale: uiScale[0],
      blueInterface,
      fpsOptimization,
      pcMode,
    });
  };

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-purple">
          Настройки графики
        </h2>
        <p className="text-xl text-muted-foreground">
          Оптимизируй производительность под свою систему
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="graphics" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="graphics" className="gap-2">
              <Icon name="Monitor" size={16} />
              Графика
            </TabsTrigger>
            <TabsTrigger value="interface" className="gap-2">
              <Icon name="Layout" size={16} />
              Интерфейс
            </TabsTrigger>
            <TabsTrigger value="account" className="gap-2">
              <Icon name="User" size={16} />
              Аккаунт
            </TabsTrigger>
          </TabsList>

          <TabsContent value="graphics">
            <Card className="p-8 bg-card/50 backdrop-blur-md border-primary/30">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-lg font-semibold flex items-center gap-2">
                      <Icon name="Gauge" size={20} className="text-primary" />
                      Целевой FPS: {fps[0]}
                    </Label>
                    <span className="text-2xl font-bold text-primary">{fps[0]}</span>
                  </div>
                  <Slider
                    value={fps}
                    onValueChange={setFps}
                    min={30}
                    max={120}
                    step={10}
                    className="mb-2"
                  />
                  <p className="text-sm text-muted-foreground">
                    Диапазон: 30-120 FPS. Выше = плавнее, но больше нагрузка
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="Zap" size={20} className="text-primary" />
                    </div>
                    <div>
                      <Label className="font-semibold">Оптимизация FPS</Label>
                      <p className="text-sm text-muted-foreground">
                        Автоматическая настройка для стабильной частоты кадров
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={fpsOptimization}
                    onCheckedChange={setFpsOptimization}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Icon name="MonitorSmartphone" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <Label className="font-semibold">Режим ПК</Label>
                      <p className="text-sm text-muted-foreground">
                        Улучшенная графика для мощных компьютеров
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={pcMode}
                    onCheckedChange={setPcMode}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="interface">
            <Card className="p-8 bg-card/50 backdrop-blur-md border-primary/30">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-lg font-semibold flex items-center gap-2">
                      <Icon name="Maximize" size={20} className="text-primary" />
                      Размер интерфейса: {uiScale[0]}%
                    </Label>
                    <span className="text-2xl font-bold text-primary">{uiScale[0]}%</span>
                  </div>
                  <Slider
                    value={uiScale}
                    onValueChange={setUiScale}
                    min={70}
                    max={130}
                    step={10}
                    className="mb-2"
                  />
                  <p className="text-sm text-muted-foreground">
                    Измените размер элементов интерфейса под ваш экран
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Icon name="Palette" size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <Label className="font-semibold">Голубой интерфейс</Label>
                      <p className="text-sm text-muted-foreground">
                        Использовать голубую цветовую схему
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={blueInterface}
                    onCheckedChange={setBlueInterface}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Card className={`p-4 cursor-pointer border-2 transition-all hover:scale-105 ${
                    uiScale[0] === 70 ? 'border-primary bg-primary/10' : 'border-border'
                  }`} onClick={() => setUiScale([70])}>
                    <div className="text-center">
                      <Icon name="Minimize2" size={24} className="mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Маленький</p>
                      <p className="text-xs text-muted-foreground">70%</p>
                    </div>
                  </Card>

                  <Card className={`p-4 cursor-pointer border-2 transition-all hover:scale-105 ${
                    uiScale[0] === 100 ? 'border-primary bg-primary/10' : 'border-border'
                  }`} onClick={() => setUiScale([100])}>
                    <div className="text-center">
                      <Icon name="Square" size={24} className="mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Средний</p>
                      <p className="text-xs text-muted-foreground">100%</p>
                    </div>
                  </Card>

                  <Card className={`p-4 cursor-pointer border-2 transition-all hover:scale-105 ${
                    uiScale[0] === 130 ? 'border-primary bg-primary/10' : 'border-border'
                  }`} onClick={() => setUiScale([130])}>
                    <div className="text-center">
                      <Icon name="Maximize2" size={24} className="mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Большой</p>
                      <p className="text-xs text-muted-foreground">130%</p>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="account">
            <Card className="p-8 bg-card/50 backdrop-blur-md border-primary/30">
              <div className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Icon name="User" size={20} className="text-primary" />
                    Данные аккаунта
                  </Label>
                  <div className="space-y-4 mt-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Никнейм</p>
                      <p className="font-semibold">ProGamer2024</p>
                    </div>
                    
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">Пароль</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowPassword(!showPassword)}
                          className="h-auto p-1"
                        >
                          <Icon name={showPassword ? "EyeOff" : "Eye"} size={16} />
                        </Button>
                      </div>
                      <p className="font-mono">
                        {showPassword ? '••••••••' : '••••••••'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/30">
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Защита аккаунта</p>
                      <p className="text-sm text-muted-foreground">Аккаунт защищён</p>
                    </div>
                  </div>
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-end gap-4">
          <Button variant="outline" size="lg">
            Сбросить
          </Button>
          <Button size="lg" onClick={applySettings} className="bg-gradient-neon hover:opacity-90">
            <Icon name="Save" size={20} className="mr-2" />
            Применить настройки
          </Button>
        </div>
      </div>
    </section>
  );
}

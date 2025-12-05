import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Comment {
  id: number;
  author: string;
  text: string;
  time: string;
}

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  type: 'update' | 'event' | 'announcement';
  comments: Comment[];
}

export default function NewsSection() {
  const [news] = useState<NewsItem[]>([
    {
      id: 1,
      title: '🚀 Обновление 1.3 - Античит и новые функции!',
      content: 'Добавлена продвинутая система античита, которая отслеживает читеров в режиме реального времени. Теперь бот автоматически находит и банит нечестных игроков. Запрещены читы: Meteor, Wurst и другие. Добавлены настройки графики с FPS от 30 до 120, режим ПК, возможность изменять размер интерфейса. Новости теперь копируются на сайт автоматически!',
      date: '5 декабря 2024',
      type: 'update',
      comments: [
        { id: 1, author: 'ProGamer', text: 'Отличное обновление! Наконец-то читеров не будет!', time: '10 мин назад' },
        { id: 2, author: 'MineKing', text: 'Круто что добавили настройки FPS', time: '25 мин назад' },
      ]
    },
    {
      id: 2,
      title: '⚔️ Турнир PvP - 10 декабря',
      content: 'Приглашаем всех игроков на грандиозный PvP турнир! Призовой фонд - премиум статусы и уникальные предметы. Регистрация открыта.',
      date: '3 декабря 2024',
      type: 'event',
      comments: []
    },
  ]);

  const [expandedNews, setExpandedNews] = useState<number | null>(1);
  const [commentTexts, setCommentTexts] = useState<{ [key: number]: string }>({});
  const [localComments, setLocalComments] = useState<{ [key: number]: Comment[] }>({});

  const toggleNews = (id: number) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  const addComment = (newsId: number) => {
    const text = commentTexts[newsId];
    if (!text?.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      author: 'Гость',
      text: text.trim(),
      time: 'только что'
    };

    setLocalComments(prev => ({
      ...prev,
      [newsId]: [...(prev[newsId] || []), newComment]
    }));
    
    setCommentTexts(prev => ({ ...prev, [newsId]: '' }));
  };

  const shareNews = (newsItem: NewsItem) => {
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        text: newsItem.content,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${newsItem.title}\n\n${newsItem.content}\n\n${window.location.href}`);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'update': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'event': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'announcement': return 'bg-gradient-to-r from-orange-500 to-red-500';
      default: return 'bg-primary';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'update': return 'Обновление';
      case 'event': return 'Событие';
      case 'announcement': return 'Объявление';
      default: return type;
    }
  };

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-blue">
          Новости сервера
        </h2>
        <p className="text-xl text-muted-foreground">
          Следите за обновлениями и событиями
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {news.map((item) => {
          const allComments = [...item.comments, ...(localComments[item.id] || [])];
          
          return (
            <Card key={item.id} className="p-6 bg-card/50 backdrop-blur-md border-primary/30 hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className={`${getTypeColor(item.type)} text-white`}>
                      {getTypeLabel(item.type)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                </div>
              </div>

              <p className={`text-muted-foreground mb-4 ${expandedNews !== item.id ? 'line-clamp-2' : ''}`}>
                {item.content}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => toggleNews(item.id)}
                  className="hover:text-primary"
                >
                  <Icon name={expandedNews === item.id ? "ChevronUp" : "ChevronDown"} size={16} className="mr-1" />
                  {expandedNews === item.id ? 'Скрыть' : 'Читать далее'}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => shareNews(item)}
                  className="hover:text-primary"
                >
                  <Icon name="Share2" size={16} className="mr-1" />
                  Поделиться
                </Button>
                <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                  <Icon name="MessageCircle" size={16} />
                  {allComments.length}
                </div>
              </div>

              {expandedNews === item.id && (
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Icon name="MessageSquare" size={20} className="text-primary" />
                    Комментарии ({allComments.length})
                  </h4>

                  <div className="space-y-4 mb-6">
                    {allComments.length === 0 ? (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        Пока нет комментариев. Будьте первым!
                      </p>
                    ) : (
                      allComments.map((comment) => (
                        <div key={comment.id} className="p-4 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="User" size={16} className="text-primary" />
                            <span className="font-semibold text-sm">{comment.author}</span>
                            <span className="text-xs text-muted-foreground ml-auto">{comment.time}</span>
                          </div>
                          <p className="text-sm">{comment.text}</p>
                        </div>
                      ))
                    )}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex gap-2">
                    <Input
                      placeholder="Написать комментарий..."
                      value={commentTexts[item.id] || ''}
                      onChange={(e) => setCommentTexts(prev => ({ ...prev, [item.id]: e.target.value }))}
                      onKeyPress={(e) => e.key === 'Enter' && addComment(item.id)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => addComment(item.id)}
                      className="bg-gradient-neon hover:opacity-90"
                    >
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}

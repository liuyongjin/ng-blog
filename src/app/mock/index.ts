import { ArticleItem } from '@app/core/interface/article';
import { MockRequest } from '@delon/mock';
import { mock, Random } from 'mockjs';

const list: ArticleItem[] = [];
const total = 50;

for (let i = 0; i < total; i += 1) {
  list.push({
    id: i + 1,
    title: Random.title(),
    create_time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
    browse_count: Random.integer(1, 1000),
    comment_count: Random.integer(1, 1000),
    content: Random.cparagraph(),
    des: mock('@csentence'),
    main_img: Random.image(),
    praise_count: Random.integer(1, 1000),
    tags: mock({
      'array|1-10': [
        {
          id: Random.id(),
          name: Random.title(),
          des: mock('@csentence'),
          color: '#ffffff',
          bg_color: Random.color(),
          create_time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
          update_time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
        },
      ],
    }),
    update_time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
    status: Random.integer(1, 4),
  });
}

function getArticleRandomList(req: MockRequest) {
  return {
    data: { pageSize: 8, current: 1, total: 8, data: [...list.slice(0, 8)] },
    msg: '',
    errorCode: 0,
  };
}

export const ARTICLES = {
  'POST /api/article/randomList': (req: MockRequest) =>
    getArticleRandomList(req),
};
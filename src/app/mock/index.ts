import { ArticleItem } from '@app/core/interface/article';
import { TagItem } from '@app/core/interface/tag';
import { MockRequest } from '@delon/mock';
import { mock, Random } from 'mockjs';

const list: ArticleItem[] = [];
const total = 50;

for (let i = 0; i < total; i += 1) {
  list.push({
    id: i + 1,
    title: Random.name(),
    create_time: Random.now('year'),
    browse_count: Random.integer(1, 1000),
    comment_count: Random.integer(1, 1000),
    content:
      '<p>' +
      Random.cparagraph(20) +
      '</p>' +
      '<p>' +
      Random.cparagraph(20) +
      '</p>' +
      '<p>' +
      Random.cparagraph(20) +
      '</p>',
    des: mock('@csentence'),
    main_img: Random.image(),
    praise_count: Random.integer(1, 1000),
    ...mock({
      'tags|1-5': [
        {
          id: Random.id(),
          name: Random.name(),
          des: mock('@csentence'),
          color: '#ffffff',
          bg_color: Random.color(),
          create_time: Random.now('year'),
          update_time: Random.now('year'),
        },
      ],
    }),
    update_time: Random.now('year'),
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

function getConfig(req: MockRequest) {
  return {
    data: {
      total: 8,
      ...mock({
        'data|4-4': [
          {
            id: Random.id(),
            config_dev: Random.integer(1, 1000),
            config_app: Random.integer(1, 1000),
            config_key: Random.integer(1, 1000),
            config_name: Random.title(),
            config_value: Random.integer(1, 1000),
            config_ext: mock('@csentence'),
            create_time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            update_time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
          },
        ],
      }),
    },
    msg: '',
    errorCode: 0,
  };
}

function getArticleByTitle(req: MockRequest) {
  const resData = list.filter((d) => d.title.includes(req.body.title));
  return {
    data: {
      pageSize: resData.length,
      current: 1,
      total: resData.length,
      data: resData,
    },
    msg: '',
    errorCode: 0,
  };
}

function getPigeonhole(req: MockRequest) {
  const timeList = Random.range(2018, 2023);
  const resData: any = {};
  timeList.forEach((t) => {
    resData[t] = mock({
      [t + '|4-6']: [
        {
          // id: Random.id(),
          // config_dev: Random.integer(1, 1000),
          // config_app: Random.integer(1, 1000),
          // config_key: Random.integer(1, 1000),
          // config_name: Random.title(),
          // config_value: Random.integer(1, 1000),
          // config_ext: mock('@csentence'),
          // create_time: t + '-' + Random.datetime('MM-dd HH:mm:ss'),
          // update_time: t + '-' + Random.datetime('MM-dd HH:mm:ss'),
          id: Random.id(),
          title: Random.name(),
          create_time: Random.now('year'),
          browse_count: Random.integer(1, 1000),
          comment_count: Random.integer(1, 1000),
          content:
            '<p>' +
            Random.cparagraph(20) +
            '</p>' +
            '<p>' +
            Random.cparagraph(20) +
            '</p>' +
            '<p>' +
            Random.cparagraph(20) +
            '</p>',
          des: mock('@csentence'),
          main_img: Random.image(),
          praise_count: Random.integer(1, 1000),
          update_time: Random.now('year'),
          status: Random.integer(1, 4),
        },
      ],
    })[t];
    // .sort((a: any, b: any) => a.create_time - b.create_time);
  });
  return {
    data: resData,
    msg: '',
    errorCode: 0,
  };
}

function getTag(req: MockRequest) {
  const resData: TagItem[] = [];
  list.slice(0, 10).forEach((l) => {
    resData.push(l.tags[0]);
  });
  return {
    data: {
      pageSize: resData?.length,
      current: 1,
      total: resData?.length,
      data: resData,
    },
    msg: '',
    errorCode: 0,
  };
}

function getArticleByTag(req: MockRequest) {
  let resData: TagItem[] = [];
  list.slice(0, 10).forEach((l) => {
    resData.push({
      ...l.tags[0],
      articles: [l],
    });
  });
  const id = req.body.tag_id;
  if (id) {
    resData = resData.filter((r) => r.id === id);
  }
  return {
    data: {
      pageSize: resData.length,
      current: 1,
      total: resData.length,
      data: resData,
    },
    msg: '',
    errorCode: 0,
  };
}

function getArticleDetail(req: MockRequest) {
  const resData = list[0];
  return {
    data: resData,
    msg: '',
    errorCode: 0,
  };
}

function praise(req: MockRequest) {
  const resData = list[0];
  if (resData.praise_count) {
    resData.praise_count = resData.praise_count + 1;
  }
  return {
    data: resData,
    msg: '',
    errorCode: 0,
  };
}

function browse(req: MockRequest) {
  const resData = list[0];
  if (resData.browse_count) {
    resData.browse_count = resData.browse_count + 1;
  }
  return {
    data: resData,
    msg: '',
    errorCode: 0,
  };
}

export const ARTICLES = {
  'POST /api/article/randomList': (req: MockRequest) =>
    getArticleRandomList(req),
  'POST /api/config/index': (req: MockRequest) => getConfig(req),
  'POST /api/article/searchArticle': (req: MockRequest) =>
    getArticleByTitle(req),
  'POST /api/article/pigeonholeList': (req: MockRequest) => getPigeonhole(req),
  'POST /api/tag/index': (req: MockRequest) => getTag(req),
  'POST /api/article/searchArticleByTag': (req: MockRequest) =>
    getArticleByTag(req),
  'POST /api/article/detail': (req: MockRequest) => getArticleDetail(req),
  'POST /api/article/praise': (req: MockRequest) => praise(req),
  'POST /api/article/browse': (req: MockRequest) => browse(req),
};

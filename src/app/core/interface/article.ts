import { TagItem } from './tag';
export interface ArticleResult {
  data: ArticleData;
  msg: string;
  errorCode: number;
}

export interface ArticleListResult {
  data: { [key: string]: ArticleItem[] };
  msg: string;
  errorCode: number;
}

export interface ArticleItemResult {
  data: ArticleItem;
  msg: string;
  errorCode: number;
}

export interface ArticleData {
  data: Array<ArticleItem> | null | undefined;
  pageSize?: number;
  current?: number;
  total?: number;
}

export interface ArticleItem {
  id: number;
  title: string;
  create_time: string;
  browse_count?: number;
  comment_count?: number;
  content?: string;
  des?: string;
  main_img?: string;
  praise_count?: number;
  tags: TagItem[];
  update_time?: string;
  status?: number;
}

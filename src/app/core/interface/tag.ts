export interface TagResult {
  data: TagData;
  msg: string;
  errorCode: number;
}

export interface TagData {
  data: Array<TagItem>;
  pageSize?: number;
  current?: number;
  total?: number;
}

export interface TagItem {
  id: number;
  name: string;
  des: string;
  color: string;
  bg_color: string;
  [key: string]: any;
  create_time?: string;
  update_time?: string;
}

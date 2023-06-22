export interface ConfigResult {
  data: ConfigData;
  msg: string;
  errorCode: number;
}

export interface ConfigData {
  data: Array<ConfigItem>;
  total?: number;
}

export interface ConfigItem {
  id: number;
  config_dev?: number;
  config_app?: number;
  config_key?: number;
  config_name: string;
  config_value: number;
  config_ext: string;
  create_time?: string;
  update_time?: string;
}

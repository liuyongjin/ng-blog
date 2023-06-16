import { Component, OnInit } from '@angular/core';
import { ConfigItem } from '@app/core/interface/config';
import { ConfigService } from '@app/core/services';
@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.scss'],
})
export class HomeTopComponent implements OnInit {
  public config: ConfigItem[] | undefined;
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.config = [
      {
        id: 1,
        config_dev: 1,
        config_app: 1,
        config_key: 1,
        config_name: 'config_name',
        config_value: 1,
        config_ext: 'config_ext',
        create_time: new Date().toDateString(),
        update_time: new Date().toDateString(),
      },
      {
        id: 2,
        config_dev: 1,
        config_app: 1,
        config_key: 1,
        config_name: 'config_name',
        config_value: 1,
        config_ext: 'config_ext',
        create_time: new Date().toDateString(),
        update_time: new Date().toDateString(),
      },
      {
        id: 3,
        config_dev: 1,
        config_app: 1,
        config_key: 1,
        config_name: 'config_name',
        config_value: 1,
        config_ext: 'config_ext',
        create_time: new Date().toDateString(),
        update_time: new Date().toDateString(),
      },
      {
        id: 4,
        config_dev: 1,
        config_app: 1,
        config_key: 1,
        config_name: 'config_name',
        config_value: new Date().getTime() / 1000,
        config_ext: 'config_ext',
        create_time: new Date().toDateString(),
        update_time: new Date().toDateString(),
      },
    ];
    // this.configService.getConfig().subscribe((res: Config) => {
    //   this.config = res.data.data as ConfigItem[];
    // });
  }
}

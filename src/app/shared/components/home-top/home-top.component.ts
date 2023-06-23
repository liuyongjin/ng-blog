import { Component, OnInit } from '@angular/core';
import { ConfigItem, ConfigResult } from '@app/core/interface/config';
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
    this.configService.getConfig().subscribe((res: ConfigResult) => {
      this.config = res.data.data || [];
    });
  }
}

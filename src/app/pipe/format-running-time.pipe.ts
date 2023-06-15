import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatRunningTime',
})
export class FormatRunningTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const now: any = new Date();
    const diff = now - value * 1000;
    const diffD = Math.floor(diff / (24 * 3600 * 1000));
    //计算天数后剩余的毫秒数
    const leave1 = diff % (24 * 3600 * 1000);
    const diffH = Math.floor(leave1 / (3600 * 1000));
    //计算小时数后剩余的毫秒数
    const leave2 = leave1 % (3600 * 1000);
    const diffM = Math.floor(leave2 / (60 * 1000));
    return `${diffD}天${diffH}时${diffM}分`;
  }
}

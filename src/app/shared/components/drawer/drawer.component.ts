import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagItem } from '@app/core/interface/tag';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Input() tag: TagItem[] = [];
  @Output() selectTag = new EventEmitter<boolean>();
  visible = false;

  toggle(): void {
    this.visible = !this.visible;
  }

  clickHandle(item: any): void {
    this.selectTag.emit(item);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: Item = {};
  @Output() clickedItem = new EventEmitter<number>();

  onClick(): void {
    if (this.item?.no) {
      this.clickedItem.emit(this.item.no);
    }
  }

}

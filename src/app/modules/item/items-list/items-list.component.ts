import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit, OnDestroy{
  constructor(private registeredService: DataService){

  }

  items$: Subscription = new Subscription();
  items: Item[] = []

  ngOnInit(): void {
    this.items$ = this.registeredService.getProducts().subscribe(data => {
      this.items = data;
    });
  }

  filter = '';

  get filteredItems(): Item[] {
    return this.items.filter(x => x.name?.toLowerCase().includes(this.filter.toLowerCase()));
  }

  onClickedItem(no: number) {
  }

  ngOnDestroy(): void {
    this.items$.unsubscribe();
  }
}

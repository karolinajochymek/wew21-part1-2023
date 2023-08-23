import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
 title: string = 'Witamy na szkoleniu';

 constructor() {}

 ngOnInit(): void {

 }

 changeTitle(): void {
  this.title += '!';
 }
}

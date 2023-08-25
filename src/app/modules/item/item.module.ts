import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ItemDetailsGuard } from "src/app/services/guards/item-details.guard";
import { SharedModule } from "../shared/shared.module";
import { ItemsListComponent } from "./items-list/items-list.component";
import { ItemComponent } from "./items-list/item/item.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";

@NgModule({
    declarations: [
      ItemsListComponent,
      ItemComponent,
      ItemDetailsComponent,
    ],
    imports: [
      SharedModule,
      CommonModule,
      FormsModule,
      RouterModule.forChild([
        { path: 'items', component: ItemsListComponent },
        { path: 'items/:id', canActivate: [ ItemDetailsGuard ], component: ItemDetailsComponent }]) // guard pozwalajacy na restrykcje dostepu do podstrony 
        // na bazie wyniku funkcji canActivate (patrz na implementacje guarda) - w tym przypadku routing do strony szczegółów nie zostanie wykonany jesli parametr
        // :id nie będzie cyfrą
    ]

  })
  export class ItemModule { }
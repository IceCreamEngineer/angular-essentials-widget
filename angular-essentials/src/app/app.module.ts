import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user.component";
import { DashboardComponent } from "./dashboard.component";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CartComponent } from './cart/cart.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [AppComponent, UserComponent, DashboardComponent, UserDetailComponent, CartComponent, TabsComponent, ListComponent, ItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

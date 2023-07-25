import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PriceRangeComponent } from './restaurants/price-range/price-range.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './restaurants/menu/menu.component';
import { RatingComponent } from './restaurants/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    PaginationComponent,
    PriceRangeComponent,
    MenuComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu.model';
import { Restaurant } from 'src/app/model/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input()
  restaurant: Restaurant = new Restaurant();

  menu: Menu = new Menu();

  constructor(private service: RestaurantService) {}

  ngOnInit(): void {
    this.service.getMenu(this.restaurant._id).subscribe({
      next: (menu: Menu) => {
        this.menu = menu;
      },
      error: (err: any) => console.log(err),
    });
  }
}

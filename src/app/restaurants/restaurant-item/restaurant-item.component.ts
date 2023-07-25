import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/model/restaurant.model';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css'],
})
export class RestaurantItemComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  @Input()
  restaurant: Restaurant = new Restaurant();

  ngOnInit(): void {}

  openMenu(): void {
    const modalRef = this.modalService.open(MenuComponent);
    modalRef.componentInstance.restaurant = this.restaurant;
  }
}

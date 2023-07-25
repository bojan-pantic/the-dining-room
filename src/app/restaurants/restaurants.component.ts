import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantList } from '../model/restaurant-list.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
  ) {}

  restaurants: RestaurantList = new RestaurantList();

  params = {
    page: 1,
    pageSize: 9,
    sort: 'price',
    sortDirection: 'asc', // asc - rastuce, desc - opadajuce
    filter: {
      cuisine: '',
      priceFrom: 1,
      priceTo: 5,
    },
  };

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      let cuisine = params['cuisine'];
      if (cuisine == 'All') {
        this.params.filter.cuisine = '';
      } else {
        this.params.filter.cuisine = cuisine;
        this.params.page = 1;
      }
      this.getRestaurants();
    });
  }

  getRestaurants() {
    this.service.getAll(this.params).subscribe({
      next: (result: RestaurantList) => {
        this.restaurants = result;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onPageChange(pageNumber: number) {
    this.getRestaurants();
  }

  onPriceChange(formValue: any) {
    this.params.filter.priceFrom = formValue.from;
    this.params.filter.priceTo = formValue.to;
    this.getRestaurants();
  }
}

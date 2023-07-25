import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css'],
})
export class PriceRangeComponent implements OnInit {
  form: FormGroup = new FormGroup({
    from: new FormControl(1),
    to: new FormControl(5),
  });

  constructor() {}

  @Output()
  priceChange: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  onPriceChange() {
    this.priceChange.emit(this.form.value);
  }
}

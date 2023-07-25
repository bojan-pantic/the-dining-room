import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  page: number = 1;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  onPrevious(): void {
    this.pageChange.emit(this.page - 1);
  }

  onNext(): void {
    this.pageChange.emit(this.page + 1);
  }
}

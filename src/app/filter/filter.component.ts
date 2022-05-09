import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Filter Products by Name Id or Country Of Origin';
  searchText;
  heroes = [
    { id: 11, name: 'Air Force 1', country: 'India',image:'./assets/prod1.png' },
    { id: 12, name: 'Air Max 1' , country: 'USA',image:'./assets/prod2.png'},
    { id: 13, name: 'Air Jordan 1' , country: 'UK',image:'./assets/prod3.png'},
    { id: 14, name: 'Air Huarache' , country: 'Canada',image:'./assets/prod4.png' },
    { id: 15, name: 'Nike Waffle Racer' , country: 'Russia',image:'./assets/prod5.png'},
    { id: 16, name: 'Nike Cortez' , country: 'China',image:'./assets/prod6.png'},
    { id: 17, name: 'Air Jordan 11' , country: 'Germany',image:'./assets/prod1.png'},
    { id: 18, name: 'Nike Air Max 90' , country: 'Congo',image:'./assets/prod2.png'}
  ];

}

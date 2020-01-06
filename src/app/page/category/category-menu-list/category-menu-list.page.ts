import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import myData from '../../assets/python/file/trip_word20200105134717.json';

@Component({
  selector: 'app-category-menu-list',
  templateUrl: './category-menu-list.page.html',
  styleUrls: ['./category-menu-list.page.scss'],
})
export class CategoryMenuListPage implements OnInit {


  category_list : Object[] = [
    {
      category_name : "음식",
      category_url : "assets/img/category/test.jpg"
    },
    {
      category_name : "여행",
      category_url : "assets/img/category/test.jpg"
    },
    {
      category_name : "가",
      category_url : "assets/img/category/test.jpg"
    },
    {
      category_name : "나",
      category_url : "assets/img/category/test.jpg"
    }
  ]

  constructor(private http: Http ) { }

  ngOnInit() {
    
  }

}

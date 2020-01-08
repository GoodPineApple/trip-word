import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// import { Http } from '@angular/http';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
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
      category_code : "FOOD",
      category_url : "assets/img/category/test.jpg"
    },
    {
      category_name : "여행",
      category_code : "TRAV",
      category_url : "assets/img/category/test.jpg"
    },
    {
      category_name : "가",
      category_code : "GA",
      category_url : "assets/img/category/test.jpg"
    },
    {
      category_name : "나",
      category_code : "Na",
      category_url : "assets/img/category/test.jpg"
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  goCategory(category_code){
    alert(category_code);

    // location.href="/tabs/category/word-list/"+category_code;

    // let url:string="/tabs/category/word-list/"+category_code;
    // this.router.navigate([url], {state: {}});

    let navigationExtras: NavigationExtras = {
      state: {
        category_code: category_code
      }
    };
    this.router.navigate(['tabs/category/word-list'], navigationExtras);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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

  constructor() {



  }



}

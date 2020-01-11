import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatabaseService, Menu } from 'src/app/services/database.service';
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

  menu_list: Menu[] = [];

  // menu_list : Object[] = [
  //   {
  //     menu_name : "음식",
  //     menu_code : "FOOD",
  //     menu_url : "assets/img/menu/test.jpg"
  //   },
  //   {
  //     menu_name : "여행",
  //     menu_code : "TRAV",
  //     menu_url : "assets/img/menu/test.jpg"
  //   },
  //   {
  //     menu_name : "가",
  //     menu_code : "GA",
  //     menu_url : "assets/img/menu/test.jpg"
  //   },
  //   {
  //     menu_name : "나",
  //     menu_code : "Na",
  //     menu_url : "assets/img/menu/test.jpg"
  //   }
  // ]

  constructor(
    private router: Router,
    private db: DatabaseService
  ) { 

  }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getMenus().subscribe(menus => {
          this.menu_list = menus;
        })
        // this.products = this.db.getProducts();
      }
    });
  }

  goMenu(menu_code){
    let navigationExtras: NavigationExtras = {
      state: {
        menu_code: menu_code
      }
    };
    this.router.navigate(['tabs/category/word-list'], navigationExtras);
  }

}

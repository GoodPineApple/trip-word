import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatabaseService, Menu } from 'src/app/services/database.service';

@Component({
  selector: 'app-mycard-menu-list',
  templateUrl: './mycard-menu-list.page.html',
  styleUrls: ['./mycard-menu-list.page.scss'],
})
export class MycardMenuListPage implements OnInit {

  menu_list: Menu[] = [];
  
  // menu_list : Object[] = [
  //   // {
  //   //   menu_name : "음식",
  //   //   menu_code : "FOOD",
  //   //   menu_url : "assets/img/menu/test.jpg"
  //   // }
  // ]

  constructor(
    private router: Router,
    private db: DatabaseService
  ) { 

  }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getMycardMenus().subscribe(menus => {
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
    this.router.navigate(['tabs/mycard/word-list'], navigationExtras);
  }

  goCategory(){
    this.router.navigate(['tabs/category/menu-list']);
  }

}

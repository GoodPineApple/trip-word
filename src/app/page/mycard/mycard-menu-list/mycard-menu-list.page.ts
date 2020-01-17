import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatabaseService, Menu } from 'src/app/services/database.service';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mycard-menu-list',
  templateUrl: './mycard-menu-list.page.html',
  styleUrls: ['./mycard-menu-list.page.scss'],
})
export class MycardMenuListPage implements OnInit, OnDestroy, AfterViewInit {

  menu_list: Menu[] = [];
  backButtonSubscription;

  exit_cnt: number = 0;

  constructor(
    private router: Router,
    private db: DatabaseService,
    private platform: Platform,
    private toast: ToastController
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

  // ngAfterViewInit() {
  //   this.backButtonSubscription = this.platform.backButton.subscribe(() => {
  //     navigator['app'].exitApp();
  //   });
  // }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    console.log('==================ngAfterViewInit')
    this.exitMyApp();
  }

  exitMyApp(){
    let url = this.platform.url();
    console.log('this.platform.url() :::::::::::::'+this.platform.url());
    if(url.indexOf('/tabs/mycard/menu-list') > -1 || url.indexOf('/tabs/category/menu-list') > -1 || url.indexOf('/tabs/search/search-list') > -1){
      console.log(this.platform.url());

      let that = this;
      this.backButtonSubscription = this.platform.backButton.subscribe(() => {
        this.exit_cnt++;
        if (this.exit_cnt === 1) {
          this.toast.create({
            header: 'Trip-Word!!',
            duration: 2000,
            message: '뒤로가기를 한번 더 누르면 종료됩니다.',
            position: 'bottom',
            showCloseButton: false
          }).then( toast => {
            toast.present();
          });
          setTimeout(function () {
            that.exit_cnt = 0;
          }, 2000);
        } else if (this.exit_cnt === 2) {
          navigator['app'].exitApp();
        }
      });
    }
  }


  goCategory(){
    this.router.navigate(['tabs/category/menu-list']);
  }

}

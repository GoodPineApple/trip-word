import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  NavigationExtras } from '@angular/router';
import {Location} from '@angular/common';
import { DatabaseService, Word, Menu } from 'src/app/services/database.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-category-word-list',
  templateUrl: './category-word-list.page.html',
  styleUrls: ['./category-word-list.page.scss'],
})
export class CategoryWordListPage implements OnInit {
  menu_code: string;
  menu_view: Menu;
  word_list: Word[] = [];
 
  // word_list : Object[] = [
  //   {
  //     "id": "1",
	// 		"menu_code": "BASIC",
	// 		"menu_name": "기초회화",
	// 		"korean": "나",
	// 		"chinese": "我",
	// 		"pronun_ch": "Wǒ",
	// 		"pronun_kr": "워"
  //   },
  //   {
  //     "id": "2",
	// 		"menu_code": "BASIC",
	// 		"menu_name": "기초회화",
	// 		"korean": "너",
	// 		"chinese": "你",
	// 		"pronun_ch": "Nǐ",
	// 		"pronun_kr": "니"
  //   },
  //   {
  //     "id": "3",
	// 		"menu_code": "BASIC",
	// 		"menu_name": "기초회화",
	// 		"korean": "우리",
	// 		"chinese": "我们",
	// 		"pronun_ch": "Wǒmen",
	// 		"pronun_kr": "워먼"
  //   }
  // ]

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private _location: Location,
    private db: DatabaseService,
    private toast: ToastController
  ) {}
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let menu_code = params.get('menu-code');
      this.menu_code = menu_code;
      this.db.getDatabaseState().subscribe(rdy => {
        if (rdy) {
          this.db.getWords(menu_code).then(word_list => {
            this.word_list = word_list;
          })
          // this.products = this.db.getProducts();
        }
      });
    });
  }

  backClicked() {
    this._location.back();
  }

  // goWordView(word_id){
  //   alert(word_id);
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       // menu_code: this.menu_code,
  //       // word_id: word_id
  //       menu_code: "BASIC",
  //       word_id: "1"
  //     }
  //   };
  //   this.router.navigate(['tabs/category/word-view'], navigationExtras);
  // }

  toggleIsMycard(word_id: string){
    console.log("toggleIsMycard : " + word_id)
    this.db.updateWord(word_id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'updated',
        duration: 3000
      });
      toast.present();
    });
  }
}

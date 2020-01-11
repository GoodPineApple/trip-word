import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  NavigationExtras } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-word-list',
  templateUrl: './category-word-list.page.html',
  styleUrls: ['./category-word-list.page.scss'],
})
export class CategoryWordListPage implements OnInit {

  menu_code: string;
 
  word_list : Object[] = [
    {
      "id": "1",
			"menu_code": "BASIC",
			"menu_name": "기초회화",
			"korean": "나",
			"chinese": "我",
			"pronun_ch": "Wǒ",
			"pronun_kr": "워"
    },
    {
      "id": "2",
			"menu_code": "BASIC",
			"menu_name": "기초회화",
			"korean": "너",
			"chinese": "你",
			"pronun_ch": "Nǐ",
			"pronun_kr": "니"
    },
    {
      "id": "3",
			"menu_code": "BASIC",
			"menu_name": "기초회화",
			"korean": "우리",
			"chinese": "我们",
			"pronun_ch": "Wǒmen",
			"pronun_kr": "워먼"
    }
  ]

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private _location: Location
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.menu_code = this.router.getCurrentNavigation().extras.state.menu_code;
      }
    });
  }
 
  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  goWordView(word_id){
    alert(word_id)
    let navigationExtras: NavigationExtras = {
      state: {
        menu_code: this.menu_code,
        word_id: word_id
      }
    };
    this.router.navigate(['tabs/category/word-view'], navigationExtras);
  }
}

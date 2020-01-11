import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-word-view',
  templateUrl: './category-word-view.page.html',
  styleUrls: ['./category-word-view.page.scss'],
})
export class CategoryWordViewPage implements OnInit {

  word_id: string;

  word_view : Object = {
    "id": "1",
    "category_code": "BASIC",
    "category_name": "기초회화",
    "korean": "나",
    "chinese": "我",
    "pronun_ch": "Wǒ",
    "pronun_kr": "워"
  }
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private _location: Location
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.word_id = this.router.getCurrentNavigation().extras.state.word_id;
      }
    });
  }
  ngOnInit() {
  }


  
  backClicked() {
    this._location.back();
  }

}

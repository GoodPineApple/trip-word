import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { DatabaseService, Word } from 'src/app/services/database.service';

@Component({
  selector: 'app-category-word-view',
  templateUrl: './category-word-view.page.html',
  styleUrls: ['./category-word-view.page.scss'],
})
export class CategoryWordViewPage implements OnInit {

  // word_id: string = '';
  word_view2: Word = null;

  // word_view : Object = {
  //   "id": "1",
  //   "category_code": "BASIC",
  //   "category_name": "기초회화",
  //   "korean": "나",
  //   "chinese": "我",
  //   "pronun_ch": "Wǒ",
  //   "pronun_kr": "워"
  // }
  

  constructor(
    private route: ActivatedRoute, 
    private _location: Location,
    private db: DatabaseService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let word_id = params.get('word-id');

      this.db.getDatabaseState().subscribe(rdy => {
        if (rdy) {
          this.db.getWord(word_id).then(word => {
            this.word_view2 = word;
          })
          // this.products = this.db.getProducts();
        }
      });
    });
  }


  
  backClicked() {
    this._location.back();
  }

  toggleIsMycard(word_id: string){
    alert(word_id);
    
    let result = this.db.updateWord(word_id);
    alert(Object.keys(result))
  }
}

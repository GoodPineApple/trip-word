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

  word_id: string = '';
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
    private router: Router, 
    private _location: Location,
    private db: DatabaseService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.word_id = this.router.getCurrentNavigation().extras.state.word_id;
      }
    });
  }
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getWord(this.word_id).then(word => {
          this.word_view2 = word;
        })
        // this.products = this.db.getProducts();
      }
    });
  }


  
  backClicked() {
    this._location.back();
  }

  toggleIsMycard(word_id: string, is_my_word: string){
    alert(word_id);
    alert(is_my_word);
    
    this.db.updateWord(word_id, is_my_word)
  }
}

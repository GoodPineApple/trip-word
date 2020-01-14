import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { DatabaseService, Word } from 'src/app/services/database.service';

@Component({
  selector: 'app-mycard-word-view',
  templateUrl: './mycard-word-view.page.html',
  styleUrls: ['./mycard-word-view.page.scss'],
})
export class MycardWordViewPage implements OnInit {

  word_view2: Word = null;

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

}

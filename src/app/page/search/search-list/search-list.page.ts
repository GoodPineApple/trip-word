import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { DatabaseService, Word, Menu } from 'src/app/services/database.service';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {
  keyword: string;
  word_list: Word[] = [];

  constructor(
    private route: ActivatedRoute, 
    private _location: Location,
    private db: DatabaseService,
    private toast: ToastController
  ) { }

  ngOnInit() {
    // console.log('123----------------');
    // //searchWords
    // this.route.paramMap.subscribe(params => {
    //   let keyword = params.get('keyword');
    //   this.keyword = keyword;
    //   this.db.getDatabaseState().subscribe(rdy => {
    //     if (rdy) {
    //       this.db.searchWords(keyword).then(word_list => {
    //         this.word_list = word_list;
    //       })
    //       // this.products = this.db.getProducts();
    //     }
    //   });
    // });
  }

  searchChanged() {
    if(this.keyword == null || this.keyword == ''){
      this.word_list = [];
      return false;
    }
    //searchWords
    this.route.paramMap.subscribe(params => {
      this.db.getDatabaseState().subscribe(rdy => {
        if (rdy) {
          console.log('keyword :::::: ' + this.keyword);
          this.db.searchWords(this.keyword).then(word_list => {
            this.word_list = word_list;
            console.log(word_list);
          })
          // this.products = this.db.getProducts();
        }
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { DatabaseService, Word, Menu } from 'src/app/services/database.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mycard-word-list',
  templateUrl: './mycard-word-list.page.html',
  styleUrls: ['./mycard-word-list.page.scss'],
})
export class MycardWordListPage implements OnInit {
  menu_code: string;
  menu_view: Menu;
  word_list: Word[] = [];
 
  constructor(
    private route: ActivatedRoute, 
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
          this.db.getMycardWords(menu_code).then(word_list => {
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
}

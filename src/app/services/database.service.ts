import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
 
export interface Menu {
  menu_id: number,
  menu_code: string,
  menu_name: string,
  menu_color: string,
  menu_img: string
}

export interface Word {
  word_id: number,
  menu_code: string,
  menu_name: string,
  korean: string,
  chinese: string,
  pronun_ch: string,
  pronun_kr: string,
  is_my_card: string
}
 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  menus = new BehaviorSubject([]);
  words = new BehaviorSubject([]);
 
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'trip_word.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }
 
  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadMenus();
          this.loadWords();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
 
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getMenus(): Observable<Menu[]> {
    return this.menus.asObservable();
  }
 
  getWords(): Observable<Word[]> {
    return this.words.asObservable();
  }
  
  loadMenus() {
    return this.database.executeSql('SELECT menu_id, menu_code, menu_name, menu_color, menu_img FROM menu', []).then(data => {
      let menus: Menu[] = [];
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          menus.push({ 
          	menu_id: data.rows.item(i).menu_id,
            menu_code: data.rows.item(i).menu_code,
            menu_name: data.rows.item(i).menu_name,
            menu_color: data.rows.item(i).menu_color,
            menu_img: data.rows.item(i).menu_img
           });
        }
      }
      this.menus.next(menus);
    });
  }
 
  loadWords() {
    let query = 'SELECT word_id, menu_code, menu_name, korean, chinese, pronun_ch, pronun_kr, is_my_word FROM word';
    return this.database.executeSql(query, []).then(data => {
      let words = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          words.push({
          	word_id: data.rows.item(i).word_id,
  			menu_code: data.rows.item(i).menu_code,
  			menu_name: data.rows.item(i).menu_name,
  			korean: data.rows.item(i).korean,
  			chinese: data.rows.item(i).chinese,
  			pronun_ch: data.rows.item(i).pronun_ch,
  			pronun_kr: data.rows.item(i).pronun_kr,
  			is_my_card: data.rows.item(i).is_my_card
           });
        }
      }
      this.words.next(words);
    });
  }
  
  // updateWord(is_my_card: any) {
  //   let data = [dev.name, JSON.stringify(dev.skills), dev.img];
  //   return this.database.executeSql(`UPDATE developer SET name = ?, skills = ?, img = ? WHERE id = ${dev.id}`, data).then(data => {
  //     this.loadDevelopers();
  //   })
  // }
  
}
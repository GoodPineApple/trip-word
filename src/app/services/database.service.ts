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
  is_my_word: string
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
          //this.loadWords();
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
 
  // getWords(): Observable<Word[]> {
  //   return this.words.asObservable();
  // }
  
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

  getWords(menu_code): Promise<Word[]> {
    return this.database.executeSql('SELECT word_id, menu_code, menu_name, korean, chinese, pronun_ch, pronun_kr, is_my_word FROM word WHERE menu_code LIKE ?', [menu_code]).then(data => {
      let words: Word[] = [];
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
            is_my_word: data.rows.item(i).is_my_word
           });
        }
      }
      return words;
    });
  }

  getMycardMenus(): Promise<Menu[]> {
    return this.database.executeSql('SELECT * FROM menu where menu_code in (SELECT distinct menu_code FROM word WHERE is_my_word LIKE "Y")',[]).then(data => {
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
      console.log("getMycardMenus Result : " + menus)
      return menus;
    });
  }

  getWord(word_id): Promise<Word> {
    return this.database.executeSql('SELECT word_id, menu_code, menu_name, korean, chinese, pronun_ch, pronun_kr, is_my_word FROM word WHERE word_id LIKE ?', [word_id]).then(data => {
      
      return {
        word_id :  data.rows.item(0).word_id,
        menu_code : data.rows.item(0).menu_code,
        menu_name : data.rows.item(0).menu_name,
        korean : data.rows.item(0).korean,
        chinese : data.rows.item(0).chinese,
        pronun_ch : data.rows.item(0).pronun_ch,
        pronun_kr : data.rows.item(0).pronun_kr,
        is_my_word : data.rows.item(0).is_my_word
      };
    });
  }
 

  // loadWords() {
  //   let query = 'SELECT word_id, menu_code, menu_name, korean, chinese, pronun_ch, pronun_kr, is_my_word FROM word';
  //   return this.database.executeSql(query, []).then(data => {
  //     let words = [];
  //     if (data.rows.length > 0) {
  //       for (var i = 0; i < data.rows.length; i++) {
  //         words.push({
  //         	word_id: data.rows.item(i).word_id,
  //           menu_code: data.rows.item(i).menu_code,
  //           menu_name: data.rows.item(i).menu_name,
  //           korean: data.rows.item(i).korean,
  //           chinese: data.rows.item(i).chinese,
  //           pronun_ch: data.rows.item(i).pronun_ch,
  //           pronun_kr: data.rows.item(i).pronun_kr,
  //           is_my_word: data.rows.item(i).is_my_word
  //          });
  //       }
  //     }
  //     this.words.next(words);
  //   });
  // }
  
  updateWord(word_id: string): Promise<string>  {
    // return this.database.executeSql(`UPDATE word SET is_my_word = "Y" WHERE word_id = "1"`,[]).then(data => {
    //   return data
    // })
    return this.database.executeSql('SELECT word_id, is_my_word FROM word WHERE word_id LIKE ?', [word_id]).then(data => {
      var word_id = data.rows.item(0).word_id;
      var is_my_word = data.rows.item(0).is_my_word
      if(is_my_word == "Y") is_my_word = "N"
      if(is_my_word == "N") is_my_word = "Y"
      return this.database.executeSql(`UPDATE word SET is_my_word = ${is_my_word} WHERE word_id = ${word_id}`).then(data => {
        return data
      })
    })
  }
  
}
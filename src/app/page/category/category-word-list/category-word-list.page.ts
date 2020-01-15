import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  toggleIsMycard(word_id: string){
    console.log("toggleIsMycard : " + word_id)
    this.db.updateWord(word_id).then(async (res) => {
      let messageArr: string[] = [
        "정또은☆ 세상 행복하길",
        "TJ ♥ BEER",
        "JS ♥ EJ 결혼할 때 뭐 해줘야하지...",
        "TM ♥ undefined ㅅㅂ",
        "배고프다. 왜 이시간까지 이걸 하고 있지",
        "뭐 먹을꺼니 태주야. 주말마다 조낸 처먹었다 진짜",
        "잘 놀고 있니? 병신과 머저리들아...? 행복하지? 행복해야해!!!! 더 미쳐 놀아!!!!! 돌아오면 지옥이야",
        "이거 쓰긴 쓰니????????????? 여행중국어 좋음. 강추쓰.",
        "여행중국어가 뭐 별거여?",
        "롤체보다 재밌는 시간 보내고 있니?",
        "어떤 카드를 제일 마니 쓰고 있니 친구들",
        "다른 앱 깐 건 아니지? 여행중국어 좋음",
        "중국 기념품 사자! 모자 살거야??",
        "모자를 모으자 친구들아",
        "자 다음 여행지는 어디인가",
        "중국 여행 또 와야 2.0이 나옵니다 휴먼",
        "2020년엔 행복하자",
        "역시 산에 갔었어야...",
        "칭따오 맥주를 기다리며..",
        "FLEX 해야지?",
        "먹고 싶은 건 먹자!!!"
      ];
      var random = Math.floor(Math.random() * messageArr.length);
      
      await this.toast.create({
        header: 'Trip-Word!!',
        duration: 3000,
        message: messageArr[random],
        position: 'top',
        showCloseButton: true
      }).then( toast => {
        toast.present();
      });
    });
  }
}

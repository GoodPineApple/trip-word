import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { DatabaseService, Word } from 'src/app/services/database.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-category-word-view',
  templateUrl: './category-word-view.page.html',
  styleUrls: ['./category-word-view.page.scss'],
})
export class CategoryWordViewPage implements OnInit {

  word_view2: Word = null;

  constructor(
    private route: ActivatedRoute, 
    private _location: Location,
    private db: DatabaseService,
    private tts: TextToSpeech,
    private toast: ToastController
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

  speak(pronun_ch){
    this.tts.speak({
      text: pronun_ch,
      locale: 'zh-CN',
      rate: 0.75
    }).then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  toggleIsMycard(word_id: string){
    console.log("toggleIsMycard : " + word_id)
    this.db.updateWord(word_id).then(async (res) => {
      let messageArr: string[] = [
        "밤이 되니까 춥다. 아무도 없다. 집에 가고 싶다.",
        "회사에서 이거 하고 있는거 알면 뭐라고 할려나",
        "다현이 사나보다 예쁘다.",
        "TM ♥ Null ㅠㅠㅠㅠㅠㅠㅠㅠ",
        "배고프다. 왜 이시간까지 이걸 하고 있지",
        "다음 해외 여행은 꼭 1년 뒤에 가자. 꼭이야??",
        "앱 더 잘만들 수 있었는데... 칭따오 다시 올래? ",
        "이거 쓰긴 쓰니????????????? 여행중국어 좋음. 강추쓰.",
        "다른 앱 깐 건 아니지? 여행중국어 좋음",
        "중국 기념품 사자! 모자 살거야??"
      ];
      var random = Math.floor(Math.random() * 10);
      
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

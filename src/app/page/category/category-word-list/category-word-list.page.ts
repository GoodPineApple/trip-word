import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-word-list',
  templateUrl: './category-word-list.page.html',
  styleUrls: ['./category-word-list.page.scss'],
})
export class CategoryWordListPage implements OnInit {

  category_code: string;
 
  word_list : Object[] = [
    "111",
    "111",
    "111",
    "111",
    "111",
    "111",
    "111",
    "111",
    "111",
    "111",
    "111",
    "111"
  ]

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.category_code = this.router.getCurrentNavigation().extras.state.category_code;
      }
    });
  }
 
  ngOnInit() {
  }

}

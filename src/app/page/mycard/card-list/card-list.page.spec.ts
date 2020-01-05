import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardListPage } from './card-list.page';

describe('CardListPage', () => {
  let component: CardListPage;
  let fixture: ComponentFixture<CardListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

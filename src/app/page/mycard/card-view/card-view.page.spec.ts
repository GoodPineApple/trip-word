import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardViewPage } from './card-view.page';

describe('CardViewPage', () => {
  let component: CardViewPage;
  let fixture: ComponentFixture<CardViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

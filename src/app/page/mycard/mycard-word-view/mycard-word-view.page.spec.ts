import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycardWordViewPage } from './mycard-word-view.page';

describe('MycardWordViewPage', () => {
  let component: MycardWordViewPage;
  let fixture: ComponentFixture<MycardWordViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycardWordViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycardWordViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

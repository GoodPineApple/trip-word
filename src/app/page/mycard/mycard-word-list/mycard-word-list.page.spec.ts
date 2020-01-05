import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycardWordListPage } from './mycard-word-list.page';

describe('MycardWordListPage', () => {
  let component: MycardWordListPage;
  let fixture: ComponentFixture<MycardWordListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycardWordListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycardWordListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

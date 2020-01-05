import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycardMenuListPage } from './mycard-menu-list.page';

describe('MycardMenuListPage', () => {
  let component: MycardMenuListPage;
  let fixture: ComponentFixture<MycardMenuListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycardMenuListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycardMenuListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycardPage } from './mycard.page';

describe('MycardPage', () => {
  let component: MycardPage;
  let fixture: ComponentFixture<MycardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

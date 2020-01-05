import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryWordViewPage } from './category-word-view.page';

describe('CategoryWordViewPage', () => {
  let component: CategoryWordViewPage;
  let fixture: ComponentFixture<CategoryWordViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWordViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryWordViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

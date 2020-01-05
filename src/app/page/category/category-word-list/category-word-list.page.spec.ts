import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryWordListPage } from './category-word-list.page';

describe('CategoryWordListPage', () => {
  let component: CategoryWordListPage;
  let fixture: ComponentFixture<CategoryWordListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWordListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryWordListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

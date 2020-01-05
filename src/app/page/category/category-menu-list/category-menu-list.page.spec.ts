import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryMenuListPage } from './category-menu-list.page';

describe('CategoryMenuListPage', () => {
  let component: CategoryMenuListPage;
  let fixture: ComponentFixture<CategoryMenuListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMenuListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryMenuListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

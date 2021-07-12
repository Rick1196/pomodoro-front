import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCardMenuComponent } from './todo-card-menu.component';

describe('TodoCardMenuComponent', () => {
  let component: TodoCardMenuComponent;
  let fixture: ComponentFixture<TodoCardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCardMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

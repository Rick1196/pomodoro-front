import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamSectionComponent } from './create-team-section.component';

describe('CreateTeamSectionComponent', () => {
  let component: CreateTeamSectionComponent;
  let fixture: ComponentFixture<CreateTeamSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTeamSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

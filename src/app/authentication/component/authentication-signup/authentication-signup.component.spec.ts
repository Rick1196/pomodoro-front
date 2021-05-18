import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationSignupComponent } from './authentication-signup.component';

describe('AuthenticationSignupComponent', () => {
  let component: AuthenticationSignupComponent;
  let fixture: ComponentFixture<AuthenticationSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationSignupComponent],
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

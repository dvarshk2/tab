import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInStatusComponent } from './check-in-status.component';

describe('CheckInStatusComponent', () => {
  let component: CheckInStatusComponent;
  let fixture: ComponentFixture<CheckInStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckInStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

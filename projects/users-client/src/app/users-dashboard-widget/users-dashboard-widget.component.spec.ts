import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDashboardWidgetComponent } from './users-dashboard-widget.component';

describe('UsersDashboardWidgetComponent', () => {
  let component: UsersDashboardWidgetComponent;
  let fixture: ComponentFixture<UsersDashboardWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDashboardWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDashboardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

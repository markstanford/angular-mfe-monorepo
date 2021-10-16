import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesDashboardWidgetComponent } from './messages-dashboard-widget.component';

describe('MessagesDashboardWidgetComponent', () => {
  let component: MessagesDashboardWidgetComponent;
  let fixture: ComponentFixture<MessagesDashboardWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesDashboardWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesDashboardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

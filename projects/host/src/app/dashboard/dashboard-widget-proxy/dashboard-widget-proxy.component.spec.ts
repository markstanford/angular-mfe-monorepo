import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetProxyComponent } from './dashboard-widget-proxy.component';

describe('DashboardWidgetProxyComponent', () => {
  let component: DashboardWidgetProxyComponent;
  let fixture: ComponentFixture<DashboardWidgetProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWidgetProxyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWidgetProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProxyComponent } from './widget-proxy.component';

describe('DashboardWidgetProxyComponent', () => {
  let component: WidgetProxyComponent;
  let fixture: ComponentFixture<WidgetProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetProxyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

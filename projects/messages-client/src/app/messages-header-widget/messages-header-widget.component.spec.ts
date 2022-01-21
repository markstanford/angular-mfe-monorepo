import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesHeaderWidgetComponent } from './messages-header-widget.component';

describe('MessagesHeaderWidgetComponent', () => {
  let component: MessagesHeaderWidgetComponent;
  let fixture: ComponentFixture<MessagesHeaderWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesHeaderWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesHeaderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

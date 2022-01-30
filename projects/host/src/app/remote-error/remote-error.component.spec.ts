import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteErrorComponent } from './remote-error.component';

describe('RemoteErrorComponent', () => {
  let component: RemoteErrorComponent;
  let fixture: ComponentFixture<RemoteErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

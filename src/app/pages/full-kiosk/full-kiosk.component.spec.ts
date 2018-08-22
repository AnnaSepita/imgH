import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullKioskComponent } from './full-kiosk.component';

describe('FullKioskComponent', () => {
  let component: FullKioskComponent;
  let fixture: ComponentFixture<FullKioskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullKioskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullKioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

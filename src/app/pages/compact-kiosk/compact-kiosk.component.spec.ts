import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactKioskComponent } from './compact-kiosk.component';

describe('CompactKioskComponent', () => {
  let component: CompactKioskComponent;
  let fixture: ComponentFixture<CompactKioskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactKioskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactKioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

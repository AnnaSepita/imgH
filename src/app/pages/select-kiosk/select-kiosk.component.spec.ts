import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectKioskComponent } from './select-kiosk.component';

describe('SelectKioskComponent', () => {
  let component: SelectKioskComponent;
  let fixture: ComponentFixture<SelectKioskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectKioskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectKioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

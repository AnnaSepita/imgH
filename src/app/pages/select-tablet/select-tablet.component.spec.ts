import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTabletComponent } from './select-tablet.component';

describe('SelectTabletComponent', () => {
  let component: SelectTabletComponent;
  let fixture: ComponentFixture<SelectTabletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTabletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

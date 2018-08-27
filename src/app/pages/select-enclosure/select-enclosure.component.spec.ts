import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEnclosureComponent } from './select-enclosure.component';

describe('SelectEnclosureComponent', () => {
  let component: SelectEnclosureComponent;
  let fixture: ComponentFixture<SelectEnclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEnclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEnclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

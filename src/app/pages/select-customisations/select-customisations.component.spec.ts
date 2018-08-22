import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomisationsComponent } from './select-customisations.component';

describe('SelectCustomisationsComponent', () => {
  let component: SelectCustomisationsComponent;
  let fixture: ComponentFixture<SelectCustomisationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCustomisationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

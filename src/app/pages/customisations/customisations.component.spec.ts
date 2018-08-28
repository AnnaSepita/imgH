import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisationsComponent } from './customisations.component';

describe('CustomisationsComponent', () => {
  let component: CustomisationsComponent;
  let fixture: ComponentFixture<CustomisationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomisationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

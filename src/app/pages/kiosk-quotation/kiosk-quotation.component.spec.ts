import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskQuotationComponent } from './kiosk-quotation.component';

describe('KioskQuotationComponent', () => {
  let component: KioskQuotationComponent;
  let fixture: ComponentFixture<KioskQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioskQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

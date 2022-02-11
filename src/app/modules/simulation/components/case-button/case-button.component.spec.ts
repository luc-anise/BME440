import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseButtonComponent } from './case-button.component';

describe('CaseButtonComponent', () => {
  let component: CaseButtonComponent;
  let fixture: ComponentFixture<CaseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadResultCurveGComponent } from './load-result-curve.component';

describe('AvailabilityTableComponent', () => {
  let component: LoadResultCurveGComponent;
  let fixture: ComponentFixture<LoadResultCurveGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadResultCurveGComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadResultCurveGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

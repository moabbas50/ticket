import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEnComponent } from './chart-en.component';

describe('ChartEnComponent', () => {
  let component: ChartEnComponent;
  let fixture: ComponentFixture<ChartEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartEnComponent]
    });
    fixture = TestBed.createComponent(ChartEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

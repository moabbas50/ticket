import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbicsharedComponent } from './arbicshared.component';

describe('ArbicsharedComponent', () => {
  let component: ArbicsharedComponent;
  let fixture: ComponentFixture<ArbicsharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbicsharedComponent]
    });
    fixture = TestBed.createComponent(ArbicsharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

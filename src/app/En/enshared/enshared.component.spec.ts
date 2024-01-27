import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENsharedComponent } from './enshared.component';

describe('ENsharedComponent', () => {
  let component: ENsharedComponent;
  let fixture: ComponentFixture<ENsharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ENsharedComponent]
    });
    fixture = TestBed.createComponent(ENsharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

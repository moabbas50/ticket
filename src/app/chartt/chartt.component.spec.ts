import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHarttComponent } from './chartt.component';

describe('CHarttComponent', () => {
  let component: CHarttComponent;
  let fixture: ComponentFixture<CHarttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CHarttComponent]
    });
    fixture = TestBed.createComponent(CHarttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

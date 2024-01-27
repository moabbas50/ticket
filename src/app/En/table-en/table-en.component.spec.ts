import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnComponent } from './table-en.component';

describe('TableEnComponent', () => {
  let component: TableEnComponent;
  let fixture: ComponentFixture<TableEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableEnComponent]
    });
    fixture = TestBed.createComponent(TableEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

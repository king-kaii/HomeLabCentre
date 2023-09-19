import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditstaffsComponent } from './addeditstaffs.component';

describe('AddeditstaffsComponent', () => {
  let component: AddeditstaffsComponent;
  let fixture: ComponentFixture<AddeditstaffsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditstaffsComponent]
    });
    fixture = TestBed.createComponent(AddeditstaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

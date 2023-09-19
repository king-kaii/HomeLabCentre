import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPresciptionComponent } from './view-presciption.component';

describe('ViewPresciptionComponent', () => {
  let component: ViewPresciptionComponent;
  let fixture: ComponentFixture<ViewPresciptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPresciptionComponent]
    });
    fixture = TestBed.createComponent(ViewPresciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDocComponent } from './find-doc.component';

describe('FindDocComponent', () => {
  let component: FindDocComponent;
  let fixture: ComponentFixture<FindDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindDocComponent]
    });
    fixture = TestBed.createComponent(FindDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

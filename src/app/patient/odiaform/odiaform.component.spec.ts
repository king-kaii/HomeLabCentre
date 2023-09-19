import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiaformComponent } from './odiaform.component';

describe('OdiaformComponent', () => {
  let component: OdiaformComponent;
  let fixture: ComponentFixture<OdiaformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdiaformComponent]
    });
    fixture = TestBed.createComponent(OdiaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

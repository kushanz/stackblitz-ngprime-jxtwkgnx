import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F2Component } from './f-2.component';

describe('F2Component', () => {
  let component: F2Component;
  let fixture: ComponentFixture<F2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkInputWrapperComponent } from './ek-input-wrapper.component';

describe('EkInputWrapperComponent', () => {
  let component: EkInputWrapperComponent;
  let fixture: ComponentFixture<EkInputWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkInputWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

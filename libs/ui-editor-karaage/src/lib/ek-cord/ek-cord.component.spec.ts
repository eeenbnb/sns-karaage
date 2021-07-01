import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkCordComponent } from './ek-cord.component';

describe('EkCordComponent', () => {
  let component: EkCordComponent;
  let fixture: ComponentFixture<EkCordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkCordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkCordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

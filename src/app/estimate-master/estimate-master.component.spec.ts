import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateMasterComponent } from './estimate-master.component';

describe('EstimateMasterComponent', () => {
  let component: EstimateMasterComponent;
  let fixture: ComponentFixture<EstimateMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

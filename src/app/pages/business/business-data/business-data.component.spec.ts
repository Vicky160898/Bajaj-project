import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDataComponent } from './business-data.component';

describe('BusinessDataComponent', () => {
  let component: BusinessDataComponent;
  let fixture: ComponentFixture<BusinessDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

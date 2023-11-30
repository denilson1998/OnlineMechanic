import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMechanicWorkShopComponent } from './register-mechanic-work-shop.component';

describe('RegisterMechanicWorkShopComponent', () => {
  let component: RegisterMechanicWorkShopComponent;
  let fixture: ComponentFixture<RegisterMechanicWorkShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMechanicWorkShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMechanicWorkShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

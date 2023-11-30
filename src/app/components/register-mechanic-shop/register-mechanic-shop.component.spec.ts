import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMechanicShopComponent } from './register-mechanic-shop.component';

describe('RegisterMechanicShopComponent', () => {
  let component: RegisterMechanicShopComponent;
  let fixture: ComponentFixture<RegisterMechanicShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMechanicShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMechanicShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

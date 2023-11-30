import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsByMechanicComponent } from './applications-by-mechanic.component';

describe('ApplicationsByMechanicComponent', () => {
  let component: ApplicationsByMechanicComponent;
  let fixture: ComponentFixture<ApplicationsByMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsByMechanicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationsByMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlogComponent } from './navlog.component';

describe('NavlogComponent', () => {
  let component: NavlogComponent;
  let fixture: ComponentFixture<NavlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

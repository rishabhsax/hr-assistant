import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManagerComponent } from './hr-manager.component';

describe('HrManagerComponent', () => {
  let component: HrManagerComponent;
  let fixture: ComponentFixture<HrManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

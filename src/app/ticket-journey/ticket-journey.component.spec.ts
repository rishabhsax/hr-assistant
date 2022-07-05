import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketJourneyComponent } from './ticket-journey.component';

describe('TicketJourneyComponent', () => {
  let component: TicketJourneyComponent;
  let fixture: ComponentFixture<TicketJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

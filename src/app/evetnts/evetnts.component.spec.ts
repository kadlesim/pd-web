import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvetntsComponent } from './evetnts.component';

describe('EvetntsComponent', () => {
  let component: EvetntsComponent;
  let fixture: ComponentFixture<EvetntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvetntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvetntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

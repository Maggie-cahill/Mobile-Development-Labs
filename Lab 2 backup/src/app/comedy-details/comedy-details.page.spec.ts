import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComedyDetailsPage } from './comedy-details.page';

describe('ComedyDetailsPage', () => {
  let component: ComedyDetailsPage;
  let fixture: ComponentFixture<ComedyDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

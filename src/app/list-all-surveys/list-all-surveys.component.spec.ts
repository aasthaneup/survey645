import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSurveysComponent } from './list-all-surveys.component';

describe('ListAllSurveysComponent', () => {
  let component: ListAllSurveysComponent;
  let fixture: ComponentFixture<ListAllSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

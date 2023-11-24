import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBartComponent } from './chart-bart.component';

describe('ChartBartComponent', () => {
  let component: ChartBartComponent;
  let fixture: ComponentFixture<ChartBartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartBartComponent]
    });
    fixture = TestBed.createComponent(ChartBartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

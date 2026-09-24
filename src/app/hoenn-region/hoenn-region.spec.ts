import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoennRegion } from './hoenn-region';

describe('HoennRegion', () => {
  let component: HoennRegion;
  let fixture: ComponentFixture<HoennRegion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennRegion],
    }).compileComponents();

    fixture = TestBed.createComponent(HoennRegion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperViewComponent } from './swiper-view.component';

describe('SwiperViewComponent', () => {
  let component: SwiperViewComponent;
  let fixture: ComponentFixture<SwiperViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperViewComponent]
    });
    fixture = TestBed.createComponent(SwiperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

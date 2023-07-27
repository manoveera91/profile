import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { SliderViewComponent } from './slider-view/slider-view.component';
import { SwiperViewComponent } from './swiper-view/swiper-view.component';
const routes: Routes = [
  {
    path: '',
    component: CardViewComponent
  },
  {
    path: 'recommendations',
    component: SwiperViewComponent
  },
  {
    path: ':id',
    component: SliderViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

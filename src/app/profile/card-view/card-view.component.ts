import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { register } from 'swiper/element/bundle';
import SwiperCore, { Swiper } from 'swiper';
import { MatSnackBar } from '@angular/material/snack-bar';
register();
SwiperCore.use([]);
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {
  profileData = [];
  swiperCard!: Swiper
  constructor(public service: AppService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.get().subscribe((data) => {
      console.log(data);
      this.profileData = data;
    })
  }
  ngAfterViewInit(): void {
    this.swiperCard = new Swiper('.swiper', {
      speed: 400,
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
  }

  slideNext() {
    this.swiperCard.slideNext();
  }
}

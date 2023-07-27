import {
  Component, AfterViewInit, OnInit, ViewChild, ElementRef
} from '@angular/core';
import { AppService } from 'src/app/app.service';
import { register } from 'swiper/element/bundle';
import SwiperCore, { Swiper } from 'swiper';
import { MatSnackBar } from '@angular/material/snack-bar';
register();
SwiperCore.use([]);
@Component({
  selector: 'app-swiper-view',
  templateUrl: './swiper-view.component.html',
  styleUrls: ['./swiper-view.component.scss']
})
export class SwiperViewComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;
  profileData = [];
  show = false;
  swiper!: Swiper;
  constructor(public service: AppService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.get().subscribe((data) => {
      console.log(data);
      this.profileData = data;
    });
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper(this.swiperContainerRef.nativeElement, {
      speed: 400,
      spaceBetween: 100,
      effect: 'cards',
      on: {
        slideChange: () => {
          if (this.swiper.activeIndex > this.swiper.previousIndex) {
            this.openSnackBar('Interested on profile', '');
          } else {
            this.openSnackBar('Not Interested on profile', '');
          }
        }
      }
    });
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, '', {
      duration: 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
    if (action === 'done') {
      this.swiper.slideNext();
    } else if (action === 'close') {
      this.swiper.slidePrev();
    }
  }
}

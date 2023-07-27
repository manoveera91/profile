import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-slider-view',
  templateUrl: './slider-view.component.html',
  styleUrls: ['./slider-view.component.scss']
})
export class SliderViewComponent {
  profileData: any = {};
  id: number;
  constructor(public service: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getByID(this.id).subscribe((data) => {
      console.log(data);
      this.profileData = data;
    })
  }
}

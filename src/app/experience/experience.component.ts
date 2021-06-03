import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { coursesMock, MockService } from '../mock.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  public data: Array<{ title: string, description: string, img: string }> = [];
  public experienceObs: Observable<coursesMock>;

  constructor(private MockService: MockService) {
    this.experienceObs = this.MockService.getExperience();
    this.experienceObs.subscribe(course => {
      this.data = course;
    }
    )
  }

}

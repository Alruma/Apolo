import { MockService, coursesMock } from './../mock.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  public data: Array<{ title: string, description: string, img: string }> = [];
  public coursesOb: Observable<coursesMock>;

  constructor(private MockService: MockService) {
    this.coursesOb = this.MockService.getCourses();
    this.coursesOb.subscribe(course => {
      this.data = course;
    }
    )
  }
}

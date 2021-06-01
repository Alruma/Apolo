import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  public data : Array<{title:string, description:string, img : string}> = [];

  async courses(){
    const res = await fetch('assets/mock.json');
    this.data = await res.json();
  }

  ngOnInit(){
    this.courses();
  }
}


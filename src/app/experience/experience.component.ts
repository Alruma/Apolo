import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public data : Array<{title:string, description:string, img : string}> = [];

  async getData(){
    const res = await fetch('assets/mock2.json');
    this.data = await res.json()
  }

  ngOnInit(): void {
    this.getData();
  }

}

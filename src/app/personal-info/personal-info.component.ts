import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Input() public name : string = "";
  @Input() public birthday : string = "";
  @Input() public occupation : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

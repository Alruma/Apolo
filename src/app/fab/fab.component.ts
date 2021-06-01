import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})

export class FabComponent implements AfterViewInit{
  @Input() top? : string;
  @Input() right? : string;
  @Input() bottom? : string;
  @Input() left? : string;
  @ViewChild('button') el! : ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    if(this.top){
      this.el.nativeElement.style.top = this.top;
    }
    if(this.right){
      this.el.nativeElement.style.right = this.right;
    }
    if(this.bottom){
      this.el.nativeElement.style.bottom = this.bottom;
    }
    if(this.left){
      this.el.nativeElement.style.left = this.left;
    }
  }
}

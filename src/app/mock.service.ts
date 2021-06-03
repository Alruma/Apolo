import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export type coursesMock = Array<{title : string, description : string, img : string}>


@Injectable({
  providedIn: 'root'
})

export class MockService {
  
  constructor(private http : HttpClient){
  }
  getCourses(){
    return this.http.get<coursesMock>('assets/mock.json');
  }
  getExperience(){
    return this.http.get<coursesMock>('assets/mock2.json');
  }
}

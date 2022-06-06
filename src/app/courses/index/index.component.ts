import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // myCourses: Course[] = [];
  constructor(/* public courseService: CourseService */) {
    // this.courseService.all().subscribe(
    //   (data)=>{
    //     this.myCourses=data;
    //   }
    // )
  }

  ngOnInit(): void {
  }

}

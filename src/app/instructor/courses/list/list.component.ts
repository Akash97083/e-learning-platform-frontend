import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../types/course";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  myCourses: Course[] = [];
  constructor(public courseService: CourseService) {
    this.courseService.all().subscribe(
      (data)=>{
        this.myCourses=data;
      }
    )
  }

  ngOnInit(): void {
  }

}

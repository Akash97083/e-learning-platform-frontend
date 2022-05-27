import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.css']
})
export class TopCoursesComponent implements OnInit {
  topCourses=[
    {
      name:'Learn Python: The Complete Python Programming Course',
      description:'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
      image:'https://img-b.udemycdn.com/course/480x270/394676_ce3d_5.jpg',
      category:'Python',
      created_at: Date.now(),
      instructor:{
        name:'Avinash Jain',
        image:'https://img-b.udemycdn.com/user/200_H/10260436_946b_6.jpg'
      }
    },
    {
      name:'Angular - The Complete Guide (2022 Edition)',
      description:'Master Angular 13 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
      image:'https://img-b.udemycdn.com/course/240x135/756150_c033_2.jpg',
      category:'Angular',
      created_at: Date.now(),
      instructor:{
        name:'Jason W.',
        image:'https://img-c.udemycdn.com/user/200_H/18928830_573e_2.jpg'
      }
    },
    {
      name:'Photoshop Master Course: From Beginner to Photoshop Pro',
      description:'This Adobe Photoshop Beginner Course will teach a Beginner Photoshop user all essentials of Adobe Photoshop CC',
      image:'https://img-b.udemycdn.com/course/240x135/16799_e077_20.jpg',
      category:'Design',
      created_at: Date.now(),
      instructor:{
        name:'Amanda Z.',
        image:'https://img-b.udemycdn.com/user/200_H/883358_a3a7.jpg'
      }
    },
  ]
  constructor() { }

  ngOnInit(): void {

  }

}

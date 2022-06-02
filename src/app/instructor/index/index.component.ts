import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  sideBarItems = [
    {
      name: 'Dashboard',
      icon: 'fa fa-tachometer',
      route: '/instructor',
    },
    {
      name: 'Courses',
      icon: 'fa fa-book',
      route: '/instructor/courses',
    },
    {
      name: 'Students',
      icon: 'fa fa-users',
      route: '/instructor/courses',
    },
    {
      name: 'Assignments',
      icon: 'fa fa-file-text',
      route: '/instructor/courses',
    },
    {
      name: 'Grades',
      icon: 'fa fa-graduation-cap',
      route: '/instructor/courses',
    },
    {
      name: 'Settings',
      icon: 'fa fa-cog',
      route: '/instructor/settings',
    },
  ];
  userMenuItems = [
    {
      name: 'Profile',
      route: '/instructor/profile',
    },
    {
      name: 'Profile',
      route: '/instructor/logout',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  sideBarItems = [
    {
      name: 'Stats',
      icon: 'fa-solid fa-gauge-high',
      route: '/admin',
    },
    {
      name: 'Courses',
      icon: 'fa-solid fa-book-open-reader',
      route: '/admin/courses',
    },
    {
      name: 'Instructors',
      icon: 'fa-solid fa-people-group',
      route: '/admin/instructors',
    },
    {
      name: 'Students',
      icon: 'fa-solid fa-people-roof',
      route: '/admin/students',
    },
    {
      name: 'Settings',
      icon: 'fa-solid fa-screwdriver-wrench',
      route: '/admin/settings',
    },
  ];

  
  userMenuItems = [
    {
      name: 'Profile',
      route: '/admin/profile',
    },
    {
      name: 'Logout',
      route: '/admin/logout',
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

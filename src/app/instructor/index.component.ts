import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  sideBarItems = [
    {
      name: 'Overview',
      icon: 'fa fa-tachometer',
      route: '/instructor',
    },
    {
      name: 'Courses',
      icon: 'fa fa-book',
      route: '/instructor/courses',
    },
    {
      name: 'Chat',
      icon: 'fa fa-message',
      route: '/instructor/chat',
    },
    {
      name: 'Earnings',
      icon: 'fa fa-money-bill-alt',
      route: '/instructor/earnings',
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
      name: 'Logout',
      route: '/instructor/logout',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

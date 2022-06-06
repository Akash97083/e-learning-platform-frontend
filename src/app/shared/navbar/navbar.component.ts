import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mobileMenu: Boolean = false
  profileMenu: Boolean = false
  profileItems=[
    {title:"Profile", route:"/account"},
    {title:"Settings", route:"/account/settings"},
    {title:"Sign out", route:"/account/sign-out"},
  ];
  navbarItems=[
    {title:"Courses", route:"/courses"},
    {title:"Categories", route:"/Categories"},
    {title:"Become Instructor", route:"/become-instructor"},
    {title:"About us", route:"/about"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}


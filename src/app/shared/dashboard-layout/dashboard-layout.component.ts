import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
  @Input() sideBarItems:any = [];
  @Input() userMenuItems:any = [];

  @Input() userAvatar:string = '';
  userMenuOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

}

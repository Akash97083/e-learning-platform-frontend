import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  tabs = [
    {
      id: 1,
      name: 'Basic Info',
      icon: 'fa fa-info-circle',
    },
    {
      id: 2,
      name: 'Description',
      icon: 'fa fa-align-left',
    },
    {
      id: 3,
      name: 'Content',
      icon: 'fa fa-list-alt',
    },
    {
      id: 4,
      name: 'Pricing',
      icon: 'fa fa-money-bill-alt',
    }];
  currentTab = this.tabs[0];
  constructor() { }

  ngOnInit(): void {
  }

}

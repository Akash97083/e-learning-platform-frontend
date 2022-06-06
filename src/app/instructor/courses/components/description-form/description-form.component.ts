import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-form',
  templateUrl: './description-form.component.html',
  styleUrls: ['./description-form.component.css']
})
export class DescriptionFormComponent implements OnInit {
  htmlContent = '';
  constructor() { }

  ngOnInit(): void {
  }

}

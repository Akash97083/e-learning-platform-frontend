import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.css']
})
export class InputErrorsComponent implements OnInit {
  @Input() fieldName = '';
  @Input() fieldData: any;
  constructor() {

  }

  ngOnInit(): void {
  }

}

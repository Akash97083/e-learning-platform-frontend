import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent implements OnInit {
  @Input() label = '';
  @Input() mainText = '';
  @Input() subText = '';
  @Input() raise = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

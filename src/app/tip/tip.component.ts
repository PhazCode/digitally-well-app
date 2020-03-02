import { Component, OnInit, Input } from '@angular/core';
import { Tip } from '../services/data.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
})
export class TipComponent implements OnInit {
  @Input() tip: Tip;

  constructor() { }

  ngOnInit() {}
}
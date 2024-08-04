import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Output() selectesData = new EventEmitter()
  constructor() {}

  ngOnInit() {}
  detectChages(event: any) {
    this.selectesData.emit(event)
  }
}


import { Component, EventEmitter, Output, Input } from '@angular/core';

import { SharedService } from '../shared-service.service';

@Component({
  selector: 'child1-component',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component {
  constructor(private sharedService1: SharedService) {}
  child2Value: string;
  child1value: string;
  setSharedValue1() {
    this.sharedService1.sharedvalue1 = this.child2Value;
    this.sharedService1.sharedvalue1 = this.child1value;
  }
}

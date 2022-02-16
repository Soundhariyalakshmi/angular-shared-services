import { Component, EventEmitter, Output, Input } from '@angular/core';

import { SharedService } from '../shared-service.service';

@Component({
  selector: 'child2-component',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component {
  child2Value: string;

  constructor(private sharedService: SharedService) {}

  setSharedValue() {
    this.sharedService.sharedValue = this.child2Value;
  }
}

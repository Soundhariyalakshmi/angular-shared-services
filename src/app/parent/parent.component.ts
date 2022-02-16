import { Component } from '@angular/core';

import { SharedService } from '../shared-service.service';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',
  styleUrls: [ './parent.component.css' ]
})
export class ParentComponent {
  constructor(private sharedService: SharedService) { }
}

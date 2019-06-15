import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-ratio',
  templateUrl: './ratio.component.html',
  styleUrls: ['./ratio.component.css']
})

export class RatioComponent {
  @Input() topRatio = 0.67;
  @Input() bottomRatio = 0.50;
}

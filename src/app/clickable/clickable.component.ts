import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-clickable',
  templateUrl: './clickable.component.html',
  styleUrls: ['./clickable.component.css']
})
export class ClickableComponent {

  @Input() cell: any;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClicked = new EventEmitter<boolean>();

  constructor() { }


  click(): void {
      this.onClicked.emit(this.cell);
  }

}

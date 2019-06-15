import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
@Component({
  selector: 'clickable-cell',
  templateUrl: './clickable.parent.component.html',
  styleUrls: ['./clickable.parent.component.css']
})

export class ClickableParentComponent implements ICellRendererAngularComp {
    private params: any;
    public cell: any;

    agInit(params: any): void {
        this.params = params;
        this.cell = {row: params.value, col: params.colDef.headerName};
    }

    public clicked(cell: any): void {
        console.log('Child Cell Clicked: ' + JSON.stringify(cell));
    }

    refresh(): boolean {
        return false;
    }
}

import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-master-detail',
    templateUrl: './master-detail.component.html',
    styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent {
    @Output() toggleClicked = new EventEmitter<boolean>();
    @Input() hideDetail = true;
    @Input() disableDetail = false;

    constructor() { }

    toggleDetail() {
        if (this.disableDetail) {
            return;
        }

        this.toggleClicked.emit(this.hideDetail = !this.hideDetail);
    }
}
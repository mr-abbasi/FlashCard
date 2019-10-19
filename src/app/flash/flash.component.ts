import { Component, Input } from '@angular/core';
import { IFlash } from '../models/flash.model';

@Component({
    selector: 'app-flash',
    templateUrl: './flash.component.html',
    styleUrls: ['./flash.component.scss']
})
export class FlashComponent {
    @Input() flash: IFlash = {
        id: 1,
        question: 'react to angular',
        answer: 'No Reaction :)',
        show: false
    }
}

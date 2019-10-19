import { Component, Input, Output, EventEmitter } from '@angular/core';
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

    @Output() onToggleCard: EventEmitter<number> = new EventEmitter();
    @Output() onDelete: EventEmitter<number> = new EventEmitter();
    @Output() onEdite: EventEmitter<number> = new EventEmitter();
    @Output() onRemeberedChange: EventEmitter<object> = new EventEmitter();

    toggleCard() {
        this.onToggleCard.emit(this.getId);
    }

    markCorrect() {
        let flag: string = 'correct';
        this.onRemeberedChange.emit(this.getFlagObject(flag));
    }

    markIncorrect() {
        let flag: string = 'incorrect';
        this.onRemeberedChange.emit(this.getFlagObject(flag));
    }

    editFlash() {
        this.onEdite.emit(this.getId);
    }

    deleteFlash() {
        this.onDelete.emit(this.getId);
    }

    private get getId(): number {
        return this.flash.id;
    }

    private getFlagObject(flag: string): object {
        return {
            id: this.getId,
            flag: flag
        };
    }
}

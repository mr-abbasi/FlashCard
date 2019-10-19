import { Component } from '@angular/core';
import { IFlash } from './models/flash.model';
import { MathUtil } from './utilities/math.util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng-flashcards';
    private digits: number = 5;

    flashs: IFlash[] = [
        { id: MathUtil.getRandomNumber(this.digits), answer: 'Answer 1', question: 'Question 1', show: false },
        { id: MathUtil.getRandomNumber(this.digits), answer: 'Answer 2', question: 'Question 2', show: false },
        { id: MathUtil.getRandomNumber(this.digits), answer: 'Answer 3', question: 'Question 3', show: false }
    ];

    trackFlashById(index: number, flash: IFlash) {
        return flash.id;
    }
}

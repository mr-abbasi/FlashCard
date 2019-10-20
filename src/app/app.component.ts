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
    private editing: boolean = false;
    private editId: number;


    flashs: IFlash[] = [
        { id: MathUtil.getRandomNumber(this.digits), answer: 'Answer 1', question: 'Question 1', show: false },
        { id: MathUtil.getRandomNumber(this.digits), answer: 'Answer 2', question: 'Question 2', show: false },
        { id: MathUtil.getRandomNumber(this.digits), answer: 'Answer 3', question: 'Question 3', show: false }
    ];

    trackFlashById(index: number, flash: IFlash) {
        return flash.id;
    }

    handleToggleCard(id: number) {
        const flash = this.flashs.find(f => f.id === id);
        flash.show = !flash.show;
    }

    handleEdit(id: number) {
        this.editing = true;
        this.editId = id;

        //TODO: I will add editing logic after adding the form.
    }

    handleDelete(id: number) {
        const flash = this.find(id);
        if (flash) {
            const index = this.flashs.indexOf(flash);
            this.flashs.splice(index, 1);
        }
    }

    handleRememberedChange({ id, flag }) {
        const flash = this.find(id);
        if (flash) {
            flash.remembered = flag;
        }
    }

    private find(id: number): IFlash {
        return this.flashs.find(f => f.id == id);
    }
}

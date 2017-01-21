import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StartComponent implements OnChanges {
    @Input() rating: number = 4
    starWidth: number
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        this.starWidth = this.rating * 86 / 5
    }

    onClick(): void {
        this.ratingClicked.emit(`the rating ${this.rating} was clicket`)
    }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pip-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class PipTestComponent {
    @Input() text: string = 'This is a test component';
    @Output() event = new EventEmitter();

    public constructor() {}

    public onClick(): void {
        this.event.emit(this.text);
    }
}

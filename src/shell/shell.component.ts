import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PipMediaService } from 'pip-webui2-layouts';

@Component({
    selector: 'pip-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss']
})
export class PipShellComponent {

    public constructor( public media: PipMediaService) {
        media.activate();
    }

    public 
}

import { Component } from '@angular/core';
import { PipMediaService } from 'pip-webui2-layouts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public media: PipMediaService
  ) {
    media.activate();
  }

  public list: any[] = [
    {
      name: 'Appbar', id: 'appbar', route: 'appbar'
    },
    {
      name: 'Sidenav', id: 'sidenav', route: 'sidenav'
    }
  ];

  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;
    
  }
}

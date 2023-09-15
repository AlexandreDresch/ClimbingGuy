import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
})
export class BigCardComponent {
  @Input()
  image: string = '';
  @Input()
  height: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  id: string = '0';
}

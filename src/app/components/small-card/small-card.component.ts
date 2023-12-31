import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
})
export class SmallCardComponent {
  @Input()
  image: string = '';
  @Input()
  height: string = '';
  @Input()
  title: string = '';
  @Input()
  id: string = '0';
}

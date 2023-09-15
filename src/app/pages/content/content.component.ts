import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/mocks/posts';
import { Post, Slide } from 'src/app/types/post.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {
  @Input()
  slides:Slide[] = [];
  @Input()
  title: string = '';
  @Input()
  content: string[] = [];

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id!)
  }

  setValuesToComponent(id: string) {
    const result = posts.filter((post: Post) => post.id === +id)[0];

    if (result) {
      this.title = result.title;
      this.content = result.content;
      this.slides = result.slides;
    }
  }
}

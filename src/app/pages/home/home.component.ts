import { Component } from '@angular/core';
import { posts } from 'src/app/mocks/posts';
import { Post } from 'src/app/types/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  postArr:Post[] = posts;
}

import { Component, OnInit } from '@angular/core';
import { usuario } from '../shared/models/usuario.model';
import { post } from '../shared/models/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent  implements OnInit {

  user: usuario;
  posts: post[] = [];
  isHeartFilled: boolean = false;
  isBookMarked: boolean = false;
  
  constructor() { 
        // llamada a base de datos o de alguna manera pasar user y posts.
        this.user = new usuario(1, "Rick", "quitarEsto", 2, 3, 4, 'https://picsum.photos/id/22/367/267', "Bio");

        this.posts.push(new post(1,'https://picsum.photos/id/0/367/267','Hello', 200));
        this.posts.push(new post(2,'https://picsum.photos/id/4/367/267','Bye', 2));
        this.posts.push(new post(333,'https://picsum.photos/id/5/367/267','Bye', 2));
  }

  ngOnInit() {

    console.log(this.user, this.posts);
  }

  toggleHeartIcon() {
    this.isHeartFilled = !this.isHeartFilled;
  }

  toggleBookMark() {
    this.isBookMarked = !this.isBookMarked;
  }

}

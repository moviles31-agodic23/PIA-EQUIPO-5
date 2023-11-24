import { Component, OnInit } from '@angular/core';
import { usuario } from '../shared/models/usuario.model';
import { post } from '../shared/models/post.model';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent  implements OnInit {

  user: usuario;
  posts: post[] = [];
  userIdToRetrieve = 1;
  
  constructor(private firebaseService: FirebaseService) { 
        // llamada a base de datos o de alguna manera pasar user y posts.
        this.user = new usuario(1, "Rick", 2, 3, 4, 'https://picsum.photos/id/22/367/267', "Bio");

  }

  ngOnInit() {
    // conseguir todos los posts del usuario
    this.firebaseService.getPostByUserId(this.userIdToRetrieve).subscribe(
      (postsData) => {
        // Hacer algo con los datos del post
        postsData.forEach((post : post) => this.posts.push(Object.assign({}, post)));
      },
      (error) => {
        console.error('Error al obtener el post:', error);
        // Manejar el error
      }
    );
    
  }

 
 toggleHeartIcon(post: post) {
    post.isHeartFilled = !post.isHeartFilled;
  }

  toggleBookMark(post: post) {
    post.isBookMarked = !post.isBookMarked;
  }



}

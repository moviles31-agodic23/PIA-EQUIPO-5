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

  user: usuario = new usuario(1,'2', '3',2, 2,'pfp', 's');
  posts: post[] = [];
  userIdToRetrieve = 1;
  
  constructor(private firebaseService: FirebaseService) { 
        // llamada a base de datos o de alguna manera pasar user y posts.
  }

  ngOnInit() {
    // conseguir info del usuario
    this.firebaseService.getUserById(this.userIdToRetrieve).subscribe(
      (userData) => {
        console.log('Datos del usuario:', userData);
        this.user = userData;
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
        // Manejar el error
      }
    );

    // conseguir todos los posts del usuario
    this.firebaseService.getPostByUserId(this.userIdToRetrieve).subscribe(
      (postsData) => {
        // Hacer algo con los datos del post
        postsData.forEach((post : post) => this.posts.push(Object.assign({}, post)));
        console.log(postsData);
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

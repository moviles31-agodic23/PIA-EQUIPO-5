import { Component, OnInit } from '@angular/core';
import { usuario } from '../shared/models/usuario.model';
import { post } from '../shared/models/post.model';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent  implements OnInit {

  user: usuario = new usuario(1,'2', '3',2, 2,'pfp', 's');
  post: post = new post(1, 1, "test", "caption", 2);
  postId: string = 'KLQff7R7OGCGan99NkCK';
  userIdToRetrieve = 1;

  constructor(private firebaseService: FirebaseService) { }

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

    // Traer info del post
    this.firebaseService.getPostById(this.postId).subscribe(
      (postData) => {
        this.post = postData;
        console.log('Datos del post:', postData);
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

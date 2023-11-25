import { Component, OnInit } from '@angular/core';
import { usuario } from '../shared/models/usuario.model';
import { post } from '../shared/models/post.model';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute } from '@angular/router';
import { doc } from 'firebase/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent  implements OnInit {

  user: usuario = new usuario(1,'2', '3',2, 2,'pfp', 's');
  post: post = new post(1, 1, "test", "caption", 2);
  postId: string = '';
  userIdToRetrieve = 1;
  receivedInfo: any;
  private routeSub:any;
  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute,) { }

  

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.postId=params['id']
    });
    console.log(this.routeSub)
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
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  toggleHeartIcon(post: post) {
    post.isHeartFilled = !post.isHeartFilled;
  }

  toggleBookMark(post: post) {
    post.isBookMarked = !post.isBookMarked;
  }

}

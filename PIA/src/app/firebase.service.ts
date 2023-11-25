import { Injectable } from '@angular/core';
import { db } from 'src/firebase';
import { collection, where, query, getDocs, doc, getDoc } from 'firebase/firestore';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  getPostByUserId(userId: number): Observable<any> {
    const postsCollection = collection(db, 'posts');
    const q = query(postsCollection, where('userId', '==', userId));

    return from(getDocs(q)).pipe(
      map((querySnapshot) => {
        // Mapear los documentos a un array de datos
        return querySnapshot.docs.map((doc) => doc.data());
      }),
      catchError((error) => {
        console.error('Error al obtener los posts:', error);
        return throwError(error);
      })
    );
  }


  getUserById(userId: number): Observable<any> {
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('id', '==', userId));


    return from(getDocs(q)).pipe(
      map((querySnapshot) => {
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          return userDoc.data();
        } else {
          throw new Error('El usuario no existe');
        }
      }),
      catchError((error) => {
        console.error('Error al obtener el usuario:', error);
        return throwError(error);
      })
    );
  }


  getPostById(postId: string): Observable<any> {
    const postsCollection = collection(db, 'posts');
    const postDocRef = doc(postsCollection, postId);

    return from(getDoc(postDocRef)).pipe(
      map((postDocSnapshot) => {
        if (postDocSnapshot.exists()) {
          return postDocSnapshot.data();
        } else {
          throw new Error('El post no existe');
        }
      }),
      catchError((error) => {
        console.error('Error al obtener el post:', error);
        return throwError(error);
      })
    );
  }



}

import { Injectable } from '@angular/core';
import { db } from 'src/firebase';
import { collection, where, query, getDocs } from 'firebase/firestore';
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


}

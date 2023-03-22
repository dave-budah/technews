import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestore: AngularFirestore) { }

  loadFeatured() {
    return this.firestore.collection('posts', ref => ref.where('isFeatured', '==', true).limit(1)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      }),
    )
  }
  loadLatest() {
    return this.firestore.collection('posts', ref => ref.orderBy('createdOn').limit(4) ).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      }),
    )
  }

  loadCategoryPosts(categoryId: string) {
    return this.firestore.collection('posts', ref => ref.where('category.categoryId', '==', categoryId).limit(1)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      }),
    )
  }
  loadOnePost(postId: string) {
   return this.firestore.doc(`posts/${postId}`).valueChanges();
  }
  loadRelatedPosts(catId: string) {
    return this.firestore.collection('posts', ref => ref.where('category.categoryId', '==', catId).limit(1)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      }),
    )
  }
}

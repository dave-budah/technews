import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {NgToastService} from "ng-angular-popup";

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private firestore: AngularFirestore, private toast: NgToastService) { }

  addSubs(subData: any) {
    this.firestore.collection('subscribers').add(subData).then(() => {
      this.toast.success({detail: 'Success', summary: 'Thank you for subscribing.', duration: 3000});
    });
  }
  checkSubs(subEmail: string) {
   return this.firestore.collection('subscribers', ref => ref.where('email', '==', subEmail)).get()
  }
}

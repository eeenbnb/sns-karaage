import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
//import firebase from 'firebase/app';

@Injectable()
export class ServiceLoginService {

  constructor(
    private angularFireAuth:AngularFireAuth
  ) { }

  getCureentUserObservable(){
    return this.angularFireAuth.authState
  }

  isNotLogined(){
    return this.getCureentUserObservable();
  }

  login(email:string,pass:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email,pass)
  }

  async logout(){
    await this.angularFireAuth.signOut();
    location.reload();
  }
}

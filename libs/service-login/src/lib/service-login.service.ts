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

  login(email:string,pass:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email,pass)
  }
}

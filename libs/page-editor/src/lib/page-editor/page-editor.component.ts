import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceLoginService } from 'libs/service-login/src/lib/service-login.service'

@Component({
  selector: 'sns-karaage-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.scss']
})
export class PageEditorComponent implements OnInit {
  text = new FormControl('', [Validators.required]);
  par = new FormControl('1', [Validators.required]);

  postDateForm = new FormGroup({
    text: this.text,
    par: this.par
  })

  constructor(
    private angularFirestore:AngularFirestore,
    private serviceLoginService:ServiceLoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.postDateForm);
    this.angularFirestore.collection("items").add({
      test:this.text.value,
      par:this.par.value
    });
  }

  logout(){
    this.serviceLoginService.logout();
  }

}

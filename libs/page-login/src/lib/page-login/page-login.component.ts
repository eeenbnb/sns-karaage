import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLoginService } from 'libs/service-login/src/lib/service-login.service'

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sns-karaage-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);
  loginForm = new FormGroup({
    email: this.email,
    pass: this.pass
  })

  constructor(
    private serviceLoginService: ServiceLoginService,
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.serviceLoginService.login(
      this.email.value,
      this.pass.value
    ).then(()=>{
      this.router.navigate(["edit"]);
    }).catch((err)=>{
      alert(err.message)
    });
  }

  getMailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'メールアドレスは必須です。';
    }

    if (this.email.hasError('email')) {
      return '正しいメールアドレスを入力してください。';
    }

    return '';
  }

}

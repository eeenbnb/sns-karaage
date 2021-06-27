import { Component, OnInit } from '@angular/core';
import { ServiceLoginService } from 'libs/service-login/src/lib/service-login.service'

@Component({
  selector: 'sns-karaage-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  constructor(
    private serviceLoginService:ServiceLoginService
  ) { }

  ngOnInit(): void {

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';

import { ServiceLoginModule } from 'libs/service-login/src'

export const pageLoginRoutes: Route[] = [
  {
    path: "",
    component: PageLoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pageLoginRoutes),
    ServiceLoginModule
  ],
  declarations: [
    PageLoginComponent
  ],
})
export class PageLoginModule { }

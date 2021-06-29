import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ServiceLoginModule
  ],
  declarations: [
    PageLoginComponent
  ],
})
export class PageLoginModule { }

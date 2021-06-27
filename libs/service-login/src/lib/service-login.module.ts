import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceLoginService } from './service-login.service'

@NgModule({
  imports: [CommonModule],
  providers:[
    ServiceLoginService
  ]
})
export class ServiceLoginModule {}

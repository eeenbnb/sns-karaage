import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard'
import { ServiceLoginModule } from 'libs/service-login/src'

const routes: Routes = [
  {
    path: "login",
    loadChildren: ()=> import("../../../page-login/src").then(m => m.PageLoginModule),
  },
  {
    path: "edit",
    canActivate: [AuthGuard],
    loadChildren: ()=> import("../../../page-editor/src").then(m => m.PageEditorModule),
  },
  {
    path: "**",
    redirectTo: "/edit"
  }
];

@NgModule({
  imports: [
    ServiceLoginModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingEditorKaraageModule {}

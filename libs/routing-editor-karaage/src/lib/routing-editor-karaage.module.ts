import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: ()=> import("../../../page-login/src").then(m => m.PageLoginModule),
  },
  {
    path: "edit",
    loadChildren: ()=> import("../../../page-editor/src").then(m => m.PageEditorModule),
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingEditorKaraageModule {}

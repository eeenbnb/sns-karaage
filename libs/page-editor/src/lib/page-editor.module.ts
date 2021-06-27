import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PageEditorComponent } from './page-editor/page-editor.component';

export const pageEditorRoutes: Route[] = [
  {
    path: "",
    component: PageEditorComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pageEditorRoutes)
  ],
  declarations: [
    PageEditorComponent
  ],
})
export class PageEditorModule {}

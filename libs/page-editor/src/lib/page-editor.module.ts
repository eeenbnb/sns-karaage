import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Route } from '@angular/router';
import { PageEditorComponent } from './page-editor/page-editor.component';

import { UiEditorKaraageModule } from 'libs/ui-editor-karaage/src'

export const pageEditorRoutes: Route[] = [
  {
    path: "",
    component: PageEditorComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(pageEditorRoutes),
    UiEditorKaraageModule
  ],
  declarations: [
    PageEditorComponent
  ],
})
export class PageEditorModule {}

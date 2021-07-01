import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EkCordComponent } from './ek-cord/ek-cord.component';
import { EkHeaderComponent } from './ek-header/ek-header.component';
import { EkInputWrapperComponent } from './ek-input-wrapper/ek-input-wrapper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    EkCordComponent,
    EkHeaderComponent,
    EkInputWrapperComponent
  ],
  exports:[
    EkCordComponent,
    EkHeaderComponent,
    EkInputWrapperComponent
  ]
})
export class UiEditorKaraageModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { RoutingEditorKaraageModule } from 'libs/routing-editor-karaage/src'

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutingEditorKaraageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

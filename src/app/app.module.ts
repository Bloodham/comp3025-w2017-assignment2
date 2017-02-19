import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyC9mKZn0xvbtAMwvdvel6MAVdUDgj-5z1s",
    authDomain: "myionicassignment-d9920.firebaseapp.com",
    databaseURL: "https://myionicassignment-d9920.firebaseio.com",
    storageBucket: "myionicassignment-d9920.appspot.com",
    messagingSenderId: "563748187779"
  };
  
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

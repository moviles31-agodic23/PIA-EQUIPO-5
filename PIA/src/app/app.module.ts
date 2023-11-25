import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CameraComponent } from './camera/camera.component';
import { ProfileComponent } from './profile/profile.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [AppComponent, LoginComponent, CameraComponent, ProfileComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()), 
    provideFirebaseApp(() => initializeApp({"projectId":"piaappsmov","appId":"1:219853494235:web:97fcec9d0ae3cc55b7b9fe","databaseURL":"https://piaappsmov-default-rtdb.firebaseio.com","storageBucket":"piaappsmov.appspot.com", "apiKey":"AIzaSyDaIdx-p_IR1HXeyEVFPCsN1uSrbGWndtA","authDomain":"piaappsmov.firebaseapp.com","messagingSenderId":"219853494235"})), provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

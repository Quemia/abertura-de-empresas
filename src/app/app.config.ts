import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"abertura-empresa","appId":"1:266586260315:web:c8e76e1a5a63af6492907e","storageBucket":"abertura-empresa.firebasestorage.app","apiKey":"AIzaSyBOzyVoeuyiBdmk0Okra0RXom9ph7Ztjkg","authDomain":"abertura-empresa.firebaseapp.com","messagingSenderId":"266586260315"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};

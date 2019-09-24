import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { AdminModule } from "./admin/admin.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD6pP62qE0V9pmC-lBbfjE5Use-ibjEh68",
  authDomain: "my-portfolio-cfd10.firebaseapp.com",
  databaseURL: "https://my-portfolio-cfd10.firebaseio.com",
  projectId: "my-portfolio-cfd10",
  storageBucket: "",
  messagingSenderId: "1092769629911",
  appId: "1:1092769629911:web:cb9bd34af4eab2e30c1292"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

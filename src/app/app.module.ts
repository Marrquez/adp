import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { DomainService } from './services/domain.service';
import { GetLinksPipe } from './pipes/get-links.pipe';
import { GetDomainsPipe } from './pipes/get-domains.pipe';
import { LinkSanitizerPipe } from './pipes/link-sanitizer.pipe';
import { RestoreComponent } from './components/restore/restore.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    GetLinksPipe,
    GetDomainsPipe,
    LinkSanitizerPipe,
    RestoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, DomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }

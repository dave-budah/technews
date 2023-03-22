import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { NewsletterComponent } from './components/shared/newsletter/newsletter.component';
import { FormComponent } from './components/shared/comments/form/form.component';
import { CommentsComponent } from './components/shared/comments/comments/comments.component';
import { AdvertsComponent } from './components/shared/comments/adverts/adverts.component';
import { RecentsComponent } from './components/shared/comments/recents/recents.component';
import { CategoriesComponent } from './components/shared/categories/categories.component';
import { TagsComponent } from './components/shared/tags/tags.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {CommonModule} from "@angular/common";
import { CategoryComponent } from './components/pages/category/category.component';
import {FormsModule} from "@angular/forms";
import {NgToastModule} from "ng-angular-popup";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    NewsletterComponent,
    FormComponent,
    CommentsComponent,
    AdvertsComponent,
    RecentsComponent,
    CategoriesComponent,
    TagsComponent,
    CategoryComponent,
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.fireBaseConfig),
        AngularFirestoreModule,
        FormsModule,
        NgToastModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

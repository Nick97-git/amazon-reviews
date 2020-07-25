import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./http/auth-interceptor";
import { LogoutComponent } from './logout/logout.component';
import {AdminMainComponent} from './admin-main/admin-main.component';
import { UserMainComponent } from './user-main/user-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatLineModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {DeleteReviewDialogComponent} from "./dialog/delete-review-dialog/delete-review-dialog.component";
import {ParamsDialogComponent} from "./dialog/params-dialog/params-dialog.component";
import {AddReviewDialogComponent} from "./dialog/add-review-dialog/add-review.dialog.component";
import {UpdateReviewDialogComponent} from "./dialog/update-review-dialog/update-review-dialog.component";
import {MainGuard} from "./service/guard/main-guard.service";
import {AuthGuard} from "./service/guard/auth-guard.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    LogoutComponent,
    AdminMainComponent,
    UserMainComponent,
    DeleteReviewDialogComponent,
    ParamsDialogComponent,
    AddReviewDialogComponent,
    UpdateReviewDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatLineModule,
        MatDialogModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    MainGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

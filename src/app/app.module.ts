import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HrManagerComponent } from './hr-manager/hr-manager.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormDialogBoxComponent } from './form-dialog-box/form-dialog-box.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { TicketJourneyComponent } from './ticket-journey/ticket-journey.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HrManagerComponent,
    FormDialogBoxComponent,
    TicketJourneyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule

  ],
  providers: [],
  entryComponents: [FormDialogBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

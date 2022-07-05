import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrManagerComponent } from './hr-manager/hr-manager.component';
import { LoginComponent } from './login/login.component';
import { TicketJourneyComponent } from './ticket-journey/ticket-journey.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: '', redirectTo: 'hr', pathMatch: 'full'},
  { path: 'ticket', component: TicketJourneyComponent },
  { path: 'hr', component: HrManagerComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormDialogBoxComponent } from '../form-dialog-box/form-dialog-box.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ticket-journey',
  templateUrl: './ticket-journey.component.html',
  styleUrls: ['./ticket-journey.component.css']
})
export class TicketJourneyComponent implements OnInit {

  formDialogRef: MatDialogRef<FormDialogBoxComponent>;

  openTicketGenerationForm(){
    this.sharedService.flagTicket = true;
    this.sharedService.flagChatBot = false;
    this.sharedService.flagEdit = false;
    this.sharedService.flagAdd = false;

    this.formDialogRef = this.dialog.open(
      FormDialogBoxComponent, {
        hasBackdrop: true, width: '500px', id: 'dialog2', disableClose: true,
        data: {
          actionData: ''
        }
      }
    );
    this.formDialogRef
    .afterClosed()
    .subscribe(res=>{
      this.ngOnInit();
    })
  }

  openChatbotWindow(){
    this.sharedService.flagTicket = false;
    this.sharedService.flagEdit = false;
    this.sharedService.flagAdd = false;
    this.sharedService.flagChatBot = true;

    this.formDialogRef = this.dialog.open(
      FormDialogBoxComponent, {
        hasBackdrop: true, width: '415px', id: 'dialog3', disableClose: true,
        data: {
          actionData: ''
        }
      }
    );
    this.formDialogRef
    .afterClosed()
    .subscribe(res=>{
      this.ngOnInit();
    })
  }

  constructor(private httpClient: HttpClient, private sharedService:SharedService, public dialog: MatDialog) { }

  ngOnInit() {
  }

}

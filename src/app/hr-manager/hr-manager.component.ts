import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormDialogBoxComponent } from '../form-dialog-box/form-dialog-box.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-hr-manager',
  templateUrl: './hr-manager.component.html',
  styleUrls: ['./hr-manager.component.css']
})
export class HrManagerComponent implements OnInit {

  displayedColumns = ['ticketId','query','status','candidateId','edit'];
  actionsListData: any = [];
  countTickets=0;
  dataSource = new MatTableDataSource<ActionsElements>(this.actionsListData);
  formDialogRef: MatDialogRef<FormDialogBoxComponent>;
  @ViewChild(MatPaginator) paginator: MatPaginator;  


  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openAddActionForm(element?){
    this.sharedService.flagAdd = true;
    this.sharedService.flagEdit = false;
    this.sharedService.flagTicket = false;
    this.sharedService.flagChatBot = false;
    this.formDialogRef = this.dialog.open(
      FormDialogBoxComponent, {
        hasBackdrop: true, width: '500px', id: 'dialog1', disableClose: true,
        data: {
          actionData: element? element: ''
        }
      }
    );
    this.formDialogRef
    .afterClosed()
    .subscribe(res=>{
      this.ngOnInit();
    })
  }
  
  openEditActionForm(element){
    this.sharedService.flagAdd = false;
    this.sharedService.flagEdit = true;
    this.sharedService.flagTicket = false;
    this.sharedService.flagChatBot = false;
    this.formDialogRef = this.dialog.open(
      FormDialogBoxComponent, {
        hasBackdrop: true, width: '500px', disableClose: true,
        data: {
          actionData: element,
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
    this.httpClient.get('assets/getAllTicketsFile.json').subscribe(data =>{
      this.actionsListData = data;
      this.dataSource = new MatTableDataSource<ActionsElements>(this.actionsListData);
      this.countTickets = this.actionsListData.length;
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnDestroy(){  }

}

export interface ActionsElements{
    ticketId:any;
    query:any;
    status:any;
    response:any;
}

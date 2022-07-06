import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MatSnackBarConfig, MAT_DIALOG_DATA } from '@angular/material';
import { FeedData } from '../hr-manager/feedData';
import { QueryData } from '../hr-manager/queryData';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form-dialog-box',
  templateUrl: './form-dialog-box.component.html',
  styleUrls: ['./form-dialog-box.component.css']
})
export class FormDialogBoxComponent implements OnInit {
  flagAdd: boolean;
  flagEdit: boolean;
  flagTicket: boolean;
  flagChatBot: boolean;
  flagShow: boolean=true;
  heading: string;
  dataValues:any;
  ticketId= "Ticket Id";
  query = "Query";
  question = "Question"
  status = "Status";
  candidateId = "Candidate Id";
  response = "Response";
  statusList = ["Unresolved", "Resolved"];
  answerData: QueryData;
  feedData: FeedData;
  questionFed: any;
  responseFed:any;
  updateResponseUrl = '';
  trainBotUrl = '';
  candidateName ='';
  emailId ='';
  contactNumber = '';
  id = '';
  queryNew = '';

  raiseNewTicket(){
    let ticketData = {
      "candidateName" : this.candidateId,
      "emailId" : this.emailId,
      "contactNumber" : this.contactNumber,
      "id" : this.id,
      "queryNew" : this.queryNew
    }

    // var result = this.httpClient.post(this.updateResponseUrl, updateData);
    var result = this.httpClient.post(this.trainBotUrl, ticketData);
    result.subscribe(
      res => {
        console.log("result",res);
        let config = new MatSnackBarConfig();
        config.duration = 5000;
        if(res==true){
          config.panelClass = ['success-snackbar'];
          this.snackbar.open("Response has been recorded successfully", "Dismiss", config);
        }
        else{
          config.panelClass = ['failure-snackbar'];
          this.snackbar.open("Update failed", "Dismiss", config);
        }
      });
  }
  addDataToChatBot(){
    let trainingData = {
      "trainingPhrasesParts" : this.feedData.questionFed,
      "messageTexts" : this.feedData.responseFed
    }

    // var result = this.httpClient.post(this.updateResponseUrl, updateData);
    var result = this.httpClient.post(this.trainBotUrl, trainingData);
    result.subscribe(
      res => {
        console.log("result",res);
        let config = new MatSnackBarConfig();
        config.duration = 5000;
        if(res==true){
          config.panelClass = ['success-snackbar'];
          this.snackbar.open("Response has been recorded successfully", "Dismiss", config);
        }
        else{
          config.panelClass = ['failure-snackbar'];
          this.snackbar.open("Update failed", "Dismiss", config);
        }
      });
  }

  updateAction(){
    let updateData = {
      "ticketId" : this.answerData.ticketId,
      "response" : this.answerData.response
    }

    // var result = this.httpClient.post(this.updateResponseUrl, updateData);
    var result = this.httpClient.post(this.updateResponseUrl, updateData);
    result.subscribe(
      res => {
        console.log("result",res);
        let config = new MatSnackBarConfig();
        config.duration = 5000;
        if(res==true){
          config.panelClass = ['success-snackbar'];
          this.snackbar.open("Response has been recorded successfully", "Dismiss", config);
        }
        else{
          config.panelClass = ['failure-snackbar'];
          this.snackbar.open("Update failed", "Dismiss", config);
        }
      });
  }


  getStatus(e){
    this.flagShow = false;
    this.answerData.status = e.value;
  }
  constructor(private snackbar: MatSnackBar, public dialog: MatDialog, private dialogRef: MatDialogRef<FormDialogBoxComponent>,
    private httpClient: HttpClient, private sharedService: SharedService, @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.flagShow = true;
    this.dataValues = this.data.actionData;
    this.flagAdd = this.sharedService.flagAdd;
    this.flagEdit = this.sharedService.flagEdit;
    this.flagTicket = this.sharedService.flagTicket;
    this.flagChatBot = this.sharedService.flagChatBot;
    this.questionFed = '';
    this.responseFed = '';

    if(this.flagAdd)
      this.heading = "Add a New Question to Chat Bot";
    if(this.flagEdit)
      this.heading = "Query Resolution";
      if(this.flagTicket)
      this.heading = "Raise a Ticket";
    if(this.flagChatBot)
      this.heading = "Talk to Digi Assist";
      
    this.answerData = new QueryData(this.dataValues['ticketId'],
    this.dataValues['status'], this.dataValues['query'], this.dataValues['response']);

    this.feedData = new FeedData(this.questionFed,this.responseFed);

  }

}

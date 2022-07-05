import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  flagAdd : boolean = false;
  flagEdit : boolean = false;
  flagTicket: boolean = false;
  flagChatBot: boolean = false;
  flagLogin: boolean = false;
  
  constructor() { }
}

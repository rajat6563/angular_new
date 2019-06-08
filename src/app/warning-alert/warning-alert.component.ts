import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles : [`
  p {border:2px solid red;
  background-color:pink;
  }
  `]
})
export class WarningAlertComponent implements OnInit {

  serverId = 10;
  serverStatus = 'Offline';
  allowNewServer = false;
  serverCreationStatus = 'No server is created';


  getServeStatus() {
    return this.serverStatus;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server is created';
  }
}

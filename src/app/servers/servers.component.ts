import { Component, OnInit } from '@angular/core';
// import {FormsModule} from '@angular/forms';
@Component({
  // selector: '[vidhya-servers]',
  selector: 'vidhya-servers',
  // selector: '.vidhya-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  hasCreated  = false;
  serverCreationStatus = 'No server was created!';
  serverName ='vidhya';
  servers = ['TestServer 1', ' TestSever 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.hasCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! name is ' + this.serverName;
  }
  mouseEnter() {
    // console.log("Mouse entered");
    // this. = "Mouse entered";
  }

  mouseLeave() {
    // console.log("mouse leave");
    // this.serverCreationStatus = "Mouse leave";
  }
  onUpdateServerName(event: Event){;

    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}

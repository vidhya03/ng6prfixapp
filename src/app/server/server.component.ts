import { Component } from '@angular/core';

@Component({
    selector: 'vidhya-server',
    templateUrl: './server.component.html',
    styles: [`
             .online {
                 color: white;
             };
    `]
})
export class ServerComponent {
    //  serverId: number = 10;
    serverId = 10;
     serverStatus: String;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "Online" : "offLine";
    }
    getServerStatus() {
        return this.serverStatus;
    }
    getColor() {
        // let co = ("Online" === this.serverStatus ) ? 'green': 'red';
        console.log(this.serverStatus+" The condition is "+("Online" === this.serverStatus ));
        // console.log(co)  ;
        return ("Online" === this.serverStatus ) ? 'green': 'red'; ; 
    }
}

import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'vidhya-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h1{
      color:blue;
    }
  `]
})
export class AppComponent {
  title = 'vidhya';
  value = 10;
}

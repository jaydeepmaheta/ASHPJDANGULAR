import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppService} from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent  implements OnInit {

public userData;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getUser().then(
        data => {
          this.userData = data;
          console.log("I CANT SEE DATA HERE: ", this.userData);
        }
    );
  }
}

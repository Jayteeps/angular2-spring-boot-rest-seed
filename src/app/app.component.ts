import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example App';
  error:any;
  message:any;

  constructor(private _http:Http){}

  ngOnInit() {
    this._http.get('ping').map(r => r.json()).subscribe(response => {
      this.message = response.message;
    }, err=> {
      this.error = err;
    });
  }
}

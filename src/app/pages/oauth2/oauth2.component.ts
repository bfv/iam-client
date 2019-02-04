import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.css', './../../app.component.css']
})
export class Oauth2Component implements OnInit {

  public state = '';
  constructor() { }

  ngOnInit() {
  }

  setBogusState() {
    this.state = 'hello!';
  }

}

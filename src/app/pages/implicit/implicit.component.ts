import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-implicit',
  templateUrl: './implicit.component.html',
  styleUrls: ['./implicit.component.css']
})
export class ImplicitComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.implicitLogin();
  }

}

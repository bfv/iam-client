import { Component, OnInit } from '@angular/core';
import { PasoeBackendService } from 'src/app/services/pasoe-backend.service';

@Component({
  selector: 'app-no-auth',
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.css']
})
export class NoAuthComponent implements OnInit {

  public response = '';

  constructor(private backend: PasoeBackendService) { }

  ngOnInit() {
  }

  getCustomers() {

    this.backend.getCustomers(true)
      .subscribe(data => {
        this.response = JSON.stringify(data, null, 2);
      },
      error => {
        this.response = 'error fetching data: ' + error;
      });
  }

  getGet() {

  }

}

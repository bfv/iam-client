import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  @Input() tokens: Object;

  public accessToken: string;
  public header: string;
  public claims: string;

  constructor() { }

  ngOnInit() {

    if (this.tokens['access_token']) {
      this.accessToken = this.tokens['access_token'];
    }
    else {
      this.accessToken = <string>this.tokens;
    }

    const sections = this.accessToken.split('.');
    this.header = this.stringify(sections[0]);
    this.claims = this.stringify(sections[1]);
  }

  private stringify(section: string): string {

    const decoded = atob(section);
    const formatted = JSON.stringify(JSON.parse(decoded), null, 2);

    return formatted;
  }
}

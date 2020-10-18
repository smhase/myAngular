import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // This is needed to not get errors till the element is loaded
  accounts: {name: string, status: string}[] = [];

  // Dependency injection : we are creating reference of array element from accounts service
  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    // This is where we are actually accessing the element.
    this.accounts = this.accountsService.accounts;
  }
}

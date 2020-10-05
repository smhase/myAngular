import { Component, Input } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string) {
    // This will update the element
    this.accountsService.updateStatus(this.id, status);
    
    // This will let every component know that the value is changed.
    // We are passing status because we have mentioned in its definition that we will be passing a string
    this.accountsService.statusUpdated.emit(status);
  }
}

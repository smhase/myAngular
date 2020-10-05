import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  
  // Creating accounts stock elements.
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  // This is an important element.
  // This element is accessed by other components to tell all the components that something
  // has changed
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  // This function will be used by new-account component
  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  // This function will be used by account component
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}

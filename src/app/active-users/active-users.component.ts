import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Input() actToInact: number;

  constructor(private usersService: UsersService, private counterService: CounterService){}

  onSetToInactive(id: number) {
    this.usersService.userSetToInactive.emit(id);
    this.usersService.onSetToInactive(id);
    this.counterService.updateCounterToInactive(this.actToInact++);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Input() inactToAct: number;

  constructor(private usersService: UsersService, private counterService: CounterService){}

  onSetToActive(id: number) {
    this.usersService.userSetToActive.emit(id);
    this.usersService.onSetToActive(id);
    this.counterService.updateCounterToActive(this.inactToAct++);
  }
}

import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  activeUsers = [];
  inactiveUsers = [];
  actToInactUser = 0;
  inactToActUser = 0;

  constructor(private usersService: UsersService, private counterService: CounterService){}
  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.actToInactUser = this.counterService.activeToInactive;
    this.inactToActUser = this.counterService.inactiveToActive;
  }
}

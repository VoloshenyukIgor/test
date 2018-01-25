import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
users = [];

constructor(private usersService: UsersService) {}
ngOnInit() {
    //this.users = this.UsersService.users
    this.usersService.getUsers();
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user$: Observable<User[]>;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

}

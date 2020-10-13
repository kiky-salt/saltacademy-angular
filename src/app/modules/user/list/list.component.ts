import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user$: Observable<User[]>;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

}

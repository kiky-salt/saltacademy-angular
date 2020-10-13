import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
    });
  }

  onSubmit(): void {
    const user: User = {
      id: this.form.get('id').value,
      name: this.form.get('name').value,
      password: this.form.get('password').value,
      role: this.form.get('role').value,
    };

    this.userService.createUser(user)
      .subscribe(
        success => {
          this.router.navigateByUrl('/users');
        },
        error => {

        }
      );
  }

}

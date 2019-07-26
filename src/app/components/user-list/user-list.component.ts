import { Component, OnInit, HostBinding } from '@angular/core';

import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  users: any = []; //arreglo para guardar los usuarios
  response: any;
  responseAux: any;
  pages: number;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  //obtiene los usuarios desde la API y los muestra
  getUsers() {
    this.usersService.getUsers().subscribe(
      res => {
        this.response = res;
        this.pages = this.response.total_pages;
        let i:number;
        for(i=1; i<=this.pages; i++) {
          this.usersService.getUsersPerPage(i).subscribe(
            resp => {
              this.responseAux = resp;
              this.users = [...this.users, ...this.responseAux.data];
            },
            err => console.log(err)
          );
        }
      },
      err => console.log(err)
    );
  }
  
  //elimina el usuario con id enviado por parámetro
  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe(
      res => {
        console.log(res); //se muestra en consola la respuesta de la API
        this.users = [];
        this.getUsers(); //actualiza la vista de usuarios
      },
      err => console.log(err)
    );
  }

}

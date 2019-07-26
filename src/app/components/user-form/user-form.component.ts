import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/User'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  response: any;
  edit: boolean = false; // boolean para identificar si estamos en modo agregar o modo edición

  user: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() { 
    const params = this.activatedRoute.snapshot.params; //verificamos si estamos recibiendo un parámetro
    if(params.id) { // si estamos recibiendo un parámetro, entonces estamos en modo edición
      this.usersService.getUser(params.id).subscribe( // obtenemos los datos del usuario que se va a editar
        res => {
          console.log(res); // el usuario actual se muestra en consola
          this.response = res;
          this.user = this.response.data;
          this.edit = true; // activamos el modo edición
        },
        err => console.log(err)
      )
    }
  }

  saveNewUser() {
    delete this.user.id;
    this.usersService.addUser(this.user).subscribe( //enviamos el nuevo usuario
      res => {
        console.log(res); //mostramos la respuesta por consola
        this.router.navigate(['/users']); //redireccionamos a la vista de todos los usuarios
      },
      err => console.log(err)
    );
  }

  updateUser() {
    this.usersService.updateUser(this.user.id, this.user).subscribe( //enviamos el usuario actualizado
      res => {
        console.log(res); //mostramos la respuesta por consola
        this.router.navigate(['/users']); //redireccionamos a la vista de todos los usuarios
      },
      err => console.log(err)
    );
  }

}

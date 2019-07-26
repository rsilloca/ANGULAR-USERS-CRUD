import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component'
import { UserFormComponent } from './components/user-form/user-form.component'
import { ComicListComponent } from './components/comic-list/comic-list.component';

const routes: Routes = [
  {
    path: '', // index 
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users', // ver todos los usuarios
    component: UserListComponent
  },
  {
    path: 'users/add', // agregar usuario
    component: UserFormComponent
  },
  {
    path: 'users/edit/:id', // editar usuario
    component: UserFormComponent
  },
  {
    path: 'comics', // ver todos los comics
    component: ComicListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

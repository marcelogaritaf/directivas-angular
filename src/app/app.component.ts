import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registro de usuarios';
  mensaje= " "
  registrado=false
  nombre=""
  apellido=""
  registrarUsuario(){
    this.registrado=true
    this.mensaje="usuario registrado con exito"
  }
}

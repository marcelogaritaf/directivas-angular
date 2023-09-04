import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registro de usuarios';
  mensaje= " ";
  registrado=false;
  nombre="";
  apellido="";
  entradas:any[];//esto por motivo de que no reconoce el object[]
  //lo que hace esta variable es almanacenar una matriz de objetos

  constructor(){//contructor que posee el array de objetos de todas las entradas 
    this.entradas=[
      {titulo:'java perdiento popularidad'},
      {titulo:'python mucha popularidad'},
      {titulo:'javascript versatil'},
      {titulo:'ruby futuro en web 3'}
    ]
  }
  registrarUsuario(){
    this.registrado=true
    this.mensaje="usuario registrado con exito"
  }
}

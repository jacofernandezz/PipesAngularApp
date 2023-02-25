import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Jacobo";
  genero: string = "m";

  invitacionMapa = {
    "m": "invitarlo",
    "f": "invitarla"
  }

    //i18nPlural
    clientes: string[] = ["María", "Paco", "Lucas", "Paula"];
    clientesMap ={
      "=0": " no hay ningún cliente esperando.",
      "=1": " hay 1 cliente esperando.",
      "other": " hay # clientes esperando.", 
    }

    onCambiarGeneroClick(){
      if(this.genero==="m"){
        this.genero="f";
        this.nombre="Belén";
      }else{
        this.genero="m";
        this.nombre="Jacobo";
      }
    }

    onBorrarClienteClick(){
      this.clientes.pop();
    }

    //KeyValue Pipe
    persona = {
      nombre:"Jacobo",
      edad: 25,
      dirección: "Santiago de Compostela, A Coruña, España."
    }

    //JsonPipe
    heroes =[
      {
        nombre: "Superman",
        vuela: true
      },
      {
        nombre: "Robin",
        vuela: false
      },
      {
        nombre: "Aquaman",
        vuela: false
      }
    ];

    //Async Pipe
    miObservable = interval(1000);

    valorPromesa = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve("Esta es la data de una promise tras 3.5 seg");
      },4500);
    })
}

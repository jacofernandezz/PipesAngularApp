import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "jacobo";
  nombreUpper: string = "JACOBO";
  nombreCompleto: string = "jAcOBo fErnÁndez";

  fecha: Date = new Date();
}

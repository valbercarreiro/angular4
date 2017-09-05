import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Word!';

  valorInicial: number = 5;

  deletarCiclo: boolean = false;

  mudarValor() {
    this.valorInicial++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}

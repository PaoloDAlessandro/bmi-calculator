import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  p1: Persona = {
    nome: "Paolo",
    cognome: "D'Alessandro",
    eta: 20,
    nazionalita: "Italiana",
    altezza: 1.80
  }

  p2: Persona = {
    nome: "Giorgia",
    cognome: "Pretti",
    eta: 20,
    nazionalita: "Italiana",
    altezza: 1.74
  }

  persone: Persona[] = [this.p1, this.p2]

  messaggio: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}

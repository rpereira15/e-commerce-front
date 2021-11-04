import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {
  
  @Input()
  textoPadrao = '';

  @Output()
  textoParaAppPrincipal = 'Texto principal';
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}

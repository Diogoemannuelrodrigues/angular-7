import { Component, OnInit } from '@angular/core';

import {Companias} from './companias/companias.model'
import { CompaniasService } from './companias.service';


@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {

  companias: Companias[]

  constructor(private  companiasService: CompaniasService) { }

  ngOnInit() {
    this.companiasService.companias()
    .subscribe(companias => this.companias = companias)
  }

}

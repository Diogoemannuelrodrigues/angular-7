import { Component, OnInit, Input } from '@angular/core';

import { Companias } from './companias.model'

@Component({
  selector: 'mt-companias',
  templateUrl: './companias.component.html'
})
export class CompaniasComponent implements OnInit {

  @Input() companias: Companias  

  constructor() { }

  ngOnInit() {
  }

}

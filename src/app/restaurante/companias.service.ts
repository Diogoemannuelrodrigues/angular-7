import {Companias} from './companias/companias.model'

export class CompaniasService{

    compania: Companias [] = [{
        id: "bread-bakery",
        name: "Bread & Bakery",
        category: "Bakery",
        deliveryEstimate: "25m",
        rating: 4.9,
        imagePath: "assets/img/restaurants/breadbakery.png"
      },
      {
        id: "bread",
        name: "Bread & Diogo",
        category: "DIOGO EMANNUEL",
        deliveryEstimate: "25m",
        rating: 4.9,
        imagePath: "assets/img/restaurants/burgerhouse.png"
      }]

    constructor(){}

    companias(): Companias[]{
        return this.compania;
    }
}
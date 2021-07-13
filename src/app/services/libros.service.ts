import { Injectable } from '@angular/core';
import { Libros } from '../interfaces/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros: Libros[] = [{
    titulo: "El Señor de los Anillos: El Retorno del Rey",
    image: "Lotr RotK.jpg",
    autor: "J.R.R. Tolkien",
    pages: "416"
  },
  {
    titulo: "El Hobbit",
    image: "Hobbit.gif",
    autor: "J.R.R. Tolkien",
    pages: "310"
  },
  {
    titulo: "El Señor de los Anillos: La Communidad del Anillo",
    image: "Fellow.jpg",
    autor: "J.R.R. Tolkien",
    pages: "423"
  },
  {
    titulo: "El Señor de los Anillos: Las Dos Torres",
    image: "Towers.jpg",
    autor: "J.R.R. Tolkien",
    pages: "352"
  },
  {
    titulo: "End of the Road",
    image: "EotR.jpg",
    autor: "Varios",
    pages: "208"
  },
  {
    titulo: "Metro 2033",
    image: "2033.jpg",
    autor: "Dmitry Glukhovsky",
    pages: "458"
  },
  {
    titulo: "Viaje al Centro de la Tierra",
    image: "Journey center of the earth.jpg",
    autor: "Julio Verne",
    pages: "244"
  },
  {
    titulo: "Dune",
    image: "dune.jpg",
    autor: "Frank Herbert",
    pages: "412"
  },
  {
    titulo: "El Hombre Invisible",
    image: "invisibleman.jpg",
    autor: "H. G. Wells",
    pages: "149"
  },
  {
    titulo: "Frankenstein",
    image: "frankenstein.jpg",
    autor: "Mary Shelley",
    pages: "280"
  }];

  constructor() { }

  getLibros(){
    return this.libros;
  }


























  /*private libros: Libros[] = [{
    titulo: "The Big Fat Book of Tests",
    image: "Testimg",
    autor: "MasterTest",
    pages: "48"
  },
  {
    titulo: "Warframe: Pain & Trains",
    image: "Painframe",
    autor: "Raethalius",
    pages: "1000"
  },
  {
    titulo: "Exclusion Zone Survival Guide",
    image: "ZSG",
    autor: "Alexander Degtyarev",
    pages: "99"
  },
  {
    titulo: "Big Chungus",
    image: "chungus",
    autor: "Chungotastic",
    pages: "300"
  },
  {
    titulo: "Bigger Chungus",
    image: "BChungus",
    autor: "Chungotastic",
    pages: "600"
  },
  {
    titulo: "Biggest Chungus",
    image: "CHUNGUS",
    autor: "Chungotastic",
    pages: "900"
  },
  {
    titulo: "Chungus Endgame",
    image: "ULTCHUNGUS",
    autor: "Chungotastic",
    pages: "9001"
  },
  {
    titulo: "",
    image: "",
    autor: "",
    pages: ""
  },
  {
    titulo: "",
    image: "",
    autor: "",
    pages: ""
  },
  {
    titulo: "",
    image: "",
    autor: "",
    pages: ""
  }];*/
}

import { Component, OnInit } from '@angular/core';
import { Libros } from '../../interfaces/libros';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  libros: Libros[];

  constructor(private service:LibrosService) {

    this.libros = this.service.getLibros();

  }

  ngOnInit(): void {
  }

}

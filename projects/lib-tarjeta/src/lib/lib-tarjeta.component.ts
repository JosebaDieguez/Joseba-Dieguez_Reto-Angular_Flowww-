import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-libTarjeta',
  templateUrl: './lib-tarjeta.component.html',
  styleUrl: './lib-tarjeta.component.css'
})
export class LibTarjetaComponent implements OnInit {
  showFav = false;

  setFavorito() {
    if (this.showFav) {
      this.showFav = false;
    } else {
      this.showFav = true;
    }
  }

  constructor() { }

  ngOnInit() { 
  }

}

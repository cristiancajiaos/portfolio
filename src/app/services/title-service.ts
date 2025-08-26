import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private title: Title
  ) {}

  public setTitle(title: String): void {
    this.title.setTitle(`${title} | Potafolio de Cristian Cajiao Skarnic`)
  }
}

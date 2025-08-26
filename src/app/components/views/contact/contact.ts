import { Component, OnInit } from '@angular/core';
import { faComments, faEnvelope, faGlobe, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {

  public faComments: IconDefinition = faComments;

  public faEnvelope: IconDefinition = faEnvelope;
  public faLinkedin: IconDefinition = faLinkedin;
  public faGlobe: IconDefinition = faGlobe;

  constructor(
    public title: Title
  ) {}

  ngOnInit(): void {
    this.setTitle();
  }

  private setTitle(): void {
    this.title.setTitle("Contacto | Portafolio de Cristian Cajiao");
  }
}

import { Component, OnInit } from '@angular/core';
import { faComments, faEnvelope, faGlobe, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { TitleService } from '../../../services/title-service';

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
  public faGithub: IconDefinition = faGithub;
  public faGlobe: IconDefinition = faGlobe;

  constructor(
    public title: TitleService
  ) {}

  ngOnInit(): void {
    this.setTitle();
  }

  private setTitle(): void {
    this.title.setTitle("Contacto");
  }
}

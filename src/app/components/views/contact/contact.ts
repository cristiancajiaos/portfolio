import { Component, OnInit } from '@angular/core';
import { faComments, faEnvelope, faGlobe, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

  constructor() {
    
  }


  ngOnInit(): void {
  }

}

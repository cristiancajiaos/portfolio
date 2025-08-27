import { Component, OnInit } from '@angular/core';
import { faCertificate, faLink, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TitleService } from '../../../services/title-service';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates implements OnInit {

  public faCertificate: IconDefinition = faCertificate;
  public faLink: IconDefinition = faLink;

  constructor(
    public title: TitleService
  ) {

  }

  ngOnInit(): void {
    this.setTitle();
  }

  public setTitle(): void {
    this.title.setTitle("Certificados");

  }

}

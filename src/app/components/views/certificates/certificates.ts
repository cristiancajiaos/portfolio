import { Component, OnInit } from '@angular/core';
import { faCertificate, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates implements OnInit {

  faCertificate: IconDefinition = faCertificate;

  constructor() {

  }
  ngOnInit(): void {

  }

}

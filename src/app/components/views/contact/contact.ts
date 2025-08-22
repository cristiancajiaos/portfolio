import { Component, OnInit } from '@angular/core';
import { faComments, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {

  public faComments: IconDefinition = faComments;

  ngOnInit(): void {
  }

}

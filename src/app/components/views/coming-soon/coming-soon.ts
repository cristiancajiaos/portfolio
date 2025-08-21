import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-coming-soon',
  standalone: false,
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.scss'
})
export class ComingSoon implements OnInit {

  faPersonDigging: IconDefinition = faPersonDigging;

  ngOnInit(): void {
  }

}

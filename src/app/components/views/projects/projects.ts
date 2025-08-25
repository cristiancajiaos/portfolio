import { Component, OnInit } from '@angular/core';
import { faBriefcase, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {

  public faBriefcase: IconDefinition = faBriefcase

  ngOnInit(): void {
  }

}

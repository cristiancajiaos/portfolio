import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main.scss'
})
export class Main {

}

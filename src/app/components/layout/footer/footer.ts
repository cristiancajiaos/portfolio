import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {

  public currentYear: number = 0;

  ngOnInit(): void {
    const currentDate: Date = new Date();
    this.currentYear = currentDate.getFullYear();
  }

}

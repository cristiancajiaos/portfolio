import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {

  public creationYear: number = 0;
  public currentYear: number = 0;

  ngOnInit(): void {
    this.setDate();
  }

  private setDate(): void {
    const creationDate: Date = new Date(2025, 8, 21);
    const currentDate: Date = new Date();

    this.creationYear = creationDate.getFullYear();
    this.currentYear = currentDate.getFullYear();
  }

  public creationCurrentYearsAreEqual(): boolean {
    return (this.creationYear === this.currentYear)
  }
}

import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  faStarOfLife,
  IconDefinition,
  faMagnifyingGlassPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project implements OnInit {
  public currentId: number = 0;

  public faStarOfLife: IconDefinition = faStarOfLife;
  public faMagnifyingGlassPlus: IconDefinition = faMagnifyingGlassPlus;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.setCurrentId();
    this.setTitle();
  }

  private setCurrentId(): void {
    this.currentId = this.activatedRoute.snapshot.params['id'];
  }

  private setTitle(): void {
    this.title.setTitle('Proyecto');
  }
}

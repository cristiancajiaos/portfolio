import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IconDefinition,
  faStarOfLife,
  faMagnifyingGlassPlus,
  faLink,
  faArrowUpRightFromSquare,
  faBriefcase,
  faB
} from '@fortawesome/free-solid-svg-icons';
import { TitleService } from '../../../services/title-service';

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
  public faLink: IconDefinition = faLink;
  public faArrowUpRightFromSquare: IconDefinition = faArrowUpRightFromSquare;
  public faBriefcase: IconDefinition = faBriefcase

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: TitleService,
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
    this.title.setTitle(`Proyecto con ID ${this.currentId}`);
  }
}

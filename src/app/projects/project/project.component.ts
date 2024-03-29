import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PortfolioElement } from './../../shared/interfaces/portfolio-element';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  loading = true;

  id: number = 0;
  portfolioElement: PortfolioElement;
  isPortfolioElement = false;

  title: string = 'Title';
  backgroundImage: string = 'https://via.placeholder.com/1920x1080?text=Proyecto+sin+imagen';
  hasBackgroundImage = false;

  showFlag = false;
  selectedImageIndex = -1;
  imageObject: Array<object> = [];

  currentBackgroundProperties = {};

  private projectSubscription: Subscription;

  backgroundDefaultProperties = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private project: ProjectService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = parseInt(params.id, 10);
        this.getProject();
      }
    });
  }

  getProject(): void {
    this.projectSubscription = this.project.getProject(this.id).subscribe((project) => {
      if (project) {
        this.portfolioElement = project;
        if (this.portfolioElement.imgUrl) {
          this.backgroundImage = this.portfolioElement.imgUrl;
          this.hasBackgroundImage = true;
        }
        this.setBackgroundImage();
        this.isPortfolioElement = true;
        this.titleService.setTitle(`${this.portfolioElement.title} | Portafolio de Cristian Cajiao Skarnic`);
      } else {
        this.isPortfolioElement = false;
        this.titleService.setTitle(`No existe proyecto asociado a esta ID | Portafolio de Cristian Cajiao Skarnic`);
      }
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }

  setBackgroundImage(): void {
    this.currentBackgroundProperties = {
      backgroundImage: `url(${this.backgroundImage})`,
      ...this.backgroundDefaultProperties,
    };

    this.imageObject[0] = {
      image: this.backgroundImage,
    };
  }

  showLightbox(index: number): void {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler(): void {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

  proyectUsed(tool: string): string {
    return `En este proyecto se usó ${tool}`
  }
}

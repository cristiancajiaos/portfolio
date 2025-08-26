import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Project } from '../classes/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) {

  }

  public async getProjects(): Promise<Project[]> {
    return await lastValueFrom(this.http.get<Project[]>(`json/projects.json`));
  }

}

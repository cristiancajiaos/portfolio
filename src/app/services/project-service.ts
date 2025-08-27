import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, lastValueFrom, map, mergeMap, Observable } from 'rxjs';
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

  public async getProject(projectId: number): Promise<Project> {
    return await lastValueFrom(this.http.get<Project[]>(
      'json/projects.json'
    ).pipe(
      map((projects) => projects.filter(p => p.id == projectId))
    ).pipe(
      mergeMap(project => project)
    ));
  }

}

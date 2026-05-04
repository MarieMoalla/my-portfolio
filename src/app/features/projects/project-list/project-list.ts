import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../../core/services/projects';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-list',
  imports: [RouterLink],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectListComponent {
  projects: Project[];

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getAll();
  }
}

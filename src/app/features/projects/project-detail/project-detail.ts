import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../../../core/services/projects';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.project = this.projectsService.getBySlug(slug);
  }
}

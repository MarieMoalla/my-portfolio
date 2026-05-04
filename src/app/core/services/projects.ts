import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private projects: Project[] = [
    {
      id: 1,
      slug: 'way-to-learn',
      title: 'Way To Learn',
      summary: 'A bilingual technical blog platform for sharing dev knowledge, with Azure-based infrastructure and full CI/CD.',
      description: 'Designed and developed a bilingual (FR/EN) technical blog platform using Angular and .NET 6. Deployed on Microsoft Azure using Virtual Machines and Blob Storage for file management. Implemented Azure Functions for background processes (blog rating, email subscriptions) and set up a full CI/CD pipeline via Azure DevOps.',
      tags: ['.NET 6', 'Angular', 'Azure', 'Azure Functions', 'Azure DevOps', 'SQL Server'],
      githubUrl: 'https://github.com/MarieMoalla',
      featured: true
    },
    {
      id: 2,
      slug: 'industrial-platform-suez',
      title: 'Industrial IoT Platform — SUEZ',
      summary: 'Large-scale industrial platform with DDD architecture, full observability stack, and Azure cloud integration.',
      description: 'Contributed to a large-scale industrial platform at SUEZ built on Domain-Driven Design. Introduced observability using OpenTelemetry (metrics, traces), resolved critical EF Core concurrency issues, extended email infrastructure for the NEOM project, and refactored module initialization for extensibility.',
      tags: ['.NET 10', 'Angular 18', 'OpenTelemetry', 'Grafana', 'RabbitMQ', 'PostgreSQL', 'DDD'],
      featured: true
    },
    {
      id: 3,
      slug: 'dynamic-connector-timsoft',
      title: 'Runtime Dynamic Connector',
      summary: 'A WPF-based connector that generates and executes code at runtime for flexible system integrations.',
      description: 'Designed and built a dynamic connector using .NET reflection and source generators to generate executable integration code at runtime. Integrated Power Automate workflows to deliver structured JSON payloads via Adaptive Cards in Outlook environments.',
      tags: ['.NET 6', 'WPF', 'Worker Service', 'Power Automate', 'AdaptiveCards', 'SQL Server'],
      featured: false
    }
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getBySlug(slug: string): Project | undefined {
    return this.projects.find(p => p.slug === slug);
  }

  getFeatured(): Project[] {
    return this.projects.filter(p => p.featured);
  }
}

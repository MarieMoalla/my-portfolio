import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { ProjectsService } from '../../core/services/projects';
import { ArticlesService } from '../../core/services/articles';
import { Project } from '../../core/models/project.model';
import { Article } from '../../core/models/article.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule, AnimateOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  projects: Project[];
  latestArticles: Article[];

  skills = [
    { category: 'Core Technologies', items: ['C#', 'ASP.NET Core', 'WPF', 'Angular', '.NET 10'] },
    { category: 'Cloud & DevOps', items: ['Microsoft Azure', 'Azure DevOps', 'Docker', 'Jenkins', 'CI/CD'] },
    { category: 'Observability', items: ['OpenTelemetry', 'Grafana', 'Zipkin', 'Seq'] },
    { category: 'Messaging & Dist. Systems', items: ['RabbitMQ', 'MassTransit', 'Microservices', 'DDD'] },
    { category: 'Databases & ORMs', items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Entity Framework', 'Dapper'] }
  ];

  experience = [
    {
      period: 'May 2024 – Present',
      role: '.NET Software Engineer',
      company: 'SUEZ — Île-de-France, France',
      description: 'Working on a large-scale industrial platform (DDD, Scrumban). Introduced full-stack observability with OpenTelemetry. Resolved critical EF concurrency bugs, extended email infrastructure for the NEOM project, and refactored module initialization for better extensibility.'
    },
    {
      period: 'Jul 2023 – Sep 2023',
      role: 'WPF Developer (Internship)',
      company: 'Timsoft Group — Tunis',
      description: 'Designed a dynamic connector generating executable code at runtime using reflection & source generators. Integrated Power Automate workflows delivering Adaptive Cards payloads within Outlook.'
    },
    {
      period: 'Jan 2021 – Jun 2021',
      role: 'Software Developer (Internship)',
      company: 'Bitsoft Innovation — Tunis',
      description: 'Contributed to core ERP modules in a microservices architecture (Agile/Scrum). Set up Azure DevOps CI/CD pipelines and worked with Azure Functions and Azure App Service.'
    }
  ];

  education = [
    {
      period: '2021 – 2024',
      degree: "Master's Degree in Software Engineering",
      school: 'Higher Institute of Arts and Multimedia, Manouba'
    },
    {
      period: '2018 – 2021',
      degree: "Bachelor's Degree in Computer Science and Multimedia",
      school: 'Higher Institute of Arts and Multimedia, Manouba'
    }
  ];

  certifications = [
    { title: 'Microsoft Most Valuable Professional (MVP)', year: '2025' },
    { title: 'APTIS General Test — Level C1', year: '2022' }
  ];

  languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Advanced' },
    { name: 'English', level: 'Advanced' }
  ];

  community = [
    'Gold Microsoft Student Ambassador',
    'Mentored students & delivered technical workshops and sessions',
    'Co-organized NMTC event (500+ participants)',
    'Led a student community of 100+ members',
    'Contributed to international programs and collaborations'
  ];

  form = { name: '', email: '', message: '' };
  submitted = false;
  sending = false;
  sendError = false;

  // ── EmailJS credentials ───────────────────────────────────────
  // 1. Create a free account at https://emailjs.com
  // 2. Add an Email Service (e.g. Gmail) → copy the Service ID below
  // 3. Create an Email Template → copy the Template ID below
  //    Template variables to use: {{from_name}}, {{from_email}}, {{message}}
  // 4. Go to Account → API Keys → copy your Public Key below
  private readonly EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
  private readonly EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private readonly EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

  constructor(
    private projectsService: ProjectsService,
    private articlesService: ArticlesService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.projects = this.projectsService.getAll();
    this.latestArticles = this.articlesService.getAll().slice(0, 3);
  }

  scrollTo(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit(): void {
    this.sending = true;
    this.sendError = false;

    emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      {
        from_name:  this.form.name,
        from_email: this.form.email,
        message:    this.form.message,
      },
      this.EMAILJS_PUBLIC_KEY
    ).then(() => {
      this.submitted = true;
      this.sending = false;
      this.form = { name: '', email: '', message: '' };
    }).catch(() => {
      this.sendError = true;
      this.sending = false;
    });
  }
}


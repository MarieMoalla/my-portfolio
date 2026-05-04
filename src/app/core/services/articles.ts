import { Injectable } from '@angular/core';
import { Article, ArticleCategory } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {

  readonly categories: ArticleCategory[] = [
    {
      name: 'Architecture & Design',
      slug: 'architecture-design',
      description: 'Higher-level thinking: software structure, design patterns, and engineering principles.'
    },
    {
      name: '.NET Ecosystem & Frameworks',
      slug: 'dotnet-ecosystem',
      description: 'Everything related to the .NET platform, including APIs, observability, and runtime features.'
    },
    {
      name: 'C# Language Fundamentals & Advanced Features',
      slug: 'csharp-fundamentals',
      description: 'Core language concepts, syntax deep dives, and advanced C# features.'
    },
    {
      name: 'Performance & Optimization',
      slug: 'performance-optimization',
      description: 'Techniques and patterns for writing faster, more efficient .NET code.'
    },
    {
      name: 'Concurrency & Multithreading',
      slug: 'concurrency-multithreading',
      description: 'Parallelism, thread safety, async/await internals, and concurrent data structures.'
    },
    {
      name: 'Data Structures & Algorithms',
      slug: 'data-structures-algorithms',
      description: 'Classic algorithmic thinking and data structure fundamentals in C#.'
    },
    {
      name: 'Data & Storage',
      slug: 'data-storage',
      description: 'Persistence, databases, caching systems, and storage strategies.'
    },
    {
      name: 'LINQ & Collection Usage',
      slug: 'linq-collections',
      description: 'Querying and manipulating collections effectively with LINQ.'
    },
    {
      name: 'Testing & Development Practices',
      slug: 'testing-practices',
      description: 'Code quality, test-driven development, and engineering best practices.'
    },
    {
      name: 'C# Tips & Best Practices',
      slug: 'csharp-tips',
      description: 'Short, practical insights for writing cleaner and more idiomatic C# code.'
    }
  ];

  private articles: Article[] = [
    {
      id: 1,
      slug: 'beginners-guide-authentication-authorization-in-modern-applications',
      title: "Beginner's Guide: Authentication & Authorization in Modern Applications",
      summary: 'A practical introduction to authentication and authorization patterns used in modern web applications, covering JWT, OAuth 2.0, and role-based access control.',
      content: '',
      tags: ['.NET Core', 'Security', 'Authentication'],
      publishedAt: '2026-03-27',
      readTime: 7,
      views: '509',
      category: 'Architecture & Design',
      categorySlug: 'architecture-design',
      externalUrl: 'https://www.c-sharpcorner.com/article/beginners-guide-authentication-authorization-in-modern-applications/'
    },
    {
      id: 2,
      slug: 'observability-in-net-with-opentelemetry',
      title: 'Observability in .NET with OpenTelemetry',
      summary: 'Learn how to instrument your .NET applications with OpenTelemetry to gain distributed traces, metrics, and logs: the three pillars of observability.',
      content: '',
      tags: ['.NET', 'OpenTelemetry', 'Observability'],
      publishedAt: '2026-02-17',
      readTime: 8,
      views: '1k',
      category: '.NET Ecosystem & Frameworks',
      categorySlug: 'dotnet-ecosystem',
      externalUrl: 'https://www.c-sharpcorner.com/article/observability-in-net-with-opentelemetry/'
    },
    {
      id: 3,
      slug: 'abstract-vs-virtual-in-c-sharp',
      title: 'Abstract vs Virtual in C#',
      summary: 'Understand the key difference between abstract and virtual methods in C#, looking at when each enforces or enables polymorphism in your class hierarchy.',
      content: '',
      tags: ['C#', 'OOP', 'Inheritance'],
      publishedAt: '2026-01-28',
      readTime: 5,
      views: '937',
      category: 'C# Language Fundamentals & Advanced Features',
      categorySlug: 'csharp-fundamentals',
      externalUrl: 'https://www.c-sharpcorner.com/article/abstract-vs-virtual-in-c-sharp/'
    },
    {
      id: 4,
      slug: 'using-cache-in-c-sharp-with-concurrency',
      title: 'Using Cache in C# with Concurrency',
      summary: 'Explore thread-safe caching strategies in C#, including IMemoryCache, ConcurrentDictionary, and avoiding race conditions in high-throughput scenarios.',
      content: '',
      tags: ['C#', 'Caching', 'Threading'],
      publishedAt: '2026-01-26',
      readTime: 7,
      views: '741',
      category: 'Concurrency & Multithreading',
      categorySlug: 'concurrency-multithreading',
      externalUrl: 'https://www.c-sharpcorner.com/article/using-cache-in-c-sharp-with-concurrency/'
    },
    {
      id: 5,
      slug: 'cache-local-storage-and-modern-caching-techniques',
      title: 'Cache, Local Storage, and Modern Caching Techniques',
      summary: 'A comprehensive look at caching layers, from in-memory and local storage to distributed caches like Redis, and how to choose the right strategy for your app.',
      content: '',
      tags: ['Redis', 'Caching', 'Performance'],
      publishedAt: '2026-01-22',
      readTime: 9,
      views: '731',
      category: 'Data & Storage',
      categorySlug: 'data-storage',
      externalUrl: 'https://www.c-sharpcorner.com/article/cache-local-storage-and-modern-caching-techniques/'
    },
    {
      id: 6,
      slug: 'understand-solid-design-principles-in-5-minutes',
      title: 'Understand SOLID Design Principles in 5 Minutes',
      summary: 'A concise breakdown of the five SOLID principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion, with C# examples.',
      content: '',
      tags: ['SOLID', 'Design Patterns', 'C#'],
      publishedAt: '2026-01-21',
      readTime: 5,
      views: '683',
      category: 'Architecture & Design',
      categorySlug: 'architecture-design',
      externalUrl: 'https://www.c-sharpcorner.com/article/understand-solid-design-principles-in-5-minutes/'
    },
    {
      id: 7,
      slug: 'record-record-struct-and-structural-equality-in-c-sharp',
      title: 'Record, Record Struct, and Structural Equality in C#',
      summary: 'Deep dive into C# records and record structs, covering how structural equality works, when to use each, and how they differ from regular classes and structs.',
      content: '',
      tags: ['C#', 'Records', 'Equality'],
      publishedAt: '2025-12-18',
      readTime: 7,
      views: '1.2k',
      category: 'C# Language Fundamentals & Advanced Features',
      categorySlug: 'csharp-fundamentals',
      externalUrl: 'https://www.c-sharpcorner.com/article/record-record-struct-and-structural-equality-in-c-sharp/'
    },
    {
      id: 8,
      slug: 'domain-driven-design-ddd-for-beginners',
      title: 'Domain Driven Design (DDD) for Beginners',
      summary: 'An accessible introduction to DDD concepts including bounded contexts, aggregates, entities, value objects, and how to apply them to real-world .NET projects.',
      content: '',
      tags: ['DDD', 'Architecture', 'Design Patterns'],
      publishedAt: '2025-12-16',
      readTime: 10,
      views: '1.8k',
      category: 'Architecture & Design',
      categorySlug: 'architecture-design',
      externalUrl: 'https://www.c-sharpcorner.com/article/domain-driven-design-ddd-for-beginners/'
    },
    {
      id: 9,
      slug: 'understanding-any-vs-count',
      title: 'Understanding Any() vs Count()',
      summary: "Discover why Any() is almost always the better choice over Count() > 0 in LINQ, with benchmarks and examples that show the performance difference.",
      content: '',
      tags: ['LINQ', 'C#', 'Performance'],
      publishedAt: '2025-11-20',
      readTime: 4,
      views: '700',
      category: 'LINQ & Collection Usage',
      categorySlug: 'linq-collections',
      externalUrl: 'https://www.c-sharpcorner.com/article/understanding-any-vs-count/'
    },
    {
      id: 10,
      slug: 'net-10-breaking-changes-the-new-field-keyword',
      title: '.NET 10 Breaking Changes: The New field Keyword',
      summary: 'Explore the new field keyword introduced in .NET 10/C# 14 and how it changes property accessors, plus what breaking changes to watch out for when upgrading.',
      content: '',
      tags: ['.NET', 'C#', 'Breaking Changes'],
      publishedAt: '2025-11-19',
      readTime: 6,
      views: '1.2k',
      category: '.NET Ecosystem & Frameworks',
      categorySlug: 'dotnet-ecosystem',
      externalUrl: 'https://www.c-sharpcorner.com/article/net-10-breaking-changes-the-new-field-keyword/'
    },
    {
      id: 11,
      slug: 'null-conditional-assignment-in-c-sharp',
      title: 'Null Conditional Assignment in C#',
      summary: 'Learn how the null conditional assignment operator (??=) works in C#, where to use it, and how it simplifies null-check patterns in everyday code.',
      content: '',
      tags: ['C#', 'Null Safety', 'Operators'],
      publishedAt: '2025-11-15',
      readTime: 4,
      views: '906',
      category: 'C# Language Fundamentals & Advanced Features',
      categorySlug: 'csharp-fundamentals',
      externalUrl: 'https://www.c-sharpcorner.com/article/null-conditional-assignment-in-c-sharp/'
    },
    {
      id: 12,
      slug: 'understanding-spant-in-c-sharp2',
      title: 'Understanding Span<T> in C#',
      summary: 'A practical guide to Span<T>: what it is, why it exists, how it avoids heap allocations, and when to use it for high-performance scenarios.',
      content: '',
      tags: ['C#', 'Performance', 'Memory'],
      publishedAt: '2025-11-12',
      readTime: 8,
      views: '1.4k',
      category: 'C# Language Fundamentals & Advanced Features',
      categorySlug: 'csharp-fundamentals',
      externalUrl: 'https://www.c-sharpcorner.com/article/understanding-spant-in-c-sharp2/'
    },
    {
      id: 13,
      slug: 'what-you-need-to-know-about-extension-members-in-c-sharp',
      title: 'What you need to know about Extension Members in C#',
      summary: 'Explore extension members in C#, including properties, methods, and more, how they differ from classic extension methods, and the new syntax coming in C# 13+.',
      content: '',
      tags: ['C#', 'Extensions', 'Language Features'],
      publishedAt: '2025-11-09',
      readTime: 6,
      views: '1.1k',
      category: 'C# Language Fundamentals & Advanced Features',
      categorySlug: 'csharp-fundamentals',
      externalUrl: 'https://www.c-sharpcorner.com/article/what-you-need-to-know-about-extension-members-in-c-sharp/'
    },
    {
      id: 14,
      slug: 'binary-search-from-basics',
      title: 'Binary Search From Basics',
      summary: 'A ground-up explanation of the binary search algorithm: how it works, its O(log n) complexity, common pitfalls, and C# implementations.',
      content: '',
      tags: ['DSA', 'Algorithms', 'C#'],
      publishedAt: '2025-10-28',
      readTime: 6,
      views: '871',
      category: 'Data Structures & Algorithms',
      categorySlug: 'data-structures-algorithms',
      externalUrl: 'https://www.c-sharpcorner.com/article/binary-search-from-basics/'
    },
    {
      id: 15,
      slug: 'why-not-use-dictionaries-in-multi-thread-apps',
      title: 'Why not use Dictionaries in Multi-Thread Apps',
      summary: "Dictionary<TKey, TValue> is not thread-safe. Learn why it fails under concurrency, what can go wrong, and how ConcurrentDictionary fixes these issues.",
      content: '',
      tags: ['C#', 'Threading', 'Concurrency'],
      publishedAt: '2025-10-06',
      readTime: 6,
      views: '1.2k',
      category: 'Concurrency & Multithreading',
      categorySlug: 'concurrency-multithreading',
      externalUrl: 'https://www.c-sharpcorner.com/article/why-not-use-dictionaries-in-multi-thread-apps/'
    },
    {
      id: 16,
      slug: 'c-sharp-tips-string-isnullorempty-vs-string-isnullorwhitespace',
      title: 'C# tips: string.IsNullOrEmpty vs string.IsNullOrWhiteSpace',
      summary: 'IsNullOrEmpty only checks for null/empty, while IsNullOrWhiteSpace also catches whitespace-only strings. Knowing when to use each can prevent subtle bugs in your code.',
      content: '',
      tags: ['C#', 'Strings', 'Tips'],
      publishedAt: '2025-10-03',
      readTime: 3,
      views: '1.5k',
      category: 'C# Tips & Best Practices',
      categorySlug: 'csharp-tips',
      externalUrl: 'https://www.c-sharpcorner.com/article/c-sharp-tips-string-isnullorempty-vs-string-isnullorwhitespace/'
    },
    {
      id: 17,
      slug: 'c-sharp-tip-use-stackt-not-listt',
      title: 'C# Tip: Use Stack<T>, Not List<T>',
      summary: 'When you need LIFO (last-in, first-out) semantics, Stack<T> is both more expressive and more efficient than using List<T> with manual index management.',
      content: '',
      tags: ['C#', 'DSA', 'Collections'],
      publishedAt: '2025-10-01',
      readTime: 4,
      views: '1.4k',
      category: 'Data Structures & Algorithms',
      categorySlug: 'data-structures-algorithms',
      externalUrl: 'https://www.c-sharpcorner.com/article/c-sharp-tip-use-stackt-not-listt/'
    },
    {
      id: 18,
      slug: 'all-you-need-to-know-about-switch-expression-and-modern-pattern-matching',
      title: 'All you need to know about switch expression and Modern Pattern Matching',
      summary: 'A comprehensive guide to switch expressions and modern pattern matching in C#, covering property patterns, positional patterns, guard clauses, and real-world usage.',
      content: '',
      tags: ['C#', 'Pattern Matching', 'Language Features'],
      publishedAt: '2025-09-22',
      readTime: 9,
      views: '4.1k',
      category: 'C# Language Fundamentals & Advanced Features',
      categorySlug: 'csharp-fundamentals',
      externalUrl: 'https://www.c-sharpcorner.com/article/all-you-need-to-know-about-switch-expression-and-modern-pattern-matching/'
    },
    {
      id: 19,
      slug: 'c-sharp-performance-hack-use-record-struct-for-small-immutable-models',
      title: 'C# Performance Hack: Use record struct for Small, Immutable Models',
      summary: 'Record structs live on the stack and avoid heap allocations. Learn when to swap your records for record structs to squeeze performance out of hot code paths.',
      content: '',
      tags: ['C#', 'Performance', 'Records'],
      publishedAt: '2025-09-16',
      readTime: 5,
      views: '1.7k',
      category: 'Performance & Optimization',
      categorySlug: 'performance-optimization',
      externalUrl: 'https://www.c-sharpcorner.com/article/c-sharp-performance-hack-use-record-struct-for-small-immutable-models/'
    },
    {
      id: 20,
      slug: 'how-asyncawait-really-works-in-c-sharp-a-beginner-friendly-guide',
      title: 'How Async/Await Really Works in C#: A Beginner-Friendly Guide',
      summary: 'Demystify async/await by understanding state machines, the SynchronizationContext, ConfigureAwait, and why blocking on async code causes deadlocks.',
      content: '',
      tags: ['C#', 'Async', 'Concurrency'],
      publishedAt: '2025-09-07',
      readTime: 10,
      views: '2.5k',
      category: 'Concurrency & Multithreading',
      categorySlug: 'concurrency-multithreading',
      externalUrl: 'https://www.c-sharpcorner.com/article/how-asyncawait-really-works-in-c-sharp-a-beginner-friendly-guide/'
    },
    {
      id: 21,
      slug: 'why-valuetask-can-save-you-from-async-overhead',
      title: 'Why ValueTask Can Save You from Async Overhead',
      summary: 'ValueTask avoids heap allocations for hot async paths that often complete synchronously. Learn when to use it over Task and the pitfalls to avoid.',
      content: '',
      tags: ['C#', 'Async', 'Performance'],
      publishedAt: '2025-09-04',
      readTime: 7,
      views: '3.6k',
      category: 'Performance & Optimization',
      categorySlug: 'performance-optimization',
      externalUrl: 'https://www.c-sharpcorner.com/article/why-valuetask-can-save-you-from-async-overhead/'
    },
    {
      id: 22,
      slug: 'when-to-use-tolist-and-toarray',
      title: 'When To Use ToList() and ToArray()?',
      summary: 'ToList() and ToArray() both materialize IEnumerable, but have different memory and performance characteristics. Learn when to prefer one over the other.',
      content: '',
      tags: ['C#', 'Collections', 'Performance'],
      publishedAt: '2025-08-20',
      readTime: 5,
      views: '1.7k',
      category: 'Performance & Optimization',
      categorySlug: 'performance-optimization',
      externalUrl: 'https://www.c-sharpcorner.com/article/when-to-use-tolist-and-toarray/'
    },
    {
      id: 23,
      slug: 'sql-server-index-fragmentation-what-it-is-and-how-to-fix',
      title: 'SQL Server Index Fragmentation: What It Is and How to Fix',
      summary: 'Index fragmentation silently degrades SQL Server query performance. Learn what causes it, how to detect it, and when to rebuild vs. reorganize your indexes.',
      content: '',
      tags: ['SQL Server', 'Performance', 'Database'],
      publishedAt: '2025-08-20',
      readTime: 8,
      views: '1.8k',
      category: 'Data & Storage',
      categorySlug: 'data-storage',
      externalUrl: 'https://www.c-sharpcorner.com/article/sql-server-index-fragmentation-what-it-is-and-how-to-fix/'
    },
    {
      id: 24,
      slug: 'when-to-use-generic-vs-non-generic-collections-in-c-sharp',
      title: 'When to Use Generic vs Non-Generic Collections in C#',
      summary: 'Non-generic collections like ArrayList still exist, but generic collections like List<T> are type-safe and more performant. Understand exactly when and why to use each.',
      content: '',
      tags: ['C#', 'Collections', 'Generics'],
      publishedAt: '2025-08-19',
      readTime: 6,
      views: '1.8k',
      category: 'C# Language Fundamentals & Advanced Features',
      categorySlug: 'csharp-fundamentals',
      externalUrl: 'https://www.c-sharpcorner.com/article/when-to-use-generic-vs-non-generic-collections-in-c-sharp/'
    },
    {
      id: 25,
      slug: 'structured-logging-in-net-why-you-should-avoid-string-interpolation',
      title: 'Structured Logging in .NET: Why You Should Avoid String Interpolation',
      summary: 'String interpolation in logging destroys structured log properties and hurts performance. Learn the right way to use ILogger with message templates in .NET.',
      content: '',
      tags: ['.NET', 'Logging', 'Best Practices'],
      publishedAt: '2025-08-13',
      readTime: 5,
      views: '1.7k',
      category: '.NET Ecosystem & Frameworks',
      categorySlug: 'dotnet-ecosystem',
      externalUrl: 'https://www.c-sharpcorner.com/article/structured-logging-in-net-why-you-should-avoid-string-interpolation/'
    },
    {
      id: 26,
      slug: 'everything-you-need-to-know-about-minimal-apis-in-net',
      title: 'Everything You Need to Know About Minimal APIs in .NET',
      summary: 'Minimal APIs offer a lightweight, low-ceremony way to build HTTP services in .NET. This guide covers routing, middleware, validation, DI, and when to prefer them over controllers.',
      content: '',
      tags: ['.NET', 'Minimal APIs', 'ASP.NET Core'],
      publishedAt: '2025-08-11',
      readTime: 11,
      views: '4.1k',
      category: '.NET Ecosystem & Frameworks',
      categorySlug: 'dotnet-ecosystem',
      externalUrl: 'https://www.c-sharpcorner.com/article/everything-you-need-to-know-about-minimal-apis-in-net/'
    },
    {
      id: 27,
      slug: 'why-readonly-doesnt-make-objects-immutable-in-c-sharp',
      title: "Why Readonly Doesn't Make Objects Immutable in C#",
      summary: "The readonly keyword prevents reassignment of a field but doesn't make the object it references immutable. Understand deep vs shallow immutability in C#.",
      content: '',
      tags: ['C#', 'Immutability', 'Memory'],
      publishedAt: '2025-08-09',
      readTime: 5,
      views: '1.8k',
      category: 'C# Language Fundamentals & Advanced Features',
      categorySlug: 'csharp-fundamentals',
      externalUrl: 'https://www.c-sharpcorner.com/article/why-readonly-doesnt-make-objects-immutable-in-c-sharp/'
    },
    {
      id: 28,
      slug: 'how-to-write-tests-in-c-sharp-in-5-steps-tdd-explained',
      title: 'How to Write Tests in C# in 5 Steps & TDD Explained',
      summary: 'A step-by-step guide to writing unit tests in C# using xUnit, along with a practical introduction to Test-Driven Development (TDD): Red, Green, Refactor.',
      content: '',
      tags: ['C#', 'TDD', 'Testing'],
      publishedAt: '2025-08-07',
      readTime: 8,
      views: '1.4k',
      category: 'Testing & Development Practices',
      categorySlug: 'testing-practices',
      externalUrl: 'https://www.c-sharpcorner.com/article/how-to-write-tests-in-c-sharp-in-5-steps-tdd-explained/'
    },
    {
      id: 29,
      slug: 'stop-looping-use-dictionaryguid-t-for-fast-entity-access-in-net',
      title: 'Stop Looping: Use Dictionary<Guid, T> for Fast Entity Access in .NET',
      summary: 'Iterating a list to find an entity by ID is O(n). Using Dictionary<Guid, T> makes it O(1). Learn when and how to build lookup dictionaries in your .NET services.',
      content: '',
      tags: ['C#', 'Performance', 'Collections'],
      publishedAt: '2025-08-05',
      readTime: 5,
      views: '1.1k',
      category: 'Performance & Optimization',
      categorySlug: 'performance-optimization',
      externalUrl: 'https://www.c-sharpcorner.com/article/stop-looping-use-dictionaryguid-t-for-fast-entity-access-in-net/'
    }
  ];

  getAll(): Article[] {
    return this.articles;
  }

  getBySlug(slug: string): Article | undefined {
    return this.articles.find(a => a.slug === slug);
  }

  getByTag(tag: string): Article[] {
    return this.articles.filter(a => a.tags.includes(tag));
  }

  getByCategory(categorySlug: string): Article[] {
    return this.articles.filter(a => a.categorySlug === categorySlug);
  }

  getAllCategories(): ArticleCategory[] {
    return this.categories;
  }

  getCategoryBySlug(slug: string): ArticleCategory | undefined {
    return this.categories.find(c => c.slug === slug);
  }
}

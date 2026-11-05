create extension if not exists "pgcrypto";

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  category text not null,
  availability text not null,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.project_translations (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  locale text not null check (locale in ('ar','en')),
  title text not null,
  description text not null,
  unique(project_id, locale)
);

create table public.customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  country text,
  notes text,
  created_at timestamptz not null default now(),
  unique(email)
);

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  reference text unique not null,
  customer_id uuid references public.customers(id),
  request_type text not null,
  contact_method text,
  description text not null,
  status text not null default 'New',
  internal_notes text,
  created_at timestamptz not null default now()
);

create table public.services (id uuid primary key default gen_random_uuid(), slug text unique not null, published boolean default true);
create table public.service_translations (service_id uuid references public.services(id) on delete cascade, locale text check(locale in ('ar','en')), name text not null, description text, unique(service_id, locale));
create table public.skills (id uuid primary key default gen_random_uuid(), category text not null, name text not null);
create table public.experience (id uuid primary key default gen_random_uuid(), company text not null, start_date date, end_date date);
create table public.experience_translations (experience_id uuid references public.experience(id) on delete cascade, locale text check(locale in ('ar','en')), role text not null, summary text, unique(experience_id, locale));
create table public.blog_posts (id uuid primary key default gen_random_uuid(), slug text unique not null, published_at timestamptz);
create table public.blog_translations (post_id uuid references public.blog_posts(id) on delete cascade, locale text check(locale in ('ar','en')), title text not null, content text, unique(post_id, locale));
create table public.testimonials (id uuid primary key default gen_random_uuid(), person_name text not null, quote text not null, verified boolean not null default false);
create table public.media_assets (id uuid primary key default gen_random_uuid(), storage_path text unique not null, alt_text text, created_at timestamptz default now());
create table public.site_settings (key text primary key, value jsonb not null default '{}'::jsonb);
create table public.activity_logs (id uuid primary key default gen_random_uuid(), actor_id uuid references auth.users(id), action text not null, details jsonb, created_at timestamptz default now());

alter table public.projects enable row level security;
alter table public.project_translations enable row level security;
alter table public.customers enable row level security;
alter table public.inquiries enable row level security;
alter table public.services enable row level security;
alter table public.service_translations enable row level security;
alter table public.skills enable row level security;
alter table public.experience enable row level security;
alter table public.experience_translations enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_translations enable row level security;
alter table public.testimonials enable row level security;
alter table public.media_assets enable row level security;
alter table public.site_settings enable row level security;
alter table public.activity_logs enable row level security;

create policy "Public published projects" on public.projects for select using (published = true);
create policy "Public project translations" on public.project_translations for select using (exists (select 1 from public.projects p where p.id = project_id and p.published = true));
create policy "Public services" on public.services for select using (published = true);
create policy "Public service translations" on public.service_translations for select using (exists (select 1 from public.services s where s.id = service_id and s.published = true));
create policy "Public skills" on public.skills for select using (true);
create policy "Public experience" on public.experience for select using (true);
create policy "Public experience translations" on public.experience_translations for select using (true);
create policy "Public published posts" on public.blog_posts for select using (published_at is not null and published_at <= now());
create policy "Public verified testimonials" on public.testimonials for select using (verified = true);

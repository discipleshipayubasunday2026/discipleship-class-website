create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.questions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  email text not null,
  subject text not null,
  topic text,
  question text not null,
  category text not null default 'General' check (category in (
    'Bible Study',
    'Faith',
    'Prayer',
    'Christian Living',
    'Discipleship',
    'Church/Class',
    'Assignment',
    'General'
  )),
  urgency text not null default 'Medium' check (urgency in ('Low', 'Medium', 'High', 'Critical')),
  summary text,
  ai_response text,
  status text not null default 'Open' check (status in ('Open', 'In Progress', 'Resolved')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default uuid_generate_v4(),
  question_id uuid not null references public.questions(id) on delete cascade,
  sender text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_profiles_email on public.profiles(email);
create index if not exists idx_questions_user_id on public.questions(user_id);
create index if not exists idx_questions_status on public.questions(status);
create index if not exists idx_questions_category on public.questions(category);
create index if not exists idx_questions_created_at on public.questions(created_at desc);
create index if not exists idx_messages_question_id on public.messages(question_id);

alter table public.profiles enable row level security;
alter table public.questions enable row level security;
alter table public.messages enable row level security;

create policy "Users can read own profile"
on public.profiles for select using (auth.uid() = id);

create policy "Users can insert own profile"
on public.profiles for insert with check (auth.uid() = id);

create policy "Users can update own profile"
on public.profiles for update using (auth.uid() = id);

create policy "Users can read own questions"
on public.questions for select using (auth.uid() = user_id);

create policy "Users can insert own questions"
on public.questions for insert with check (auth.uid() = user_id);

create policy "Users can update own questions"
on public.questions for update using (auth.uid() = user_id);

create policy "Users can read own messages"
on public.messages for select using (
  exists (
    select 1 from public.questions q
    where q.id = messages.question_id and q.user_id = auth.uid()
  )
);

create policy "Users can insert own messages"
on public.messages for insert with check (
  exists (
    select 1 from public.questions q
    where q.id = messages.question_id and q.user_id = auth.uid()
  )
);

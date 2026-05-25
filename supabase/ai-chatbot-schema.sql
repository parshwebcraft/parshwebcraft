create table if not exists public.ai_chat_sessions (
  id text primary key,
  visitor_id text,
  page_path text,
  referrer text,
  user_agent text,
  name text,
  email text,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.ai_chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id text not null references public.ai_chat_sessions(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamptz not null default now()
);

create index if not exists ai_chat_messages_session_created_idx
  on public.ai_chat_messages (session_id, created_at);

create index if not exists ai_chat_sessions_updated_idx
  on public.ai_chat_sessions (updated_at desc);

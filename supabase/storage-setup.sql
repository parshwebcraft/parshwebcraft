-- ============================================================
-- Setup Supabase Storage Bucket for Candidate Resumes
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Create/Update the 'resumes' bucket (Public so admin can download from email/dashboard)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'resumes',
  'resumes',
  true, -- public bucket so resume links work in admin email
  10485760, -- 10MB limit in bytes
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

-- 2. Drop existing policies to prevent conflict errors
DROP POLICY IF EXISTS "Allow candidates to upload resumes" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read access to resumes" ON storage.objects;
DROP POLICY IF EXISTS "Allow admin read access to all resumes" ON storage.objects;

-- 3. Allow candidates (authenticated users) to upload resumes
CREATE POLICY "Allow candidates to upload resumes"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'resumes');

-- 4. Allow public read access to uploaded resumes
CREATE POLICY "Allow public read access to resumes"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'resumes');

-- 5. Allow service_role (admin) full access
CREATE POLICY "Allow admin read access to all resumes"
ON storage.objects FOR ALL
TO service_role
USING (bucket_id = 'resumes')
WITH CHECK (bucket_id = 'resumes');

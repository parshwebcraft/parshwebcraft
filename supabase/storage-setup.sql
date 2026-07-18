-- ============================================================
-- Setup Supabase Storage Bucket for Candidate Resumes
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Create the 'resumes' private bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'resumes',
  'resumes',
  false, -- private bucket for security
  5242880, -- 5MB limit in bytes
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO NOTHING;

-- 2. Drop existing policies to prevent conflict errors
DROP POLICY IF EXISTS "Allow candidates to upload resumes" ON storage.objects;
DROP POLICY IF EXISTS "Allow candidates to select own resumes" ON storage.objects;
DROP POLICY IF EXISTS "Allow admin read access to all resumes" ON storage.objects;

-- 3. Allow authenticated candidates to upload their resume to their own user folder
CREATE POLICY "Allow candidates to upload resumes"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'resumes' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- 4. Allow candidates to view/download their own uploaded resumes
CREATE POLICY "Allow candidates to select own resumes"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'resumes' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- 5. Allow backend service role (admin) to read and manage all resumes
CREATE POLICY "Allow admin read access to all resumes"
ON storage.objects FOR ALL
TO service_role
USING (bucket_id = 'resumes')
WITH CHECK (bucket_id = 'resumes');

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vpxadqnrwwtbochkzjoy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZweGFkcW5yd3d0Ym9jaGt6am95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNjkzODAsImV4cCI6MjAzMjc0NTM4MH0.2uOVZbFWx0jAbUytL438FEwlhUu0vQ8XYMV3SNTHa6w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

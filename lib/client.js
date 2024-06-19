// lib/client.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mbktadpytgoiykgwcefk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ia3RhZHB5dGdvaXlrZ3djZWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4OTE3NDAsImV4cCI6MjAyOTQ2Nzc0MH0.nfDwoihmWPi76JLIdnSXsPTUSUUjm_xHZxMtDCjDpVc';

export const supabaseClient = createClient(supabaseUrl, supabaseKey);

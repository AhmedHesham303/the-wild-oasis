import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zwipdpfxynjidzvowfwu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3aXBkcGZ4eW5qaWR6dm93Znd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MDEyMjYsImV4cCI6MjA2ODE3NzIyNn0.NgUm1G8yHQWsenI72k1Y9u4BWJJZE4fTq8-eJaVP45U";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://shckhdnioxebdemqawpw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoY2toZG5pb3hlYmRlbXFhd3B3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjk3MzgzMiwiZXhwIjoyMDQyNTQ5ODMyfQ.gVM5PfD2tHZfnPGVPsYjYoPeNmb5DNEicUxI4753nBM';

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch player stats from the database
export const fetchPlayerStats = async (playerName) => {
  try {
    const { data, error } = await supabase
      .from('players') // Replace 'players' with the name of your table
      .select('*')
      .eq('name', playerName);

    if (error) {
      console.error('Error fetching player stats:', error);
      return { error };
    }

    return { data };
  } catch (err) {
    console.error('Error fetching data:', err);
    return { error: err };
  }
};

import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config/backend';

// Custom implementation of Supabase client using fetch API
// This avoids dependency issues with the @supabase/supabase-js package
const supabaseClient = {
  from: (table: string) => {
    const baseUrl = `${SUPABASE_URL}/rest/v1/${table}`;
    const headers = {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };

    return {
      select: (query = '*') => {
        console.log(`Selecting from ${table} with query: ${query}`);

        // Add a method to execute the query directly without filters
        const executeQuery = async () => {
          try {
            const url = new URL(baseUrl);
            url.searchParams.append('select', query);

            const response = await fetch(url.toString(), { headers });

            if (!response.ok) {
              const error = await response.json();
              return { data: null, error };
            }

            const data = await response.json();
            return { data, error: null };
          } catch (error) {
            console.error('Error in select.executeQuery:', error);
            return { data: null, error };
          }
        };

        return {
          // Add the execute method to the returned object
          execute: executeQuery,

          eq: (column: string, value: any) => {
            return {
              order: async (orderColumn: string, { ascending = true }: { ascending: boolean }) => {
                try {
                  const url = new URL(baseUrl);
                  url.searchParams.append('select', query);
                  url.searchParams.append(column, `eq.${value.toString()}`);
                  url.searchParams.append('order', `${orderColumn}.${ascending ? 'asc' : 'desc'}`);

                  const response = await fetch(url.toString(), { headers });

                  if (!response.ok) {
                    const error = await response.json();
                    return { data: null, error };
                  }

                  const data = await response.json();
                  return { data, error: null };
                } catch (error) {
                  console.error('Error in select.eq.order:', error);
                  return { data: null, error };
                }
              },
              single: async () => {
                try {
                  const url = new URL(baseUrl);
                  url.searchParams.append('select', query);
                  url.searchParams.append(column, `eq.${value.toString()}`);
                  url.searchParams.append('limit', '1');

                  const response = await fetch(url.toString(), { headers });

                  if (!response.ok) {
                    const error = await response.json();
                    return { data: null, error };
                  }

                  const data = await response.json();
                  return { data: data[0] || null, error: data[0] ? null : { message: 'Not found' } };
                } catch (error) {
                  console.error('Error in select.eq.single:', error);
                  return { data: null, error };
                }
              },
              maybeSingle: async () => {
                try {
                  const url = new URL(baseUrl);
                  url.searchParams.append('select', query);
                  url.searchParams.append(column, `eq.${value.toString()}`);
                  url.searchParams.append('limit', '1');

                  const response = await fetch(url.toString(), { headers });

                  if (!response.ok) {
                    const error = await response.json();
                    return { data: null, error };
                  }

                  const data = await response.json();
                  return { data: data[0] || null, error: null };
                } catch (error) {
                  console.error('Error in select.eq.maybeSingle:', error);
                  return { data: null, error };
                }
              }
            };
          },
          order: async (orderColumn: string, { ascending = true }: { ascending: boolean }) => {
            try {
              const url = new URL(baseUrl);
              url.searchParams.append('select', query);
              url.searchParams.append('order', `${orderColumn}.${ascending ? 'asc' : 'desc'}`);

              const response = await fetch(url.toString(), { headers });

              if (!response.ok) {
                const error = await response.json();
                return { data: null, error };
              }

              const data = await response.json();
              return { data, error: null };
            } catch (error) {
              console.error('Error in select.order:', error);
              return { data: null, error };
            }
          },
          single: async () => {
            try {
              const url = new URL(baseUrl);
              url.searchParams.append('select', query);
              url.searchParams.append('limit', '1');

              const response = await fetch(url.toString(), { headers });

              if (!response.ok) {
                const error = await response.json();
                return { data: null, error };
              }

              const data = await response.json();
              return { data: data[0] || null, error: data[0] ? null : { message: 'Not found' } };
            } catch (error) {
              console.error('Error in select.single:', error);
              return { data: null, error };
            }
          }
        };
      },
      insert: (items: any[]) => {
        return {
          select: async () => {
            try {
              const response = await fetch(baseUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(items)
              });

              if (!response.ok) {
                const error = await response.json();
                return { data: null, error };
              }

              const data = await response.json();
              return { data, error: null };
            } catch (error) {
              console.error('Error in insert:', error);
              return { data: null, error };
            }
          }
        };
      },
      delete: () => {
        return {
          eq: async (column: string, value: any) => {
            try {
              const url = new URL(baseUrl);
              url.searchParams.append(column, `eq.${value.toString()}`);

              const response = await fetch(url.toString(), {
                method: 'DELETE',
                headers
              });

              if (!response.ok) {
                const error = await response.json();
                return { error };
              }

              return { error: null };
            } catch (error) {
              console.error('Error in delete.eq:', error);
              return { error };
            }
          }
        };
      }
    };
  }
};

console.log('Custom Supabase client initialized with URL:', SUPABASE_URL);

export default supabaseClient;

import { useState, useEffect } from 'react';
import { supabase, type Blog } from '../lib/supabase';

export const useBlogs = (limit?: number) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        let query = supabase
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false });

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) {
          throw fetchError;
        }

        setBlogs(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [limit]);

  return { blogs, loading, error, refetch: () => fetchBlogs() };
};

export const useBlog = (slug: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('blogs')
          .select('*')
          .eq('slug', slug)
          .single();

        if (fetchError) {
          throw fetchError;
        }

        setBlog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Blog not found');
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  return { blog, loading, error };
};
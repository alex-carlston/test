import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const [user, setUser] = useState(null);

  // Handle OAuth sign-in
  const signInWithGitHub = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' });
  };

  // Listen for auth state changes and upsert user
  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user);
        const user = session.user;
        const { email, user_metadata } = user;
        const [firstName, lastName] = user.user_metadata.full_name
          ? user.user_metadata.full_name.split(' ')
          : [user.user_metadata.given_name, user.user_metadata.family_name];

        await supabase.from('users').upsert([{
          email,
          firstName,
          lastName,
          userName: user.user_metadata.user_name || email.split('@')[0],
          creditUnionName: '', // You may collect this from a form later
          assetSize: null,
          emailDomain: email.split('@')[1],
          positionTitle: '',
          membershipDate: new Date().toISOString(),
          membershipEndDate: null,
          role: 'not_authorized', // Set default role
        }], { onConflict: ['email'] });
      }
      if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="container py-5">
      <h1>Login</h1>
      {user ? (
        <div>
          <p>Authenticated as {user.email}</p>
          <button className="btn btn-secondary" onClick={signOut}>
            Sign out
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={signInWithGitHub}>
          Sign in with GitHub
        </button>
      )}
    </div>
  );
}

import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  // ...existing code to get OAuth user info...
  const { email, user_metadata } = req.body; // adjust based on your OAuth provider

  const [firstName, lastName] = user_metadata.full_name
    ? user_metadata.full_name.split(' ')
    : [user_metadata.given_name, user_metadata.family_name];

  const user = {
    email,
    firstName,
    lastName,
    userName: user_metadata.user_name || email.split('@')[0],
    creditUnionName: user_metadata.creditUnionName || '',
    assetSize: user_metadata.assetSize || null,
    emailDomain: email.split('@')[1],
    positionTitle: user_metadata.positionTitle || '',
    membershipDate: new Date().toISOString(),
    membershipEndDate: null,
  };

  const { error } = await supabase
    .from('users')
    .upsert([user], { onConflict: ['email'] });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ success: true });
}

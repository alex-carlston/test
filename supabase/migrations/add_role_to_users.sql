ALTER TABLE users
ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'not_authorized'
CHECK (role IN ('not_authorized', 'free', 'member', 'admin', 'bd'));

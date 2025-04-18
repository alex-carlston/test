create table users (
  uniqueId uuid primary key default uuid_generate_v4(),
  email text unique not null,
  firstName text,
  lastName text,
  userName text,
  creditUnionName text,
  assetSize bigint,
  emailDomain text,
  positionTitle text,
  membershipDate timestamp with time zone default now(),
  membershipEndDate timestamp with time zone
);

-- Index for quick lookup by email
create index idx_users_email on users(email);

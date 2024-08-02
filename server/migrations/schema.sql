


DROP TYPE IF EXISTS "comment" cascade;

CREATE TYPE "comment" AS (
  content TEXT,
  userId UUID,
  likes INTEGER
);


CREATE TABLE IF NOT EXISTS "users" (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200),
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL
);


CREATE TABLE IF NOT EXISTS "posts" (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT,
  description TEXT,
  tags VARCHAR(100)[],
  title TEXT,
  comments comment[]
);



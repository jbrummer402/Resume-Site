DROP TABLE IF EXISTS "users";

CREATE TABLE IF NOT EXISTS "users" (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200),
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL
);

DROP TABLE IF EXISTS "posts";

CREATE TABLE IF NOT EXISTS "posts" (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT,
  description TEXT,
  tags VARCHAR(100)[],
  title TEXT
);

DROP TABLE IF EXISTS "comments";

CREATE TABLE IF NOT EXISTS "comments" (
  userId UUID NOT NULL PRIMARY KEY,
  content TEXT,
  likes INT,
  postId UUID NOT NULL
);

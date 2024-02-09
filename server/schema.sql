DROP TABLE IF EXISTS "users";

CREATE TABLE IF NOT EXISTS "users" (
  id SERIAL UNIQUE PRIMARY KEY,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200),
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL
);

DROP TABLE IF EXISTS "posts";

CREATE TABLE IF NOT EXISTS "posts" (
  id SERIAL UNIQUE PRIMARY KEY,
  content TEXT,
  tags VARCHAR(100)[],
  title TEXT 
);

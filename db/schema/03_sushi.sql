DROP TABLE IF EXISTS sushi CASCADE;
CREATE TABLE sushi (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  price Float,
  content VARCHAR(255),
  imageUrl VARCHAR(255)

);


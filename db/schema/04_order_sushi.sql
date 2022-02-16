DROP TABLE IF EXISTS order_sushi CASCADE;
CREATE TABLE order_sushi (
  id SERIAL PRIMARY KEY,
  order_id INTEGER references orders(id),
  sushi_id INTEGER references sushi(id),
  quantity INTEGER,

  UNIQUE(id)
);

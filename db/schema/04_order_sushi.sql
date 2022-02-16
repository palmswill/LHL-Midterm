DROP TABLE IF EXISTS sushi CASCADE;
CREATE TABLE sushi (
  id SERIAL,
  order_id INTEGER references orders(id),
  sushi_id INTEGER references sushi(id),
  quantity INTEGER
);


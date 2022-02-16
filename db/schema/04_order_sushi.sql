DROP TABLE IF EXISTS order_sushi CASCADE;
CREATE TABLE order_sushi (
  order_id INTEGER references orders(id),
  sushi_id INTEGER references sushi(id),
  quantity INTEGER,

  CONSTRAINT COMP_K PRIMARY KEY (order_id, sushi_id)
);

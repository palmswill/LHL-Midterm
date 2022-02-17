DROP TABLE IF EXISTS order_sushi CASCADE;
CREATE TABLE order_sushi (
  order_id INTEGER REFERENCES orders(id),
  sushi_id INTEGER REFERENCES sushi(id),
  quantity INTEGER CHECK (quantity > 0),

  CONSTRAINT COMP_K PRIMARY KEY (order_id, sushi_id)
);

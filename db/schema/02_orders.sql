DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  phone BIGINT,
  order_notes VARCHAR(255),
  submitted boolean,

);

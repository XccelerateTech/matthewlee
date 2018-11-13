===========B===========
fruitAndStock=# \dt
         List of relations
 Schema |  Name  | Type  |  Owner
--------+--------+-------+----------
 public | citrus | table | postgres
(1 row)

fruitAndStock=# SELECT * FROM citrus
fruitAndStock-# sadf
fruitAndStock-# ;
 id |    name    | color  | taste
----+------------+--------+--------
  1 | lemon      | yellow | sour
  2 | orange     | orange | juicy
  3 | grapefruit | orange | bitter
  4 | lime       | green  | sour
  5 | tangerine  | yellow | sweet
(5 rows)

fruitAndStock=# \dt
         List of relations
 Schema |  Name  | Type  |  Owner
--------+--------+-------+----------
 public | citrus | table | postgres
 public | stock  | table | day32
(2 rows)

fruitAndStock=# INSERT INTO stock (fruit_name, text_length, quantity, price) VALUES ('lemon', 5, 1, 10);
INSERT 0 1
fruitAndStock=# INSERT INTO stock (fruit_name, text_length, quantity, price) VALUES ('orange', 5, 2, 20);
INSERT 0 1
fruitAndStock=# INSERT INTO stock (fruit_name, text_length, quantity, price) VALUES ('grapefruit', 5, 3, 30);
INSERT 0 1
fruitAndStock=# INSERT INTO stock (fruit_name, text_length, quantity, price) VALUES ('lime', 5, 4, 40);
INSERT 0 1
fruitAndStock=# INSERT INTO stock (fruit_name, text_length, quantity, price) VALUES ('tangerine', 5, 5, 50);
INSERT 0 1
fruitAndStock=# SELECT * FROM stock
fruitAndStock-# ;
 id | fruit_name | text_length | quantity | price
----+------------+-------------+----------+-------
  1 | lemon      |           5 |        1 |    10
  2 | orange     |           5 |        2 |    20
  3 | grapefruit |           5 |        3 |    30
  4 | lime       |           5 |        4 |    40
  5 | tangerine  |           5 |        5 |    50
(5 rows)

fruitAndStock=# SELECT * FROM citrus INNER JOIN stock ON citrus.name = stock.fruit_name;
 id |    name    | color  | taste  | id | fruit_name | text_length | quantity | price
----+------------+--------+--------+----+------------+-------------+----------+-------
  1 | lemon      | yellow | sour   |  1 | lemon      |           5 |        1 |    10
  2 | orange     | orange | juicy  |  2 | orange     |           5 |        2 |    20
  3 | grapefruit | orange | bitter |  3 | grapefruit |           5 |        3 |    30
  4 | lime       | green  | sour   |  4 | lime       |           5 |        4 |    40
  5 | tangerine  | yellow | sweet  |  5 | tangerine  |           5 |        5 |    50
(5 rows)

============C============
matthew-leeee@-Matthew-:/mnt/c/Users/Matthew/Documents/GitHub/matthewlee/32-moreSQL$ sudo service postgresql start
[sudo] password for matthew-leeee:
 * Starting PostgreSQL 10 database server                                                                                                                                                                            [ OK ]
matthew-leeee@-Matthew-:/mnt/c/Users/Matthew/Documents/GitHub/matthewlee/32-moreSQL$ sudo su postgres
postgres@-Matthew-:/mnt/c/Users/Matthew/Documents/GitHub/matthewlee/32-moreSQL$ psql fruitAndStock
psql (10.5 (Ubuntu 10.5-0ubuntu0.18.04))
Type "help" for help.

fruitAndStock=# SELECT * FROM stock
fruitAndStock-# ;
 id | fruit_name | text_length | quantity | price
----+------------+-------------+----------+-------
  2 | orange     |           5 |        2 |    20
  3 | grapefruit |           5 |        3 |    30
  4 | lime       |           5 |        4 |    40
  5 | tangerine  |           5 |        5 |    50
  1 | lemon      |           5 |       21 |    10
(5 rows)

fruitAndStock=# BEGIN;
BEGIN
fruitAndStock=# UPDATE stock SET quantity = quantity + 40 WHERE fruit_name = 'orange';
UPDATE 1
fruitAndStock=# COMMIT;
COMMIT
fruitAndStock=# UPDATE stock SET quantity = quantity - 20 WHERE fruit_name = 'orange';
UPDATE 1
fruitAndStock=# COMMIT;
WARNING:  there is no transaction in progress
COMMIT
fruitAndStock=# SELECT * FROM stock
fruitAndStock-# ;
 id | fruit_name | text_length | quantity | price
----+------------+-------------+----------+-------
  3 | grapefruit |           5 |        3 |    30
  4 | lime       |           5 |        4 |    40
  5 | tangerine  |           5 |        5 |    50
  1 | lemon      |           5 |       21 |    10
  2 | orange     |           5 |       22 |    20
(5 rows)

fruitAndStock=# BEGIN;
BEGIN
fruitAndStock=# UPDATE stock SET quantity = quantity + 40 WHERE fruit_name = 'lime';
UPDATE 1
fruitAndStock=# UPDATE stock SET quantity = quantity - 30 WHERE fruit_name = 'lemon';
UPDATE 1
fruitAndStock=# COMMIT;
COMMIT
fruitAndStock=# SELECT * FROM stock
fruitAndStock-# ;
 id | fruit_name | text_length | quantity | price
----+------------+-------------+----------+-------
  3 | grapefruit |           5 |        3 |    30
  5 | tangerine  |           5 |        5 |    50
  2 | orange     |           5 |       22 |    20
  4 | lime       |           5 |       44 |    40
  1 | lemon      |           5 |       11 |    10
(5 rows)

fruitAndStock=# BEGIN;
BEGIN
fruitAndStock=# UPDATE stock SET quantity = quantity - 20 WHERE fruit_name = 'lime';
UPDATE 1
fruitAndStock=# UPDATE stock SET quantity = quantity + 40 WHERE fruit_name = 'grapefruit';
UPDATE 1
fruitAndStock=# COMMIT;
COMMIT
fruitAndStock=# BEGIN;
BEGIN
fruitAndStock=# UPDATE stock SET quantity = quantity - 20 WHERE fruit_name = 'grapefruit';
UPDATE 1
fruitAndStock=# COMMIT;
COMMIT
fruitAndStock=# SELECT * FROM stock;
 id | fruit_name | text_length | quantity | price
----+------------+-------------+----------+-------
  5 | tangerine  |           5 |        5 |    50
  2 | orange     |           5 |       22 |    20
  1 | lemon      |           5 |       11 |    10
  4 | lime       |           5 |       24 |    40
  3 | grapefruit |           5 |       23 |    30
(5 rows)

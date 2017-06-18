# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## spots
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
host_id        | integer    | not null, foreign key (references users) indexed
type | string | not null
title | string | not null
description | text | not null
price | integer | not null
image_url | string | not null
latitude | decimal | not null
longitude | decimal | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
spot_id      | integer   | not null, foreign key (references spots), indexed
start_date | date | not null
end_date | date | not null
status | string | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed, unique [spot_id]
spot_id | integer   | not null, foreign key (references spots),
body        | text      | not null
rating | integer | not null

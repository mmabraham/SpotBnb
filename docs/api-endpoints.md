# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
	- Sign Up

### Session

- `POST /api/session`
	- Login
- `DELETE /api/session`
	- Logout

### Spots

- `GET /api/spots`
  - Spots index/search
  - accepts `lat_lng_bounds` query param to filter by location
  - accepts `date_range` query params to filter by availability
  - accepts `num_guests` query param to filter by capacity
  or
  - with `host_id` param for host listings
- `POST /api/spots`
	- Create listing
- `GET /api/spots/:id`
	- Will include the spot's booking dates and possibly reviews count and average
- `PATCH /api/spots/:id`
- `DELETE /api/spots/:id`

### Bookings

- `GET /api/bookings`
	- accepts `user_id` or `spot_id` query param
	- includes necessary spot and host info
- `POST /api/bookings`
- `DELETE /api/bookings/:id`

### Reviews

- `GET /api/spots/:spot_id/reviews`
- `POST /api/spots/:spot_id/reviews/`
- `DELETE /api/spots/:spot_id/reviews/:review_id`

users = User.all
all_spots = Spot.all

spots = all_spots[-20..-1]
60.times do
  Review.create(
    user_id: users.sample.id,
    spot_id: spots.sample.id,
    body: Faker::Lorem.paragraph,
    rating: rand(1..2)
  )
end

spots = all_spots[-40..-20]
300.times do
  Review.create(
    user_id: users.sample.id,
    spot_id: spots.sample.id,
    body: Faker::Lorem.paragraph,
    rating: rand(1..4)
  )
end

spots = all_spots[40..-40]
600.times do
  Review.create(
    user_id: users.sample.id,
    spot_id: spots.sample.id,
    body: Faker::Lorem.paragraph,
    rating: rand(3..5)
  )
end

spots = all_spots[0..40]
200.times do
  Review.create(
    user_id: users.sample.id,
    spot_id: spots.sample.id,
    body: Faker::Lorem.paragraph,
    rating: rand(4..5)
  )
end


1000.times do
  end_date = Faker::Time.forward(200)
  Booking.create(
    user_id: users.sample.id,
    spot_id: spots.sample.id,
    start_date: Faker::Time.between(Date.today, end_date),
    end_date: end_date
  )
end

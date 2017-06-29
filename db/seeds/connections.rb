users = User.all
spots = Spot.all

1000.times do
  Review.create(
    user_id: users.sample.id,
    spot_id: spots.sample.id,
    body: Faker::Lorem.paragraph,
    rating: rand(1..5)
  )

end

400.times do
  end_date = Faker::Time.forward(200)
  Booking.create(
    user_id: users.sample.id,
    spot_id: spots.sample.id,
    start_date: Faker::Time.between(Date.today, end_date),
    end_date: end_date
  )
end

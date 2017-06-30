users = User.all

spots = []
150.times do
  spots << Spot.create(
    spot_type: (['Entire place', 'Private room', 'Shared Room'].sample),
    title: Faker::Book.title,
    description: Faker::Lorem.paragraph,
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude,
    capacity: rand(1..15),
    price: rand(1..999),
    host_id: users.sample.id
  )
end

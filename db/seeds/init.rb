require_relative 'addresses'
require_relative 'descriptions'
require_relative 'titles'


# User.destroy_all
# Spot.destroy_all
# Review.destroy_all
# Booking.destroy_all

# guest = User.create(
#   username: 'Guest',
#   password: 'password',
#   avatar: File.open('app/assets/images/default-avatar.png')
# )
#
# users = []
# 20.times do
#   users << User.create(
#     username: Faker::Internet.user_name,
#     password: Faker::Internet.password
#   )
# end

# 30.times do
#   Spot.create(
#     spot_type: (['Entire place', 'Private room', 'Shared Room'].sample),
#     title: Faker::Book.title,
#     description: Faker::Lorem.paragraph,
#     lat: Faker::Address.latitude,
#     lng: Faker::Address.longitude,
#     capacity: rand(1..15),
#     price: rand(1..999),
#     host_id: User.first.id,
#     img: Faker::LoremPixel.image
#   )
# end

users = User.all.to_a
debugger
all_spots = []
140.times do |i|
  all_spots << Spot.create(
    spot_type: (['Entire place', 'Private room', 'Shared Room'].sample),
    capacity: rand(1..15),
    price: rand(1..450),
    host_id: users.sample.id,
    title: titles[i],
    description: descriptions.sample,
    location: addresses[i][0],
    lat: addresses[i][1],
    lng: addresses[i][2]
  )
end

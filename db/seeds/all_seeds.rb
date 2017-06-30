require_relative 'addresses'
require_relative 'descriptions'
require_relative 'titles'

User.destroy_all
Spot.destroy_all
Review.destroy_all
Booking.destroy_all

guest = User.create(
  username: 'Guest',
  password: 'password',
  avatar: File.open('app/assets/images/default-avatar.png')
)

images = []
Dir.foreach('seed-images/avatars') do |fname|
  next if fname[0] == '.'
  images << File.open("seed-images/avatars/#{fname}")
end

users = []
20.times do |idx|
  p images[idx].class
  users << User.create(
    username: Faker::Internet.user_name,
    password: Faker::Internet.password,
    avatar: images[idx]
  )
end





users = User.all.to_a
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





spots = Spot.all
images = []
idx = 0
Dir.foreach('seed-images/houses') do |fname|
  break unless spots[idx]
  next if fname[0] == '.'
  spots[idx].img = File.new("seed-images/houses/#{fname}")
  p spots[idx].img.url
  spots[idx].save!
  idx += 1
end






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

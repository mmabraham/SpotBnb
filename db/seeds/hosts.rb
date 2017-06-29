spots = Spot.all
users = User.all

spots.each do |spot|
  spot.host_id = users.sample.id
  spot.save
end

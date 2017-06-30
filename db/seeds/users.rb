# User.destroy_all

guest = User.create(
  username: 'Guest',
  password: 'password',
  avatar: File.open('app/assets/images/default-avatar.png')
)

images = []
Dir.foreach('seed-images/avatars') do |fname|
  next if fname == '.' || fname == '..'
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

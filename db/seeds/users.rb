guest = User.create(
  username: 'Guest',
  password: 'password',
  avatar: File.open('app/assets/images/default-avatar.png')
)

users = []
20.times do
  users << User.create(
    username: Faker::Internet.user_name,
    password: Faker::Internet.password
  )
end

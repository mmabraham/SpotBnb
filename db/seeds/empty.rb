User.destroy_all
Spot.destroy_all
Review.destroy_all
Booking.destroy_all

guest = User.create(
  username: 'Guest',
  password: 'password',
  avatar: File.open('app/assets/images/default-avatar.png')
)

json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :spot_id, :user_id
    end
  end
end
json.spots do
  @bookings.each do |booking|
    json.set! booking.spot.id do
      json.extract booking.spot, :id, :host_id, :spot_type, :title,
        :price, :capacity, :address, :city
      json.img asset_path(booking.spot.img)
      json.rating booking.spot.average_rating
      json.num_reviews booking.spot.num_reviews
    end
  end
end
json.hosts do
  @bookings.each do |booking|
    json.extract! booking.host, :id, :username
    json.img_url booking.host.avatar.url
  end
end

json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :spot_id, :user_id, :start_date, :end_date
    end
  end
end
# QUESTION is this possible somehow?
# spots = @bookings.spot.with_ratings(spots) # for efficiency
json.spots do
  @bookings.each do |booking|
    json.set! booking.spot.id do
      json.extract! booking.spot, :id, :host_id, :spot_type, :title,
        :price, :capacity, :address, :city
      json.img asset_path(booking.spot.img)
      json.rating booking.spot.reviews.average(:rating)
      json.num_reviews booking.spot.reviews.count
    end
  end
end
json.hosts do
  @bookings.each do |booking|
    json.set! booking.spot.host_id do
      json.extract! booking.host, :id, :username
      json.img_url asset_path(booking.host.avatar)
    end
  end
end

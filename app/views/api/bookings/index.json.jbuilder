json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :spot_id, :user_id, :start_date, :end_date
    end
  end
end
json.spots do
  @bookings.each do |booking|
    json.set! booking.spot_id do
      json.extract! booking.spot, :id, :host_id, :spot_type, :title,
        :price, :capacity, :address, :city
      json.img asset_path(booking.spot.img)
      json.rating @average_ratings[booking.spot_id]
      json.num_reviews booking.spot.reviews.length
      json.has_reviewed booking.spot.reviews.any? { |r| r.user_id == current_user.id}
    end
  end
end
json.hosts do
  @bookings.each do |booking|
      json.set! booking.host.id do
      json.extract! booking.host, :id, :username
      json.img_url asset_path(booking.host.avatar)
    end
  end
end

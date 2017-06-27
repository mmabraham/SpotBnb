json.spot do
  json.extract! @spot, :id, :host_id, :spot_type, :title, :description,
    :price, :lat, :lng, :capacity, :address, :city
  json.img asset_path(@spot.img)
  json.rating @spot.reviews.average(:rating)
  json.num_reviews @spot.reviews.count
end

json.bookings do
  json.array! @spot.bookings do |booking|
    json.extract! booking, :start_date, :end_date
  end
end

json.host do
  json.extract! @spot.host, :id, :username
  json.img_url @spot.host.avatar.url
end

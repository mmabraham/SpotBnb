@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :host_id, :spot_type, :title,
      :description, :price, :lat, :lng, :capacity, :city, :address
    json.img asset_path(spot.img)
    json.rating spot.average_rating.to_s
    json.num_reviews spot.num_reviews.to_i
  end
end

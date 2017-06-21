@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :host_id, :spot_type, :title,
      :description, :price, :lat, :lng, :capacity
    json.img asset_path(spot.img)
  end
end

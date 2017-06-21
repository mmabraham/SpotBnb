@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :host_id, :spot_type, :title,
      :description, :price, :lat, :lng, :capacity
  end
end

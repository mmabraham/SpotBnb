json.spot do
  json.extract! @spot, :id, :host_id, :spot_type, :title, :description,
    :price, :lat, :lng, :capacity
  json.img asset_path(@spot.img)
end
json.host do
  json.extract! @spot.host, :id, :username
end

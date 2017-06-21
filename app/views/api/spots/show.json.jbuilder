json.spot do
  json.extract! @spot, :id, :host_id, :spot_type, :title, :description, :price, :lat, :lng
end
json.host do
  json.extract! @spot.host, :id, :username
end

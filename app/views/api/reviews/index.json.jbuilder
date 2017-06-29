json.array! @reviews do |review|
  json.extract! review, :id, :body, :spot_id, :user_id
  json.user_img asset_path(review.user.avatar)
  json.username review.user.username
end

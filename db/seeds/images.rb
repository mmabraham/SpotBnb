spots = Spot.all.sort_by { |s| s.average_of_ratings }

images = []
idx = 0
Dir.foreach('seed-images/houses') do |fname|
  next if fname == '.' || fname == '..'
  spots[idx].img = File.open("seed-images/avatars/#{fname}")
  spots[idx].save
end

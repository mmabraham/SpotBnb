spots = Spot.all

images = []
idx = 0
Dir.foreach('seed-images/houses') do |fname|
  next if fname == '.' || fname == '..'
  spots[idx].img = File.new("seed-images/houses/#{fname}")
  p spots[idx].img.url
  spots[idx].save
end

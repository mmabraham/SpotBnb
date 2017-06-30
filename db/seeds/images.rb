spots = Spot.all.sort_by { |s| s.average_of_ratings }

images = []
idx = 0
Dir.foreach('seed-images/houses') do |fname|
  next if fname == '.' || fname == '..'
  idx += 1 until spots[idx].img_file_name.nil?
  spots[idx].img = File.open("seed-images/houses/#{fname}")
  spots[idx].save
end

# json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :spot_id, :user_id
    end
  end
# end

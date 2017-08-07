class Api::BookingsController < ApplicationController
  before_action :require_logged_in!

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    if @booking.save
      render json: @booking.id, status: 200
    else
      render json: @booking.errors, status: 422
    end
  end

  def index
    @bookings = current_user.bookings.includes(spot: [:host, :reviews])
    @average_ratings = current_user.booked_spots.average_ratings
    render :index
  end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking.destroy
      render json: {}, status: 200
    else
      render json: 'no booking found', status: 404
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:spot_id, :start_date, :end_date)
  end
end

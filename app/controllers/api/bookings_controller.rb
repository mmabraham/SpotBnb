class Api::BookingsController < ApplicationController
  before_action :ensure_logged_in

  def create

  end

  def index
    @booking = Booking.all
    render :index
  end

  def destroy

  end

  private

  def booking_params
    params.require(:booking).permit(:spot_id, :start_date, :end_date)
  end
end

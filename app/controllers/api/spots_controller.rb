class Api::SpotsController < ApplicationController
  before_action :require_logged_in!, except: [:show, :index]

  def show
    @spot = Spot.find(params[:id])
    if @spot
      render :show
    else
      render json: '', status: 404
    end
  end

  def index
    @spots = Spot.all
    @spots = Spot.in_bounds(@spots, params[:bounds])

    render :index
  end

  def create
    @spot = Spot.new(spot_params)
    @spot.host = current_user
    if @spot.save
      render :show
    else
      @errors = @spot.errors
      render :errors, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private

  def spot_params
    params
      .require(:spot)
      .permit(:type, :title, :description, :capacity, :price, :lat, :lng)
  end
end

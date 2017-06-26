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
    if params[:host_id]
      @spots = current_user.spots
    else
      # debugger
      @spots = Spot.in_bounds(params[:bounds])
      # @spots = Spot.with_ratings(@spots)
      # more filters here ...
    end
    render :index
  end

  def create
    @spot = Spot.new(spot_params)
    @spot.host_id = current_user.id
    if @spot.save
      render json: @spot.id
    else
      @errors = @spot.errors
      render json: @errors, status: 422
    end
  end

  def update
    @spot = Spot.find(params[:id])
    if @spot.nil?
      render json: {spot: 'Not found'}, status: 404
    elsif @spot.host_id != current_user.id
      render json: {spot: 'You can only update your own spots'},
        status: 401
    elsif @spot.update(spot_params)
      render :show
    else
      render json: @spot.errors, status: 422
    end
  end

  def destroy
    @spot = Spot.find(params[:id])
    if @spot && @spot.host_id == current_user.id
      render json: {}
    else
      render json: {spot: 'not found'}, status: 404
    end
  end

  private

  def spot_params
    params
      .require(:spot).permit(
        :type,
        :title,
        :description,
        :capacity,
        :price,
        :lat,
        :lng,
        :spot_type,
        :location
      )
  end
end

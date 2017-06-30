class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(spot_id: params[:spot_id])
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render json: @review
    else
      render json: @reviews.errors
    end
  end

  def review_params
    params.require(:review).permit(:spot_id, :body, :rating)
  end
end

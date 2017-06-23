class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(spot_id: params[:spot_id])
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = currentUser.id
    if @review.save
      render json: @review
    else
      render json: @reviews.errors
    end
  end
end

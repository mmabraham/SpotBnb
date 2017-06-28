class Api::SessionsController < ApplicationController

  before_action :require_logged_in!, only: [:destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render :show
    else
      render json: {
        password: "Invalid Credentials",
        username: "Invalid Credentials"
        }, status: 422
    end
  end

  def destroy
    logout!
    render json: {}, status: 200
  end
end

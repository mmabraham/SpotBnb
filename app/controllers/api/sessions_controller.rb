class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render :show
    else
      render json: ["Invalid Credentials"], status: 422
    end
  end

  def destroy
    render json: {}, status: 404 unless logged_in?
    logout!
    render json: {}, status: 200
  end
end

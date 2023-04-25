class UsersController < ApplicationController
  rescue_from ActiveRecord::InvalidRecord, with: :handle_invalid_data

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session{:user_id})
    
    if user
      render json: user, status: :created
    else
      render json: {error: "Not Authorized" }, status: :unauthorized
    end
  end


  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :name, :email, :level_of_skill)
  end

  def handle_invalid_data(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end

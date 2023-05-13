class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_data

  before_action :authorize
  skip_before_action :authorize, only:[:create]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :created
    else
      render json: {errors: ["Not Authorized"]}, status: :unauthorized
    end
  end


  private

  def authorize
    render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

  def user_params
    params.permit(:username, :password, :password_confirmation, :name, :email, :preferred_craft, :level_of_skill)
  end

  def handle_invalid_data(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end

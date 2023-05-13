class SessionsController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: [:create]

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {errors: ["Invalid Username or Password"]}, status: :unauthorized
    end
  end

  def destroy
    if session[:user_id]
      session.delete :user_id
      render json: {}
    else
      render json: {error: "You must first be logged in"}, status: :unauthorized
    end
  end

  private

  def authorize
    render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end
end

class WorkshopsController < ApplicationController

  before_action :authorize

  def index
    workshops = Workshop.all
    render json: workshops
  end

  private
  
  def authorize
    render json: {error:  "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end
end

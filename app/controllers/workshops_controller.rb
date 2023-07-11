class WorkshopsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_data

  before_action :authorize
  skip_before_action :authorize, only: [:index]

  def index
    workshops = Workshop.all
    render json: workshops
  end

  def create
    new_workshop = Workshop.create!(workshop_params)
    render json: new_workshop, status: :created
  end

  # returning workshops that have AT LEAST the given number of enrolles as passed in the request to /big/:number_of_enrollees
 
  def big
    #Some logic to check the number of enrollees
    workshops = Workshop.all.select { |workshop| workshop.users.length >= params[:number_of_enrollees].to_i }
    render json: workshops

  end


  private

  def authorize
    render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

  def workshop_params
    params.permit(:workshop_name, :instructor_name, :craft_type, :skill_level_required, :workshop_description, :yarn_and_tool_requirements)
  end

  def handle_invalid_data(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  
end

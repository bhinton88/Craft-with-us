class WorkshopsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_data

  def index
    workshops = Workshop.all
    render json: workshops
  end

  def create
    new_workshop = Workshop.create!(workshop_params)
    render json: new_workshop, status: :created
  end

  private

  def workshop_params
    params.permit(:workshop_name, :instructor_name, :craft_type, :skill_level_required, :workshop_description, :yarn_and_tool_requirements)
  end

  def handle_invalid_data(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  
end

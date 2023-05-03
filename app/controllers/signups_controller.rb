class SignupsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_data

  def create
    workshop = Workshop.find_by(id: params[:workshop_id])
    is_user_enrolled = workshop.users.find_by(id: params[:user_id])
    # need some logic to check to see if a signup already exists.. if it does, then we need to return an error that 
    # user is already enrolled in this class
    if is_user_enrolled
      render json: {errors: ["You are already enrolled in this Workshop"]}, status: :unauthorized
    else
      signup = Signup.create!(signup_params)
      render json: signup, status: :created
    end
  end

  private

  def signup_params
    params.permit(:user_id, :workshop_id, :referral_type, :additional_notes)
  end

  def handle_invalid_data(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end


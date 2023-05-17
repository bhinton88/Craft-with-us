class SignupsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_data
  rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found

  before_action :authorize

  def create
    workshop = Workshop.find_by(id: params[:workshop_id])
    is_user_enrolled = workshop.users.find_by(id: params[:user_id])
    # need some logic to check to see if a signup already exists.. if it does, then we need to return an error that 
    # user is already enrolled in this class
    if is_user_enrolled
      render json: {errors: ["You are already enrolled in this Workshop"]}, status: :unauthorized
    else
      user = User.find_by(id: session[:user_id])
      signup = user.signups.create!(signup_params)
      render json: signup, status: :created
    end
  end

  def update
    user = User.find_by(id: session[:user_id])
    signup = user.signups.find_by(id: params[:id])
    signup.update(signup_params)
    render json: signup, status: :created
  end

  def destroy
    # currently have it set up that the signups listed are only ones for the current user and only those 
    # signups can be deleted
    signup = Signup.find_by(id: params[:id])
    signup.destroy
    head :no_content

  end

  private

  def authorize
    render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

  def signup_params
    params.permit(:workshop_id, :referral_type, :additional_notes)
  end

  def handle_invalid_data(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def handle_record_not_found
    render json: {errors: ["Signup not found"]}, status: :not_found
  end

end


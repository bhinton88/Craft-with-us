class Signup < ApplicationRecord 
  belongs_to :user
  belongs_to :workshop

  validates :user_id, :workshop_id, :referral_type, :additional_notes, presence: true
end

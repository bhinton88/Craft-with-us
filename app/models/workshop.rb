class Workshop < ApplicationRecord
  has_many :signups
  has_many :users, through: :signups

  validates :workshop_name, :instructor_name, :craft_type, :skill_level_required, :workshop_description, :yarn_and_tool_requirements, presence: true
end

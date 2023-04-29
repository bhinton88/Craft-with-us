class Workshop < ApplicationRecord
  has_many :signups
  has_many :users, through: :signups

  validates :workshop_name, :craft_type, :skill_level_required, :instructor_name, :yarn_requirements, :needed_tools, presence: true
end

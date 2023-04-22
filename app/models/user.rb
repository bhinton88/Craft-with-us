class User < ApplicationRecord
  has_secure_password
  validates :username, :name, :email, :preferred_craft, :level_of_skill, presence: true
  validates :username, uniqueness: true, on: :create
  validates :email, uniqueness: true

  # how do I validate the email to make sure it includes an @
end

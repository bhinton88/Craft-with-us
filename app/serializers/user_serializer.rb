class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :preferred_craft, :level_of_skill
end
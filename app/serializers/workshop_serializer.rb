class WorkshopSerializer < ActiveModel::Serializer
  attributes :id, :workshop_name, :instructor_name, :craft_type, :skill_level_required, :workshop_description, :yarn_and_tool_requirements

  has_many :users, serializer: WorkshopUserSerializer
end

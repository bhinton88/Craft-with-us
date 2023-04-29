class WorkshopSerializer < ActiveModel::Serializer
  attributes :id, :workshop_name, :craft_type, :necessary_skills, :skill_level_required, :instructor_name, :yarn_requirements, :needed_tools
end

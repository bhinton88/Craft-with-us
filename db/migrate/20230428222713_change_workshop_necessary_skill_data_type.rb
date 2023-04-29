class ChangeWorkshopNecessarySkillDataType < ActiveRecord::Migration[6.1]
  def change
    change_column :workshops, :necessary_skills, :text
  end
end

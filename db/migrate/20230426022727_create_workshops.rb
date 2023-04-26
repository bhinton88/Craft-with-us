class CreateWorkshops < ActiveRecord::Migration[6.1]
  def change
    create_table :workshops do |t|
      t.string :workshop_name
      t.string :craft_type
      t.string :necessary_skills
      t.string :skill_level_required
      t.string :instructor_name
      t.text :yarn_requirements
      t.text :needed_tools
      t.timestamps
    end
  end
end

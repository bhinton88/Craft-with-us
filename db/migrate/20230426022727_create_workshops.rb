class CreateWorkshops < ActiveRecord::Migration[6.1]
  def change
    create_table :workshops do |t|
      t.string :workshop_name
      t.string :instructor_name
      t.string :craft_type
      t.string :skill_level_required
      t.text :workshop_description
      t.text :yarn_and_tool_requirements
      t.timestamps
    end
  end
end

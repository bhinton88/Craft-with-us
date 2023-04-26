class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :email
      t.string :preferred_craft
      t.string :level_of_skill
      t.timestamps
    end
  end
end

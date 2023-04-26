class CreateSignups < ActiveRecord::Migration[6.1]
  def change
    create_table :signups do |t|
      t.integer :user_id
      t.integer :workshop_id
      t.string :referral_type
      t.text :additional_notes
      t.timestamps
    end
  end
end

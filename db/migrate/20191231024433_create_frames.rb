class CreateFrames < ActiveRecord::Migration[6.0]
  def change
    create_table :frames do |t|
      t.string email, null: false
      t.string subject, null: false

      t.timestamps
    end
  end
end

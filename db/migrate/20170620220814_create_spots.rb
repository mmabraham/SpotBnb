class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.string :type, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps null: false
    end
  end
end

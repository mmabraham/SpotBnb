class AddCapacityToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :capacity, :integer,  null: false
  end
end

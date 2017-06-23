class AddLocationToSpot < ActiveRecord::Migration
  def change
    add_column :spots, :location, :string
  end
end

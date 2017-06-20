class AddIndexToSpotsHostId < ActiveRecord::Migration
  def change
    add_index :spots, :host_id
  end
end

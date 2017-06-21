class ChangeTypeToSpotType < ActiveRecord::Migration
  def change
    rename_column :spots, :type, :spot_type
  end
end

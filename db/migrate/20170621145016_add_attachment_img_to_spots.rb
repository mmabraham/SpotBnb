class AddAttachmentImgToSpots < ActiveRecord::Migration
  def self.up
    change_table :spots do |t|
      t.attachment :img
    end
  end

  def self.down
    remove_attachment :spots, :img
  end
end

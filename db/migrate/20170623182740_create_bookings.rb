class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :spot_id, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.timestamps null: false
    end
  end
end

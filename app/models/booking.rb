# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  spot_id    :integer          not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ActiveRecord::Base
  validates :user, :spot, :start_date, :end_date, presence: true

  belongs_to :visitor,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: User

  belongs_to :spot, dependent: :destroy

  belongs_to :user

  has_one :host,
    through: :spot,
    source: :host,
    class_name: User
end

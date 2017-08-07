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
  scope :spots, -> { select(:spots).joins(:spot) }

  belongs_to :spot
  belongs_to :user
  has_one :host,
    through: :spot,
    source: :host
end

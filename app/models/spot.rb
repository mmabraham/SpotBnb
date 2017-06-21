# == Schema Information
#
# Table name: spots
#
#  id          :integer          not null, primary key
#  host_id     :integer          not null
#  spot_type   :string           not null
#  title       :string           not null
#  description :text             not null
#  price       :integer          not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  capacity    :integer          not null
#

class Spot < ActiveRecord::Base
  validates :host, :spot_type, :title, :description, :price, :lat, :lng,
    presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: User
end
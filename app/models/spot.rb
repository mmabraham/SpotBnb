# == Schema Information
#
# Table name: spots
#
#  id               :integer          not null, primary key
#  host_id          :integer          not null
#  spot_type        :string           not null
#  title            :string           not null
#  description      :text             not null
#  price            :integer          not null
#  lat              :float            not null
#  lng              :float            not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  capacity         :integer          not null
#  img_file_name    :string
#  img_content_type :string
#  img_file_size    :integer
#  img_updated_at   :datetime
#

class Spot < ActiveRecord::Base
  validates :host, :spot_type, :title, :description, :price, :lat, :lng,
    presence: true

  has_attached_file :img, default_url: "default_img.jpg"
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: User

  def self.in_bounds(spots, bounds)
    return spots unless bounds

    spots.where('lat BETWEEN ? AND ? AND lng BETWEEN ? AND ?',
      bounds[:southWest][:lat],
      bounds[:northEast][:lat],
      bounds[:southWest][:lng],
      bounds[:northEast][:lng]
    ).limit(20)
  end
end

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

  has_many :reviews

  def self.in_bounds(spots, bounds)
    return spots unless bounds
    # return Spot.both_sides(spots, bounds) if Spot.split?(bounds)
    #
    # if bounds[:southWest][:lng] < bounds[:northEast][:lng]
    #   p '-----------==================================-----------------'
    #   bounds[:northEast][:lng], bounds[:southWest][:lng] =  bounds[:southWest][:lng], bounds[:northEast][:lng]
    # end

    spots.where('lat BETWEEN ? AND ? AND lng BETWEEN ? AND ?',
      bounds[:southWest][:lat],
      bounds[:northEast][:lat],
      bounds[:southWest][:lng],
      bounds[:northEast][:lng]
    ).limit(30)
  end

#            |ne -37
#            |   ne -159
#  sw 174    |
#     sw -58 |

  def self.split?(bounds)
    bounds[:northEast][:lng].to_s.to_i <= 0 && bounds[:southWest][:lng].to_s.to_i < 0
  end

  def self.both_sides(spots, bounds)
    west_bounds = {
      southWest: bounds[:southWest],
      northEast: { lat: bounds[:northEast][:lat], lng: '179.999' }
    }
    east_bounds = {
      southWest: { lat: bounds[:southWest][:lat], lng: '-179.999' },
      northEast: bounds[:northEast]
    }

    Spot.in_bounds(spots, west_bounds).merge(Spot.in_bounds(spots, east_bounds))
  end



end

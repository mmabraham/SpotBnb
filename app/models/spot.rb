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
#  location         :string
#

class Spot < ActiveRecord::Base
  # attr_accessor :average_rating, :num_reviews

  validates :host, :spot_type, :title, :description, :price, :lat, :lng,
    presence: true

  has_attached_file :img, default_url: "default_img.jpg"
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: User

  has_many :reviews
  has_many :bookings

  def self.filter(filters)
    spots = Spot.all
    return Spot.all unless filters
    spots = Spot.by_bounds(filters[:bounds], spots) if filters[:bounds]
    spots = Spot.by_capacity(filters[:capacity], spots) if filters[:capacity]
    spots = Spot.by_dates(filters[:dates], spots) if filters[:dates]
    spots
  end

  def self.by_capacity(capacity, spots = Spot.all)
    spots.where('capacity >= ?', capacity)
  end

  def self.by_dates(dates, spots = Spot.all)
    start = Time.parse(dates[:start_date])
    finish = Time.parse(dates[:end_date])

    spots.where.not(
      id: Booking.select('spot_id').where('start_date <= ? AND end_date >= ?', finish, start)
    )
  end

  def self.by_bounds(bounds, spots = nil)
    spots ||= Spot.all
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

    spots.by_bounds(spots, west_bounds).merge(spots.by_bounds(spots, east_bounds))
  end

  def self.with_ratings(spots = nil)
    # spots ||= Spot.all
    return spots if spots.empty?
    ids = spots.pluck(:id).join(', ')
    Spot.find_by_sql(<<-SQL )
      SELECT spots.*, COUNT(reviews.rating) AS num_reviews, AVG(reviews.rating) AS average_rating FROM
        spots
      JOIN
        reviews ON spots.id = reviews.spot_id
      WHERE
        spots.id IN (#{ids})
      GROUP BY
        spots.id
      ORDER BY
       average_rating DESC
    SQL
  end

  # def num_reviews
  #   self.reviews.count
  # end
  #
  # def average_rating
  #   self.reviews.average(:rating)
  # end

  def city
    return ' ' unless self.location
    self.location.split(',')[-3..-1]
  end

  def address
    return ' ' unless self.location
    self.location.split(',')[0...-3]
  end
end

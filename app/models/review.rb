class Review < ActiveRecord::Base

  validates :user, :spot, :rating, presence: true

  belongs_to :user
  belongs_to :spot
end

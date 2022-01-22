class Product < ApplicationRecord
  belongs_to :company
  has_many :reviews

  def avg_star_rating
    reviews.average(:star_rating).round(2).to_f
  end
end

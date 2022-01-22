class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :star_rating, :user_id, :product_id
end

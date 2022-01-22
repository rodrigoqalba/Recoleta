class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :colors, :size, :image_url, :dimensions, :weight, :shipping_method, :company_id

  has_many :reviews
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :admin, :image_url

  has_many :reviews
end

class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :city, :verified, :email, :num_of_products, :transactions

  has_many :products
end

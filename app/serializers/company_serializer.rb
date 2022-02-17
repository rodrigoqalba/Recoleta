class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :city, :verified, :email, :num_of_products, :transactions, :created_at

  has_many :products
end

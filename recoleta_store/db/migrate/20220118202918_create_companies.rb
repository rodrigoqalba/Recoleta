class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :country
      t.string :city
      t.boolean :verified
      t.string :email
      t.integer :num_of_products
      t.integer :transactions

      t.timestamps
    end
  end
end

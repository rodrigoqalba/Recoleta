class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :colors
      t.string :size
      t.string :image_url
      t.string :dimensions
      t.string :weight
      t.string :shipping_method
      t.belongs_to :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end

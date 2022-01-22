class Api::ProductsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        # byebug
        products = Product.all
        render json: products, status: :ok
    end

    def show
        product = find_product
        render json: product, status: :ok
    end
    
    private

    def find_product
        Product.find_by(id: params[:id])
    end

    def record_not_found
        render json: { error: "Course not found" }, status: :not_found
    end
end
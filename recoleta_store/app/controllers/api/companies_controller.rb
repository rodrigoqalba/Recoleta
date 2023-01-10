class Api::CompaniesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        render json: Company.all, status: :ok
    end
    
    
    def show
        company = find_company
        render json: company, status: :ok
    end
    
    private 

    def find_company
        Company.find_by(id: params[:id])
    end

    def record_not_found
        render json: { error: "Course not found" }, status: :not_found
    end
end
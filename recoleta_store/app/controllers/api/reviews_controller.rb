class Api::ReviewsController < ApplicationController
	protect_from_forgery with: :null_session
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

	def index
		reviews = Review.all
		render json: reviews
	end

	def show
		review = find_review
		render json: review
	end

	def create
		review = Review.create(review_params)
		if review.valid?
			render json: review, status: :created
		else
			render json: { error: review.errors }, status: :unprocessable_entity
		end
	end

	def update
		review = find_review
		review.update(review_params)
		render json: review, status: :ok
	end

	def destroy
		review = find_review
		if review
			review.destroy
			head :no_content
		else
			render json: { error: errors.message }, status: :not_found
		end
	end

	private

	def review_params
		params.permit(:id, :comment, :star_rating, :user_id, :product_id)
	end

	def find_review
		Review.find_by(id: params[:id])
	end

	def render_not_found_response
		render json: { error: 'Review not found' }, status: :unprocessable_entity
	end
end
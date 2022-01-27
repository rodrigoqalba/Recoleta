class Api::SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
      # byebug
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        # byebug
        render json: user
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
    
end
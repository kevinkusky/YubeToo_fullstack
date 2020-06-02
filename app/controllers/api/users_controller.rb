class Api::UsersController < ApplicationController
    before_action :ensure_logged_in, only: [:show]

    def new
    end

    def create

    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end

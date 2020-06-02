class Api::UsersController < ApplicationController

    def new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            render `api/users`
        else
            render :new
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end

class Api::UsersController < ApplicationController

    # def new
    #     render :new
    # end

    def create
        @user = User.new(user_params)

        if @user.save
            # properly saving but wrong render
            # render `api/users/#{@user.id}`
            log_in(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end

end

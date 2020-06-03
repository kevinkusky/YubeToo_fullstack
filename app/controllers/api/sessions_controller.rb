class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email], params[:user][:password]
        )

        if @user
            login(@user)
            render `api/users/#{@user.id}`
        else
        end
    end

    def destroy
        @user = current_user

        if @user
            logout
            render 'api/session/new'
        end
    end
end
require 'byebug'
class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        @like = Like.create(like_params)
        if @like.save!
            render json: {message: 'Upload Successful'}
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @like = Like.find_by(id: like_params[:id])
        if @like.update_attributes(like_params)
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end


    def destroy
        @like = Like.find(params[:id])
        @like.destroy
    end

    private

    def like_params
        params.require(:like).permit(:id, :liker_id, :likeable_type, :likeable_id, :dislike)
    end
end

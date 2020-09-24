require 'byebug'
class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def index
        @likes = Like.all
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render json: {message: 'Like Created'}
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def show
        @like = Like.find(params[:id])
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
        if @like.destroy
            if @like.likeable_type == 'Video'
                @video = @like.likeable
                render '/api/videos/show'
            end
        end

    end

    private

    def like_params
        params.require(:like).permit(:liker_id, :likeable_type, :likeable_id, :dislike)
    end
end

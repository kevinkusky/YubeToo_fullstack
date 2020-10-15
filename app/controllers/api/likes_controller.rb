require 'byebug'
class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def index
        @likes = []
        if params[:comment_id]
            comment = Comment.find(params[:comment_id])
            @likes = comment.likes
        elsif params[:video_id]
            video = Video.find(params[:video_id])
            @likes = video.likes
        else
            @likes = Like.all
        end
        render :index
    end

    def create
        @like = Like.new(like_params)
        if @like.save!
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def show
        @like = Like.find(params[:id])
    end

    def update
        @like = Like.find(params[:id])
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
            elsif @like.likeable_type == 'Comment'
                @comment = @like.likeable
                render '/api/comments/show'
            end
        end

    end

    private

    def like_params
        params.require(:like).permit(:liker_id, :likeable_type, :likeable_id, :dislike)
    end
end

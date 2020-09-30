class Api::CommentsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]
    def index
        video = Video.find(params[:video_id])

        @comments = video.comments
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save!
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])

        unless @comment.update
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :author_id, :commentable_id, :commentable_type)
    end
end

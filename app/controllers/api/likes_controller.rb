class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        @like = Like.create(like_params)
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
    end

    private

    def like_params
        params.require(:like).permit(:liker_id, :likeable_type, :likeable_id, :dislike)
    end
end

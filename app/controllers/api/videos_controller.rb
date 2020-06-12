require 'byebug'
class Api::VideosController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
    end

    def create
        @video = Video.new(video_params)
        @video.view_count = 1

        if @video.save
            render json: {message: 'Upload Successful'}
        else
            debugger
            render json: @video.errors.full_messages, status: 422
        end
    end

    # def destroy

    # end

    private
    def video_params
        params.require(:video).permit(:title, :description, :creator_id, :video, :titlecard)
    end
end

require 'byebug'

class Api::VideosController < ApplicationController
    # before_action :ensure_logged_in, only: [:create, :destroy]
    before_action :ensure_logged_in, only: [:create]

    def index
        @videos = Video.all
    end

    def show
        @video = Video.find(params[:id])
    end

    def create
        # debugger
        @video = Video.new(video_params)
        if @video.save
            render json: {message: 'Upload Successful'}
        else
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

# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                api_videos GET    /api/videos(.:format)                                                                    api/videos#index {:format=>:json}
#                           POST   /api/videos(.:format)                                                                    api/videos#create {:format=>:json}
#                 api_video GET    /api/videos/:id(.:format)                                                                api/videos#show {:format=>:json}
#                           PATCH  /api/videos/:id(.:format)                                                                api/videos#update {:format=>:json}
#                           PUT    /api/videos/:id(.:format)                                                                api/videos#update {:format=>:json}
#                           DELETE /api/videos/:id(.:format)                                                                api/videos#destroy {:format=>:json}
#           api_video_likes GET    /api/videos/:video_id/likes(.:format)                                                    api/likes#index {:format=>:json}
#                           GET    /api/videos(.:format)                                                                    api/videos#index {:format=>:json}
#                           POST   /api/videos(.:format)                                                                    api/videos#create {:format=>:json}
#             new_api_video GET    /api/videos/new(.:format)                                                                api/videos#new {:format=>:json}
#            edit_api_video GET    /api/videos/:id/edit(.:format)                                                           api/videos#edit {:format=>:json}
#                           GET    /api/videos/:id(.:format)                                                                api/videos#show {:format=>:json}
#                           PATCH  /api/videos/:id(.:format)                                                                api/videos#update {:format=>:json}
#                           PUT    /api/videos/:id(.:format)                                                                api/videos#update {:format=>:json}
#                           DELETE /api/videos/:id(.:format)                                                                api/videos#destroy {:format=>:json}
#         api_comment_likes GET    /api/comments/:comment_id/likes(.:format)                                                api/likes#index {:format=>:json}
#              api_comments GET    /api/comments(.:format)                                                                  api/comments#index {:format=>:json}
#                           POST   /api/comments(.:format)                                                                  api/comments#create {:format=>:json}
#           new_api_comment GET    /api/comments/new(.:format)                                                              api/comments#new {:format=>:json}
#          edit_api_comment GET    /api/comments/:id/edit(.:format)                                                         api/comments#edit {:format=>:json}
#               api_comment GET    /api/comments/:id(.:format)                                                              api/comments#show {:format=>:json}
#                           PATCH  /api/comments/:id(.:format)                                                              api/comments#update {:format=>:json}
#                           PUT    /api/comments/:id(.:format)                                                              api/comments#update {:format=>:json}
#                           DELETE /api/comments/:id(.:format)                                                              api/comments#destroy {:format=>:json}
#                           GET    /api/comments(.:format)                                                                  api/comments#index {:format=>:json}
#                           POST   /api/comments(.:format)                                                                  api/comments#create {:format=>:json}
#                           PATCH  /api/comments/:id(.:format)                                                              api/comments#update {:format=>:json}
#                           PUT    /api/comments/:id(.:format)                                                              api/comments#update {:format=>:json}
#                           DELETE /api/comments/:id(.:format)                                                              api/comments#destroy {:format=>:json}
#                 api_likes POST   /api/likes(.:format)                                                                     api/likes#create {:format=>:json}
#                  api_like GET    /api/likes/:id(.:format)                                                                 api/likes#show {:format=>:json}
#                           PATCH  /api/likes/:id(.:format)                                                                 api/likes#update {:format=>:json}
#                           PUT    /api/likes/:id(.:format)                                                                 api/likes#update {:format=>:json}
#                           DELETE /api/likes/:id(.:format)                                                                 api/likes#destroy {:format=>:json}
#                 api_views POST   /api/views(.:format)                                                                     api/views#create {:format=>:json}
#           new_api_session GET    /api/session/new(.:format)                                                               api/sessions#new {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'static_pages#root'
  
    namespace :api, defaults:{ format: :json } do
        resources :users, only: [:create]
        resources :videos, only: [:create, :destroy, :show, :index, :update]
        resources :videos do
            resources :likes, only: [:index]
        end
        resources :comments do
            resources :likes, only: [:index]
        end
        resources :comments, only: [:create, :destroy, :update, :index]
        resources :likes, only: [ :show, :create, :update, :destroy]
        resources :views, only: [:create]
        resource :session, only: [:new, :create, :destroy]
    end

end

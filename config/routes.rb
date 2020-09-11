# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#           new_api_session GET    /api/session/new(.:format)                                                               api/sessions#new {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#                api_videos GET    /api/videos(.:format)                                                                    api/videos#index {:format=>:json}
#                           POST   /api/videos(.:format)                                                                    api/videos#create {:format=>:json}
#                 api_video GET    /api/videos/:id(.:format)                                                                api/videos#show {:format=>:json}
#                           PATCH  /api/videos/:id(.:format)                                                                api/videos#update {:format=>:json}
#                           PUT    /api/videos/:id(.:format)                                                                api/videos#update {:format=>:json}
#                           DELETE /api/videos/:id(.:format)                                                                api/videos#destroy {:format=>:json}
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
        resources :comments, only: [:create, :destroy, :index, :update]
        resources :likes, only: [:create, :destroy]
        resources :views, only: [:create]
        resource :session, only: [:new, :create, :destroy]
    end

end

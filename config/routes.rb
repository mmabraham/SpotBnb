Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :bookings, only: [:create, :index, :destroy]
    resources :reviews, only: [:create, :index]
    resources :spots, except: [:new, :edit]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end

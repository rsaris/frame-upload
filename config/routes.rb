Rails.application.routes.draw do
  # Keep this in the top so it doesn't conflict w/ the the catchall below
  namespace :api, defaults: { format: :json } do
    resources :frames, only: [:index]
    resources :uploads, only: [:create]
  end

  root 'render#index'
  match '*path', format: :html, to: 'render#index', via: :all
end

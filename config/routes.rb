Rails.application.routes.draw do
  root 'uploads#new'

  resources :frames, only: [:new, :create, :index]
  resources :uploads, only: [:new, :create]
end

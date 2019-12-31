Rails.application.routes.draw do
  resources :frames, only: [:new, :create, :index]
  resources :uploads, only: [:new, :create]
end

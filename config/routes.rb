Rails.application.routes.draw do
  resources :frames, only: [:new, :create, :index]
end

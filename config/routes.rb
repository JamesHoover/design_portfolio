Rails.application.routes.draw do

  root 'pages#index'

  # get '/work' => 'pages#work'
  # get '/work/productdesign' => 'pages#product_design'
  # get '/work/photography' => 'pages#photography'
  # get '/work/illustration' => 'pages#illustration'
  # get '/work/generative_art' => 'pages#generative_art'
  # get '/work/misc' => 'pages#misc'

  # get '/about' => 'pages#about'
  # get '/contact' => 'pages#contact'
  #get 'projects/govote' => 'pages#govote'
  #get 'projects/dealtapp' => 'pages#dealtapp'
  #get 'projects/freelance' => 'pages#freelance'
  #get 'projects/dealtapp_logo' => 'pages#dealtapplogo'
  #get 'projects/dealowner' => 'pages#dealowner'
  #get 'projects/photography' => 'pages#photography'
  #get '/interaction_examples' => 'pages#interaction_examples'
  #get 'art' => 'pages#art'



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end

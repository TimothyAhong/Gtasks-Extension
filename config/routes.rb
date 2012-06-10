GTasksContract::Application.routes.draw do
  root :to => 'static_pages#home'
  get "static_pages/home"
  match "/application.manifest" => Rails::Offline
end

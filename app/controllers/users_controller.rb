class UsersController < ApplicationController

  before_action :set_user , only: [:show , :edit , :update , :destroy]
  before_action :require_user , except: [:show , :index , :new , :create]
  before_action :require_same_user , only: [:edit , :update , :destroy]

  def show
    @articles = @user.articles.paginate(page: params[:page] , per_page: 5)
  end

  def index
    @users = User.paginate(page: params[:page] , per_page: 5)
  end
  
  def new
    @user = User.new
  end

  def edit
  end

  def update
    if @user.update(user_params)
      flash[:notice] = "Your account was successfully updated"
      redirect_to user_path(@user.id)
    else
      render "edit"
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      flash[:notice] = "Hello #{@user.username} Welcome To The Alpha Blog"
      redirect_to articles_path
    else
      render "new"
    end
  end

  def destroy
    @user.destroy
    session[:user_id] = nil if session[:user_id] == @user.id
    flash[:notice] = "Account and all associated Articles are deleted"
    redirect_to users_path
  end

  private

  def user_params
    params.require(:user).permit(:username , :email , :password)
  end

  def set_user
    @user = User.find(params[:id])
  end

  def require_same_user
    if current_user != @user && !current_user.admin?
      flash[:alert] = "Not Authorized"
      redirect_to users_path
    end
  end

end
class ArticlesController < ApplicationController

  before_action :set_article , only: [:show , :edit , :update , :destroy]
  before_action :require_user , except: [:show , :index]
  before_action :require_same_user , only: [:edit , :update , :destroy]

  def show
  end

  def index
    @articles = Article.paginate(page: params[:page] , per_page: 5)
  end

  def new
    @article = Article.new
  end
  
  def create
    @article = Article.new(article_params)
    @article.user = current_user
    if @article.save
      flash[:notice] = "Article Creation Successful"
      redirect_to article_path(@article.id)
    else
      render "new"
    end
  end

  def edit
  end

  def update
    if @article.update(article_params)
      flash[:notice] = "Article Update Successful"
      redirect_to article_path(@article.id)
    else
      render "edit"
    end
  end

  def destroy
    @article.destroy
    redirect_to articles_path
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title , :description , category_ids: [])
  end
  
  def require_same_user
    if current_user != @article.user && !current_user.admin?
      flash[:alert] = "Not Authorized"
      redirect_to article_path(@article.id)
    end
  end

end
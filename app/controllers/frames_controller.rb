class FramesController < ApplicationController
  def new
    @frame = Frame.new
  end

  def create
    @frame = Frame.new(frame_params)
    if @frame.save
      redirect_to frames_path
    else
      render :new
    end
  end

  def index
    @frames = Frame.all
  end

  private

  def frame_params
    params.require(:frame).permit(
      :email,
      :name,
      :subject,
    )
  end
end

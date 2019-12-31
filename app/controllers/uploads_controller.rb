class UploadsController < ApplicationController
  before_action :load_frames

  def new; end

  def create
    frame = Frame.find_by(id: params[:frame_id])
    image = params[:frame]

    if frame.present? && image.present?
      # DO STUFF
    else
      render :new
    end
  end

  private

  def load_frames
    @frames = Frame.all
  end
end

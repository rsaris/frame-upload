class UploadsController < ApplicationController
  before_action :load_frames

  def new; end

  def create
    frame = Frame.find_by(id: params[:frame])
    image = params[:file]

    if frame.present? && image.present?
      PhotoMailer.with(
        frame: frame,
        image_file: image.tempfile,
        image_name: image.original_filename,
      ).photo_email.deliver_now
    end

    render :new
  end

  private

  def load_frames
    @frames = Frame.all
  end
end

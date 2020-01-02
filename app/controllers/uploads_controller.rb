class UploadsController < ApplicationController
  before_action :load_frames

  def new; end

  def create
    frame_ids = params[:frame_ids]
    image = params[:file]

    if image.present?
      frame_ids.each do |frame_id|
        frame = Frame.find_by(id: frame_id)
        next if frame.nil?

        PhotoMailer.with(
          frame: frame,
          image_file: image.tempfile,
          image_name: image.original_filename,
        ).photo_email.deliver_now
      end

      flash.now[:success] = "#{frame_ids.size} email(s) sent"
    end

    redirect_to new_upload_path
  end

  private

  def load_frames
    @frames = Frame.all
  end
end

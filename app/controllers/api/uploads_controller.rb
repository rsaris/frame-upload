module Api
  class UploadsController < ApiController
    def create
      frame_ids = params[:frameIds]
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
      end

      render json: {}
    end
  end
end

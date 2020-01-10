module Api
  class UploadsController < ApiController
    def create
      frame_ids = params[:frameIds]
      image = params[:file]

      puts "FOUND #{frame_ids.join(', ')}"

      render json: {}
    end
  end
end

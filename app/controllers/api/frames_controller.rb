module Api
  class FilesController < ApiController
    def index
      render json: Frame.all.map { |frame| FramePresenter.build(frame) }
    end

    private

    class FramePresenter
      def initialize(id, email, name)
        @id = id
        @email = email
        @name = name
      end

      def build(frame)
        new(
          frame.id,
          frame.email,
          frame.name,
        )
      end
    end
  end
end

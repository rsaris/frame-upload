class PhotoMailer < ApplicationMailer
  def photo_email
    frame = params[:frame]

    attachments[params[:image_name]] = File.read(params[:image_file])
    mail(
      body: '',
      subject: frame.subject,
      to: frame.email,
    )
  end
end

Rails.application.config.action_mailer.delivery_method = :smtp
Rails.application.config.action_mailer.smtp_settings = {
  address: 'smtp.gmail.com',
  authentication: 'plain',
  enable_starttls_auto: true,
  password: ENV['SMTP_PASSWORD'],
  port: 587,
  user_name: ENV['SMTP_EMAIL'],
}

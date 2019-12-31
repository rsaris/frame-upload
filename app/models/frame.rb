class Frame < ApplicationRecord
  validates :email, presence: true
  validates :subject, presence: true
end

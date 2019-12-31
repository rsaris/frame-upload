class Frame < ApplicationRecord
  validates :email, presence: true
  validates :name, presence: true
  validates :subject, presence: true
end

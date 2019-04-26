class LessonPlan < ApplicationRecord
  belongs_to :child
  belongs_to :lesson
  belongs_to :author
end

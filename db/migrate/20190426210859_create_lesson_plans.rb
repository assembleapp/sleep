class CreateLessonPlans < ActiveRecord::Migration[5.1]
  def change
    create_table :lesson_plans, id: :uuid do |t|
      t.references :child, type: :uuid, foreign_key: true
      t.references :lesson, type: :uuid, foreign_key: true
      t.references :author, type: :uuid, foreign_key: true

      t.date :start, null: false
      t.date :end, null: false

      t.timestamps
    end
  end
end

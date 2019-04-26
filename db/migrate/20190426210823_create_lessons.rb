class CreateLessons < ActiveRecord::Migration[5.1]
  def change
    create_table :lessons, id: :uuid do |t|
      t.references :author, type: :uuid, foreign_key: true

      t.string :title, null: false
      t.text :contents, null: false

      t.timestamps
    end
  end
end

class CreateDiaries < ActiveRecord::Migration[5.1]
  def change
    create_table :diaries, id: :uuid do |t|
      t.references :child, type: :uuid, foreign_key: true

      t.date :morning, null: false
      t.time :in_bed
      t.time :lights_out
      t.time :asleep
      t.time :awake
      t.time :out_of_bed
      t.text :dreams
      t.text :notes

      t.timestamps
    end
  end
end

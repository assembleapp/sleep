class CreateChildren < ActiveRecord::Migration[5.1]
  def change
    create_table :children, id: :uuid do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end

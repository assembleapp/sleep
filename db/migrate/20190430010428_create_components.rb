class CreateComponents < ActiveRecord::Migration[5.1]
  def change
    create_table :components, id: :uuid do |t|
      t.string :style, null: false, default: "{}"

      t.timestamps
    end
  end
end

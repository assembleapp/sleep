class CreateSupervisors < ActiveRecord::Migration[5.1]
  def change
    create_table :supervisors, id: :uuid do |t|
      t.references :child, type: :uuid, foreign_key: true
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end

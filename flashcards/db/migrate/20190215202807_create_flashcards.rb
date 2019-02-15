class CreateFlashcards < ActiveRecord::Migration[5.0]
  def change
    create_table :flashcards do |t|
      t.text :name
      t.text :front
      t.text :back

      t.timestamps
    end
  end
end

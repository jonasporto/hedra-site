# -*- encoding : utf-8 -*-
class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.integer :tag_id
      t.text :body

      t.timestamps
    end
  end
end

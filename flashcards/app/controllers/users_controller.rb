class UsersController < ApplicationController
	has_secure_password

	def create
		binding.pry
	end
end

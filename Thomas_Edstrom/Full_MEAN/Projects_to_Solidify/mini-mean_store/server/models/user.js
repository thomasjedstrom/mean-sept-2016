var mongoose = require('mongoose'),

UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Your first name is required"],
		trim: true,
	}
}, {timestamps: {
	createdAt: 'created_at',
	updatedAt: 'updated_at'
	}
})

Users = mongoose.model('Users', UserSchema);
var mongoose = require('mongoose'),

OrderSchema = new mongoose.Schema({
	product: {
		type: String,
	},
	user: {
		type: String,
	}
	qty: {
		type: Number,
	}
}, {timestamps: {
	createdAt: 'created_at',
	updatedAt: 'updated_at'
	}
})

Orders = mongoose.model('Orders', OrderSchema);
import mongoose from '../database'

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  preco: {
    type: String,
    required: true
  },
  quantidade: {
    type: Number,
    required: true
  }
})

export default mongoose.model('products', ProductSchema)

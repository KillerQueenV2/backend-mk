import mongoose from '../database'

const PedidosSchema = new mongoose.Schema({
  endereco: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  userId: {
    type: Number,
    required: true
  },
  selectedProductIds: {
    type: String,
    required: true
  },
  selectedProductQtds: {
    type: String,
    required: true
  },
  quantidade: {
    type: Number,
    required: true
  }
})

export default mongoose.model('pedidos', PedidosSchema)

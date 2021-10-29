import mongoose from '../database'

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  }
})

export default mongoose.model('users', UserSchema)

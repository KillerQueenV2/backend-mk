import express from 'express'
import PurchaseModel from '../models/PurchaseModel'

const router = express.Router()

router.get('/', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const purchases = await PurchaseModel.find()
      res.json(purchases)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.get('/:purchaseId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const purchase = await PurchaseModel.findById(req.params.purchaseId)
      res.json(purchase)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.post('/', (req, res) => {
  const purchase = new PurchaseModel({
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    userId: req.body.userId,
    selectedProductIds: req.body.selectedProductIds,
    selectedProductQtds: req.body.selectedProductQtds,
    quantidade: req.body.quantidade
  })

  try {
    const savePurchase = purchase.save()
    res.json(savePurchase)
  } catch (err) {
    res.json({ message: err })
  }
})

router.put('/:purchaseId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const updatePurchase = await PurchaseModel.updateOne(
        { _id: req.params.purchaseId },
        {
          $set: {
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            userId: req.body.userId,
            selectedProductIds: req.body.selectedProductIds,
            selectedProductQtds: req.body.selectedProductQtds,
            quantidade: req.body.quantidade
          }
        }
      )
      res.json(updatePurchase)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.delete('/:purchaseId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const removePurchase = await PurchaseModel.remove({ _id: req.params.purchaseId })
      res.json(removePurchase)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

export default router

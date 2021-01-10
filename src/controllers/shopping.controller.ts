import { getCustomRepository } from 'typeorm';
import ShoppingRepository from '../repositories/shopping.repository';

export const getShoppings = async (req, res) => {
  const shoppingRepo = getCustomRepository(ShoppingRepository);

  const shoppings = await shoppingRepo.all({page: req.query.page});

  res.json({
    success: true,
    shopping: shoppings,
  });
}

export const createShopping = async (req, res) => {
  const shoppingRepo = getCustomRepository(ShoppingRepository);
  try {
    const shoppings = await shoppingRepo.createOne(req.body);
    res.json({
      success: true,
      shopping: shoppings,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message
    });
  }


}
export const updateShopping = async (req, res) => {
  const shoppingRepo = getCustomRepository(ShoppingRepository);
  const {id} = req.params;

  try {
    const shopping = await shoppingRepo.updateOne({id, ...req.body});

    res.json({
      success: true,
      shopping
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message
    });
  }
}

export const deleteShopping = async (req, res) => {
  const shoppingRepo = getCustomRepository(ShoppingRepository);
  const {id} = req.params;

  try {
    await shoppingRepo.delete(id);

    res.json({
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message
    });
  }
}

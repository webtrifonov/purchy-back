import { getCustomRepository } from 'typeorm';
import ShoppingRepository from '../repositories/shopping.repository';

export const getShoppings = async (req, res) => {
  const shoppingRepo = getCustomRepository(ShoppingRepository);

  const shoppings = await shoppingRepo.all({page: req.params.page});
  res.json({
    success: true,
    shopping: shoppings,
  });
}
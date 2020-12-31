import { getCustomRepository } from 'typeorm';
import ProductRepository from '../repositories/product.repository';

export const createProduct = async (req, res) => {
  const productRepo = getCustomRepository(ProductRepository);

  const product = await productRepo.createOne(req.body);
  res.json({
    success: true,
    product,
  })
}

export const getProducts = async (req, res) => {
  const productRepo = getCustomRepository(ProductRepository);
  const products = await productRepo.all({page: req.params.page});
  res.json({
    success: true,
    products
  });
}
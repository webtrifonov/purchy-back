import { getCustomRepository } from 'typeorm';
import ProductRepository from '../repositories/product.repository';

export const createProduct = async (req, res) => {
  const productRepo = getCustomRepository(ProductRepository);
  try {
    const product = await productRepo.createOneWithGroup(req.body);
    res.json({
      success: true,
      product,
    })
  } catch (error) {
    res.json({
      success: true,
      error: error.message,
    })
  }

}

export const getProducts = async (req, res) => {
  const productRepo = getCustomRepository(ProductRepository);
  const products = await productRepo.all({page: req.params.page});
  res.json({
    success: true,
    products
  });
}
export const updateProduct = async (req, res) => {
  const productRepo = getCustomRepository(ProductRepository);
  const {id} = req.params;

  try {
    const product = await productRepo.updateOne({id, ...req.body});

    res.json({
      success: true,
      product
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message
    });
  }
}

export const deleteProduct = async (req, res) => {
  const productRepo = getCustomRepository(ProductRepository);
  const {id} = req.params;

  try {
    await productRepo.delete(id);

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

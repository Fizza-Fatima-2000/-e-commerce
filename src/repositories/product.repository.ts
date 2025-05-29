import Product from "../models/product";

export class ProductRepository {
  // Create a new product
  public async create(productData: any): Promise<Product> {
    return await Product.create(productData);
  }

  // Find all products
  public async findAll(): Promise<Product[]> {
    return await Product.findAll();
  }

  // Find a product by ID
  public async findById(id: number): Promise<Product | null> {
    return await Product.findByPk(id);
  }

  public async update(id: number, updateData: any): Promise<[number, Product[]]> {
    return await Product.update(updateData, {
      where: { id },
      returning: true,
    });
  }

  // Delete a product by ID
  public async delete(id: number): Promise<number> {
    return await Product.destroy({
      where: { id },
    });
  }
}

export default new ProductRepository();

import Category from "../models/category";

export class CategoryRepository {
  // Create a new Category
  public async create(categoryData: any): Promise<Category> {
    return await Category.create(categoryData);
  }

  // Find all Category
  public async findAll(): Promise<Category[]> {
    return await Category.findAll();
  }

  // Find a Category by ID
  public async findById(id: number): Promise<Category | null> {
    return await Category.findByPk(id);
  }

  public async update(id: number, updateData: any): Promise<[number, Category[]]> {
    return await Category.update(updateData, {
      where: { id },
      returning: true,
    });
  }

  // Delete a category by ID
  public async delete(id: number): Promise<number> {
    return await Category.destroy({
      where: { id },
    });
  }
}

export default new CategoryRepository();

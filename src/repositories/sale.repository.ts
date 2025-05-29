import Sale from "../models/sale";

export class SaleRepository {
  // Create a new Sale
  public async create(saleData: any): Promise<Sale> {
    return await Sale.create(saleData);
  }

  // Find all Sale
  public async findAll(): Promise<Sale[]> {
    return await Sale.findAll();
  }

  // Find a Sale by ID
  public async findById(id: number): Promise<Sale | null> {
    return await Sale.findByPk(id);
  }

  public async update(id: number, updateData: any): Promise<[number, Sale[]]> {
    return await Sale.update(updateData, {
      where: { id },
      returning: true,
    });
  }

  // Delete a Sale by ID
  public async delete(id: number): Promise<number> {
    return await Sale.destroy({
      where: { id },
    });
  }
}

export default new SaleRepository();

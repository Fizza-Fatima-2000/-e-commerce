import Inventory from "../models/inventory";

export class InventoryRepository {
  // Create a new Inventory
  public async create(inventoryData: any): Promise<Inventory> {
    return await Inventory.create(inventoryData);
  }

  // Find all Inventory
  public async findAll(): Promise<Inventory[]> {
    return await Inventory.findAll();
  }

  // Find a Inventory by ID
  public async findById(id: number): Promise<Inventory | null> {
    return await Inventory.findByPk(id);
  }

  public async update(id: number, updateData: any): Promise<[number, Inventory[]]> {
    return await Inventory.update(updateData, {
      where: { id },
      returning: true,
    });
  }

  // Delete a Inventory by ID
  public async delete(id: number): Promise<number> {
    return await Inventory.destroy({
      where: { id },
    });
  }
}

export default new InventoryRepository();

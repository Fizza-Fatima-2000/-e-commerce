import User from "../models/user";

export class UserRepository {
  public async create(user: any): Promise<User> {
    return await User.create(user);
  }

  public async findAll(): Promise<any | null> {
    return await User.findAll();
  }
  public async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({
      where: { email: email.toLowerCase() },
    });
  }



}

export default new UserRepository();

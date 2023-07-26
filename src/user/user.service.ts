import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users = [];

  getAll() {
    return this.users;
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id == id);
  }

  createUser(user: CreateUserDto) {
    this.users.push({
      ...user,
      id: nanoid(),
    });
    return user;
  }

  //   updateUser(data: UpdateUserDto) {}
  deleteUser(id: string) {
    const deletedUser = this.users.find((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}

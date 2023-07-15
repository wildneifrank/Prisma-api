import { Prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "@prisma/client";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    // Verificar se o usuário já existe
    const userAlreadyExists = await Prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userAlreadyExists) {
      // erro
    }
    // Criar usuário
    const user = await Prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return user;
  }
}


import { getRepository } from 'typeorm'

import User from '../models/User'
import AppError from '../errors/AppError'

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserSerivce {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userRepository  = getRepository(User)
    const checkEmailExistent = await userRepository.findOne({
      where:{email}
    })

    if (!checkEmailExistent){
      throw new AppError('Email already exist!')
    }

    const user = userRepository.create({name, email, password})

    await userRepository.save(user)

    return user
  }
}

export default CreateUserSerivce;

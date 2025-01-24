import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private UsuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const Usuario = this.UsuarioRepository.create(createUsuarioDto);
    return this.UsuarioRepository.save(Usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.UsuarioRepository.find();
  }

  findOne(id: number) {
    //return `This action returns a #${id} Usuario`;
    return this.UsuarioRepository.findOne({where: { idUsuario: id }});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    //return `This action updates a #${id} Usuario`;
    return this.UsuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} Usuario`;
    const Usuario = await this.UsuarioRepository.findOne({where: { idUsuario: id }});
    if (Usuario){
      return await this.UsuarioRepository.remove(Usuario);
    }
    return null;
  }
}
export { Usuario };


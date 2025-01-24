import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsuariosProviders } from './usuarios.providers';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
@Module({
  imports: [DatabaseModule],
  controllers:[UsuariosController],
  providers: [
    ...UsuariosProviders,
    UsuariosService,
  ],
})
export class UsuariosModule {}
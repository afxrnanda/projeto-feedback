import { Test, TestingModule } from '@nestjs/testing';
import { Usuario } from './usuarios.service';

describe('Usuario', () => {
  let service: Usuario;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Usuario],
    }).compile();

    service = module.get<Usuario>(Usuario);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

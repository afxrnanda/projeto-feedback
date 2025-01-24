import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    idUsuario: number;
    
    @Column({ length: 150 })
    usuario:string;

    @Column({ length: 150 })
    senha:string;
  static idUsuario: number;

}
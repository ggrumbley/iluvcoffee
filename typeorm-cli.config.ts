import { SchemaSync1675114146924 } from './src/migrations/1675114146924-SchemaSync';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { CoffeeRefactor1675113663281 } from './src/migrations/1675113663281-CoffeeRefactor';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1675113663281, SchemaSync1675114146924],
});

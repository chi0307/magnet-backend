import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test_name',
  password: 'test_password',
  database: 'test_database',
  entities: [__dirname + '/**/*.entity.ts'],
  migrations: [__dirname + '/../migrations/*.ts'],
  synchronize: false,
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

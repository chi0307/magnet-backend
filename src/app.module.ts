import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppDataSource } from './data-source'
import { UserInfoModule } from './user-info/user-info.module'
import { LedgerInfoModule } from './ledger-info/ledger-info.module'
import { PurchaseInfoModule } from './purchase-info/purchase-info.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    UserInfoModule,
    LedgerInfoModule,
    PurchaseInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    AppDataSource.initialize()
      .then(() => console.log('Data Source has been initialized!'))
      .catch((error) =>
        console.error('Error during Data Source initialization:', error),
      )
  }
}

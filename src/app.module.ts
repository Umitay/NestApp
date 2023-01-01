import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TensesModule } from './tenses/tenses.module';
import { ExercisesModule } from './exercises/exercises.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://umi:123698745@cluster0.cu2td6y.mongodb.net/nest?retryWrites=true&w=majority',
    ),
    ExercisesModule,
    TensesModule,
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

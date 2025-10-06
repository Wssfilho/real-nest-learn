import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { CountryModule } from './country/country.module';
import { MissionsModule } from './missions/missions.module';

@Module({
  //se tiver varios modulos podemos colocar tmb 
  imports: [HeroModule, CountryModule, MissionsModule],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { HeroModule } from "./hero/hero.module";
import { CountryModule } from "./country/country.module";
import { PowerModule } from "./power/power.module";
import { MissionModule } from "./mission/mission.module";

@Module({
  //se tiver varios modulos podemos colocar tmb
  imports: [HeroModule, CountryModule, PowerModule, MissionModule],
})
export class AppModule {}

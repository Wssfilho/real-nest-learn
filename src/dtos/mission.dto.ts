export class missionDto {
  id?: number;
  name: string;
  duration: Date;
  description: string;
  /*id          Int      @id @default(autoincrement())
  name        String   @db.VarChar(255)
  duration    DateTime
  description String   @db.VarChar(255)*/
}

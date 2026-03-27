import { IsString, IsUrl } from 'class-validator';

export class SubmitWorkDto {
  @IsString()
  @IsUrl()
  submissionUrl!: string;
}

import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreatePollDto } from './dtos/create-poll.dto';
import { JoinPollDto } from './dtos/join-poll.dto';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private pollsService: PollsService) {}

  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    const result = await this.pollsService.create(createPollDto);

    return result;
  }

  @Post('join')
  async join(@Body() joinPollDto: JoinPollDto) {
    const result = await this.pollsService.join(joinPollDto);

    return result;
  }

  @Post('/rejoin')
  async rejoin() {
    const result = await this.pollsService.rejoin({
      name: 'From token',
      pollID: 'Also from token',
      userID: 'This either from the token',
    });

    return result;
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePollFields, JoinPollFields, RejoinPollFields } from './types';
import { createPollId, createUserID } from 'src/utils/createId';

@Injectable()
export class PollsService {
  async create(fields: CreatePollFields) {
    const pollID = createPollId();
    const userID = createUserID();

    return {
      ...fields,
      userID,
      pollID,
    };
  }

  async join(fields: JoinPollFields) {
    const userID = createUserID();

    return {
      ...fields,
      userID,
    };
  }

  async rejoin(fields: RejoinPollFields) {
    return fields;
  }
}

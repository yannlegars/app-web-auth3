// @flow

import type Context from '../../../context.js';

async function createStream (
  ctx: Context,
  streamId: string,
  streamName: string,
): Promise<Object> {
  // Create the new user
  const newStream = await ctx.pryv.createStream(
    ctx.user.username,
    ctx.user.personalToken,
    streamId,
    streamName);
  return newStream;
}

export default createStream;

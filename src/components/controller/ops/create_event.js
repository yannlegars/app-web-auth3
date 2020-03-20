// @flow

import type Context from '../../../context.js';

async function createEvent (
  ctx: Context,
  eventData: Object,
): Promise<Object> {
  // Create the new user
  const newEvent = await ctx.pryv.createEvent(
    ctx.user.username,
    ctx.user.personalToken,
    eventData);
  return newEvent;
}

export default createEvent;

import { IClientReview } from '../pages/models'

const dfDec22: IClientReview = {
  id: 'dfDec22',
  initials: 'DF',
  month: 12,
  year: 2022,
  quote: [
    `Working with Codi is like being lucky enough to have a great realtor in your  family. Someone who you can be totally open and at ease with as well as <strong>someone you know you can absolutely trust to always work for your best interests.</strong>`,
    'Codi is very knowledgeable and came prepared to every house she showed us. She is very professional while at the same time relaxed and informal.',
  ],
  highlighted: [
    'someone you know you can absolutely trust to always work for your best interests',
  ],
}

export const HOME_REVIEWS: IClientReview[] = [dfDec22]

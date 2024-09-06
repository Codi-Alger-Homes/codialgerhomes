import { IClientReview } from '../models'

const brAug24: IClientReview = {
  id: 'brAug24',
  initials: 'BR',
  month: 8,
  year: 2024,
  quote: [
    "<strong>I've worked with a few realtors and Codi was definitely the best one.</strong> She took the time to get to know us as a family and what we wanted in a home. It never felt like it was about the commission for her and she truly wanted the best for our family.",
  ],
  highlighted: [
    "I've worked with a few realtors and Codi was definitely the best one.",
  ],
}

const dfDec22_1: IClientReview = {
  id: 'dfDec22_1',
  initials: 'DF',
  month: 12,
  year: 2022,
  quote: [
    'Working with Codi is like being lucky enough to have a great realtor in your family. Someone who you can be totally open and at ease with as well as <strong>someone you know you can absolutely trust to always work for your best interests.</strong>',
    'Codi is very knowledgeable and came prepared to every house she showed us. She is very professional while at the same time relaxed and informal.',
  ],
  highlighted: [
    'someone you know you can absolutely trust to always work for your best interests',
  ],
}

const ssDec21: IClientReview = {
  id: 'ssDec21',
  initials: 'SS',
  month: 12,
  year: 2021,
  quote: [
    'Codi soothed every woe along the way and <strong>equipped us with the knowledge to browse homes responsibly</strong>.',
    'We learned so much over the past couple months, and we never felt stuck or in the dark about what was happening or what would happen next. ',
  ],
  highlighted: ['equipped us with the knowledge to browse homes responsibly'],
}

const smNov23: IClientReview = {
  id: 'smNov23',
  initials: 'SM',
  month: 11,
  year: 2023,
  quote: [
    'Through the home search process, <strong>she helped me realize what I really needed in a home and what I could skip</strong>. I learned so much about what to look for in homes, thanks to her. She helped me find the perfect home!!',
  ],
  highlighted: [
    'she helped me realize what I really needed in a home and what I could skip',
  ],
}

export const HOME_REVIEWS: IClientReview[] = [
  brAug24,
  dfDec22_1,
  ssDec21,
  smNov23,
]

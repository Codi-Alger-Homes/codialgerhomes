import { IClientReview } from '../models'

export const BUYERS_HEADER = "Buyers"

const lkDec23: IClientReview = {
  id: "lkDec23",
  initials: "LK",
  month: 12,
  year: 2023,
  quote: [
    "Along the way, she didn't compromise things that were important to us like having an inspection done, which was being waived by many buyers at the time.",
    "...",
    "We felt very well taken care of by Codi at every step and felt like <strong>she really cared about not just finding us A home, but finding us the RIGHT home</strong>.",
  ],
  highlighted: [
    "she really cared about not just finding us A home, but finding us the RIGHT home",
  ],
}

const dfDec22_2: IClientReview = {
  id: "dfDec22_2",
  initials: "DF",
  month: 12,
  year: 2022,
  quote: [
    "We never once felt pressured or that she was just trying to get a sale. We could tell she genuinely enjoyed the process and <strong>her only concern was to make sure we found the perfect home in our price range</strong>.",
  ],
  highlighted: [
    "her only concern was to make sure we found the perfect home in our price range",
  ],
}

const rbOct23: IClientReview = {
  id: "rbOct23",
  initials: "RB",
  month: 10,
  year: 2023,
  quote: [
    "She's super friendly and knowledgeable and knows exactly which questions to ask when looking for houses. <strong>She makes the process of buying a house, which is extremely intimidating, seem easy and straightforward</strong>.",
  ],
  highlighted: [
    "She makes the process of buying a house, which is extremely intimidating, seem easy and straightforward",
  ],
}

const cdDec21: IClientReview = {
  id: "cdDec21",
  initials: "CD",
  month: 12,
  year: 2021,
  quote: [
    "<strong>Any questions we had were answered quickly and explained with everyday language</strong>.",
    "...",
    "If you are looking to have the most stress-free and educational home buying experience possible you would be remiss to not work with Codi."
  ],
  highlighted: [
    "Any questions we had were answered quickly and explained with everyday language",
  ],
}

export const BUYERS_REVIEWS: IClientReview[] = [lkDec23, dfDec22_2, rbOct23, cdDec21]

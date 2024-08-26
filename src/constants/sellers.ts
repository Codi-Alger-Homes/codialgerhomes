import { IClientReview } from '../models'

const ktDec23: IClientReview = {
  id: "ktDec23",
  initials: "KT",
  month: 12,
  year: 2023,
  quote: [
    "Codi was so very helpful in getting Mom's condo sold. She understood what we were going through and offered her services in more than just selling the unit. She also provided help in selling items we could not take. <strong>And when we had trouble with the timing of the piano removal from the unit, she sent her crew in to help!</strong>",
  ],
  highlighted: [
    "And when we had trouble with the timing of the piano removal from the unit, she sent her crew in to help!",
  ],
}

const dfJan23: IClientReview = {
  id: "dfJan23",
  initials: "DF",
  month: 1,
  year: 2023,
  quote: [
    "<strong>She knew exactly what we needed to get done and what we didn't need to do for it to show well.</strong> She was great working with the other realtors and advocated strongly for us.",
  ],
  highlighted: [
    "She knew exactly what we needed to get done and what we didn't need to do for it to show well.",
  ],
}

const dcJan22: IClientReview = {
  id: "dcJan22",
  initials: "DC",
  month: 1,
  year: 2022,
  quote: [
    "Codi went above and beyond to make the sale a painless experience (seriously, very little effort on our part, she's amazing).",
    "We were moving out of state and she even helped us out where she could during our stressful time of going through a renovation, new jobs, moving across country, and selling the house. She's is truly one of a kind realtor-extrodinaire and you will be happy that you went with Codi over any other realtor. <strong>Added bonus - she got us above what I thought we could sell the house for</strong>, especially in this unpredictable 2022 market!"
  ],
  highlighted: [
    "Added bonus - she got us above what I thought we could sell the house for",
  ],
}

export const SELLER_REVIEWS: IClientReview[] = [ktDec23, dfJan23, dcJan22]

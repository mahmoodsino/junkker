import * as yup from "yup";


export const giftSchema = yup.object().shape({
    amount: yup.number().required(),
    description:yup.string().required(),
    users:yup.array()
  })
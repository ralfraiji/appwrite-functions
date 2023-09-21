import { fetch } from 'undici';

export default async function ({ req, res }) {
  if (req.path === '/eur') {
    const amountInEuros = Number(req.query.amount);
    const response = await fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD');
    const data = await response.json();
    const amountInDollars = amountInEuros * data.rates.USD;
    return res.send(amountInDollars.toString());
  }

  if (req.path === '/inr') {
    const amountInRupees = Number(req.query.amount);
    const response = await fetch('https://api.exchangerate.host/latest?base=INR&symbols=USD');
    const data = await response.json();
    const amountInDollars = amountInRupees * data.rates.USD;
    return res.send(amountInDollars.toString());
  }

  return res.send('Invalid path');
};
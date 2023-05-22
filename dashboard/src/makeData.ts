export type Lead = {
  tealiumEvent: string;
  customerCity: string;
  customerCountry: string;
  customerState: string;
  siteInternalAccountId: string;
  formName: string;
  productName: string;
  timestamp: Date;
}

export const leadData = [
  {
    tealiumEvent: 'form_load',
    customerCity: 'Duluth',
    customerCountry: 'United States',
    customerState: 'Minnesota',
    siteInternalAccountId: 'LyTestVDP',
    formName: 'Value Your Trade',
    productName: '2020 M2 (Video only only) - Honda',
    timestamp: '2023-05-19T10:35:07.569Z'
  },
  {
    tealiumEvent: 'form_load',
    customerCity: 'Duluth',
    customerCountry: 'United States',
    customerState: 'Minnesota',
    siteInternalAccountId: 'LyTestVDP',
    formName: 'Request Quote',
    productName: '2020 M2 (Video only only) - Honda',
    timestamp: '2023-05-19T10:38:07.569Z'
  },
];
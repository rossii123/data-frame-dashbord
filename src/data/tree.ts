const dataTree = [
  {
    name: 'BeerCatalog',
    type: 'Catalog',
    description: null,
    children: [
      {
        name: 'Sales',
        type: 'Catalog',
        description: 'Collection of datasets related to sales.',
        children: [
          {
            name: 'orders',
            type: 'Dataset',
            description:
              'Collection of orders made by users in the website and in store.',
            columns: [
              {
                name: 'user_id',
                data_type: 'String',
                description: 'The id of the user if logged in.',
                from_store: true,
              },
              {
                name: 'timestamp',
                data_type: 'Long',
                description: 'Unix style timestamp in UTC.',
                from_store: true,
              },
              {
                name: 'date',
                data_type: 'Date',
                description:
                  'The date of datapoint occurence, usually used for dataset partitioning.',
                from_store: true,
              },
              {
                name: 'product_codes',
                data_type: 'Array(String)',
                description:
                  'A list of product codes, sent whenever a hit related to products is triggered.',
                from_store: true,
              },
              {
                name: 'country',
                data_type: 'String',
                description: 'A descriptive name of a country e.g. "Sweden"',
                from_store: true,
              },
              {
                name: 'store',
                data_type: 'Int',
                description: 'An integer identificator of a store',
                from_store: true,
              },
            ],
          },
        ],
      },
      {
        name: 'Web',
        type: 'Catalog',
        description:
          'Collection of datasets related to website and user interactions.',
        children: [
          {
            name: 'user_interactions',
            type: 'Dataset',
            description:
              'User interactions related to the web shops, hits gathered as either page view or event style hit.',
            columns: [
              {
                name: 'hit_type',
                data_type: 'String',
                description: 'The type of hit, either page view or event.',
                from_store: false,
              },
              {
                name: 'hit',
                data_type: 'String',
                description:
                  'The name of the hit, when page view this field is null.',
                from_store: false,
              },
              {
                name: 'user_id',
                data_type: 'String',
                description: 'The id of the user if logged in.',
                from_store: true,
              },
              {
                name: 'date',
                data_type: 'Date',
                description:
                  'The date of datapoint occurence, usually used for dataset partitioning.',
                from_store: true,
              },
              {
                name: 'session_id',
                data_type: 'String',
                description:
                  'A session id binding multiple hits together, timeout of 30 minutes.',
                from_store: false,
              },
              {
                name: 'page',
                data_type: 'String',
                description:
                  'The web page URL path, sent together with every hit.',
                from_store: false,
              },
              {
                name: 'timestamp',
                data_type: 'Long',
                description: 'Unix style timestamp in UTC.',
                from_store: true,
              },
              {
                name: 'product_codes',
                data_type: 'Array(String)',
                description:
                  'A list of product codes, sent whenever a hit related to products is triggered.',
                from_store: true,
              },
              {
                name: 'store',
                data_type: 'Int',
                description: 'An integer identificator of a store',
                from_store: true,
              },
              {
                name: 'country',
                data_type: 'String',
                description: 'A descriptive name of a country e.g. "Sweden"',
                from_store: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
export default dataTree;

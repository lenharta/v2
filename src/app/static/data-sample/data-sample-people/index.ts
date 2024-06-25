interface SampleAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface SamplePerson {
  id: number;
  age: number;
  name: string;
  email: string;
  address: SampleAddress;
}

const DATA_SAMPLE_PEOPLE: SamplePerson[] = [
  {
    id: 1,
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    age: 28,
    address: {
      street: '123 Maple St',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
    },
  },
  {
    id: 2,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    age: 34,
    address: {
      street: '456 Oak St',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
    },
  },
  {
    id: 3,
    name: 'Carol Williams',
    email: 'carol.williams@example.com',
    age: 22,
    address: {
      street: '789 Pine St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
    },
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david.brown@example.com',
    age: 45,
    address: {
      street: '101 Maple Ave',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
  },
  {
    id: 5,
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
    age: 29,
    address: {
      street: '102 Elm St',
      city: 'Houston',
      state: 'TX',
      zip: '77001',
    },
  },
  {
    id: 6,
    name: 'Frank Miller',
    email: 'frank.miller@example.com',
    age: 33,
    address: {
      street: '103 Birch St',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85001',
    },
  },
  {
    id: 7,
    name: 'Grace Wilson',
    email: 'grace.wilson@example.com',
    age: 27,
    address: {
      street: '104 Cedar St',
      city: 'Philadelphia',
      state: 'PA',
      zip: '19101',
    },
  },
  {
    id: 8,
    name: 'Henry Moore',
    email: 'henry.moore@example.com',
    age: 40,
    address: {
      street: '105 Walnut St',
      city: 'San Antonio',
      state: 'TX',
      zip: '78201',
    },
  },
  {
    id: 9,
    name: 'Ivy Taylor',
    email: 'ivy.taylor@example.com',
    age: 31,
    address: {
      street: '106 Ash St',
      city: 'San Diego',
      state: 'CA',
      zip: '92101',
    },
  },
  {
    id: 10,
    name: 'Jack Anderson',
    email: 'jack.anderson@example.com',
    age: 37,
    address: {
      street: '107 Poplar St',
      city: 'Dallas',
      state: 'TX',
      zip: '75201',
    },
  },
];

export { DATA_SAMPLE_PEOPLE };

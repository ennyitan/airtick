export interface users {
    id: number;
    name: string
    username: string,
    website: string;
    email: string;
    phone: number;
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    },
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: number,
    },
}

export interface userStateInterface {
    users: { data: users[] } | null;
}
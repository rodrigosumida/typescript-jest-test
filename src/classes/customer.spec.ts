import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Rodrigo', 'Sumida', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Rodrigo');
    expect(sut).toHaveProperty('lastName', 'Sumida');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Rodrigo', 'Sumida', '111.111.111-11');
    expect(sut.getName()).toBe('Rodrigo Sumida');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Bundesliga', '15815165');
    expect(sut).toHaveProperty('name', 'Bundesliga');
    expect(sut).toHaveProperty('cnpj', '15815165');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Bundesliga', '15815165');
    expect(sut.getName()).toBe('Bundesliga');
    expect(sut.getIDN()).toBe('15815165');
  });
});

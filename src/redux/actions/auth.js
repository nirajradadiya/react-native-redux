export const login = (rent, tenant, landlord) => {
    return {
        type: 'ADD_POST',
        rent: rent,
        tenant: tenant,
        landlord: landlord
    };
};
const { SDL } = require('../../node_modules/@prisma/graphql-schema-generator');

const rules = {
  query: {
    User: {
      single: {
        function: 'whoAmI: User',
      },
      plural: {
        isGenerated: false,
      },
    },
  },
  beforeAddingTypeModifiers: [
    // Remove not public fields
    {
      matcher: (field) => {
        const { name } = field;
        switch (name) {
          case 'verifiedAt':
          case 'createdAt':
          case 'role':
          case 'password':
            return true;
          default:
            return false;
        }
      },
      transformer: (field) => {
        throw null;
      },
    },
  ],
  afterAddingTypeModifiers: [
    {
      matcher: (field) => {
        const { type } = field;

        if (/\[(\w+)!]!/gm.exec(type)) {
          return true;
        }

        return false;
      },
      transformer: (field) => {
        const { type } = field;

        const match = /\[(\w+)!]!/gm.exec(type);

        if (!match) {
          return field;
        }

        const [_, typeWithoutModifiers] = match;

        return { ...field, type: `[${typeWithoutModifiers}]` };
      },
    },
  ],
};

module.exports = { rules };

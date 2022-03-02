const { SDL } = require('../../node_modules/@prisma/graphql-schema-generator');

const rules = {
  public: {
    User: (params) => `
        type UserPublic {
          ${params}
          verified: Boolean
        }
      `,
  },
  query: {
    User: {
      single: {
        function: 'whoAmI: UserPublic',
      },
      plural: {
        isGenerated: false,
      },
    },
  },
  mutation: {
    User: {
      input: {
        add: [{ name: 'password', type: 'String' }],
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
          case 'verified':
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
};

module.exports = { rules };

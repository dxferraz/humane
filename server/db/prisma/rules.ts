const {
  SDL,
} = require('../../node_modules/@prisma-korea/graphql-schema-generator');

const rules = {
  beforeAddingTypeModifiers: [
    // Remove not public fields
    {
      matcher: (field) => {
        const { name } = field;

        switch (name) {
          case 'verifiedAt':
          case 'createdAt':
          case 'role':
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

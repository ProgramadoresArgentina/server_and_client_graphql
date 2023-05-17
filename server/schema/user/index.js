import models from "./models.js";
import queries from "./queries.js";
import resolvers from "./resolvers.js";
import mutations from "./mutations.js";
import { userRegisterInput, userLoginInput } from "./inputs.js";

export default {
  userResolvers: resolvers,
  userTypeDefs: [models, mutations, userRegisterInput, userLoginInput, queries],
};

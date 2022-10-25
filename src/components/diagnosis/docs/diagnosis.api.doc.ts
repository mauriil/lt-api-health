import { Endpoint } from "../../../common/commons.docs";

export const postCreateDiagnosis: Endpoint = {
  "/diagnosis/": {
    post: {
      tags: ["Diagnosis"],
      description: "Diagnosis create endpoint",
      operationId: "diagnosis",
      responses: {
        201: {
          description: "Success response, diagnosis created",
          content: {},
        },
        500: {
          description: "Error response, the microservice went in an error",
          content: {},
        },
      },
    },
  },
};


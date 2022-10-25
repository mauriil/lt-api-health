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

export const getDiagnosis: Endpoint = {
  "/diagnosis/:userId": {
    get: {
      tags: ["Diagnosis"],
      description: "Get all diagnosis by one user",
      operationId: "diagnosis",
      responses: {
        200: {
          description: "Success response",
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

export const patchDiagnosis: Endpoint = {
  "/diagnosis/:diagnosticId": {
    patch: {
      tags: ["Diagnosis"],
      description: "Confirm or deny am diagnosis",
      operationId: "diagnosis",
      responses: {
        200: {
          description: "Success response",
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


import { Endpoint } from "../../../common/commons.docs";

export const postLoginEndpoint: Endpoint = {
  "/users/login": {
    post: {
      tags: ["Users"],
      description: "Users login endpoint",
      operationId: "users",
      responses: {
        200: {
          description: "Success response, login succeed",
          content: {
            "application/json": {
              schema: {
                type: "object",
                items: {
                  data: [
                    {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        dealershipBusinessName: { type: "string" },
                        address: { type: "string" },
                        cnpj: { type: "string" },
                        country: { type: "string" },
                      },
                    },
                  ],
                },
                example: {
                  data: [
                    {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        dealershipBusinessName: { type: "string" },
                        address: { type: "string" },
                        cnpj: { type: "string" },
                        country: { type: "string" },
                      },
                    },
                  ],
                },
              },
            },
          },
        },
        500: {
          description: "Error response, the microservice is down",
          content: {},
        },
      },
    },
  },
};

export const postCreateUserEndpoint: Endpoint = {
  "/users/register": {
    post: {
      tags: ["Users"],
      description: "Endpoint to create a new user",
      operationId: "users",
      responses: {
        201: {
          description: "Success response, user created",
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

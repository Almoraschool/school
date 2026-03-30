import { GraphQLClient, request } from "graphql-request";

const headers = {
  Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
};

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!);

export async function server_query_function(query: any) {
  try {
    const response = await request(
      process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!,
      query,
      {
        headers,
      }
    );

    return response;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error("Failed to fetch");
    }
  }
}

export async function client_query_function(query: any) {
  try {
    const response = await hygraph.request(query, {
      headers,
    });
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      throw new Error(`${error.message}`);
    } else {
      throw new Error("Failed to fetch");
    }
  }
}

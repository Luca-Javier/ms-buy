import { ClientConfig, createClient } from "next-sanity"

const clientConfig: ClientConfig = {
  projectId: "ew7lkf6o",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-06-18",
}

export const client = createClient(clientConfig)

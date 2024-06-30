import { Client } from "@opensearch-project/opensearch";
import { randomActivityDocument } from "./random-activity-document";

// Fill the history index with random activity documents
const index = "history_index";
const numberOfDocuments = 1000;
const openSearchUrl = "http://localhost:9200";

const client = new Client({
  node: openSearchUrl,
});

async function indexDocumentsActivity() {
  console.time("Indexing Documents");

  for (let i = 0; i < numberOfDocuments; i++) {
    const response = await client.index({
      index,
      body: randomActivityDocument(),
    });
  }

  console.timeEnd("Indexing Documents");
  console.log(`Indexed ${numberOfDocuments} documents`);
}

indexDocumentsActivity();

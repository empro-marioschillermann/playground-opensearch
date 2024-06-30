import { Client } from "@opensearch-project/opensearch";
import { randomActivityDocuments } from "./random-activity-document";

// Fill the history index with random activity documents
const index = "history_index";
const numberOfDocuments = 1000;
const openSearchUrl = "http://localhost:9200";

const client = new Client({
  node: openSearchUrl,
});

async function indexDocumentsActivityBulk() {
  const documents = randomActivityDocuments(numberOfDocuments);
  const body = documents.flatMap((doc) => [{ index: { _index: index } }, doc]);

  console.time("Bulk Indexing Documents");

  await client.bulk({ refresh: true, body });

  console.timeEnd("Bulk Indexing Documents");
  console.log(`Indexed ${numberOfDocuments} documents`);
}

indexDocumentsActivityBulk();

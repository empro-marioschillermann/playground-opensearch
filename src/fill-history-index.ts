import { Client } from "@opensearch-project/opensearch";
import { v4 as uuidv4 } from "uuid";
import { firstName, lastName, fullName } from "full-name-generator";
import { LoremIpsum } from "lorem-ipsum";
import { generateSlug } from "random-word-slugs";

const client = new Client({
  node: "http://localhost:9200",
});

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const index = "history_index"; // Replace with your index name

function randomActivityDocument() {
  const tenantUuid = uuidv4();
  const entityUuid = uuidv4();
  const addressUuid = uuidv4();
  const ownerUuid = uuidv4();
  const groupUuid = uuidv4();
  const subsidiaryUuid = uuidv4();
  const activityModelTypeId = Math.floor(Math.random() * 20);
  const activityType = generateSlug(1);
  const historyType = "activity";

  return {
    uuid: tenantUuid + "_" + entityUuid,
    entityUuid,
    tenantUuid,
    historyType,
    activityType: activityType.toLowerCase(),
    date: new Date().toJSON(),
    addressUuids: [addressUuid],
    estateUuids: [],
    activityModel: {
      tenantUuid,
      entityUuid,
      date: new Date().toJSON(),
      type: {
        id: activityModelTypeId,
        value: activityType,
      },
      cost: 3,
      sourceInfo: {},
      text: lorem.generateSentences(5),
      addresses: [
        {
          entityUuid: addressUuid,
          recordType: "Person",
          contacts: [],
          firstName: firstName("DE", 0),
          lastName: lastName("DE"),
        },
      ],
      owner: {
        entityUuid: ownerUuid,
        firstName: firstName("DE", 1),
        lastName: lastName("DE"),
      },
      metadata: {
        changedDate: new Date().toJSON(),
        createdDate: new Date().toJSON(),
        ownedBy: {
          userUuid: ownerUuid,
          moreUserUuids: [],
          subsidiaryUuid: subsidiaryUuid,
          moreGroupUuids: [],
          groupUuid,
        },
        createdBy: {
          userUuid: ownerUuid,
          subsidiaryUuid: subsidiaryUuid,
        },
        version: 1,
        changedBy: {
          userUuid: ownerUuid,
          subsidiaryUuid: subsidiaryUuid,
        },
      },
      hasMoreAddresses: false,
      hasMoreEstates: false,
      allAddressUuids: [addressUuid],
      allEstateUuids: [],
      historyType,
    },
    metadata: {
      changedDate: new Date().toJSON(),
      createdDate: new Date().toJSON(),
      ownedBy: {
        userUuid: ownerUuid,
        moreUserUuids: [],
        subsidiaryUuid: subsidiaryUuid,
        moreGroupUuids: [],
        groupUuid,
      },
      createdBy: {
        userUuid: ownerUuid,
        subsidiaryUuid: subsidiaryUuid,
      },
      version: 1,
      changedBy: {
        userUuid: ownerUuid,
        subsidiaryUuid: subsidiaryUuid,
      },
    },
    ownerUuids: [ownerUuid, subsidiaryUuid, groupUuid],
  };
}

async function fillHistoryIndex(numberOfDocuments = 10000000) {
  for (let i = 0; i < numberOfDocuments; i++) {
    const response = await client.index({
      index,
      body: randomActivityDocument(),
    });

    console.log(i + ". Document inserted");
  }
}

fillHistoryIndex();

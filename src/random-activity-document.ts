import { v4 as uuidv4 } from "uuid";
import { generateSlug } from "random-word-slugs";
import { LoremIpsum } from "lorem-ipsum";
import { firstName, lastName } from "full-name-generator";

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

export function randomActivityDocument() {
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

export function randomActivityDocuments(
  numberOfDocuments: number
): Array<Object> {
  const activityDocuments = [];
  for (let i = 0; i < numberOfDocuments; i++) {
    activityDocuments.push(randomActivityDocument());
  }
  return activityDocuments;
}

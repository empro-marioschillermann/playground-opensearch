import { Client } from "@opensearch-project/opensearch";

const index = "optimized_history_index";
const openSearchUrl = "http://localhost:9200";

const client = new Client({
  node: openSearchUrl,
});

const indexSettings = {
  mappings: {
    properties: {
      activityModel: {
        properties: {
          addresses: {
            properties: {
              city: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              companyName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              contacts: {
                properties: {
                  alwaysVisible: {
                    type: "boolean",
                  },
                  comment: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  contactMedium: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  contactType: {
                    properties: {
                      id: {
                        type: "long",
                      },
                      value: {
                        type: "text",
                        fields: {
                          keyword: {
                            type: "keyword",
                            ignore_above: 256,
                          },
                        },
                      },
                    },
                  },
                  infoText: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  sortingIndex: {
                    type: "long",
                  },
                },
              },
              entityUuid: {
                type: "keyword",
              },
              firstName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              lastName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              nameAddition1: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              nameAddition2: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              parentCompany: {
                properties: {
                  entityUuid: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  name: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                },
              },
              partnerFirstName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              partnerLastName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              recordType: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              street: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              zipCode: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          allAddressUuids: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          allEstateUuids: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          cost: {
            type: "long",
          },
          date: {
            type: "date",
          },
          entityUuid: {
            type: "keyword",
          },
          estates: {
            properties: {
              city: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              distributionType: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              entityUuid: {
                type: "keyword",
              },
              offererMarketingKey: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              postalCode: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              recordType: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              street: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          hasMoreAddresses: {
            type: "boolean",
          },
          hasMoreEstates: {
            type: "boolean",
          },
          historyType: {
            type: "keyword",
          },
          metadata: {
            properties: {
              changedBy: {
                properties: {
                  subsidiaryUuid: {
                    type: "keyword",
                  },
                  userUuid: {
                    type: "keyword",
                  },
                },
              },
              changedDate: {
                type: "date",
              },
              createdBy: {
                properties: {
                  subsidiaryUuid: {
                    type: "keyword",
                  },
                  userUuid: {
                    type: "keyword",
                  },
                },
              },
              createdDate: {
                type: "date",
              },
              ownedBy: {
                properties: {
                  groupUuid: {
                    type: "keyword",
                  },
                  moreGroupUuids: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  moreUserUuids: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  subsidiaryUuid: {
                    type: "keyword",
                  },
                  userUuid: {
                    type: "keyword",
                  },
                },
              },
              version: {
                type: "long",
              },
            },
          },
          origin: {
            properties: {
              id: {
                type: "long",
              },
              value: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          owner: {
            properties: {
              entityUuid: {
                type: "keyword",
              },
              firstName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              lastName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          sourceInfo: {
            properties: {
              id: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              name: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          tenantUuid: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          text: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          type: {
            properties: {
              id: {
                type: "long",
              },
              value: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
        },
      },
      activityType: {
        type: "keyword",
      },
      addressUuids: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      date: {
        type: "date",
      },
      emailMessageModel: {
        properties: {
          activityTypeId: {
            type: "long",
          },
          addressUuids: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          addresses: {
            properties: {
              city: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              companyName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              contacts: {
                properties: {
                  alwaysVisible: {
                    type: "boolean",
                  },
                  comment: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  contactMedium: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  contactType: {
                    properties: {
                      id: {
                        type: "long",
                      },
                      value: {
                        type: "text",
                        fields: {
                          keyword: {
                            type: "keyword",
                            ignore_above: 256,
                          },
                        },
                      },
                    },
                  },
                  infoText: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  sortingIndex: {
                    type: "long",
                  },
                },
              },
              entityUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              firstName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              lastName: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              parentCompany: {
                properties: {
                  entityUuid: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                },
              },
              recordType: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              street: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              tenantUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              zipCode: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          attachments: {
            properties: {
              accountUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              contentId: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              contentType: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              entityUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              filename: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              isInline: {
                type: "boolean",
              },
              messageNylasId: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              messageUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              nylasId: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              size: {
                type: "long",
              },
              tenantUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          bcc: {
            properties: {
              email: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          cc: {
            properties: {
              email: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              name: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          date: {
            type: "date",
          },
          emailAccountUuid: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          entityUuid: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          estateUuids: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          estates: {
            properties: {
              active: {
                type: "boolean",
              },
              city: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              distributionType: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              entityUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              estateType: {
                properties: {
                  id: {
                    type: "long",
                  },
                  value: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                },
              },
              offererMarketingKey: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              postalCode: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              prices: {
                properties: {
                  buy: {
                    properties: {
                      price: {
                        type: "object",
                      },
                      rentalIncome: {
                        properties: {
                          priceTimeUnit: {
                            type: "text",
                            fields: {
                              keyword: {
                                type: "keyword",
                                ignore_above: 256,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  buyerTenantFee: {
                    type: "object",
                  },
                  currency: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                },
              },
              recordType: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              street: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              tenantUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          folder: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          folders: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          from: {
            properties: {
              email: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              name: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          historyType: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          isDraft: {
            type: "boolean",
          },
          isEmlSaved: {
            type: "boolean",
          },
          lastFailureMessage: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          nylasId: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          nylasThreadId: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          replyTo: {
            properties: {
              email: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              name: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          snippet: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          starred: {
            type: "boolean",
          },
          subject: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          tenantUuid: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          to: {
            properties: {
              email: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              name: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          tracking: {
            properties: {
              opens: {
                properties: {
                  date: {
                    type: "date",
                  },
                  ip: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                  openedId: {
                    type: "long",
                  },
                  userAgent: {
                    type: "text",
                    fields: {
                      keyword: {
                        type: "keyword",
                        ignore_above: 256,
                      },
                    },
                  },
                },
              },
            },
          },
          unread: {
            type: "boolean",
          },
          useDraft: {
            type: "boolean",
          },
          userUuid: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          variableContextIds: {
            properties: {
              address: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              estate: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
        },
      },
      entityUuid: {
        type: "keyword",
      },
      estateUuids: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      historyType: {
        type: "keyword",
      },
      metadata: {
        properties: {
          changedBy: {
            properties: {
              subsidiaryUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              userUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          changedDate: {
            type: "date",
          },
          createdBy: {
            properties: {
              subsidiaryUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              userUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          createdDate: {
            type: "date",
          },
          ownedBy: {
            properties: {
              groupUuid: {
                type: "keyword",
              },
              moreGroupUuids: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              moreUserUuids: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
              subsidiaryUuid: {
                type: "keyword",
              },
              userUuid: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          version: {
            type: "long",
          },
        },
      },
      ownerUuids: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      tenantUuid: {
        type: "keyword",
      },
      uuid: {
        type: "keyword",
      },
    },
  },
};

async function createOptimizedHistoryIndex() {
  console.time("Creating Index");
  const response = await client.indices.create({
    index,
    body: indexSettings,
  });
  console.timeEnd("Creating Index");

  console.log(`Index "${index}" created successfully!`);
  console.log(response);
}

createOptimizedHistoryIndex();

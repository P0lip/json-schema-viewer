import { JSONSchema4 } from "json-schema";

export const stressSchema: JSONSchema4 = {
  title: "Confirmation Combined",
  allOf: [
    {
      title: "Confirmation Base",
      description: "",
      type: "object",
      properties: {
        confirmationId: {
          type: "string",
          description: "System of record confirmation Id"
        },
        partyId: {
          type: "string"
        },
        systemOfRecord: {
          title: "System Of Record",
          type: "string",
          enum: [
            "LOREM",
            "HEART",
            "IPSUM_CENTER",
            "SECURITY",
            "BAR",
            "FOO",
            "BUDDY",
            "BONUS"
          ]
        },
        systemOfRecordTransactionDate: {
          title: "Date Time Extended",
          type: "object",
          properties: {
            value: {
              type: "string",
              format: "date-time"
            },
            format: {
              type: "string",
              enum: [
                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                "yyyy-MM-dd'T'HH:mm'Z'",
                "yyyy-MM-dd'T'HH",
                "yyyy-MM-dd",
                "yyyy-MM",
                "yyyy"
              ]
            },
            minValue: {
              type: "string"
            },
            maxValue: {
              type: "string"
            },
            defaultValue: {
              type: "string"
            }
          },
          required: ["value"]
        },
        dateOfLoss: {
          title: "Date Time Extended",
          type: "object",
          properties: {
            value: {
              type: "string",
              format: "date-time"
            },
            format: {
              type: "string",
              enum: [
                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                "yyyy-MM-dd'T'HH:mm'Z'",
                "yyyy-MM-dd'T'HH",
                "yyyy-MM-dd",
                "yyyy-MM",
                "yyyy"
              ]
            },
            minValue: {
              type: "string"
            },
            maxValue: {
              type: "string"
            },
            defaultValue: {
              type: "string"
            }
          },
          required: ["value"]
        },
        reportedDate: {
          title: "Date Time Extended",
          type: "object",
          properties: {
            value: {
              type: "string",
              format: "date-time"
            },
            format: {
              type: "string",
              enum: [
                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                "yyyy-MM-dd'T'HH:mm'Z'",
                "yyyy-MM-dd'T'HH",
                "yyyy-MM-dd",
                "yyyy-MM",
                "yyyy"
              ]
            },
            minValue: {
              type: "string"
            },
            maxValue: {
              type: "string"
            },
            defaultValue: {
              type: "string"
            }
          },
          required: ["value"]
        },
        effectiveDate: {
          title: "Date Time Extended",
          type: "object",
          properties: {
            value: {
              type: "string",
              format: "date-time"
            },
            format: {
              type: "string",
              enum: [
                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                "yyyy-MM-dd'T'HH:mm'Z'",
                "yyyy-MM-dd'T'HH",
                "yyyy-MM-dd",
                "yyyy-MM",
                "yyyy"
              ]
            },
            minValue: {
              type: "string"
            },
            maxValue: {
              type: "string"
            },
            defaultValue: {
              type: "string"
            }
          },
          required: ["value"]
        },
        exportedAt: {
          type: "string",
          format: "date-time",
          description:
            "When was this record exported out from the System of Record source. Format should be in UTC and as per ISO 8601/RFC3339 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')"
        },
        isInsuredAtFault: {
          type: "boolean",
          description:
            "Indicates whether or not the insured is to blame for the loss/accident"
        },
        lossCause: {
          type: "object",
          description: "System of record loss code and its description",
          properties: {
            code: {
              type: "string"
            },
            codeDescription: {
              type: "string"
            }
          },
          required: ["code", "codeDescription"]
        },
        status: {
          type: "string",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum, arcu sit amet cursus dictum, libero ex vestibulum arcu, at elementum odio leo vel risus. Maecenas mi ipsum, vehicula ac dui sit amet, mattis ultricies lorem. Duis nec laoreet diam. Integer id aliquet tellus. Aliquam varius augue id mauris molestie, ac consectetur nulla vestibulum. Nulla lorem diam, euismod eget massa non, pulvinar tincidunt diam. Ut euismod augue at eros mattis, congue aliquet nisi pulvinar. Nam quis neque elit. Suspendisse pretium cursus dolor, eget vehicula sapien tristique ac. Ut eget varius ex, faucibus pharetra magna.",
          enum: [
            "ARCHIVED",
            "CLOSED",
            "OPEN",
            "DRAFT",
            "CANCELLED",
            "INSTALMENT",
            "LAPSED",
            "PENDING",
            "REFUSED",
            "SPANISH",
            "LITIGATION",
            "REOPENED",
            "NOTIFICATION"
          ]
        },
        confirmationHandler: {
          type: "string",
          description:
            "String that identifies the employee that is handling the confirmation.\nIn HEART, this will be the person's initials. In Lorem, this will be a full name"
        },
        costOfConfirmation: {
          title: "Amount Extended",
          type: "object",
          properties: {
            amount: {
              type: "number"
            },
            currencyCode: {
              type: "string"
            },
            isGSTInclusive: {
              type: "boolean"
            },
            GSTAmount: {
              type: "number"
            },
            GSTPercentageApplicable: {
              type: "number"
            },
            description: {
              type: "string"
            }
          },
          required: ["amount"]
        },
        insurancePolicy: {
          type: "object",
          properties: {
            insurancePolicyId: {
              type: "string",
              description: "Bird ID of Policy"
            },
            systemOfRecord: {
              title: "System Of Record",
              type: "string",
              enum: [
                "LOREM",
                "HEART",
                "IPSUM_CENTER",
                "SECURITY",
                "BAR",
                "FOO",
                "BUDDY",
                "BONUS"
              ]
            },
            policyId: {
              type: "string",
              description: "systemOfRecord ID"
            },
            riskId: {
              type: "string",
              description: ""
            },
            riskGroupId: {
              type: "string"
            }
          },
          required: ["systemOfRecord", "policyId"]
        },
        underlyingInsurancePolicy: {
          title: "Insurance Policy Base",
          description:
            "An agreement **individual agreement**, **commercial agreement** or **group agreement** between an *insurer* and a *policyholder* based on a *financial services product*. The agreement specifies the obligation of the *insurer* to pay benefits and of the **premium payer** to pay premiums.",
          type: "object",
          properties: {
            policyId: {
              type: "string",
              description:
                "The policy reference number for the insurance policy. Each policy number can include multiple products under one policy reference"
            },
            systemOfRecord: {
              title: "System Of Record",
              type: "string",
              enum: [
                "LOREM",
                "HEART",
                "IPSUM_CENTER",
                "SECURITY",
                "BAR",
                "FOO",
                "BUDDY",
                "BONUS"
              ]
            },
            systemOfRecordTransactionDate: {
              title: "Date Time Extended",
              type: "object",
              properties: {
                value: {
                  type: "string",
                  format: "date-time"
                },
                format: {
                  type: "string",
                  enum: [
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                    "yyyy-MM-dd'T'HH:mm'Z'",
                    "yyyy-MM-dd'T'HH",
                    "yyyy-MM-dd",
                    "yyyy-MM",
                    "yyyy"
                  ]
                },
                minValue: {
                  type: "string"
                },
                maxValue: {
                  type: "string"
                },
                defaultValue: {
                  type: "string"
                }
              },
              required: ["value"]
            },
            originalInceptionDate: {
              title: "Date Time Extended",
              type: "object",
              properties: {
                value: {
                  type: "string",
                  format: "date-time"
                },
                format: {
                  type: "string",
                  enum: [
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                    "yyyy-MM-dd'T'HH:mm'Z'",
                    "yyyy-MM-dd'T'HH",
                    "yyyy-MM-dd",
                    "yyyy-MM",
                    "yyyy"
                  ]
                },
                minValue: {
                  type: "string"
                },
                maxValue: {
                  type: "string"
                },
                defaultValue: {
                  type: "string"
                }
              },
              required: ["value"]
            },
            inceptionDate: {
              title: "Date Time Extended",
              type: "object",
              properties: {
                value: {
                  type: "string",
                  format: "date-time"
                },
                format: {
                  type: "string",
                  enum: [
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                    "yyyy-MM-dd'T'HH:mm'Z'",
                    "yyyy-MM-dd'T'HH",
                    "yyyy-MM-dd",
                    "yyyy-MM",
                    "yyyy"
                  ]
                },
                minValue: {
                  type: "string"
                },
                maxValue: {
                  type: "string"
                },
                defaultValue: {
                  type: "string"
                }
              },
              required: ["value"]
            },
            expiryDate: {
              title: "Date Time Extended",
              type: "object",
              properties: {
                value: {
                  type: "string",
                  format: "date-time"
                },
                format: {
                  type: "string",
                  enum: [
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                    "yyyy-MM-dd'T'HH:mm'Z'",
                    "yyyy-MM-dd'T'HH",
                    "yyyy-MM-dd",
                    "yyyy-MM",
                    "yyyy"
                  ]
                },
                minValue: {
                  type: "string"
                },
                maxValue: {
                  type: "string"
                },
                defaultValue: {
                  type: "string"
                }
              },
              required: ["value"]
            },
            effectiveDate: {
              title: "Date Time Extended",
              type: "object",
              properties: {
                value: {
                  type: "string",
                  format: "date-time"
                },
                format: {
                  type: "string",
                  enum: [
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                    "yyyy-MM-dd'T'HH:mm'Z'",
                    "yyyy-MM-dd'T'HH",
                    "yyyy-MM-dd",
                    "yyyy-MM",
                    "yyyy"
                  ]
                },
                minValue: {
                  type: "string"
                },
                maxValue: {
                  type: "string"
                },
                defaultValue: {
                  type: "string"
                }
              },
              required: ["value"]
            },
            cancellationDate: {
              title: "Date Time Extended",
              type: "object",
              properties: {
                value: {
                  type: "string",
                  format: "date-time"
                },
                format: {
                  type: "string",
                  enum: [
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                    "yyyy-MM-dd'T'HH:mm'Z'",
                    "yyyy-MM-dd'T'HH",
                    "yyyy-MM-dd",
                    "yyyy-MM",
                    "yyyy"
                  ]
                },
                minValue: {
                  type: "string"
                },
                maxValue: {
                  type: "string"
                },
                defaultValue: {
                  type: "string"
                }
              },
              required: ["value"]
            },
            reviewDate: {
              title: "Date Time Extended",
              type: "object",
              properties: {
                value: {
                  type: "string",
                  format: "date-time"
                },
                format: {
                  type: "string",
                  enum: [
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                    "yyyy-MM-dd'T'HH:mm'Z'",
                    "yyyy-MM-dd'T'HH",
                    "yyyy-MM-dd",
                    "yyyy-MM",
                    "yyyy"
                  ]
                },
                minValue: {
                  type: "string"
                },
                maxValue: {
                  type: "string"
                },
                defaultValue: {
                  type: "string"
                }
              },
              required: ["value"]
            },
            exportedAt: {
              type: "string",
              description:
                "The current view of the policy as at the effective date. When was this record exported out from the System of Record source. Format should be in UTC and as per ISO 8601/RFC3339 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')",
              format: "date-time"
            },
            customerId: {
              type: "string",
              description:
                "Client reference number which signifies the policy owner"
            },
            brand: {
              title: "Brand",
              type: "string",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum, arcu sit amet cursus dictum, libero ex vestibulum arcu, at elementum odio leo vel risus. Maecenas mi ipsum, vehicula ac dui sit amet, mattis ultricies lorem. Duis nec laoreet diam. Integer id aliquet tellus. Aliquam varius augue id mauris molestie, ac consectetur nulla vestibulum. Nulla lorem diam, euismod eget massa non, pulvinar tincidunt diam. Ut euismod augue at eros mattis, congue aliquet nisi pulvinar. Nam quis neque elit. Suspendisse pretium cursus dolor, eget vehicula sapien tristique ac. Ut eget varius ex, faucibus pharetra magna.",
              enum: [
                "AMI",
                "STATE",
                "NZI",
                "ANY",
                "ASB",
                "BNZ",
                "COOPERATIVE",
                "LUMLEY",
                "IAG",
                "MGA",
                "PSIS",
                "WESTPAC"
              ]
            },
            partyLists: {
              type: "array",
              items: {
                type: "object",
                title: "Party List",
                properties: {
                  partyId: {
                    type: "string"
                  },
                  systemOfRecord: {
                    title: "System Of Record",
                    type: "string",
                    enum: [
                      "LOREM",
                      "HEART",
                      "IPSUM_CENTER",
                      "SECURITY",
                      "BAR",
                      "FOO",
                      "BUDDY",
                      "BONUS"
                    ]
                  },
                  partyRoles: {
                    type: "array",
                    items: {
                      title: "Party Role",
                      type: "string",
                      enum: [
                        "CUSTOMER",
                        "INSURED",
                        "ADDITIONAL_INSURED",
                        "NAMED_DRIVER",
                        "PRIMARY_CONTACT",
                        "SECONDARY_CONTACT",
                        "AUTHORISER",
                        "NAMED_PARTY"
                      ]
                    }
                  },
                  externalReferences: {
                    type: "array",
                    items: {
                      title: "External Reference",
                      description: "",
                      type: "object",
                      properties: {
                        namespace: {
                          description: "A namespace for the identifier.",
                          type: "string"
                        },
                        identifier: {
                          description: "An identifier for the entity",
                          type: "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            externalReferences: {
              description: "",
              type: "array",
              items: {
                title: "External Reference",
                description: "",
                type: "object",
                properties: {
                  namespace: {
                    description: "A namespace for the identifier.",
                    type: "string"
                  },
                  identifier: {
                    description: "An identifier for the entity",
                    type: "string"
                  }
                }
              }
            },
            hasAcceptedTerms: {
              type: "boolean",
              description: "Has the customer accepted Terms and Conditions?"
            },
            beenAdvisedOfDetails: {
              type: "boolean"
            },
            renewablePeriod: {
              type: "string",
              description:
                "Frequency at which the policy renews eg. Annual policy will renew fortnightly"
            },
            insuredRiskGroups: {
              type: "array",
              description:
                "An insurance policy can cover several assets; each asset is represented by an insured risk.\nAn insured risk group relates to a specific type of cover. Each risk group usually represents a specific product risk included under the policy.\nMajority of the insurance policies, especially for personal lines insurance products, include a single insured risk under an insured risk group.\n\nA contract component detailing the circumstances under which a benefit (money or services) will be paid. Effectively this provides protection against a particular risk. In property insurance, coverage identifies elements such as perils insured against, properties covered, locations covered, individuals insured and the limits of indemnification. In life insurance, a coverage identifies elements such as living and death benefits. In **GuideWire**, this is also known as *Coverable* or a *Group*",
              items: {
                type: "object",
                title: "Insured Risk Group",
                properties: {
                  riskGroupId: {
                    type: "string",
                    description:
                      "A unique identifier for the insured risk group under an insurance policy. Usually identified as a risk number"
                  },
                  riskGroupType: {
                    title: "Risk Type",
                    type: "string",
                    description: "",
                    enum: [
                      "COMMERCIAL_VEHICLE",
                      "PRIVATE_VEHICLE",
                      "HOME",
                      "CONTENTS",
                      "BUSINESS_ASSETS",
                      "GENERAL_LIABILITY",
                      "STATUTORY_LIABILITY",
                      "EMPLOYERS_LIABILITY",
                      "BUSINESS_INTERRUPTION",
                      "PLEASUREKRAFT",
                      "MOBILE_BUSINESS_ASSETS",
                      "LIABILITY",
                      "MARINE",
                      "LIABILITY",
                      "CONTRACT_WORKS",
                      "DETERIORATION",
                      "ELECTRONIC_EQUIPMENT",
                      "INCOME_PROTECTION",
                      "MACHINERY_BREAKDOWN",
                      "CARRIERS_LIABILITY"
                    ]
                  },
                  attachmentDate: {
                    title: "Date Time Extended",
                    type: "object",
                    properties: {
                      value: {
                        type: "string",
                        format: "date-time"
                      },
                      format: {
                        type: "string",
                        enum: [
                          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                          "yyyy-MM-dd'T'HH:mm:ss'Z'",
                          "yyyy-MM-dd'T'HH:mm'Z'",
                          "yyyy-MM-dd'T'HH",
                          "yyyy-MM-dd",
                          "yyyy-MM",
                          "yyyy"
                        ]
                      },
                      minValue: {
                        type: "string"
                      },
                      maxValue: {
                        type: "string"
                      },
                      defaultValue: {
                        type: "string"
                      }
                    },
                    required: ["value"]
                  },
                  effectiveDate: {
                    title: "Date Time Extended",
                    type: "object",
                    properties: {
                      value: {
                        type: "string",
                        format: "date-time"
                      },
                      format: {
                        type: "string",
                        enum: [
                          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                          "yyyy-MM-dd'T'HH:mm:ss'Z'",
                          "yyyy-MM-dd'T'HH:mm'Z'",
                          "yyyy-MM-dd'T'HH",
                          "yyyy-MM-dd",
                          "yyyy-MM",
                          "yyyy"
                        ]
                      },
                      minValue: {
                        type: "string"
                      },
                      maxValue: {
                        type: "string"
                      },
                      defaultValue: {
                        type: "string"
                      }
                    },
                    required: ["value"]
                  },
                  endDate: {
                    title: "Date Time Extended",
                    type: "object",
                    properties: {
                      value: {
                        type: "string",
                        format: "date-time"
                      },
                      format: {
                        type: "string",
                        enum: [
                          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                          "yyyy-MM-dd'T'HH:mm:ss'Z'",
                          "yyyy-MM-dd'T'HH:mm'Z'",
                          "yyyy-MM-dd'T'HH",
                          "yyyy-MM-dd",
                          "yyyy-MM",
                          "yyyy"
                        ]
                      },
                      minValue: {
                        type: "string"
                      },
                      maxValue: {
                        type: "string"
                      },
                      defaultValue: {
                        type: "string"
                      }
                    },
                    required: ["value"]
                  },
                  externalReferences: {
                    description: "This is thirdPartyRiskID",
                    type: "array",
                    items: {
                      title: "External Reference",
                      description: "",
                      type: "object",
                      properties: {
                        namespace: {
                          description: "A namespace for the identifier.",
                          type: "string"
                        },
                        identifier: {
                          description: "An identifier for the entity",
                          type: "string"
                        }
                      }
                    }
                  },
                  notes: {
                    type: "array",
                    items: {
                      title: "Note",
                      description: "",
                      type: "object",
                      properties: {
                        effectiveDate: {
                          title: "Date Time Extended",
                          type: "object",
                          properties: {
                            value: {
                              type: "string",
                              format: "date-time"
                            },
                            format: {
                              type: "string",
                              enum: [
                                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                "yyyy-MM-dd'T'HH:mm'Z'",
                                "yyyy-MM-dd'T'HH",
                                "yyyy-MM-dd",
                                "yyyy-MM",
                                "yyyy"
                              ]
                            },
                            minValue: {
                              type: "string"
                            },
                            maxValue: {
                              type: "string"
                            },
                            defaultValue: {
                              type: "string"
                            }
                          },
                          required: ["value"]
                        },
                        text: {
                          type: "string"
                        },
                        externalReferences: {
                          description: "",
                          type: "array",
                          items: {
                            title: "External Reference",
                            description: "",
                            type: "object",
                            properties: {
                              namespace: {
                                description: "A namespace for the identifier.",
                                type: "string"
                              },
                              identifier: {
                                description: "An identifier for the entity",
                                type: "string"
                              }
                            }
                          }
                        },
                        forInternalUse: {
                          type: "boolean"
                        }
                      }
                    }
                  },
                  insuredRisks: {
                    description:
                      "An insured risk represents an asset covered by this insurance policy.\n\nThe list of each insured risk under the insurance policy",
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        riskId: {
                          type: "string",
                          description:
                            "A unique identifier for the insured risk group under an insured risk group. Usually identified as a risk number"
                        },
                        lineOfBusinessCategory: {
                          title: "Line Of Business Category",
                          type: "string",
                          enum: [
                            "COMMERCIAL_VEHICLE",
                            "PRIVATE_VEHICLE",
                            "HOME",
                            "CONTENTS",
                            "LIABILITY",
                            "PLEASUREKRAFT",
                            "BUSINESS_ASSETS",
                            "MOBILE_BUSINESS_ASSETS",
                            "BUSINESS_INTERRUPTION",
                            "MARINE",
                            "COMMERCIAL_PROPERTY"
                          ]
                        },
                        attachmentDate: {
                          title: "Date Time Extended",
                          type: "object",
                          properties: {
                            value: {
                              type: "string",
                              format: "date-time"
                            },
                            format: {
                              type: "string",
                              enum: [
                                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                "yyyy-MM-dd'T'HH:mm'Z'",
                                "yyyy-MM-dd'T'HH",
                                "yyyy-MM-dd",
                                "yyyy-MM",
                                "yyyy"
                              ]
                            },
                            minValue: {
                              type: "string"
                            },
                            maxValue: {
                              type: "string"
                            },
                            defaultValue: {
                              type: "string"
                            }
                          },
                          required: ["value"]
                        },
                        rateDate: {
                          title: "Date Only Extended",
                          type: "object",
                          properties: {
                            value: {
                              type: "string",
                              format: "date"
                            },
                            format: {
                              type: "string",
                              enum: ["yyyy-MM-dd", "yyyy-MM", "yyyy"]
                            }
                          },
                          required: ["value"]
                        },
                        endDate: {
                          title: "Date Time Extended",
                          type: "object",
                          properties: {
                            value: {
                              type: "string",
                              format: "date-time"
                            },
                            format: {
                              type: "string",
                              enum: [
                                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                "yyyy-MM-dd'T'HH:mm'Z'",
                                "yyyy-MM-dd'T'HH",
                                "yyyy-MM-dd",
                                "yyyy-MM",
                                "yyyy"
                              ]
                            },
                            minValue: {
                              type: "string"
                            },
                            maxValue: {
                              type: "string"
                            },
                            defaultValue: {
                              type: "string"
                            }
                          },
                          required: ["value"]
                        },
                        placesInvolved: {
                          description: "",
                          type: "array",
                          items: {
                            title: "Place",
                            type: "object",
                            properties: {
                              address: {
                                title: "Address Output",
                                allOf: [
                                  {
                                    type: "object",
                                    properties: {
                                      id: {
                                        type: "string"
                                      }
                                    }
                                  },
                                  {
                                    title: "Address Base",
                                    description: "",
                                    type: "object",
                                    properties: {
                                      addressId: {
                                        description: "",
                                        type: "string"
                                      },
                                      addressPurpose: {
                                        title: "Address Purpose",
                                        type: "string",
                                        enum: [
                                          "BILLING",
                                          "BUSINESS",
                                          "HOME",
                                          "OTHER",
                                          "MAILING",
                                          "CONTACT"
                                        ]
                                      },
                                      boxNumber: {
                                        type: "string"
                                      },
                                      boxType: {
                                        type: "string"
                                      },
                                      buildingName: {
                                        type: "string"
                                      },
                                      city: {
                                        type: "string"
                                      },
                                      country: {
                                        type: "string"
                                      },
                                      deliveryType: {
                                        type: "string",
                                        enum: [
                                          "PO_BOX",
                                          "PRIVATE_BAG",
                                          "RESPONSE_BAG",
                                          "CMB",
                                          "COUNTER_DELIVERY",
                                          "POST_BOX",
                                          "RURAL"
                                        ]
                                      },
                                      description: {
                                        type: "string"
                                      },
                                      levelNumber: {
                                        type: "string"
                                      },
                                      levelType: {
                                        type: "string"
                                      },
                                      lobbyName: {
                                        type: "string"
                                      },
                                      postalCode: {
                                        type: "string"
                                      },
                                      region: {
                                        type: "string"
                                      },
                                      ruralDelivery: {
                                        type: "string"
                                      },
                                      ruralDistrict: {
                                        type: "string"
                                      },
                                      status: {
                                        type: "string"
                                      },
                                      streetName: {
                                        type: "string"
                                      },
                                      streetNumber: {
                                        type: "string"
                                      },
                                      streetNumberSuffix: {
                                        type: "string"
                                      },
                                      streetSuffix: {
                                        type: "string"
                                      },
                                      streetType: {
                                        type: "string"
                                      },
                                      subregion: {
                                        type: "string"
                                      },
                                      unitNumber: {
                                        type: "string"
                                      },
                                      unitType: {
                                        type: "string"
                                      },
                                      unstructured: {
                                        description:
                                          "An address represented in a single string",
                                        type: "string"
                                      },
                                      displayAddress: {
                                        type: "array",
                                        items: {
                                          type: "string"
                                        }
                                      },
                                      externalReferences: {
                                        type: "array",
                                        items: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/external-reference"
                                        }
                                      },
                                      geoLocation: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/geo-location"
                                      },
                                      sourceId: {
                                        type: "string"
                                      },
                                      sourceType: {
                                        type: "string",
                                        description: "Can be Google, DPID etc"
                                      },
                                      rateLocation: {
                                        type: "string"
                                      }
                                    }
                                  }
                                ]
                              },
                              placeType: {
                                type: "string",
                                enum: [
                                  "GARAGE_LOCATION",
                                  "PHYSICAL_LOCATION",
                                  "EXPORT_DESTINATION",
                                  "IMPORT_SOURCE",
                                  "STORAGE_LOCATION"
                                ]
                              }
                            }
                          }
                        },
                        interestedParties: {
                          description: "",
                          type: "array",
                          items: {
                            title: "Interested Party",
                            description: "",
                            type: "object",
                            properties: {
                              id: {
                                type: "string"
                              },
                              name: {
                                type: "string"
                              },
                              address: {
                                title: "Address Output",
                                allOf: [
                                  {
                                    type: "object",
                                    properties: {
                                      id: {
                                        type: "string"
                                      }
                                    }
                                  },
                                  {
                                    title: "Address Base",
                                    description: "",
                                    type: "object",
                                    properties: {
                                      addressId: {
                                        description: "",
                                        type: "string"
                                      },
                                      addressPurpose: {
                                        title: "Address Purpose",
                                        type: "string",
                                        enum: [
                                          "BILLING",
                                          "BUSINESS",
                                          "HOME",
                                          "OTHER",
                                          "MAILING",
                                          "CONTACT"
                                        ]
                                      },
                                      boxNumber: {
                                        type: "string"
                                      },
                                      boxType: {
                                        type: "string"
                                      },
                                      buildingName: {
                                        type: "string"
                                      },
                                      city: {
                                        type: "string"
                                      },
                                      country: {
                                        type: "string"
                                      },
                                      deliveryType: {
                                        type: "string",
                                        enum: [
                                          "PO_BOX",
                                          "PRIVATE_BAG",
                                          "RESPONSE_BAG",
                                          "CMB",
                                          "COUNTER_DELIVERY",
                                          "POST_BOX",
                                          "RURAL"
                                        ]
                                      },
                                      description: {
                                        type: "string"
                                      },
                                      levelNumber: {
                                        type: "string"
                                      },
                                      levelType: {
                                        type: "string"
                                      },
                                      lobbyName: {
                                        type: "string"
                                      },
                                      postalCode: {
                                        type: "string"
                                      },
                                      region: {
                                        type: "string"
                                      },
                                      ruralDelivery: {
                                        type: "string"
                                      },
                                      ruralDistrict: {
                                        type: "string"
                                      },
                                      status: {
                                        type: "string"
                                      },
                                      streetName: {
                                        type: "string"
                                      },
                                      streetNumber: {
                                        type: "string"
                                      },
                                      streetNumberSuffix: {
                                        type: "string"
                                      },
                                      streetSuffix: {
                                        type: "string"
                                      },
                                      streetType: {
                                        type: "string"
                                      },
                                      subregion: {
                                        type: "string"
                                      },
                                      unitNumber: {
                                        type: "string"
                                      },
                                      unitType: {
                                        type: "string"
                                      },
                                      unstructured: {
                                        description:
                                          "An address represented in a single string",
                                        type: "string"
                                      },
                                      displayAddress: {
                                        type: "array",
                                        items: {
                                          type: "string"
                                        }
                                      },
                                      externalReferences: {
                                        type: "array",
                                        items: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/external-reference"
                                        }
                                      },
                                      geoLocation: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/geo-location"
                                      },
                                      sourceId: {
                                        type: "string"
                                      },
                                      sourceType: {
                                        type: "string",
                                        description: "Can be Google, DPID etc"
                                      },
                                      rateLocation: {
                                        type: "string"
                                      }
                                    }
                                  }
                                ]
                              },
                              interestedAs: {
                                type: "string"
                              },
                              type: {
                                type: "string"
                              },
                              code: {
                                type: "string"
                              },
                              firstName: {
                                type: "string"
                              },
                              lastName: {
                                type: "string"
                              },
                              annualPayments: {
                                type: "number"
                              },
                              externalReferences: {
                                type: "array",
                                items: {
                                  title: "External Reference",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    namespace: {
                                      description:
                                        "A namespace for the identifier.",
                                      type: "string"
                                    },
                                    identifier: {
                                      description:
                                        "An identifier for the entity",
                                      type: "string"
                                    }
                                  }
                                }
                              },
                              roleType: {
                                type: "string",
                                description:
                                  "**OTHER_INSURER**: An organisation that is an interested party in the insurance",
                                enum: [
                                  "SUBCONTRACTOR",
                                  "NEW_INSURER",
                                  "PREVIOUS_INSURER",
                                  "OTHER_INSURER"
                                ]
                              },
                              interestedIn: {
                                type: "string"
                              },
                              effectiveDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              }
                            }
                          }
                        },
                        externalReferences: {
                          description: "This is thirdPartyRiskID",
                          type: "array",
                          items: {
                            title: "External Reference",
                            description: "",
                            type: "object",
                            properties: {
                              namespace: {
                                description: "A namespace for the identifier.",
                                type: "string"
                              },
                              identifier: {
                                description: "An identifier for the entity",
                                type: "string"
                              }
                            }
                          }
                        },
                        riskType: {
                          title: "Risk Type",
                          type: "string",
                          description: "",
                          enum: [
                            "COMMERCIAL_VEHICLE",
                            "PRIVATE_VEHICLE",
                            "HOME",
                            "CONTENTS",
                            "BUSINESS_ASSETS",
                            "GENERAL_LIABILITY",
                            "STATUTORY_LIABILITY",
                            "EMPLOYERS_LIABILITY",
                            "BUSINESS_INTERRUPTION",
                            "PLEASUREKRAFT",
                            "MOBILE_BUSINESS_ASSETS",
                            "LIABILITY",
                            "MARINE",
                            "LIABILITY",
                            "CONTRACT_WORKS",
                            "DETERIORATION",
                            "ELECTRONIC_EQUIPMENT",
                            "INCOME_PROTECTION",
                            "MACHINERY_BREAKDOWN",
                            "CARRIERS_LIABILITY"
                          ]
                        },
                        coInsurance: {
                          type: "object",
                          properties: {
                            role: {
                              type: "string",
                              enum: ["LEAD", "NON_LEAD"]
                            },
                            startDate: {
                              title: "Date Time Extended",
                              type: "object",
                              properties: {
                                value: {
                                  type: "string",
                                  format: "date-time"
                                },
                                format: {
                                  type: "string",
                                  enum: [
                                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                    "yyyy-MM-dd'T'HH:mm'Z'",
                                    "yyyy-MM-dd'T'HH",
                                    "yyyy-MM-dd",
                                    "yyyy-MM",
                                    "yyyy"
                                  ]
                                },
                                minValue: {
                                  type: "string"
                                },
                                maxValue: {
                                  type: "string"
                                },
                                defaultValue: {
                                  type: "string"
                                }
                              },
                              required: ["value"]
                            },
                            endDate: {
                              title: "Date Time Extended",
                              type: "object",
                              properties: {
                                value: {
                                  type: "string",
                                  format: "date-time"
                                },
                                format: {
                                  type: "string",
                                  enum: [
                                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                    "yyyy-MM-dd'T'HH:mm'Z'",
                                    "yyyy-MM-dd'T'HH",
                                    "yyyy-MM-dd",
                                    "yyyy-MM",
                                    "yyyy"
                                  ]
                                },
                                minValue: {
                                  type: "string"
                                },
                                maxValue: {
                                  type: "string"
                                },
                                defaultValue: {
                                  type: "string"
                                }
                              },
                              required: ["value"]
                            },
                            sharePercentage: {
                              type: "number",
                              description: ""
                            },
                            coInsuranceParties: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  id: {
                                    type: "string"
                                  },
                                  name: {
                                    type: "string",
                                    description:
                                      "Name of company sharing co-insurance of the risk"
                                  },
                                  sharePercentage: {
                                    type: "string",
                                    description:
                                      "The percentage of the co-insurance risk that this party has taken"
                                  }
                                }
                              }
                            }
                          }
                        },
                        notes: {
                          type: "array",
                          items: {
                            title: "Note",
                            description: "",
                            type: "object",
                            properties: {
                              effectiveDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              text: {
                                type: "string"
                              },
                              externalReferences: {
                                description: "",
                                type: "array",
                                items: {
                                  title: "External Reference",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    namespace: {
                                      description:
                                        "A namespace for the identifier.",
                                      type: "string"
                                    },
                                    identifier: {
                                      description:
                                        "An identifier for the entity",
                                      type: "string"
                                    }
                                  }
                                }
                              },
                              forInternalUse: {
                                type: "boolean"
                              }
                            }
                          }
                        },
                        benefits: {
                          type: "array",
                          description:
                            "Details of benefits related to the insured risk",
                          items: {
                            title: "Benefit",
                            description:
                              "TODO: (Find this in GW??) This includes sum insured and/or limits like weekly rental",
                            type: "object",
                            properties: {
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              category: {
                                type: "string",
                                description:
                                  "eg. SumInsured, ComponentSumInsured,  RiskSumInsured"
                              },
                              code: {
                                type: "string"
                              },
                              limits: {
                                description: "",
                                type: "array",
                                items: {
                                  title: "Limit",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    startDate: {
                                      title: "Date Time Extended",
                                      type: "object",
                                      properties: {
                                        value: {
                                          type: "string",
                                          format: "date-time"
                                        },
                                        format: {
                                          type: "string",
                                          enum: [
                                            "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                            "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                            "yyyy-MM-dd'T'HH:mm'Z'",
                                            "yyyy-MM-dd'T'HH",
                                            "yyyy-MM-dd",
                                            "yyyy-MM",
                                            "yyyy"
                                          ]
                                        },
                                        minValue: {
                                          type: "string"
                                        },
                                        maxValue: {
                                          type: "string"
                                        },
                                        defaultValue: {
                                          type: "string"
                                        }
                                      },
                                      required: ["value"]
                                    },
                                    endDate: {
                                      title: "Date Time Extended",
                                      type: "object",
                                      properties: {
                                        value: {
                                          type: "string",
                                          format: "date-time"
                                        },
                                        format: {
                                          type: "string",
                                          enum: [
                                            "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                            "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                            "yyyy-MM-dd'T'HH:mm'Z'",
                                            "yyyy-MM-dd'T'HH",
                                            "yyyy-MM-dd",
                                            "yyyy-MM",
                                            "yyyy"
                                          ]
                                        },
                                        minValue: {
                                          type: "string"
                                        },
                                        maxValue: {
                                          type: "string"
                                        },
                                        defaultValue: {
                                          type: "string"
                                        }
                                      },
                                      required: ["value"]
                                    },
                                    name: {
                                      type: "string",
                                      description:
                                        "Label or text displayed on GUI"
                                    },
                                    code: {
                                      type: "string",
                                      description:
                                        "Value used for mapping at the backend system"
                                    },
                                    category: {
                                      description:
                                        "Examples includeHome,ContentsSpecified ItemsOptional CoverRental Amount, DailyConfirmationableAmount",
                                      type: "string"
                                    },
                                    description: {
                                      type: "string"
                                    },
                                    value: {
                                      type: "string",
                                      description:
                                        "This represents the percentage of requested sum insured"
                                    },
                                    limitNumber: {
                                      type: "string"
                                    },
                                    coverageType: {
                                      type: "string",
                                      description: "conformed value"
                                    }
                                  }
                                }
                              },
                              description: {
                                type: "string"
                              },
                              value: {
                                type: "string"
                              },
                              premiumClass: {
                                type: "string"
                              }
                            }
                          }
                        },
                        conditions: {
                          type: "array",
                          items: {
                            title: "Peril Category",
                            description: "",
                            type: "object",
                            properties: {
                              name: {
                                type: "string"
                              },
                              code: {
                                type: "string"
                              },
                              value: {
                                type: "string"
                              },
                              description: {
                                type: "string"
                              },
                              subCategories: {
                                description: "",
                                type: "array",
                                items: {
                                  $ref: "#/definitions/peril-category"
                                }
                              }
                            }
                          }
                        },
                        discounts: {
                          type: "array",
                          description:
                            "List of discounts applied to the risk. This could include a burglar alarm discount, an age discount, a multiple policy discount",
                          items: {
                            title: "Discount",
                            description: "",
                            type: "object",
                            properties: {
                              code: {
                                type: "string",
                                description:
                                  "Code used in System of Record, if available"
                              },
                              name: {
                                type: "string",
                                description: "Specific to System of Record"
                              },
                              value: {
                                type: "string"
                              },
                              discountType: {
                                type: "string",
                                enum: [
                                  "PERCENT",
                                  "RATE",
                                  "DOLLAR_AMOUNT",
                                  "OTHER"
                                ]
                              },
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              priority: {
                                type: "integer",
                                description:
                                  "Order in which the discount is applied"
                              }
                            },
                            required: ["discountType"]
                          }
                        },
                        excesses: {
                          type: "array",
                          items: {
                            title: "Excess",
                            description: "",
                            type: "object",
                            properties: {
                              code: {
                                type: "string",
                                description:
                                  "code used in System of Record, if available"
                              },
                              name: {
                                type: "string",
                                description: "Specific to System of Record"
                              },
                              excessCategory: {
                                type: "string",
                                enum: [
                                  "STANDARD",
                                  "VOLUNTARY",
                                  "IMPOSED",
                                  "NAMED_DRIVER",
                                  "COVERAGE_ITEM",
                                  "THEFT",
                                  "NAMED_DRIVER_IMPOSED",
                                  "UNNAMED_DRIVER_IMPOSED",
                                  "UNNAMED_DRIVER",
                                  "SPECIAL",
                                  "SPECIAL_IMPOSED"
                                ]
                              },
                              minimumAmount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              maximumAmount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              references: {
                                type: "array",
                                items: {
                                  type: "object",
                                  properties: {
                                    namespace: {
                                      type: "string",
                                      enum: ["NAMED_DRIVER_ID"]
                                    },
                                    identifier: {
                                      type: "string"
                                    }
                                  }
                                }
                              },
                              value: {
                                type: "string",
                                description: "TODO - may not be required"
                              },
                              tier: {
                                type: "string",
                                description: "TODO - may not be required"
                              },
                              rate: {
                                type: "number"
                              }
                            },
                            required: ["excessCategory"]
                          }
                        },
                        rates: {
                          type: "array",
                          items: {
                            title: "Rate",
                            description: "",
                            type: "object",
                            properties: {
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              startDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              endDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              name: {
                                type: "string"
                              },
                              code: {
                                type: "string"
                              }
                            }
                          }
                        },
                        coverageItems: {
                          type: "array",
                          description:
                            "List of items covered under this insured risk",
                          items: {
                            title: "Coverage Item",
                            type: "object",
                            properties: {
                              itemNumber: {
                                type: "string",
                                description:
                                  "Identifies the instance of Coverage Item in the System of Record. e.g. Contents risk having multiple jewelry items, each with same coverage item code, itemNumber uniquely identifies a particular jewelry item"
                              },
                              coverageCode: {
                                type: "string",
                                description:
                                  "Code that is used in the System of Record eg. in *HEART* these are extensions or property peril codes"
                              },
                              coverageName: {
                                type: "string",
                                description:
                                  "eg. if coverageCode is **JWL** from *HEART* the  coverageName will be **Jewellery**"
                              },
                              itemDescription: {
                                type: "string",
                                description:
                                  "This is the fre text field in the core System of Records that describes the item eg. 18ct wedding ring"
                              },
                              isBaseCoverage: {
                                type: "boolean"
                              },
                              category: {
                                type: "string",
                                description:
                                  "Value of 'Optional' indicates to confirmation center if the coverageItem is to be treated as a coverage or an extension"
                              },
                              benefits: {
                                type: "array",
                                items: {
                                  title: "Benefit",
                                  description:
                                    "TODO: (Find this in GW??) This includes sum insured and/or limits like weekly rental",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    category: {
                                      type: "string",
                                      description:
                                        "eg. SumInsured, ComponentSumInsured,  RiskSumInsured"
                                    },
                                    code: {
                                      type: "string"
                                    },
                                    limits: {
                                      description: "",
                                      type: "array",
                                      items: {
                                        title: "Limit",
                                        description: "",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            title: "Amount Extended",
                                            type: "object",
                                            properties: {
                                              amount: {
                                                type: "number"
                                              },
                                              currencyCode: {
                                                type: "string"
                                              },
                                              isGSTInclusive: {
                                                type: "boolean"
                                              },
                                              GSTAmount: {
                                                type: "number"
                                              },
                                              GSTPercentageApplicable: {
                                                type: "number"
                                              },
                                              description: {
                                                type: "string"
                                              }
                                            },
                                            required: ["amount"]
                                          },
                                          startDate: {
                                            title: "Date Time Extended",
                                            type: "object",
                                            properties: {
                                              value: {
                                                type: "string",
                                                format: "date-time"
                                              },
                                              format: {
                                                type: "string",
                                                enum: [
                                                  "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                                  "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                                  "yyyy-MM-dd'T'HH:mm'Z'",
                                                  "yyyy-MM-dd'T'HH",
                                                  "yyyy-MM-dd",
                                                  "yyyy-MM",
                                                  "yyyy"
                                                ]
                                              },
                                              minValue: {
                                                type: "string"
                                              },
                                              maxValue: {
                                                type: "string"
                                              },
                                              defaultValue: {
                                                type: "string"
                                              }
                                            },
                                            required: ["value"]
                                          },
                                          endDate: {
                                            title: "Date Time Extended",
                                            type: "object",
                                            properties: {
                                              value: {
                                                type: "string",
                                                format: "date-time"
                                              },
                                              format: {
                                                type: "string",
                                                enum: [
                                                  "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                                  "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                                  "yyyy-MM-dd'T'HH:mm'Z'",
                                                  "yyyy-MM-dd'T'HH",
                                                  "yyyy-MM-dd",
                                                  "yyyy-MM",
                                                  "yyyy"
                                                ]
                                              },
                                              minValue: {
                                                type: "string"
                                              },
                                              maxValue: {
                                                type: "string"
                                              },
                                              defaultValue: {
                                                type: "string"
                                              }
                                            },
                                            required: ["value"]
                                          },
                                          name: {
                                            type: "string",
                                            description:
                                              "Label or text displayed on GUI"
                                          },
                                          code: {
                                            type: "string",
                                            description:
                                              "Value used for mapping at the backend system"
                                          },
                                          category: {
                                            description:
                                              "Examples includeHome,ContentsSpecified ItemsOptional CoverRental Amount, DailyConfirmationableAmount",
                                            type: "string"
                                          },
                                          description: {
                                            type: "string"
                                          },
                                          value: {
                                            type: "string",
                                            description:
                                              "This represents the percentage of requested sum insured"
                                          },
                                          limitNumber: {
                                            type: "string"
                                          },
                                          coverageType: {
                                            type: "string",
                                            description: "conformed value"
                                          }
                                        }
                                      }
                                    },
                                    description: {
                                      type: "string"
                                    },
                                    value: {
                                      type: "string"
                                    },
                                    premiumClass: {
                                      type: "string"
                                    }
                                  }
                                }
                              },
                              excesses: {
                                type: "array",
                                items: {
                                  title: "Excess",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    code: {
                                      type: "string",
                                      description:
                                        "code used in System of Record, if available"
                                    },
                                    name: {
                                      type: "string",
                                      description:
                                        "Specific to System of Record"
                                    },
                                    excessCategory: {
                                      type: "string",
                                      enum: [
                                        "STANDARD",
                                        "VOLUNTARY",
                                        "IMPOSED",
                                        "NAMED_DRIVER",
                                        "COVERAGE_ITEM",
                                        "THEFT",
                                        "NAMED_DRIVER_IMPOSED",
                                        "UNNAMED_DRIVER_IMPOSED",
                                        "UNNAMED_DRIVER",
                                        "SPECIAL",
                                        "SPECIAL_IMPOSED"
                                      ]
                                    },
                                    minimumAmount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    maximumAmount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    references: {
                                      type: "array",
                                      items: {
                                        type: "object",
                                        properties: {
                                          namespace: {
                                            type: "string",
                                            enum: ["NAMED_DRIVER_ID"]
                                          },
                                          identifier: {
                                            type: "string"
                                          }
                                        }
                                      }
                                    },
                                    value: {
                                      type: "string",
                                      description: "TODO - may not be required"
                                    },
                                    tier: {
                                      type: "string",
                                      description: "TODO - may not be required"
                                    },
                                    rate: {
                                      type: "number"
                                    }
                                  },
                                  required: ["excessCategory"]
                                }
                              },
                              discounts: {
                                type: "array",
                                items: {
                                  title: "Discount",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    code: {
                                      type: "string",
                                      description:
                                        "Code used in System of Record, if available"
                                    },
                                    name: {
                                      type: "string",
                                      description:
                                        "Specific to System of Record"
                                    },
                                    value: {
                                      type: "string"
                                    },
                                    discountType: {
                                      type: "string",
                                      enum: [
                                        "PERCENT",
                                        "RATE",
                                        "DOLLAR_AMOUNT",
                                        "OTHER"
                                      ]
                                    },
                                    amount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    priority: {
                                      type: "integer",
                                      description:
                                        "Order in which the discount is applied"
                                    }
                                  },
                                  required: ["discountType"]
                                }
                              },
                              physicalConditions: {
                                type: "array",
                                items: {
                                  title: "Physical Condition",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    description: {
                                      type: "string"
                                    },
                                    value: {
                                      type: "string"
                                    },
                                    establishedDate: {
                                      title: "Date Time Extended",
                                      type: "object",
                                      properties: {
                                        value: {
                                          type: "string",
                                          format: "date-time"
                                        },
                                        format: {
                                          type: "string",
                                          enum: [
                                            "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                            "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                            "yyyy-MM-dd'T'HH:mm'Z'",
                                            "yyyy-MM-dd'T'HH",
                                            "yyyy-MM-dd",
                                            "yyyy-MM",
                                            "yyyy"
                                          ]
                                        },
                                        minValue: {
                                          type: "string"
                                        },
                                        maxValue: {
                                          type: "string"
                                        },
                                        defaultValue: {
                                          type: "string"
                                        }
                                      },
                                      required: ["value"]
                                    },
                                    physicalConditionType: {
                                      type: "string",
                                      enum: [
                                        "LAST_VALUATION",
                                        "STATED_VALUE",
                                        "PLANT_LAST_VALUATION",
                                        "LAST_INSPECTION",
                                        "LAST_SURVEYED",
                                        "RATING_CONDITION",
                                        "UNREPAIRED_DAMAGE"
                                      ]
                                    },
                                    type: {
                                      type: "string",
                                      description:
                                        "e.g. Financial Valuation Type"
                                    },
                                    amount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    code: {
                                      type: "string"
                                    }
                                  }
                                }
                              },
                              rates: {
                                type: "array",
                                items: {
                                  title: "Rate",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    startDate: {
                                      title: "Date Time Extended",
                                      type: "object",
                                      properties: {
                                        value: {
                                          type: "string",
                                          format: "date-time"
                                        },
                                        format: {
                                          type: "string",
                                          enum: [
                                            "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                            "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                            "yyyy-MM-dd'T'HH:mm'Z'",
                                            "yyyy-MM-dd'T'HH",
                                            "yyyy-MM-dd",
                                            "yyyy-MM",
                                            "yyyy"
                                          ]
                                        },
                                        minValue: {
                                          type: "string"
                                        },
                                        maxValue: {
                                          type: "string"
                                        },
                                        defaultValue: {
                                          type: "string"
                                        }
                                      },
                                      required: ["value"]
                                    },
                                    endDate: {
                                      title: "Date Time Extended",
                                      type: "object",
                                      properties: {
                                        value: {
                                          type: "string",
                                          format: "date-time"
                                        },
                                        format: {
                                          type: "string",
                                          enum: [
                                            "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                            "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                            "yyyy-MM-dd'T'HH:mm'Z'",
                                            "yyyy-MM-dd'T'HH",
                                            "yyyy-MM-dd",
                                            "yyyy-MM",
                                            "yyyy"
                                          ]
                                        },
                                        minValue: {
                                          type: "string"
                                        },
                                        maxValue: {
                                          type: "string"
                                        },
                                        defaultValue: {
                                          type: "string"
                                        }
                                      },
                                      required: ["value"]
                                    },
                                    name: {
                                      type: "string"
                                    },
                                    code: {
                                      type: "string"
                                    }
                                  }
                                }
                              },
                              premiumDetails: {
                                type: "array",
                                items: {
                                  title: "Premium Detail",
                                  type: "object",
                                  properties: {
                                    category: {
                                      type: "string"
                                    },
                                    code: {
                                      type: "string"
                                    },
                                    writtenPremium: {
                                      title: "Premium",
                                      description: "",
                                      type: "object",
                                      properties: {
                                        companyPremium: {
                                          type: "number",
                                          description: "Company Premium"
                                        },
                                        naturalDisasterPremium: {
                                          type: "number"
                                        },
                                        earthquakeLevy: {
                                          type: "number",
                                          description: "EQC Levy"
                                        },
                                        fireServiceLevy: {
                                          type: "number",
                                          description: "Fire Service Levy"
                                        },
                                        gst: {
                                          type: "number",
                                          description: "GST Amount"
                                        },
                                        instalmentCharge: {
                                          type: "number"
                                        },
                                        adminCharge: {
                                          type: "number",
                                          description: "Admin Charge"
                                        },
                                        commissionRate: {
                                          type: "number",
                                          description: "Commission Rate"
                                        },
                                        minimumPremiumUsed: {
                                          type: "boolean"
                                        },
                                        naturalDisasterCommission: {
                                          type: "number"
                                        },
                                        terrorTotalTransactionCost: {
                                          type: "number"
                                        },
                                        commissionAmount: {
                                          type: "number"
                                        },
                                        commissionGST: {
                                          type: "number"
                                        },
                                        totalPremium: {
                                          type: "number"
                                        },
                                        businessPremium: {
                                          type: "number"
                                        },
                                        cappingAndCupping: {
                                          type: "object",
                                          properties: {
                                            premiumAmount: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            },
                                            adjustmentFactor: {
                                              type: "number"
                                            },
                                            premiumAdjustmentDueToOverride: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            }
                                          }
                                        }
                                      }
                                    },
                                    annualisedPremium: {
                                      title: "Premium",
                                      description: "",
                                      type: "object",
                                      properties: {
                                        companyPremium: {
                                          type: "number",
                                          description: "Company Premium"
                                        },
                                        naturalDisasterPremium: {
                                          type: "number"
                                        },
                                        earthquakeLevy: {
                                          type: "number",
                                          description: "EQC Levy"
                                        },
                                        fireServiceLevy: {
                                          type: "number",
                                          description: "Fire Service Levy"
                                        },
                                        gst: {
                                          type: "number",
                                          description: "GST Amount"
                                        },
                                        instalmentCharge: {
                                          type: "number"
                                        },
                                        adminCharge: {
                                          type: "number",
                                          description: "Admin Charge"
                                        },
                                        commissionRate: {
                                          type: "number",
                                          description: "Commission Rate"
                                        },
                                        minimumPremiumUsed: {
                                          type: "boolean"
                                        },
                                        naturalDisasterCommission: {
                                          type: "number"
                                        },
                                        terrorTotalTransactionCost: {
                                          type: "number"
                                        },
                                        commissionAmount: {
                                          type: "number"
                                        },
                                        commissionGST: {
                                          type: "number"
                                        },
                                        totalPremium: {
                                          type: "number"
                                        },
                                        businessPremium: {
                                          type: "number"
                                        },
                                        cappingAndCupping: {
                                          type: "object",
                                          properties: {
                                            premiumAmount: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            },
                                            adjustmentFactor: {
                                              type: "number"
                                            },
                                            premiumAdjustmentDueToOverride: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            }
                                          }
                                        }
                                      }
                                    },
                                    transactionPremium: {
                                      title: "Premium",
                                      description: "",
                                      type: "object",
                                      properties: {
                                        companyPremium: {
                                          type: "number",
                                          description: "Company Premium"
                                        },
                                        naturalDisasterPremium: {
                                          type: "number"
                                        },
                                        earthquakeLevy: {
                                          type: "number",
                                          description: "EQC Levy"
                                        },
                                        fireServiceLevy: {
                                          type: "number",
                                          description: "Fire Service Levy"
                                        },
                                        gst: {
                                          type: "number",
                                          description: "GST Amount"
                                        },
                                        instalmentCharge: {
                                          type: "number"
                                        },
                                        adminCharge: {
                                          type: "number",
                                          description: "Admin Charge"
                                        },
                                        commissionRate: {
                                          type: "number",
                                          description: "Commission Rate"
                                        },
                                        minimumPremiumUsed: {
                                          type: "boolean"
                                        },
                                        naturalDisasterCommission: {
                                          type: "number"
                                        },
                                        terrorTotalTransactionCost: {
                                          type: "number"
                                        },
                                        commissionAmount: {
                                          type: "number"
                                        },
                                        commissionGST: {
                                          type: "number"
                                        },
                                        totalPremium: {
                                          type: "number"
                                        },
                                        businessPremium: {
                                          type: "number"
                                        },
                                        cappingAndCupping: {
                                          type: "object",
                                          properties: {
                                            premiumAmount: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            },
                                            adjustmentFactor: {
                                              type: "number"
                                            },
                                            premiumAdjustmentDueToOverride: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            }
                                          }
                                        }
                                      }
                                    },
                                    instalmentPremium: {
                                      title: "Premium",
                                      description: "",
                                      type: "object",
                                      properties: {
                                        companyPremium: {
                                          type: "number",
                                          description: "Company Premium"
                                        },
                                        naturalDisasterPremium: {
                                          type: "number"
                                        },
                                        earthquakeLevy: {
                                          type: "number",
                                          description: "EQC Levy"
                                        },
                                        fireServiceLevy: {
                                          type: "number",
                                          description: "Fire Service Levy"
                                        },
                                        gst: {
                                          type: "number",
                                          description: "GST Amount"
                                        },
                                        instalmentCharge: {
                                          type: "number"
                                        },
                                        adminCharge: {
                                          type: "number",
                                          description: "Admin Charge"
                                        },
                                        commissionRate: {
                                          type: "number",
                                          description: "Commission Rate"
                                        },
                                        minimumPremiumUsed: {
                                          type: "boolean"
                                        },
                                        naturalDisasterCommission: {
                                          type: "number"
                                        },
                                        terrorTotalTransactionCost: {
                                          type: "number"
                                        },
                                        commissionAmount: {
                                          type: "number"
                                        },
                                        commissionGST: {
                                          type: "number"
                                        },
                                        totalPremium: {
                                          type: "number"
                                        },
                                        businessPremium: {
                                          type: "number"
                                        },
                                        cappingAndCupping: {
                                          type: "object",
                                          properties: {
                                            premiumAmount: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            },
                                            adjustmentFactor: {
                                              type: "number"
                                            },
                                            premiumAdjustmentDueToOverride: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            }
                                          }
                                        }
                                      }
                                    },
                                    initialPaymentPremium: {
                                      title: "Premium",
                                      description: "",
                                      type: "object",
                                      properties: {
                                        companyPremium: {
                                          type: "number",
                                          description: "Company Premium"
                                        },
                                        naturalDisasterPremium: {
                                          type: "number"
                                        },
                                        earthquakeLevy: {
                                          type: "number",
                                          description: "EQC Levy"
                                        },
                                        fireServiceLevy: {
                                          type: "number",
                                          description: "Fire Service Levy"
                                        },
                                        gst: {
                                          type: "number",
                                          description: "GST Amount"
                                        },
                                        instalmentCharge: {
                                          type: "number"
                                        },
                                        adminCharge: {
                                          type: "number",
                                          description: "Admin Charge"
                                        },
                                        commissionRate: {
                                          type: "number",
                                          description: "Commission Rate"
                                        },
                                        minimumPremiumUsed: {
                                          type: "boolean"
                                        },
                                        naturalDisasterCommission: {
                                          type: "number"
                                        },
                                        terrorTotalTransactionCost: {
                                          type: "number"
                                        },
                                        commissionAmount: {
                                          type: "number"
                                        },
                                        commissionGST: {
                                          type: "number"
                                        },
                                        totalPremium: {
                                          type: "number"
                                        },
                                        businessPremium: {
                                          type: "number"
                                        },
                                        cappingAndCupping: {
                                          type: "object",
                                          properties: {
                                            premiumAmount: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            },
                                            adjustmentFactor: {
                                              type: "number"
                                            },
                                            premiumAdjustmentDueToOverride: {
                                              title: "Amount Extended",
                                              type: "object",
                                              properties: {
                                                amount: {
                                                  type: "number"
                                                },
                                                currencyCode: {
                                                  type: "string"
                                                },
                                                isGSTInclusive: {
                                                  type: "boolean"
                                                },
                                                GSTAmount: {
                                                  type: "number"
                                                },
                                                GSTPercentageApplicable: {
                                                  type: "number"
                                                },
                                                description: {
                                                  type: "string"
                                                }
                                              },
                                              required: ["amount"]
                                            }
                                          }
                                        }
                                      }
                                    },
                                    premiumClass: {
                                      type: "string"
                                    },
                                    premiumFrequency: {
                                      title: "Premium Frequency",
                                      type: "string",
                                      description: "",
                                      enum: [
                                        "ANNUALLY",
                                        "QUARTERLY",
                                        "MONTHLY",
                                        "FORTNIGHTLY",
                                        "ONE_OFF",
                                        "HALF_YEARLY"
                                      ]
                                    }
                                  }
                                }
                              },
                              adjustments: {
                                type: "array",
                                items: {
                                  title: "Adjustment",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    code: {
                                      type: "string",
                                      description:
                                        "code used in System of Record, if available"
                                    },
                                    factor: {
                                      type: "string"
                                    },
                                    reason: {
                                      type: "string"
                                    },
                                    adjustmentType: {
                                      type: "string",
                                      enum: ["PERCENT", "RATE", "DOLLAR_AMOUNT"]
                                    },
                                    name: {
                                      type: "string",
                                      description:
                                        "Specific to System of Record"
                                    },
                                    priority: {
                                      type: "integer",
                                      description:
                                        "Order in which the discount is applied"
                                    }
                                  },
                                  required: ["adjustmentType"]
                                }
                              },
                              conditions: {
                                type: "array",
                                items: {
                                  title: "Peril Category",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    name: {
                                      type: "string"
                                    },
                                    code: {
                                      type: "string"
                                    },
                                    value: {
                                      type: "string"
                                    },
                                    description: {
                                      type: "string"
                                    },
                                    subCategories: {
                                      description: "",
                                      type: "array",
                                      items: {
                                        $ref: "#/definitions/peril-category"
                                      }
                                    }
                                  }
                                }
                              },
                              subCategory: {
                                type: "string"
                              },
                              hasCoverage: {
                                type: "boolean"
                              },
                              settlementBasis: {
                                type: "string",
                                enum: [
                                  "AGREED_VALUE",
                                  "FIXED_VALUE",
                                  "MARKET_VALUE",
                                  "SUM_INSURED"
                                ],
                                description:
                                  "Basis on which the confirmation would be settled for this coverageItem. Only required if it differes from the insuredRisks.settlementBasis"
                              },
                              externalReferences: {
                                type: "array",
                                items: {
                                  title: "External Reference",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    namespace: {
                                      description:
                                        "A namespace for the identifier.",
                                      type: "string"
                                    },
                                    identifier: {
                                      description:
                                        "An identifier for the entity",
                                      type: "string"
                                    }
                                  }
                                }
                              },
                              coverageType: {
                                type: "string",
                                description:
                                  'This is the conformed representation of the coverage code example: "INSURED_VEHICLE", "WINDSCREEN", "AGREED_VALUE", "INGESTION_OR_ENTANGLEMENT", "LOSS_OF_USE", "PORTABLE_ELECTRONIC_EQUIPMENT", "TAXI"'
                              },
                              coverageNote: {
                                type: "string",
                                description:
                                  "Free format string populated by the System of Record contains detials that will add a note to the coverage e.g 25% of the sumInsured, limit shown in the policy schedule - First 7 days not covered"
                              },
                              additionalCoverageDetails: {
                                type: "array",
                                items: {
                                  title: "Additional Information",
                                  type: "object",
                                  properties: {
                                    id: {
                                      type: "string"
                                    },
                                    details: {
                                      type: "array",
                                      items: {
                                        type: "object",
                                        properties: {
                                          name: {
                                            type: "string"
                                          },
                                          number: {
                                            type: "number"
                                          },
                                          value: {
                                            type: "string"
                                          },
                                          amount: {
                                            title: "Amount Extended",
                                            type: "object",
                                            properties: {
                                              amount: {
                                                type: "number"
                                              },
                                              currencyCode: {
                                                type: "string"
                                              },
                                              isGSTInclusive: {
                                                type: "boolean"
                                              },
                                              GSTAmount: {
                                                type: "number"
                                              },
                                              GSTPercentageApplicable: {
                                                type: "number"
                                              },
                                              description: {
                                                type: "string"
                                              }
                                            },
                                            required: ["amount"]
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              deferments: {
                                type: "array",
                                items: {
                                  title: "Deferment",
                                  type: "object",
                                  properties: {
                                    code: {
                                      type: "string",
                                      description:
                                        "Code used in System of record"
                                    },
                                    name: {
                                      type: "string"
                                    },
                                    category: {
                                      type: "string"
                                    },
                                    description: {
                                      type: "string",
                                      enum: ["STANDARD", "VOLUNTARY", "IMPOSED"]
                                    },
                                    length: {
                                      type: "number"
                                    },
                                    period: {
                                      type: "string",
                                      enum: ["HOURS", "DAYS", "WEEKS", "MONTHS"]
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        reInsurance: {
                          type: "object",
                          properties: {
                            id: {
                              type: "string",
                              description: "TODO: Can we delete?"
                            },
                            category: {
                              type: "string",
                              description: "TODO: Can we delete?"
                            },
                            classification: {
                              type: "string"
                            },
                            code: {
                              type: "string"
                            }
                          }
                        },
                        premiumDetails: {
                          type: "array",
                          description:
                            "Includes premium details for this insured risk",
                          items: {
                            title: "Premium Detail",
                            type: "object",
                            properties: {
                              category: {
                                type: "string"
                              },
                              code: {
                                type: "string"
                              },
                              writtenPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              annualisedPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              transactionPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              instalmentPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              initialPaymentPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              premiumClass: {
                                type: "string"
                              },
                              premiumFrequency: {
                                title: "Premium Frequency",
                                type: "string",
                                description: "",
                                enum: [
                                  "ANNUALLY",
                                  "QUARTERLY",
                                  "MONTHLY",
                                  "FORTNIGHTLY",
                                  "ONE_OFF",
                                  "HALF_YEARLY"
                                ]
                              }
                            }
                          }
                        },
                        adjustments: {
                          type: "array",
                          items: {
                            title: "Adjustment",
                            description: "",
                            type: "object",
                            properties: {
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              code: {
                                type: "string",
                                description:
                                  "code used in System of Record, if available"
                              },
                              factor: {
                                type: "string"
                              },
                              reason: {
                                type: "string"
                              },
                              adjustmentType: {
                                type: "string",
                                enum: ["PERCENT", "RATE", "DOLLAR_AMOUNT"]
                              },
                              name: {
                                type: "string",
                                description: "Specific to System of Record"
                              },
                              priority: {
                                type: "integer",
                                description:
                                  "Order in which the discount is applied"
                              }
                            },
                            required: ["adjustmentType"]
                          }
                        },
                        questionAnswers: {
                          type: "array",
                          items: {
                            title: "Question Instance",
                            type: "object",
                            properties: {
                              id: {
                                type: "string",
                                description: "QuestionInstance ID"
                              },
                              question: {
                                title: "Application Question",
                                allOf: [
                                  {
                                    title: "Question Output",
                                    allOf: [
                                      {
                                        type: "object",
                                        properties: {
                                          id: {
                                            type: "string",
                                            description:
                                              "Internal unique id generated by our DB or system"
                                          }
                                        },
                                        required: ["id"]
                                      },
                                      {
                                        title: "Question Base",
                                        type: "object",
                                        properties: {
                                          questionType: {
                                            type: "string",
                                            enum: [
                                              "GROUP",
                                              "QUESTION",
                                              "HIDDEN"
                                            ]
                                          },
                                          text: {
                                            type: "string",
                                            description:
                                              "Text displayed on the Label"
                                          },
                                          subText: {
                                            type: "string",
                                            description:
                                              "Additional helper text for the question"
                                          },
                                          helpText: {
                                            type: "string"
                                          },
                                          answerType: {
                                            type: "object",
                                            properties: {
                                              dataType: {
                                                type: "string",
                                                description:
                                                  "DataType of the answer. Can be a simple dataType or complex dataType like Vehicle. Some possible types are: string, decimal, boolean, enum, int, date, money"
                                              },
                                              minValue: {
                                                type: "string"
                                              },
                                              maxValue: {
                                                type: "string"
                                              },
                                              regEx: {
                                                type: "string",
                                                description:
                                                  "Acceptable format for the String dataType"
                                              },
                                              minLength: {
                                                type: "integer"
                                              },
                                              maxLength: {
                                                type: "integer",
                                                description:
                                                  "Maximum number of characters for string dataType"
                                              },
                                              enumValues: {
                                                type: "array",
                                                description:
                                                  "Values to be shown for enum DataType",
                                                items: {
                                                  type: "object",
                                                  properties: {
                                                    value: {
                                                      type: "string",
                                                      description:
                                                        "value that is stored at the backend"
                                                    },
                                                    description: {
                                                      type: "string",
                                                      description:
                                                        "Value that is shown to the user on UI"
                                                    },
                                                    isDefault: {
                                                      type: "boolean",
                                                      description:
                                                        "Whether the current value should be preselected for the user as default value"
                                                    }
                                                  },
                                                  required: [
                                                    "value",
                                                    "description"
                                                  ]
                                                }
                                              },
                                              multiSelect: {
                                                type: "boolean",
                                                description:
                                                  "Applicable only if the dataType is enum"
                                              },
                                              customSource: {
                                                type: "string",
                                                description:
                                                  "API endpoint for getting custom Data "
                                              },
                                              defaultValue: {
                                                type: "string"
                                              },
                                              placeHolder: {
                                                type: "string"
                                              },
                                              isRequired: {
                                                type: "boolean"
                                              },
                                              format: {
                                                type: "string"
                                              }
                                            },
                                            required: ["dataType"]
                                          },
                                          effectiveDate: {
                                            type: "string",
                                            format: "date",
                                            description:
                                              "Date from which this question will become effective or active"
                                          },
                                          expiryDate: {
                                            type: "string",
                                            format: "date",
                                            description:
                                              "Date from which this question will expire or become inactive"
                                          }
                                        },
                                        required: ["questionType"]
                                      }
                                    ]
                                  },
                                  {
                                    type: "object",
                                    properties: {
                                      askOnce: {
                                        type: "boolean"
                                      },
                                      priority: {
                                        type: "integer"
                                      },
                                      maxOccurs: {
                                        type: "integer"
                                      },
                                      stageOfProcess: {
                                        title: "Stage Of Process",
                                        type: "string",
                                        description: "",
                                        enum: [
                                          "NEEDS_ANALYSIS",
                                          "COVER_SELECT",
                                          "PRODUCT_QUESTIONS",
                                          "QUOTE",
                                          "DECLARATIONS",
                                          "CONTACT",
                                          "PAYMENT",
                                          "CONFIRMATION"
                                        ]
                                      }
                                    }
                                  }
                                ]
                              },
                              productInstanceIds: {
                                type: "array",
                                description:
                                  "ProductInstances for which this question is applicable",
                                items: {
                                  type: "string"
                                }
                              },
                              answer: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              },
                              answeredOn: {
                                type: "string",
                                format: "date-time"
                              },
                              questionInstances: {
                                type: "array",
                                items: {
                                  $ref: "#/definitions/question-instance"
                                }
                              },
                              askIf: {
                                type: "array",
                                description:
                                  "Only ask this question if the conditions in the array are satisfied",
                                items: {
                                  type: "object",
                                  properties: {
                                    questionInstanceId: {
                                      type: "string",
                                      description:
                                        "Link to the Question Instance ID which is to be compared"
                                    },
                                    operator: {
                                      type: "string",
                                      description:
                                        "Operator to use for comparision e.g. =, <, >, <= etc."
                                    },
                                    value: {
                                      type: "string",
                                      description: "Value to compare against"
                                    },
                                    path: {
                                      type: "string"
                                    },
                                    stageOfProcess: {
                                      title: "Stage Of Process",
                                      type: "string",
                                      description: "",
                                      enum: [
                                        "NEEDS_ANALYSIS",
                                        "COVER_SELECT",
                                        "PRODUCT_QUESTIONS",
                                        "QUOTE",
                                        "DECLARATIONS",
                                        "CONTACT",
                                        "PAYMENT",
                                        "CONFIRMATION"
                                      ]
                                    }
                                  }
                                }
                              },
                              askIfSetOperator: {
                                type: "string",
                                enum: ["ALL_OF", "ANY_OF"]
                              }
                            }
                          }
                        },
                        physicalConditions: {
                          type: "array",
                          items: {
                            title: "Physical Condition",
                            description: "",
                            type: "object",
                            properties: {
                              description: {
                                type: "string"
                              },
                              value: {
                                type: "string"
                              },
                              establishedDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              physicalConditionType: {
                                type: "string",
                                enum: [
                                  "LAST_VALUATION",
                                  "STATED_VALUE",
                                  "PLANT_LAST_VALUATION",
                                  "LAST_INSPECTION",
                                  "LAST_SURVEYED",
                                  "RATING_CONDITION",
                                  "UNREPAIRED_DAMAGE"
                                ]
                              },
                              type: {
                                type: "string",
                                description: "e.g. Financial Valuation Type"
                              },
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              code: {
                                type: "string"
                              }
                            }
                          }
                        },
                        generalActivities: {
                          type: "array",
                          items: {
                            title: "General Activity",
                            description: "",
                            type: "object",
                            properties: {
                              name: {
                                type: "string"
                              },
                              activityCode: {
                                type: "string"
                              },
                              activityId: {
                                type: "string"
                              },
                              turnoverPercentage: {
                                type: "number"
                              },
                              turnoverAmount: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              },
                              estimatedTurnover: {
                                type: "number"
                              },
                              externalReferences: {
                                description: "",
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/external-reference"
                                }
                              },
                              address: {
                                title: "Address Output",
                                allOf: [
                                  {
                                    type: "object",
                                    properties: {
                                      id: {
                                        type: "string"
                                      }
                                    }
                                  },
                                  {
                                    title: "Address Base",
                                    description: "",
                                    type: "object",
                                    properties: {
                                      addressId: {
                                        description: "",
                                        type: "string"
                                      },
                                      addressPurpose: {
                                        title: "Address Purpose",
                                        type: "string",
                                        enum: [
                                          "BILLING",
                                          "BUSINESS",
                                          "HOME",
                                          "OTHER",
                                          "MAILING",
                                          "CONTACT"
                                        ]
                                      },
                                      boxNumber: {
                                        type: "string"
                                      },
                                      boxType: {
                                        type: "string"
                                      },
                                      buildingName: {
                                        type: "string"
                                      },
                                      city: {
                                        type: "string"
                                      },
                                      country: {
                                        type: "string"
                                      },
                                      deliveryType: {
                                        type: "string",
                                        enum: [
                                          "PO_BOX",
                                          "PRIVATE_BAG",
                                          "RESPONSE_BAG",
                                          "CMB",
                                          "COUNTER_DELIVERY",
                                          "POST_BOX",
                                          "RURAL"
                                        ]
                                      },
                                      description: {
                                        type: "string"
                                      },
                                      levelNumber: {
                                        type: "string"
                                      },
                                      levelType: {
                                        type: "string"
                                      },
                                      lobbyName: {
                                        type: "string"
                                      },
                                      postalCode: {
                                        type: "string"
                                      },
                                      region: {
                                        type: "string"
                                      },
                                      ruralDelivery: {
                                        type: "string"
                                      },
                                      ruralDistrict: {
                                        type: "string"
                                      },
                                      status: {
                                        type: "string"
                                      },
                                      streetName: {
                                        type: "string"
                                      },
                                      streetNumber: {
                                        type: "string"
                                      },
                                      streetNumberSuffix: {
                                        type: "string"
                                      },
                                      streetSuffix: {
                                        type: "string"
                                      },
                                      streetType: {
                                        type: "string"
                                      },
                                      subregion: {
                                        type: "string"
                                      },
                                      unitNumber: {
                                        type: "string"
                                      },
                                      unitType: {
                                        type: "string"
                                      },
                                      unstructured: {
                                        description:
                                          "An address represented in a single string",
                                        type: "string"
                                      },
                                      displayAddress: {
                                        type: "array",
                                        items: {
                                          type: "string"
                                        }
                                      },
                                      externalReferences: {
                                        type: "array",
                                        items: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/external-reference"
                                        }
                                      },
                                      geoLocation: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/geo-location"
                                      },
                                      sourceId: {
                                        type: "string"
                                      },
                                      sourceType: {
                                        type: "string",
                                        description: "Can be Google, DPID etc"
                                      },
                                      rateLocation: {
                                        type: "string"
                                      }
                                    }
                                  }
                                ]
                              },
                              activityType: {
                                type: "string",
                                enum: [
                                  "ANZSIC",
                                  "TERRITORIAL_LIMITS",
                                  "OUTSIDE_ACTIVITY",
                                  "HAZARDOUS_ACTIVITY",
                                  "HOTWORKS",
                                  "JURISDICTIONAL_LIMITS",
                                  "PRODUCT_DETAILS",
                                  "GENERAL",
                                  "AREA_OF_OPERATION",
                                  "USE_TYPE",
                                  "SUB_USE_TYPE",
                                  "BUSINESS_DESCRIPTION",
                                  "INDUSTRY",
                                  "BUSINESS_USAGE",
                                  "LOCATION",
                                  "VEHICLE_USAGE",
                                  "OCCUPATION"
                                ]
                              },
                              amount: {
                                type: "number",
                                description:
                                  "A numeric value associated with an activity e.g. What is the maximum value of cash carried in any of the vehicles at any one time = **$1000**"
                              },
                              value: {
                                type: "string",
                                description:
                                  "A numeric value associated with an activity"
                              },
                              component: {
                                type: "string"
                              },
                              purpose: {
                                type: "string"
                              },
                              dynamicProperties: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/dynamic-property"
                                }
                              },
                              undertakesActivity: {
                                type: "boolean"
                              },
                              floorArea: {
                                type: "integer"
                              }
                            },
                            required: ["activityType"]
                          }
                        },
                        undergoneActivityOccurrences: {
                          type: "array",
                          items: {
                            title: "Activity Occurence",
                            description:
                              "EstimatedGrossTurnoverNextTwelveMonths,LastRewiredYearChangedSeasonalIncreasePeriod",
                            type: "object",
                            properties: {
                              actualCost: {
                                type: "number"
                              },
                              budget: {
                                type: "number"
                              },
                              endDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              objective: {
                                type: "string"
                              },
                              startDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              }
                            }
                          }
                        },
                        objectOwnershipDetails: {
                          type: "array",
                          items: {
                            title: "Object Ownership",
                            type: "object",
                            properties: {
                              ownershipForm: {
                                type: "string",
                                enum: [
                                  "FREEHOLD",
                                  "RENTAL",
                                  "LEASE",
                                  "FULL_INDIVIDUAL_OWNERSHIP",
                                  "LEASEE",
                                  "LEASOR",
                                  "SOLE_OWNER",
                                  "PART_OWNER",
                                  "FRANCHISE"
                                ],
                                description:
                                  "The legal class of ownership of a physical object"
                              },
                              acquisitionCost: {
                                type: "number",
                                description:
                                  "The price paid for acquiring physical object"
                              },
                              acquisitionMethod: {
                                type: "string",
                                enum: ["MORTGAGEE_SALE"],
                                description:
                                  "The method by which the physical object was acquired"
                              },
                              isFirstOwner: {
                                type: "boolean"
                              },
                              ownershipPercentage: {
                                type: "number"
                              },
                              purchaseDate: {
                                type: "string",
                                format: "date"
                              },
                              isInsuredObjectOwner: {
                                type: "boolean"
                              },
                              objectOwnerName: {
                                type: "string"
                              },
                              hasOtherInterestForCoverage: {
                                type: "boolean"
                              },
                              partOfObjectOwned: {
                                type: "string",
                                description: "e.g. building, stock etc"
                              },
                              objectOwnerDescription: {
                                type: "string",
                                description:
                                  "e.g. Lease company, Hire Company, Employee, Director"
                              }
                            }
                          }
                        },
                        mobileAssets: {
                          title: "Mobile Assets",
                          type: "object",
                          properties: {
                            name: {
                              type: "string"
                            },
                            carryingVehicle: {
                              title: "Vehicle Output",
                              allOf: [
                                {
                                  type: "object",
                                  properties: {
                                    id: {
                                      type: "string",
                                      description:
                                        "Internal unique id generated by our DB or system"
                                    }
                                  }
                                },
                                {
                                  title: "Vehicle Base",
                                  description:
                                    "The representation of vehicle data.",
                                  type: "object",
                                  properties: {
                                    vehicleType: {
                                      title: "Vehicle Type Output",
                                      allOf: [
                                        {
                                          type: "object",
                                          properties: {
                                            id: {
                                              type: "string",
                                              description:
                                                "Internal unique id generated by our DB or system"
                                            }
                                          }
                                        },
                                        {
                                          title: "Vehicle Type Base",
                                          description:
                                            "The representation of vehicleType data.",
                                          type: "object",
                                          properties: {
                                            vehicleId: {
                                              type: "integer",
                                              description:
                                                "Recieved from RedBook or other sources"
                                            },
                                            make: {
                                              type: "string",
                                              description:
                                                "The make of the vehicle"
                                            },
                                            mass: {
                                              type: "string",
                                              description: "Gross laden weight"
                                            },
                                            model: {
                                              type: "string"
                                            },
                                            vehicleType: {
                                              type: "string"
                                            },
                                            year: {
                                              type: "integer"
                                            },
                                            bodyStyle: {
                                              type: "string"
                                            },
                                            engineType: {
                                              type: "string"
                                            },
                                            driveType: {
                                              type: "string",
                                              description:
                                                "4WD or 2WD or AWD etc"
                                            },
                                            doors: {
                                              type: "integer"
                                            },
                                            series: {
                                              type: "string"
                                            },
                                            engineCapacity: {
                                              type: "string"
                                            },
                                            engineSize: {
                                              type: "string"
                                            },
                                            equipmentLevel: {
                                              type: "string"
                                            },
                                            equipmentLevel2: {
                                              type: "string"
                                            },
                                            fullDescription: {
                                              type: "string"
                                            },
                                            standardEquipment: {
                                              type: "string"
                                            },
                                            gearType: {
                                              type: "string",
                                              description: "Automatic or Manual"
                                            },
                                            releaseMonth: {
                                              type: "integer"
                                            },
                                            noOfGears: {
                                              type: "integer"
                                            },
                                            noOfCylinders: {
                                              type: "integer"
                                            },
                                            fuelType: {
                                              type: "string"
                                            },
                                            tareWeight: {
                                              type: "number",
                                              description: "Unladen weight"
                                            },
                                            newPrice: {
                                              type: "number"
                                            },
                                            isImported: {
                                              type: "boolean"
                                            },
                                            seatCapacity: {
                                              type: "integer"
                                            },
                                            axels: {
                                              type: "integer"
                                            },
                                            bodyType: {
                                              type: "string"
                                            },
                                            vehicleIndicators: {
                                              type: "array",
                                              items: {
                                                type: "object",
                                                properties: {
                                                  product: {
                                                    type: "string",
                                                    enum: [
                                                      "State PMV",
                                                      "FI PMV"
                                                    ]
                                                  },
                                                  name: {
                                                    type: "string"
                                                  },
                                                  value: {
                                                    type: "string"
                                                  },
                                                  expiryDate: {
                                                    type: "string",
                                                    format: "date"
                                                  }
                                                }
                                              }
                                            },
                                            prices: {
                                              type: "array",
                                              items: {
                                                type: "object",
                                                properties: {
                                                  price1: {
                                                    type: "number"
                                                  },
                                                  price2: {
                                                    type: "number"
                                                  },
                                                  price3: {
                                                    type: "number"
                                                  },
                                                  expiryDate: {
                                                    type: "string",
                                                    format: "date"
                                                  }
                                                }
                                              }
                                            },
                                            vehicleGroup: {
                                              type: "string",
                                              description:
                                                "General vehicle group e.g. car, ute etc."
                                            },
                                            isHybrid: {
                                              type: "boolean"
                                            },
                                            isElectric: {
                                              type: "boolean"
                                            },
                                            countryOfOrigin: {
                                              type: "string"
                                            },
                                            externalReferences: {
                                              type: "array",
                                              items: {
                                                $ref:
                                                  "./common.oas2.yml#/definitions/external-reference"
                                              }
                                            },
                                            dataProvider: {
                                              type: "string"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    alternateVehicleType: {
                                      type: "array",
                                      items: {
                                        title: "Vehicle Type Output",
                                        allOf: [
                                          {
                                            type: "object",
                                            properties: {
                                              id: {
                                                type: "string",
                                                description:
                                                  "Internal unique id generated by our DB or system"
                                              }
                                            }
                                          },
                                          {
                                            title: "Vehicle Type Base",
                                            description:
                                              "The representation of vehicleType data.",
                                            type: "object",
                                            properties: {
                                              vehicleId: {
                                                type: "integer",
                                                description:
                                                  "Recieved from RedBook or other sources"
                                              },
                                              make: {
                                                type: "string",
                                                description:
                                                  "The make of the vehicle"
                                              },
                                              mass: {
                                                type: "string",
                                                description:
                                                  "Gross laden weight"
                                              },
                                              model: {
                                                type: "string"
                                              },
                                              vehicleType: {
                                                type: "string"
                                              },
                                              year: {
                                                type: "integer"
                                              },
                                              bodyStyle: {
                                                type: "string"
                                              },
                                              engineType: {
                                                type: "string"
                                              },
                                              driveType: {
                                                type: "string",
                                                description:
                                                  "4WD or 2WD or AWD etc"
                                              },
                                              doors: {
                                                type: "integer"
                                              },
                                              series: {
                                                type: "string"
                                              },
                                              engineCapacity: {
                                                type: "string"
                                              },
                                              engineSize: {
                                                type: "string"
                                              },
                                              equipmentLevel: {
                                                type: "string"
                                              },
                                              equipmentLevel2: {
                                                type: "string"
                                              },
                                              fullDescription: {
                                                type: "string"
                                              },
                                              standardEquipment: {
                                                type: "string"
                                              },
                                              gearType: {
                                                type: "string",
                                                description:
                                                  "Automatic or Manual"
                                              },
                                              releaseMonth: {
                                                type: "integer"
                                              },
                                              noOfGears: {
                                                type: "integer"
                                              },
                                              noOfCylinders: {
                                                type: "integer"
                                              },
                                              fuelType: {
                                                type: "string"
                                              },
                                              tareWeight: {
                                                type: "number",
                                                description: "Unladen weight"
                                              },
                                              newPrice: {
                                                type: "number"
                                              },
                                              isImported: {
                                                type: "boolean"
                                              },
                                              seatCapacity: {
                                                type: "integer"
                                              },
                                              axels: {
                                                type: "integer"
                                              },
                                              bodyType: {
                                                type: "string"
                                              },
                                              vehicleIndicators: {
                                                type: "array",
                                                items: {
                                                  type: "object",
                                                  properties: {
                                                    product: {
                                                      type: "string",
                                                      enum: [
                                                        "State PMV",
                                                        "FI PMV"
                                                      ]
                                                    },
                                                    name: {
                                                      type: "string"
                                                    },
                                                    value: {
                                                      type: "string"
                                                    },
                                                    expiryDate: {
                                                      type: "string",
                                                      format: "date"
                                                    }
                                                  }
                                                }
                                              },
                                              prices: {
                                                type: "array",
                                                items: {
                                                  type: "object",
                                                  properties: {
                                                    price1: {
                                                      type: "number"
                                                    },
                                                    price2: {
                                                      type: "number"
                                                    },
                                                    price3: {
                                                      type: "number"
                                                    },
                                                    expiryDate: {
                                                      type: "string",
                                                      format: "date"
                                                    }
                                                  }
                                                }
                                              },
                                              vehicleGroup: {
                                                type: "string",
                                                description:
                                                  "General vehicle group e.g. car, ute etc."
                                              },
                                              isHybrid: {
                                                type: "boolean"
                                              },
                                              isElectric: {
                                                type: "boolean"
                                              },
                                              countryOfOrigin: {
                                                type: "string"
                                              },
                                              externalReferences: {
                                                type: "array",
                                                items: {
                                                  $ref:
                                                    "./common.oas2.yml#/definitions/external-reference"
                                                }
                                              },
                                              dataProvider: {
                                                type: "string"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    alarmType: {
                                      type: "string"
                                    },
                                    fullDescription: {
                                      type: "string"
                                    },
                                    hasAccessory: {
                                      type: "boolean"
                                    },
                                    hasAlarm: {
                                      type: "boolean"
                                    },
                                    hasLowKM: {
                                      type: "boolean"
                                    },
                                    hasModification: {
                                      type: "boolean"
                                    },
                                    hasOccasionalUse: {
                                      type: "boolean"
                                    },
                                    isVintage: {
                                      type: "boolean"
                                    },
                                    purposeOfUse: {
                                      type: "string"
                                    },
                                    registrationNumber: {
                                      type: "string"
                                    },
                                    vehicleUsage: {
                                      type: "string"
                                    },
                                    vin: {
                                      type: "string"
                                    },
                                    colour: {
                                      title: "Vehicle Colour",
                                      description: "",
                                      type: "string",
                                      enum: [
                                        "BLUE",
                                        "RED",
                                        "GREEN",
                                        "WHITE",
                                        "BLACK",
                                        "YELLOW",
                                        "ORANGE",
                                        "BROWN",
                                        "CREAM",
                                        "GOLD",
                                        "GREY",
                                        "PINK",
                                        "PURPLE",
                                        "SILVER"
                                      ]
                                    },
                                    driverParties: {
                                      type: "array",
                                      items: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/driver"
                                      }
                                    },
                                    externalReferences: {
                                      type: "array",
                                      items: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/external-reference"
                                      }
                                    },
                                    modifications: {
                                      type: "array",
                                      items: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/modification"
                                      }
                                    },
                                    modificationsAmount: {
                                      $ref:
                                        "./common.oas2.yml#/definitions/amount-extended"
                                    },
                                    unnamedDrivers: {
                                      type: "array",
                                      items: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/unnamed-driver"
                                      }
                                    },
                                    mass: {
                                      type: "string"
                                    },
                                    vehicleClass: {
                                      type: "string"
                                    },
                                    securityFeatures: {
                                      type: "array",
                                      items: {
                                        type: "object",
                                        properties: {
                                          securityType: {
                                            type: "string"
                                          }
                                        }
                                      }
                                    },
                                    vehicleAssessments: {
                                      type: "array",
                                      items: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/vehicle-assessment"
                                      }
                                    },
                                    permanentFixtureAmount: {
                                      $ref:
                                        "./common.oas2.yml#/definitions/amount-extended"
                                    },
                                    isPermanentlySited: {
                                      type: "boolean"
                                    },
                                    isPrestige: {
                                      type: "boolean"
                                    },
                                    isExotic: {
                                      type: "boolean"
                                    },
                                    hasImmobiliser: {
                                      type: "boolean"
                                    },
                                    parkingLocations: {
                                      type: "array",
                                      items: {
                                        type: "object",
                                        properties: {
                                          code: {
                                            type: "string",
                                            description:
                                              "example - onRoad, offRoad, carPort"
                                          },
                                          description: {
                                            type: "string",
                                            description:
                                              "Add a description of parking location, if applicable"
                                          }
                                        }
                                      }
                                    },
                                    chassisNumber: {
                                      type: "string"
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        },
                        businessInterruption: {
                          title: "Business Interruption",
                          type: "object",
                          properties: {
                            name: {
                              type: "string",
                              description: "  "
                            }
                          }
                        },
                        dwelling: {
                          title: "Dwelling",
                          description: "",
                          type: "object",
                          properties: {
                            occupancyOtherDetails: {
                              type: "string"
                            },
                            numberOfDwellings: {
                              type: "integer",
                              description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum, arcu sit amet cursus dictum, libero ex vestibulum arcu, at elementum odio leo vel risus. Maecenas mi ipsum, vehicula ac dui sit amet, mattis ultricies lorem. Duis nec laoreet diam. Integer id aliquet tellus. Aliquam varius augue id mauris molestie, ac consectetur nulla vestibulum. Nulla lorem diam, euismod eget massa non, pulvinar tincidunt diam. Ut euismod augue at eros mattis, congue aliquet nisi pulvinar. Nam quis neque elit. Suspendisse pretium cursus dolor, eget vehicula sapien tristique ac. Ut eget varius ex, faucibus pharetra magna."
                            },
                            isTownWaterSupplied: {
                              type: "boolean",
                              description:
                                "Is the dwelling connected to the town water supply? Answer 'Yes' or 'No'"
                            },
                            yearBuilt: {
                              type: "integer",
                              description: "Year house was built"
                            },
                            hasAlarm: {
                              type: "boolean",
                              description:
                                "Flag to indicate if the house has a burglar alarm"
                            },
                            alarmType: {
                              type: "string",
                              description: "Type of alarm"
                            },
                            constructionMaterial: {
                              type: "string",
                              description: "The main construction material"
                            },
                            roofType: {
                              type: "string"
                            },
                            constructionQuality: {
                              type: "string",
                              description: "Quality of construction."
                            },
                            numberOfFloors: {
                              type: "integer"
                            },
                            numberOfDwellingsInBlock: {
                              type: "integer",
                              description:
                                "This indiates total number of Dwellings in the Block that may or may not be insured"
                            },
                            floorArea: {
                              type: "integer",
                              description: "Floor area in sq. metres"
                            },
                            weeklyRentalAmount: {
                              type: "number"
                            },
                            purposeOfUse: {
                              type: "string"
                            },
                            structureType: {
                              description:
                                "The structure type describes how the building is physically built.Buildings can be free standing, semi-detached, apartments/flats.",
                              type: "string"
                            },
                            slope: {
                              type: "string"
                            },
                            dwellingType: {
                              type: "string",
                              description:
                                'eg. "House", "Home Unit", "Flat", "Retirement Unit", "Board", "Apartment", "Freestanding property"'
                            },
                            occupancy: {
                              type: "string",
                              description:
                                "Types of occupancy  can be owner occupied, tenanted, holiday home, unoccupied"
                            },
                            location: {
                              title: "Location",
                              description: "",
                              type: "object",
                              properties: {
                                name: {
                                  type: "string"
                                },
                                address: {
                                  title: "Address Output",
                                  allOf: [
                                    {
                                      type: "object",
                                      properties: {
                                        id: {
                                          type: "string"
                                        }
                                      }
                                    },
                                    {
                                      title: "Address Base",
                                      description: "",
                                      type: "object",
                                      properties: {
                                        addressId: {
                                          description: "",
                                          type: "string"
                                        },
                                        addressPurpose: {
                                          title: "Address Purpose",
                                          type: "string",
                                          enum: [
                                            "BILLING",
                                            "BUSINESS",
                                            "HOME",
                                            "OTHER",
                                            "MAILING",
                                            "CONTACT"
                                          ]
                                        },
                                        boxNumber: {
                                          type: "string"
                                        },
                                        boxType: {
                                          type: "string"
                                        },
                                        buildingName: {
                                          type: "string"
                                        },
                                        city: {
                                          type: "string"
                                        },
                                        country: {
                                          type: "string"
                                        },
                                        deliveryType: {
                                          type: "string",
                                          enum: [
                                            "PO_BOX",
                                            "PRIVATE_BAG",
                                            "RESPONSE_BAG",
                                            "CMB",
                                            "COUNTER_DELIVERY",
                                            "POST_BOX",
                                            "RURAL"
                                          ]
                                        },
                                        description: {
                                          type: "string"
                                        },
                                        levelNumber: {
                                          type: "string"
                                        },
                                        levelType: {
                                          type: "string"
                                        },
                                        lobbyName: {
                                          type: "string"
                                        },
                                        postalCode: {
                                          type: "string"
                                        },
                                        region: {
                                          type: "string"
                                        },
                                        ruralDelivery: {
                                          type: "string"
                                        },
                                        ruralDistrict: {
                                          type: "string"
                                        },
                                        status: {
                                          type: "string"
                                        },
                                        streetName: {
                                          type: "string"
                                        },
                                        streetNumber: {
                                          type: "string"
                                        },
                                        streetNumberSuffix: {
                                          type: "string"
                                        },
                                        streetSuffix: {
                                          type: "string"
                                        },
                                        streetType: {
                                          type: "string"
                                        },
                                        subregion: {
                                          type: "string"
                                        },
                                        unitNumber: {
                                          type: "string"
                                        },
                                        unitType: {
                                          type: "string"
                                        },
                                        unstructured: {
                                          description:
                                            "An address represented in a single string",
                                          type: "string"
                                        },
                                        displayAddress: {
                                          type: "array",
                                          items: {
                                            type: "string"
                                          }
                                        },
                                        externalReferences: {
                                          type: "array",
                                          items: {
                                            $ref:
                                              "./common.oas2.yml#/definitions/external-reference"
                                          }
                                        },
                                        geoLocation: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/geo-location"
                                        },
                                        sourceId: {
                                          type: "string"
                                        },
                                        sourceType: {
                                          type: "string",
                                          description: "Can be Google, DPID etc"
                                        },
                                        rateLocation: {
                                          type: "string"
                                        }
                                      }
                                    }
                                  ]
                                },
                                placeType: {
                                  type: "string",
                                  enum: [
                                    "GARAGE_LOCATION",
                                    "PHYSICAL_LOCATION",
                                    "EXPORT_DESTINATION",
                                    "IMPORT_SOURCE",
                                    "STORAGE_LOCATION"
                                  ]
                                },
                                geoLocation: {
                                  title: "Geo Location",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    latitude: {
                                      type: "number"
                                    },
                                    longitude: {
                                      type: "number"
                                    },
                                    meshBlockId: {
                                      type: "string"
                                    },
                                    reliabilityLevel: {
                                      description:
                                        "Confidence Level, Reliability, Geocode Level Types, and ... (reliability levels 1, 2, or 3) can return a Meshblock ID.",
                                      type: "integer"
                                    },
                                    matchLevel: {
                                      type: "string",
                                      enum: [
                                        "EXACT",
                                        "PRIMARY",
                                        "SUBURB_LEVEL",
                                        "STREET_LEVEL",
                                        "NONE"
                                      ]
                                    },
                                    geoLocationId: {
                                      type: "string",
                                      description: "TUI"
                                    },
                                    xcoordinate: {
                                      type: "number"
                                    },
                                    ycoordinate: {
                                      type: "number"
                                    },
                                    indicators: {
                                      type: "array",
                                      items: {
                                        $ref:
                                          "./LocationIndicators.oas2.yml#/definitions/location-indicator"
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            isRewired: {
                              type: "boolean"
                            },
                            isReroofed: {
                              type: "boolean"
                            },
                            isReplumbed: {
                              type: "boolean"
                            },
                            isRelined: {
                              type: "boolean"
                            },
                            isRepiled: {
                              type: "boolean"
                            },
                            isNZHeritage: {
                              type: "boolean"
                            },
                            NZHeritageTypes: {
                              type: "array",
                              items: {
                                title: "Indicator Detail",
                                type: "object",
                                properties: {
                                  code: {
                                    type: "string"
                                  }
                                }
                              }
                            },
                            isCouncilHeritage: {
                              type: "boolean"
                            },
                            councilHeritageTypes: {
                              type: "array",
                              items: {
                                title: "Indicator Detail",
                                type: "object",
                                properties: {
                                  code: {
                                    type: "string"
                                  }
                                }
                              }
                            },
                            hasNaturalHazardHistory: {
                              type: "boolean"
                            },
                            naturalHazardHistoryTypes: {
                              type: "array",
                              items: {
                                title: "Indicator Detail",
                                type: "object",
                                properties: {
                                  code: {
                                    type: "string"
                                  }
                                }
                              }
                            },
                            isEQCSection28Issued: {
                              type: "boolean"
                            },
                            isCouncilNaturalHazardRisk: {
                              type: "boolean"
                            },
                            councilNaturalHazardRiskTypes: {
                              type: "array",
                              items: {
                                title: "Indicator Detail",
                                type: "object",
                                properties: {
                                  code: {
                                    type: "string"
                                  }
                                }
                              }
                            },
                            isCouncilSection74Issued: {
                              type: "boolean"
                            },
                            isUndergoingRenovation: {
                              type: "boolean"
                            },
                            isCodeOfComplianceIssued: {
                              type: "boolean"
                            },
                            isCouncilFloodRisk: {
                              type: "boolean"
                            },
                            councilFloodRiskTypes: {
                              type: "array",
                              items: {
                                title: "Indicator Detail",
                                type: "object",
                                properties: {
                                  code: {
                                    type: "string"
                                  }
                                }
                              }
                            },
                            isPartiallyUsedForBusiness: {
                              type: "boolean"
                            },
                            hasOverdueRentHistory: {
                              type: "boolean"
                            },
                            isManaged: {
                              type: "boolean"
                            },
                            managementType: {
                              type: "string"
                            },
                            isRegularlyInspected: {
                              type: "boolean"
                            },
                            hasMultipleTenancies: {
                              type: "boolean",
                              description:
                                "Are there multiple tenancy agreements for this property? Answer 'Yes' or 'No'"
                            },
                            numberOfTenancies: {
                              type: "integer"
                            },
                            isAvailableShortTerm: {
                              type: "boolean"
                            },
                            isLowStructuralRisk: {
                              type: "boolean"
                            },
                            bodyCorp: {
                              type: "object",
                              properties: {
                                isSingleBuilding: {
                                  type: "boolean"
                                }
                              }
                            }
                          }
                        },
                        liability: {
                          title: "Liability",
                          description: "",
                          type: "object",
                          properties: {
                            liabilityId: {
                              type: "string"
                            },
                            description: {
                              type: "string"
                            },
                            externalReferences: {
                              description: "",
                              type: "array",
                              items: {
                                title: "External Reference",
                                description: "",
                                type: "object",
                                properties: {
                                  namespace: {
                                    description:
                                      "A namespace for the identifier.",
                                    type: "string"
                                  },
                                  identifier: {
                                    description: "An identifier for the entity",
                                    type: "string"
                                  }
                                }
                              }
                            },
                            liabilityType: {
                              type: "string",
                              enum: [
                                "EMPLOYERS_LIABILITY",
                                "GENERAL_LIABILITY",
                                "STATUTORY_LIABILITY"
                              ]
                            },
                            liabilityCover: {
                              title: "Liability Cover",
                              description:
                                "Elements common to various types of Liablility",
                              type: "object",
                              properties: {
                                complianceWithLegislation: {
                                  type: "boolean"
                                },
                                lastProposalDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                oldestYearOfConstruction: {
                                  type: "integer"
                                },
                                penaltyOrPremiumLoadingImposed: {
                                  type: "boolean"
                                }
                              }
                            },
                            employersLiability: {
                              title: "Employers Liability",
                              description:
                                "Custom extension from IAA which matches Guidewire as the master of policy coverages",
                              type: "object",
                              properties: {
                                retroactiveDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                retroactiveType: {
                                  type: "string"
                                }
                              }
                            },
                            statutoryLiability: {
                              title: "Statutory Liability",
                              description:
                                "Custom extension from IAA which matches Guidewire as the master of policy coverages",
                              type: "object",
                              properties: {
                                retroactiveDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                retroactiveType: {
                                  type: "string"
                                }
                              }
                            },
                            generalLiability: {
                              title: "General Liability",
                              description:
                                "Also known as Broadform liability and public liability",
                              type: "object",
                              properties: {
                                annualVehicleServiceTurnover: {
                                  type: "number"
                                },
                                annualWatercraftServTurnover: {
                                  type: "number"
                                },
                                carsAndMotorcyclesSelected: {
                                  type: "boolean"
                                },
                                hasAircraftParts: {
                                  type: "boolean"
                                },
                                hasChargeForBusinessAdviceOrService: {
                                  type: "boolean"
                                },
                                hasChargeForPropertyOfOthersInControl: {
                                  type: "boolean"
                                },
                                hasChemicalsProduct: {
                                  type: "boolean"
                                },
                                hasContractualLiability: {
                                  type: "boolean"
                                },
                                hasDesignTheProduct: {
                                  type: "boolean"
                                },
                                hasEthicalDrugs: {
                                  type: "boolean"
                                },
                                hasExportProducts: {
                                  type: "boolean"
                                },
                                hasFertilisers: {
                                  type: "boolean"
                                },
                                hasHazardousGoods: {
                                  type: "boolean"
                                },
                                hasMaintainQAOrRecordSys: {
                                  type: "boolean"
                                },
                                hasPropertyOfOthersInControl: {
                                  type: "boolean"
                                },
                                hasProvidedBusinessAdviceOrService: {
                                  type: "boolean"
                                },
                                hasRadioactiveMaterial: {
                                  type: "boolean"
                                },
                                hasWatercraftExceed8m: {
                                  type: "boolean"
                                },
                                hasWithdrawnProduct: {
                                  type: "boolean"
                                },
                                hazardousSubstancesSubComplyWithLaws: {
                                  type: "boolean"
                                },
                                heavyTruckSelected: {
                                  type: "boolean"
                                },
                                lightTrucksAndVansSelected: {
                                  type: "boolean"
                                },
                                mobilePlantAndMachySelected: {
                                  type: "boolean"
                                },
                                numberOfLocations: {
                                  type: "integer"
                                },
                                otherVehiclesSelected: {
                                  type: "boolean"
                                },
                                otherVehicleDetails: {
                                  type: "string"
                                },
                                perfAndRacingCarSelected: {
                                  type: "boolean"
                                },
                                serviceAndRepairMotorVehicles: {
                                  type: "boolean"
                                },
                                serviceAndRepairWatercraft: {
                                  type: "boolean"
                                },
                                location: {
                                  title: "Location",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    name: {
                                      type: "string"
                                    },
                                    address: {
                                      $ref:
                                        "./Addresses.oas2.yml#/definitions/address-output"
                                    },
                                    placeType: {
                                      type: "string",
                                      enum: [
                                        "GARAGE_LOCATION",
                                        "PHYSICAL_LOCATION",
                                        "EXPORT_DESTINATION",
                                        "IMPORT_SOURCE",
                                        "STORAGE_LOCATION"
                                      ]
                                    },
                                    geoLocation: {
                                      $ref: "#/definitions/geo-location"
                                    }
                                  }
                                },
                                numberOfEmployees: {
                                  type: "string"
                                },
                                estimatedRevenue: {
                                  type: "string"
                                },
                                lastRevenue: {
                                  type: "string"
                                },
                                estimatedLastRevenue: {
                                  type: "string"
                                },
                                placesInvolved: {
                                  type: "array",
                                  items: {
                                    title: "Location",
                                    description: "",
                                    type: "object",
                                    properties: {
                                      name: {
                                        type: "string"
                                      },
                                      address: {
                                        $ref:
                                          "./Addresses.oas2.yml#/definitions/address-output"
                                      },
                                      placeType: {
                                        type: "string",
                                        enum: [
                                          "GARAGE_LOCATION",
                                          "PHYSICAL_LOCATION",
                                          "EXPORT_DESTINATION",
                                          "IMPORT_SOURCE",
                                          "STORAGE_LOCATION"
                                        ]
                                      },
                                      geoLocation: {
                                        $ref: "#/definitions/geo-location"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        marineCraft: {
                          title: "Marine Craft",
                          type: "object",
                          properties: {
                            boatType: {
                              type: "string"
                            },
                            constructionMaterial: {
                              type: "string"
                            },
                            fuelType: {
                              type: "string"
                            },
                            length: {
                              type: "number"
                            },
                            make: {
                              type: "string"
                            },
                            maxSpeed: {
                              type: "number"
                            },
                            model: {
                              type: "string"
                            },
                            name: {
                              type: "string"
                            },
                            storageMethod: {
                              type: "string"
                            },
                            year: {
                              type: "integer"
                            },
                            tonnage: {
                              type: "number"
                            },
                            serialNumber: {
                              type: "string"
                            },
                            registeredAt: {
                              type: "string"
                            },
                            usage: {
                              type: "string"
                            },
                            engines: {
                              type: "array",
                              items: {
                                title: "Engine",
                                type: "object",
                                properties: {
                                  engineType: {
                                    type: "string"
                                  },
                                  fuelType: {
                                    type: "string"
                                  },
                                  horsePower: {
                                    type: "number"
                                  },
                                  isAuxiliary: {
                                    type: "boolean"
                                  },
                                  make: {
                                    type: "string"
                                  },
                                  serialNumber: {
                                    type: "string"
                                  },
                                  yearMake: {
                                    type: "integer"
                                  },
                                  engineSize: {
                                    type: "string"
                                  },
                                  engineCapacity: {
                                    type: "string"
                                  },
                                  model: {
                                    type: "string"
                                  }
                                }
                              }
                            },
                            operatingLimits: {
                              type: "string"
                            },
                            externalReference: {
                              type: "array",
                              items: {
                                title: "External Reference",
                                description: "",
                                type: "object",
                                properties: {
                                  namespace: {
                                    description:
                                      "A namespace for the identifier.",
                                    type: "string"
                                  },
                                  identifier: {
                                    description: "An identifier for the entity",
                                    type: "string"
                                  }
                                }
                              }
                            },
                            beamWidth: {
                              type: "number"
                            },
                            draughtDepth: {
                              type: "number"
                            },
                            passengerCapacity: {
                              type: "integer"
                            },
                            propelledBy: {
                              type: "string",
                              description: "eg. Power, Sail "
                            }
                          }
                        },
                        structure: {
                          title: "Structure",
                          description: "",
                          type: "object",
                          properties: {
                            isTownWaterSupplied: {
                              type: "boolean"
                            },
                            numberOfInsuredUnits: {
                              type: "integer"
                            },
                            structureNumber: {
                              type: "string"
                            },
                            numberOfFloors: {
                              type: "integer"
                            },
                            constructionMaterial: {
                              type: "string"
                            },
                            structureType: {
                              type: "string"
                            },
                            fireAlarmType: {
                              type: "string"
                            },
                            yearBuilt: {
                              type: "integer"
                            },
                            description: {
                              type: "string"
                            },
                            inspection: {
                              type: "boolean"
                            },
                            structuralFramingType: {
                              type: "string"
                            },
                            alarmType: {
                              type: "string"
                            },
                            value: {
                              type: "number"
                            },
                            roofMaterial: {
                              type: "string"
                            },
                            burglaryClass: {
                              type: "string"
                            },
                            structureId: {
                              type: "string"
                            },
                            sprinklerSystemType: {
                              type: "string"
                            },
                            hasAlarm: {
                              type: "boolean"
                            },
                            percentOfInsulatedPanels: {
                              type: "integer"
                            },
                            fireProtection: {
                              type: "string"
                            },
                            hasSmokeDetectors: {
                              type: "boolean"
                            },
                            isDualWaterSupply: {
                              type: "boolean"
                            },
                            isHalfOrMoreUnoccupied: {
                              type: "boolean"
                            },
                            isOccupantBurglarRisk: {
                              type: "boolean"
                            },
                            isOccupantFireRisk: {
                              type: "boolean"
                            },
                            isNZS4541Compliant: {
                              type: "string"
                            },
                            numberOfHabitableUnits: {
                              type: "integer"
                            },
                            riskSurveyClassification: {
                              type: "string"
                            },
                            isResidentialProportionMoreThanHalf: {
                              type: "boolean"
                            },
                            hasAutoFireSuppressionSystem: {
                              description:
                                "A system for suppressing fire which is something other than a sprinkler system.",
                              type: "boolean"
                            },
                            hasSprinklers: {
                              description:
                                "Does the structure have sprinklers installed.",
                              type: "boolean"
                            },
                            isNoneOfTheAbove: {
                              type: "boolean"
                            },
                            externalReferences: {
                              description: "",
                              type: "array",
                              items: {
                                title: "External Reference",
                                description: "",
                                type: "object",
                                properties: {
                                  namespace: {
                                    description:
                                      "A namespace for the identifier.",
                                    type: "string"
                                  },
                                  identifier: {
                                    description: "An identifier for the entity",
                                    type: "string"
                                  }
                                }
                              }
                            },
                            location: {
                              title: "Location",
                              description: "",
                              type: "object",
                              properties: {
                                name: {
                                  type: "string"
                                },
                                address: {
                                  title: "Address Output",
                                  allOf: [
                                    {
                                      type: "object",
                                      properties: {
                                        id: {
                                          type: "string"
                                        }
                                      }
                                    },
                                    {
                                      title: "Address Base",
                                      description: "",
                                      type: "object",
                                      properties: {
                                        addressId: {
                                          description: "",
                                          type: "string"
                                        },
                                        addressPurpose: {
                                          title: "Address Purpose",
                                          type: "string",
                                          enum: [
                                            "BILLING",
                                            "BUSINESS",
                                            "HOME",
                                            "OTHER",
                                            "MAILING",
                                            "CONTACT"
                                          ]
                                        },
                                        boxNumber: {
                                          type: "string"
                                        },
                                        boxType: {
                                          type: "string"
                                        },
                                        buildingName: {
                                          type: "string"
                                        },
                                        city: {
                                          type: "string"
                                        },
                                        country: {
                                          type: "string"
                                        },
                                        deliveryType: {
                                          type: "string",
                                          enum: [
                                            "PO_BOX",
                                            "PRIVATE_BAG",
                                            "RESPONSE_BAG",
                                            "CMB",
                                            "COUNTER_DELIVERY",
                                            "POST_BOX",
                                            "RURAL"
                                          ]
                                        },
                                        description: {
                                          type: "string"
                                        },
                                        levelNumber: {
                                          type: "string"
                                        },
                                        levelType: {
                                          type: "string"
                                        },
                                        lobbyName: {
                                          type: "string"
                                        },
                                        postalCode: {
                                          type: "string"
                                        },
                                        region: {
                                          type: "string"
                                        },
                                        ruralDelivery: {
                                          type: "string"
                                        },
                                        ruralDistrict: {
                                          type: "string"
                                        },
                                        status: {
                                          type: "string"
                                        },
                                        streetName: {
                                          type: "string"
                                        },
                                        streetNumber: {
                                          type: "string"
                                        },
                                        streetNumberSuffix: {
                                          type: "string"
                                        },
                                        streetSuffix: {
                                          type: "string"
                                        },
                                        streetType: {
                                          type: "string"
                                        },
                                        subregion: {
                                          type: "string"
                                        },
                                        unitNumber: {
                                          type: "string"
                                        },
                                        unitType: {
                                          type: "string"
                                        },
                                        unstructured: {
                                          description:
                                            "An address represented in a single string",
                                          type: "string"
                                        },
                                        displayAddress: {
                                          type: "array",
                                          items: {
                                            type: "string"
                                          }
                                        },
                                        externalReferences: {
                                          type: "array",
                                          items: {
                                            $ref:
                                              "./common.oas2.yml#/definitions/external-reference"
                                          }
                                        },
                                        geoLocation: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/geo-location"
                                        },
                                        sourceId: {
                                          type: "string"
                                        },
                                        sourceType: {
                                          type: "string",
                                          description: "Can be Google, DPID etc"
                                        },
                                        rateLocation: {
                                          type: "string"
                                        }
                                      }
                                    }
                                  ]
                                },
                                placeType: {
                                  type: "string",
                                  enum: [
                                    "GARAGE_LOCATION",
                                    "PHYSICAL_LOCATION",
                                    "EXPORT_DESTINATION",
                                    "IMPORT_SOURCE",
                                    "STORAGE_LOCATION"
                                  ]
                                },
                                geoLocation: {
                                  title: "Geo Location",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    latitude: {
                                      type: "number"
                                    },
                                    longitude: {
                                      type: "number"
                                    },
                                    meshBlockId: {
                                      type: "string"
                                    },
                                    reliabilityLevel: {
                                      description:
                                        "Confidence Level, Reliability, Geocode Level Types, and ... (reliability levels 1, 2, or 3) can return a Meshblock ID.",
                                      type: "integer"
                                    },
                                    matchLevel: {
                                      type: "string",
                                      enum: [
                                        "EXACT",
                                        "PRIMARY",
                                        "SUBURB_LEVEL",
                                        "STREET_LEVEL",
                                        "NONE"
                                      ]
                                    },
                                    geoLocationId: {
                                      type: "string",
                                      description: "TUI"
                                    },
                                    xcoordinate: {
                                      type: "number"
                                    },
                                    ycoordinate: {
                                      type: "number"
                                    },
                                    indicators: {
                                      type: "array",
                                      items: {
                                        $ref:
                                          "./LocationIndicators.oas2.yml#/definitions/location-indicator"
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            strengthened: {
                              title: "Strengthened",
                              description: "",
                              type: "object",
                              properties: {
                                description: {
                                  type: "string"
                                },
                                percentCompliant: {
                                  type: "string",
                                  enum: [
                                    "THIRTY_FOUR_PERCENT_OF_CODE",
                                    "SIXTY_SEVEN_PERCENT_OF_CODE",
                                    "ONE_HUNDRED_PERCENT_OF_CODE",
                                    "OTHER",
                                    "UNKNOWN"
                                  ]
                                },
                                percentValue: {
                                  type: "number"
                                }
                              }
                            },
                            annualRentalIncome: {
                              type: "number"
                            },
                            hasInsulatedPanels: {
                              type: "boolean"
                            },
                            hasBodyCorp: {
                              type: "boolean"
                            },
                            hasSoleOccupancy: {
                              type: "boolean"
                            },
                            hasResidentialPortion: {
                              type: "boolean"
                            },
                            isCloseToHazard: {
                              type: "boolean"
                            },
                            hasSection72Notice: {
                              type: "boolean"
                            },
                            hasHadSubsidence: {
                              type: "boolean"
                            },
                            buildingAge: {
                              type: "string"
                            },
                            numberOfResidentialDwellings: {
                              type: "integer"
                            }
                          }
                        },
                        vehicle: {
                          title: "Vehicle Output",
                          allOf: [
                            {
                              type: "object",
                              properties: {
                                id: {
                                  type: "string",
                                  description:
                                    "Internal unique id generated by our DB or system"
                                }
                              }
                            },
                            {
                              title: "Vehicle Base",
                              description:
                                "The representation of vehicle data.",
                              type: "object",
                              properties: {
                                vehicleType: {
                                  title: "Vehicle Type Output",
                                  allOf: [
                                    {
                                      type: "object",
                                      properties: {
                                        id: {
                                          type: "string",
                                          description:
                                            "Internal unique id generated by our DB or system"
                                        }
                                      }
                                    },
                                    {
                                      title: "Vehicle Type Base",
                                      description:
                                        "The representation of vehicleType data.",
                                      type: "object",
                                      properties: {
                                        vehicleId: {
                                          type: "integer",
                                          description:
                                            "Recieved from RedBook or other sources"
                                        },
                                        make: {
                                          type: "string",
                                          description: "The make of the vehicle"
                                        },
                                        mass: {
                                          type: "string",
                                          description: "Gross laden weight"
                                        },
                                        model: {
                                          type: "string"
                                        },
                                        vehicleType: {
                                          type: "string"
                                        },
                                        year: {
                                          type: "integer"
                                        },
                                        bodyStyle: {
                                          type: "string"
                                        },
                                        engineType: {
                                          type: "string"
                                        },
                                        driveType: {
                                          type: "string",
                                          description: "4WD or 2WD or AWD etc"
                                        },
                                        doors: {
                                          type: "integer"
                                        },
                                        series: {
                                          type: "string"
                                        },
                                        engineCapacity: {
                                          type: "string"
                                        },
                                        engineSize: {
                                          type: "string"
                                        },
                                        equipmentLevel: {
                                          type: "string"
                                        },
                                        equipmentLevel2: {
                                          type: "string"
                                        },
                                        fullDescription: {
                                          type: "string"
                                        },
                                        standardEquipment: {
                                          type: "string"
                                        },
                                        gearType: {
                                          type: "string",
                                          description: "Automatic or Manual"
                                        },
                                        releaseMonth: {
                                          type: "integer"
                                        },
                                        noOfGears: {
                                          type: "integer"
                                        },
                                        noOfCylinders: {
                                          type: "integer"
                                        },
                                        fuelType: {
                                          type: "string"
                                        },
                                        tareWeight: {
                                          type: "number",
                                          description: "Unladen weight"
                                        },
                                        newPrice: {
                                          type: "number"
                                        },
                                        isImported: {
                                          type: "boolean"
                                        },
                                        seatCapacity: {
                                          type: "integer"
                                        },
                                        axels: {
                                          type: "integer"
                                        },
                                        bodyType: {
                                          type: "string"
                                        },
                                        vehicleIndicators: {
                                          type: "array",
                                          items: {
                                            type: "object",
                                            properties: {
                                              product: {
                                                type: "string",
                                                enum: ["State PMV", "FI PMV"]
                                              },
                                              name: {
                                                type: "string"
                                              },
                                              value: {
                                                type: "string"
                                              },
                                              expiryDate: {
                                                type: "string",
                                                format: "date"
                                              }
                                            }
                                          }
                                        },
                                        prices: {
                                          type: "array",
                                          items: {
                                            type: "object",
                                            properties: {
                                              price1: {
                                                type: "number"
                                              },
                                              price2: {
                                                type: "number"
                                              },
                                              price3: {
                                                type: "number"
                                              },
                                              expiryDate: {
                                                type: "string",
                                                format: "date"
                                              }
                                            }
                                          }
                                        },
                                        vehicleGroup: {
                                          type: "string",
                                          description:
                                            "General vehicle group e.g. car, ute etc."
                                        },
                                        isHybrid: {
                                          type: "boolean"
                                        },
                                        isElectric: {
                                          type: "boolean"
                                        },
                                        countryOfOrigin: {
                                          type: "string"
                                        },
                                        externalReferences: {
                                          type: "array",
                                          items: {
                                            $ref:
                                              "./common.oas2.yml#/definitions/external-reference"
                                          }
                                        },
                                        dataProvider: {
                                          type: "string"
                                        }
                                      }
                                    }
                                  ]
                                },
                                alternateVehicleType: {
                                  type: "array",
                                  items: {
                                    title: "Vehicle Type Output",
                                    allOf: [
                                      {
                                        type: "object",
                                        properties: {
                                          id: {
                                            type: "string",
                                            description:
                                              "Internal unique id generated by our DB or system"
                                          }
                                        }
                                      },
                                      {
                                        title: "Vehicle Type Base",
                                        description:
                                          "The representation of vehicleType data.",
                                        type: "object",
                                        properties: {
                                          vehicleId: {
                                            type: "integer",
                                            description:
                                              "Recieved from RedBook or other sources"
                                          },
                                          make: {
                                            type: "string",
                                            description:
                                              "The make of the vehicle"
                                          },
                                          mass: {
                                            type: "string",
                                            description: "Gross laden weight"
                                          },
                                          model: {
                                            type: "string"
                                          },
                                          vehicleType: {
                                            type: "string"
                                          },
                                          year: {
                                            type: "integer"
                                          },
                                          bodyStyle: {
                                            type: "string"
                                          },
                                          engineType: {
                                            type: "string"
                                          },
                                          driveType: {
                                            type: "string",
                                            description: "4WD or 2WD or AWD etc"
                                          },
                                          doors: {
                                            type: "integer"
                                          },
                                          series: {
                                            type: "string"
                                          },
                                          engineCapacity: {
                                            type: "string"
                                          },
                                          engineSize: {
                                            type: "string"
                                          },
                                          equipmentLevel: {
                                            type: "string"
                                          },
                                          equipmentLevel2: {
                                            type: "string"
                                          },
                                          fullDescription: {
                                            type: "string"
                                          },
                                          standardEquipment: {
                                            type: "string"
                                          },
                                          gearType: {
                                            type: "string",
                                            description: "Automatic or Manual"
                                          },
                                          releaseMonth: {
                                            type: "integer"
                                          },
                                          noOfGears: {
                                            type: "integer"
                                          },
                                          noOfCylinders: {
                                            type: "integer"
                                          },
                                          fuelType: {
                                            type: "string"
                                          },
                                          tareWeight: {
                                            type: "number",
                                            description: "Unladen weight"
                                          },
                                          newPrice: {
                                            type: "number"
                                          },
                                          isImported: {
                                            type: "boolean"
                                          },
                                          seatCapacity: {
                                            type: "integer"
                                          },
                                          axels: {
                                            type: "integer"
                                          },
                                          bodyType: {
                                            type: "string"
                                          },
                                          vehicleIndicators: {
                                            type: "array",
                                            items: {
                                              type: "object",
                                              properties: {
                                                product: {
                                                  type: "string",
                                                  enum: ["State PMV", "FI PMV"]
                                                },
                                                name: {
                                                  type: "string"
                                                },
                                                value: {
                                                  type: "string"
                                                },
                                                expiryDate: {
                                                  type: "string",
                                                  format: "date"
                                                }
                                              }
                                            }
                                          },
                                          prices: {
                                            type: "array",
                                            items: {
                                              type: "object",
                                              properties: {
                                                price1: {
                                                  type: "number"
                                                },
                                                price2: {
                                                  type: "number"
                                                },
                                                price3: {
                                                  type: "number"
                                                },
                                                expiryDate: {
                                                  type: "string",
                                                  format: "date"
                                                }
                                              }
                                            }
                                          },
                                          vehicleGroup: {
                                            type: "string",
                                            description:
                                              "General vehicle group e.g. car, ute etc."
                                          },
                                          isHybrid: {
                                            type: "boolean"
                                          },
                                          isElectric: {
                                            type: "boolean"
                                          },
                                          countryOfOrigin: {
                                            type: "string"
                                          },
                                          externalReferences: {
                                            type: "array",
                                            items: {
                                              $ref:
                                                "./common.oas2.yml#/definitions/external-reference"
                                            }
                                          },
                                          dataProvider: {
                                            type: "string"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                alarmType: {
                                  type: "string"
                                },
                                fullDescription: {
                                  type: "string"
                                },
                                hasAccessory: {
                                  type: "boolean"
                                },
                                hasAlarm: {
                                  type: "boolean"
                                },
                                hasLowKM: {
                                  type: "boolean"
                                },
                                hasModification: {
                                  type: "boolean"
                                },
                                hasOccasionalUse: {
                                  type: "boolean"
                                },
                                isVintage: {
                                  type: "boolean"
                                },
                                purposeOfUse: {
                                  type: "string"
                                },
                                registrationNumber: {
                                  type: "string"
                                },
                                vehicleUsage: {
                                  type: "string"
                                },
                                vin: {
                                  type: "string"
                                },
                                colour: {
                                  title: "Vehicle Colour",
                                  description: "",
                                  type: "string",
                                  enum: [
                                    "BLUE",
                                    "RED",
                                    "GREEN",
                                    "WHITE",
                                    "BLACK",
                                    "YELLOW",
                                    "ORANGE",
                                    "BROWN",
                                    "CREAM",
                                    "GOLD",
                                    "GREY",
                                    "PINK",
                                    "PURPLE",
                                    "SILVER"
                                  ]
                                },
                                driverParties: {
                                  type: "array",
                                  items: {
                                    $ref:
                                      "./common.oas2.yml#/definitions/driver"
                                  }
                                },
                                externalReferences: {
                                  type: "array",
                                  items: {
                                    $ref:
                                      "./common.oas2.yml#/definitions/external-reference"
                                  }
                                },
                                modifications: {
                                  type: "array",
                                  items: {
                                    $ref:
                                      "./common.oas2.yml#/definitions/modification"
                                  }
                                },
                                modificationsAmount: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/amount-extended"
                                },
                                unnamedDrivers: {
                                  type: "array",
                                  items: {
                                    $ref:
                                      "./common.oas2.yml#/definitions/unnamed-driver"
                                  }
                                },
                                mass: {
                                  type: "string"
                                },
                                vehicleClass: {
                                  type: "string"
                                },
                                securityFeatures: {
                                  type: "array",
                                  items: {
                                    type: "object",
                                    properties: {
                                      securityType: {
                                        type: "string"
                                      }
                                    }
                                  }
                                },
                                vehicleAssessments: {
                                  type: "array",
                                  items: {
                                    $ref:
                                      "./common.oas2.yml#/definitions/vehicle-assessment"
                                  }
                                },
                                permanentFixtureAmount: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/amount-extended"
                                },
                                isPermanentlySited: {
                                  type: "boolean"
                                },
                                isPrestige: {
                                  type: "boolean"
                                },
                                isExotic: {
                                  type: "boolean"
                                },
                                hasImmobiliser: {
                                  type: "boolean"
                                },
                                parkingLocations: {
                                  type: "array",
                                  items: {
                                    type: "object",
                                    properties: {
                                      code: {
                                        type: "string",
                                        description:
                                          "example - onRoad, offRoad, carPort"
                                      },
                                      description: {
                                        type: "string",
                                        description:
                                          "Add a description of parking location, if applicable"
                                      }
                                    }
                                  }
                                },
                                chassisNumber: {
                                  type: "string"
                                }
                              }
                            }
                          ]
                        },
                        coverType: {
                          type: "string",
                          description:
                            "Type of cover purchased for the insured risk"
                        },
                        assessmentResults: {
                          type: "array",
                          items: {
                            title: "Assessment Results",
                            description:
                              "The result of an evaluation, based on an expert opinion, on the use of specialised instrumentation, or on the use of analytical systems. This includes scores (of parties, market segments, policies, and places) calculated for risk assessment, marketing or other purposes, financial valuations (of parties, market segments, agreements and physical objects) and conditions (of places, physical objects and activity occurrences). The details of the assessment activity which resulted in the assessment result may not always be known by the modelled organisation.",
                            type: "object",
                            properties: {
                              requiredAuthorityLevel: {
                                type: "string"
                              },
                              assessmentDate: {
                                title: "Date Only Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date"
                                  },
                                  format: {
                                    type: "string",
                                    enum: ["yyyy-MM-dd", "yyyy-MM", "yyyy"]
                                  }
                                },
                                required: ["value"]
                              },
                              reasons: {
                                type: "array",
                                items: {
                                  type: "object",
                                  properties: {
                                    status: {
                                      type: "string",
                                      enum: ["REFER", "COMMENT", "FAIL"]
                                    },
                                    code: {
                                      type: "string"
                                    },
                                    description: {
                                      type: "string"
                                    },
                                    authorityLevel: {
                                      type: "string"
                                    }
                                  }
                                }
                              },
                              isBindable: {
                                type: "boolean"
                              }
                            }
                          }
                        },
                        confirmationHistories: {
                          type: "array",
                          items: {
                            title: "Confirmation History",
                            description: "",
                            type: "object",
                            properties: {
                              code: {
                                type: "string"
                              },
                              period: {
                                type: "string",
                                description:
                                  "Describe the period of confirmations - e.g. \"last 5 years'"
                              },
                              lossAmount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              numberOfConfirmations: {
                                type: "integer"
                              },
                              hasConfirmationsOver10000: {
                                type: "boolean"
                              },
                              yearsInBusiness: {
                                type: "integer"
                              },
                              lineOfBusinessCategory: {
                                title: "Line Of Business Category",
                                type: "string",
                                enum: [
                                  "COMMERCIAL_VEHICLE",
                                  "PRIVATE_VEHICLE",
                                  "HOME",
                                  "CONTENTS",
                                  "LIABILITY",
                                  "PLEASUREKRAFT",
                                  "BUSINESS_ASSETS",
                                  "MOBILE_BUSINESS_ASSETS",
                                  "BUSINESS_INTERRUPTION",
                                  "MARINE",
                                  "COMMERCIAL_PROPERTY"
                                ]
                              },
                              hasHadMoreThan10Confirmations: {
                                type: "boolean"
                              },
                              confirmationSummaries: {
                                type: "array",
                                items: {
                                  title: "Confirmation Summary",
                                  type: "object",
                                  properties: {
                                    description: {
                                      type: "string"
                                    },
                                    dateOfLoss: {
                                      title: "Date Only Extended",
                                      type: "object",
                                      properties: {
                                        value: {
                                          type: "string",
                                          format: "date"
                                        },
                                        format: {
                                          type: "string",
                                          enum: [
                                            "yyyy-MM-dd",
                                            "yyyy-MM",
                                            "yyyy"
                                          ]
                                        }
                                      },
                                      required: ["value"]
                                    },
                                    costOfConfirmation: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    code: {
                                      type: "string"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        insuredParty: {
                          type: "object",
                          properties: {
                            partyId: {
                              type: "string"
                            },
                            systemOfRecord: {
                              title: "System Of Record",
                              type: "string",
                              enum: [
                                "LOREM",
                                "HEART",
                                "IPSUM_CENTER",
                                "SECURITY",
                                "BAR",
                                "FOO",
                                "BUDDY",
                                "BONUS"
                              ]
                            },
                            partyRole: {
                              title: "Party Role",
                              type: "string",
                              enum: [
                                "CUSTOMER",
                                "INSURED",
                                "ADDITIONAL_INSURED",
                                "NAMED_DRIVER",
                                "PRIMARY_CONTACT",
                                "SECONDARY_CONTACT",
                                "AUTHORISER",
                                "NAMED_PARTY"
                              ]
                            }
                          }
                        },
                        generalCover: {
                          title: "General Cover",
                          description:
                            "Elements common to various types of Liablility",
                          type: "object",
                          properties: {
                            numberOfSites: {
                              type: "integer"
                            },
                            numberOfEmployees: {
                              type: "number"
                            },
                            numberOfYearsInBusiness: {
                              type: "number"
                            },
                            turnover: {
                              type: "number"
                            },
                            estimatedTurnover: {
                              type: "number"
                            },
                            lastTurnover: {
                              type: "number"
                            },
                            estimatedLastTurnover: {
                              type: "number"
                            },
                            indemnityPeriod: {
                              type: "integer"
                            },
                            retroactiveDate: {
                              title: "Date Time Extended",
                              type: "object",
                              properties: {
                                value: {
                                  type: "string",
                                  format: "date-time"
                                },
                                format: {
                                  type: "string",
                                  enum: [
                                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                    "yyyy-MM-dd'T'HH:mm'Z'",
                                    "yyyy-MM-dd'T'HH",
                                    "yyyy-MM-dd",
                                    "yyyy-MM",
                                    "yyyy"
                                  ]
                                },
                                minValue: {
                                  type: "string"
                                },
                                maxValue: {
                                  type: "string"
                                },
                                defaultValue: {
                                  type: "string"
                                }
                              },
                              required: ["value"]
                            },
                            retroactiveType: {
                              type: "string"
                            },
                            materialChange: {
                              type: "string"
                            },
                            declarationDate: {
                              title: "Date Time Extended",
                              type: "object",
                              properties: {
                                value: {
                                  type: "string",
                                  format: "date-time"
                                },
                                format: {
                                  type: "string",
                                  enum: [
                                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                    "yyyy-MM-dd'T'HH:mm'Z'",
                                    "yyyy-MM-dd'T'HH",
                                    "yyyy-MM-dd",
                                    "yyyy-MM",
                                    "yyyy"
                                  ]
                                },
                                minValue: {
                                  type: "string"
                                },
                                maxValue: {
                                  type: "string"
                                },
                                defaultValue: {
                                  type: "string"
                                }
                              },
                              required: ["value"]
                            },
                            continuityDate: {
                              title: "Date Time Extended",
                              type: "object",
                              properties: {
                                value: {
                                  type: "string",
                                  format: "date-time"
                                },
                                format: {
                                  type: "string",
                                  enum: [
                                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                    "yyyy-MM-dd'T'HH:mm'Z'",
                                    "yyyy-MM-dd'T'HH",
                                    "yyyy-MM-dd",
                                    "yyyy-MM",
                                    "yyyy"
                                  ]
                                },
                                minValue: {
                                  type: "string"
                                },
                                maxValue: {
                                  type: "string"
                                },
                                defaultValue: {
                                  type: "string"
                                }
                              },
                              required: ["value"]
                            },
                            eligibilityPeriod: {
                              title: "Time Period",
                              type: "object",
                              properties: {
                                startDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                endDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                length: {
                                  type: "number"
                                },
                                lengthUnit: {
                                  type: "string",
                                  enum: [
                                    "HOURS",
                                    "DAYS",
                                    "WEEKS",
                                    "MONTHS",
                                    "YEARS"
                                  ]
                                },
                                description: {
                                  type: "string"
                                }
                              }
                            },
                            extendedReportingPeriod: {
                              title: "Time Period",
                              type: "object",
                              properties: {
                                startDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                endDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                length: {
                                  type: "number"
                                },
                                lengthUnit: {
                                  type: "string",
                                  enum: [
                                    "HOURS",
                                    "DAYS",
                                    "WEEKS",
                                    "MONTHS",
                                    "YEARS"
                                  ]
                                },
                                description: {
                                  type: "string"
                                }
                              }
                            },
                            businessDescription: {
                              type: "string"
                            },
                            productTerritory: {
                              type: "string"
                            },
                            jurisdiction: {
                              type: "string"
                            },
                            contractDescription: {
                              type: "string"
                            },
                            otherInsuredEntities: {
                              type: "object",
                              properties: {
                                name: {
                                  type: "string"
                                },
                                insuredType: {
                                  type: "string",
                                  enum: [
                                    "UNKNOWN",
                                    "PRINCIPLE",
                                    "CONTRACTOR",
                                    "SUB_CONTRACTOR"
                                  ]
                                }
                              }
                            },
                            maintenancePeriod: {
                              title: "Time Period",
                              type: "object",
                              properties: {
                                startDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                endDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                length: {
                                  type: "number"
                                },
                                lengthUnit: {
                                  type: "string",
                                  enum: [
                                    "HOURS",
                                    "DAYS",
                                    "WEEKS",
                                    "MONTHS",
                                    "YEARS"
                                  ]
                                },
                                description: {
                                  type: "string"
                                }
                              }
                            },
                            constructionPeriod: {
                              title: "Time Period",
                              type: "object",
                              properties: {
                                startDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                endDate: {
                                  title: "Date Time Extended",
                                  type: "object",
                                  properties: {
                                    value: {
                                      type: "string",
                                      format: "date-time"
                                    },
                                    format: {
                                      type: "string",
                                      enum: [
                                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                        "yyyy-MM-dd'T'HH:mm'Z'",
                                        "yyyy-MM-dd'T'HH",
                                        "yyyy-MM-dd",
                                        "yyyy-MM",
                                        "yyyy"
                                      ]
                                    },
                                    minValue: {
                                      type: "string"
                                    },
                                    maxValue: {
                                      type: "string"
                                    },
                                    defaultValue: {
                                      type: "string"
                                    }
                                  },
                                  required: ["value"]
                                },
                                length: {
                                  type: "number"
                                },
                                lengthUnit: {
                                  type: "string",
                                  enum: [
                                    "HOURS",
                                    "DAYS",
                                    "WEEKS",
                                    "MONTHS",
                                    "YEARS"
                                  ]
                                },
                                description: {
                                  type: "string"
                                }
                              }
                            },
                            constructionType: {
                              type: "string"
                            },
                            constructionDate: {
                              title: "Date Only Extended",
                              type: "object",
                              properties: {
                                value: {
                                  type: "string",
                                  format: "date"
                                },
                                format: {
                                  type: "string",
                                  enum: ["yyyy-MM-dd", "yyyy-MM", "yyyy"]
                                }
                              },
                              required: ["value"]
                            }
                          }
                        },
                        settlementBasis: {
                          type: "string",
                          enum: [
                            "AGREED_VALUE",
                            "FIXED_VALUE",
                            "MARKET_VALUE",
                            "SUM_INSURED"
                          ],
                          description:
                            "The basis on which the confirmation would be settled on this risk"
                        },
                        isDisabled: {
                          type: "boolean",
                          description:
                            "Used mainly for Quote UI where the user can enable/disable the risks in UI"
                        },
                        financialServicesProduct: {
                          type: "object",
                          properties: {
                            wordingCode: {
                              type: "string",
                              description:
                                "Only use when necessary to override the wording code at insuredRisk Group level. e.g. Lorem liability risks which have different wording for each risk within the same group"
                            }
                          }
                        },
                        isRiskTransitioning: {
                          type: "boolean",
                          description:
                            "Only used for Rating renewals. Indicates if the risk is transitioning from one rating engine to another"
                        },
                        deferments: {
                          type: "array",
                          items: {
                            title: "Deferment",
                            type: "object",
                            properties: {
                              code: {
                                type: "string",
                                description: "Code used in System of record"
                              },
                              name: {
                                type: "string"
                              },
                              category: {
                                type: "string"
                              },
                              description: {
                                type: "string",
                                enum: ["STANDARD", "VOLUNTARY", "IMPOSED"]
                              },
                              length: {
                                type: "number"
                              },
                              period: {
                                type: "string",
                                enum: ["HOURS", "DAYS", "WEEKS", "MONTHS"]
                              }
                            }
                          }
                        },
                        namedParties: {
                          type: "object",
                          properties: {
                            partyId: {
                              type: "string"
                            },
                            systemOfRecord: {
                              title: "System Of Record",
                              type: "string",
                              enum: [
                                "LOREM",
                                "HEART",
                                "IPSUM_CENTER",
                                "SECURITY",
                                "BAR",
                                "FOO",
                                "BUDDY",
                                "BONUS"
                              ]
                            },
                            partyRole: {
                              title: "Party Role",
                              type: "string",
                              enum: [
                                "CUSTOMER",
                                "INSURED",
                                "ADDITIONAL_INSURED",
                                "NAMED_DRIVER",
                                "PRIMARY_CONTACT",
                                "SECONDARY_CONTACT",
                                "AUTHORISER",
                                "NAMED_PARTY"
                              ]
                            }
                          }
                        }
                      }
                    }
                  },
                  financialServicesProduct: {
                    title: "Contract Specification",
                    description:
                      "The representation of the rules governing the commitments a financial services provider has a business interest in.",
                    type: "object",
                    properties: {
                      name: {
                        type: "string"
                      },
                      code: {
                        type: "string",
                        description:
                          'System of record code. At policy level this is the package code. At insured Risk Group level, this is Risk Specification class, eg. For HEART  "PEC", "PES" etc.'
                      },
                      description: {
                        description: "Policy wording",
                        type: "string"
                      },
                      wordingCode: {
                        type: "string"
                      },
                      conditions: {
                        description: "",
                        type: "array",
                        items: {
                          title: "Peril Category",
                          description: "",
                          type: "object",
                          properties: {
                            name: {
                              type: "string"
                            },
                            code: {
                              type: "string"
                            },
                            value: {
                              type: "string"
                            },
                            description: {
                              type: "string"
                            },
                            subCategories: {
                              description: "",
                              type: "array",
                              items: {
                                title: "Peril Category",
                                description: "",
                                type: "object",
                                properties: {
                                  name: {
                                    type: "string"
                                  },
                                  code: {
                                    type: "string"
                                  },
                                  value: {
                                    type: "string"
                                  },
                                  description: {
                                    type: "string"
                                  },
                                  subCategories: {
                                    description: "",
                                    type: "array",
                                    items: {
                                      $ref: "#/definitions/peril-category"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      coverageClasses: {
                        description: "",
                        type: "array",
                        items: {
                          title: "Peril Category",
                          description: "",
                          type: "object",
                          properties: {
                            name: {
                              type: "string"
                            },
                            code: {
                              type: "string"
                            },
                            value: {
                              type: "string"
                            },
                            description: {
                              type: "string"
                            },
                            subCategories: {
                              description: "",
                              type: "array",
                              items: {
                                title: "Peril Category",
                                description: "",
                                type: "object",
                                properties: {
                                  name: {
                                    type: "string"
                                  },
                                  code: {
                                    type: "string"
                                  },
                                  value: {
                                    type: "string"
                                  },
                                  description: {
                                    type: "string"
                                  },
                                  subCategories: {
                                    description: "",
                                    type: "array",
                                    items: {
                                      $ref: "#/definitions/peril-category"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      exclusions: {
                        description: "",
                        type: "array",
                        items: {
                          title: "Peril Category",
                          description: "",
                          type: "object",
                          properties: {
                            name: {
                              type: "string"
                            },
                            code: {
                              type: "string"
                            },
                            value: {
                              type: "string"
                            },
                            description: {
                              type: "string"
                            },
                            subCategories: {
                              description: "",
                              type: "array",
                              items: {
                                title: "Peril Category",
                                description: "",
                                type: "object",
                                properties: {
                                  name: {
                                    type: "string"
                                  },
                                  code: {
                                    type: "string"
                                  },
                                  value: {
                                    type: "string"
                                  },
                                  description: {
                                    type: "string"
                                  },
                                  subCategories: {
                                    description: "",
                                    type: "array",
                                    items: {
                                      $ref: "#/definitions/peril-category"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      productVersion: {
                        type: "string"
                      },
                      ratingBrand: {
                        type: "string"
                      },
                      ratingLine: {
                        type: "string",
                        enum: ["PERSONAL", "COMMERCIAL"]
                      },
                      ratingProductName: {
                        type: "string"
                      },
                      isRural: {
                        type: "boolean"
                      }
                    }
                  },
                  questionAnswers: {
                    type: "array",
                    items: {
                      title: "Question Instance",
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          description: "QuestionInstance ID"
                        },
                        question: {
                          title: "Application Question",
                          allOf: [
                            {
                              title: "Question Output",
                              allOf: [
                                {
                                  type: "object",
                                  properties: {
                                    id: {
                                      type: "string",
                                      description:
                                        "Internal unique id generated by our DB or system"
                                    }
                                  },
                                  required: ["id"]
                                },
                                {
                                  title: "Question Base",
                                  type: "object",
                                  properties: {
                                    questionType: {
                                      type: "string",
                                      enum: ["GROUP", "QUESTION", "HIDDEN"]
                                    },
                                    text: {
                                      type: "string",
                                      description: "Text displayed on the Label"
                                    },
                                    subText: {
                                      type: "string",
                                      description:
                                        "Additional helper text for the question"
                                    },
                                    helpText: {
                                      type: "string"
                                    },
                                    answerType: {
                                      type: "object",
                                      properties: {
                                        dataType: {
                                          type: "string",
                                          description:
                                            "DataType of the answer. Can be a simple dataType or complex dataType like Vehicle. Some possible types are: string, decimal, boolean, enum, int, date, money"
                                        },
                                        minValue: {
                                          type: "string"
                                        },
                                        maxValue: {
                                          type: "string"
                                        },
                                        regEx: {
                                          type: "string",
                                          description:
                                            "Acceptable format for the String dataType"
                                        },
                                        minLength: {
                                          type: "integer"
                                        },
                                        maxLength: {
                                          type: "integer",
                                          description:
                                            "Maximum number of characters for string dataType"
                                        },
                                        enumValues: {
                                          type: "array",
                                          description:
                                            "Values to be shown for enum DataType",
                                          items: {
                                            type: "object",
                                            properties: {
                                              value: {
                                                type: "string",
                                                description:
                                                  "value that is stored at the backend"
                                              },
                                              description: {
                                                type: "string",
                                                description:
                                                  "Value that is shown to the user on UI"
                                              },
                                              isDefault: {
                                                type: "boolean",
                                                description:
                                                  "Whether the current value should be preselected for the user as default value"
                                              }
                                            },
                                            required: ["value", "description"]
                                          }
                                        },
                                        multiSelect: {
                                          type: "boolean",
                                          description:
                                            "Applicable only if the dataType is enum"
                                        },
                                        customSource: {
                                          type: "string",
                                          description:
                                            "API endpoint for getting custom Data "
                                        },
                                        defaultValue: {
                                          type: "string"
                                        },
                                        placeHolder: {
                                          type: "string"
                                        },
                                        isRequired: {
                                          type: "boolean"
                                        },
                                        format: {
                                          type: "string"
                                        }
                                      },
                                      required: ["dataType"]
                                    },
                                    effectiveDate: {
                                      type: "string",
                                      format: "date",
                                      description:
                                        "Date from which this question will become effective or active"
                                    },
                                    expiryDate: {
                                      type: "string",
                                      format: "date",
                                      description:
                                        "Date from which this question will expire or become inactive"
                                    }
                                  },
                                  required: ["questionType"]
                                }
                              ]
                            },
                            {
                              type: "object",
                              properties: {
                                askOnce: {
                                  type: "boolean"
                                },
                                priority: {
                                  type: "integer"
                                },
                                maxOccurs: {
                                  type: "integer"
                                },
                                stageOfProcess: {
                                  title: "Stage Of Process",
                                  type: "string",
                                  description: "",
                                  enum: [
                                    "NEEDS_ANALYSIS",
                                    "COVER_SELECT",
                                    "PRODUCT_QUESTIONS",
                                    "QUOTE",
                                    "DECLARATIONS",
                                    "CONTACT",
                                    "PAYMENT",
                                    "CONFIRMATION"
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        productInstanceIds: {
                          type: "array",
                          description:
                            "ProductInstances for which this question is applicable",
                          items: {
                            type: "string"
                          }
                        },
                        answer: {
                          type: "array",
                          items: {
                            type: "string"
                          }
                        },
                        answeredOn: {
                          type: "string",
                          format: "date-time"
                        },
                        questionInstances: {
                          type: "array",
                          items: {
                            $ref: "#/definitions/question-instance"
                          }
                        },
                        askIf: {
                          type: "array",
                          description:
                            "Only ask this question if the conditions in the array are satisfied",
                          items: {
                            type: "object",
                            properties: {
                              questionInstanceId: {
                                type: "string",
                                description:
                                  "Link to the Question Instance ID which is to be compared"
                              },
                              operator: {
                                type: "string",
                                description:
                                  "Operator to use for comparision e.g. =, <, >, <= etc."
                              },
                              value: {
                                type: "string",
                                description: "Value to compare against"
                              },
                              path: {
                                type: "string"
                              },
                              stageOfProcess: {
                                title: "Stage Of Process",
                                type: "string",
                                description: "",
                                enum: [
                                  "NEEDS_ANALYSIS",
                                  "COVER_SELECT",
                                  "PRODUCT_QUESTIONS",
                                  "QUOTE",
                                  "DECLARATIONS",
                                  "CONTACT",
                                  "PAYMENT",
                                  "CONFIRMATION"
                                ]
                              }
                            }
                          }
                        },
                        askIfSetOperator: {
                          type: "string",
                          enum: ["ALL_OF", "ANY_OF"]
                        }
                      }
                    }
                  },
                  benefits: {
                    type: "array",
                    items: {
                      title: "Benefit",
                      description:
                        "TODO: (Find this in GW??) This includes sum insured and/or limits like weekly rental",
                      type: "object",
                      properties: {
                        amount: {
                          title: "Amount Extended",
                          type: "object",
                          properties: {
                            amount: {
                              type: "number"
                            },
                            currencyCode: {
                              type: "string"
                            },
                            isGSTInclusive: {
                              type: "boolean"
                            },
                            GSTAmount: {
                              type: "number"
                            },
                            GSTPercentageApplicable: {
                              type: "number"
                            },
                            description: {
                              type: "string"
                            }
                          },
                          required: ["amount"]
                        },
                        category: {
                          type: "string",
                          description:
                            "eg. SumInsured, ComponentSumInsured,  RiskSumInsured"
                        },
                        code: {
                          type: "string"
                        },
                        limits: {
                          description: "",
                          type: "array",
                          items: {
                            title: "Limit",
                            description: "",
                            type: "object",
                            properties: {
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              startDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              endDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              name: {
                                type: "string",
                                description: "Label or text displayed on GUI"
                              },
                              code: {
                                type: "string",
                                description:
                                  "Value used for mapping at the backend system"
                              },
                              category: {
                                description:
                                  "Examples includeHome,ContentsSpecified ItemsOptional CoverRental Amount, DailyConfirmationableAmount",
                                type: "string"
                              },
                              description: {
                                type: "string"
                              },
                              value: {
                                type: "string",
                                description:
                                  "This represents the percentage of requested sum insured"
                              },
                              limitNumber: {
                                type: "string"
                              },
                              coverageType: {
                                type: "string",
                                description: "conformed value"
                              }
                            }
                          }
                        },
                        description: {
                          type: "string"
                        },
                        value: {
                          type: "string"
                        },
                        premiumClass: {
                          type: "string"
                        }
                      }
                    }
                  },
                  discounts: {
                    type: "array",
                    items: {
                      title: "Discount",
                      description: "",
                      type: "object",
                      properties: {
                        code: {
                          type: "string",
                          description:
                            "Code used in System of Record, if available"
                        },
                        name: {
                          type: "string",
                          description: "Specific to System of Record"
                        },
                        value: {
                          type: "string"
                        },
                        discountType: {
                          type: "string",
                          enum: ["PERCENT", "RATE", "DOLLAR_AMOUNT", "OTHER"]
                        },
                        amount: {
                          title: "Amount Extended",
                          type: "object",
                          properties: {
                            amount: {
                              type: "number"
                            },
                            currencyCode: {
                              type: "string"
                            },
                            isGSTInclusive: {
                              type: "boolean"
                            },
                            GSTAmount: {
                              type: "number"
                            },
                            GSTPercentageApplicable: {
                              type: "number"
                            },
                            description: {
                              type: "string"
                            }
                          },
                          required: ["amount"]
                        },
                        priority: {
                          type: "integer",
                          description: "Order in which the discount is applied"
                        }
                      },
                      required: ["discountType"]
                    }
                  },
                  excesses: {
                    type: "array",
                    items: {
                      title: "Excess",
                      description: "",
                      type: "object",
                      properties: {
                        code: {
                          type: "string",
                          description:
                            "code used in System of Record, if available"
                        },
                        name: {
                          type: "string",
                          description: "Specific to System of Record"
                        },
                        excessCategory: {
                          type: "string",
                          enum: [
                            "STANDARD",
                            "VOLUNTARY",
                            "IMPOSED",
                            "NAMED_DRIVER",
                            "COVERAGE_ITEM",
                            "THEFT",
                            "NAMED_DRIVER_IMPOSED",
                            "UNNAMED_DRIVER_IMPOSED",
                            "UNNAMED_DRIVER",
                            "SPECIAL",
                            "SPECIAL_IMPOSED"
                          ]
                        },
                        minimumAmount: {
                          title: "Amount Extended",
                          type: "object",
                          properties: {
                            amount: {
                              type: "number"
                            },
                            currencyCode: {
                              type: "string"
                            },
                            isGSTInclusive: {
                              type: "boolean"
                            },
                            GSTAmount: {
                              type: "number"
                            },
                            GSTPercentageApplicable: {
                              type: "number"
                            },
                            description: {
                              type: "string"
                            }
                          },
                          required: ["amount"]
                        },
                        maximumAmount: {
                          title: "Amount Extended",
                          type: "object",
                          properties: {
                            amount: {
                              type: "number"
                            },
                            currencyCode: {
                              type: "string"
                            },
                            isGSTInclusive: {
                              type: "boolean"
                            },
                            GSTAmount: {
                              type: "number"
                            },
                            GSTPercentageApplicable: {
                              type: "number"
                            },
                            description: {
                              type: "string"
                            }
                          },
                          required: ["amount"]
                        },
                        references: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              namespace: {
                                type: "string",
                                enum: ["NAMED_DRIVER_ID"]
                              },
                              identifier: {
                                type: "string"
                              }
                            }
                          }
                        },
                        value: {
                          type: "string",
                          description: "TODO - may not be required"
                        },
                        tier: {
                          type: "string",
                          description: "TODO - may not be required"
                        },
                        rate: {
                          type: "number"
                        }
                      },
                      required: ["excessCategory"]
                    }
                  },
                  rates: {
                    type: "array",
                    items: {
                      title: "Rate",
                      description: "",
                      type: "object",
                      properties: {
                        amount: {
                          title: "Amount Extended",
                          type: "object",
                          properties: {
                            amount: {
                              type: "number"
                            },
                            currencyCode: {
                              type: "string"
                            },
                            isGSTInclusive: {
                              type: "boolean"
                            },
                            GSTAmount: {
                              type: "number"
                            },
                            GSTPercentageApplicable: {
                              type: "number"
                            },
                            description: {
                              type: "string"
                            }
                          },
                          required: ["amount"]
                        },
                        startDate: {
                          title: "Date Time Extended",
                          type: "object",
                          properties: {
                            value: {
                              type: "string",
                              format: "date-time"
                            },
                            format: {
                              type: "string",
                              enum: [
                                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                "yyyy-MM-dd'T'HH:mm'Z'",
                                "yyyy-MM-dd'T'HH",
                                "yyyy-MM-dd",
                                "yyyy-MM",
                                "yyyy"
                              ]
                            },
                            minValue: {
                              type: "string"
                            },
                            maxValue: {
                              type: "string"
                            },
                            defaultValue: {
                              type: "string"
                            }
                          },
                          required: ["value"]
                        },
                        endDate: {
                          title: "Date Time Extended",
                          type: "object",
                          properties: {
                            value: {
                              type: "string",
                              format: "date-time"
                            },
                            format: {
                              type: "string",
                              enum: [
                                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                "yyyy-MM-dd'T'HH:mm'Z'",
                                "yyyy-MM-dd'T'HH",
                                "yyyy-MM-dd",
                                "yyyy-MM",
                                "yyyy"
                              ]
                            },
                            minValue: {
                              type: "string"
                            },
                            maxValue: {
                              type: "string"
                            },
                            defaultValue: {
                              type: "string"
                            }
                          },
                          required: ["value"]
                        },
                        name: {
                          type: "string"
                        },
                        code: {
                          type: "string"
                        }
                      }
                    }
                  },
                  exposureGrade: {
                    type: "string",
                    enum: [
                      "ZERO_AT_FAULT_LAST_3_YEARS",
                      "ONE_AT_FAULT_LAST_3_YEARS",
                      "TWO_AT_FAULT_LAST_3_YEARS",
                      "NO_PREVIOUS_HISTORY",
                      "THREEPLUS_AT_FAULT_LAST_3_YEARS"
                    ]
                  },
                  exposureAmount: {
                    type: "number",
                    description: "TODO: can we delete this "
                  },
                  premiumDetails: {
                    type: "array",
                    items: {
                      title: "Premium Detail",
                      type: "object",
                      properties: {
                        category: {
                          type: "string"
                        },
                        code: {
                          type: "string"
                        },
                        writtenPremium: {
                          title: "Premium",
                          description: "",
                          type: "object",
                          properties: {
                            companyPremium: {
                              type: "number",
                              description: "Company Premium"
                            },
                            naturalDisasterPremium: {
                              type: "number"
                            },
                            earthquakeLevy: {
                              type: "number",
                              description: "EQC Levy"
                            },
                            fireServiceLevy: {
                              type: "number",
                              description: "Fire Service Levy"
                            },
                            gst: {
                              type: "number",
                              description: "GST Amount"
                            },
                            instalmentCharge: {
                              type: "number"
                            },
                            adminCharge: {
                              type: "number",
                              description: "Admin Charge"
                            },
                            commissionRate: {
                              type: "number",
                              description: "Commission Rate"
                            },
                            minimumPremiumUsed: {
                              type: "boolean"
                            },
                            naturalDisasterCommission: {
                              type: "number"
                            },
                            terrorTotalTransactionCost: {
                              type: "number"
                            },
                            commissionAmount: {
                              type: "number"
                            },
                            commissionGST: {
                              type: "number"
                            },
                            totalPremium: {
                              type: "number"
                            },
                            businessPremium: {
                              type: "number"
                            },
                            cappingAndCupping: {
                              type: "object",
                              properties: {
                                premiumAmount: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                },
                                adjustmentFactor: {
                                  type: "number"
                                },
                                premiumAdjustmentDueToOverride: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                }
                              }
                            }
                          }
                        },
                        annualisedPremium: {
                          title: "Premium",
                          description: "",
                          type: "object",
                          properties: {
                            companyPremium: {
                              type: "number",
                              description: "Company Premium"
                            },
                            naturalDisasterPremium: {
                              type: "number"
                            },
                            earthquakeLevy: {
                              type: "number",
                              description: "EQC Levy"
                            },
                            fireServiceLevy: {
                              type: "number",
                              description: "Fire Service Levy"
                            },
                            gst: {
                              type: "number",
                              description: "GST Amount"
                            },
                            instalmentCharge: {
                              type: "number"
                            },
                            adminCharge: {
                              type: "number",
                              description: "Admin Charge"
                            },
                            commissionRate: {
                              type: "number",
                              description: "Commission Rate"
                            },
                            minimumPremiumUsed: {
                              type: "boolean"
                            },
                            naturalDisasterCommission: {
                              type: "number"
                            },
                            terrorTotalTransactionCost: {
                              type: "number"
                            },
                            commissionAmount: {
                              type: "number"
                            },
                            commissionGST: {
                              type: "number"
                            },
                            totalPremium: {
                              type: "number"
                            },
                            businessPremium: {
                              type: "number"
                            },
                            cappingAndCupping: {
                              type: "object",
                              properties: {
                                premiumAmount: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                },
                                adjustmentFactor: {
                                  type: "number"
                                },
                                premiumAdjustmentDueToOverride: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                }
                              }
                            }
                          }
                        },
                        transactionPremium: {
                          title: "Premium",
                          description: "",
                          type: "object",
                          properties: {
                            companyPremium: {
                              type: "number",
                              description: "Company Premium"
                            },
                            naturalDisasterPremium: {
                              type: "number"
                            },
                            earthquakeLevy: {
                              type: "number",
                              description: "EQC Levy"
                            },
                            fireServiceLevy: {
                              type: "number",
                              description: "Fire Service Levy"
                            },
                            gst: {
                              type: "number",
                              description: "GST Amount"
                            },
                            instalmentCharge: {
                              type: "number"
                            },
                            adminCharge: {
                              type: "number",
                              description: "Admin Charge"
                            },
                            commissionRate: {
                              type: "number",
                              description: "Commission Rate"
                            },
                            minimumPremiumUsed: {
                              type: "boolean"
                            },
                            naturalDisasterCommission: {
                              type: "number"
                            },
                            terrorTotalTransactionCost: {
                              type: "number"
                            },
                            commissionAmount: {
                              type: "number"
                            },
                            commissionGST: {
                              type: "number"
                            },
                            totalPremium: {
                              type: "number"
                            },
                            businessPremium: {
                              type: "number"
                            },
                            cappingAndCupping: {
                              type: "object",
                              properties: {
                                premiumAmount: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                },
                                adjustmentFactor: {
                                  type: "number"
                                },
                                premiumAdjustmentDueToOverride: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                }
                              }
                            }
                          }
                        },
                        instalmentPremium: {
                          title: "Premium",
                          description: "",
                          type: "object",
                          properties: {
                            companyPremium: {
                              type: "number",
                              description: "Company Premium"
                            },
                            naturalDisasterPremium: {
                              type: "number"
                            },
                            earthquakeLevy: {
                              type: "number",
                              description: "EQC Levy"
                            },
                            fireServiceLevy: {
                              type: "number",
                              description: "Fire Service Levy"
                            },
                            gst: {
                              type: "number",
                              description: "GST Amount"
                            },
                            instalmentCharge: {
                              type: "number"
                            },
                            adminCharge: {
                              type: "number",
                              description: "Admin Charge"
                            },
                            commissionRate: {
                              type: "number",
                              description: "Commission Rate"
                            },
                            minimumPremiumUsed: {
                              type: "boolean"
                            },
                            naturalDisasterCommission: {
                              type: "number"
                            },
                            terrorTotalTransactionCost: {
                              type: "number"
                            },
                            commissionAmount: {
                              type: "number"
                            },
                            commissionGST: {
                              type: "number"
                            },
                            totalPremium: {
                              type: "number"
                            },
                            businessPremium: {
                              type: "number"
                            },
                            cappingAndCupping: {
                              type: "object",
                              properties: {
                                premiumAmount: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                },
                                adjustmentFactor: {
                                  type: "number"
                                },
                                premiumAdjustmentDueToOverride: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                }
                              }
                            }
                          }
                        },
                        initialPaymentPremium: {
                          title: "Premium",
                          description: "",
                          type: "object",
                          properties: {
                            companyPremium: {
                              type: "number",
                              description: "Company Premium"
                            },
                            naturalDisasterPremium: {
                              type: "number"
                            },
                            earthquakeLevy: {
                              type: "number",
                              description: "EQC Levy"
                            },
                            fireServiceLevy: {
                              type: "number",
                              description: "Fire Service Levy"
                            },
                            gst: {
                              type: "number",
                              description: "GST Amount"
                            },
                            instalmentCharge: {
                              type: "number"
                            },
                            adminCharge: {
                              type: "number",
                              description: "Admin Charge"
                            },
                            commissionRate: {
                              type: "number",
                              description: "Commission Rate"
                            },
                            minimumPremiumUsed: {
                              type: "boolean"
                            },
                            naturalDisasterCommission: {
                              type: "number"
                            },
                            terrorTotalTransactionCost: {
                              type: "number"
                            },
                            commissionAmount: {
                              type: "number"
                            },
                            commissionGST: {
                              type: "number"
                            },
                            totalPremium: {
                              type: "number"
                            },
                            businessPremium: {
                              type: "number"
                            },
                            cappingAndCupping: {
                              type: "object",
                              properties: {
                                premiumAmount: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                },
                                adjustmentFactor: {
                                  type: "number"
                                },
                                premiumAdjustmentDueToOverride: {
                                  title: "Amount Extended",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      type: "number"
                                    },
                                    currencyCode: {
                                      type: "string"
                                    },
                                    isGSTInclusive: {
                                      type: "boolean"
                                    },
                                    GSTAmount: {
                                      type: "number"
                                    },
                                    GSTPercentageApplicable: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    }
                                  },
                                  required: ["amount"]
                                }
                              }
                            }
                          }
                        },
                        premiumClass: {
                          type: "string"
                        },
                        premiumFrequency: {
                          title: "Premium Frequency",
                          type: "string",
                          description: "",
                          enum: [
                            "ANNUALLY",
                            "QUARTERLY",
                            "MONTHLY",
                            "FORTNIGHTLY",
                            "ONE_OFF",
                            "HALF_YEARLY"
                          ]
                        }
                      }
                    }
                  },
                  adjustments: {
                    type: "array",
                    items: {
                      title: "Adjustment",
                      description: "",
                      type: "object",
                      properties: {
                        amount: {
                          title: "Amount Extended",
                          type: "object",
                          properties: {
                            amount: {
                              type: "number"
                            },
                            currencyCode: {
                              type: "string"
                            },
                            isGSTInclusive: {
                              type: "boolean"
                            },
                            GSTAmount: {
                              type: "number"
                            },
                            GSTPercentageApplicable: {
                              type: "number"
                            },
                            description: {
                              type: "string"
                            }
                          },
                          required: ["amount"]
                        },
                        code: {
                          type: "string",
                          description:
                            "code used in System of Record, if available"
                        },
                        factor: {
                          type: "string"
                        },
                        reason: {
                          type: "string"
                        },
                        adjustmentType: {
                          type: "string",
                          enum: ["PERCENT", "RATE", "DOLLAR_AMOUNT"]
                        },
                        name: {
                          type: "string",
                          description: "Specific to System of Record"
                        },
                        priority: {
                          type: "integer",
                          description: "Order in which the discount is applied"
                        }
                      },
                      required: ["adjustmentType"]
                    }
                  },
                  coverageItems: {
                    type: "array",
                    items: {
                      title: "Coverage Item",
                      type: "object",
                      properties: {
                        itemNumber: {
                          type: "string",
                          description:
                            "Identifies the instance of Coverage Item in the System of Record. e.g. Contents risk having multiple jewelry items, each with same coverage item code, itemNumber uniquely identifies a particular jewelry item"
                        },
                        coverageCode: {
                          type: "string",
                          description:
                            "Code that is used in the System of Record eg. in *HEART* these are extensions or property peril codes"
                        },
                        coverageName: {
                          type: "string",
                          description:
                            "eg. if coverageCode is **JWL** from *HEART* the  coverageName will be **Jewellery**"
                        },
                        itemDescription: {
                          type: "string",
                          description:
                            "This is the fre text field in the core System of Records that describes the item eg. 18ct wedding ring"
                        },
                        isBaseCoverage: {
                          type: "boolean"
                        },
                        category: {
                          type: "string",
                          description:
                            "Value of 'Optional' indicates to confirmation center if the coverageItem is to be treated as a coverage or an extension"
                        },
                        benefits: {
                          type: "array",
                          items: {
                            title: "Benefit",
                            description:
                              "TODO: (Find this in GW??) This includes sum insured and/or limits like weekly rental",
                            type: "object",
                            properties: {
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              category: {
                                type: "string",
                                description:
                                  "eg. SumInsured, ComponentSumInsured,  RiskSumInsured"
                              },
                              code: {
                                type: "string"
                              },
                              limits: {
                                description: "",
                                type: "array",
                                items: {
                                  title: "Limit",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    amount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    },
                                    startDate: {
                                      title: "Date Time Extended",
                                      type: "object",
                                      properties: {
                                        value: {
                                          type: "string",
                                          format: "date-time"
                                        },
                                        format: {
                                          type: "string",
                                          enum: [
                                            "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                            "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                            "yyyy-MM-dd'T'HH:mm'Z'",
                                            "yyyy-MM-dd'T'HH",
                                            "yyyy-MM-dd",
                                            "yyyy-MM",
                                            "yyyy"
                                          ]
                                        },
                                        minValue: {
                                          type: "string"
                                        },
                                        maxValue: {
                                          type: "string"
                                        },
                                        defaultValue: {
                                          type: "string"
                                        }
                                      },
                                      required: ["value"]
                                    },
                                    endDate: {
                                      title: "Date Time Extended",
                                      type: "object",
                                      properties: {
                                        value: {
                                          type: "string",
                                          format: "date-time"
                                        },
                                        format: {
                                          type: "string",
                                          enum: [
                                            "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                            "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                            "yyyy-MM-dd'T'HH:mm'Z'",
                                            "yyyy-MM-dd'T'HH",
                                            "yyyy-MM-dd",
                                            "yyyy-MM",
                                            "yyyy"
                                          ]
                                        },
                                        minValue: {
                                          type: "string"
                                        },
                                        maxValue: {
                                          type: "string"
                                        },
                                        defaultValue: {
                                          type: "string"
                                        }
                                      },
                                      required: ["value"]
                                    },
                                    name: {
                                      type: "string",
                                      description:
                                        "Label or text displayed on GUI"
                                    },
                                    code: {
                                      type: "string",
                                      description:
                                        "Value used for mapping at the backend system"
                                    },
                                    category: {
                                      description:
                                        "Examples includeHome,ContentsSpecified ItemsOptional CoverRental Amount, DailyConfirmationableAmount",
                                      type: "string"
                                    },
                                    description: {
                                      type: "string"
                                    },
                                    value: {
                                      type: "string",
                                      description:
                                        "This represents the percentage of requested sum insured"
                                    },
                                    limitNumber: {
                                      type: "string"
                                    },
                                    coverageType: {
                                      type: "string",
                                      description: "conformed value"
                                    }
                                  }
                                }
                              },
                              description: {
                                type: "string"
                              },
                              value: {
                                type: "string"
                              },
                              premiumClass: {
                                type: "string"
                              }
                            }
                          }
                        },
                        excesses: {
                          type: "array",
                          items: {
                            title: "Excess",
                            description: "",
                            type: "object",
                            properties: {
                              code: {
                                type: "string",
                                description:
                                  "code used in System of Record, if available"
                              },
                              name: {
                                type: "string",
                                description: "Specific to System of Record"
                              },
                              excessCategory: {
                                type: "string",
                                enum: [
                                  "STANDARD",
                                  "VOLUNTARY",
                                  "IMPOSED",
                                  "NAMED_DRIVER",
                                  "COVERAGE_ITEM",
                                  "THEFT",
                                  "NAMED_DRIVER_IMPOSED",
                                  "UNNAMED_DRIVER_IMPOSED",
                                  "UNNAMED_DRIVER",
                                  "SPECIAL",
                                  "SPECIAL_IMPOSED"
                                ]
                              },
                              minimumAmount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              maximumAmount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              references: {
                                type: "array",
                                items: {
                                  type: "object",
                                  properties: {
                                    namespace: {
                                      type: "string",
                                      enum: ["NAMED_DRIVER_ID"]
                                    },
                                    identifier: {
                                      type: "string"
                                    }
                                  }
                                }
                              },
                              value: {
                                type: "string",
                                description: "TODO - may not be required"
                              },
                              tier: {
                                type: "string",
                                description: "TODO - may not be required"
                              },
                              rate: {
                                type: "number"
                              }
                            },
                            required: ["excessCategory"]
                          }
                        },
                        discounts: {
                          type: "array",
                          items: {
                            title: "Discount",
                            description: "",
                            type: "object",
                            properties: {
                              code: {
                                type: "string",
                                description:
                                  "Code used in System of Record, if available"
                              },
                              name: {
                                type: "string",
                                description: "Specific to System of Record"
                              },
                              value: {
                                type: "string"
                              },
                              discountType: {
                                type: "string",
                                enum: [
                                  "PERCENT",
                                  "RATE",
                                  "DOLLAR_AMOUNT",
                                  "OTHER"
                                ]
                              },
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              priority: {
                                type: "integer",
                                description:
                                  "Order in which the discount is applied"
                              }
                            },
                            required: ["discountType"]
                          }
                        },
                        physicalConditions: {
                          type: "array",
                          items: {
                            title: "Physical Condition",
                            description: "",
                            type: "object",
                            properties: {
                              description: {
                                type: "string"
                              },
                              value: {
                                type: "string"
                              },
                              establishedDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              physicalConditionType: {
                                type: "string",
                                enum: [
                                  "LAST_VALUATION",
                                  "STATED_VALUE",
                                  "PLANT_LAST_VALUATION",
                                  "LAST_INSPECTION",
                                  "LAST_SURVEYED",
                                  "RATING_CONDITION",
                                  "UNREPAIRED_DAMAGE"
                                ]
                              },
                              type: {
                                type: "string",
                                description: "e.g. Financial Valuation Type"
                              },
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              code: {
                                type: "string"
                              }
                            }
                          }
                        },
                        rates: {
                          type: "array",
                          items: {
                            title: "Rate",
                            description: "",
                            type: "object",
                            properties: {
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              startDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              endDate: {
                                title: "Date Time Extended",
                                type: "object",
                                properties: {
                                  value: {
                                    type: "string",
                                    format: "date-time"
                                  },
                                  format: {
                                    type: "string",
                                    enum: [
                                      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                      "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                      "yyyy-MM-dd'T'HH:mm'Z'",
                                      "yyyy-MM-dd'T'HH",
                                      "yyyy-MM-dd",
                                      "yyyy-MM",
                                      "yyyy"
                                    ]
                                  },
                                  minValue: {
                                    type: "string"
                                  },
                                  maxValue: {
                                    type: "string"
                                  },
                                  defaultValue: {
                                    type: "string"
                                  }
                                },
                                required: ["value"]
                              },
                              name: {
                                type: "string"
                              },
                              code: {
                                type: "string"
                              }
                            }
                          }
                        },
                        premiumDetails: {
                          type: "array",
                          items: {
                            title: "Premium Detail",
                            type: "object",
                            properties: {
                              category: {
                                type: "string"
                              },
                              code: {
                                type: "string"
                              },
                              writtenPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              annualisedPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              transactionPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              instalmentPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              initialPaymentPremium: {
                                title: "Premium",
                                description: "",
                                type: "object",
                                properties: {
                                  companyPremium: {
                                    type: "number",
                                    description: "Company Premium"
                                  },
                                  naturalDisasterPremium: {
                                    type: "number"
                                  },
                                  earthquakeLevy: {
                                    type: "number",
                                    description: "EQC Levy"
                                  },
                                  fireServiceLevy: {
                                    type: "number",
                                    description: "Fire Service Levy"
                                  },
                                  gst: {
                                    type: "number",
                                    description: "GST Amount"
                                  },
                                  instalmentCharge: {
                                    type: "number"
                                  },
                                  adminCharge: {
                                    type: "number",
                                    description: "Admin Charge"
                                  },
                                  commissionRate: {
                                    type: "number",
                                    description: "Commission Rate"
                                  },
                                  minimumPremiumUsed: {
                                    type: "boolean"
                                  },
                                  naturalDisasterCommission: {
                                    type: "number"
                                  },
                                  terrorTotalTransactionCost: {
                                    type: "number"
                                  },
                                  commissionAmount: {
                                    type: "number"
                                  },
                                  commissionGST: {
                                    type: "number"
                                  },
                                  totalPremium: {
                                    type: "number"
                                  },
                                  businessPremium: {
                                    type: "number"
                                  },
                                  cappingAndCupping: {
                                    type: "object",
                                    properties: {
                                      premiumAmount: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      },
                                      adjustmentFactor: {
                                        type: "number"
                                      },
                                      premiumAdjustmentDueToOverride: {
                                        title: "Amount Extended",
                                        type: "object",
                                        properties: {
                                          amount: {
                                            type: "number"
                                          },
                                          currencyCode: {
                                            type: "string"
                                          },
                                          isGSTInclusive: {
                                            type: "boolean"
                                          },
                                          GSTAmount: {
                                            type: "number"
                                          },
                                          GSTPercentageApplicable: {
                                            type: "number"
                                          },
                                          description: {
                                            type: "string"
                                          }
                                        },
                                        required: ["amount"]
                                      }
                                    }
                                  }
                                }
                              },
                              premiumClass: {
                                type: "string"
                              },
                              premiumFrequency: {
                                title: "Premium Frequency",
                                type: "string",
                                description: "",
                                enum: [
                                  "ANNUALLY",
                                  "QUARTERLY",
                                  "MONTHLY",
                                  "FORTNIGHTLY",
                                  "ONE_OFF",
                                  "HALF_YEARLY"
                                ]
                              }
                            }
                          }
                        },
                        adjustments: {
                          type: "array",
                          items: {
                            title: "Adjustment",
                            description: "",
                            type: "object",
                            properties: {
                              amount: {
                                title: "Amount Extended",
                                type: "object",
                                properties: {
                                  amount: {
                                    type: "number"
                                  },
                                  currencyCode: {
                                    type: "string"
                                  },
                                  isGSTInclusive: {
                                    type: "boolean"
                                  },
                                  GSTAmount: {
                                    type: "number"
                                  },
                                  GSTPercentageApplicable: {
                                    type: "number"
                                  },
                                  description: {
                                    type: "string"
                                  }
                                },
                                required: ["amount"]
                              },
                              code: {
                                type: "string",
                                description:
                                  "code used in System of Record, if available"
                              },
                              factor: {
                                type: "string"
                              },
                              reason: {
                                type: "string"
                              },
                              adjustmentType: {
                                type: "string",
                                enum: ["PERCENT", "RATE", "DOLLAR_AMOUNT"]
                              },
                              name: {
                                type: "string",
                                description: "Specific to System of Record"
                              },
                              priority: {
                                type: "integer",
                                description:
                                  "Order in which the discount is applied"
                              }
                            },
                            required: ["adjustmentType"]
                          }
                        },
                        conditions: {
                          type: "array",
                          items: {
                            title: "Peril Category",
                            description: "",
                            type: "object",
                            properties: {
                              name: {
                                type: "string"
                              },
                              code: {
                                type: "string"
                              },
                              value: {
                                type: "string"
                              },
                              description: {
                                type: "string"
                              },
                              subCategories: {
                                description: "",
                                type: "array",
                                items: {
                                  title: "Peril Category",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    name: {
                                      type: "string"
                                    },
                                    code: {
                                      type: "string"
                                    },
                                    value: {
                                      type: "string"
                                    },
                                    description: {
                                      type: "string"
                                    },
                                    subCategories: {
                                      description: "",
                                      type: "array",
                                      items: {
                                        $ref: "#/definitions/peril-category"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        subCategory: {
                          type: "string"
                        },
                        hasCoverage: {
                          type: "boolean"
                        },
                        settlementBasis: {
                          type: "string",
                          enum: [
                            "AGREED_VALUE",
                            "FIXED_VALUE",
                            "MARKET_VALUE",
                            "SUM_INSURED"
                          ],
                          description:
                            "Basis on which the confirmation would be settled for this coverageItem. Only required if it differes from the insuredRisks.settlementBasis"
                        },
                        externalReferences: {
                          type: "array",
                          items: {
                            title: "External Reference",
                            description: "",
                            type: "object",
                            properties: {
                              namespace: {
                                description: "A namespace for the identifier.",
                                type: "string"
                              },
                              identifier: {
                                description: "An identifier for the entity",
                                type: "string"
                              }
                            }
                          }
                        },
                        coverageType: {
                          type: "string",
                          description:
                            'This is the conformed representation of the coverage code example: "INSURED_VEHICLE", "WINDSCREEN", "AGREED_VALUE", "INGESTION_OR_ENTANGLEMENT", "LOSS_OF_USE", "PORTABLE_ELECTRONIC_EQUIPMENT", "TAXI"'
                        },
                        coverageNote: {
                          type: "string",
                          description:
                            "Free format string populated by the System of Record contains detials that will add a note to the coverage e.g 25% of the sumInsured, limit shown in the policy schedule - First 7 days not covered"
                        },
                        additionalCoverageDetails: {
                          type: "array",
                          items: {
                            title: "Additional Information",
                            type: "object",
                            properties: {
                              id: {
                                type: "string"
                              },
                              details: {
                                type: "array",
                                items: {
                                  type: "object",
                                  properties: {
                                    name: {
                                      type: "string"
                                    },
                                    number: {
                                      type: "number"
                                    },
                                    value: {
                                      type: "string"
                                    },
                                    amount: {
                                      title: "Amount Extended",
                                      type: "object",
                                      properties: {
                                        amount: {
                                          type: "number"
                                        },
                                        currencyCode: {
                                          type: "string"
                                        },
                                        isGSTInclusive: {
                                          type: "boolean"
                                        },
                                        GSTAmount: {
                                          type: "number"
                                        },
                                        GSTPercentageApplicable: {
                                          type: "number"
                                        },
                                        description: {
                                          type: "string"
                                        }
                                      },
                                      required: ["amount"]
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        deferments: {
                          type: "array",
                          items: {
                            title: "Deferment",
                            type: "object",
                            properties: {
                              code: {
                                type: "string",
                                description: "Code used in System of record"
                              },
                              name: {
                                type: "string"
                              },
                              category: {
                                type: "string"
                              },
                              description: {
                                type: "string",
                                enum: ["STANDARD", "VOLUNTARY", "IMPOSED"]
                              },
                              length: {
                                type: "number"
                              },
                              period: {
                                type: "string",
                                enum: ["HOURS", "DAYS", "WEEKS", "MONTHS"]
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  groupSubType: {
                    type: "string",
                    description: "",
                    enum: ["FLEET", "NON_FLEET"]
                  }
                }
              }
            },
            changeType: {
              type: "string",
              description: "TODO: can we delete this??"
            },
            recordedConfirmations: {
              type: "array",
              items: {
                title: "Confirmation Output",
                allOf: [
                  {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        description:
                          "This is generated by concatenating systemOfRecord, confirmationId and effective date (in this order)"
                      }
                    }
                  },
                  {
                    title: "Confirmation Base",
                    description: "",
                    type: "object",
                    properties: {
                      confirmationId: {
                        type: "string",
                        description: "System of record confirmation Id"
                      },
                      partyId: {
                        type: "string"
                      },
                      systemOfRecord: {
                        title: "System Of Record",
                        type: "string",
                        enum: [
                          "LOREM",
                          "HEART",
                          "IPSUM_CENTER",
                          "SECURITY",
                          "BAR",
                          "FOO",
                          "BUDDY",
                          "BONUS"
                        ]
                      },
                      systemOfRecordTransactionDate: {
                        title: "Date Time Extended",
                        type: "object",
                        properties: {
                          value: {
                            type: "string",
                            format: "date-time"
                          },
                          format: {
                            type: "string",
                            enum: [
                              "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                              "yyyy-MM-dd'T'HH:mm:ss'Z'",
                              "yyyy-MM-dd'T'HH:mm'Z'",
                              "yyyy-MM-dd'T'HH",
                              "yyyy-MM-dd",
                              "yyyy-MM",
                              "yyyy"
                            ]
                          },
                          minValue: {
                            type: "string"
                          },
                          maxValue: {
                            type: "string"
                          },
                          defaultValue: {
                            type: "string"
                          }
                        },
                        required: ["value"]
                      },
                      dateOfLoss: {
                        title: "Date Time Extended",
                        type: "object",
                        properties: {
                          value: {
                            type: "string",
                            format: "date-time"
                          },
                          format: {
                            type: "string",
                            enum: [
                              "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                              "yyyy-MM-dd'T'HH:mm:ss'Z'",
                              "yyyy-MM-dd'T'HH:mm'Z'",
                              "yyyy-MM-dd'T'HH",
                              "yyyy-MM-dd",
                              "yyyy-MM",
                              "yyyy"
                            ]
                          },
                          minValue: {
                            type: "string"
                          },
                          maxValue: {
                            type: "string"
                          },
                          defaultValue: {
                            type: "string"
                          }
                        },
                        required: ["value"]
                      },
                      reportedDate: {
                        title: "Date Time Extended",
                        type: "object",
                        properties: {
                          value: {
                            type: "string",
                            format: "date-time"
                          },
                          format: {
                            type: "string",
                            enum: [
                              "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                              "yyyy-MM-dd'T'HH:mm:ss'Z'",
                              "yyyy-MM-dd'T'HH:mm'Z'",
                              "yyyy-MM-dd'T'HH",
                              "yyyy-MM-dd",
                              "yyyy-MM",
                              "yyyy"
                            ]
                          },
                          minValue: {
                            type: "string"
                          },
                          maxValue: {
                            type: "string"
                          },
                          defaultValue: {
                            type: "string"
                          }
                        },
                        required: ["value"]
                      },
                      effectiveDate: {
                        title: "Date Time Extended",
                        type: "object",
                        properties: {
                          value: {
                            type: "string",
                            format: "date-time"
                          },
                          format: {
                            type: "string",
                            enum: [
                              "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                              "yyyy-MM-dd'T'HH:mm:ss'Z'",
                              "yyyy-MM-dd'T'HH:mm'Z'",
                              "yyyy-MM-dd'T'HH",
                              "yyyy-MM-dd",
                              "yyyy-MM",
                              "yyyy"
                            ]
                          },
                          minValue: {
                            type: "string"
                          },
                          maxValue: {
                            type: "string"
                          },
                          defaultValue: {
                            type: "string"
                          }
                        },
                        required: ["value"]
                      },
                      exportedAt: {
                        type: "string",
                        format: "date-time",
                        description:
                          "When was this record exported out from the System of Record source. Format should be in UTC and as per ISO 8601/RFC3339 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')"
                      },
                      isInsuredAtFault: {
                        type: "boolean",
                        description:
                          "Indicates whether or not the insured is to blame for the loss/accident"
                      },
                      lossCause: {
                        type: "object",
                        description:
                          "System of record loss code and its description",
                        properties: {
                          code: {
                            type: "string"
                          },
                          codeDescription: {
                            type: "string"
                          }
                        },
                        required: ["code", "codeDescription"]
                      },
                      status: {
                        type: "string",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum, arcu sit amet cursus dictum, libero ex vestibulum arcu, at elementum odio leo vel risus. Maecenas mi ipsum, vehicula ac dui sit amet, mattis ultricies lorem. Duis nec laoreet diam. Integer id aliquet tellus. Aliquam varius augue id mauris molestie, ac consectetur nulla vestibulum. Nulla lorem diam, euismod eget massa non, pulvinar tincidunt diam. Ut euismod augue at eros mattis, congue aliquet nisi pulvinar. Nam quis neque elit. Suspendisse pretium cursus dolor, eget vehicula sapien tristique ac. Ut eget varius ex, faucibus pharetra magna.",
                        enum: [
                          "ARCHIVED",
                          "CLOSED",
                          "OPEN",
                          "DRAFT",
                          "CANCELLED",
                          "INSTALMENT",
                          "LAPSED",
                          "PENDING",
                          "REFUSED",
                          "SPANISH",
                          "LITIGATION",
                          "REOPENED",
                          "NOTIFICATION"
                        ]
                      },
                      confirmationHandler: {
                        type: "string",
                        description:
                          "String that identifies the employee that is handling the confirmation.\nIn HEART, this will be the person's initials. In Lorem, this will be a full name"
                      },
                      costOfConfirmation: {
                        title: "Amount Extended",
                        type: "object",
                        properties: {
                          amount: {
                            type: "number"
                          },
                          currencyCode: {
                            type: "string"
                          },
                          isGSTInclusive: {
                            type: "boolean"
                          },
                          GSTAmount: {
                            type: "number"
                          },
                          GSTPercentageApplicable: {
                            type: "number"
                          },
                          description: {
                            type: "string"
                          }
                        },
                        required: ["amount"]
                      },
                      insurancePolicy: {
                        type: "object",
                        properties: {
                          insurancePolicyId: {
                            type: "string",
                            description: "Bird ID of Policy"
                          },
                          systemOfRecord: {
                            title: "System Of Record",
                            type: "string",
                            enum: [
                              "LOREM",
                              "HEART",
                              "IPSUM_CENTER",
                              "SECURITY",
                              "BAR",
                              "FOO",
                              "BUDDY",
                              "BONUS"
                            ]
                          },
                          policyId: {
                            type: "string",
                            description: "systemOfRecord ID"
                          },
                          riskId: {
                            type: "string",
                            description: ""
                          },
                          riskGroupId: {
                            type: "string"
                          }
                        },
                        required: ["systemOfRecord", "policyId"]
                      },
                      underlyingInsurancePolicy: {
                        $ref:
                          "./InsurancePolicies.oas2.yml#/definitions/insurance-policy-base"
                      }
                    }
                  }
                ]
              }
            },
            confirmationHistories: {
              type: "array",
              items: {
                title: "Confirmation History",
                description: "",
                type: "object",
                properties: {
                  code: {
                    type: "string"
                  },
                  period: {
                    type: "string",
                    description:
                      "Describe the period of confirmations - e.g. \"last 5 years'"
                  },
                  lossAmount: {
                    title: "Amount Extended",
                    type: "object",
                    properties: {
                      amount: {
                        type: "number"
                      },
                      currencyCode: {
                        type: "string"
                      },
                      isGSTInclusive: {
                        type: "boolean"
                      },
                      GSTAmount: {
                        type: "number"
                      },
                      GSTPercentageApplicable: {
                        type: "number"
                      },
                      description: {
                        type: "string"
                      }
                    },
                    required: ["amount"]
                  },
                  numberOfConfirmations: {
                    type: "integer"
                  },
                  hasConfirmationsOver10000: {
                    type: "boolean"
                  },
                  yearsInBusiness: {
                    type: "integer"
                  },
                  lineOfBusinessCategory: {
                    title: "Line Of Business Category",
                    type: "string",
                    enum: [
                      "COMMERCIAL_VEHICLE",
                      "PRIVATE_VEHICLE",
                      "HOME",
                      "CONTENTS",
                      "LIABILITY",
                      "PLEASUREKRAFT",
                      "BUSINESS_ASSETS",
                      "MOBILE_BUSINESS_ASSETS",
                      "BUSINESS_INTERRUPTION",
                      "MARINE",
                      "COMMERCIAL_PROPERTY"
                    ]
                  },
                  hasHadMoreThan10Confirmations: {
                    type: "boolean"
                  },
                  confirmationSummaries: {
                    type: "array",
                    items: {
                      title: "Confirmation Summary",
                      type: "object",
                      properties: {
                        description: {
                          type: "string"
                        },
                        dateOfLoss: {
                          title: "Date Only Extended",
                          type: "object",
                          properties: {
                            value: {
                              type: "string",
                              format: "date"
                            },
                            format: {
                              type: "string",
                              enum: ["yyyy-MM-dd", "yyyy-MM", "yyyy"]
                            }
                          },
                          required: ["value"]
                        },
                        costOfConfirmation: {
                          title: "Amount Extended",
                          type: "object",
                          properties: {
                            amount: {
                              type: "number"
                            },
                            currencyCode: {
                              type: "string"
                            },
                            isGSTInclusive: {
                              type: "boolean"
                            },
                            GSTAmount: {
                              type: "number"
                            },
                            GSTPercentageApplicable: {
                              type: "number"
                            },
                            description: {
                              type: "string"
                            }
                          },
                          required: ["amount"]
                        },
                        code: {
                          type: "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            contractStatuses: {
              type: "array",
              items: {
                title: "Insurance Policy Status",
                description: "",
                type: "object",
                properties: {
                  description: {
                    type: "string"
                  },
                  state: {
                    type: "string"
                  },
                  reason: {
                    type: "string"
                  }
                }
              }
            },
            closingSlips: {
              type: "array",
              items: {
                title: "Closing Slip",
                description: "",
                type: "object",
                properties: {
                  id: {
                    type: "string"
                  },
                  coverageType: {
                    title: "Risk Type",
                    type: "string",
                    description: "",
                    enum: [
                      "COMMERCIAL_VEHICLE",
                      "PRIVATE_VEHICLE",
                      "HOME",
                      "CONTENTS",
                      "BUSINESS_ASSETS",
                      "GENERAL_LIABILITY",
                      "STATUTORY_LIABILITY",
                      "EMPLOYERS_LIABILITY",
                      "BUSINESS_INTERRUPTION",
                      "PLEASUREKRAFT",
                      "MOBILE_BUSINESS_ASSETS",
                      "LIABILITY",
                      "MARINE",
                      "LIABILITY",
                      "CONTRACT_WORKS",
                      "DETERIORATION",
                      "ELECTRONIC_EQUIPMENT",
                      "INCOME_PROTECTION",
                      "MACHINERY_BREAKDOWN",
                      "CARRIERS_LIABILITY"
                    ]
                  }
                }
              }
            },
            dataModifications: {
              type: "array",
              items: {
                title: "Data Modification",
                description: "",
                type: "object",
                properties: {
                  insuredRiskGroups: {
                    description: "",
                    type: "array",
                    items: {
                      type: "object",
                      title: "Insured Risk Group",
                      properties: {
                        riskGroupId: {
                          type: "string",
                          description:
                            "A unique identifier for the insured risk group under an insurance policy. Usually identified as a risk number"
                        },
                        riskGroupType: {
                          title: "Risk Type",
                          type: "string",
                          description: "",
                          enum: [
                            "COMMERCIAL_VEHICLE",
                            "PRIVATE_VEHICLE",
                            "HOME",
                            "CONTENTS",
                            "BUSINESS_ASSETS",
                            "GENERAL_LIABILITY",
                            "STATUTORY_LIABILITY",
                            "EMPLOYERS_LIABILITY",
                            "BUSINESS_INTERRUPTION",
                            "PLEASUREKRAFT",
                            "MOBILE_BUSINESS_ASSETS",
                            "LIABILITY",
                            "MARINE",
                            "LIABILITY",
                            "CONTRACT_WORKS",
                            "DETERIORATION",
                            "ELECTRONIC_EQUIPMENT",
                            "INCOME_PROTECTION",
                            "MACHINERY_BREAKDOWN",
                            "CARRIERS_LIABILITY"
                          ]
                        },
                        attachmentDate: {
                          $ref:
                            "./common.oas2.yml#/definitions/date-time-extended"
                        },
                        effectiveDate: {
                          $ref:
                            "./common.oas2.yml#/definitions/date-time-extended"
                        },
                        endDate: {
                          $ref:
                            "./common.oas2.yml#/definitions/date-time-extended"
                        },
                        externalReferences: {
                          description: "This is thirdPartyRiskID",
                          type: "array",
                          items: {
                            $ref:
                              "./common.oas2.yml#/definitions/external-reference"
                          }
                        },
                        notes: {
                          type: "array",
                          items: {
                            $ref: "./common.oas2.yml#/definitions/note"
                          }
                        },
                        insuredRisks: {
                          description:
                            "An insured risk represents an asset covered by this insurance policy.\n\nThe list of each insured risk under the insurance policy",
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              riskId: {
                                type: "string",
                                description:
                                  "A unique identifier for the insured risk group under an insured risk group. Usually identified as a risk number"
                              },
                              lineOfBusinessCategory: {
                                title: "Line Of Business Category",
                                type: "string",
                                enum: [
                                  "COMMERCIAL_VEHICLE",
                                  "PRIVATE_VEHICLE",
                                  "HOME",
                                  "CONTENTS",
                                  "LIABILITY",
                                  "PLEASUREKRAFT",
                                  "BUSINESS_ASSETS",
                                  "MOBILE_BUSINESS_ASSETS",
                                  "BUSINESS_INTERRUPTION",
                                  "MARINE",
                                  "COMMERCIAL_PROPERTY"
                                ]
                              },
                              attachmentDate: {
                                $ref:
                                  "./common.oas2.yml#/definitions/date-time-extended"
                              },
                              rateDate: {
                                $ref:
                                  "./common.oas2.yml#/definitions/date-only-extended"
                              },
                              endDate: {
                                $ref:
                                  "./common.oas2.yml#/definitions/date-time-extended"
                              },
                              placesInvolved: {
                                description: "",
                                type: "array",
                                items: {
                                  $ref: "./common.oas2.yml#/definitions/place"
                                }
                              },
                              interestedParties: {
                                description: "",
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/interested-party"
                                }
                              },
                              externalReferences: {
                                description: "This is thirdPartyRiskID",
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/external-reference"
                                }
                              },
                              riskType: {
                                title: "Risk Type",
                                type: "string",
                                description: "",
                                enum: [
                                  "COMMERCIAL_VEHICLE",
                                  "PRIVATE_VEHICLE",
                                  "HOME",
                                  "CONTENTS",
                                  "BUSINESS_ASSETS",
                                  "GENERAL_LIABILITY",
                                  "STATUTORY_LIABILITY",
                                  "EMPLOYERS_LIABILITY",
                                  "BUSINESS_INTERRUPTION",
                                  "PLEASUREKRAFT",
                                  "MOBILE_BUSINESS_ASSETS",
                                  "LIABILITY",
                                  "MARINE",
                                  "LIABILITY",
                                  "CONTRACT_WORKS",
                                  "DETERIORATION",
                                  "ELECTRONIC_EQUIPMENT",
                                  "INCOME_PROTECTION",
                                  "MACHINERY_BREAKDOWN",
                                  "CARRIERS_LIABILITY"
                                ]
                              },
                              coInsurance: {
                                type: "object",
                                properties: {
                                  role: {
                                    type: "string",
                                    enum: ["LEAD", "NON_LEAD"]
                                  },
                                  startDate: {
                                    $ref:
                                      "./common.oas2.yml#/definitions/date-time-extended"
                                  },
                                  endDate: {
                                    $ref:
                                      "./common.oas2.yml#/definitions/date-time-extended"
                                  },
                                  sharePercentage: {
                                    type: "number",
                                    description: ""
                                  },
                                  coInsuranceParties: {
                                    type: "array",
                                    items: {
                                      type: "object",
                                      properties: {
                                        id: {
                                          type: "string"
                                        },
                                        name: {
                                          type: "string",
                                          description:
                                            "Name of company sharing co-insurance of the risk"
                                        },
                                        sharePercentage: {
                                          type: "string",
                                          description:
                                            "The percentage of the co-insurance risk that this party has taken"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              notes: {
                                type: "array",
                                items: {
                                  $ref: "./common.oas2.yml#/definitions/note"
                                }
                              },
                              benefits: {
                                type: "array",
                                description:
                                  "Details of benefits related to the insured risk",
                                items: {
                                  $ref: "./common.oas2.yml#/definitions/benefit"
                                }
                              },
                              conditions: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/peril-category"
                                }
                              },
                              discounts: {
                                type: "array",
                                description:
                                  "List of discounts applied to the risk. This could include a burglar alarm discount, an age discount, a multiple policy discount",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/discount"
                                }
                              },
                              excesses: {
                                type: "array",
                                items: {
                                  $ref: "./common.oas2.yml#/definitions/excess"
                                }
                              },
                              rates: {
                                type: "array",
                                items: {
                                  $ref: "./common.oas2.yml#/definitions/rate"
                                }
                              },
                              coverageItems: {
                                type: "array",
                                description:
                                  "List of items covered under this insured risk",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/coverage-item"
                                }
                              },
                              reInsurance: {
                                type: "object",
                                properties: {
                                  id: {
                                    type: "string",
                                    description: "TODO: Can we delete?"
                                  },
                                  category: {
                                    type: "string",
                                    description: "TODO: Can we delete?"
                                  },
                                  classification: {
                                    type: "string"
                                  },
                                  code: {
                                    type: "string"
                                  }
                                }
                              },
                              premiumDetails: {
                                type: "array",
                                description:
                                  "Includes premium details for this insured risk",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/premium-detail"
                                }
                              },
                              adjustments: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/adjustment"
                                }
                              },
                              questionAnswers: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/question-instance"
                                }
                              },
                              physicalConditions: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/physical-condition"
                                }
                              },
                              generalActivities: {
                                type: "array",
                                items: {
                                  title: "General Activity",
                                  description: "",
                                  type: "object",
                                  properties: {
                                    name: {
                                      type: "string"
                                    },
                                    activityCode: {
                                      type: "string"
                                    },
                                    activityId: {
                                      type: "string"
                                    },
                                    turnoverPercentage: {
                                      type: "number"
                                    },
                                    turnoverAmount: {
                                      type: "number"
                                    },
                                    description: {
                                      type: "string"
                                    },
                                    estimatedTurnover: {
                                      type: "number"
                                    },
                                    externalReferences: {
                                      description: "",
                                      type: "array",
                                      items: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/external-reference"
                                      }
                                    },
                                    address: {
                                      title: "Address Output",
                                      allOf: [
                                        {
                                          type: "object",
                                          properties: {
                                            id: {
                                              type: "string"
                                            }
                                          }
                                        },
                                        {
                                          title: "Address Base",
                                          description: "",
                                          type: "object",
                                          properties: {
                                            addressId: {
                                              description: "",
                                              type: "string"
                                            },
                                            addressPurpose: {
                                              title: "Address Purpose",
                                              type: "string",
                                              enum: [
                                                "BILLING",
                                                "BUSINESS",
                                                "HOME",
                                                "OTHER",
                                                "MAILING",
                                                "CONTACT"
                                              ]
                                            },
                                            boxNumber: {
                                              type: "string"
                                            },
                                            boxType: {
                                              type: "string"
                                            },
                                            buildingName: {
                                              type: "string"
                                            },
                                            city: {
                                              type: "string"
                                            },
                                            country: {
                                              type: "string"
                                            },
                                            deliveryType: {
                                              type: "string",
                                              enum: [
                                                "PO_BOX",
                                                "PRIVATE_BAG",
                                                "RESPONSE_BAG",
                                                "CMB",
                                                "COUNTER_DELIVERY",
                                                "POST_BOX",
                                                "RURAL"
                                              ]
                                            },
                                            description: {
                                              type: "string"
                                            },
                                            levelNumber: {
                                              type: "string"
                                            },
                                            levelType: {
                                              type: "string"
                                            },
                                            lobbyName: {
                                              type: "string"
                                            },
                                            postalCode: {
                                              type: "string"
                                            },
                                            region: {
                                              type: "string"
                                            },
                                            ruralDelivery: {
                                              type: "string"
                                            },
                                            ruralDistrict: {
                                              type: "string"
                                            },
                                            status: {
                                              type: "string"
                                            },
                                            streetName: {
                                              type: "string"
                                            },
                                            streetNumber: {
                                              type: "string"
                                            },
                                            streetNumberSuffix: {
                                              type: "string"
                                            },
                                            streetSuffix: {
                                              type: "string"
                                            },
                                            streetType: {
                                              type: "string"
                                            },
                                            subregion: {
                                              type: "string"
                                            },
                                            unitNumber: {
                                              type: "string"
                                            },
                                            unitType: {
                                              type: "string"
                                            },
                                            unstructured: {
                                              description:
                                                "An address represented in a single string",
                                              type: "string"
                                            },
                                            displayAddress: {
                                              type: "array",
                                              items: {
                                                type: "string"
                                              }
                                            },
                                            externalReferences: {
                                              type: "array",
                                              items: {
                                                $ref:
                                                  "./common.oas2.yml#/definitions/external-reference"
                                              }
                                            },
                                            geoLocation: {
                                              $ref:
                                                "./common.oas2.yml#/definitions/geo-location"
                                            },
                                            sourceId: {
                                              type: "string"
                                            },
                                            sourceType: {
                                              type: "string",
                                              description:
                                                "Can be Google, DPID etc"
                                            },
                                            rateLocation: {
                                              type: "string"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    activityType: {
                                      type: "string",
                                      enum: [
                                        "ANZSIC",
                                        "TERRITORIAL_LIMITS",
                                        "OUTSIDE_ACTIVITY",
                                        "HAZARDOUS_ACTIVITY",
                                        "HOTWORKS",
                                        "JURISDICTIONAL_LIMITS",
                                        "PRODUCT_DETAILS",
                                        "GENERAL",
                                        "AREA_OF_OPERATION",
                                        "USE_TYPE",
                                        "SUB_USE_TYPE",
                                        "BUSINESS_DESCRIPTION",
                                        "INDUSTRY",
                                        "BUSINESS_USAGE",
                                        "LOCATION",
                                        "VEHICLE_USAGE",
                                        "OCCUPATION"
                                      ]
                                    },
                                    amount: {
                                      type: "number",
                                      description:
                                        "A numeric value associated with an activity e.g. What is the maximum value of cash carried in any of the vehicles at any one time = **$1000**"
                                    },
                                    value: {
                                      type: "string",
                                      description:
                                        "A numeric value associated with an activity"
                                    },
                                    component: {
                                      type: "string"
                                    },
                                    purpose: {
                                      type: "string"
                                    },
                                    dynamicProperties: {
                                      type: "array",
                                      items: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/dynamic-property"
                                      }
                                    },
                                    undertakesActivity: {
                                      type: "boolean"
                                    },
                                    floorArea: {
                                      type: "integer"
                                    }
                                  },
                                  required: ["activityType"]
                                }
                              },
                              undergoneActivityOccurrences: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/activity-occurence"
                                }
                              },
                              objectOwnershipDetails: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/object-ownership"
                                }
                              },
                              mobileAssets: {
                                $ref:
                                  "./common.oas2.yml#/definitions/mobile-assets"
                              },
                              businessInterruption: {
                                $ref:
                                  "./common.oas2.yml#/definitions/business-interruption"
                              },
                              dwelling: {
                                $ref: "./common.oas2.yml#/definitions/dwelling"
                              },
                              liability: {
                                $ref: "./common.oas2.yml#/definitions/liability"
                              },
                              marineCraft: {
                                $ref:
                                  "./common.oas2.yml#/definitions/marine-craft"
                              },
                              structure: {
                                $ref: "./common.oas2.yml#/definitions/structure"
                              },
                              vehicle: {
                                title: "Vehicle Output",
                                allOf: [
                                  {
                                    type: "object",
                                    properties: {
                                      id: {
                                        type: "string",
                                        description:
                                          "Internal unique id generated by our DB or system"
                                      }
                                    }
                                  },
                                  {
                                    title: "Vehicle Base",
                                    description:
                                      "The representation of vehicle data.",
                                    type: "object",
                                    properties: {
                                      vehicleType: {
                                        title: "Vehicle Type Output",
                                        allOf: [
                                          {
                                            type: "object",
                                            properties: {
                                              id: {
                                                type: "string",
                                                description:
                                                  "Internal unique id generated by our DB or system"
                                              }
                                            }
                                          },
                                          {
                                            title: "Vehicle Type Base",
                                            description:
                                              "The representation of vehicleType data.",
                                            type: "object",
                                            properties: {
                                              vehicleId: {
                                                type: "integer",
                                                description:
                                                  "Recieved from RedBook or other sources"
                                              },
                                              make: {
                                                type: "string",
                                                description:
                                                  "The make of the vehicle"
                                              },
                                              mass: {
                                                type: "string",
                                                description:
                                                  "Gross laden weight"
                                              },
                                              model: {
                                                type: "string"
                                              },
                                              vehicleType: {
                                                type: "string"
                                              },
                                              year: {
                                                type: "integer"
                                              },
                                              bodyStyle: {
                                                type: "string"
                                              },
                                              engineType: {
                                                type: "string"
                                              },
                                              driveType: {
                                                type: "string",
                                                description:
                                                  "4WD or 2WD or AWD etc"
                                              },
                                              doors: {
                                                type: "integer"
                                              },
                                              series: {
                                                type: "string"
                                              },
                                              engineCapacity: {
                                                type: "string"
                                              },
                                              engineSize: {
                                                type: "string"
                                              },
                                              equipmentLevel: {
                                                type: "string"
                                              },
                                              equipmentLevel2: {
                                                type: "string"
                                              },
                                              fullDescription: {
                                                type: "string"
                                              },
                                              standardEquipment: {
                                                type: "string"
                                              },
                                              gearType: {
                                                type: "string",
                                                description:
                                                  "Automatic or Manual"
                                              },
                                              releaseMonth: {
                                                type: "integer"
                                              },
                                              noOfGears: {
                                                type: "integer"
                                              },
                                              noOfCylinders: {
                                                type: "integer"
                                              },
                                              fuelType: {
                                                type: "string"
                                              },
                                              tareWeight: {
                                                type: "number",
                                                description: "Unladen weight"
                                              },
                                              newPrice: {
                                                type: "number"
                                              },
                                              isImported: {
                                                type: "boolean"
                                              },
                                              seatCapacity: {
                                                type: "integer"
                                              },
                                              axels: {
                                                type: "integer"
                                              },
                                              bodyType: {
                                                type: "string"
                                              },
                                              vehicleIndicators: {
                                                type: "array",
                                                items: {
                                                  type: "object",
                                                  properties: {
                                                    product: {
                                                      type: "string",
                                                      enum: [
                                                        "State PMV",
                                                        "FI PMV"
                                                      ]
                                                    },
                                                    name: {
                                                      type: "string"
                                                    },
                                                    value: {
                                                      type: "string"
                                                    },
                                                    expiryDate: {
                                                      type: "string",
                                                      format: "date"
                                                    }
                                                  }
                                                }
                                              },
                                              prices: {
                                                type: "array",
                                                items: {
                                                  type: "object",
                                                  properties: {
                                                    price1: {
                                                      type: "number"
                                                    },
                                                    price2: {
                                                      type: "number"
                                                    },
                                                    price3: {
                                                      type: "number"
                                                    },
                                                    expiryDate: {
                                                      type: "string",
                                                      format: "date"
                                                    }
                                                  }
                                                }
                                              },
                                              vehicleGroup: {
                                                type: "string",
                                                description:
                                                  "General vehicle group e.g. car, ute etc."
                                              },
                                              isHybrid: {
                                                type: "boolean"
                                              },
                                              isElectric: {
                                                type: "boolean"
                                              },
                                              countryOfOrigin: {
                                                type: "string"
                                              },
                                              externalReferences: {
                                                type: "array",
                                                items: {
                                                  $ref:
                                                    "./common.oas2.yml#/definitions/external-reference"
                                                }
                                              },
                                              dataProvider: {
                                                type: "string"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      alternateVehicleType: {
                                        type: "array",
                                        items: {
                                          title: "Vehicle Type Output",
                                          allOf: [
                                            {
                                              type: "object",
                                              properties: {
                                                id: {
                                                  type: "string",
                                                  description:
                                                    "Internal unique id generated by our DB or system"
                                                }
                                              }
                                            },
                                            {
                                              title: "Vehicle Type Base",
                                              description:
                                                "The representation of vehicleType data.",
                                              type: "object",
                                              properties: {
                                                vehicleId: {
                                                  type: "integer",
                                                  description:
                                                    "Recieved from RedBook or other sources"
                                                },
                                                make: {
                                                  type: "string",
                                                  description:
                                                    "The make of the vehicle"
                                                },
                                                mass: {
                                                  type: "string",
                                                  description:
                                                    "Gross laden weight"
                                                },
                                                model: {
                                                  type: "string"
                                                },
                                                vehicleType: {
                                                  type: "string"
                                                },
                                                year: {
                                                  type: "integer"
                                                },
                                                bodyStyle: {
                                                  type: "string"
                                                },
                                                engineType: {
                                                  type: "string"
                                                },
                                                driveType: {
                                                  type: "string",
                                                  description:
                                                    "4WD or 2WD or AWD etc"
                                                },
                                                doors: {
                                                  type: "integer"
                                                },
                                                series: {
                                                  type: "string"
                                                },
                                                engineCapacity: {
                                                  type: "string"
                                                },
                                                engineSize: {
                                                  type: "string"
                                                },
                                                equipmentLevel: {
                                                  type: "string"
                                                },
                                                equipmentLevel2: {
                                                  type: "string"
                                                },
                                                fullDescription: {
                                                  type: "string"
                                                },
                                                standardEquipment: {
                                                  type: "string"
                                                },
                                                gearType: {
                                                  type: "string",
                                                  description:
                                                    "Automatic or Manual"
                                                },
                                                releaseMonth: {
                                                  type: "integer"
                                                },
                                                noOfGears: {
                                                  type: "integer"
                                                },
                                                noOfCylinders: {
                                                  type: "integer"
                                                },
                                                fuelType: {
                                                  type: "string"
                                                },
                                                tareWeight: {
                                                  type: "number",
                                                  description: "Unladen weight"
                                                },
                                                newPrice: {
                                                  type: "number"
                                                },
                                                isImported: {
                                                  type: "boolean"
                                                },
                                                seatCapacity: {
                                                  type: "integer"
                                                },
                                                axels: {
                                                  type: "integer"
                                                },
                                                bodyType: {
                                                  type: "string"
                                                },
                                                vehicleIndicators: {
                                                  type: "array",
                                                  items: {
                                                    type: "object",
                                                    properties: {
                                                      product: {
                                                        type: "string",
                                                        enum: [
                                                          "State PMV",
                                                          "FI PMV"
                                                        ]
                                                      },
                                                      name: {
                                                        type: "string"
                                                      },
                                                      value: {
                                                        type: "string"
                                                      },
                                                      expiryDate: {
                                                        type: "string",
                                                        format: "date"
                                                      }
                                                    }
                                                  }
                                                },
                                                prices: {
                                                  type: "array",
                                                  items: {
                                                    type: "object",
                                                    properties: {
                                                      price1: {
                                                        type: "number"
                                                      },
                                                      price2: {
                                                        type: "number"
                                                      },
                                                      price3: {
                                                        type: "number"
                                                      },
                                                      expiryDate: {
                                                        type: "string",
                                                        format: "date"
                                                      }
                                                    }
                                                  }
                                                },
                                                vehicleGroup: {
                                                  type: "string",
                                                  description:
                                                    "General vehicle group e.g. car, ute etc."
                                                },
                                                isHybrid: {
                                                  type: "boolean"
                                                },
                                                isElectric: {
                                                  type: "boolean"
                                                },
                                                countryOfOrigin: {
                                                  type: "string"
                                                },
                                                externalReferences: {
                                                  type: "array",
                                                  items: {
                                                    $ref:
                                                      "./common.oas2.yml#/definitions/external-reference"
                                                  }
                                                },
                                                dataProvider: {
                                                  type: "string"
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      },
                                      alarmType: {
                                        type: "string"
                                      },
                                      fullDescription: {
                                        type: "string"
                                      },
                                      hasAccessory: {
                                        type: "boolean"
                                      },
                                      hasAlarm: {
                                        type: "boolean"
                                      },
                                      hasLowKM: {
                                        type: "boolean"
                                      },
                                      hasModification: {
                                        type: "boolean"
                                      },
                                      hasOccasionalUse: {
                                        type: "boolean"
                                      },
                                      isVintage: {
                                        type: "boolean"
                                      },
                                      purposeOfUse: {
                                        type: "string"
                                      },
                                      registrationNumber: {
                                        type: "string"
                                      },
                                      vehicleUsage: {
                                        type: "string"
                                      },
                                      vin: {
                                        type: "string"
                                      },
                                      colour: {
                                        title: "Vehicle Colour",
                                        description: "",
                                        type: "string",
                                        enum: [
                                          "BLUE",
                                          "RED",
                                          "GREEN",
                                          "WHITE",
                                          "BLACK",
                                          "YELLOW",
                                          "ORANGE",
                                          "BROWN",
                                          "CREAM",
                                          "GOLD",
                                          "GREY",
                                          "PINK",
                                          "PURPLE",
                                          "SILVER"
                                        ]
                                      },
                                      driverParties: {
                                        type: "array",
                                        items: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/driver"
                                        }
                                      },
                                      externalReferences: {
                                        type: "array",
                                        items: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/external-reference"
                                        }
                                      },
                                      modifications: {
                                        type: "array",
                                        items: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/modification"
                                        }
                                      },
                                      modificationsAmount: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/amount-extended"
                                      },
                                      unnamedDrivers: {
                                        type: "array",
                                        items: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/unnamed-driver"
                                        }
                                      },
                                      mass: {
                                        type: "string"
                                      },
                                      vehicleClass: {
                                        type: "string"
                                      },
                                      securityFeatures: {
                                        type: "array",
                                        items: {
                                          type: "object",
                                          properties: {
                                            securityType: {
                                              type: "string"
                                            }
                                          }
                                        }
                                      },
                                      vehicleAssessments: {
                                        type: "array",
                                        items: {
                                          $ref:
                                            "./common.oas2.yml#/definitions/vehicle-assessment"
                                        }
                                      },
                                      permanentFixtureAmount: {
                                        $ref:
                                          "./common.oas2.yml#/definitions/amount-extended"
                                      },
                                      isPermanentlySited: {
                                        type: "boolean"
                                      },
                                      isPrestige: {
                                        type: "boolean"
                                      },
                                      isExotic: {
                                        type: "boolean"
                                      },
                                      hasImmobiliser: {
                                        type: "boolean"
                                      },
                                      parkingLocations: {
                                        type: "array",
                                        items: {
                                          type: "object",
                                          properties: {
                                            code: {
                                              type: "string",
                                              description:
                                                "example - onRoad, offRoad, carPort"
                                            },
                                            description: {
                                              type: "string",
                                              description:
                                                "Add a description of parking location, if applicable"
                                            }
                                          }
                                        }
                                      },
                                      chassisNumber: {
                                        type: "string"
                                      }
                                    }
                                  }
                                ]
                              },
                              coverType: {
                                type: "string",
                                description:
                                  "Type of cover purchased for the insured risk"
                              },
                              assessmentResults: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/assessment-result"
                                }
                              },
                              confirmationHistories: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/confirmation-history"
                                }
                              },
                              insuredParty: {
                                type: "object",
                                properties: {
                                  partyId: {
                                    type: "string"
                                  },
                                  systemOfRecord: {
                                    title: "System Of Record",
                                    type: "string",
                                    enum: [
                                      "LOREM",
                                      "HEART",
                                      "IPSUM_CENTER",
                                      "SECURITY",
                                      "BAR",
                                      "FOO",
                                      "BUDDY",
                                      "BONUS"
                                    ]
                                  },
                                  partyRole: {
                                    title: "Party Role",
                                    type: "string",
                                    enum: [
                                      "CUSTOMER",
                                      "INSURED",
                                      "ADDITIONAL_INSURED",
                                      "NAMED_DRIVER",
                                      "PRIMARY_CONTACT",
                                      "SECONDARY_CONTACT",
                                      "AUTHORISER",
                                      "NAMED_PARTY"
                                    ]
                                  }
                                }
                              },
                              generalCover: {
                                $ref:
                                  "./common.oas2.yml#/definitions/general-cover"
                              },
                              settlementBasis: {
                                type: "string",
                                enum: [
                                  "AGREED_VALUE",
                                  "FIXED_VALUE",
                                  "MARKET_VALUE",
                                  "SUM_INSURED"
                                ],
                                description:
                                  "The basis on which the confirmation would be settled on this risk"
                              },
                              isDisabled: {
                                type: "boolean",
                                description:
                                  "Used mainly for Quote UI where the user can enable/disable the risks in UI"
                              },
                              financialServicesProduct: {
                                type: "object",
                                properties: {
                                  wordingCode: {
                                    type: "string",
                                    description:
                                      "Only use when necessary to override the wording code at insuredRisk Group level. e.g. Lorem liability risks which have different wording for each risk within the same group"
                                  }
                                }
                              },
                              isRiskTransitioning: {
                                type: "boolean",
                                description:
                                  "Only used for Rating renewals. Indicates if the risk is transitioning from one rating engine to another"
                              },
                              deferments: {
                                type: "array",
                                items: {
                                  $ref:
                                    "./common.oas2.yml#/definitions/deferment"
                                }
                              },
                              namedParties: {
                                type: "object",
                                properties: {
                                  partyId: {
                                    type: "string"
                                  },
                                  systemOfRecord: {
                                    title: "System Of Record",
                                    type: "string",
                                    enum: [
                                      "LOREM",
                                      "HEART",
                                      "IPSUM_CENTER",
                                      "SECURITY",
                                      "BAR",
                                      "FOO",
                                      "BUDDY",
                                      "BONUS"
                                    ]
                                  },
                                  partyRole: {
                                    title: "Party Role",
                                    type: "string",
                                    enum: [
                                      "CUSTOMER",
                                      "INSURED",
                                      "ADDITIONAL_INSURED",
                                      "NAMED_DRIVER",
                                      "PRIMARY_CONTACT",
                                      "SECONDARY_CONTACT",
                                      "AUTHORISER",
                                      "NAMED_PARTY"
                                    ]
                                  }
                                }
                              }
                            }
                          }
                        },
                        financialServicesProduct: {
                          $ref:
                            "./common.oas2.yml#/definitions/contract-specification"
                        },
                        questionAnswers: {
                          type: "array",
                          items: {
                            $ref:
                              "./common.oas2.yml#/definitions/question-instance"
                          }
                        },
                        benefits: {
                          type: "array",
                          items: {
                            $ref: "./common.oas2.yml#/definitions/benefit"
                          }
                        },
                        discounts: {
                          type: "array",
                          items: {
                            $ref: "./common.oas2.yml#/definitions/discount"
                          }
                        },
                        excesses: {
                          type: "array",
                          items: {
                            $ref: "./common.oas2.yml#/definitions/excess"
                          }
                        },
                        rates: {
                          type: "array",
                          items: {
                            $ref: "./common.oas2.yml#/definitions/rate"
                          }
                        },
                        exposureGrade: {
                          type: "string",
                          enum: [
                            "ZERO_AT_FAULT_LAST_3_YEARS",
                            "ONE_AT_FAULT_LAST_3_YEARS",
                            "TWO_AT_FAULT_LAST_3_YEARS",
                            "NO_PREVIOUS_HISTORY",
                            "THREEPLUS_AT_FAULT_LAST_3_YEARS"
                          ]
                        },
                        exposureAmount: {
                          type: "number",
                          description: "TODO: can we delete this "
                        },
                        premiumDetails: {
                          type: "array",
                          items: {
                            $ref:
                              "./common.oas2.yml#/definitions/premium-detail"
                          }
                        },
                        adjustments: {
                          type: "array",
                          items: {
                            $ref: "./common.oas2.yml#/definitions/adjustment"
                          }
                        },
                        coverageItems: {
                          type: "array",
                          items: {
                            $ref: "./common.oas2.yml#/definitions/coverage-item"
                          }
                        },
                        groupSubType: {
                          type: "string",
                          description: "",
                          enum: ["FLEET", "NON_FLEET"]
                        }
                      }
                    }
                  },
                  actionCode: {
                    title: "Action Code",
                    description: " TERMINATE",
                    type: "string",
                    enum: ["TERMINATE"]
                  }
                }
              }
            },
            notes: {
              type: "array",
              items: {
                title: "Note",
                description: "",
                type: "object",
                properties: {
                  effectiveDate: {
                    title: "Date Time Extended",
                    type: "object",
                    properties: {
                      value: {
                        type: "string",
                        format: "date-time"
                      },
                      format: {
                        type: "string",
                        enum: [
                          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                          "yyyy-MM-dd'T'HH:mm:ss'Z'",
                          "yyyy-MM-dd'T'HH:mm'Z'",
                          "yyyy-MM-dd'T'HH",
                          "yyyy-MM-dd",
                          "yyyy-MM",
                          "yyyy"
                        ]
                      },
                      minValue: {
                        type: "string"
                      },
                      maxValue: {
                        type: "string"
                      },
                      defaultValue: {
                        type: "string"
                      }
                    },
                    required: ["value"]
                  },
                  text: {
                    type: "string"
                  },
                  externalReferences: {
                    description: "",
                    type: "array",
                    items: {
                      title: "External Reference",
                      description: "",
                      type: "object",
                      properties: {
                        namespace: {
                          description: "A namespace for the identifier.",
                          type: "string"
                        },
                        identifier: {
                          description: "An identifier for the entity",
                          type: "string"
                        }
                      }
                    }
                  },
                  forInternalUse: {
                    type: "boolean"
                  }
                }
              }
            },
            agent: {
              title: "Agent",
              type: "object",
              properties: {
                id: {
                  type: "string"
                },
                email: {
                  type: "string",
                  format: "email"
                },
                name: {
                  type: "string"
                },
                costOfSaleGroup: {
                  type: "string"
                },
                externalReferences: {
                  type: "array",
                  items: {
                    title: "External Reference",
                    description: "",
                    type: "object",
                    properties: {
                      namespace: {
                        description: "A namespace for the identifier.",
                        type: "string"
                      },
                      identifier: {
                        description: "An identifier for the entity",
                        type: "string"
                      }
                    }
                  }
                }
              }
            },
            servicingChannel: {
              title: "Servicing Channel",
              type: "object",
              properties: {
                channelName: {
                  type: "string"
                },
                servicedBy: {
                  type: "string"
                }
              }
            },
            status: {
              type: "string",
              enum: [
                "IN_FORCE",
                "EXPIRED",
                "CANCELLED",
                "SUSPENDED",
                "PENDING",
                "CANCELLATION_PENDING"
              ],
              description:
                "Current state of the policy i.e. whether active, cancelled, lapsed, at effective date"
            },
            transactionData: {
              type: "object",
              properties: {
                paymentTransactions: {
                  type: "array",
                  items: {
                    title: "Payment Transaction",
                    type: "object",
                    properties: {
                      accountName: {
                        type: "string"
                      },
                      accountNumber: {
                        type: "string"
                      },
                      bankName: {
                        type: "string"
                      },
                      paymentMethod: {
                        type: "string",
                        enum: [
                          "CASH",
                          "CHEQUE",
                          "DIRECT_DEBIT",
                          "DIRECT_CREDIT",
                          "CREDIT_CARD",
                          "BANK_TRANSFER"
                        ]
                      },
                      transactionReference: {
                        type: "string"
                      },
                      amount: {
                        title: "Amount Extended",
                        type: "object",
                        properties: {
                          amount: {
                            type: "number"
                          },
                          currencyCode: {
                            type: "string"
                          },
                          isGSTInclusive: {
                            type: "boolean"
                          },
                          GSTAmount: {
                            type: "number"
                          },
                          GSTPercentageApplicable: {
                            type: "number"
                          },
                          description: {
                            type: "string"
                          }
                        },
                        required: ["amount"]
                      },
                      transactionDate: {
                        title: "Date Time Extended",
                        type: "object",
                        properties: {
                          value: {
                            type: "string",
                            format: "date-time"
                          },
                          format: {
                            type: "string",
                            enum: [
                              "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                              "yyyy-MM-dd'T'HH:mm:ss'Z'",
                              "yyyy-MM-dd'T'HH:mm'Z'",
                              "yyyy-MM-dd'T'HH",
                              "yyyy-MM-dd",
                              "yyyy-MM",
                              "yyyy"
                            ]
                          },
                          minValue: {
                            type: "string"
                          },
                          maxValue: {
                            type: "string"
                          },
                          defaultValue: {
                            type: "string"
                          }
                        },
                        required: ["value"]
                      },
                      cardType: {
                        type: "string"
                      },
                      cardHolderName: {
                        type: "string"
                      }
                    }
                  }
                }
              }
            },
            paymentArrangement: {
              title: "Payment Arrangement",
              type: "object",
              properties: {
                anniversaryDay: {
                  type: "integer"
                },
                firstDueDate: {
                  title: "Date Time Extended",
                  type: "object",
                  properties: {
                    value: {
                      type: "string",
                      format: "date-time"
                    },
                    format: {
                      type: "string",
                      enum: [
                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                        "yyyy-MM-dd'T'HH:mm'Z'",
                        "yyyy-MM-dd'T'HH",
                        "yyyy-MM-dd",
                        "yyyy-MM",
                        "yyyy"
                      ]
                    },
                    minValue: {
                      type: "string"
                    },
                    maxValue: {
                      type: "string"
                    },
                    defaultValue: {
                      type: "string"
                    }
                  },
                  required: ["value"]
                },
                nextDueDate: {
                  title: "Date Time Extended",
                  type: "object",
                  properties: {
                    value: {
                      type: "string",
                      format: "date-time"
                    },
                    format: {
                      type: "string",
                      enum: [
                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                        "yyyy-MM-dd'T'HH:mm'Z'",
                        "yyyy-MM-dd'T'HH",
                        "yyyy-MM-dd",
                        "yyyy-MM",
                        "yyyy"
                      ]
                    },
                    minValue: {
                      type: "string"
                    },
                    maxValue: {
                      type: "string"
                    },
                    defaultValue: {
                      type: "string"
                    }
                  },
                  required: ["value"]
                },
                paymentFrequency: {
                  title: "Premium Frequency",
                  type: "string",
                  description: "",
                  enum: [
                    "ANNUALLY",
                    "QUARTERLY",
                    "MONTHLY",
                    "FORTNIGHTLY",
                    "ONE_OFF",
                    "HALF_YEARLY"
                  ]
                },
                paymentDetails: {
                  type: "array",
                  description: "Payment details",
                  items: {
                    title: "Payment Arrangement Detail",
                    type: "object",
                    properties: {
                      paymentType: {
                        type: "string",
                        enum: ["INITIAL", "RECURRING"]
                      },
                      accountName: {
                        type: "string",
                        description:
                          "The name of the account holder paying for this insurance policy"
                      },
                      accountNumber: {
                        type: "string",
                        description:
                          "The bank account or credit card number where premium amount is deducted from"
                      },
                      bankName: {
                        type: "string"
                      },
                      paymentMethod: {
                        type: "string",
                        enum: [
                          "CASH",
                          "CHEQUE",
                          "DIRECT_DEBIT",
                          "DIRECT_CREDIT",
                          "CREDIT_CARD",
                          "BANK_TRANSFER"
                        ]
                      },
                      personName: {
                        type: "string",
                        description:
                          "Person name may differ from the bank account name"
                      },
                      isAccountHolder: {
                        type: "boolean",
                        description: "Is customer the account holder"
                      },
                      hasOneSignatory: {
                        type: "boolean",
                        description:
                          "Only one signature required on this account"
                      },
                      hasAcceptedTerms: {
                        type: "boolean",
                        description:
                          "Given IAG authority to commence diret debits and for the nominated bank to accept Direct Debits from IAG"
                      },
                      isDeclarationStatementAccepted: {
                        type: "boolean",
                        description:
                          "Customer has accepted the paperless declaration statement"
                      },
                      amount: {
                        title: "Amount Extended",
                        type: "object",
                        properties: {
                          amount: {
                            type: "number"
                          },
                          currencyCode: {
                            type: "string"
                          },
                          isGSTInclusive: {
                            type: "boolean"
                          },
                          GSTAmount: {
                            type: "number"
                          },
                          GSTPercentageApplicable: {
                            type: "number"
                          },
                          description: {
                            type: "string"
                          }
                        },
                        required: ["amount"]
                      },
                      merchantReference: {
                        type: "string"
                      }
                    }
                  }
                },
                billedToDate: {
                  title: "Date Time Extended",
                  type: "object",
                  properties: {
                    value: {
                      type: "string",
                      format: "date-time"
                    },
                    format: {
                      type: "string",
                      enum: [
                        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                        "yyyy-MM-dd'T'HH:mm:ss'Z'",
                        "yyyy-MM-dd'T'HH:mm'Z'",
                        "yyyy-MM-dd'T'HH",
                        "yyyy-MM-dd",
                        "yyyy-MM",
                        "yyyy"
                      ]
                    },
                    minValue: {
                      type: "string"
                    },
                    maxValue: {
                      type: "string"
                    },
                    defaultValue: {
                      type: "string"
                    }
                  },
                  required: ["value"]
                },
                paymentPlanCode: {
                  type: "string"
                }
              }
            },
            benefits: {
              type: "array",
              items: {
                title: "Benefit",
                description:
                  "TODO: (Find this in GW??) This includes sum insured and/or limits like weekly rental",
                type: "object",
                properties: {
                  amount: {
                    title: "Amount Extended",
                    type: "object",
                    properties: {
                      amount: {
                        type: "number"
                      },
                      currencyCode: {
                        type: "string"
                      },
                      isGSTInclusive: {
                        type: "boolean"
                      },
                      GSTAmount: {
                        type: "number"
                      },
                      GSTPercentageApplicable: {
                        type: "number"
                      },
                      description: {
                        type: "string"
                      }
                    },
                    required: ["amount"]
                  },
                  category: {
                    type: "string",
                    description:
                      "eg. SumInsured, ComponentSumInsured,  RiskSumInsured"
                  },
                  code: {
                    type: "string"
                  },
                  limits: {
                    description: "",
                    type: "array",
                    items: {
                      title: "Limit",
                      description: "",
                      type: "object",
                      properties: {
                        amount: {
                          title: "Amount Extended",
                          type: "object",
                          properties: {
                            amount: {
                              type: "number"
                            },
                            currencyCode: {
                              type: "string"
                            },
                            isGSTInclusive: {
                              type: "boolean"
                            },
                            GSTAmount: {
                              type: "number"
                            },
                            GSTPercentageApplicable: {
                              type: "number"
                            },
                            description: {
                              type: "string"
                            }
                          },
                          required: ["amount"]
                        },
                        startDate: {
                          title: "Date Time Extended",
                          type: "object",
                          properties: {
                            value: {
                              type: "string",
                              format: "date-time"
                            },
                            format: {
                              type: "string",
                              enum: [
                                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                "yyyy-MM-dd'T'HH:mm'Z'",
                                "yyyy-MM-dd'T'HH",
                                "yyyy-MM-dd",
                                "yyyy-MM",
                                "yyyy"
                              ]
                            },
                            minValue: {
                              type: "string"
                            },
                            maxValue: {
                              type: "string"
                            },
                            defaultValue: {
                              type: "string"
                            }
                          },
                          required: ["value"]
                        },
                        endDate: {
                          title: "Date Time Extended",
                          type: "object",
                          properties: {
                            value: {
                              type: "string",
                              format: "date-time"
                            },
                            format: {
                              type: "string",
                              enum: [
                                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                                "yyyy-MM-dd'T'HH:mm'Z'",
                                "yyyy-MM-dd'T'HH",
                                "yyyy-MM-dd",
                                "yyyy-MM",
                                "yyyy"
                              ]
                            },
                            minValue: {
                              type: "string"
                            },
                            maxValue: {
                              type: "string"
                            },
                            defaultValue: {
                              type: "string"
                            }
                          },
                          required: ["value"]
                        },
                        name: {
                          type: "string",
                          description: "Label or text displayed on GUI"
                        },
                        code: {
                          type: "string",
                          description:
                            "Value used for mapping at the backend system"
                        },
                        category: {
                          description:
                            "Examples includeHome,ContentsSpecified ItemsOptional CoverRental Amount, DailyConfirmationableAmount",
                          type: "string"
                        },
                        description: {
                          type: "string"
                        },
                        value: {
                          type: "string",
                          description:
                            "This represents the percentage of requested sum insured"
                        },
                        limitNumber: {
                          type: "string"
                        },
                        coverageType: {
                          type: "string",
                          description: "conformed value"
                        }
                      }
                    }
                  },
                  description: {
                    type: "string"
                  },
                  value: {
                    type: "string"
                  },
                  premiumClass: {
                    type: "string"
                  }
                }
              }
            },
            excesses: {
              type: "array",
              items: {
                title: "Excess",
                description: "",
                type: "object",
                properties: {
                  code: {
                    type: "string",
                    description: "code used in System of Record, if available"
                  },
                  name: {
                    type: "string",
                    description: "Specific to System of Record"
                  },
                  excessCategory: {
                    type: "string",
                    enum: [
                      "STANDARD",
                      "VOLUNTARY",
                      "IMPOSED",
                      "NAMED_DRIVER",
                      "COVERAGE_ITEM",
                      "THEFT",
                      "NAMED_DRIVER_IMPOSED",
                      "UNNAMED_DRIVER_IMPOSED",
                      "UNNAMED_DRIVER",
                      "SPECIAL",
                      "SPECIAL_IMPOSED"
                    ]
                  },
                  minimumAmount: {
                    title: "Amount Extended",
                    type: "object",
                    properties: {
                      amount: {
                        type: "number"
                      },
                      currencyCode: {
                        type: "string"
                      },
                      isGSTInclusive: {
                        type: "boolean"
                      },
                      GSTAmount: {
                        type: "number"
                      },
                      GSTPercentageApplicable: {
                        type: "number"
                      },
                      description: {
                        type: "string"
                      }
                    },
                    required: ["amount"]
                  },
                  maximumAmount: {
                    title: "Amount Extended",
                    type: "object",
                    properties: {
                      amount: {
                        type: "number"
                      },
                      currencyCode: {
                        type: "string"
                      },
                      isGSTInclusive: {
                        type: "boolean"
                      },
                      GSTAmount: {
                        type: "number"
                      },
                      GSTPercentageApplicable: {
                        type: "number"
                      },
                      description: {
                        type: "string"
                      }
                    },
                    required: ["amount"]
                  },
                  references: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        namespace: {
                          type: "string",
                          enum: ["NAMED_DRIVER_ID"]
                        },
                        identifier: {
                          type: "string"
                        }
                      }
                    }
                  },
                  value: {
                    type: "string",
                    description: "TODO - may not be required"
                  },
                  tier: {
                    type: "string",
                    description: "TODO - may not be required"
                  },
                  rate: {
                    type: "number"
                  }
                },
                required: ["excessCategory"]
              }
            },
            discounts: {
              type: "array",
              items: {
                title: "Discount",
                description: "",
                type: "object",
                properties: {
                  code: {
                    type: "string",
                    description: "Code used in System of Record, if available"
                  },
                  name: {
                    type: "string",
                    description: "Specific to System of Record"
                  },
                  value: {
                    type: "string"
                  },
                  discountType: {
                    type: "string",
                    enum: ["PERCENT", "RATE", "DOLLAR_AMOUNT", "OTHER"]
                  },
                  amount: {
                    title: "Amount Extended",
                    type: "object",
                    properties: {
                      amount: {
                        type: "number"
                      },
                      currencyCode: {
                        type: "string"
                      },
                      isGSTInclusive: {
                        type: "boolean"
                      },
                      GSTAmount: {
                        type: "number"
                      },
                      GSTPercentageApplicable: {
                        type: "number"
                      },
                      description: {
                        type: "string"
                      }
                    },
                    required: ["amount"]
                  },
                  priority: {
                    type: "integer",
                    description: "Order in which the discount is applied"
                  }
                },
                required: ["discountType"]
              }
            },
            adjustments: {
              type: "array",
              items: {
                title: "Adjustment",
                description: "",
                type: "object",
                properties: {
                  amount: {
                    title: "Amount Extended",
                    type: "object",
                    properties: {
                      amount: {
                        type: "number"
                      },
                      currencyCode: {
                        type: "string"
                      },
                      isGSTInclusive: {
                        type: "boolean"
                      },
                      GSTAmount: {
                        type: "number"
                      },
                      GSTPercentageApplicable: {
                        type: "number"
                      },
                      description: {
                        type: "string"
                      }
                    },
                    required: ["amount"]
                  },
                  code: {
                    type: "string",
                    description: "code used in System of Record, if available"
                  },
                  factor: {
                    type: "string"
                  },
                  reason: {
                    type: "string"
                  },
                  adjustmentType: {
                    type: "string",
                    enum: ["PERCENT", "RATE", "DOLLAR_AMOUNT"]
                  },
                  name: {
                    type: "string",
                    description: "Specific to System of Record"
                  },
                  priority: {
                    type: "integer",
                    description: "Order in which the discount is applied"
                  }
                },
                required: ["adjustmentType"]
              }
            },
            premiumDetails: {
              type: "array",
              description: "Includes premium details for this insurance policy",
              items: {
                title: "Premium Detail",
                type: "object",
                properties: {
                  category: {
                    type: "string"
                  },
                  code: {
                    type: "string"
                  },
                  writtenPremium: {
                    title: "Premium",
                    description: "",
                    type: "object",
                    properties: {
                      companyPremium: {
                        type: "number",
                        description: "Company Premium"
                      },
                      naturalDisasterPremium: {
                        type: "number"
                      },
                      earthquakeLevy: {
                        type: "number",
                        description: "EQC Levy"
                      },
                      fireServiceLevy: {
                        type: "number",
                        description: "Fire Service Levy"
                      },
                      gst: {
                        type: "number",
                        description: "GST Amount"
                      },
                      instalmentCharge: {
                        type: "number"
                      },
                      adminCharge: {
                        type: "number",
                        description: "Admin Charge"
                      },
                      commissionRate: {
                        type: "number",
                        description: "Commission Rate"
                      },
                      minimumPremiumUsed: {
                        type: "boolean"
                      },
                      naturalDisasterCommission: {
                        type: "number"
                      },
                      terrorTotalTransactionCost: {
                        type: "number"
                      },
                      commissionAmount: {
                        type: "number"
                      },
                      commissionGST: {
                        type: "number"
                      },
                      totalPremium: {
                        type: "number"
                      },
                      businessPremium: {
                        type: "number"
                      },
                      cappingAndCupping: {
                        type: "object",
                        properties: {
                          premiumAmount: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          },
                          adjustmentFactor: {
                            type: "number"
                          },
                          premiumAdjustmentDueToOverride: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          }
                        }
                      }
                    }
                  },
                  annualisedPremium: {
                    title: "Premium",
                    description: "",
                    type: "object",
                    properties: {
                      companyPremium: {
                        type: "number",
                        description: "Company Premium"
                      },
                      naturalDisasterPremium: {
                        type: "number"
                      },
                      earthquakeLevy: {
                        type: "number",
                        description: "EQC Levy"
                      },
                      fireServiceLevy: {
                        type: "number",
                        description: "Fire Service Levy"
                      },
                      gst: {
                        type: "number",
                        description: "GST Amount"
                      },
                      instalmentCharge: {
                        type: "number"
                      },
                      adminCharge: {
                        type: "number",
                        description: "Admin Charge"
                      },
                      commissionRate: {
                        type: "number",
                        description: "Commission Rate"
                      },
                      minimumPremiumUsed: {
                        type: "boolean"
                      },
                      naturalDisasterCommission: {
                        type: "number"
                      },
                      terrorTotalTransactionCost: {
                        type: "number"
                      },
                      commissionAmount: {
                        type: "number"
                      },
                      commissionGST: {
                        type: "number"
                      },
                      totalPremium: {
                        type: "number"
                      },
                      businessPremium: {
                        type: "number"
                      },
                      cappingAndCupping: {
                        type: "object",
                        properties: {
                          premiumAmount: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          },
                          adjustmentFactor: {
                            type: "number"
                          },
                          premiumAdjustmentDueToOverride: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          }
                        }
                      }
                    }
                  },
                  transactionPremium: {
                    title: "Premium",
                    description: "",
                    type: "object",
                    properties: {
                      companyPremium: {
                        type: "number",
                        description: "Company Premium"
                      },
                      naturalDisasterPremium: {
                        type: "number"
                      },
                      earthquakeLevy: {
                        type: "number",
                        description: "EQC Levy"
                      },
                      fireServiceLevy: {
                        type: "number",
                        description: "Fire Service Levy"
                      },
                      gst: {
                        type: "number",
                        description: "GST Amount"
                      },
                      instalmentCharge: {
                        type: "number"
                      },
                      adminCharge: {
                        type: "number",
                        description: "Admin Charge"
                      },
                      commissionRate: {
                        type: "number",
                        description: "Commission Rate"
                      },
                      minimumPremiumUsed: {
                        type: "boolean"
                      },
                      naturalDisasterCommission: {
                        type: "number"
                      },
                      terrorTotalTransactionCost: {
                        type: "number"
                      },
                      commissionAmount: {
                        type: "number"
                      },
                      commissionGST: {
                        type: "number"
                      },
                      totalPremium: {
                        type: "number"
                      },
                      businessPremium: {
                        type: "number"
                      },
                      cappingAndCupping: {
                        type: "object",
                        properties: {
                          premiumAmount: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          },
                          adjustmentFactor: {
                            type: "number"
                          },
                          premiumAdjustmentDueToOverride: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          }
                        }
                      }
                    }
                  },
                  instalmentPremium: {
                    title: "Premium",
                    description: "",
                    type: "object",
                    properties: {
                      companyPremium: {
                        type: "number",
                        description: "Company Premium"
                      },
                      naturalDisasterPremium: {
                        type: "number"
                      },
                      earthquakeLevy: {
                        type: "number",
                        description: "EQC Levy"
                      },
                      fireServiceLevy: {
                        type: "number",
                        description: "Fire Service Levy"
                      },
                      gst: {
                        type: "number",
                        description: "GST Amount"
                      },
                      instalmentCharge: {
                        type: "number"
                      },
                      adminCharge: {
                        type: "number",
                        description: "Admin Charge"
                      },
                      commissionRate: {
                        type: "number",
                        description: "Commission Rate"
                      },
                      minimumPremiumUsed: {
                        type: "boolean"
                      },
                      naturalDisasterCommission: {
                        type: "number"
                      },
                      terrorTotalTransactionCost: {
                        type: "number"
                      },
                      commissionAmount: {
                        type: "number"
                      },
                      commissionGST: {
                        type: "number"
                      },
                      totalPremium: {
                        type: "number"
                      },
                      businessPremium: {
                        type: "number"
                      },
                      cappingAndCupping: {
                        type: "object",
                        properties: {
                          premiumAmount: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          },
                          adjustmentFactor: {
                            type: "number"
                          },
                          premiumAdjustmentDueToOverride: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          }
                        }
                      }
                    }
                  },
                  initialPaymentPremium: {
                    title: "Premium",
                    description: "",
                    type: "object",
                    properties: {
                      companyPremium: {
                        type: "number",
                        description: "Company Premium"
                      },
                      naturalDisasterPremium: {
                        type: "number"
                      },
                      earthquakeLevy: {
                        type: "number",
                        description: "EQC Levy"
                      },
                      fireServiceLevy: {
                        type: "number",
                        description: "Fire Service Levy"
                      },
                      gst: {
                        type: "number",
                        description: "GST Amount"
                      },
                      instalmentCharge: {
                        type: "number"
                      },
                      adminCharge: {
                        type: "number",
                        description: "Admin Charge"
                      },
                      commissionRate: {
                        type: "number",
                        description: "Commission Rate"
                      },
                      minimumPremiumUsed: {
                        type: "boolean"
                      },
                      naturalDisasterCommission: {
                        type: "number"
                      },
                      terrorTotalTransactionCost: {
                        type: "number"
                      },
                      commissionAmount: {
                        type: "number"
                      },
                      commissionGST: {
                        type: "number"
                      },
                      totalPremium: {
                        type: "number"
                      },
                      businessPremium: {
                        type: "number"
                      },
                      cappingAndCupping: {
                        type: "object",
                        properties: {
                          premiumAmount: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          },
                          adjustmentFactor: {
                            type: "number"
                          },
                          premiumAdjustmentDueToOverride: {
                            title: "Amount Extended",
                            type: "object",
                            properties: {
                              amount: {
                                type: "number"
                              },
                              currencyCode: {
                                type: "string"
                              },
                              isGSTInclusive: {
                                type: "boolean"
                              },
                              GSTAmount: {
                                type: "number"
                              },
                              GSTPercentageApplicable: {
                                type: "number"
                              },
                              description: {
                                type: "string"
                              }
                            },
                            required: ["amount"]
                          }
                        }
                      }
                    }
                  },
                  premiumClass: {
                    type: "string"
                  },
                  premiumFrequency: {
                    title: "Premium Frequency",
                    type: "string",
                    description: "",
                    enum: [
                      "ANNUALLY",
                      "QUARTERLY",
                      "MONTHLY",
                      "FORTNIGHTLY",
                      "ONE_OFF",
                      "HALF_YEARLY"
                    ]
                  }
                }
              }
            },
            financialServicesProduct: {
              title: "Contract Specification",
              description:
                "The representation of the rules governing the commitments a financial services provider has a business interest in.",
              type: "object",
              properties: {
                name: {
                  type: "string"
                },
                code: {
                  type: "string",
                  description:
                    'System of record code. At policy level this is the package code. At insured Risk Group level, this is Risk Specification class, eg. For HEART  "PEC", "PES" etc.'
                },
                description: {
                  description: "Policy wording",
                  type: "string"
                },
                wordingCode: {
                  type: "string"
                },
                conditions: {
                  description: "",
                  type: "array",
                  items: {
                    title: "Peril Category",
                    description: "",
                    type: "object",
                    properties: {
                      name: {
                        type: "string"
                      },
                      code: {
                        type: "string"
                      },
                      value: {
                        type: "string"
                      },
                      description: {
                        type: "string"
                      },
                      subCategories: {
                        description: "",
                        type: "array",
                        items: {
                          $ref: "#/definitions/peril-category"
                        }
                      }
                    }
                  }
                },
                coverageClasses: {
                  description: "",
                  type: "array",
                  items: {
                    title: "Peril Category",
                    description: "",
                    type: "object",
                    properties: {
                      name: {
                        type: "string"
                      },
                      code: {
                        type: "string"
                      },
                      value: {
                        type: "string"
                      },
                      description: {
                        type: "string"
                      },
                      subCategories: {
                        description: "",
                        type: "array",
                        items: {
                          $ref: "#/definitions/peril-category"
                        }
                      }
                    }
                  }
                },
                exclusions: {
                  description: "",
                  type: "array",
                  items: {
                    title: "Peril Category",
                    description: "",
                    type: "object",
                    properties: {
                      name: {
                        type: "string"
                      },
                      code: {
                        type: "string"
                      },
                      value: {
                        type: "string"
                      },
                      description: {
                        type: "string"
                      },
                      subCategories: {
                        description: "",
                        type: "array",
                        items: {
                          $ref: "#/definitions/peril-category"
                        }
                      }
                    }
                  }
                },
                productVersion: {
                  type: "string"
                },
                ratingBrand: {
                  type: "string"
                },
                ratingLine: {
                  type: "string",
                  enum: ["PERSONAL", "COMMERCIAL"]
                },
                ratingProductName: {
                  type: "string"
                },
                isRural: {
                  type: "boolean"
                }
              }
            },
            policyHandler: {
              type: "string",
              description:
                "Person who is handling the policy from Agency/Broker etc"
            },
            loyaltyRegistrations: {
              type: "array",
              items: {
                title: "Loyalty Registration",
                type: "object",
                properties: {
                  loyaltyId: {
                    type: "string"
                  },
                  loyaltyType: {
                    type: "string"
                  },
                  cardHolderName: {
                    type: "string"
                  },
                  startDate: {
                    title: "Date Only Extended",
                    type: "object",
                    properties: {
                      value: {
                        type: "string",
                        format: "date"
                      },
                      format: {
                        type: "string",
                        enum: ["yyyy-MM-dd", "yyyy-MM", "yyyy"]
                      }
                    },
                    required: ["value"]
                  }
                }
              }
            },
            policyVersion: {
              type: "string"
            },
            transactionType: {
              title: "Transaction Type",
              type: "string",
              description: "",
              enum: [
                "NEW_BUSINESS",
                "MID_TERM_ADJUSTMENT",
                "RENEWAL",
                "CANCELLATION",
                "LAPSE",
                "UPDATE",
                "REINSTATEMENT"
              ]
            },
            quoteId: {
              type: "string"
            },
            events: {
              type: "array",
              items: {
                title: "Event Base Model",
                type: "object",
                properties: {
                  eventType: {
                    type: "string",
                    enum: [
                      "DRIVING_OFFENCE",
                      "CRIMINAL_OFFENCE",
                      "LOSS_HISTORY",
                      "INSURANCE_HISTORY",
                      "UNSPECIFIED"
                    ]
                  },
                  disclosureDate: {
                    title: "Date Only Extended",
                    type: "object",
                    properties: {
                      value: {
                        type: "string",
                        format: "date"
                      },
                      format: {
                        type: "string",
                        enum: ["yyyy-MM-dd", "yyyy-MM", "yyyy"]
                      }
                    },
                    required: ["value"]
                  },
                  declaration: {
                    type: "object",
                    properties: {
                      code: {
                        type: "string"
                      },
                      hasIncurred: {
                        type: "boolean"
                      },
                      period: {
                        type: "string",
                        enum: [
                          "LAST_5_YEARS",
                          "LAST_7_YEARS",
                          "EVER",
                          "LAST_YEAR"
                        ]
                      },
                      value: {
                        type: "string",
                        description:
                          "Used if the answer to the declaration is a string"
                      },
                      number: {
                        type: "number",
                        description:
                          "Used if the answer to the declaration is a number"
                      },
                      amount: {
                        title: "Amount Extended",
                        type: "object",
                        properties: {
                          amount: {
                            type: "number"
                          },
                          currencyCode: {
                            type: "string"
                          },
                          isGSTInclusive: {
                            type: "boolean"
                          },
                          GSTAmount: {
                            type: "number"
                          },
                          GSTPercentageApplicable: {
                            type: "number"
                          },
                          description: {
                            type: "string"
                          }
                        },
                        required: ["amount"]
                      }
                    }
                  },
                  detail: {
                    type: "object",
                    properties: {
                      code: {
                        type: "string"
                      },
                      dateOfEvent: {
                        title: "Date Only Extended",
                        type: "object",
                        properties: {
                          value: {
                            type: "string",
                            format: "date"
                          },
                          format: {
                            type: "string",
                            enum: ["yyyy-MM-dd", "yyyy-MM", "yyyy"]
                          }
                        },
                        required: ["value"]
                      },
                      wasDrugOrAlcoholRelated: {
                        type: "boolean"
                      },
                      insuranceType: {
                        type: "string"
                      },
                      insurer: {
                        type: "string"
                      },
                      insuredEntityName: {
                        type: "string"
                      },
                      outcomeDetails: {
                        type: "string"
                      },
                      outcomeCode: {
                        type: "string",
                        description: "Core system code for the outcome"
                      },
                      details: {
                        type: "string"
                      },
                      personInvolved: {
                        type: "string",
                        description:
                          "Name of the person involved in the event eg. Tenant on a TENANT_LOSS_HISTORY event"
                      },
                      startDate: {
                        title: "Date Only Extended",
                        type: "object",
                        properties: {
                          value: {
                            type: "string",
                            format: "date"
                          },
                          format: {
                            type: "string",
                            enum: ["yyyy-MM-dd", "yyyy-MM", "yyyy"]
                          }
                        },
                        required: ["value"]
                      },
                      endDate: {
                        title: "Date Only Extended",
                        type: "object",
                        properties: {
                          value: {
                            type: "string",
                            format: "date"
                          },
                          format: {
                            type: "string",
                            enum: ["yyyy-MM-dd", "yyyy-MM", "yyyy"]
                          }
                        },
                        required: ["value"]
                      },
                      reason: {
                        type: "string"
                      },
                      wasConfirmationLodged: {
                        type: "boolean"
                      },
                      wasAtFault: {
                        type: "boolean"
                      },
                      policyId: {
                        type: "string"
                      },
                      amount: {
                        title: "Amount Extended",
                        type: "object",
                        properties: {
                          amount: {
                            type: "number"
                          },
                          currencyCode: {
                            type: "string"
                          },
                          isGSTInclusive: {
                            type: "boolean"
                          },
                          GSTAmount: {
                            type: "number"
                          },
                          GSTPercentageApplicable: {
                            type: "number"
                          },
                          description: {
                            type: "string"
                          }
                        },
                        required: ["amount"]
                      },
                      periodImposed: {
                        type: "string"
                      }
                    }
                  },
                  relationships: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        riskLists: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              insurancePolicy: {
                                type: "object",
                                properties: {
                                  policyId: {
                                    type: "string"
                                  },
                                  systemOfRecord: {
                                    title: "System Of Record",
                                    type: "string",
                                    enum: [
                                      "LOREM",
                                      "HEART",
                                      "IPSUM_CENTER",
                                      "SECURITY",
                                      "BAR",
                                      "FOO",
                                      "BUDDY",
                                      "BONUS"
                                    ]
                                  },
                                  insuredRiskGroups: {
                                    type: "array",
                                    items: {
                                      type: "object",
                                      properties: {
                                        riskGroupId: {
                                          type: "string"
                                        },
                                        insuredRisks: {
                                          type: "array",
                                          items: {
                                            type: "object",
                                            properties: {
                                              riskId: {
                                                type: "string"
                                              },
                                              externalReferences: {
                                                type: "array",
                                                items: {
                                                  title: "External Reference",
                                                  description: "",
                                                  type: "object",
                                                  properties: {
                                                    namespace: {
                                                      description:
                                                        "A namespace for the identifier.",
                                                      type: "string"
                                                    },
                                                    identifier: {
                                                      description:
                                                        "An identifier for the entity",
                                                      type: "string"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        partyList: {
                          type: "object",
                          title: "Party List",
                          properties: {
                            partyId: {
                              type: "string"
                            },
                            systemOfRecord: {
                              title: "System Of Record",
                              type: "string",
                              enum: [
                                "LOREM",
                                "HEART",
                                "IPSUM_CENTER",
                                "SECURITY",
                                "BAR",
                                "FOO",
                                "BUDDY",
                                "BONUS"
                              ]
                            },
                            partyRoles: {
                              type: "array",
                              items: {
                                title: "Party Role",
                                type: "string",
                                enum: [
                                  "CUSTOMER",
                                  "INSURED",
                                  "ADDITIONAL_INSURED",
                                  "NAMED_DRIVER",
                                  "PRIMARY_CONTACT",
                                  "SECONDARY_CONTACT",
                                  "AUTHORISER",
                                  "NAMED_PARTY"
                                ]
                              }
                            },
                            externalReferences: {
                              type: "array",
                              items: {
                                $ref:
                                  "./common.oas2.yml#/definitions/external-reference"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            confirmationSpecialHandlingType: {
              type: "string",
              enum: ["EMPLOYEE", "SENSITIVE", "NONE"]
            },
            transactionDescription: {
              type: "string"
            }
          }
        }
      }
    },
    {
      title: "Confirmation Mandatory",
      description: "",
      type: "object",
      properties: {
        confirmationId: {
          type: "string",
          description: "System of record confirmation id"
        },
        systemOfRecord: {
          title: "System Of Record",
          type: "string",
          enum: [
            "LOREM",
            "HEART",
            "IPSUM_CENTER",
            "SECURITY",
            "BAR",
            "FOO",
            "BUDDY",
            "BONUS"
          ]
        },
        systemOfRecordTransactionDate: {
          title: "Date Time Extended",
          type: "object",
          properties: {
            value: {
              type: "string",
              format: "date-time"
            },
            format: {
              type: "string",
              enum: [
                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                "yyyy-MM-dd'T'HH:mm'Z'",
                "yyyy-MM-dd'T'HH",
                "yyyy-MM-dd",
                "yyyy-MM",
                "yyyy"
              ]
            },
            minValue: {
              type: "string"
            },
            maxValue: {
              type: "string"
            },
            defaultValue: {
              type: "string"
            }
          },
          required: ["value"]
        },
        dateOfLoss: {
          title: "Date Time Extended",
          type: "object",
          properties: {
            value: {
              type: "string",
              format: "date-time"
            },
            format: {
              type: "string",
              enum: [
                "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                "yyyy-MM-dd'T'HH:mm:ss'Z'",
                "yyyy-MM-dd'T'HH:mm'Z'",
                "yyyy-MM-dd'T'HH",
                "yyyy-MM-dd",
                "yyyy-MM",
                "yyyy"
              ]
            },
            minValue: {
              type: "string"
            },
            maxValue: {
              type: "string"
            },
            defaultValue: {
              type: "string"
            }
          },
          required: ["value"]
        },
        lossCause: {
          type: "object",
          description: "System of record loss code and its description",
          required: ["code", "codeDescription"],
          properties: {
            code: {
              type: "string"
            },
            codeDescription: {
              type: "string"
            }
          }
        },
        status: {
          type: "string",
          enum: ["ARCHIVED", "CLOSED", "OPEN", "DRAFT"]
        },
        costOfConfirmation: {
          title: "Amount Extended",
          type: "object",
          properties: {
            amount: {
              type: "number"
            },
            currencyCode: {
              type: "string"
            },
            isGSTInclusive: {
              type: "boolean"
            },
            GSTAmount: {
              type: "number"
            },
            GSTPercentageApplicable: {
              type: "number"
            },
            description: {
              type: "string"
            }
          },
          required: ["amount"]
        },
        exportedAt: {
          type: "string"
        },
        partyId: {
          type: "string"
        }
      },
      required: [
        "confirmationId",
        "systemOfRecord",
        "systemOfRecordTransactionDate",
        "dateOfLoss",
        "lossCause",
        "status",
        "costOfConfirmation",
        "exportedAt",
        "partyId"
      ]
    }
  ]
};

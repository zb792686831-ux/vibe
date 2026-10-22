/* Complete lossless code-generation input. Do not replace with a summary. */
window.MotionLabInput = {
  "format": "motion-lab-lossless-codegen-input-v1",
  "requiredFieldContract": {
    "schemaDialect": "JSON Schema 2020-12 structural subset; supported keywords are enforced by this validator",
    "validationSchema": {
      "type": "object",
      "properties": {
        "format": {
          "const": "motion-lab-lossless-codegen-input-v1"
        },
        "requiredFieldContract": {
          "type": "object",
          "minProperties": 1
        },
        "userDirectives": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "minLength": 1,
                "pattern": "\\S"
              },
              "text": {
                "type": "string",
                "minLength": 1,
                "pattern": "\\S"
              },
              "textBase64": {
                "type": "string",
                "minLength": 1,
                "pattern": "\\S"
              },
              "sha256": {
                "type": "string",
                "pattern": "^[a-f0-9]{64}$"
              }
            },
            "required": [
              "id",
              "text",
              "textBase64",
              "sha256"
            ],
            "additionalProperties": true
          },
          "minItems": 6,
          "maxItems": 6
        },
        "sources": {
          "type": "object",
          "properties": {
            "storyboard": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            },
            "script": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            },
            "approvedCopy": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            },
            "finalProduction": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            },
            "sampleSpec": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            },
            "referenceMotionSpec": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            },
            "timeline": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            },
            "assetsManifest": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            },
            "audioManifest": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            },
            "refinements": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "mediaType": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "byteLength": {
                  "type": "integer",
                  "minimum": 1
                },
                "sha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "text": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "bytesBase64": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "path",
                "mediaType",
                "byteLength",
                "sha256",
                "text",
                "bytesBase64"
              ],
              "additionalProperties": true
            }
          },
          "required": [
            "storyboard",
            "script",
            "approvedCopy",
            "finalProduction",
            "sampleSpec",
            "referenceMotionSpec",
            "timeline",
            "assetsManifest",
            "audioManifest",
            "refinements"
          ],
          "additionalProperties": true
        },
        "film": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "minLength": 1,
              "pattern": "\\S"
            },
            "fps": {
              "type": "integer",
              "minimum": 1
            },
            "width": {
              "type": "integer",
              "minimum": 1
            },
            "height": {
              "type": "integer",
              "minimum": 1
            },
            "durationInFrames": {
              "type": "integer",
              "minimum": 1
            },
            "durationSeconds": {
              "type": "number",
              "exclusiveMinimum": 0
            },
            "voiceover": {
              "const": false
            },
            "approvedCopyUnits": {
              "type": "array",
              "items": {
                "type": "string",
                "minLength": 1,
                "pattern": "\\S"
              },
              "minItems": 40,
              "maxItems": 40
            },
            "shots": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "pattern": "\\S"
                  },
                  "start": {
                    "type": "number",
                    "minimum": 0
                  },
                  "end": {
                    "type": "number",
                    "exclusiveMinimum": 0
                  },
                  "from": {
                    "type": "integer",
                    "minimum": 0
                  },
                  "durationInFrames": {
                    "type": "integer",
                    "minimum": 1
                  },
                  "copy": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1
                    },
                    "minItems": 1
                  },
                  "visual": {
                    "type": "string",
                    "minLength": 1,
                    "pattern": "\\S"
                  },
                  "sound": {
                    "type": "string",
                    "minLength": 1,
                    "pattern": "\\S"
                  },
                  "screenText": {
                    "type": "array",
                    "items": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    },
                    "minItems": 1
                  },
                  "textTreatment": {
                    "type": "string",
                    "minLength": 1,
                    "pattern": "\\S"
                  }
                },
                "required": [
                  "id",
                  "start",
                  "end",
                  "from",
                  "durationInFrames",
                  "copy",
                  "visual",
                  "sound",
                  "screenText",
                  "textTreatment"
                ],
                "additionalProperties": true
              },
              "minItems": 16,
              "maxItems": 16
            }
          },
          "required": [
            "title",
            "fps",
            "width",
            "height",
            "durationInFrames",
            "durationSeconds",
            "voiceover",
            "approvedCopyUnits",
            "shots"
          ],
          "additionalProperties": true
        },
        "sample": {
          "type": "object",
          "properties": {
            "timeline": {
              "type": "object",
              "properties": {
                "durationSeconds": {
                  "type": "number",
                  "exclusiveMinimum": 0
                },
                "fps": {
                  "type": "integer",
                  "minimum": 1
                },
                "width": {
                  "type": "integer",
                  "minimum": 1
                },
                "height": {
                  "type": "integer",
                  "minimum": 1
                },
                "globalRange": {
                  "type": "array",
                  "items": {
                    "type": "number",
                    "minimum": 0
                  },
                  "minItems": 2,
                  "maxItems": 2
                },
                "voiceover": {
                  "const": false
                },
                "captions": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "unit": {
                        "type": "integer",
                        "minimum": 1
                      },
                      "start": {
                        "type": "number",
                        "minimum": 0
                      },
                      "end": {
                        "type": "number",
                        "exclusiveMinimum": 0
                      },
                      "text": {
                        "type": "string",
                        "minLength": 1,
                        "pattern": "\\S"
                      }
                    },
                    "required": [
                      "unit",
                      "start",
                      "end",
                      "text"
                    ],
                    "additionalProperties": true
                  },
                  "minItems": 8,
                  "maxItems": 8
                },
                "inputs": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "pattern": "\\S"
                      },
                      "launch": {
                        "type": "number",
                        "minimum": 0
                      },
                      "arrival": {
                        "type": "number",
                        "exclusiveMinimum": 0
                      },
                      "recordAt": {
                        "type": "number",
                        "minimum": 0
                      }
                    },
                    "required": [
                      "id",
                      "launch",
                      "arrival",
                      "recordAt"
                    ],
                    "additionalProperties": true
                  },
                  "minItems": 3,
                  "maxItems": 3
                },
                "recordActivation": {
                  "type": "number",
                  "minimum": 0
                },
                "outputStart": {
                  "type": "number",
                  "minimum": 0
                },
                "outputSettled": {
                  "type": "number",
                  "minimum": 0
                },
                "runtimeDom": {
                  "type": "object",
                  "properties": {
                    "record": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    },
                    "output": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    }
                  },
                  "required": [
                    "record",
                    "output"
                  ],
                  "additionalProperties": true
                },
                "musicGlobalOffsetSeconds": {
                  "type": "number"
                },
                "renderer": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "durationSeconds",
                "fps",
                "width",
                "height",
                "globalRange",
                "voiceover",
                "captions",
                "inputs",
                "recordActivation",
                "outputStart",
                "outputSettled",
                "runtimeDom",
                "musicGlobalOffsetSeconds",
                "renderer"
              ],
              "additionalProperties": true
            },
            "assets": {
              "type": "object",
              "properties": {
                "assets": {
                  "type": "object",
                  "properties": {
                    "hero": {
                      "type": "object",
                      "properties": {
                        "path": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "sha256": {
                          "type": "string",
                          "pattern": "^[a-f0-9]{64}$"
                        },
                        "size": {
                          "type": "array",
                          "items": {
                            "type": "integer",
                            "minimum": 1
                          },
                          "minItems": 2,
                          "maxItems": 2
                        },
                        "blendCache": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "renderSeconds": {
                          "type": "number",
                          "exclusiveMinimum": 0
                        }
                      },
                      "required": [
                        "path",
                        "sha256",
                        "size",
                        "blendCache",
                        "renderSeconds"
                      ],
                      "additionalProperties": true
                    },
                    "edge": {
                      "type": "object",
                      "properties": {
                        "path": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "sha256": {
                          "type": "string",
                          "pattern": "^[a-f0-9]{64}$"
                        },
                        "size": {
                          "type": "array",
                          "items": {
                            "type": "integer",
                            "minimum": 1
                          },
                          "minItems": 2,
                          "maxItems": 2
                        },
                        "blendCache": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "renderSeconds": {
                          "type": "number",
                          "exclusiveMinimum": 0
                        }
                      },
                      "required": [
                        "path",
                        "sha256",
                        "size",
                        "blendCache",
                        "renderSeconds"
                      ],
                      "additionalProperties": true
                    },
                    "heart": {
                      "type": "object",
                      "properties": {
                        "path": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "sha256": {
                          "type": "string",
                          "pattern": "^[a-f0-9]{64}$"
                        },
                        "size": {
                          "type": "array",
                          "items": {
                            "type": "integer",
                            "minimum": 1
                          },
                          "minItems": 2,
                          "maxItems": 2
                        },
                        "blendCache": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "renderSeconds": {
                          "type": "number",
                          "exclusiveMinimum": 0
                        }
                      },
                      "required": [
                        "path",
                        "sha256",
                        "size",
                        "blendCache",
                        "renderSeconds"
                      ],
                      "additionalProperties": true
                    },
                    "bead": {
                      "type": "object",
                      "properties": {
                        "path": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "sha256": {
                          "type": "string",
                          "pattern": "^[a-f0-9]{64}$"
                        },
                        "size": {
                          "type": "array",
                          "items": {
                            "type": "integer",
                            "minimum": 1
                          },
                          "minItems": 2,
                          "maxItems": 2
                        },
                        "blendCache": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "renderSeconds": {
                          "type": "number",
                          "exclusiveMinimum": 0
                        }
                      },
                      "required": [
                        "path",
                        "sha256",
                        "size",
                        "blendCache",
                        "renderSeconds"
                      ],
                      "additionalProperties": true
                    },
                    "morph": {
                      "type": "object",
                      "properties": {
                        "pathPattern": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "size": {
                          "type": "array",
                          "items": {
                            "type": "integer",
                            "minimum": 1
                          },
                          "minItems": 2,
                          "maxItems": 2
                        },
                        "frames": {
                          "type": "integer",
                          "minimum": 1
                        },
                        "fps": {
                          "type": "integer",
                          "minimum": 1
                        },
                        "durationSeconds": {
                          "type": "number",
                          "exclusiveMinimum": 0
                        },
                        "samples": {
                          "type": "integer",
                          "minimum": 1
                        },
                        "denoise": {
                          "type": "boolean"
                        },
                        "renderSeconds": {
                          "type": "number",
                          "exclusiveMinimum": 0
                        },
                        "method": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "material": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "blendCache": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "frameHashes": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "frame": {
                                "type": "integer",
                                "minimum": 0
                              },
                              "sha256": {
                                "type": "string",
                                "pattern": "^[a-f0-9]{64}$"
                              }
                            },
                            "required": [
                              "frame",
                              "sha256"
                            ],
                            "additionalProperties": true
                          },
                          "minItems": 1
                        }
                      },
                      "required": [
                        "pathPattern",
                        "size",
                        "frames",
                        "fps",
                        "durationSeconds",
                        "samples",
                        "denoise",
                        "renderSeconds",
                        "method",
                        "material",
                        "blendCache",
                        "frameHashes"
                      ],
                      "additionalProperties": true
                    }
                  },
                  "required": [
                    "hero",
                    "edge",
                    "heart",
                    "bead",
                    "morph"
                  ],
                  "additionalProperties": true
                },
                "generator": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "generatorSha256": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                },
                "blenderVersion": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "blenderPythonVersion": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "renderEngine": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "threads": {
                  "type": "integer",
                  "minimum": 1
                },
                "samples": {
                  "type": "integer",
                  "minimum": 1
                },
                "seed": {
                  "type": "integer",
                  "minimum": 0
                },
                "denoise": {
                  "type": "boolean"
                },
                "transparentFilm": {
                  "type": "boolean"
                },
                "output": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "denoiseUnavailableReason": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "colorManagement": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "lighting": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "catSource": {
                  "type": "object",
                  "properties": {
                    "path": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    },
                    "sha256": {
                      "type": "string",
                      "pattern": "^[a-f0-9]{64}$"
                    }
                  },
                  "required": [
                    "path",
                    "sha256"
                  ],
                  "additionalProperties": true
                },
                "notes": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                }
              },
              "required": [
                "assets",
                "generator",
                "generatorSha256",
                "blenderVersion",
                "blenderPythonVersion",
                "renderEngine",
                "threads",
                "samples",
                "seed",
                "denoise",
                "transparentFilm",
                "output",
                "denoiseUnavailableReason",
                "colorManagement",
                "lighting",
                "catSource",
                "notes"
              ],
              "additionalProperties": true
            },
            "audio": {
              "type": "object",
              "properties": {
                "schema": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "status": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "durationSeconds": {
                  "type": "number",
                  "exclusiveMinimum": 0
                },
                "sampleRate": {
                  "type": "integer",
                  "minimum": 1
                },
                "channels": {
                  "type": "integer",
                  "minimum": 1
                },
                "addedVoiceover": {
                  "const": false
                },
                "sourcePurityOrVocalContentAssessed": {
                  "type": "boolean"
                },
                "musicBed": {
                  "type": "object",
                  "properties": {
                    "sourceType": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    },
                    "sourceFile": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    },
                    "sourceFileSha256": {
                      "type": "string",
                      "pattern": "^[a-f0-9]{64}$"
                    },
                    "originalUserUploadSha256": {
                      "type": "string",
                      "pattern": "^[a-f0-9]{64}$"
                    },
                    "sourceAudioMetadata": {
                      "type": "object",
                      "properties": {
                        "codec_name": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "sample_rate": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        },
                        "channels": {
                          "type": "integer",
                          "minimum": 1
                        },
                        "duration": {
                          "type": "string",
                          "minLength": 1,
                          "pattern": "\\S"
                        }
                      },
                      "required": [
                        "codec_name",
                        "sample_rate",
                        "channels",
                        "duration"
                      ],
                      "additionalProperties": true
                    },
                    "sourceChannels": {
                      "type": "integer",
                      "minimum": 1
                    },
                    "outputChannels": {
                      "type": "integer",
                      "minimum": 1
                    },
                    "referenceSceneSeconds": {
                      "type": "array",
                      "items": {
                        "type": "number",
                        "minimum": 0
                      },
                      "minItems": 2,
                      "maxItems": 2
                    },
                    "referenceToMusicOffsetSeconds": {
                      "type": "number"
                    },
                    "sourceExcerptSeconds": {
                      "type": "array",
                      "items": {
                        "type": "number",
                        "minimum": 0
                      },
                      "minItems": 2,
                      "maxItems": 2
                    },
                    "gainDb": {
                      "type": "number"
                    },
                    "fadeInSeconds": {
                      "type": "number",
                      "minimum": 0
                    },
                    "fadeOutSeconds": {
                      "type": "number",
                      "minimum": 0
                    },
                    "looping": {
                      "const": false
                    },
                    "tempoChanged": {
                      "const": false
                    },
                    "eqOrCompressionApplied": {
                      "type": "boolean"
                    },
                    "localDuckingApplied": {
                      "type": "boolean"
                    },
                    "measurementAfterFixedGainAndFades": {
                      "type": "object",
                      "properties": {
                        "integratedLoudnessLUFS": {
                          "type": "number"
                        },
                        "truePeakDbTP": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "integratedLoudnessLUFS",
                        "truePeakDbTP"
                      ],
                      "additionalProperties": true
                    }
                  },
                  "required": [
                    "sourceType",
                    "sourceFile",
                    "sourceFileSha256",
                    "originalUserUploadSha256",
                    "sourceAudioMetadata",
                    "sourceChannels",
                    "outputChannels",
                    "referenceSceneSeconds",
                    "referenceToMusicOffsetSeconds",
                    "sourceExcerptSeconds",
                    "gainDb",
                    "fadeInSeconds",
                    "fadeOutSeconds",
                    "looping",
                    "tempoChanged",
                    "eqOrCompressionApplied",
                    "localDuckingApplied",
                    "measurementAfterFixedGainAndFades"
                  ],
                  "additionalProperties": true
                },
                "originalSfx": {
                  "type": "object",
                  "properties": {
                    "seed": {
                      "type": "integer",
                      "minimum": 0
                    },
                    "downloadedSamplesUsed": {
                      "const": false
                    },
                    "eventCount": {
                      "type": "integer",
                      "minimum": 1
                    },
                    "events": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "pattern": "\\S"
                          },
                          "sourceType": {
                            "type": "string",
                            "minLength": 1,
                            "pattern": "\\S"
                          },
                          "sourceFile": {
                            "type": "string",
                            "minLength": 1,
                            "pattern": "\\S"
                          },
                          "sourceFileSha256": {
                            "type": "string",
                            "pattern": "^[a-f0-9]{64}$"
                          },
                          "startSeconds": {
                            "type": "number",
                            "minimum": 0
                          },
                          "endSeconds": {
                            "type": "number",
                            "exclusiveMinimum": 0
                          },
                          "durationSeconds": {
                            "type": "number",
                            "exclusiveMinimum": 0
                          },
                          "requestedPeakDbFS": {
                            "type": "number"
                          },
                          "purpose": {
                            "type": "string",
                            "minLength": 1,
                            "pattern": "\\S"
                          }
                        },
                        "required": [
                          "name",
                          "sourceType",
                          "sourceFile",
                          "sourceFileSha256",
                          "startSeconds",
                          "endSeconds",
                          "durationSeconds",
                          "requestedPeakDbFS",
                          "purpose"
                        ],
                        "additionalProperties": true
                      },
                      "minItems": 1
                    },
                    "sfxMasterGainLinear": {
                      "type": "number",
                      "minimum": 0
                    },
                    "sfxMasterGainDb": {
                      "type": "number"
                    },
                    "peakManagement": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    },
                    "quietWindows": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "fromSeconds": {
                            "type": "number",
                            "minimum": 0
                          },
                          "toSeconds": {
                            "type": "number",
                            "exclusiveMinimum": 0
                          },
                          "reason": {
                            "type": "string",
                            "minLength": 1,
                            "pattern": "\\S"
                          },
                          "actualPcmAllZero": {
                            "const": true
                          }
                        },
                        "required": [
                          "fromSeconds",
                          "toSeconds",
                          "reason",
                          "actualPcmAllZero"
                        ],
                        "additionalProperties": true
                      },
                      "minItems": 1
                    }
                  },
                  "required": [
                    "seed",
                    "downloadedSamplesUsed",
                    "eventCount",
                    "events",
                    "sfxMasterGainLinear",
                    "sfxMasterGainDb",
                    "peakManagement",
                    "quietWindows"
                  ],
                  "additionalProperties": true
                },
                "generator": {
                  "type": "object",
                  "properties": {
                    "file": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    },
                    "sha256": {
                      "type": "string",
                      "pattern": "^[a-f0-9]{64}$"
                    },
                    "measurementHelper": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    },
                    "measurementHelperSha256": {
                      "type": "string",
                      "pattern": "^[a-f0-9]{64}$"
                    },
                    "dependencies": {
                      "type": "string",
                      "minLength": 1,
                      "pattern": "\\S"
                    }
                  },
                  "required": [
                    "file",
                    "sha256",
                    "measurementHelper",
                    "measurementHelperSha256",
                    "dependencies"
                  ],
                  "additionalProperties": true
                },
                "outputs": {
                  "type": "object",
                  "minProperties": 1
                },
                "standaloneMusicPublished": {
                  "type": "boolean"
                },
                "generatedAudioDirectoryGitIgnored": {
                  "type": "boolean"
                }
              },
              "required": [
                "schema",
                "status",
                "durationSeconds",
                "sampleRate",
                "channels",
                "addedVoiceover",
                "sourcePurityOrVocalContentAssessed",
                "musicBed",
                "originalSfx",
                "generator",
                "outputs",
                "standaloneMusicPublished",
                "generatedAudioDirectoryGitIgnored"
              ],
              "additionalProperties": true
            },
            "refinements": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "userApprovalOfEachNumericValue": {
                  "const": false
                },
                "originalStoryboardMutated": {
                  "const": false
                },
                "reviewEvidence": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "minLength": 1,
                    "pattern": "\\S"
                  },
                  "minItems": 1
                },
                "refinements": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "pattern": "\\S"
                      }
                    },
                    "required": [
                      "id"
                    ],
                    "additionalProperties": true
                  },
                  "minItems": 4,
                  "maxItems": 4
                }
              },
              "required": [
                "status",
                "userApprovalOfEachNumericValue",
                "originalStoryboardMutated",
                "reviewEvidence",
                "refinements"
              ],
              "additionalProperties": true
            },
            "events": {
              "type": "object",
              "properties": {
                "inputs": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "pattern": "\\S"
                      },
                      "launch": {
                        "type": "number",
                        "minimum": 0
                      },
                      "arrival": {
                        "type": "number",
                        "exclusiveMinimum": 0
                      },
                      "recordAt": {
                        "type": "number",
                        "minimum": 0
                      }
                    },
                    "required": [
                      "id",
                      "launch",
                      "arrival",
                      "recordAt"
                    ],
                    "additionalProperties": true
                  },
                  "minItems": 3,
                  "maxItems": 3
                },
                "recordActivation": {
                  "type": "number",
                  "minimum": 0
                },
                "outputStart": {
                  "type": "number",
                  "minimum": 0
                },
                "outputSettled": {
                  "type": "number",
                  "minimum": 0
                },
                "originalSfx": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string",
                        "minLength": 1,
                        "pattern": "\\S"
                      },
                      "sourceType": {
                        "type": "string",
                        "minLength": 1,
                        "pattern": "\\S"
                      },
                      "sourceFile": {
                        "type": "string",
                        "minLength": 1,
                        "pattern": "\\S"
                      },
                      "sourceFileSha256": {
                        "type": "string",
                        "pattern": "^[a-f0-9]{64}$"
                      },
                      "startSeconds": {
                        "type": "number",
                        "minimum": 0
                      },
                      "endSeconds": {
                        "type": "number",
                        "exclusiveMinimum": 0
                      },
                      "durationSeconds": {
                        "type": "number",
                        "exclusiveMinimum": 0
                      },
                      "requestedPeakDbFS": {
                        "type": "number"
                      },
                      "purpose": {
                        "type": "string",
                        "minLength": 1,
                        "pattern": "\\S"
                      }
                    },
                    "required": [
                      "name",
                      "sourceType",
                      "sourceFile",
                      "sourceFileSha256",
                      "startSeconds",
                      "endSeconds",
                      "durationSeconds",
                      "requestedPeakDbFS",
                      "purpose"
                    ],
                    "additionalProperties": true
                  },
                  "minItems": 1
                },
                "quietWindows": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "fromSeconds": {
                        "type": "number",
                        "minimum": 0
                      },
                      "toSeconds": {
                        "type": "number",
                        "exclusiveMinimum": 0
                      },
                      "reason": {
                        "type": "string",
                        "minLength": 1,
                        "pattern": "\\S"
                      },
                      "actualPcmAllZero": {
                        "const": true
                      }
                    },
                    "required": [
                      "fromSeconds",
                      "toSeconds",
                      "reason",
                      "actualPcmAllZero"
                    ],
                    "additionalProperties": true
                  },
                  "minItems": 1
                }
              },
              "required": [
                "inputs",
                "recordActivation",
                "outputStart",
                "outputSettled",
                "originalSfx",
                "quietWindows"
              ],
              "additionalProperties": true
            }
          },
          "required": [
            "timeline",
            "assets",
            "audio",
            "refinements",
            "events"
          ],
          "additionalProperties": true
        },
        "integrity": {
          "type": "object",
          "properties": {
            "approvedCopyAlgorithm": {
              "type": "string",
              "minLength": 1,
              "pattern": "\\S"
            },
            "approvedCopySha256": {
              "type": "string",
              "pattern": "^[a-f0-9]{64}$"
            },
            "sourceDocumentCount": {
              "type": "integer",
              "minimum": 1
            }
          },
          "required": [
            "approvedCopyAlgorithm",
            "approvedCopySha256",
            "sourceDocumentCount"
          ],
          "additionalProperties": true
        },
        "assetInventory": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "sourceJsonPath": {
                "type": "string",
                "minLength": 1,
                "pattern": "\\S"
              },
              "logicalPath": {
                "type": "string",
                "minLength": 1,
                "pattern": "\\S"
              },
              "byteLength": {
                "type": "integer",
                "minimum": 1
              },
              "sha256": {
                "type": "string",
                "pattern": "^[a-f0-9]{64}$"
              }
            },
            "required": [
              "sourceJsonPath",
              "logicalPath",
              "byteLength",
              "sha256"
            ],
            "additionalProperties": true
          },
          "minItems": 1
        },
        "provenanceInventory": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "sourceJsonPath": {
                "type": "string",
                "minLength": 1,
                "pattern": "\\S"
              },
              "logicalPath": {
                "type": "string",
                "minLength": 1,
                "pattern": "\\S"
              },
              "requiredForRuntime": {
                "const": false
              },
              "presentAtPackaging": {
                "type": "boolean"
              }
            },
            "required": [
              "sourceJsonPath",
              "logicalPath",
              "requiredForRuntime",
              "presentAtPackaging"
            ],
            "additionalProperties": true
          },
          "minItems": 1
        }
      },
      "required": [
        "format",
        "requiredFieldContract",
        "userDirectives",
        "sources",
        "film",
        "sample",
        "integrity",
        "assetInventory",
        "provenanceInventory"
      ],
      "additionalProperties": true
    },
    "refinementSchemasById": {
      "single-board-projection": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "method": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "heroOpacity": {
            "type": "number",
            "minimum": 0
          },
          "edgeOpacity": {
            "type": "number",
            "minimum": 0
          },
          "perspectivePx": {
            "type": "number",
            "exclusiveMinimum": 0
          },
          "rotationYDegreesAtExit": {
            "type": "number"
          },
          "rotationZDegrees": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "localRangeSeconds": {
            "type": "array",
            "items": {
              "type": "number",
              "minimum": 0
            },
            "minItems": 2,
            "maxItems": 2
          },
          "exitDistancePx": {
            "type": "array",
            "items": {
              "type": "number"
            },
            "minItems": 2,
            "maxItems": 2
          }
        },
        "required": [
          "id",
          "reason",
          "method",
          "heroOpacity",
          "edgeOpacity",
          "perspectivePx",
          "rotationYDegreesAtExit",
          "rotationZDegrees",
          "localRangeSeconds",
          "exitDistancePx"
        ],
        "additionalProperties": true
      },
      "retained-stay-orbit": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "centerPx": {
            "type": "array",
            "items": {
              "type": "number"
            },
            "minItems": 2,
            "maxItems": 2
          },
          "radiusPx": {
            "type": "number",
            "exclusiveMinimum": 0
          },
          "startDegrees": {
            "type": "number"
          },
          "sweepDegrees": {
            "type": "number"
          },
          "strokePx": {
            "type": "number",
            "exclusiveMinimum": 0
          },
          "strokeColor": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "maxOpacity": {
            "type": "number",
            "minimum": 0
          },
          "revealSeconds": {
            "type": "array",
            "items": {
              "type": "number",
              "minimum": 0
            },
            "minItems": 2,
            "maxItems": 2
          },
          "retireSeconds": {
            "type": "array",
            "items": {
              "type": "number",
              "minimum": 0
            },
            "minItems": 2,
            "maxItems": 2
          },
          "questionCameraScaleFromTo": {
            "type": "array",
            "items": {
              "type": "number",
              "exclusiveMinimum": 0
            },
            "minItems": 2,
            "maxItems": 2
          },
          "questionCameraMoveSeconds": {
            "type": "array",
            "items": {
              "type": "number",
              "minimum": 0
            },
            "minItems": 2,
            "maxItems": 2
          },
          "questionCameraReturnSeconds": {
            "type": "array",
            "items": {
              "type": "number",
              "minimum": 0
            },
            "minItems": 2,
            "maxItems": 2
          }
        },
        "required": [
          "id",
          "reason",
          "centerPx",
          "radiusPx",
          "startDegrees",
          "sweepDegrees",
          "strokePx",
          "strokeColor",
          "maxOpacity",
          "revealSeconds",
          "retireSeconds",
          "questionCameraScaleFromTo",
          "questionCameraMoveSeconds",
          "questionCameraReturnSeconds"
        ],
        "additionalProperties": true
      },
      "existing-aggregate-depth": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "geometry": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "revealSeconds": {
            "type": "array",
            "items": {
              "type": "number",
              "minimum": 0
            },
            "minItems": 2,
            "maxItems": 2
          },
          "beads": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "minLength": 1,
                  "pattern": "\\S"
                },
                "rail": {
                  "enum": [
                    "top",
                    "bottom"
                  ]
                },
                "arcFraction": {
                  "type": "number",
                  "minimum": 0
                },
                "radiusPx": {
                  "type": "number",
                  "exclusiveMinimum": 0
                },
                "opacity": {
                  "type": "number",
                  "minimum": 0
                }
              },
              "required": [
                "id",
                "rail",
                "arcFraction",
                "radiusPx",
                "opacity"
              ],
              "additionalProperties": true
            },
            "minItems": 24,
            "maxItems": 24
          },
          "depthStrokeWidthPx": {
            "type": "number",
            "exclusiveMinimum": 0
          },
          "edgeStrokeWidthPx": {
            "type": "number",
            "exclusiveMinimum": 0
          },
          "primaryRailStrokeWidthPx": {
            "type": "number",
            "exclusiveMinimum": 0
          },
          "fixedBranchPaths": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1,
              "pattern": "\\S"
            },
            "minItems": 4,
            "maxItems": 4
          },
          "branchStrokePx": {
            "type": "number",
            "exclusiveMinimum": 0
          },
          "branchOpacity": {
            "type": "number",
            "minimum": 0
          },
          "outputBranchRevealAfterSeconds": {
            "type": "number",
            "minimum": 0
          }
        },
        "required": [
          "id",
          "reason",
          "geometry",
          "revealSeconds",
          "beads",
          "depthStrokeWidthPx",
          "edgeStrokeWidthPx",
          "primaryRailStrokeWidthPx",
          "fixedBranchPaths",
          "branchStrokePx",
          "branchOpacity",
          "outputBranchRevealAfterSeconds"
        ],
        "additionalProperties": true
      },
      "source-legibility": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "sourceLabelExitSeconds": {
            "type": "array",
            "items": {
              "type": "number",
              "minimum": 0
            },
            "minItems": 2,
            "maxItems": 2
          },
          "replayArrowPath": {
            "type": "string",
            "minLength": 1,
            "pattern": "\\S"
          },
          "arcRevealBeforeSemanticActivation": {
            "const": false
          }
        },
        "required": [
          "id",
          "sourceLabelExitSeconds",
          "replayArrowPath",
          "arcRevealBeforeSemanticActivation"
        ],
        "additionalProperties": true
      }
    },
    "sourceDocumentKeys": [
      "storyboard",
      "script",
      "approvedCopy",
      "finalProduction",
      "sampleSpec",
      "referenceMotionSpec",
      "timeline",
      "assetsManifest",
      "audioManifest",
      "refinements"
    ],
    "runtimeMaterialRequirements": {
      "fontFiles": [
        "public/fonts/new-media-v2/style-review/NotoSerifCJKSC-Regular.subset.woff",
        "public/fonts/new-media-v2/style-review/NotoSerifCJKSC-Bold.subset.woff"
      ],
      "required": "Declared PNG frames/images, exact uploaded source music, generated audio mix and SFX files, and the actual two local browser fonts.",
      "provenanceOnly": "Blender editable caches, generator programs, source illustration and cached review evidence are recorded as provenance, not mandatory browser-loadable material. Their presence snapshot is not a fresh-clone runtime prerequisite."
    },
    "semantics": [
      "Missing fields, null, blank strings, empty arrays/objects in source JSON are errors; numeric zero and boolean false remain valid when allowed by their field rule.",
      "All 16 shots and every original field must match the complete storyboard JSON; 40 exact copy units use a fixed SHA-256 of UTF-8 newline-joined text.",
      "Sources retain exact original bytes (base64), complete decoded UTF-8 text, byte count and SHA-256. No source document is shortened or normalized.",
      "Eight sample captions, three inputs, named numeric events, complete manifests, refinements, user directives and every explicitly required runtime material are mandatory. Provenance cache absence never supplies a replacement asset or default parameter.",
      "This contract checks the explicitly declared fields and byte-level preservation. It does not claim semantic detection of every unspecified parameter in unrestricted natural-language prose.",
      "Author-authored SPEC/refinement numeric values are retained verbatim; they are not represented as individually approved user parameters."
    ]
  },
  "userDirectives": [
    {
      "id": "earlierStyleRevision",
      "text": "nonono，剪的太low了，背景不要一直纯黑，可以有一些地方设置为浅色波点深色背景，文字或者别的什么动画要有曲线，该加的光效也要有，还有就是你的排版也很空，可以加一点别的素材或者贴纸装饰一下画面，但是不要突兀，有些文字效果可以带点光效，但不是所有，线条也不要细的，你再重新生成一个样稿我看一下",
      "textBase64": "bm9ub25v77yM5Ymq55qE5aSqbG935LqG77yM6IOM5pmv5LiN6KaB5LiA55u057qv6buR77yM5Y+v5Lul5pyJ5LiA5Lqb5Zyw5pa56K6+572u5Li65rWF6Imy5rOi54K55rex6Imy6IOM5pmv77yM5paH5a2X5oiW6ICF5Yir55qE5LuA5LmI5Yqo55S76KaB5pyJ5puy57q/77yM6K+l5Yqg55qE5YWJ5pWI5Lmf6KaB5pyJ77yM6L+Y5pyJ5bCx5piv5L2g55qE5o6S54mI5Lmf5b6I56m677yM5Y+v5Lul5Yqg5LiA54K55Yir55qE57Sg5p2Q5oiW6ICF6LS057q46KOF6aWw5LiA5LiL55S76Z2i77yM5L2G5piv5LiN6KaB56qB5YWA77yM5pyJ5Lqb5paH5a2X5pWI5p6c5Y+v5Lul5bim54K55YWJ5pWI77yM5L2G5LiN5piv5omA5pyJ77yM57q/5p2h5Lmf5LiN6KaB57uG55qE77yM5L2g5YaN6YeN5paw55Sf5oiQ5LiA5Liq5qC356i/5oiR55yL5LiA5LiL",
      "sha256": "d3b11a178e723404a805ec0b960c76835adc65f14179cb51f8ea10c85012763c"
    },
    {
      "id": "latestFullFilmStyle",
      "text": "动画节奏还是有点快，排版还是按照原来那样吧，背景只要深色背景，但是要纯黑与波点交替，动效背景，这次你直接生成成片",
      "textBase64": "5Yqo55S76IqC5aWP6L+Y5piv5pyJ54K55b+r77yM5o6S54mI6L+Y5piv5oyJ54Wn5Y6f5p2l6YKj5qC35ZCn77yM6IOM5pmv5Y+q6KaB5rex6Imy6IOM5pmv77yM5L2G5piv6KaB57qv6buR5LiO5rOi54K55Lqk5pu/77yM5Yqo5pWI6IOM5pmv77yM6L+Z5qyh5L2g55u05o6l55Sf5oiQ5oiQ54mH",
      "sha256": "e5f99d3243d98895b27abcdf86ea7d224b136e1c0df79b5cb1163ce3b75a6e97"
    },
    {
      "id": "installationAuthorization",
      "text": "可以，你试一下，该装的装",
      "textBase64": "5Y+v5Lul77yM5L2g6K+V5LiA5LiL77yM6K+l6KOF55qE6KOF",
      "sha256": "66e2edd54d55b83606898f752ee6230f0b12ce6a88bb36ac606170ea2ad18d29"
    },
    {
      "id": "hyperframesRequirement",
      "text": "再补充一个工具：HyperFrames，这次的样片要结合这个工具去生成",
      "textBase64": "5YaN6KGl5YWF5LiA5Liq5bel5YW377yaSHlwZXJGcmFtZXPvvIzov5nmrKHnmoTmoLfniYfopoHnu5PlkIjov5nkuKrlt6XlhbfljrvnlJ/miJA=",
      "sha256": "aea7c49ff888ad95b27ee53afe3e5ec498b6673331059a85d8d0e92aa70d4d50"
    },
    {
      "id": "continuation",
      "text": "继续",
      "textBase64": "57un57ut",
      "sha256": "7c9691192f1b73408bbe4c0cb6d00db94375ca9d8fce0a0d5985e7a5178f083f"
    },
    {
      "id": "strictLosslessRule",
      "text": "对了，你在生成视频的时候，禁止对输入的分镜脚本做任何摘要、精简、改写，必须将所有细节参数完整传递给代码生成步骤，缺失参数直接报错，不得用默认值替代",
      "textBase64": "5a+55LqG77yM5L2g5Zyo55Sf5oiQ6KeG6aKR55qE5pe25YCZ77yM56aB5q2i5a+56L6T5YWl55qE5YiG6ZWc6ISa5pys5YGa5Lu75L2V5pGY6KaB44CB57K+566A44CB5pS55YaZ77yM5b+F6aG75bCG5omA5pyJ57uG6IqC5Y+C5pWw5a6M5pW05Lyg6YCS57uZ5Luj56CB55Sf5oiQ5q2l6aqk77yM57y65aSx5Y+C5pWw55u05o6l5oql6ZSZ77yM5LiN5b6X55So6buY6K6k5YC85pu/5Luj",
      "sha256": "9bbc073555639dfe79e997109dd68c0039cd3297ccdfac4b4e981a2c79649ce9"
    }
  ],
  "sources": {
    "storyboard": {
      "path": "production/new-media-v2/storyboard-proposal.json",
      "mediaType": "application/json",
      "byteLength": 14298,
      "sha256": "771163101d37990c58bea9bc6ea5d27d4ae92b9aec6325e696f254a6cbf1b018",
      "text": "{\n  \"status\": \"approved-script-awaiting-style-review\",\n  \"copyApproved\": true,\n  \"scriptApproved\": true,\n  \"assetsAndStyleApproved\": false,\n  \"fullEditStarted\": false,\n  \"title\": \"一颗红心，去了哪里？\",\n  \"fps\": 60,\n  \"width\": 1920,\n  \"height\": 1080,\n  \"durationInFrames\": 7800,\n  \"durationSeconds\": 130,\n  \"voiceover\": false,\n  \"approvedCopyArtifact\": \"copy-draft-r2.md\",\n  \"approvedCopyUnits\": [\n    \"你以为，他上班只是在刷手机。\",\n    \"其实，他在研究你为什么停下。\",\n    \"这份工作，叫新媒体运营。\",\n    \"你正准备，把手机收起来。\",\n    \"一只小猫，突然探进画面。\",\n    \"它歪了歪头。\",\n    \"你停住了。\",\n    \"五秒。\",\n    \"看完，又看了一遍。\",\n    \"顺手，点亮一颗红心。\",\n    \"然后，划走。\",\n    \"视频过去了。\",\n    \"你的反应，留下了。\",\n    \"刚才那几秒，去了哪里？\",\n    \"停留、重看、点赞……\",\n    \"它们被平台记录，变成信号。\",\n    \"成为推荐的参考。\",\n    \"运营看到的，是汇总后的反馈。\",\n    \"五秒、两秒、看到最后。\",\n    \"当成千上万次停留汇在一起，\",\n    \"零散的动作，慢慢显出轮廓。\",\n    \"哪里留住了人？\",\n    \"哪里，大家突然离开？\",\n    \"运营，就在这片数据洪流里，\",\n    \"寻找那些反复出现的变化。\",\n    \"是小猫歪头的那一下？\",\n    \"还是刚刚好的节奏？\",\n    \"数字给出线索。\",\n    \"原因，还要回到内容里验证。\",\n    \"于是，下一条内容，\",\n    \"换了一个开头，\",\n    \"留长了一个瞬间。\",\n    \"再等一轮，真实的回应。\",\n    \"内容，影响着你的停留。\",\n    \"你的停留，也在影响内容。\",\n    \"你看到的，是一只小猫。\",\n    \"屏幕另一边的人，\",\n    \"想从无数个这样的瞬间里，\",\n    \"找到让人愿意留下的理由。\",\n    \"这，就是新媒体运营。\"\n  ],\n  \"reference\": {\n    \"uploadedFile\": \"Iwanau-Vibe知识大赏_《运气的形状》本视...-20261022_092444.mp4\",\n    \"sha256\": \"31444f8f66fd764c608ed393a6d2e54e62d3ade1925c3b9d2d482d0461ebd3dd\",\n    \"sizeBytes\": 11767133,\n    \"videoSeconds\": 130,\n    \"audioSeconds\": 130.007007,\n    \"independentMusicStemAvailable\": false,\n    \"userIdentifiedOriginalMusicUrl\": \"https://music.163.com/song?id=3451028893\",\n    \"userSuppliedMusicAssetAvailable\": true,\n    \"userSuppliedMusicSha256\": \"d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59\",\n    \"referenceTimeToMusicTimeOffsetSeconds\": 0.048\n  },\n  \"timingNotes\": \"All timings are editorial proposals, not rendered or exact verified music beat markers. The approved screen copy is unchanged.\",\n  \"literalPause\": {\n    \"from\": 1080,\n    \"durationInFrames\": 300\n  },\n  \"finalStableHold\": {\n    \"from\": 7728,\n    \"durationInFrames\": 72\n  },\n  \"shots\": [\n    {\n      \"id\": \"hook\",\n      \"start\": 0,\n      \"end\": 9,\n      \"copy\": [\n        1,\n        2,\n        3\n      ],\n      \"visual\": \"暗处一部象牙色手机居中，内容轻轻经过；滑动突然停住，镜头靠近。同一物件带出职业，不另开标题卡。\",\n      \"sound\": \"两次轻纸擦，停住时一个短促低音。开场不连续重击。\",\n      \"from\": 0,\n      \"durationInFrames\": 540,\n      \"screenText\": [\n        \"你以为，他上班只是在刷手机。\",\n        \"其实，他在研究你为什么停下。\",\n        \"这份工作，叫新媒体运营。\"\n      ],\n      \"textTreatment\": \"第一句随滑动进入；第二句中的“停下”真正停在画心；第三句完整读清后将职业名收至上角。\"\n    },\n    {\n      \"id\": \"cat-interrupts\",\n      \"start\": 9,\n      \"end\": 16,\n      \"copy\": [\n        4,\n        5\n      ],\n      \"visual\": \"手机向暗处下沉，一只暖白、有体积和柔和阴影的小猫从原画框探头，打断收手机的动作。\",\n      \"sound\": \"衣料式轻擦，再给一次极轻触碰。参考音轨10–16秒较弱，保留空间。\",\n      \"from\": 540,\n      \"durationInFrames\": 420,\n      \"screenText\": [\n        \"你正准备，把手机收起来。\",\n        \"一只小猫，突然探进画面。\"\n      ],\n      \"textTreatment\": \"第四句随手机下沉，第五句在小猫出现后于稳定区域显现。\"\n    },\n    {\n      \"id\": \"five-second-pause\",\n      \"start\": 16,\n      \"end\": 25,\n      \"copy\": [\n        6,\n        7,\n        8\n      ],\n      \"visual\": \"小猫轻轻歪头。18.0–23.0秒真实停留五秒，主体基本安定，仅细光环缓慢走完；23秒后才显示“五秒。”。\",\n      \"sound\": \"歪头一个柔和小音。真实五秒停留期间不新增音效，由音乐、主体细微呼吸和静止承担意味。\",\n      \"from\": 960,\n      \"durationInFrames\": 540,\n      \"screenText\": [\n        \"它歪了歪头。\",\n        \"你停住了。\",\n        \"五秒。\"\n      ],\n      \"textTreatment\": \"第六句配合歪头，第七句随停住出现并保持。真实五秒后再显示第八句，不新增倒计时台词。\"\n    },\n    {\n      \"id\": \"rewatch-heart\",\n      \"start\": 25,\n      \"end\": 31,\n      \"copy\": [\n        9,\n        10\n      ],\n      \"visual\": \"猫的动作回到起点再发生一次，浅重影表达重看；一枚低饱和朱红心亮起，随后留在原处。\",\n      \"sound\": \"一次极轻反向扫频、一次柔软心跳式落点。红心只亮一次。\",\n      \"from\": 1500,\n      \"durationInFrames\": 360,\n      \"screenText\": [\n        \"看完，又看了一遍。\",\n        \"顺手，点亮一颗红心。\"\n      ],\n      \"textTreatment\": \"第九句先完整读清，再沿回环路径移动；第十句随红心落定。\"\n    },\n    {\n      \"id\": \"swipe-leaves-trace\",\n      \"start\": 31,\n      \"end\": 39,\n      \"copy\": [\n        11,\n        12,\n        13,\n        14\n      ],\n      \"visual\": \"31–34秒：整个猫视频被划走，红心却缩成小点留下。视频内容与行为反应第一次分离；镜头追向留下的小点。\",\n      \"sound\": \"利用原音轨31.65–33.78秒较密集瞬态承接短扫与落定；不在已有冲击上再堆重击，后半迅速收声。\",\n      \"from\": 1860,\n      \"durationInFrames\": 480,\n      \"screenText\": [\n        \"然后，划走。\",\n        \"视频过去了。\",\n        \"你的反应，留下了。\",\n        \"刚才那几秒，去了哪里？\"\n      ],\n      \"textTreatment\": \"第十一句被划动带走，第十二句跟随视频退去，第十三句留在原处，第十四句随镜头追入慢慢显现。\"\n    },\n    {\n      \"id\": \"actions-become-signals\",\n      \"start\": 39,\n      \"end\": 48,\n      \"copy\": [\n        15,\n        16,\n        17\n      ],\n      \"visual\": \"红心点与停留、重看的符号化为细颗粒，接入已有大量颗粒的分支网络；不是一颗红心独自触发一个推荐结果。\",\n      \"sound\": \"三种极轻颗粒质感逐渐合拢，可借44–46秒原曲较强处完成聚合，不使用“推荐成功”提示声。\",\n      \"from\": 2340,\n      \"durationInFrames\": 540,\n      \"screenText\": [\n        \"停留、重看、点赞……\",\n        \"它们被平台记录，变成信号。\",\n        \"成为推荐的参考。\"\n      ],\n      \"textTreatment\": \"第十五句完整显示后再拆为三条线上的词；第十六句随汇入显现，第十七句稳定落在网络旁。\"\n    },\n    {\n      \"id\": \"aggregate-feedback\",\n      \"start\": 48,\n      \"end\": 56,\n      \"copy\": [\n        18,\n        19\n      ],\n      \"visual\": \"镜头越过一层朦胧纸面。行为点先合并成总体痕迹，再进入运营观察区域；画面不保留可追踪的个人身份。\",\n      \"sound\": \"密集颗粒收成一次细腻聚合声，随后安静。\",\n      \"from\": 2880,\n      \"durationInFrames\": 480,\n      \"screenText\": [\n        \"运营看到的，是汇总后的反馈。\",\n        \"五秒、两秒、看到最后。\"\n      ],\n      \"textTreatment\": \"“汇总后的反馈”获得空间强调；第十九句的三个部分对应三组不同长度痕迹，保持阅读顺序。\"\n    },\n    {\n      \"id\": \"river-takes-shape\",\n      \"start\": 56,\n      \"end\": 64,\n      \"copy\": [\n        20,\n        21\n      ],\n      \"visual\": \"镜头拉远，原先的痕迹只是数据河流的一角。大量金白珠点沿线流动，渐渐显出总体趋势，不套用与本题无关的钟形分布。\",\n      \"sound\": \"颗粒稍加密，再以一个温和长音收拢。\",\n      \"from\": 3360,\n      \"durationInFrames\": 480,\n      \"screenText\": [\n        \"当成千上万次停留汇在一起，\",\n        \"零散的动作，慢慢显出轮廓。\"\n      ],\n      \"textTreatment\": \"第二十句伴随拉远；第二十一句先完整读清，再以“零散”的分散和“轮廓”的成形呼应画面。\"\n    },\n    {\n      \"id\": \"where-viewers-stay\",\n      \"start\": 64,\n      \"end\": 71,\n      \"copy\": [\n        22,\n        23\n      ],\n      \"visual\": \"镜头沿同一条总体曲线靠近停留区，再移向回落区。只用相对形状说明差异，不虚构真实账号的百分比。\",\n      \"sound\": \"两个有间隔的轻触，第二个更轻；没有警报或失败音。\",\n      \"from\": 3840,\n      \"durationInFrames\": 420,\n      \"screenText\": [\n        \"哪里留住了人？\",\n        \"哪里，大家突然离开？\"\n      ],\n      \"textTreatment\": \"两句问题分别落在相应观察区附近，完整读清才移开；“哪里”负责引导视线。\"\n    },\n    {\n      \"id\": \"observe-repetition\",\n      \"start\": 71,\n      \"end\": 78,\n      \"copy\": [\n        24,\n        25\n      ],\n      \"visual\": \"暗处出现观察者剪贴轮廓，面对数据河流。一个细线观察环沿流动寻找重复形状，主角仍是反馈而非人物脸部。\",\n      \"sound\": \"一道细纸擦，然后降低音效密度，为下一段留空间。\",\n      \"from\": 4260,\n      \"durationInFrames\": 420,\n      \"screenText\": [\n        \"运营，就在这片数据洪流里，\",\n        \"寻找那些反复出现的变化。\"\n      ],\n      \"textTreatment\": \"第二十四句沿河流底部显现；第二十五句的“反复出现”与重复形状呼应。\"\n    },\n    {\n      \"id\": \"hypotheses-not-answers\",\n      \"start\": 78,\n      \"end\": 90,\n      \"copy\": [\n        26,\n        27,\n        28,\n        29\n      ],\n      \"visual\": \"曲线中的圆点放大，重新成为小猫。歪头与节奏构成两个待验证的可能，数字线退到背景，镜头回到内容。\",\n      \"sound\": \"借原音轨80–90秒的较弱区留白，仅一两次柔和提示；不用“答案揭晓”声。\",\n      \"from\": 4680,\n      \"durationInFrames\": 720,\n      \"screenText\": [\n        \"是小猫歪头的那一下？\",\n        \"还是刚刚好的节奏？\",\n        \"数字给出线索。\",\n        \"原因，还要回到内容里验证。\"\n      ],\n      \"textTreatment\": \"两个疑问依次完整出现，不加确定性对勾；数字退为背景后，第二十九句完整稳定停留。\"\n    },\n    {\n      \"id\": \"change-next-content\",\n      \"start\": 90,\n      \"end\": 101,\n      \"copy\": [\n        30,\n        31,\n        32\n      ],\n      \"visual\": \"猫画面成为有实体厚度的旧胶片。第一格被替换；一个瞬间所在的胶片段被留长，动作也真正慢下来。\",\n      \"sound\": \"两次有区别的纸片移动声：换开头短，留长时柔和延展。\",\n      \"from\": 5400,\n      \"durationInFrames\": 660,\n      \"screenText\": [\n        \"于是，下一条内容，\",\n        \"换了一个开头，\",\n        \"留长了一个瞬间。\"\n      ],\n      \"textTreatment\": \"第三十句先出现；“开头”随第一格移动，“留长”靠字距和稳定时间表达，不拉坏字形。\"\n    },\n    {\n      \"id\": \"wait-for-response\",\n      \"start\": 101,\n      \"end\": 108,\n      \"copy\": [\n        33\n      ],\n      \"visual\": \"新内容送出，先只有少量回应点，随后更多颗粒归来形成细线；等待本身成为可见的过程。\",\n      \"sound\": \"一个轻发送扫声，随后撤声；回流时只补少量细颗粒。\",\n      \"from\": 6060,\n      \"durationInFrames\": 420,\n      \"screenText\": [\n        \"再等一轮，真实的回应。\"\n      ],\n      \"textTreatment\": \"第三十三句保持完整稳定，变化发生在周围，不用文字弹跳填补等待。\"\n    },\n    {\n      \"id\": \"mutual-influence\",\n      \"start\": 108,\n      \"end\": 116,\n      \"copy\": [\n        34,\n        35\n      ],\n      \"visual\": \"送出的内容线与返回的反馈线逐渐弯成同一个环，前面的路径连续闭合，不突然切入新示意图。\",\n      \"sound\": \"两个相互回应的柔和音色，闭环时一个轻落点。\",\n      \"from\": 6480,\n      \"durationInFrames\": 480,\n      \"screenText\": [\n        \"内容，影响着你的停留。\",\n        \"你的停留，也在影响内容。\"\n      ],\n      \"textTreatment\": \"两句先后完整读清，随后沿相反方向接入，最终短暂共存；不让路径弯曲破坏字形。\"\n    },\n    {\n      \"id\": \"return-to-cat-and-person\",\n      \"start\": 116,\n      \"end\": 124,\n      \"copy\": [\n        36,\n        37,\n        38\n      ],\n      \"visual\": \"镜头穿过闭环回到小猫，再拉远到许多微小内容瞬间。观察者留在暗处，不变成职场人物肖像宣传。\",\n      \"sound\": \"音效逐层减少，只留极浅的纸面与颗粒尾音。\",\n      \"from\": 6960,\n      \"durationInFrames\": 480,\n      \"screenText\": [\n        \"你看到的，是一只小猫。\",\n        \"屏幕另一边的人，\",\n        \"想从无数个这样的瞬间里，\"\n      ],\n      \"textTreatment\": \"第三十六句靠近猫，第三十七句随拉远，第三十八句沿内容瞬间的方向缓缓展开。\"\n    },\n    {\n      \"id\": \"ending\",\n      \"start\": 124,\n      \"end\": 130,\n      \"copy\": [\n        39,\n        40\n      ],\n      \"visual\": \"颗粒渐渐收束，重回最初愿意停住的瞬间。最终安定，呼应开场“停下”；128.8–130秒不新增信息。\",\n      \"sound\": \"一个克制的收束音，之后不新增音效，保留原音轨结尾。\",\n      \"from\": 7440,\n      \"durationInFrames\": 360,\n      \"screenText\": [\n        \"找到让人愿意留下的理由。\",\n        \"这，就是新媒体运营。\"\n      ],\n      \"textTreatment\": \"第三十九句先完整出现，第四十句居中落定，128.8秒后稳定保持至结束。\"\n    }\n  ]\n}\n",
      "bytesBase64": "ewogICJzdGF0dXMiOiAiYXBwcm92ZWQtc2NyaXB0LWF3YWl0aW5nLXN0eWxlLXJldmlldyIsCiAgImNvcHlBcHByb3ZlZCI6IHRydWUsCiAgInNjcmlwdEFwcHJvdmVkIjogdHJ1ZSwKICAiYXNzZXRzQW5kU3R5bGVBcHByb3ZlZCI6IGZhbHNlLAogICJmdWxsRWRpdFN0YXJ0ZWQiOiBmYWxzZSwKICAidGl0bGUiOiAi5LiA6aKX57qi5b+D77yM5Y675LqG5ZOq6YeM77yfIiwKICAiZnBzIjogNjAsCiAgIndpZHRoIjogMTkyMCwKICAiaGVpZ2h0IjogMTA4MCwKICAiZHVyYXRpb25JbkZyYW1lcyI6IDc4MDAsCiAgImR1cmF0aW9uU2Vjb25kcyI6IDEzMCwKICAidm9pY2VvdmVyIjogZmFsc2UsCiAgImFwcHJvdmVkQ29weUFydGlmYWN0IjogImNvcHktZHJhZnQtcjIubWQiLAogICJhcHByb3ZlZENvcHlVbml0cyI6IFsKICAgICLkvaDku6XkuLrvvIzku5bkuIrnj63lj6rmmK/lnKjliLfmiYvmnLrjgIIiLAogICAgIuWFtuWunu+8jOS7luWcqOeglOeptuS9oOS4uuS7gOS5iOWBnOS4i+OAgiIsCiAgICAi6L+Z5Lu95bel5L2c77yM5Y+r5paw5aqS5L2T6L+Q6JCl44CCIiwKICAgICLkvaDmraPlh4blpIfvvIzmiormiYvmnLrmlLbotbfmnaXjgIIiLAogICAgIuS4gOWPquWwj+eMq++8jOeqgeeEtuaOoui/m+eUu+mdouOAgiIsCiAgICAi5a6D5q2q5LqG5q2q5aS044CCIiwKICAgICLkvaDlgZzkvY/kuobjgIIiLAogICAgIuS6lOenkuOAgiIsCiAgICAi55yL5a6M77yM5Y+I55yL5LqG5LiA6YGN44CCIiwKICAgICLpobrmiYvvvIzngrnkuq7kuIDpopfnuqLlv4PjgIIiLAogICAgIueEtuWQju+8jOWIkui1sOOAgiIsCiAgICAi6KeG6aKR6L+H5Y675LqG44CCIiwKICAgICLkvaDnmoTlj43lupTvvIznlZnkuIvkuobjgIIiLAogICAgIuWImuaJjemCo+WHoOenku+8jOWOu+S6huWTqumHjO+8nyIsCiAgICAi5YGc55WZ44CB6YeN55yL44CB54K56LWe4oCm4oCmIiwKICAgICLlroPku6zooqvlubPlj7DorrDlvZXvvIzlj5jmiJDkv6Hlj7fjgIIiLAogICAgIuaIkOS4uuaOqOiNkOeahOWPguiAg+OAgiIsCiAgICAi6L+Q6JCl55yL5Yiw55qE77yM5piv5rGH5oC75ZCO55qE5Y+N6aaI44CCIiwKICAgICLkupTnp5LjgIHkuKTnp5LjgIHnnIvliLDmnIDlkI7jgIIiLAogICAgIuW9k+aIkOWNg+S4iuS4h+asoeWBnOeVmeaxh+WcqOS4gOi1t++8jCIsCiAgICAi6Zu25pWj55qE5Yqo5L2c77yM5oWi5oWi5pi+5Ye66L2u5buT44CCIiwKICAgICLlk6rph4znlZnkvY/kuobkurrvvJ8iLAogICAgIuWTqumHjO+8jOWkp+WutueqgeeEtuemu+W8gO+8nyIsCiAgICAi6L+Q6JCl77yM5bCx5Zyo6L+Z54mH5pWw5o2u5rSq5rWB6YeM77yMIiwKICAgICLlr7vmib7pgqPkupvlj43lpI3lh7rnjrDnmoTlj5jljJbjgIIiLAogICAgIuaYr+Wwj+eMq+atquWktOeahOmCo+S4gOS4i++8nyIsCiAgICAi6L+Y5piv5Yia5Yia5aW955qE6IqC5aWP77yfIiwKICAgICLmlbDlrZfnu5nlh7rnur/ntKLjgIIiLAogICAgIuWOn+WboO+8jOi/mOimgeWbnuWIsOWGheWuuemHjOmqjOivgeOAgiIsCiAgICAi5LqO5piv77yM5LiL5LiA5p2h5YaF5a6577yMIiwKICAgICLmjaLkuobkuIDkuKrlvIDlpLTvvIwiLAogICAgIueVmemVv+S6huS4gOS4queerOmXtOOAgiIsCiAgICAi5YaN562J5LiA6L2u77yM55yf5a6e55qE5Zue5bqU44CCIiwKICAgICLlhoXlrrnvvIzlvbHlk43nnYDkvaDnmoTlgZznlZnjgIIiLAogICAgIuS9oOeahOWBnOeVme+8jOS5n+WcqOW9seWTjeWGheWuueOAgiIsCiAgICAi5L2g55yL5Yiw55qE77yM5piv5LiA5Y+q5bCP54yr44CCIiwKICAgICLlsY/luZXlj6bkuIDovrnnmoTkurrvvIwiLAogICAgIuaDs+S7juaXoOaVsOS4qui/meagt+eahOeerOmXtOmHjO+8jCIsCiAgICAi5om+5Yiw6K6p5Lq65oS/5oSP55WZ5LiL55qE55CG55Sx44CCIiwKICAgICLov5nvvIzlsLHmmK/mlrDlqpLkvZPov5DokKXjgIIiCiAgXSwKICAicmVmZXJlbmNlIjogewogICAgInVwbG9hZGVkRmlsZSI6ICJJd2FuYXUtVmliZeefpeivhuWkp+i1j1/jgIrov5DmsJTnmoTlvaLnirbjgIvmnKzop4YuLi4tMjAyNjEwMjJfMDkyNDQ0Lm1wNCIsCiAgICAic2hhMjU2IjogIjMxNDQ0ZjhmNjZmZDc2NGM2MDhlZDM5M2E2ZDJlNTRlNjJkM2FkZTE5MjVjM2I5ZDJkNDgyZDA0NjFlYmQzZGQiLAogICAgInNpemVCeXRlcyI6IDExNzY3MTMzLAogICAgInZpZGVvU2Vjb25kcyI6IDEzMCwKICAgICJhdWRpb1NlY29uZHMiOiAxMzAuMDA3MDA3LAogICAgImluZGVwZW5kZW50TXVzaWNTdGVtQXZhaWxhYmxlIjogZmFsc2UsCiAgICAidXNlcklkZW50aWZpZWRPcmlnaW5hbE11c2ljVXJsIjogImh0dHBzOi8vbXVzaWMuMTYzLmNvbS9zb25nP2lkPTM0NTEwMjg4OTMiLAogICAgInVzZXJTdXBwbGllZE11c2ljQXNzZXRBdmFpbGFibGUiOiB0cnVlLAogICAgInVzZXJTdXBwbGllZE11c2ljU2hhMjU2IjogImQyNzViYjdhMjZkMTc1NWU2YjE5M2Q5NzA1NjM0MzQ5ODA1MWUzN2RjNjg1YzIzM2QzYzdlYTI0MTkxMmRjNTkiLAogICAgInJlZmVyZW5jZVRpbWVUb011c2ljVGltZU9mZnNldFNlY29uZHMiOiAwLjA0OAogIH0sCiAgInRpbWluZ05vdGVzIjogIkFsbCB0aW1pbmdzIGFyZSBlZGl0b3JpYWwgcHJvcG9zYWxzLCBub3QgcmVuZGVyZWQgb3IgZXhhY3QgdmVyaWZpZWQgbXVzaWMgYmVhdCBtYXJrZXJzLiBUaGUgYXBwcm92ZWQgc2NyZWVuIGNvcHkgaXMgdW5jaGFuZ2VkLiIsCiAgImxpdGVyYWxQYXVzZSI6IHsKICAgICJmcm9tIjogMTA4MCwKICAgICJkdXJhdGlvbkluRnJhbWVzIjogMzAwCiAgfSwKICAiZmluYWxTdGFibGVIb2xkIjogewogICAgImZyb20iOiA3NzI4LAogICAgImR1cmF0aW9uSW5GcmFtZXMiOiA3MgogIH0sCiAgInNob3RzIjogWwogICAgewogICAgICAiaWQiOiAiaG9vayIsCiAgICAgICJzdGFydCI6IDAsCiAgICAgICJlbmQiOiA5LAogICAgICAiY29weSI6IFsKICAgICAgICAxLAogICAgICAgIDIsCiAgICAgICAgMwogICAgICBdLAogICAgICAidmlzdWFsIjogIuaal+WkhOS4gOmDqOixoeeJmeiJsuaJi+acuuWxheS4re+8jOWGheWuuei9u+i9u+e7j+i/h++8m+a7keWKqOeqgeeEtuWBnOS9j++8jOmVnOWktOmdoOi/keOAguWQjOS4gOeJqeS7tuW4puWHuuiBjOS4mu+8jOS4jeWPpuW8gOagh+mimOWNoeOAgiIsCiAgICAgICJzb3VuZCI6ICLkuKTmrKHovbvnurjmk6bvvIzlgZzkvY/ml7bkuIDkuKrnn63kv4PkvY7pn7PjgILlvIDlnLrkuI3ov57nu63ph43lh7vjgIIiLAogICAgICAiZnJvbSI6IDAsCiAgICAgICJkdXJhdGlvbkluRnJhbWVzIjogNTQwLAogICAgICAic2NyZWVuVGV4dCI6IFsKICAgICAgICAi5L2g5Lul5Li677yM5LuW5LiK54+t5Y+q5piv5Zyo5Yi35omL5py644CCIiwKICAgICAgICAi5YW25a6e77yM5LuW5Zyo56CU56m25L2g5Li65LuA5LmI5YGc5LiL44CCIiwKICAgICAgICAi6L+Z5Lu95bel5L2c77yM5Y+r5paw5aqS5L2T6L+Q6JCl44CCIgogICAgICBdLAogICAgICAidGV4dFRyZWF0bWVudCI6ICLnrKzkuIDlj6Xpmo/mu5Hliqjov5vlhaXvvJvnrKzkuozlj6XkuK3nmoTigJzlgZzkuIvigJ3nnJ/mraPlgZzlnKjnlLvlv4PvvJvnrKzkuInlj6XlrozmlbTor7vmuIXlkI7lsIbogYzkuJrlkI3mlLboh7PkuIrop5LjgIIiCiAgICB9LAogICAgewogICAgICAiaWQiOiAiY2F0LWludGVycnVwdHMiLAogICAgICAic3RhcnQiOiA5LAogICAgICAiZW5kIjogMTYsCiAgICAgICJjb3B5IjogWwogICAgICAgIDQsCiAgICAgICAgNQogICAgICBdLAogICAgICAidmlzdWFsIjogIuaJi+acuuWQkeaal+WkhOS4i+ayie+8jOS4gOWPquaalueZveOAgeacieS9k+enr+WSjOaflOWSjOmYtOW9seeahOWwj+eMq+S7juWOn+eUu+ahhuaOouWktO+8jOaJk+aWreaUtuaJi+acuueahOWKqOS9nOOAgiIsCiAgICAgICJzb3VuZCI6ICLooaPmlpnlvI/ovbvmk6bvvIzlho3nu5nkuIDmrKHmnoHovbvop6bnorDjgILlj4LogIPpn7PovagxMOKAkzE256eS6L6D5byx77yM5L+d55WZ56m66Ze044CCIiwKICAgICAgImZyb20iOiA1NDAsCiAgICAgICJkdXJhdGlvbkluRnJhbWVzIjogNDIwLAogICAgICAic2NyZWVuVGV4dCI6IFsKICAgICAgICAi5L2g5q2j5YeG5aSH77yM5oqK5omL5py65pS26LW35p2l44CCIiwKICAgICAgICAi5LiA5Y+q5bCP54yr77yM56qB54S25o6i6L+b55S76Z2i44CCIgogICAgICBdLAogICAgICAidGV4dFRyZWF0bWVudCI6ICLnrKzlm5vlj6Xpmo/miYvmnLrkuIvmsonvvIznrKzkupTlj6XlnKjlsI/njKvlh7rnjrDlkI7kuo7nqLPlrprljLrln5/mmL7njrDjgIIiCiAgICB9LAogICAgewogICAgICAiaWQiOiAiZml2ZS1zZWNvbmQtcGF1c2UiLAogICAgICAic3RhcnQiOiAxNiwKICAgICAgImVuZCI6IDI1LAogICAgICAiY29weSI6IFsKICAgICAgICA2LAogICAgICAgIDcsCiAgICAgICAgOAogICAgICBdLAogICAgICAidmlzdWFsIjogIuWwj+eMq+i9u+i9u+atquWktOOAgjE4LjDigJMyMy4w56eS55yf5a6e5YGc55WZ5LqU56eS77yM5Li75L2T5Z+65pys5a6J5a6a77yM5LuF57uG5YWJ546v57yT5oWi6LWw5a6M77ybMjPnp5LlkI7miY3mmL7npLrigJzkupTnp5LjgILigJ3jgIIiLAogICAgICAic291bmQiOiAi5q2q5aS05LiA5Liq5p+U5ZKM5bCP6Z+z44CC55yf5a6e5LqU56eS5YGc55WZ5pyf6Ze05LiN5paw5aKe6Z+z5pWI77yM55Sx6Z+z5LmQ44CB5Li75L2T57uG5b6u5ZG85ZC45ZKM6Z2Z5q2i5om/5ouF5oSP5ZGz44CCIiwKICAgICAgImZyb20iOiA5NjAsCiAgICAgICJkdXJhdGlvbkluRnJhbWVzIjogNTQwLAogICAgICAic2NyZWVuVGV4dCI6IFsKICAgICAgICAi5a6D5q2q5LqG5q2q5aS044CCIiwKICAgICAgICAi5L2g5YGc5L2P5LqG44CCIiwKICAgICAgICAi5LqU56eS44CCIgogICAgICBdLAogICAgICAidGV4dFRyZWF0bWVudCI6ICLnrKzlha3lj6XphY3lkIjmrarlpLTvvIznrKzkuIPlj6Xpmo/lgZzkvY/lh7rnjrDlubbkv53mjIHjgILnnJ/lrp7kupTnp5LlkI7lho3mmL7npLrnrKzlhavlj6XvvIzkuI3mlrDlop7lgJLorqHml7blj7Dor43jgIIiCiAgICB9LAogICAgewogICAgICAiaWQiOiAicmV3YXRjaC1oZWFydCIsCiAgICAgICJzdGFydCI6IDI1LAogICAgICAiZW5kIjogMzEsCiAgICAgICJjb3B5IjogWwogICAgICAgIDksCiAgICAgICAgMTAKICAgICAgXSwKICAgICAgInZpc3VhbCI6ICLnjKvnmoTliqjkvZzlm57liLDotbfngrnlho3lj5HnlJ/kuIDmrKHvvIzmtYXph43lvbHooajovr7ph43nnIvvvJvkuIDmnprkvY7ppbHlkozmnLHnuqLlv4Pkuq7otbfvvIzpmo/lkI7nlZnlnKjljp/lpITjgIIiLAogICAgICAic291bmQiOiAi5LiA5qyh5p6B6L275Y+N5ZCR5omr6aKR44CB5LiA5qyh5p+U6L2v5b+D6Lez5byP6JC954K544CC57qi5b+D5Y+q5Lqu5LiA5qyh44CCIiwKICAgICAgImZyb20iOiAxNTAwLAogICAgICAiZHVyYXRpb25JbkZyYW1lcyI6IDM2MCwKICAgICAgInNjcmVlblRleHQiOiBbCiAgICAgICAgIueci+WujO+8jOWPiOeci+S6huS4gOmBjeOAgiIsCiAgICAgICAgIumhuuaJi++8jOeCueS6ruS4gOmil+e6ouW/g+OAgiIKICAgICAgXSwKICAgICAgInRleHRUcmVhdG1lbnQiOiAi56ys5Lmd5Y+l5YWI5a6M5pW06K+75riF77yM5YaN5rK/5Zue546v6Lev5b6E56e75Yqo77yb56ys5Y2B5Y+l6ZqP57qi5b+D6JC95a6a44CCIgogICAgfSwKICAgIHsKICAgICAgImlkIjogInN3aXBlLWxlYXZlcy10cmFjZSIsCiAgICAgICJzdGFydCI6IDMxLAogICAgICAiZW5kIjogMzksCiAgICAgICJjb3B5IjogWwogICAgICAgIDExLAogICAgICAgIDEyLAogICAgICAgIDEzLAogICAgICAgIDE0CiAgICAgIF0sCiAgICAgICJ2aXN1YWwiOiAiMzHigJMzNOenku+8muaVtOS4queMq+inhumikeiiq+WIkui1sO+8jOe6ouW/g+WNtOe8qeaIkOWwj+eCueeVmeS4i+OAguinhumikeWGheWuueS4juihjOS4uuWPjeW6lOesrOS4gOasoeWIhuemu++8m+mVnOWktOi/veWQkeeVmeS4i+eahOWwj+eCueOAgiIsCiAgICAgICJzb3VuZCI6ICLliKnnlKjljp/pn7PovagzMS42NeKAkzMzLjc456eS6L6D5a+G6ZuG556s5oCB5om/5o6l55+t5omr5LiO6JC95a6a77yb5LiN5Zyo5bey5pyJ5Yay5Ye75LiK5YaN5aCG6YeN5Ye777yM5ZCO5Y2K6L+F6YCf5pS25aOw44CCIiwKICAgICAgImZyb20iOiAxODYwLAogICAgICAiZHVyYXRpb25JbkZyYW1lcyI6IDQ4MCwKICAgICAgInNjcmVlblRleHQiOiBbCiAgICAgICAgIueEtuWQju+8jOWIkui1sOOAgiIsCiAgICAgICAgIuinhumikei/h+WOu+S6huOAgiIsCiAgICAgICAgIuS9oOeahOWPjeW6lO+8jOeVmeS4i+S6huOAgiIsCiAgICAgICAgIuWImuaJjemCo+WHoOenku+8jOWOu+S6huWTqumHjO+8nyIKICAgICAgXSwKICAgICAgInRleHRUcmVhdG1lbnQiOiAi56ys5Y2B5LiA5Y+l6KKr5YiS5Yqo5bim6LWw77yM56ys5Y2B5LqM5Y+l6Lef6ZqP6KeG6aKR6YCA5Y6777yM56ys5Y2B5LiJ5Y+l55WZ5Zyo5Y6f5aSE77yM56ys5Y2B5Zub5Y+l6ZqP6ZWc5aS06L+95YWl5oWi5oWi5pi+546w44CCIgogICAgfSwKICAgIHsKICAgICAgImlkIjogImFjdGlvbnMtYmVjb21lLXNpZ25hbHMiLAogICAgICAic3RhcnQiOiAzOSwKICAgICAgImVuZCI6IDQ4LAogICAgICAiY29weSI6IFsKICAgICAgICAxNSwKICAgICAgICAxNiwKICAgICAgICAxNwogICAgICBdLAogICAgICAidmlzdWFsIjogIue6ouW/g+eCueS4juWBnOeVmeOAgemHjeeci+eahOespuWPt+WMluS4uue7humil+eyku+8jOaOpeWFpeW3suacieWkp+mHj+mil+eykueahOWIhuaUr+e9kee7nO+8m+S4jeaYr+S4gOmil+e6ouW/g+eLrOiHquinpuWPkeS4gOS4quaOqOiNkOe7k+aenOOAgiIsCiAgICAgICJzb3VuZCI6ICLkuInnp43mnoHovbvpopfnspLotKjmhJ/pgJDmuJDlkIjmi6LvvIzlj6/lgJ80NOKAkzQ256eS5Y6f5puy6L6D5by65aSE5a6M5oiQ6IGa5ZCI77yM5LiN5L2/55So4oCc5o6o6I2Q5oiQ5Yqf4oCd5o+Q56S65aOw44CCIiwKICAgICAgImZyb20iOiAyMzQwLAogICAgICAiZHVyYXRpb25JbkZyYW1lcyI6IDU0MCwKICAgICAgInNjcmVlblRleHQiOiBbCiAgICAgICAgIuWBnOeVmeOAgemHjeeci+OAgeeCuei1nuKApuKApiIsCiAgICAgICAgIuWug+S7rOiiq+W5s+WPsOiusOW9le+8jOWPmOaIkOS/oeWPt+OAgiIsCiAgICAgICAgIuaIkOS4uuaOqOiNkOeahOWPguiAg+OAgiIKICAgICAgXSwKICAgICAgInRleHRUcmVhdG1lbnQiOiAi56ys5Y2B5LqU5Y+l5a6M5pW05pi+56S65ZCO5YaN5ouG5Li65LiJ5p2h57q/5LiK55qE6K+N77yb56ys5Y2B5YWt5Y+l6ZqP5rGH5YWl5pi+546w77yM56ys5Y2B5LiD5Y+l56iz5a6a6JC95Zyo572R57uc5peB44CCIgogICAgfSwKICAgIHsKICAgICAgImlkIjogImFnZ3JlZ2F0ZS1mZWVkYmFjayIsCiAgICAgICJzdGFydCI6IDQ4LAogICAgICAiZW5kIjogNTYsCiAgICAgICJjb3B5IjogWwogICAgICAgIDE4LAogICAgICAgIDE5CiAgICAgIF0sCiAgICAgICJ2aXN1YWwiOiAi6ZWc5aS06LaK6L+H5LiA5bGC5pym6IOn57q46Z2i44CC6KGM5Li654K55YWI5ZCI5bm25oiQ5oC75L2T55eV6L+577yM5YaN6L+b5YWl6L+Q6JCl6KeC5a+f5Yy65Z+f77yb55S76Z2i5LiN5L+d55WZ5Y+v6L+96Liq55qE5Liq5Lq66Lqr5Lu944CCIiwKICAgICAgInNvdW5kIjogIuWvhumbhumil+eykuaUtuaIkOS4gOasoee7huiFu+iBmuWQiOWjsO+8jOmaj+WQjuWuiemdmeOAgiIsCiAgICAgICJmcm9tIjogMjg4MCwKICAgICAgImR1cmF0aW9uSW5GcmFtZXMiOiA0ODAsCiAgICAgICJzY3JlZW5UZXh0IjogWwogICAgICAgICLov5DokKXnnIvliLDnmoTvvIzmmK/msYfmgLvlkI7nmoTlj43ppojjgIIiLAogICAgICAgICLkupTnp5LjgIHkuKTnp5LjgIHnnIvliLDmnIDlkI7jgIIiCiAgICAgIF0sCiAgICAgICJ0ZXh0VHJlYXRtZW50IjogIuKAnOaxh+aAu+WQjueahOWPjemmiOKAneiOt+W+l+epuumXtOW8uuiwg++8m+esrOWNgeS5neWPpeeahOS4ieS4qumDqOWIhuWvueW6lOS4iee7hOS4jeWQjOmVv+W6pueXlei/ue+8jOS/neaMgemYheivu+mhuuW6j+OAgiIKICAgIH0sCiAgICB7CiAgICAgICJpZCI6ICJyaXZlci10YWtlcy1zaGFwZSIsCiAgICAgICJzdGFydCI6IDU2LAogICAgICAiZW5kIjogNjQsCiAgICAgICJjb3B5IjogWwogICAgICAgIDIwLAogICAgICAgIDIxCiAgICAgIF0sCiAgICAgICJ2aXN1YWwiOiAi6ZWc5aS05ouJ6L+c77yM5Y6f5YWI55qE55eV6L+55Y+q5piv5pWw5o2u5rKz5rWB55qE5LiA6KeS44CC5aSn6YeP6YeR55m954+g54K55rK/57q/5rWB5Yqo77yM5riQ5riQ5pi+5Ye65oC75L2T6LaL5Yq/77yM5LiN5aWX55So5LiO5pys6aKY5peg5YWz55qE6ZKf5b2i5YiG5biD44CCIiwKICAgICAgInNvdW5kIjogIumil+eykueojeWKoOWvhu+8jOWGjeS7peS4gOS4qua4qeWSjOmVv+mfs+aUtuaLouOAgiIsCiAgICAgICJmcm9tIjogMzM2MCwKICAgICAgImR1cmF0aW9uSW5GcmFtZXMiOiA0ODAsCiAgICAgICJzY3JlZW5UZXh0IjogWwogICAgICAgICLlvZPmiJDljYPkuIrkuIfmrKHlgZznlZnmsYflnKjkuIDotbfvvIwiLAogICAgICAgICLpm7bmlaPnmoTliqjkvZzvvIzmhaLmhaLmmL7lh7rova7lu5PjgIIiCiAgICAgIF0sCiAgICAgICJ0ZXh0VHJlYXRtZW50IjogIuesrOS6jOWNgeWPpeS8tOmaj+aLiei/nO+8m+esrOS6jOWNgeS4gOWPpeWFiOWujOaVtOivu+a4he+8jOWGjeS7peKAnOmbtuaVo+KAneeahOWIhuaVo+WSjOKAnOi9ruW7k+KAneeahOaIkOW9ouWRvOW6lOeUu+mdouOAgiIKICAgIH0sCiAgICB7CiAgICAgICJpZCI6ICJ3aGVyZS12aWV3ZXJzLXN0YXkiLAogICAgICAic3RhcnQiOiA2NCwKICAgICAgImVuZCI6IDcxLAogICAgICAiY29weSI6IFsKICAgICAgICAyMiwKICAgICAgICAyMwogICAgICBdLAogICAgICAidmlzdWFsIjogIumVnOWktOayv+WQjOS4gOadoeaAu+S9k+absue6v+mdoOi/keWBnOeVmeWMuu+8jOWGjeenu+WQkeWbnuiQveWMuuOAguWPqueUqOebuOWvueW9oueKtuivtOaYjuW3ruW8gu+8jOS4jeiZmuaehOecn+Wunui0puWPt+eahOeZvuWIhuavlOOAgiIsCiAgICAgICJzb3VuZCI6ICLkuKTkuKrmnInpl7TpmpTnmoTovbvop6bvvIznrKzkuozkuKrmm7TovbvvvJvmsqHmnInorabmiqXmiJblpLHotKXpn7PjgIIiLAogICAgICAiZnJvbSI6IDM4NDAsCiAgICAgICJkdXJhdGlvbkluRnJhbWVzIjogNDIwLAogICAgICAic2NyZWVuVGV4dCI6IFsKICAgICAgICAi5ZOq6YeM55WZ5L2P5LqG5Lq677yfIiwKICAgICAgICAi5ZOq6YeM77yM5aSn5a6256qB54S256a75byA77yfIgogICAgICBdLAogICAgICAidGV4dFRyZWF0bWVudCI6ICLkuKTlj6Xpl67popjliIbliKvokL3lnKjnm7jlupTop4Llr5/ljLrpmYTov5HvvIzlrozmlbTor7vmuIXmiY3np7vlvIDvvJvigJzlk6rph4zigJ3otJ/otKPlvJXlr7zop4bnur/jgIIiCiAgICB9LAogICAgewogICAgICAiaWQiOiAib2JzZXJ2ZS1yZXBldGl0aW9uIiwKICAgICAgInN0YXJ0IjogNzEsCiAgICAgICJlbmQiOiA3OCwKICAgICAgImNvcHkiOiBbCiAgICAgICAgMjQsCiAgICAgICAgMjUKICAgICAgXSwKICAgICAgInZpc3VhbCI6ICLmmpflpITlh7rnjrDop4Llr5/ogIXliarotLTova7lu5PvvIzpnaLlr7nmlbDmja7msrPmtYHjgILkuIDkuKrnu4bnur/op4Llr5/njq/msr/mtYHliqjlr7vmib7ph43lpI3lvaLnirbvvIzkuLvop5Lku43mmK/lj43ppojogIzpnZ7kurrnianohLjpg6jjgIIiLAogICAgICAic291bmQiOiAi5LiA6YGT57uG57q45pOm77yM54S25ZCO6ZmN5L2O6Z+z5pWI5a+G5bqm77yM5Li65LiL5LiA5q6155WZ56m66Ze044CCIiwKICAgICAgImZyb20iOiA0MjYwLAogICAgICAiZHVyYXRpb25JbkZyYW1lcyI6IDQyMCwKICAgICAgInNjcmVlblRleHQiOiBbCiAgICAgICAgIui/kOiQpe+8jOWwseWcqOi/meeJh+aVsOaNrua0qua1gemHjO+8jCIsCiAgICAgICAgIuWvu+aJvumCo+S6m+WPjeWkjeWHuueOsOeahOWPmOWMluOAgiIKICAgICAgXSwKICAgICAgInRleHRUcmVhdG1lbnQiOiAi56ys5LqM5Y2B5Zub5Y+l5rK/5rKz5rWB5bqV6YOo5pi+546w77yb56ys5LqM5Y2B5LqU5Y+l55qE4oCc5Y+N5aSN5Ye6546w4oCd5LiO6YeN5aSN5b2i54q25ZG85bqU44CCIgogICAgfSwKICAgIHsKICAgICAgImlkIjogImh5cG90aGVzZXMtbm90LWFuc3dlcnMiLAogICAgICAic3RhcnQiOiA3OCwKICAgICAgImVuZCI6IDkwLAogICAgICAiY29weSI6IFsKICAgICAgICAyNiwKICAgICAgICAyNywKICAgICAgICAyOCwKICAgICAgICAyOQogICAgICBdLAogICAgICAidmlzdWFsIjogIuabsue6v+S4reeahOWchueCueaUvuWkp++8jOmHjeaWsOaIkOS4uuWwj+eMq+OAguatquWktOS4juiKguWlj+aehOaIkOS4pOS4quW+hemqjOivgeeahOWPr+iDve+8jOaVsOWtl+e6v+mAgOWIsOiDjOaZr++8jOmVnOWktOWbnuWIsOWGheWuueOAgiIsCiAgICAgICJzb3VuZCI6ICLlgJ/ljp/pn7Povag4MOKAkzkw56eS55qE6L6D5byx5Yy655WZ55m977yM5LuF5LiA5Lik5qyh5p+U5ZKM5o+Q56S677yb5LiN55So4oCc562U5qGI5o+t5pmT4oCd5aOw44CCIiwKICAgICAgImZyb20iOiA0NjgwLAogICAgICAiZHVyYXRpb25JbkZyYW1lcyI6IDcyMCwKICAgICAgInNjcmVlblRleHQiOiBbCiAgICAgICAgIuaYr+Wwj+eMq+atquWktOeahOmCo+S4gOS4i++8nyIsCiAgICAgICAgIui/mOaYr+WImuWImuWlveeahOiKguWlj++8nyIsCiAgICAgICAgIuaVsOWtl+e7meWHuue6v+e0ouOAgiIsCiAgICAgICAgIuWOn+WboO+8jOi/mOimgeWbnuWIsOWGheWuuemHjOmqjOivgeOAgiIKICAgICAgXSwKICAgICAgInRleHRUcmVhdG1lbnQiOiAi5Lik5Liq55aR6Zeu5L6d5qyh5a6M5pW05Ye6546w77yM5LiN5Yqg56Gu5a6a5oCn5a+55Yu+77yb5pWw5a2X6YCA5Li66IOM5pmv5ZCO77yM56ys5LqM5Y2B5Lmd5Y+l5a6M5pW056iz5a6a5YGc55WZ44CCIgogICAgfSwKICAgIHsKICAgICAgImlkIjogImNoYW5nZS1uZXh0LWNvbnRlbnQiLAogICAgICAic3RhcnQiOiA5MCwKICAgICAgImVuZCI6IDEwMSwKICAgICAgImNvcHkiOiBbCiAgICAgICAgMzAsCiAgICAgICAgMzEsCiAgICAgICAgMzIKICAgICAgXSwKICAgICAgInZpc3VhbCI6ICLnjKvnlLvpnaLmiJDkuLrmnInlrp7kvZPljprluqbnmoTml6fog7bniYfjgILnrKzkuIDmoLzooqvmm7/mjaLvvJvkuIDkuKrnnqzpl7TmiYDlnKjnmoTog7bniYfmrrXooqvnlZnplb/vvIzliqjkvZzkuZ/nnJ/mraPmhaLkuIvmnaXjgIIiLAogICAgICAic291bmQiOiAi5Lik5qyh5pyJ5Yy65Yir55qE57q454mH56e75Yqo5aOw77ya5o2i5byA5aS055+t77yM55WZ6ZW/5pe25p+U5ZKM5bu25bGV44CCIiwKICAgICAgImZyb20iOiA1NDAwLAogICAgICAiZHVyYXRpb25JbkZyYW1lcyI6IDY2MCwKICAgICAgInNjcmVlblRleHQiOiBbCiAgICAgICAgIuS6juaYr++8jOS4i+S4gOadoeWGheWuue+8jCIsCiAgICAgICAgIuaNouS6huS4gOS4quW8gOWktO+8jCIsCiAgICAgICAgIueVmemVv+S6huS4gOS4queerOmXtOOAgiIKICAgICAgXSwKICAgICAgInRleHRUcmVhdG1lbnQiOiAi56ys5LiJ5Y2B5Y+l5YWI5Ye6546w77yb4oCc5byA5aS04oCd6ZqP56ys5LiA5qC856e75Yqo77yM4oCc55WZ6ZW/4oCd6Z2g5a2X6Led5ZKM56iz5a6a5pe26Ze06KGo6L6+77yM5LiN5ouJ5Z2P5a2X5b2i44CCIgogICAgfSwKICAgIHsKICAgICAgImlkIjogIndhaXQtZm9yLXJlc3BvbnNlIiwKICAgICAgInN0YXJ0IjogMTAxLAogICAgICAiZW5kIjogMTA4LAogICAgICAiY29weSI6IFsKICAgICAgICAzMwogICAgICBdLAogICAgICAidmlzdWFsIjogIuaWsOWGheWuuemAgeWHuu+8jOWFiOWPquacieWwkemHj+WbnuW6lOeCue+8jOmaj+WQjuabtOWkmumil+eykuW9kuadpeW9ouaIkOe7hue6v++8m+etieW+heacrOi6q+aIkOS4uuWPr+ingeeahOi/h+eoi+OAgiIsCiAgICAgICJzb3VuZCI6ICLkuIDkuKrovbvlj5HpgIHmiavlo7DvvIzpmo/lkI7mkqTlo7DvvJvlm57mtYHml7blj6rooaXlsJHph4/nu4bpopfnspLjgIIiLAogICAgICAiZnJvbSI6IDYwNjAsCiAgICAgICJkdXJhdGlvbkluRnJhbWVzIjogNDIwLAogICAgICAic2NyZWVuVGV4dCI6IFsKICAgICAgICAi5YaN562J5LiA6L2u77yM55yf5a6e55qE5Zue5bqU44CCIgogICAgICBdLAogICAgICAidGV4dFRyZWF0bWVudCI6ICLnrKzkuInljYHkuInlj6Xkv53mjIHlrozmlbTnqLPlrprvvIzlj5jljJblj5HnlJ/lnKjlkajlm7TvvIzkuI3nlKjmloflrZflvLnot7PloavooaXnrYnlvoXjgIIiCiAgICB9LAogICAgewogICAgICAiaWQiOiAibXV0dWFsLWluZmx1ZW5jZSIsCiAgICAgICJzdGFydCI6IDEwOCwKICAgICAgImVuZCI6IDExNiwKICAgICAgImNvcHkiOiBbCiAgICAgICAgMzQsCiAgICAgICAgMzUKICAgICAgXSwKICAgICAgInZpc3VhbCI6ICLpgIHlh7rnmoTlhoXlrrnnur/kuI7ov5Tlm57nmoTlj43ppojnur/pgJDmuJDlvK/miJDlkIzkuIDkuKrnjq/vvIzliY3pnaLnmoTot6/lvoTov57nu63pl63lkIjvvIzkuI3nqoHnhLbliIflhaXmlrDnpLrmhI/lm77jgIIiLAogICAgICAic291bmQiOiAi5Lik5Liq55u45LqS5Zue5bqU55qE5p+U5ZKM6Z+z6Imy77yM6Zet546v5pe25LiA5Liq6L276JC954K544CCIiwKICAgICAgImZyb20iOiA2NDgwLAogICAgICAiZHVyYXRpb25JbkZyYW1lcyI6IDQ4MCwKICAgICAgInNjcmVlblRleHQiOiBbCiAgICAgICAgIuWGheWuue+8jOW9seWTjeedgOS9oOeahOWBnOeVmeOAgiIsCiAgICAgICAgIuS9oOeahOWBnOeVme+8jOS5n+WcqOW9seWTjeWGheWuueOAgiIKICAgICAgXSwKICAgICAgInRleHRUcmVhdG1lbnQiOiAi5Lik5Y+l5YWI5ZCO5a6M5pW06K+75riF77yM6ZqP5ZCO5rK/55u45Y+N5pa55ZCR5o6l5YWl77yM5pyA57uI55+t5pqC5YWx5a2Y77yb5LiN6K6p6Lev5b6E5byv5puy56C05Z2P5a2X5b2i44CCIgogICAgfSwKICAgIHsKICAgICAgImlkIjogInJldHVybi10by1jYXQtYW5kLXBlcnNvbiIsCiAgICAgICJzdGFydCI6IDExNiwKICAgICAgImVuZCI6IDEyNCwKICAgICAgImNvcHkiOiBbCiAgICAgICAgMzYsCiAgICAgICAgMzcsCiAgICAgICAgMzgKICAgICAgXSwKICAgICAgInZpc3VhbCI6ICLplZzlpLTnqb/ov4fpl63njq/lm57liLDlsI/njKvvvIzlho3mi4nov5zliLDorrjlpJrlvq7lsI/lhoXlrrnnnqzpl7TjgILop4Llr5/ogIXnlZnlnKjmmpflpITvvIzkuI3lj5jmiJDogYzlnLrkurrnianogpblg4/lrqPkvKDjgIIiLAogICAgICAic291bmQiOiAi6Z+z5pWI6YCQ5bGC5YeP5bCR77yM5Y+q55WZ5p6B5rWF55qE57q46Z2i5LiO6aKX57KS5bC+6Z+z44CCIiwKICAgICAgImZyb20iOiA2OTYwLAogICAgICAiZHVyYXRpb25JbkZyYW1lcyI6IDQ4MCwKICAgICAgInNjcmVlblRleHQiOiBbCiAgICAgICAgIuS9oOeci+WIsOeahO+8jOaYr+S4gOWPquWwj+eMq+OAgiIsCiAgICAgICAgIuWxj+W5leWPpuS4gOi+ueeahOS6uu+8jCIsCiAgICAgICAgIuaDs+S7juaXoOaVsOS4qui/meagt+eahOeerOmXtOmHjO+8jCIKICAgICAgXSwKICAgICAgInRleHRUcmVhdG1lbnQiOiAi56ys5LiJ5Y2B5YWt5Y+l6Z2g6L+R54yr77yM56ys5LiJ5Y2B5LiD5Y+l6ZqP5ouJ6L+c77yM56ys5LiJ5Y2B5YWr5Y+l5rK/5YaF5a65556s6Ze055qE5pa55ZCR57yT57yT5bGV5byA44CCIgogICAgfSwKICAgIHsKICAgICAgImlkIjogImVuZGluZyIsCiAgICAgICJzdGFydCI6IDEyNCwKICAgICAgImVuZCI6IDEzMCwKICAgICAgImNvcHkiOiBbCiAgICAgICAgMzksCiAgICAgICAgNDAKICAgICAgXSwKICAgICAgInZpc3VhbCI6ICLpopfnspLmuJDmuJDmlLbmnZ/vvIzph43lm57mnIDliJ3mhL/mhI/lgZzkvY/nmoTnnqzpl7TjgILmnIDnu4jlronlrprvvIzlkbzlupTlvIDlnLrigJzlgZzkuIvigJ3vvJsxMjguOOKAkzEzMOenkuS4jeaWsOWinuS/oeaBr+OAgiIsCiAgICAgICJzb3VuZCI6ICLkuIDkuKrlhYvliLbnmoTmlLbmnZ/pn7PvvIzkuYvlkI7kuI3mlrDlop7pn7PmlYjvvIzkv53nlZnljp/pn7Povajnu5PlsL7jgIIiLAogICAgICAiZnJvbSI6IDc0NDAsCiAgICAgICJkdXJhdGlvbkluRnJhbWVzIjogMzYwLAogICAgICAic2NyZWVuVGV4dCI6IFsKICAgICAgICAi5om+5Yiw6K6p5Lq65oS/5oSP55WZ5LiL55qE55CG55Sx44CCIiwKICAgICAgICAi6L+Z77yM5bCx5piv5paw5aqS5L2T6L+Q6JCl44CCIgogICAgICBdLAogICAgICAidGV4dFRyZWF0bWVudCI6ICLnrKzkuInljYHkuZ3lj6XlhYjlrozmlbTlh7rnjrDvvIznrKzlm5vljYHlj6XlsYXkuK3okL3lrprvvIwxMjguOOenkuWQjueos+WumuS/neaMgeiHs+e7k+adn+OAgiIKICAgIH0KICBdCn0K",
      "parsed": {
        "status": "approved-script-awaiting-style-review",
        "copyApproved": true,
        "scriptApproved": true,
        "assetsAndStyleApproved": false,
        "fullEditStarted": false,
        "title": "一颗红心，去了哪里？",
        "fps": 60,
        "width": 1920,
        "height": 1080,
        "durationInFrames": 7800,
        "durationSeconds": 130,
        "voiceover": false,
        "approvedCopyArtifact": "copy-draft-r2.md",
        "approvedCopyUnits": [
          "你以为，他上班只是在刷手机。",
          "其实，他在研究你为什么停下。",
          "这份工作，叫新媒体运营。",
          "你正准备，把手机收起来。",
          "一只小猫，突然探进画面。",
          "它歪了歪头。",
          "你停住了。",
          "五秒。",
          "看完，又看了一遍。",
          "顺手，点亮一颗红心。",
          "然后，划走。",
          "视频过去了。",
          "你的反应，留下了。",
          "刚才那几秒，去了哪里？",
          "停留、重看、点赞……",
          "它们被平台记录，变成信号。",
          "成为推荐的参考。",
          "运营看到的，是汇总后的反馈。",
          "五秒、两秒、看到最后。",
          "当成千上万次停留汇在一起，",
          "零散的动作，慢慢显出轮廓。",
          "哪里留住了人？",
          "哪里，大家突然离开？",
          "运营，就在这片数据洪流里，",
          "寻找那些反复出现的变化。",
          "是小猫歪头的那一下？",
          "还是刚刚好的节奏？",
          "数字给出线索。",
          "原因，还要回到内容里验证。",
          "于是，下一条内容，",
          "换了一个开头，",
          "留长了一个瞬间。",
          "再等一轮，真实的回应。",
          "内容，影响着你的停留。",
          "你的停留，也在影响内容。",
          "你看到的，是一只小猫。",
          "屏幕另一边的人，",
          "想从无数个这样的瞬间里，",
          "找到让人愿意留下的理由。",
          "这，就是新媒体运营。"
        ],
        "reference": {
          "uploadedFile": "Iwanau-Vibe知识大赏_《运气的形状》本视...-20261022_092444.mp4",
          "sha256": "31444f8f66fd764c608ed393a6d2e54e62d3ade1925c3b9d2d482d0461ebd3dd",
          "sizeBytes": 11767133,
          "videoSeconds": 130,
          "audioSeconds": 130.007007,
          "independentMusicStemAvailable": false,
          "userIdentifiedOriginalMusicUrl": "https://music.163.com/song?id=3451028893",
          "userSuppliedMusicAssetAvailable": true,
          "userSuppliedMusicSha256": "d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59",
          "referenceTimeToMusicTimeOffsetSeconds": 0.048
        },
        "timingNotes": "All timings are editorial proposals, not rendered or exact verified music beat markers. The approved screen copy is unchanged.",
        "literalPause": {
          "from": 1080,
          "durationInFrames": 300
        },
        "finalStableHold": {
          "from": 7728,
          "durationInFrames": 72
        },
        "shots": [
          {
            "id": "hook",
            "start": 0,
            "end": 9,
            "copy": [
              1,
              2,
              3
            ],
            "visual": "暗处一部象牙色手机居中，内容轻轻经过；滑动突然停住，镜头靠近。同一物件带出职业，不另开标题卡。",
            "sound": "两次轻纸擦，停住时一个短促低音。开场不连续重击。",
            "from": 0,
            "durationInFrames": 540,
            "screenText": [
              "你以为，他上班只是在刷手机。",
              "其实，他在研究你为什么停下。",
              "这份工作，叫新媒体运营。"
            ],
            "textTreatment": "第一句随滑动进入；第二句中的“停下”真正停在画心；第三句完整读清后将职业名收至上角。"
          },
          {
            "id": "cat-interrupts",
            "start": 9,
            "end": 16,
            "copy": [
              4,
              5
            ],
            "visual": "手机向暗处下沉，一只暖白、有体积和柔和阴影的小猫从原画框探头，打断收手机的动作。",
            "sound": "衣料式轻擦，再给一次极轻触碰。参考音轨10–16秒较弱，保留空间。",
            "from": 540,
            "durationInFrames": 420,
            "screenText": [
              "你正准备，把手机收起来。",
              "一只小猫，突然探进画面。"
            ],
            "textTreatment": "第四句随手机下沉，第五句在小猫出现后于稳定区域显现。"
          },
          {
            "id": "five-second-pause",
            "start": 16,
            "end": 25,
            "copy": [
              6,
              7,
              8
            ],
            "visual": "小猫轻轻歪头。18.0–23.0秒真实停留五秒，主体基本安定，仅细光环缓慢走完；23秒后才显示“五秒。”。",
            "sound": "歪头一个柔和小音。真实五秒停留期间不新增音效，由音乐、主体细微呼吸和静止承担意味。",
            "from": 960,
            "durationInFrames": 540,
            "screenText": [
              "它歪了歪头。",
              "你停住了。",
              "五秒。"
            ],
            "textTreatment": "第六句配合歪头，第七句随停住出现并保持。真实五秒后再显示第八句，不新增倒计时台词。"
          },
          {
            "id": "rewatch-heart",
            "start": 25,
            "end": 31,
            "copy": [
              9,
              10
            ],
            "visual": "猫的动作回到起点再发生一次，浅重影表达重看；一枚低饱和朱红心亮起，随后留在原处。",
            "sound": "一次极轻反向扫频、一次柔软心跳式落点。红心只亮一次。",
            "from": 1500,
            "durationInFrames": 360,
            "screenText": [
              "看完，又看了一遍。",
              "顺手，点亮一颗红心。"
            ],
            "textTreatment": "第九句先完整读清，再沿回环路径移动；第十句随红心落定。"
          },
          {
            "id": "swipe-leaves-trace",
            "start": 31,
            "end": 39,
            "copy": [
              11,
              12,
              13,
              14
            ],
            "visual": "31–34秒：整个猫视频被划走，红心却缩成小点留下。视频内容与行为反应第一次分离；镜头追向留下的小点。",
            "sound": "利用原音轨31.65–33.78秒较密集瞬态承接短扫与落定；不在已有冲击上再堆重击，后半迅速收声。",
            "from": 1860,
            "durationInFrames": 480,
            "screenText": [
              "然后，划走。",
              "视频过去了。",
              "你的反应，留下了。",
              "刚才那几秒，去了哪里？"
            ],
            "textTreatment": "第十一句被划动带走，第十二句跟随视频退去，第十三句留在原处，第十四句随镜头追入慢慢显现。"
          },
          {
            "id": "actions-become-signals",
            "start": 39,
            "end": 48,
            "copy": [
              15,
              16,
              17
            ],
            "visual": "红心点与停留、重看的符号化为细颗粒，接入已有大量颗粒的分支网络；不是一颗红心独自触发一个推荐结果。",
            "sound": "三种极轻颗粒质感逐渐合拢，可借44–46秒原曲较强处完成聚合，不使用“推荐成功”提示声。",
            "from": 2340,
            "durationInFrames": 540,
            "screenText": [
              "停留、重看、点赞……",
              "它们被平台记录，变成信号。",
              "成为推荐的参考。"
            ],
            "textTreatment": "第十五句完整显示后再拆为三条线上的词；第十六句随汇入显现，第十七句稳定落在网络旁。"
          },
          {
            "id": "aggregate-feedback",
            "start": 48,
            "end": 56,
            "copy": [
              18,
              19
            ],
            "visual": "镜头越过一层朦胧纸面。行为点先合并成总体痕迹，再进入运营观察区域；画面不保留可追踪的个人身份。",
            "sound": "密集颗粒收成一次细腻聚合声，随后安静。",
            "from": 2880,
            "durationInFrames": 480,
            "screenText": [
              "运营看到的，是汇总后的反馈。",
              "五秒、两秒、看到最后。"
            ],
            "textTreatment": "“汇总后的反馈”获得空间强调；第十九句的三个部分对应三组不同长度痕迹，保持阅读顺序。"
          },
          {
            "id": "river-takes-shape",
            "start": 56,
            "end": 64,
            "copy": [
              20,
              21
            ],
            "visual": "镜头拉远，原先的痕迹只是数据河流的一角。大量金白珠点沿线流动，渐渐显出总体趋势，不套用与本题无关的钟形分布。",
            "sound": "颗粒稍加密，再以一个温和长音收拢。",
            "from": 3360,
            "durationInFrames": 480,
            "screenText": [
              "当成千上万次停留汇在一起，",
              "零散的动作，慢慢显出轮廓。"
            ],
            "textTreatment": "第二十句伴随拉远；第二十一句先完整读清，再以“零散”的分散和“轮廓”的成形呼应画面。"
          },
          {
            "id": "where-viewers-stay",
            "start": 64,
            "end": 71,
            "copy": [
              22,
              23
            ],
            "visual": "镜头沿同一条总体曲线靠近停留区，再移向回落区。只用相对形状说明差异，不虚构真实账号的百分比。",
            "sound": "两个有间隔的轻触，第二个更轻；没有警报或失败音。",
            "from": 3840,
            "durationInFrames": 420,
            "screenText": [
              "哪里留住了人？",
              "哪里，大家突然离开？"
            ],
            "textTreatment": "两句问题分别落在相应观察区附近，完整读清才移开；“哪里”负责引导视线。"
          },
          {
            "id": "observe-repetition",
            "start": 71,
            "end": 78,
            "copy": [
              24,
              25
            ],
            "visual": "暗处出现观察者剪贴轮廓，面对数据河流。一个细线观察环沿流动寻找重复形状，主角仍是反馈而非人物脸部。",
            "sound": "一道细纸擦，然后降低音效密度，为下一段留空间。",
            "from": 4260,
            "durationInFrames": 420,
            "screenText": [
              "运营，就在这片数据洪流里，",
              "寻找那些反复出现的变化。"
            ],
            "textTreatment": "第二十四句沿河流底部显现；第二十五句的“反复出现”与重复形状呼应。"
          },
          {
            "id": "hypotheses-not-answers",
            "start": 78,
            "end": 90,
            "copy": [
              26,
              27,
              28,
              29
            ],
            "visual": "曲线中的圆点放大，重新成为小猫。歪头与节奏构成两个待验证的可能，数字线退到背景，镜头回到内容。",
            "sound": "借原音轨80–90秒的较弱区留白，仅一两次柔和提示；不用“答案揭晓”声。",
            "from": 4680,
            "durationInFrames": 720,
            "screenText": [
              "是小猫歪头的那一下？",
              "还是刚刚好的节奏？",
              "数字给出线索。",
              "原因，还要回到内容里验证。"
            ],
            "textTreatment": "两个疑问依次完整出现，不加确定性对勾；数字退为背景后，第二十九句完整稳定停留。"
          },
          {
            "id": "change-next-content",
            "start": 90,
            "end": 101,
            "copy": [
              30,
              31,
              32
            ],
            "visual": "猫画面成为有实体厚度的旧胶片。第一格被替换；一个瞬间所在的胶片段被留长，动作也真正慢下来。",
            "sound": "两次有区别的纸片移动声：换开头短，留长时柔和延展。",
            "from": 5400,
            "durationInFrames": 660,
            "screenText": [
              "于是，下一条内容，",
              "换了一个开头，",
              "留长了一个瞬间。"
            ],
            "textTreatment": "第三十句先出现；“开头”随第一格移动，“留长”靠字距和稳定时间表达，不拉坏字形。"
          },
          {
            "id": "wait-for-response",
            "start": 101,
            "end": 108,
            "copy": [
              33
            ],
            "visual": "新内容送出，先只有少量回应点，随后更多颗粒归来形成细线；等待本身成为可见的过程。",
            "sound": "一个轻发送扫声，随后撤声；回流时只补少量细颗粒。",
            "from": 6060,
            "durationInFrames": 420,
            "screenText": [
              "再等一轮，真实的回应。"
            ],
            "textTreatment": "第三十三句保持完整稳定，变化发生在周围，不用文字弹跳填补等待。"
          },
          {
            "id": "mutual-influence",
            "start": 108,
            "end": 116,
            "copy": [
              34,
              35
            ],
            "visual": "送出的内容线与返回的反馈线逐渐弯成同一个环，前面的路径连续闭合，不突然切入新示意图。",
            "sound": "两个相互回应的柔和音色，闭环时一个轻落点。",
            "from": 6480,
            "durationInFrames": 480,
            "screenText": [
              "内容，影响着你的停留。",
              "你的停留，也在影响内容。"
            ],
            "textTreatment": "两句先后完整读清，随后沿相反方向接入，最终短暂共存；不让路径弯曲破坏字形。"
          },
          {
            "id": "return-to-cat-and-person",
            "start": 116,
            "end": 124,
            "copy": [
              36,
              37,
              38
            ],
            "visual": "镜头穿过闭环回到小猫，再拉远到许多微小内容瞬间。观察者留在暗处，不变成职场人物肖像宣传。",
            "sound": "音效逐层减少，只留极浅的纸面与颗粒尾音。",
            "from": 6960,
            "durationInFrames": 480,
            "screenText": [
              "你看到的，是一只小猫。",
              "屏幕另一边的人，",
              "想从无数个这样的瞬间里，"
            ],
            "textTreatment": "第三十六句靠近猫，第三十七句随拉远，第三十八句沿内容瞬间的方向缓缓展开。"
          },
          {
            "id": "ending",
            "start": 124,
            "end": 130,
            "copy": [
              39,
              40
            ],
            "visual": "颗粒渐渐收束，重回最初愿意停住的瞬间。最终安定，呼应开场“停下”；128.8–130秒不新增信息。",
            "sound": "一个克制的收束音，之后不新增音效，保留原音轨结尾。",
            "from": 7440,
            "durationInFrames": 360,
            "screenText": [
              "找到让人愿意留下的理由。",
              "这，就是新媒体运营。"
            ],
            "textTreatment": "第三十九句先完整出现，第四十句居中落定，128.8秒后稳定保持至结束。"
          }
        ]
      }
    },
    "script": {
      "path": "production/new-media-v2/script.md",
      "mediaType": "text/markdown",
      "byteLength": 11763,
      "sha256": "f507b5341398b24846ac6e067d34547b1ebd397c96443020a78be254a257a3a6",
      "text": "# 节点 2｜逐镜脚本提案：一颗红心，去了哪里？\n\n状态：此逐镜脚本已获确认。用户随后明确要求动画放慢、恢复原版排版、纯黑与深色波点交替并直接生成成片，现已授权完整制作。下文保留原批准脚本；实际组内字幕分配与制作说明见 `final-production.md` 和 `src/new-media-v2/final/timeline.json`，文案逐字保持。\n\n拟定成片 **2 分 10 秒**，1920×1080、16:9、60fps；130秒共7800帧。**无配音**。使用已经确认的40个短段、336个汉字，不增删台词。16组段落中保留连续运动，不拆成40张同样的文字卡片。\n\n## 来自实际参考片的设计依据\n\n已读取130秒参考片并跨片抽帧、连续采样、测量声音。视觉是近黑／暖褐暗底、米白与暖金宋／明体类字、有体积的物件、细金线图与点流，靠具象物转成抽象关系、局部生长与信息密度变化推进。具体字体名尚不能确认；实际字体与贴图需在节点3给用户看样式。\n\n参考音轨有约113 BPM的稳定周期候选，但未进行可靠人工校拍。20–50秒能量较强，80–90秒较弱，100秒后回升。本脚本把划走与反应分离放31–39秒，把“线索／验证”的留白放78–90秒。区间是编辑设计，不冒充原片精确音乐小节。\n\n详细依据见 [视觉分析](reference-visual-analysis.md) 与 [音频分析](reference-audio-analysis.md)。\n\n## 贯穿全片的关系\n\n手机 → 小猫 → 五秒停留 → 红心留下 → 行为信号 → 先汇总、后观察 → 数据河流与曲线 → 回到内容验证 → 新内容与新反馈闭环 → 回到小猫和观众。\n\n字幕不是额外的一层旁白稿：每个短段先完整可读，才允许分散、随线移动或退场。重要句可成为画面主体，解释句在稳定区域显示。无配音场景必须保留足够字高与稳定阅读时间，不机械照抄参考片较小的底部文字。所有表格数字、曲线与动作只作本故事的示意，不声称是真实账号统计。\n\n## 逐段脚本\n\n### 01 · 00:00–00:09 · 文案 1–3\n\n**屏幕文字**\n\n> 你以为，他上班只是在刷手机。\n>\n> 其实，他在研究你为什么停下。\n>\n> 这份工作，叫新媒体运营。\n\n**画面与动作**：暗处一部象牙色手机居中，内容轻轻经过；滑动突然停住，镜头靠近。同一物件带出职业，不另开标题卡。\n\n**文字编排**：第一句随滑动进入；第二句中的“停下”真正停在画心；第三句完整读清后将职业名收至上角。\n\n**声音**：两次轻纸擦，停住时一个短促低音。开场不连续重击。\n\n### 02 · 00:09–00:16 · 文案 4–5\n\n**屏幕文字**\n\n> 你正准备，把手机收起来。\n>\n> 一只小猫，突然探进画面。\n\n**画面与动作**：手机向暗处下沉，一只暖白、有体积和柔和阴影的小猫从原画框探头，打断收手机的动作。\n\n**文字编排**：第四句随手机下沉，第五句在小猫出现后于稳定区域显现。\n\n**声音**：衣料式轻擦，再给一次极轻触碰。参考音轨10–16秒较弱，保留空间。\n\n### 03 · 00:16–00:25 · 文案 6–8\n\n**屏幕文字**\n\n> 它歪了歪头。\n>\n> 你停住了。\n>\n> 五秒。\n\n**画面与动作**：小猫轻轻歪头。18.0–23.0秒真实停留五秒，主体基本安定，仅细光环缓慢走完；23秒后才显示“五秒。”。\n\n**文字编排**：第六句配合歪头，第七句随停住出现并保持。真实五秒后再显示第八句，不新增倒计时台词。\n\n**声音**：歪头一个柔和小音。真实五秒停留期间不新增音效，由音乐、主体细微呼吸和静止承担意味。\n\n### 04 · 00:25–00:31 · 文案 9–10\n\n**屏幕文字**\n\n> 看完，又看了一遍。\n>\n> 顺手，点亮一颗红心。\n\n**画面与动作**：猫的动作回到起点再发生一次，浅重影表达重看；一枚低饱和朱红心亮起，随后留在原处。\n\n**文字编排**：第九句先完整读清，再沿回环路径移动；第十句随红心落定。\n\n**声音**：一次极轻反向扫频、一次柔软心跳式落点。红心只亮一次。\n\n### 05 · 00:31–00:39 · 文案 11–14\n\n**屏幕文字**\n\n> 然后，划走。\n>\n> 视频过去了。\n>\n> 你的反应，留下了。\n>\n> 刚才那几秒，去了哪里？\n\n**画面与动作**：31–34秒：整个猫视频被划走，红心却缩成小点留下。视频内容与行为反应第一次分离；镜头追向留下的小点。\n\n**文字编排**：第十一句被划动带走，第十二句跟随视频退去，第十三句留在原处，第十四句随镜头追入慢慢显现。\n\n**声音**：利用原音轨31.65–33.78秒较密集瞬态承接短扫与落定；不在已有冲击上再堆重击，后半迅速收声。\n\n### 06 · 00:39–00:48 · 文案 15–17\n\n**屏幕文字**\n\n> 停留、重看、点赞……\n>\n> 它们被平台记录，变成信号。\n>\n> 成为推荐的参考。\n\n**画面与动作**：红心点与停留、重看的符号化为细颗粒，接入已有大量颗粒的分支网络；不是一颗红心独自触发一个推荐结果。\n\n**文字编排**：第十五句完整显示后再拆为三条线上的词；第十六句随汇入显现，第十七句稳定落在网络旁。\n\n**声音**：三种极轻颗粒质感逐渐合拢，可借44–46秒原曲较强处完成聚合，不使用“推荐成功”提示声。\n\n### 07 · 00:48–00:56 · 文案 18–19\n\n**屏幕文字**\n\n> 运营看到的，是汇总后的反馈。\n>\n> 五秒、两秒、看到最后。\n\n**画面与动作**：镜头越过一层朦胧纸面。行为点先合并成总体痕迹，再进入运营观察区域；画面不保留可追踪的个人身份。\n\n**文字编排**：“汇总后的反馈”获得空间强调；第十九句的三个部分对应三组不同长度痕迹，保持阅读顺序。\n\n**声音**：密集颗粒收成一次细腻聚合声，随后安静。\n\n### 08 · 00:56–01:04 · 文案 20–21\n\n**屏幕文字**\n\n> 当成千上万次停留汇在一起，\n>\n> 零散的动作，慢慢显出轮廓。\n\n**画面与动作**：镜头拉远，原先的痕迹只是数据河流的一角。大量金白珠点沿线流动，渐渐显出总体趋势，不套用与本题无关的钟形分布。\n\n**文字编排**：第二十句伴随拉远；第二十一句先完整读清，再以“零散”的分散和“轮廓”的成形呼应画面。\n\n**声音**：颗粒稍加密，再以一个温和长音收拢。\n\n### 09 · 01:04–01:11 · 文案 22–23\n\n**屏幕文字**\n\n> 哪里留住了人？\n>\n> 哪里，大家突然离开？\n\n**画面与动作**：镜头沿同一条总体曲线靠近停留区，再移向回落区。只用相对形状说明差异，不虚构真实账号的百分比。\n\n**文字编排**：两句问题分别落在相应观察区附近，完整读清才移开；“哪里”负责引导视线。\n\n**声音**：两个有间隔的轻触，第二个更轻；没有警报或失败音。\n\n### 10 · 01:11–01:18 · 文案 24–25\n\n**屏幕文字**\n\n> 运营，就在这片数据洪流里，\n>\n> 寻找那些反复出现的变化。\n\n**画面与动作**：暗处出现观察者剪贴轮廓，面对数据河流。一个细线观察环沿流动寻找重复形状，主角仍是反馈而非人物脸部。\n\n**文字编排**：第二十四句沿河流底部显现；第二十五句的“反复出现”与重复形状呼应。\n\n**声音**：一道细纸擦，然后降低音效密度，为下一段留空间。\n\n### 11 · 01:18–01:30 · 文案 26–29\n\n**屏幕文字**\n\n> 是小猫歪头的那一下？\n>\n> 还是刚刚好的节奏？\n>\n> 数字给出线索。\n>\n> 原因，还要回到内容里验证。\n\n**画面与动作**：曲线中的圆点放大，重新成为小猫。歪头与节奏构成两个待验证的可能，数字线退到背景，镜头回到内容。\n\n**文字编排**：两个疑问依次完整出现，不加确定性对勾；数字退为背景后，第二十九句完整稳定停留。\n\n**声音**：借原音轨80–90秒的较弱区留白，仅一两次柔和提示；不用“答案揭晓”声。\n\n### 12 · 01:30–01:41 · 文案 30–32\n\n**屏幕文字**\n\n> 于是，下一条内容，\n>\n> 换了一个开头，\n>\n> 留长了一个瞬间。\n\n**画面与动作**：猫画面成为有实体厚度的旧胶片。第一格被替换；一个瞬间所在的胶片段被留长，动作也真正慢下来。\n\n**文字编排**：第三十句先出现；“开头”随第一格移动，“留长”靠字距和稳定时间表达，不拉坏字形。\n\n**声音**：两次有区别的纸片移动声：换开头短，留长时柔和延展。\n\n### 13 · 01:41–01:48 · 文案 33–33\n\n**屏幕文字**\n\n> 再等一轮，真实的回应。\n\n**画面与动作**：新内容送出，先只有少量回应点，随后更多颗粒归来形成细线；等待本身成为可见的过程。\n\n**文字编排**：第三十三句保持完整稳定，变化发生在周围，不用文字弹跳填补等待。\n\n**声音**：一个轻发送扫声，随后撤声；回流时只补少量细颗粒。\n\n### 14 · 01:48–01:56 · 文案 34–35\n\n**屏幕文字**\n\n> 内容，影响着你的停留。\n>\n> 你的停留，也在影响内容。\n\n**画面与动作**：送出的内容线与返回的反馈线逐渐弯成同一个环，前面的路径连续闭合，不突然切入新示意图。\n\n**文字编排**：两句先后完整读清，随后沿相反方向接入，最终短暂共存；不让路径弯曲破坏字形。\n\n**声音**：两个相互回应的柔和音色，闭环时一个轻落点。\n\n### 15 · 01:56–02:04 · 文案 36–38\n\n**屏幕文字**\n\n> 你看到的，是一只小猫。\n>\n> 屏幕另一边的人，\n>\n> 想从无数个这样的瞬间里，\n\n**画面与动作**：镜头穿过闭环回到小猫，再拉远到许多微小内容瞬间。观察者留在暗处，不变成职场人物肖像宣传。\n\n**文字编排**：第三十六句靠近猫，第三十七句随拉远，第三十八句沿内容瞬间的方向缓缓展开。\n\n**声音**：音效逐层减少，只留极浅的纸面与颗粒尾音。\n\n### 16 · 02:04–02:10 · 文案 39–40\n\n**屏幕文字**\n\n> 找到让人愿意留下的理由。\n>\n> 这，就是新媒体运营。\n\n**画面与动作**：颗粒渐渐收束，重回最初愿意停住的瞬间。最终安定，呼应开场“停下”；128.8–130秒不新增信息。\n\n**文字编排**：第三十九句先完整出现，第四十句居中落定，128.8秒后稳定保持至结束。\n\n**声音**：一个克制的收束音，之后不新增音效，保留原音轨结尾。\n\n## 音轨复用与下一节点\n\n用户最新已直接上传并指定 `bgm.mp4`，音效由项目原创合成。文件133.07356秒，已与参考片波形对齐：参考t对应BGM t+0.048秒。节点3的10秒声音试段使用该BGM的28.048–38.048秒配原创SFX，原定画面和音效时点不变；不再使用参考片混合音轨作为音乐底，也无需等待此前网易云／B站链接访问。具体来源和SHA-256见 `music-reference.json`。\n\n原参考片与新BGM源响度都较高，最终混音要先保留余量，再叠少量原创音效。节点3已生成原创纸擦、聚合、心形触点等声音，并测量更新后试片音量；完整130秒的音效编排仍待素材风格确认后制作，不把原创SFX说成参考片自带音效。\n\n用户确认本脚本后，进入节点3：提交实际字体与字号样式、暗底材质、小猫／手机／红心贴图方向、三个关键帧和一段约10秒的动态试片（含原音轨试段与新音效），分别确认可读性、材质、动效与听感。三个节点全部确认后才开始新版整片剪辑。\n",
      "bytesBase64": "IyDoioLngrkgMu+9nOmAkOmVnOiEmuacrOaPkOahiO+8muS4gOmil+e6ouW/g++8jOWOu+S6huWTqumHjO+8nwoK54q25oCB77ya5q2k6YCQ6ZWc6ISa5pys5bey6I6356Gu6K6k44CC55So5oi36ZqP5ZCO5piO56Gu6KaB5rGC5Yqo55S75pS+5oWi44CB5oGi5aSN5Y6f54mI5o6S54mI44CB57qv6buR5LiO5rex6Imy5rOi54K55Lqk5pu/5bm255u05o6l55Sf5oiQ5oiQ54mH77yM546w5bey5o6I5p2D5a6M5pW05Yi25L2c44CC5LiL5paH5L+d55WZ5Y6f5om55YeG6ISa5pys77yb5a6e6ZmF57uE5YaF5a2X5bmV5YiG6YWN5LiO5Yi25L2c6K+05piO6KeBIGBmaW5hbC1wcm9kdWN0aW9uLm1kYCDlkowgYHNyYy9uZXctbWVkaWEtdjIvZmluYWwvdGltZWxpbmUuanNvbmDvvIzmlofmoYjpgJDlrZfkv53mjIHjgIIKCuaLn+WumuaIkOeJhyAqKjIg5YiGIDEwIOenkioq77yMMTkyMMOXMTA4MOOAgTE2OjnjgIE2MGZwc++8mzEzMOenkuWFsTc4MDDluKfjgIIqKuaXoOmFjemfsyoq44CC5L2/55So5bey57uP56Gu6K6k55qENDDkuKrnn63mrrXjgIEzMzbkuKrmsYnlrZfvvIzkuI3lop7liKDlj7Dor43jgIIxNue7hOauteiQveS4reS/neeVmei/nue7rei/kOWKqO+8jOS4jeaLhuaIkDQw5byg5ZCM5qC355qE5paH5a2X5Y2h54mH44CCCgojIyDmnaXoh6rlrp7pmYXlj4LogIPniYfnmoTorr7orqHkvp3mja4KCuW3suivu+WPljEzMOenkuWPguiAg+eJh+W5tui3qOeJh+aKveW4p+OAgei/nue7remHh+agt+OAgea1i+mHj+WjsOmfs+OAguinhuinieaYr+i/kem7ke+8j+aaluikkOaal+W6leOAgeexs+eZveS4juaalumHkeWui++8j+aYjuS9k+exu+Wtl+OAgeacieS9k+enr+eahOeJqeS7tuOAgee7humHkee6v+WbvuS4jueCuea1ge+8jOmdoOWFt+ixoeeJqei9rOaIkOaKveixoeWFs+ezu+OAgeWxgOmDqOeUn+mVv+S4juS/oeaBr+WvhuW6puWPmOWMluaOqOi/m+OAguWFt+S9k+Wtl+S9k+WQjeWwmuS4jeiDveehruiupO+8m+WunumZheWtl+S9k+S4jui0tOWbvumcgOWcqOiKgueCuTPnu5nnlKjmiLfnnIvmoLflvI/jgIIKCuWPguiAg+mfs+i9qOaciee6pjExMyBCUE3nmoTnqLPlrprlkajmnJ/lgJnpgInvvIzkvYbmnKrov5vooYzlj6/pnaDkurrlt6XmoKHmi43jgIIyMOKAkzUw56eS6IO96YeP6L6D5by677yMODDigJM5MOenkui+g+W8se+8jDEwMOenkuWQjuWbnuWNh+OAguacrOiEmuacrOaKiuWIkui1sOS4juWPjeW6lOWIhuemu+aUvjMx4oCTMznnp5LvvIzmiorigJznur/ntKLvvI/pqozor4HigJ3nmoTnlZnnmb3mlL43OOKAkzkw56eS44CC5Yy66Ze05piv57yW6L6R6K6+6K6h77yM5LiN5YaS5YWF5Y6f54mH57K+56Gu6Z+z5LmQ5bCP6IqC44CCCgror6bnu4bkvp3mja7op4EgW+inhuinieWIhuaekF0ocmVmZXJlbmNlLXZpc3VhbC1hbmFseXNpcy5tZCkg5LiOIFvpn7PpopHliIbmnpBdKHJlZmVyZW5jZS1hdWRpby1hbmFseXNpcy5tZCnjgIIKCiMjIOi0r+epv+WFqOeJh+eahOWFs+ezuwoK5omL5py6IOKGkiDlsI/njKsg4oaSIOS6lOenkuWBnOeVmSDihpIg57qi5b+D55WZ5LiLIOKGkiDooYzkuLrkv6Hlj7cg4oaSIOWFiOaxh+aAu+OAgeWQjuinguWvnyDihpIg5pWw5o2u5rKz5rWB5LiO5puy57q/IOKGkiDlm57liLDlhoXlrrnpqozor4Eg4oaSIOaWsOWGheWuueS4juaWsOWPjemmiOmXreeOryDihpIg5Zue5Yiw5bCP54yr5ZKM6KeC5LyX44CCCgrlrZfluZXkuI3mmK/pop3lpJbnmoTkuIDlsYLml4Hnmb3nqL/vvJrmr4/kuKrnn63mrrXlhYjlrozmlbTlj6/or7vvvIzmiY3lhYHorrjliIbmlaPjgIHpmo/nur/np7vliqjmiJbpgIDlnLrjgILph43opoHlj6Xlj6/miJDkuLrnlLvpnaLkuLvkvZPvvIzop6Pph4rlj6XlnKjnqLPlrprljLrln5/mmL7npLrjgILml6DphY3pn7PlnLrmma/lv4Xpobvkv53nlZnotrPlpJ/lrZfpq5jkuI7nqLPlrprpmIXor7vml7bpl7TvvIzkuI3mnLrmorDnhafmioTlj4LogIPniYfovoPlsI/nmoTlupXpg6jmloflrZfjgILmiYDmnInooajmoLzmlbDlrZfjgIHmm7Lnur/kuI7liqjkvZzlj6rkvZzmnKzmlYXkuovnmoTnpLrmhI/vvIzkuI3lo7Dnp7DmmK/nnJ/lrp7otKblj7fnu5/orqHjgIIKCiMjIOmAkOauteiEmuacrAoKIyMjIDAxIMK3IDAwOjAw4oCTMDA6MDkgwrcg5paH5qGIIDHigJMzCgoqKuWxj+W5leaWh+WtlyoqCgo+IOS9oOS7peS4uu+8jOS7luS4iuePreWPquaYr+WcqOWIt+aJi+acuuOAggo+Cj4g5YW25a6e77yM5LuW5Zyo56CU56m25L2g5Li65LuA5LmI5YGc5LiL44CCCj4KPiDov5nku73lt6XkvZzvvIzlj6vmlrDlqpLkvZPov5DokKXjgIIKCioq55S76Z2i5LiO5Yqo5L2cKirvvJrmmpflpITkuIDpg6josaHniZnoibLmiYvmnLrlsYXkuK3vvIzlhoXlrrnovbvovbvnu4/ov4fvvJvmu5HliqjnqoHnhLblgZzkvY/vvIzplZzlpLTpnaDov5HjgILlkIzkuIDnianku7bluKblh7rogYzkuJrvvIzkuI3lj6blvIDmoIfpopjljaHjgIIKCioq5paH5a2X57yW5o6SKirvvJrnrKzkuIDlj6Xpmo/mu5Hliqjov5vlhaXvvJvnrKzkuozlj6XkuK3nmoTigJzlgZzkuIvigJ3nnJ/mraPlgZzlnKjnlLvlv4PvvJvnrKzkuInlj6XlrozmlbTor7vmuIXlkI7lsIbogYzkuJrlkI3mlLboh7PkuIrop5LjgIIKCioq5aOw6Z+zKirvvJrkuKTmrKHovbvnurjmk6bvvIzlgZzkvY/ml7bkuIDkuKrnn63kv4PkvY7pn7PjgILlvIDlnLrkuI3ov57nu63ph43lh7vjgIIKCiMjIyAwMiDCtyAwMDowOeKAkzAwOjE2IMK3IOaWh+ahiCA04oCTNQoKKirlsY/luZXmloflrZcqKgoKPiDkvaDmraPlh4blpIfvvIzmiormiYvmnLrmlLbotbfmnaXjgIIKPgo+IOS4gOWPquWwj+eMq++8jOeqgeeEtuaOoui/m+eUu+mdouOAggoKKirnlLvpnaLkuI7liqjkvZwqKu+8muaJi+acuuWQkeaal+WkhOS4i+ayie+8jOS4gOWPquaalueZveOAgeacieS9k+enr+WSjOaflOWSjOmYtOW9seeahOWwj+eMq+S7juWOn+eUu+ahhuaOouWktO+8jOaJk+aWreaUtuaJi+acuueahOWKqOS9nOOAggoKKirmloflrZfnvJbmjpIqKu+8muesrOWbm+WPpemaj+aJi+acuuS4i+ayie+8jOesrOS6lOWPpeWcqOWwj+eMq+WHuueOsOWQjuS6jueos+WumuWMuuWfn+aYvueOsOOAggoKKirlo7Dpn7MqKu+8muiho+aWmeW8j+i9u+aTpu+8jOWGjee7meS4gOasoeaegei9u+inpueisOOAguWPguiAg+mfs+i9qDEw4oCTMTbnp5LovoPlvLHvvIzkv53nlZnnqbrpl7TjgIIKCiMjIyAwMyDCtyAwMDoxNuKAkzAwOjI1IMK3IOaWh+ahiCA24oCTOAoKKirlsY/luZXmloflrZcqKgoKPiDlroPmrarkuobmrarlpLTjgIIKPgo+IOS9oOWBnOS9j+S6huOAggo+Cj4g5LqU56eS44CCCgoqKueUu+mdouS4juWKqOS9nCoq77ya5bCP54yr6L276L275q2q5aS044CCMTguMOKAkzIzLjDnp5LnnJ/lrp7lgZznlZnkupTnp5LvvIzkuLvkvZPln7rmnKzlronlrprvvIzku4Xnu4blhYnnjq/nvJPmhaLotbDlrozvvJsyM+enkuWQjuaJjeaYvuekuuKAnOS6lOenkuOAguKAneOAggoKKirmloflrZfnvJbmjpIqKu+8muesrOWFreWPpemFjeWQiOatquWktO+8jOesrOS4g+WPpemaj+WBnOS9j+WHuueOsOW5tuS/neaMgeOAguecn+WunuS6lOenkuWQjuWGjeaYvuekuuesrOWFq+WPpe+8jOS4jeaWsOWinuWAkuiuoeaXtuWPsOivjeOAggoKKirlo7Dpn7MqKu+8muatquWktOS4gOS4quaflOWSjOWwj+mfs+OAguecn+WunuS6lOenkuWBnOeVmeacn+mXtOS4jeaWsOWinumfs+aViO+8jOeUsemfs+S5kOOAgeS4u+S9k+e7huW+ruWRvOWQuOWSjOmdmeatouaJv+aLheaEj+WRs+OAggoKIyMjIDA0IMK3IDAwOjI14oCTMDA6MzEgwrcg5paH5qGIIDnigJMxMAoKKirlsY/luZXmloflrZcqKgoKPiDnnIvlrozvvIzlj4jnnIvkuobkuIDpgY3jgIIKPgo+IOmhuuaJi++8jOeCueS6ruS4gOmil+e6ouW/g+OAggoKKirnlLvpnaLkuI7liqjkvZwqKu+8mueMq+eahOWKqOS9nOWbnuWIsOi1t+eCueWGjeWPkeeUn+S4gOasoe+8jOa1hemHjeW9seihqOi+vumHjeeci++8m+S4gOaemuS9jumlseWSjOacsee6ouW/g+S6rui1t++8jOmaj+WQjueVmeWcqOWOn+WkhOOAggoKKirmloflrZfnvJbmjpIqKu+8muesrOS5neWPpeWFiOWujOaVtOivu+a4he+8jOWGjeayv+WbnueOr+i3r+W+hOenu+WKqO+8m+esrOWNgeWPpemaj+e6ouW/g+iQveWumuOAggoKKirlo7Dpn7MqKu+8muS4gOasoeaegei9u+WPjeWQkeaJq+mikeOAgeS4gOasoeaflOi9r+W/g+i3s+W8j+iQveeCueOAgue6ouW/g+WPquS6ruS4gOasoeOAggoKIyMjIDA1IMK3IDAwOjMx4oCTMDA6Mzkgwrcg5paH5qGIIDEx4oCTMTQKCioq5bGP5bmV5paH5a2XKioKCj4g54S25ZCO77yM5YiS6LWw44CCCj4KPiDop4bpopHov4fljrvkuobjgIIKPgo+IOS9oOeahOWPjeW6lO+8jOeVmeS4i+S6huOAggo+Cj4g5Yia5omN6YKj5Yeg56eS77yM5Y675LqG5ZOq6YeM77yfCgoqKueUu+mdouS4juWKqOS9nCoq77yaMzHigJMzNOenku+8muaVtOS4queMq+inhumikeiiq+WIkui1sO+8jOe6ouW/g+WNtOe8qeaIkOWwj+eCueeVmeS4i+OAguinhumikeWGheWuueS4juihjOS4uuWPjeW6lOesrOS4gOasoeWIhuemu++8m+mVnOWktOi/veWQkeeVmeS4i+eahOWwj+eCueOAggoKKirmloflrZfnvJbmjpIqKu+8muesrOWNgeS4gOWPpeiiq+WIkuWKqOW4pui1sO+8jOesrOWNgeS6jOWPpei3n+maj+inhumikemAgOWOu++8jOesrOWNgeS4ieWPpeeVmeWcqOWOn+WkhO+8jOesrOWNgeWbm+WPpemaj+mVnOWktOi/veWFpeaFouaFouaYvueOsOOAggoKKirlo7Dpn7MqKu+8muWIqeeUqOWOn+mfs+i9qDMxLjY14oCTMzMuNzjnp5LovoPlr4bpm4bnnqzmgIHmib/mjqXnn63miavkuI7okL3lrprvvJvkuI3lnKjlt7LmnInlhrLlh7vkuIrlho3loIbph43lh7vvvIzlkI7ljYrov4XpgJ/mlLblo7DjgIIKCiMjIyAwNiDCtyAwMDozOeKAkzAwOjQ4IMK3IOaWh+ahiCAxNeKAkzE3CgoqKuWxj+W5leaWh+WtlyoqCgo+IOWBnOeVmeOAgemHjeeci+OAgeeCuei1nuKApuKApgo+Cj4g5a6D5Lus6KKr5bmz5Y+w6K6w5b2V77yM5Y+Y5oiQ5L+h5Y+344CCCj4KPiDmiJDkuLrmjqjojZDnmoTlj4LogIPjgIIKCioq55S76Z2i5LiO5Yqo5L2cKirvvJrnuqLlv4PngrnkuI7lgZznlZnjgIHph43nnIvnmoTnrKblj7fljJbkuLrnu4bpopfnspLvvIzmjqXlhaXlt7LmnInlpKfph4/popfnspLnmoTliIbmlK/nvZHnu5zvvJvkuI3mmK/kuIDpopfnuqLlv4Pni6zoh6rop6blj5HkuIDkuKrmjqjojZDnu5PmnpzjgIIKCioq5paH5a2X57yW5o6SKirvvJrnrKzljYHkupTlj6XlrozmlbTmmL7npLrlkI7lho3mi4bkuLrkuInmnaHnur/kuIrnmoTor43vvJvnrKzljYHlha3lj6Xpmo/msYflhaXmmL7njrDvvIznrKzljYHkuIPlj6XnqLPlrprokL3lnKjnvZHnu5zml4HjgIIKCioq5aOw6Z+zKirvvJrkuInnp43mnoHovbvpopfnspLotKjmhJ/pgJDmuJDlkIjmi6LvvIzlj6/lgJ80NOKAkzQ256eS5Y6f5puy6L6D5by65aSE5a6M5oiQ6IGa5ZCI77yM5LiN5L2/55So4oCc5o6o6I2Q5oiQ5Yqf4oCd5o+Q56S65aOw44CCCgojIyMgMDcgwrcgMDA6NDjigJMwMDo1NiDCtyDmlofmoYggMTjigJMxOQoKKirlsY/luZXmloflrZcqKgoKPiDov5DokKXnnIvliLDnmoTvvIzmmK/msYfmgLvlkI7nmoTlj43ppojjgIIKPgo+IOS6lOenkuOAgeS4pOenkuOAgeeci+WIsOacgOWQjuOAggoKKirnlLvpnaLkuI7liqjkvZwqKu+8mumVnOWktOi2iui/h+S4gOWxguacpuiDp+e6uOmdouOAguihjOS4uueCueWFiOWQiOW5tuaIkOaAu+S9k+eXlei/ue+8jOWGjei/m+WFpei/kOiQpeinguWvn+WMuuWfn++8m+eUu+mdouS4jeS/neeVmeWPr+i/vei4queahOS4quS6uui6q+S7veOAggoKKirmloflrZfnvJbmjpIqKu+8muKAnOaxh+aAu+WQjueahOWPjemmiOKAneiOt+W+l+epuumXtOW8uuiwg++8m+esrOWNgeS5neWPpeeahOS4ieS4qumDqOWIhuWvueW6lOS4iee7hOS4jeWQjOmVv+W6pueXlei/ue+8jOS/neaMgemYheivu+mhuuW6j+OAggoKKirlo7Dpn7MqKu+8muWvhumbhumil+eykuaUtuaIkOS4gOasoee7huiFu+iBmuWQiOWjsO+8jOmaj+WQjuWuiemdmeOAggoKIyMjIDA4IMK3IDAwOjU24oCTMDE6MDQgwrcg5paH5qGIIDIw4oCTMjEKCioq5bGP5bmV5paH5a2XKioKCj4g5b2T5oiQ5Y2D5LiK5LiH5qyh5YGc55WZ5rGH5Zyo5LiA6LW377yMCj4KPiDpm7bmlaPnmoTliqjkvZzvvIzmhaLmhaLmmL7lh7rova7lu5PjgIIKCioq55S76Z2i5LiO5Yqo5L2cKirvvJrplZzlpLTmi4nov5zvvIzljp/lhYjnmoTnl5Xov7nlj6rmmK/mlbDmja7msrPmtYHnmoTkuIDop5LjgILlpKfph4/ph5Hnmb3nj6Dngrnmsr/nur/mtYHliqjvvIzmuJDmuJDmmL7lh7rmgLvkvZPotovlir/vvIzkuI3lpZfnlKjkuI7mnKzpopjml6DlhbPnmoTpkp/lvaLliIbluIPjgIIKCioq5paH5a2X57yW5o6SKirvvJrnrKzkuozljYHlj6XkvLTpmo/mi4nov5zvvJvnrKzkuozljYHkuIDlj6XlhYjlrozmlbTor7vmuIXvvIzlho3ku6XigJzpm7bmlaPigJ3nmoTliIbmlaPlkozigJzova7lu5PigJ3nmoTmiJDlvaLlkbzlupTnlLvpnaLjgIIKCioq5aOw6Z+zKirvvJrpopfnspLnqI3liqDlr4bvvIzlho3ku6XkuIDkuKrmuKnlkozplb/pn7PmlLbmi6LjgIIKCiMjIyAwOSDCtyAwMTowNOKAkzAxOjExIMK3IOaWh+ahiCAyMuKAkzIzCgoqKuWxj+W5leaWh+WtlyoqCgo+IOWTqumHjOeVmeS9j+S6huS6uu+8nwo+Cj4g5ZOq6YeM77yM5aSn5a6256qB54S256a75byA77yfCgoqKueUu+mdouS4juWKqOS9nCoq77ya6ZWc5aS05rK/5ZCM5LiA5p2h5oC75L2T5puy57q/6Z2g6L+R5YGc55WZ5Yy677yM5YaN56e75ZCR5Zue6JC95Yy644CC5Y+q55So55u45a+55b2i54q26K+05piO5beu5byC77yM5LiN6Jma5p6E55yf5a6e6LSm5Y+355qE55m+5YiG5q+U44CCCgoqKuaWh+Wtl+e8luaOkioq77ya5Lik5Y+l6Zeu6aKY5YiG5Yir6JC95Zyo55u45bqU6KeC5a+f5Yy66ZmE6L+R77yM5a6M5pW06K+75riF5omN56e75byA77yb4oCc5ZOq6YeM4oCd6LSf6LSj5byV5a+86KeG57q/44CCCgoqKuWjsOmfsyoq77ya5Lik5Liq5pyJ6Ze06ZqU55qE6L276Kem77yM56ys5LqM5Liq5pu06L2777yb5rKh5pyJ6K2m5oql5oiW5aSx6LSl6Z+z44CCCgojIyMgMTAgwrcgMDE6MTHigJMwMToxOCDCtyDmlofmoYggMjTigJMyNQoKKirlsY/luZXmloflrZcqKgoKPiDov5DokKXvvIzlsLHlnKjov5nniYfmlbDmja7mtKrmtYHph4zvvIwKPgo+IOWvu+aJvumCo+S6m+WPjeWkjeWHuueOsOeahOWPmOWMluOAggoKKirnlLvpnaLkuI7liqjkvZwqKu+8muaal+WkhOWHuueOsOinguWvn+iAheWJqui0tOi9ruW7k++8jOmdouWvueaVsOaNruays+a1geOAguS4gOS4que7hue6v+inguWvn+eOr+ayv+a1geWKqOWvu+aJvumHjeWkjeW9oueKtu+8jOS4u+inkuS7jeaYr+WPjemmiOiAjOmdnuS6uueJqeiEuOmDqOOAggoKKirmloflrZfnvJbmjpIqKu+8muesrOS6jOWNgeWbm+WPpeayv+ays+a1geW6lemDqOaYvueOsO+8m+esrOS6jOWNgeS6lOWPpeeahOKAnOWPjeWkjeWHuueOsOKAneS4jumHjeWkjeW9oueKtuWRvOW6lOOAggoKKirlo7Dpn7MqKu+8muS4gOmBk+e7hue6uOaTpu+8jOeEtuWQjumZjeS9jumfs+aViOWvhuW6pu+8jOS4uuS4i+S4gOauteeVmeepuumXtOOAggoKIyMjIDExIMK3IDAxOjE44oCTMDE6MzAgwrcg5paH5qGIIDI24oCTMjkKCioq5bGP5bmV5paH5a2XKioKCj4g5piv5bCP54yr5q2q5aS055qE6YKj5LiA5LiL77yfCj4KPiDov5jmmK/liJrliJrlpb3nmoToioLlpY/vvJ8KPgo+IOaVsOWtl+e7meWHuue6v+e0ouOAggo+Cj4g5Y6f5Zug77yM6L+Y6KaB5Zue5Yiw5YaF5a656YeM6aqM6K+B44CCCgoqKueUu+mdouS4juWKqOS9nCoq77ya5puy57q/5Lit55qE5ZyG54K55pS+5aSn77yM6YeN5paw5oiQ5Li65bCP54yr44CC5q2q5aS05LiO6IqC5aWP5p6E5oiQ5Lik5Liq5b6F6aqM6K+B55qE5Y+v6IO977yM5pWw5a2X57q/6YCA5Yiw6IOM5pmv77yM6ZWc5aS05Zue5Yiw5YaF5a6544CCCgoqKuaWh+Wtl+e8luaOkioq77ya5Lik5Liq55aR6Zeu5L6d5qyh5a6M5pW05Ye6546w77yM5LiN5Yqg56Gu5a6a5oCn5a+55Yu+77yb5pWw5a2X6YCA5Li66IOM5pmv5ZCO77yM56ys5LqM5Y2B5Lmd5Y+l5a6M5pW056iz5a6a5YGc55WZ44CCCgoqKuWjsOmfsyoq77ya5YCf5Y6f6Z+z6L2oODDigJM5MOenkueahOi+g+W8seWMuueVmeeZve+8jOS7heS4gOS4pOasoeaflOWSjOaPkOekuu+8m+S4jeeUqOKAnOetlOahiOaPreaZk+KAneWjsOOAggoKIyMjIDEyIMK3IDAxOjMw4oCTMDE6NDEgwrcg5paH5qGIIDMw4oCTMzIKCioq5bGP5bmV5paH5a2XKioKCj4g5LqO5piv77yM5LiL5LiA5p2h5YaF5a6577yMCj4KPiDmjaLkuobkuIDkuKrlvIDlpLTvvIwKPgo+IOeVmemVv+S6huS4gOS4queerOmXtOOAggoKKirnlLvpnaLkuI7liqjkvZwqKu+8mueMq+eUu+mdouaIkOS4uuacieWunuS9k+WOmuW6pueahOaXp+iDtueJh+OAguesrOS4gOagvOiiq+abv+aNou+8m+S4gOS4queerOmXtOaJgOWcqOeahOiDtueJh+auteiiq+eVmemVv++8jOWKqOS9nOS5n+ecn+ato+aFouS4i+adpeOAggoKKirmloflrZfnvJbmjpIqKu+8muesrOS4ieWNgeWPpeWFiOWHuueOsO+8m+KAnOW8gOWktOKAnemaj+esrOS4gOagvOenu+WKqO+8jOKAnOeVmemVv+KAnemdoOWtl+i3neWSjOeos+WumuaXtumXtOihqOi+vu+8jOS4jeaLieWdj+Wtl+W9ouOAggoKKirlo7Dpn7MqKu+8muS4pOasoeacieWMuuWIq+eahOe6uOeJh+enu+WKqOWjsO+8muaNouW8gOWktOefre+8jOeVmemVv+aXtuaflOWSjOW7tuWxleOAggoKIyMjIDEzIMK3IDAxOjQx4oCTMDE6NDggwrcg5paH5qGIIDMz4oCTMzMKCioq5bGP5bmV5paH5a2XKioKCj4g5YaN562J5LiA6L2u77yM55yf5a6e55qE5Zue5bqU44CCCgoqKueUu+mdouS4juWKqOS9nCoq77ya5paw5YaF5a656YCB5Ye677yM5YWI5Y+q5pyJ5bCR6YeP5Zue5bqU54K577yM6ZqP5ZCO5pu05aSa6aKX57KS5b2S5p2l5b2i5oiQ57uG57q/77yb562J5b6F5pys6Lqr5oiQ5Li65Y+v6KeB55qE6L+H56iL44CCCgoqKuaWh+Wtl+e8luaOkioq77ya56ys5LiJ5Y2B5LiJ5Y+l5L+d5oyB5a6M5pW056iz5a6a77yM5Y+Y5YyW5Y+R55Sf5Zyo5ZGo5Zu077yM5LiN55So5paH5a2X5by56Lez5aGr6KGl562J5b6F44CCCgoqKuWjsOmfsyoq77ya5LiA5Liq6L275Y+R6YCB5omr5aOw77yM6ZqP5ZCO5pKk5aOw77yb5Zue5rWB5pe25Y+q6KGl5bCR6YeP57uG6aKX57KS44CCCgojIyMgMTQgwrcgMDE6NDjigJMwMTo1NiDCtyDmlofmoYggMzTigJMzNQoKKirlsY/luZXmloflrZcqKgoKPiDlhoXlrrnvvIzlvbHlk43nnYDkvaDnmoTlgZznlZnjgIIKPgo+IOS9oOeahOWBnOeVme+8jOS5n+WcqOW9seWTjeWGheWuueOAggoKKirnlLvpnaLkuI7liqjkvZwqKu+8mumAgeWHuueahOWGheWuuee6v+S4jui/lOWbnueahOWPjemmiOe6v+mAkOa4kOW8r+aIkOWQjOS4gOS4queOr++8jOWJjemdoueahOi3r+W+hOi/nue7remXreWQiO+8jOS4jeeqgeeEtuWIh+WFpeaWsOekuuaEj+WbvuOAggoKKirmloflrZfnvJbmjpIqKu+8muS4pOWPpeWFiOWQjuWujOaVtOivu+a4he+8jOmaj+WQjuayv+ebuOWPjeaWueWQkeaOpeWFpe+8jOacgOe7iOefreaaguWFseWtmO+8m+S4jeiuqei3r+W+hOW8r+absuegtOWdj+Wtl+W9ouOAggoKKirlo7Dpn7MqKu+8muS4pOS4quebuOS6kuWbnuW6lOeahOaflOWSjOmfs+iJsu+8jOmXreeOr+aXtuS4gOS4qui9u+iQveeCueOAggoKIyMjIDE1IMK3IDAxOjU24oCTMDI6MDQgwrcg5paH5qGIIDM24oCTMzgKCioq5bGP5bmV5paH5a2XKioKCj4g5L2g55yL5Yiw55qE77yM5piv5LiA5Y+q5bCP54yr44CCCj4KPiDlsY/luZXlj6bkuIDovrnnmoTkurrvvIwKPgo+IOaDs+S7juaXoOaVsOS4qui/meagt+eahOeerOmXtOmHjO+8jAoKKirnlLvpnaLkuI7liqjkvZwqKu+8mumVnOWktOepv+i/h+mXreeOr+WbnuWIsOWwj+eMq++8jOWGjeaLiei/nOWIsOiuuOWkmuW+ruWwj+WGheWuueeerOmXtOOAguinguWvn+iAheeVmeWcqOaal+WkhO+8jOS4jeWPmOaIkOiBjOWcuuS6uueJqeiCluWDj+Wuo+S8oOOAggoKKirmloflrZfnvJbmjpIqKu+8muesrOS4ieWNgeWFreWPpemdoOi/keeMq++8jOesrOS4ieWNgeS4g+WPpemaj+aLiei/nO+8jOesrOS4ieWNgeWFq+WPpeayv+WGheWuueeerOmXtOeahOaWueWQkee8k+e8k+WxleW8gOOAggoKKirlo7Dpn7MqKu+8mumfs+aViOmAkOWxguWHj+Wwke+8jOWPqueVmeaegea1heeahOe6uOmdouS4jumil+eykuWwvumfs+OAggoKIyMjIDE2IMK3IDAyOjA04oCTMDI6MTAgwrcg5paH5qGIIDM54oCTNDAKCioq5bGP5bmV5paH5a2XKioKCj4g5om+5Yiw6K6p5Lq65oS/5oSP55WZ5LiL55qE55CG55Sx44CCCj4KPiDov5nvvIzlsLHmmK/mlrDlqpLkvZPov5DokKXjgIIKCioq55S76Z2i5LiO5Yqo5L2cKirvvJrpopfnspLmuJDmuJDmlLbmnZ/vvIzph43lm57mnIDliJ3mhL/mhI/lgZzkvY/nmoTnnqzpl7TjgILmnIDnu4jlronlrprvvIzlkbzlupTlvIDlnLrigJzlgZzkuIvigJ3vvJsxMjguOOKAkzEzMOenkuS4jeaWsOWinuS/oeaBr+OAggoKKirmloflrZfnvJbmjpIqKu+8muesrOS4ieWNgeS5neWPpeWFiOWujOaVtOWHuueOsO+8jOesrOWbm+WNgeWPpeWxheS4reiQveWumu+8jDEyOC4456eS5ZCO56iz5a6a5L+d5oyB6Iez57uT5p2f44CCCgoqKuWjsOmfsyoq77ya5LiA5Liq5YWL5Yi255qE5pS25p2f6Z+z77yM5LmL5ZCO5LiN5paw5aKe6Z+z5pWI77yM5L+d55WZ5Y6f6Z+z6L2o57uT5bC+44CCCgojIyDpn7PovajlpI3nlKjkuI7kuIvkuIDoioLngrkKCueUqOaIt+acgOaWsOW3suebtOaOpeS4iuS8oOW5tuaMh+WumiBgYmdtLm1wNGDvvIzpn7PmlYjnlLHpobnnm67ljp/liJvlkIjmiJDjgILmlofku7YxMzMuMDczNTbnp5LvvIzlt7LkuI7lj4LogIPniYfms6LlvaLlr7npvZDvvJrlj4LogIN05a+55bqUQkdNIHQrMC4wNDjnp5LjgILoioLngrkz55qEMTDnp5Llo7Dpn7Por5XmrrXkvb/nlKjor6VCR03nmoQyOC4wNDjigJMzOC4wNDjnp5LphY3ljp/liJtTRljvvIzljp/lrprnlLvpnaLlkozpn7PmlYjml7bngrnkuI3lj5jvvJvkuI3lho3kvb/nlKjlj4LogIPniYfmt7flkIjpn7PovajkvZzkuLrpn7PkuZDlupXvvIzkuZ/ml6DpnIDnrYnlvoXmraTliY3nvZHmmJPkupHvvI9C56uZ6ZO+5o6l6K6/6Zeu44CC5YW35L2T5p2l5rqQ5ZKMU0hBLTI1NuingSBgbXVzaWMtcmVmZXJlbmNlLmpzb25g44CCCgrljp/lj4LogIPniYfkuI7mlrBCR03mupDlk43luqbpg73ovoPpq5jvvIzmnIDnu4jmt7fpn7PopoHlhYjkv53nlZnkvZnph4/vvIzlho3lj6DlsJHph4/ljp/liJvpn7PmlYjjgILoioLngrkz5bey55Sf5oiQ5Y6f5Yib57q45pOm44CB6IGa5ZCI44CB5b+D5b2i6Kem54K5562J5aOw6Z+z77yM5bm25rWL6YeP5pu05paw5ZCO6K+V54mH6Z+z6YeP77yb5a6M5pW0MTMw56eS55qE6Z+z5pWI57yW5o6S5LuN5b6F57Sg5p2Q6aOO5qC856Gu6K6k5ZCO5Yi25L2c77yM5LiN5oqK5Y6f5YibU0ZY6K+05oiQ5Y+C6ICD54mH6Ieq5bim6Z+z5pWI44CCCgrnlKjmiLfnoa7orqTmnKzohJrmnKzlkI7vvIzov5vlhaXoioLngrkz77ya5o+Q5Lqk5a6e6ZmF5a2X5L2T5LiO5a2X5Y+35qC35byP44CB5pqX5bqV5p2Q6LSo44CB5bCP54yr77yP5omL5py677yP57qi5b+D6LS05Zu+5pa55ZCR44CB5LiJ5Liq5YWz6ZSu5bin5ZKM5LiA5q6157qmMTDnp5LnmoTliqjmgIHor5XniYfvvIjlkKvljp/pn7Povajor5XmrrXkuI7mlrDpn7PmlYjvvInvvIzliIbliKvnoa7orqTlj6/or7vmgKfjgIHmnZDotKjjgIHliqjmlYjkuI7lkKzmhJ/jgILkuInkuKroioLngrnlhajpg6jnoa7orqTlkI7miY3lvIDlp4vmlrDniYjmlbTniYfliarovpHjgIIK"
    },
    "approvedCopy": {
      "path": "production/new-media-v2/copy-draft-r2.md",
      "mediaType": "text/markdown",
      "byteLength": 2705,
      "sha256": "2614e80a44f7269ef05c9de839226afff64ff88e2fed2b41ff5fc96ec51aa139",
      "text": "# 节点 1｜已确认文案：一颗红心，去了哪里？\n\n用户已回复“可以”确认本文40个短段。前三句保留，从第四句起改为观众刷到小猫的经历。用停留、重看、点赞和划走引出信号流向，再讲运营怎样从汇总反馈里寻找内容方向，不再逐项介绍岗位职责。纯文字动画与贴图，无配音；文案批准不代表脚本与素材风格已批准。\n\n## 完整屏幕文案\n\n01. 你以为，他上班只是在刷手机。\n\n02. 其实，他在研究你为什么停下。\n\n03. 这份工作，叫新媒体运营。\n\n04. 你正准备，把手机收起来。\n\n05. 一只小猫，突然探进画面。\n\n06. 它歪了歪头。\n\n07. 你停住了。\n\n08. 五秒。\n\n09. 看完，又看了一遍。\n\n10. 顺手，点亮一颗红心。\n\n11. 然后，划走。\n\n12. 视频过去了。\n\n13. 你的反应，留下了。\n\n14. 刚才那几秒，去了哪里？\n\n15. 停留、重看、点赞……\n\n16. 它们被平台记录，变成信号。\n\n17. 成为推荐的参考。\n\n18. 运营看到的，是汇总后的反馈。\n\n19. 五秒、两秒、看到最后。\n\n20. 当成千上万次停留汇在一起，\n\n21. 零散的动作，慢慢显出轮廓。\n\n22. 哪里留住了人？\n\n23. 哪里，大家突然离开？\n\n24. 运营，就在这片数据洪流里，\n\n25. 寻找那些反复出现的变化。\n\n26. 是小猫歪头的那一下？\n\n27. 还是刚刚好的节奏？\n\n28. 数字给出线索。\n\n29. 原因，还要回到内容里验证。\n\n30. 于是，下一条内容，\n\n31. 换了一个开头，\n\n32. 留长了一个瞬间。\n\n33. 再等一轮，真实的回应。\n\n34. 内容，影响着你的停留。\n\n35. 你的停留，也在影响内容。\n\n36. 你看到的，是一只小猫。\n\n37. 屏幕另一边的人，\n\n38. 想从无数个这样的瞬间里，\n\n39. 找到让人愿意留下的理由。\n\n40. 这，就是新媒体运营。\n\n## 本次确认范围\n\n主线：刷到小猫的轻松代入 → 划走后反应留下的悬念 → 动作成为信号 → 大量反馈形成轮廓 → 运营寻找并验证线索 → 观众的动作也影响后续内容。\n\n数据表达区分了平台记录的行为信号与运营能看到的汇总反馈；没有声称一次点赞决定推荐、运营掌控算法或看见某个用户的完整轨迹与真实心理。\n\n以上短段是文案阅读单元，不表示每段必须切换一个独立镜头。正式脚本、停留时长、字词动效和音乐落点须在文案确认后设计。\n\n本提案首次提交时按用户要求暂缓分析重新上传的附件。用户确认文案后，已进入参考拆解和脚本确认阶段；当前状态见 `approval-state.json`，正式剪辑仍未开始。\n",
      "bytesBase64": "IyDoioLngrkgMe+9nOW3suehruiupOaWh+ahiO+8muS4gOmil+e6ouW/g++8jOWOu+S6huWTqumHjO+8nwoK55So5oi35bey5Zue5aSN4oCc5Y+v5Lul4oCd56Gu6K6k5pys5paHNDDkuKrnn63mrrXjgILliY3kuInlj6Xkv53nlZnvvIzku47nrKzlm5vlj6XotbfmlLnkuLrop4LkvJfliLfliLDlsI/njKvnmoTnu4/ljobjgILnlKjlgZznlZnjgIHph43nnIvjgIHngrnotZ7lkozliJLotbDlvJXlh7rkv6Hlj7fmtYHlkJHvvIzlho3orrLov5DokKXmgI7moLfku47msYfmgLvlj43ppojph4zlr7vmib7lhoXlrrnmlrnlkJHvvIzkuI3lho3pgJDpobnku4vnu43lspfkvY3ogYzotKPjgILnuq/mloflrZfliqjnlLvkuI7otLTlm77vvIzml6DphY3pn7PvvJvmlofmoYjmibnlh4bkuI3ku6PooajohJrmnKzkuI7ntKDmnZDpo47moLzlt7Lmibnlh4bjgIIKCiMjIOWujOaVtOWxj+W5leaWh+ahiAoKMDEuIOS9oOS7peS4uu+8jOS7luS4iuePreWPquaYr+WcqOWIt+aJi+acuuOAggoKMDIuIOWFtuWunu+8jOS7luWcqOeglOeptuS9oOS4uuS7gOS5iOWBnOS4i+OAggoKMDMuIOi/meS7veW3peS9nO+8jOWPq+aWsOWqkuS9k+i/kOiQpeOAggoKMDQuIOS9oOato+WHhuWkh++8jOaKiuaJi+acuuaUtui1t+adpeOAggoKMDUuIOS4gOWPquWwj+eMq++8jOeqgeeEtuaOoui/m+eUu+mdouOAggoKMDYuIOWug+atquS6huatquWktOOAggoKMDcuIOS9oOWBnOS9j+S6huOAggoKMDguIOS6lOenkuOAggoKMDkuIOeci+WujO+8jOWPiOeci+S6huS4gOmBjeOAggoKMTAuIOmhuuaJi++8jOeCueS6ruS4gOmil+e6ouW/g+OAggoKMTEuIOeEtuWQju+8jOWIkui1sOOAggoKMTIuIOinhumikei/h+WOu+S6huOAggoKMTMuIOS9oOeahOWPjeW6lO+8jOeVmeS4i+S6huOAggoKMTQuIOWImuaJjemCo+WHoOenku+8jOWOu+S6huWTqumHjO+8nwoKMTUuIOWBnOeVmeOAgemHjeeci+OAgeeCuei1nuKApuKApgoKMTYuIOWug+S7rOiiq+W5s+WPsOiusOW9le+8jOWPmOaIkOS/oeWPt+OAggoKMTcuIOaIkOS4uuaOqOiNkOeahOWPguiAg+OAggoKMTguIOi/kOiQpeeci+WIsOeahO+8jOaYr+axh+aAu+WQjueahOWPjemmiOOAggoKMTkuIOS6lOenkuOAgeS4pOenkuOAgeeci+WIsOacgOWQjuOAggoKMjAuIOW9k+aIkOWNg+S4iuS4h+asoeWBnOeVmeaxh+WcqOS4gOi1t++8jAoKMjEuIOmbtuaVo+eahOWKqOS9nO+8jOaFouaFouaYvuWHuui9ruW7k+OAggoKMjIuIOWTqumHjOeVmeS9j+S6huS6uu+8nwoKMjMuIOWTqumHjO+8jOWkp+WutueqgeeEtuemu+W8gO+8nwoKMjQuIOi/kOiQpe+8jOWwseWcqOi/meeJh+aVsOaNrua0qua1gemHjO+8jAoKMjUuIOWvu+aJvumCo+S6m+WPjeWkjeWHuueOsOeahOWPmOWMluOAggoKMjYuIOaYr+Wwj+eMq+atquWktOeahOmCo+S4gOS4i++8nwoKMjcuIOi/mOaYr+WImuWImuWlveeahOiKguWlj++8nwoKMjguIOaVsOWtl+e7meWHuue6v+e0ouOAggoKMjkuIOWOn+WboO+8jOi/mOimgeWbnuWIsOWGheWuuemHjOmqjOivgeOAggoKMzAuIOS6juaYr++8jOS4i+S4gOadoeWGheWuue+8jAoKMzEuIOaNouS6huS4gOS4quW8gOWktO+8jAoKMzIuIOeVmemVv+S6huS4gOS4queerOmXtOOAggoKMzMuIOWGjeetieS4gOi9ru+8jOecn+WunueahOWbnuW6lOOAggoKMzQuIOWGheWuue+8jOW9seWTjeedgOS9oOeahOWBnOeVmeOAggoKMzUuIOS9oOeahOWBnOeVme+8jOS5n+WcqOW9seWTjeWGheWuueOAggoKMzYuIOS9oOeci+WIsOeahO+8jOaYr+S4gOWPquWwj+eMq+OAggoKMzcuIOWxj+W5leWPpuS4gOi+ueeahOS6uu+8jAoKMzguIOaDs+S7juaXoOaVsOS4qui/meagt+eahOeerOmXtOmHjO+8jAoKMzkuIOaJvuWIsOiuqeS6uuaEv+aEj+eVmeS4i+eahOeQhueUseOAggoKNDAuIOi/me+8jOWwseaYr+aWsOWqkuS9k+i/kOiQpeOAggoKIyMg5pys5qyh56Gu6K6k6IyD5Zu0CgrkuLvnur/vvJrliLfliLDlsI/njKvnmoTovbvmnb7ku6PlhaUg4oaSIOWIkui1sOWQjuWPjeW6lOeVmeS4i+eahOaCrOW/tSDihpIg5Yqo5L2c5oiQ5Li65L+h5Y+3IOKGkiDlpKfph4/lj43ppojlvaLmiJDova7lu5Mg4oaSIOi/kOiQpeWvu+aJvuW5tumqjOivgee6v+e0oiDihpIg6KeC5LyX55qE5Yqo5L2c5Lmf5b2x5ZON5ZCO57ut5YaF5a6544CCCgrmlbDmja7ooajovr7ljLrliIbkuoblubPlj7DorrDlvZXnmoTooYzkuLrkv6Hlj7fkuI7ov5DokKXog73nnIvliLDnmoTmsYfmgLvlj43ppojvvJvmsqHmnInlo7Dnp7DkuIDmrKHngrnotZ7lhrPlrprmjqjojZDjgIHov5DokKXmjozmjqfnrpfms5XmiJbnnIvop4Hmn5DkuKrnlKjmiLfnmoTlrozmlbTovajov7nkuI7nnJ/lrp7lv4PnkIbjgIIKCuS7peS4iuefreauteaYr+aWh+ahiOmYheivu+WNleWFg++8jOS4jeihqOekuuavj+auteW/hemhu+WIh+aNouS4gOS4queLrOeri+mVnOWktOOAguato+W8j+iEmuacrOOAgeWBnOeVmeaXtumVv+OAgeWtl+ivjeWKqOaViOWSjOmfs+S5kOiQveeCuemhu+WcqOaWh+ahiOehruiupOWQjuiuvuiuoeOAggoK5pys5o+Q5qGI6aaW5qyh5o+Q5Lqk5pe25oyJ55So5oi36KaB5rGC5pqC57yT5YiG5p6Q6YeN5paw5LiK5Lyg55qE6ZmE5Lu244CC55So5oi356Gu6K6k5paH5qGI5ZCO77yM5bey6L+b5YWl5Y+C6ICD5ouG6Kej5ZKM6ISa5pys56Gu6K6k6Zi25q6177yb5b2T5YmN54q25oCB6KeBIGBhcHByb3ZhbC1zdGF0ZS5qc29uYO+8jOato+W8j+WJqui+keS7jeacquW8gOWni+OAggo="
    },
    "finalProduction": {
      "path": "production/new-media-v2/final-production.md",
      "mediaType": "text/markdown",
      "byteLength": 4980,
      "sha256": "5351cc18aab223916dfee0f133793ad9e61adcf4b92e3e775ab66b7361381dee",
      "text": "# 一颗红心，去了哪里？｜完整成片\n\n本轮用户明确要求“动画节奏还是有点快，排版还是按照原来那样吧，背景只要深色背景，但是要纯黑与波点交替，动效背景，这次你直接生成成片”。这项指令已授权带指定修改直接制作完整视频，不再等待旧R2候选的风格确认；不把R2浅色拼贴误记为通过。\n\n状态：完整MP4已导出，所有7800帧及全长音频解码通过；40段文案哈希、音乐来源和实际抽帧比对均通过。\n\n本轮规格：**2分10秒、1920×1080、16:9、60fps、7800帧，无新增配音**。采用已经确认的40个短段，逐字保留；实际字幕时码在 `src/new-media-v2/final/timeline.json`。\n\n[下载完整MP4](https://github.com/zb792686831-ux/vibe/raw/refs/heads/main/output/new-media-v2-final.mp4) · [媒体验证报告](../../output/new-media-v2-final-validation.json) · [已确认文案](copy-draft-r2.md) · [原逐镜脚本](script.md)\n\n## 本轮画面\n\n恢复首轮“居中主体＋下方居中文字”的版式：手机、小猫、红心与数据关系在画心，正文84px宋体、米白和暖金，最长句在安全宽内保持单行。闭环的两句在画心先后出现，结尾职业名居中落定。未沿用R2的大幅浅纸拼贴和粗黑体主标题。\n\n背景按16组段落交替纯黑与深色浅波点，组内稳定。波点仅缓慢漂移与轻微明暗变化，组间约1.2秒过渡，不随每一句频繁换底。线条以6–9px主线为主。\n\n文字约0.55秒渐显、约10px微移后保持稳定；主体主要移动1.5–3秒缓动完成，不采用快速弹跳。31–39秒四句的阅读时长改为1.45／1.65／2.20／2.70秒。116–124秒三句分配2.5／2.2／3.3秒，较长句有更多阅读时间。18–23秒保持真实五秒停留；128.8–130秒不新增信息与音效。\n\n场景从刷手机到小猫停留、点赞留下，再到信号汇流、匿名汇总、总体趋势与变化、回看内容验证、胶片换开头和留长、回应回流与内容闭环。所有统计形状是叙事示意，不是假称真实账号数据。光效只强调点赞、聚合和闭环等落点。\n\n## 用户音乐与原创音效\n\n使用用户上传 `bgm.mp4`，来源SHA-256为 `d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59`。连续取0.048–130.048秒，不循环、不换曲、不变速。统一降低7.7dB，头尾淡入／淡出0.5／0.8秒，叠加22个低强度原创材质音效；混音实测约-18.0LUFS／-6.3dBTP。\n\n音效与点赞28.65秒、划走31.2秒、反应留存34.65秒、换开头93.1秒、留长97.1秒及闭环等动作对齐。音效轨已直接读取并确认18–23秒与128.8–130秒为零。完整音乐源与单独全长混音只留本机；公开交付为带音乐的成片，不另上传原音乐。\n\n声音生成器为 `scripts/generate-new-media-v2-final-audio.py`，来源、事件与实测数值在 `final-audio-manifest.json`。技术测量不声称做过人工听审，也不把用户音源说成独立乐器分轨或绝对无人声；本项目没有生成／添加旁白。\n\n## 实际成片抽帧\n\n下列图片从最终MP4提取29／61／115秒帧，JPEG色彩矩阵明确转换；已通过完整音画解码及同帧相似度比对。聊天预览使用可访问的GitHub图片直链。\n\n![小猫与红心](https://raw.githubusercontent.com/zb792686831-ux/vibe/main/output/new-media-v2-final-cover.jpg)\n\n![信号汇成轮廓](https://raw.githubusercontent.com/zb792686831-ux/vibe/main/output/new-media-v2-final-signals.jpg)\n\n![内容与反馈闭环](https://raw.githubusercontent.com/zb792686831-ux/vibe/main/output/new-media-v2-final-loop.jpg)\n\n## 复现\n\n`npm run video:prepare` 根据本机保留的用户上传音乐／FLAC生成全长音乐与原创SFX；源文件路径和哈希见 `music-reference.json`。本机音轨已生成并完整解码通过。新机器需恢复同一用户上传音乐，必要时执行 `npm run video:prepare -- --music-input /实际路径/bgm.mp4`；生成器会核对源文件SHA。不能以440Hz测试音或旧版配音替代。\n\n`npm run video:build` 检查类型、渲染7800帧、合成音轨、抽取JPEG并执行全AV校验。`npm run video:render` 可复用按源文件指纹缓存的图轨，仅重封装声音；`npm run video:verify` 检查130秒／7800帧、参数、所有帧音画解码、文案哈希、音乐来源、音频余量及真实预览帧。\n\n正式组合为 `NewMediaV2Final`。图像使用Remotion的DOM `Img`；此前R2的CanvasImage图形后端出现过超时，完整成片改用经过短段验证的DOM图像路径。未增加依赖、未更新固定版本的官方Skill。旧版带配音流程保留为 `npm run video:legacy:build`，不作为当前默认成片。\n\n当前制作状态以 `approval-state.json` 为准；完整输出只有在真实渲染和验证通过后才交付。验证通过只说明文件技术完整，不代替用户对成片的主观反馈。\n",
      "bytesBase64": "IyDkuIDpopfnuqLlv4PvvIzljrvkuoblk6rph4zvvJ/vvZzlrozmlbTmiJDniYcKCuacrOi9rueUqOaIt+aYjuehruimgeaxguKAnOWKqOeUu+iKguWlj+i/mOaYr+acieeCueW/q++8jOaOkueJiOi/mOaYr+aMieeFp+WOn+adpemCo+agt+WQp++8jOiDjOaZr+WPquimgea3seiJsuiDjOaZr++8jOS9huaYr+imgee6r+m7keS4juazoueCueS6pOabv++8jOWKqOaViOiDjOaZr++8jOi/measoeS9oOebtOaOpeeUn+aIkOaIkOeJh+KAneOAgui/memhueaMh+S7pOW3suaOiOadg+W4puaMh+WumuS/ruaUueebtOaOpeWItuS9nOWujOaVtOinhumike+8jOS4jeWGjeetieW+heaXp1Iy5YCZ6YCJ55qE6aOO5qC856Gu6K6k77yb5LiN5oqKUjLmtYXoibLmi7zotLTor6/orrDkuLrpgJrov4fjgIIKCueKtuaAge+8muWujOaVtE1QNOW3suWvvOWHuu+8jOaJgOaciTc4MDDluKflj4rlhajplb/pn7PpopHop6PnoIHpgJrov4fvvJs0MOauteaWh+ahiOWTiOW4jOOAgemfs+S5kOadpea6kOWSjOWunumZheaKveW4p+avlOWvueWdh+mAmui/h+OAggoK5pys6L2u6KeE5qC877yaKioy5YiGMTDnp5LjgIExOTIww5cxMDgw44CBMTY6OeOAgTYwZnBz44CBNzgwMOW4p++8jOaXoOaWsOWinumFjemfsyoq44CC6YeH55So5bey57uP56Gu6K6k55qENDDkuKrnn63mrrXvvIzpgJDlrZfkv53nlZnvvJvlrp7pmYXlrZfluZXml7bnoIHlnKggYHNyYy9uZXctbWVkaWEtdjIvZmluYWwvdGltZWxpbmUuanNvbmDjgIIKClvkuIvovb3lrozmlbRNUDRdKGh0dHBzOi8vZ2l0aHViLmNvbS96Yjc5MjY4NjgzMS11eC92aWJlL3Jhdy9yZWZzL2hlYWRzL21haW4vb3V0cHV0L25ldy1tZWRpYS12Mi1maW5hbC5tcDQpIMK3IFvlqpLkvZPpqozor4HmiqXlkYpdKC4uLy4uL291dHB1dC9uZXctbWVkaWEtdjItZmluYWwtdmFsaWRhdGlvbi5qc29uKSDCtyBb5bey56Gu6K6k5paH5qGIXShjb3B5LWRyYWZ0LXIyLm1kKSDCtyBb5Y6f6YCQ6ZWc6ISa5pysXShzY3JpcHQubWQpCgojIyDmnKzova7nlLvpnaIKCuaBouWkjemmlui9ruKAnOWxheS4reS4u+S9k++8i+S4i+aWueWxheS4reaWh+Wtl+KAneeahOeJiOW8j++8muaJi+acuuOAgeWwj+eMq+OAgee6ouW/g+S4juaVsOaNruWFs+ezu+WcqOeUu+W/g++8jOato+aWhzg0cHjlrovkvZPjgIHnsbPnmb3lkozmmpbph5HvvIzmnIDplb/lj6XlnKjlronlhajlrr3lhoXkv53mjIHljZXooYzjgILpl63njq/nmoTkuKTlj6XlnKjnlLvlv4PlhYjlkI7lh7rnjrDvvIznu5PlsL7ogYzkuJrlkI3lsYXkuK3okL3lrprjgILmnKrmsr/nlKhSMueahOWkp+W5hea1hee6uOaLvOi0tOWSjOeyl+m7keS9k+S4u+agh+mimOOAggoK6IOM5pmv5oyJMTbnu4TmrrXokL3kuqTmm7/nuq/pu5HkuI7mt7HoibLmtYXms6LngrnvvIznu4TlhoXnqLPlrprjgILms6Lngrnku4XnvJPmhaLmvILnp7vkuI7ovbvlvq7mmI7mmpflj5jljJbvvIznu4Tpl7TnuqYxLjLnp5Lov4fmuKHvvIzkuI3pmo/mr4/kuIDlj6XpopHnuYHmjaLlupXjgILnur/mnaHku6U24oCTOXB45Li757q/5Li65Li744CCCgrmloflrZfnuqYwLjU156eS5riQ5pi+44CB57qmMTBweOW+ruenu+WQjuS/neaMgeeos+Wumu+8m+S4u+S9k+S4u+imgeenu+WKqDEuNeKAkzPnp5LnvJPliqjlrozmiJDvvIzkuI3ph4fnlKjlv6vpgJ/lvLnot7PjgIIzMeKAkzM556eS5Zub5Y+l55qE6ZiF6K+75pe26ZW/5pS55Li6MS40Ne+8jzEuNjXvvI8yLjIw77yPMi43MOenkuOAgjExNuKAkzEyNOenkuS4ieWPpeWIhumFjTIuNe+8jzIuMu+8jzMuM+enku+8jOi+g+mVv+WPpeacieabtOWkmumYheivu+aXtumXtOOAgjE44oCTMjPnp5Lkv53mjIHnnJ/lrp7kupTnp5LlgZznlZnvvJsxMjguOOKAkzEzMOenkuS4jeaWsOWinuS/oeaBr+S4jumfs+aViOOAggoK5Zy65pmv5LuO5Yi35omL5py65Yiw5bCP54yr5YGc55WZ44CB54K56LWe55WZ5LiL77yM5YaN5Yiw5L+h5Y+35rGH5rWB44CB5Yy/5ZCN5rGH5oC744CB5oC75L2T6LaL5Yq/5LiO5Y+Y5YyW44CB5Zue55yL5YaF5a656aqM6K+B44CB6IO254mH5o2i5byA5aS05ZKM55WZ6ZW/44CB5Zue5bqU5Zue5rWB5LiO5YaF5a656Zet546v44CC5omA5pyJ57uf6K6h5b2i54q25piv5Y+Z5LqL56S65oSP77yM5LiN5piv5YGH56ew55yf5a6e6LSm5Y+35pWw5o2u44CC5YWJ5pWI5Y+q5by66LCD54K56LWe44CB6IGa5ZCI5ZKM6Zet546v562J6JC954K544CCCgojIyDnlKjmiLfpn7PkuZDkuI7ljp/liJvpn7PmlYgKCuS9v+eUqOeUqOaIt+S4iuS8oCBgYmdtLm1wNGDvvIzmnaXmupBTSEEtMjU25Li6IGBkMjc1YmI3YTI2ZDE3NTVlNmIxOTNkOTcwNTYzNDM0OTgwNTFlMzdkYzY4NWMyMzNkM2M3ZWEyNDE5MTJkYzU5YOOAgui/nue7reWPljAuMDQ44oCTMTMwLjA0OOenku+8jOS4jeW+queOr+OAgeS4jeaNouabsuOAgeS4jeWPmOmAn+OAgue7n+S4gOmZjeS9jjcuN2RC77yM5aS05bC+5reh5YWl77yP5reh5Ye6MC4177yPMC4456eS77yM5Y+g5YqgMjLkuKrkvY7lvLrluqbljp/liJvmnZDotKjpn7PmlYjvvJvmt7fpn7Plrp7mtYvnuqYtMTguMExVRlPvvI8tNi4zZEJUUOOAggoK6Z+z5pWI5LiO54K56LWeMjguNjXnp5LjgIHliJLotbAzMS4y56eS44CB5Y+N5bqU55WZ5a2YMzQuNjXnp5LjgIHmjaLlvIDlpLQ5My4x56eS44CB55WZ6ZW/OTcuMeenkuWPiumXreeOr+etieWKqOS9nOWvuem9kOOAgumfs+aViOi9qOW3suebtOaOpeivu+WPluW5tuehruiupDE44oCTMjPnp5LkuI4xMjguOOKAkzEzMOenkuS4uumbtuOAguWujOaVtOmfs+S5kOa6kOS4juWNleeLrOWFqOmVv+a3t+mfs+WPqueVmeacrOacuu+8m+WFrOW8gOS6pOS7mOS4uuW4pumfs+S5kOeahOaIkOeJh++8jOS4jeWPpuS4iuS8oOWOn+mfs+S5kOOAggoK5aOw6Z+z55Sf5oiQ5Zmo5Li6IGBzY3JpcHRzL2dlbmVyYXRlLW5ldy1tZWRpYS12Mi1maW5hbC1hdWRpby5weWDvvIzmnaXmupDjgIHkuovku7bkuI7lrp7mtYvmlbDlgLzlnKggYGZpbmFsLWF1ZGlvLW1hbmlmZXN0Lmpzb25g44CC5oqA5pyv5rWL6YeP5LiN5aOw56ew5YGa6L+H5Lq65bel5ZCs5a6h77yM5Lmf5LiN5oqK55So5oi36Z+z5rqQ6K+05oiQ54us56uL5LmQ5Zmo5YiG6L2o5oiW57ud5a+55peg5Lq65aOw77yb5pys6aG555uu5rKh5pyJ55Sf5oiQ77yP5re75Yqg5peB55m944CCCgojIyDlrp7pmYXmiJDniYfmir3luKcKCuS4i+WIl+WbvueJh+S7juacgOe7iE1QNOaPkOWPljI577yPNjHvvI8xMTXnp5LluKfvvIxKUEVH6Imy5b2p55+p6Zi15piO56Gu6L2s5o2i77yb5bey6YCa6L+H5a6M5pW06Z+z55S76Kej56CB5Y+K5ZCM5bin55u45Ly85bqm5q+U5a+544CC6IGK5aSp6aKE6KeI5L2/55So5Y+v6K6/6Zeu55qER2l0SHVi5Zu+54mH55u06ZO+44CCCgohW+Wwj+eMq+S4jue6ouW/g10oaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3piNzkyNjg2ODMxLXV4L3ZpYmUvbWFpbi9vdXRwdXQvbmV3LW1lZGlhLXYyLWZpbmFsLWNvdmVyLmpwZykKCiFb5L+h5Y+35rGH5oiQ6L2u5buTXShodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vemI3OTI2ODY4MzEtdXgvdmliZS9tYWluL291dHB1dC9uZXctbWVkaWEtdjItZmluYWwtc2lnbmFscy5qcGcpCgohW+WGheWuueS4juWPjemmiOmXreeOr10oaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3piNzkyNjg2ODMxLXV4L3ZpYmUvbWFpbi9vdXRwdXQvbmV3LW1lZGlhLXYyLWZpbmFsLWxvb3AuanBnKQoKIyMg5aSN546wCgpgbnBtIHJ1biB2aWRlbzpwcmVwYXJlYCDmoLnmja7mnKzmnLrkv53nlZnnmoTnlKjmiLfkuIrkvKDpn7PkuZDvvI9GTEFD55Sf5oiQ5YWo6ZW/6Z+z5LmQ5LiO5Y6f5YibU0ZY77yb5rqQ5paH5Lu26Lev5b6E5ZKM5ZOI5biM6KeBIGBtdXNpYy1yZWZlcmVuY2UuanNvbmDjgILmnKzmnLrpn7Povajlt7LnlJ/miJDlubblrozmlbTop6PnoIHpgJrov4fjgILmlrDmnLrlmajpnIDmgaLlpI3lkIzkuIDnlKjmiLfkuIrkvKDpn7PkuZDvvIzlv4XopoHml7bmiafooYwgYG5wbSBydW4gdmlkZW86cHJlcGFyZSAtLSAtLW11c2ljLWlucHV0IC/lrp7pmYXot6/lvoQvYmdtLm1wNGDvvJvnlJ/miJDlmajkvJrmoLjlr7nmupDmlofku7ZTSEHjgILkuI3og73ku6U0NDBIeua1i+ivlemfs+aIluaXp+eJiOmFjemfs+abv+S7o+OAggoKYG5wbSBydW4gdmlkZW86YnVpbGRgIOajgOafpeexu+Wei+OAgea4suafkzc4MDDluKfjgIHlkIjmiJDpn7PovajjgIHmir3lj5ZKUEVH5bm25omn6KGM5YWoQVbmoKHpqozjgIJgbnBtIHJ1biB2aWRlbzpyZW5kZXJgIOWPr+WkjeeUqOaMiea6kOaWh+S7tuaMh+e6uee8k+WtmOeahOWbvui9qO+8jOS7hemHjeWwgeijheWjsOmfs++8m2BucG0gcnVuIHZpZGVvOnZlcmlmeWAg5qOA5p+lMTMw56eS77yPNzgwMOW4p+OAgeWPguaVsOOAgeaJgOacieW4p+mfs+eUu+ino+eggeOAgeaWh+ahiOWTiOW4jOOAgemfs+S5kOadpea6kOOAgemfs+mikeS9memHj+WPiuecn+WunumihOiniOW4p+OAggoK5q2j5byP57uE5ZCI5Li6IGBOZXdNZWRpYVYyRmluYWxg44CC5Zu+5YOP5L2/55SoUmVtb3Rpb27nmoRET00gYEltZ2DvvJvmraTliY1SMueahENhbnZhc0ltYWdl5Zu+5b2i5ZCO56uv5Ye6546w6L+H6LaF5pe277yM5a6M5pW05oiQ54mH5pS555So57uP6L+H55+t5q616aqM6K+B55qERE9N5Zu+5YOP6Lev5b6E44CC5pyq5aKe5Yqg5L6d6LWW44CB5pyq5pu05paw5Zu65a6a54mI5pys55qE5a6Y5pa5U2tpbGzjgILml6fniYjluKbphY3pn7PmtYHnqIvkv53nlZnkuLogYG5wbSBydW4gdmlkZW86bGVnYWN5OmJ1aWxkYO+8jOS4jeS9nOS4uuW9k+WJjem7mOiupOaIkOeJh+OAggoK5b2T5YmN5Yi25L2c54q25oCB5LulIGBhcHByb3ZhbC1zdGF0ZS5qc29uYCDkuLrlh4bvvJvlrozmlbTovpPlh7rlj6rmnInlnKjnnJ/lrp7muLLmn5Plkozpqozor4HpgJrov4flkI7miY3kuqTku5jjgILpqozor4HpgJrov4flj6ror7TmmI7mlofku7bmioDmnK/lrozmlbTvvIzkuI3ku6Pmm7/nlKjmiLflr7nmiJDniYfnmoTkuLvop4Llj43ppojjgIIK"
    },
    "sampleSpec": {
      "path": "production/new-media-v2/motion-lab/SPEC.md",
      "mediaType": "text/markdown",
      "byteLength": 2015,
      "sha256": "4896be2ef870e092526789510b98bcad499ab8f3b7376737f427634cd89fe917",
      "text": "# 留下的红心 — 20-second motion sample\n\nScope: only global 28–48 s of the approved film. Approved captions 10–17, exact wording and timing. 1920×1080, 60fps, no added voiceover. User BGM unchanged; source offset +0.048 s.\n\nLook: black → dark navy dot field at local 5.5–6.6 s → black at 14–15.25 s. Centered subject; 84 px Noto Serif CJK SC captions at y=846, 140 px side safe margins. Warm ivory, muted gold/mint, coral reaction. Primary strokes 8–9 px; highlights 2.8 px are secondary edge lighting. No cream backgrounds, hairline main diagrams, global screen flashes, random particle loops or caption bouncing.\n\nFrames 0–179: established physical kitten image board, same raised coral heart reacts at .65 s and settles.\nFrames 189–267: image board accelerates along a spatial exit curve, with a hero/edge angle approximation; heart remains in its original coordinates. The board is fully gone by the “video passed” caption.\nFrames 366–486: same-topology heart/bead mesh changes shape for two seconds, light/camera identity retained. A readable coral bead remains through the question; local 8.3–11 s has no SFX.\nFrames 651–813: inherited pause/replay/like shapes activate sequentially with stable labels and no recommended output yet.\nFrames 840–1035: the same arcs unfold into thick feedback rails. Packets follow the current deforming rails, reach the record aperture at 16.1/16.6/17.25 s, then activate recorded states. The red bead itself is the third input.\nFrames 1050–1148: branches emerge from the established record point; final result lands by 19.13 s and is held to the end. Caption never follows the camera pullback.\n\nReview focus: no result before input; no mid-scene all-layer blackout; no heart identity reset; no tiny invisible signal; full caption reading windows; no double-image plateau during board exit. Normal-speed user sample, ordered dense frame review and actual state checks. Technical checks do not certify the user’s aesthetic satisfaction.\n",
      "bytesBase64": "IyDnlZnkuIvnmoTnuqLlv4Mg4oCUIDIwLXNlY29uZCBtb3Rpb24gc2FtcGxlCgpTY29wZTogb25seSBnbG9iYWwgMjjigJM0OCBzIG9mIHRoZSBhcHByb3ZlZCBmaWxtLiBBcHByb3ZlZCBjYXB0aW9ucyAxMOKAkzE3LCBleGFjdCB3b3JkaW5nIGFuZCB0aW1pbmcuIDE5MjDDlzEwODAsIDYwZnBzLCBubyBhZGRlZCB2b2ljZW92ZXIuIFVzZXIgQkdNIHVuY2hhbmdlZDsgc291cmNlIG9mZnNldCArMC4wNDggcy4KCkxvb2s6IGJsYWNrIOKGkiBkYXJrIG5hdnkgZG90IGZpZWxkIGF0IGxvY2FsIDUuNeKAkzYuNiBzIOKGkiBibGFjayBhdCAxNOKAkzE1LjI1IHMuIENlbnRlcmVkIHN1YmplY3Q7IDg0IHB4IE5vdG8gU2VyaWYgQ0pLIFNDIGNhcHRpb25zIGF0IHk9ODQ2LCAxNDAgcHggc2lkZSBzYWZlIG1hcmdpbnMuIFdhcm0gaXZvcnksIG11dGVkIGdvbGQvbWludCwgY29yYWwgcmVhY3Rpb24uIFByaW1hcnkgc3Ryb2tlcyA44oCTOSBweDsgaGlnaGxpZ2h0cyAyLjggcHggYXJlIHNlY29uZGFyeSBlZGdlIGxpZ2h0aW5nLiBObyBjcmVhbSBiYWNrZ3JvdW5kcywgaGFpcmxpbmUgbWFpbiBkaWFncmFtcywgZ2xvYmFsIHNjcmVlbiBmbGFzaGVzLCByYW5kb20gcGFydGljbGUgbG9vcHMgb3IgY2FwdGlvbiBib3VuY2luZy4KCkZyYW1lcyAw4oCTMTc5OiBlc3RhYmxpc2hlZCBwaHlzaWNhbCBraXR0ZW4gaW1hZ2UgYm9hcmQsIHNhbWUgcmFpc2VkIGNvcmFsIGhlYXJ0IHJlYWN0cyBhdCAuNjUgcyBhbmQgc2V0dGxlcy4KRnJhbWVzIDE4OeKAkzI2NzogaW1hZ2UgYm9hcmQgYWNjZWxlcmF0ZXMgYWxvbmcgYSBzcGF0aWFsIGV4aXQgY3VydmUsIHdpdGggYSBoZXJvL2VkZ2UgYW5nbGUgYXBwcm94aW1hdGlvbjsgaGVhcnQgcmVtYWlucyBpbiBpdHMgb3JpZ2luYWwgY29vcmRpbmF0ZXMuIFRoZSBib2FyZCBpcyBmdWxseSBnb25lIGJ5IHRoZSDigJx2aWRlbyBwYXNzZWTigJ0gY2FwdGlvbi4KRnJhbWVzIDM2NuKAkzQ4Njogc2FtZS10b3BvbG9neSBoZWFydC9iZWFkIG1lc2ggY2hhbmdlcyBzaGFwZSBmb3IgdHdvIHNlY29uZHMsIGxpZ2h0L2NhbWVyYSBpZGVudGl0eSByZXRhaW5lZC4gQSByZWFkYWJsZSBjb3JhbCBiZWFkIHJlbWFpbnMgdGhyb3VnaCB0aGUgcXVlc3Rpb247IGxvY2FsIDguM+KAkzExIHMgaGFzIG5vIFNGWC4KRnJhbWVzIDY1MeKAkzgxMzogaW5oZXJpdGVkIHBhdXNlL3JlcGxheS9saWtlIHNoYXBlcyBhY3RpdmF0ZSBzZXF1ZW50aWFsbHkgd2l0aCBzdGFibGUgbGFiZWxzIGFuZCBubyByZWNvbW1lbmRlZCBvdXRwdXQgeWV0LgpGcmFtZXMgODQw4oCTMTAzNTogdGhlIHNhbWUgYXJjcyB1bmZvbGQgaW50byB0aGljayBmZWVkYmFjayByYWlscy4gUGFja2V0cyBmb2xsb3cgdGhlIGN1cnJlbnQgZGVmb3JtaW5nIHJhaWxzLCByZWFjaCB0aGUgcmVjb3JkIGFwZXJ0dXJlIGF0IDE2LjEvMTYuNi8xNy4yNSBzLCB0aGVuIGFjdGl2YXRlIHJlY29yZGVkIHN0YXRlcy4gVGhlIHJlZCBiZWFkIGl0c2VsZiBpcyB0aGUgdGhpcmQgaW5wdXQuCkZyYW1lcyAxMDUw4oCTMTE0ODogYnJhbmNoZXMgZW1lcmdlIGZyb20gdGhlIGVzdGFibGlzaGVkIHJlY29yZCBwb2ludDsgZmluYWwgcmVzdWx0IGxhbmRzIGJ5IDE5LjEzIHMgYW5kIGlzIGhlbGQgdG8gdGhlIGVuZC4gQ2FwdGlvbiBuZXZlciBmb2xsb3dzIHRoZSBjYW1lcmEgcHVsbGJhY2suCgpSZXZpZXcgZm9jdXM6IG5vIHJlc3VsdCBiZWZvcmUgaW5wdXQ7IG5vIG1pZC1zY2VuZSBhbGwtbGF5ZXIgYmxhY2tvdXQ7IG5vIGhlYXJ0IGlkZW50aXR5IHJlc2V0OyBubyB0aW55IGludmlzaWJsZSBzaWduYWw7IGZ1bGwgY2FwdGlvbiByZWFkaW5nIHdpbmRvd3M7IG5vIGRvdWJsZS1pbWFnZSBwbGF0ZWF1IGR1cmluZyBib2FyZCBleGl0LiBOb3JtYWwtc3BlZWQgdXNlciBzYW1wbGUsIG9yZGVyZWQgZGVuc2UgZnJhbWUgcmV2aWV3IGFuZCBhY3R1YWwgc3RhdGUgY2hlY2tzLiBUZWNobmljYWwgY2hlY2tzIGRvIG5vdCBjZXJ0aWZ5IHRoZSB1c2Vy4oCZcyBhZXN0aGV0aWMgc2F0aXNmYWN0aW9uLgo="
    },
    "referenceMotionSpec": {
      "path": "production/new-media-v2/motion-lab/reference-motion-spec.md",
      "mediaType": "text/markdown",
      "byteLength": 13948,
      "sha256": "715d8d8e423da5da89e1ad0b90cd717f1ba311c92a2ca8ca67c8a0b4f96d7ebc",
      "text": "# 连续运动实验：参考拆解与 20 秒样片规格\n\n本轮只验证 15–20 秒代表性动态图文，不重渲染整片，不改已批准文案、不更换用户 BGM。以下将“参考片可观察事实”和“拟制作规格”区分，避免把静帧美感等同于连续运动成立。\n\n## 1. 本次实际检查的连续区间\n\n参考路径读取自 `production/new-media-v2/approval-state.json` 的 `referenceLocalPath`。原片 1024×576、30fps。按原始帧号抽帧，未改变播放速度：\n\n| 区间 | 连续取样 | 内部证据 |\n| --- | --- | --- |\n| 1.400–3.900s，实物落定 | 原片帧 42–117，每 5 帧一张，16 张 | `.cache/reference-v2/motion-lab/object-1.4-3.9.jpg` |\n| 5.600–8.600s，图形转译成标题 | 原片帧 168–258，每 5 帧一张，19 张 | `.cache/reference-v2/motion-lab/title-5.6-8.6.jpg` |\n| 59.000–65.000s，树图解释 | 原片帧 1770–1950，每 6 帧一张，31 张 | `.cache/reference-v2/motion-lab/diagram-59-65.jpg` |\n\n另实际检查当前完整成片 28–38s、39–48s，每 0.5 秒一张，联系表分别是 `current-28-38.jpg` 与 `current-39-48.jpg`。所有联系表只用于内部观察，未上传参考片抽帧。下述面积与字号比例是画面估测，不是原工程参数；时间精度受约 0.17–0.20 秒采样间隔限制。\n\n## 2. 三类运动的实际语法\n\n### A. 实物入场：接触之后收敛，文字不跟着晃\n\n**事实。** 1.4s 的骰子仍在翻转并有残影，1.567–1.9s 可见朝向快速变化和地面接触；2.067–2.567s 倾斜幅度逐步收小；2.733s 后已接近稳定立方体，2.9–3.2s 仍有细微转动但构图不再大幅变化。地面细椭圆、碎屑／微光和投影与接触位置相关联。下方句子在 1.4–2.9s 基本固定，3.067s 左右才开始退去。\n\n- 骰子宽约画面 15%–20%，高约 25%–33%；主体在中间略偏下，左右大面积暗部。\n- 底部句子的基线约在高度 86% 一带，字高约高度 4%–5%；主体和文字不是一起滑入／一起弹跳。\n- 可见的是“较快的翻转 → 接触／小回弹 → 衰减落定 → 稳态阅读”，不是匀速旋转后突然停机。\n\n**本题可迁移规格。** 红心的激活或信号落点用短促接触反馈；位移到达后，旋转或微缩放允许多延迟 0.10–0.18 秒才收敛。不能把整颗红心、字幕、背景同时套一条 1.3 秒缓动。无需复制骰子、碎屑或它的具体轨迹。\n\n### B. 图形与标题转场：先撤旧焦点，再形成新焦点，最后补关系\n\n**事实。** 5.6–6.1s 的线框骰子与周围 `1/6` 已可读；6.267–6.433s 旧底部句子模糊退出；6.6s 图形仍在局部光雾中可辨。6.767–7.267s 新标题从局部模糊、点尘逐步清晰，文字位置近似稳定；7.433s 主标题基本稳定。7.6–8.1s 才接着描出下方曲线和补入较小说明。它没有让主标题、曲线、说明同时完成淡入。\n\n- 主标题约占宽度 50%–55%，字高约高度 13%–16%，中心在画面中部；比图内注释大数倍。\n- 曲线和小字属于第二、第三阅读层，等主标题成立后才补足。\n- 光效集中在旧主体转译为新主体的过渡位置；清晰后明显减弱，避免整段持续闪烁。\n\n**本题可迁移规格。** 用同一颗红心／信号点保持身份，过渡时先减弱手机外框，再让信号点沿曲线到下一构图的输入位置。光晕只在“红心变为信号”“信号被记录”的事件附近短暂出现。参考此处有较亮的光雾，但用户本版要求纯黑与暗波点，因此**不复制整屏泛白**，仅用局部、低透明度暖光作为事件反馈。\n\n### C. 图解生长：父节点到子节点，得到结果之后再读结果\n\n**事实。** 59.0s 的右侧树图只展开到少数节点；59.2–60.8s 按层向右增加分支和节点。父分支在先，新一层从已经成立的节点继续生长。约 61.0–61.2s 最右结果逐步出现，底部句子转入“16种未来”的解释。61.4–62.0s 红色路径从起点贯通到右下的特定结果，结果对照随之明确。62.0–63.2s 布局基本稳定，观众获得比较和阅读时间。63.6–65s 焦点进一步偏向右侧树图，左侧旧比分退暗，树图保留，并非全屏清空再加载下一张图。\n\n- 图解区域约占宽度 55%–60%、高度 45%–50%，主体在中右部；左侧旧证据较小且逐步退暗。\n- 底部解释句继续在高度 86% 左右稳定居中。旧句先退，新句在信息成立的阶段逐步变清楚，没有一直追着图形移动。\n- 生长与读句有分工：约两秒展开，约一秒强调路径，再留一秒以上比较；它不是一条线足足慢画五秒，也不是所有线一起出现后让粒子空转。\n\n**本题可迁移规格。** 先显示“停留／重看／点赞”的行为源；到“被平台记录，变成信号”时，才发出沿路径行进的输入脉冲；脉冲抵达记录点后，该节点才亮起；到“成为推荐的参考”时，再展开输出支路。新图不能提前展示尚未说明的结果。\n\n## 3. 当前完整成片的实际问题\n\n这些问题来自本次连续抽帧和 `src/new-media-v2/final/NewMediaFinal.tsx`、`Diagrams.tsx` 的实际实现，不是只看封面作出的判断。\n\n1. **阅读先于图形成立。** `Caption` 在 0.55s 完成淡入，图解却叠加 `VisualGroup` 0.8s、`FinalDiagram.enter` 1.35s 和各条路径自己的 1–3s 渐显。当前 39.0s 实际输出近黑，39.5s 只有淡淡图标，40s 后线图才开始可辨。观众先读到整句，再等待图解追上，不容易把动词与动作连起来。\n2. **结果早于输入。** `signals` 中央节点在 local 1.5–2.7s 出现，三条输入线到 local 3.2–3.6s 才完成；输出支路 local 2.3s 已开始。当前 41.5s 已看到结果方向分叉，字幕仍是“停留、重看、点赞……”。应由“输入到达”驱动记录点和输出，不让它们各自按独立时钟先行出现。\n3. **图形身份在场景边界丢失。** 当前 34.5–36.5s 红心缩成非常小的点，36.3–39s 虽描出一条局部曲线，但在 39s 被整体丢弃；下一组图重新从别处淡入。48s 又整体近黑。局部动作没有实际把观众带进下一张图，视觉更像多张模板轮流显隐。\n4. **大部分运动共用一个速度性格。** 主场 `e()` 使用同一条 `cubic-bezier(0.4,0,0.2,1)`；图解大量 `progress()` 使用同一条 `cubic-bezier(0.2,0.72,0.22,1)`。即便空间路径是三次贝塞尔，位移、透明度、线条和物件仍同时起步、同时减速。空间曲线不等于有物理层次的时间曲线。\n5. **循环粒子没有解释事件。** 信号点的 `phase` 取全局时间循环，与“哪一次停留触发、何时到达、到达后累计”没有绑定。当前 43–47s 大部分骨架已经完成，少量点仍以相似速度漂动；它增加了动的表象，却没有新增可理解的反馈。\n6. **短句也消耗同样的入场时间。** 当前每句固定 0.55s 淡入、0.75s 微移，但 31–32.45s 的短句只有 1.45s；入场占比与 3.5 秒长句差别很大。慢不是所有事件都拉长。应减少字幕无意义的入场，把时间让给稳定阅读和关键动作。\n\n## 4. 建议本轮样片：全局 28–48 秒\n\n该 20 秒同时覆盖：一次具象物件反应、一次消失／保留的对照、一次跨构图转译、一次图解因果。它比 39–59 秒更能检验“物件如何变成图解”，而不是只检验三张线图模板能否依次出现。\n\n保持已批准的 8 条句子和原时间段不变：\n\n| 全局时间 | 原句 | 拟验证的运动与停留 |\n| --- | --- | --- |\n| 28–31s | 顺手，点亮一颗红心。 | 手机已经在场；红心在 28.1–28.7s 完成短距离弧线／激活，接触后微小回弹，不和字幕一起缓慢飘入。28.9–31s 明确保持可读稳态。 |\n| 31–32.45s | 然后，划走。 | 31.2s 起屏幕内容上移，前半程加速、随后迅速离开，不给整个手机套完整缓慢淡出；手机外壳保留，红心不跟内容一同消失。动作主要在约 0.65–0.8s 内完成。 |\n| 32.45–34.1s | 视频过去了。 | 空屏／退出后的对照保持约 0.6–0.8s，再减弱手机外壳；红心仍清楚可见。这里的静止是叙事，不用粒子填空。 |\n| 34.1–36.3s | 你的反应，留下了。 | 红心 0.35–0.5s 收成一个仍可读的信号形态，直径约 32–44px，而非几乎不可见的 12px；留至少 0.8s 稳态，观众先看懂“保留”。 |\n| 36.3–39s | 刚才那几秒，去了哪里？ | 同一信号沿一条弧线移向下一图的“点赞”输入位置，轨迹尾部适度保留；不是另造一颗无关的点。临近 39s 只补入下一构图的两个其余输入锚点，保持信号身份和视线连续。 |\n| 39–42s | 停留、重看、点赞…… | 三个行为源以约 0.35–0.45s 间隔依次被激活；文字位置稳定，三个源激活后留约 1s 比较。不提前展开完整推荐结果。 |\n| 42–45.5s | 它们被平台记录，变成信号。 | 输入脉冲依次沿路径走向记录点，单次传输约 0.65–0.9s；抵达之后才出现微光／记录点状态变化，最后一次抵达后保留 0.7–1s 稳态。每条路可以有不同路程和速度，但不随机漂动。 |\n| 45.5–48s | 成为推荐的参考。 | 从已成立的记录点展开两到三条输出支路，末端结果在路径到达后出现；约 47.1s 前完成，剩余约 0.9s 完整读图。末帧仍保留结构，不以全黑作为样片结尾。 |\n\n以上是样片的具体动作建议，不是对参考作者工程参数的复刻。允许按实际动画结果微调动作子区间，但不动文案措辞、字幕段落和 BGM 对齐。\n\n## 5. 可直接实施的画面与运动约束\n\n### 构图与字级\n\n- 保留用户指定的“中心主体＋下方居中说明”排版。主视觉活动区约 `x=350–1570、y=130–740`；主字幕稳定在当前 `y≈846` 区域，底部至少保留 100px 安全空间。\n- 保留当前已选宋体主字幕，建议继续使用现有 84px，避免本轮同时换字体、改字号和改运动而失去比较依据。图内辅助标签保持约 32–40px；它们是分类，不再承担另一套长句。\n- 手机宽约 420px（画面宽 22%）；转入图解后结构可占宽 55%–65%，不能让单个微点在数秒内成为几乎唯一可见内容。信号点可以小，但应有可辨的源、目标或留痕提供尺度。\n- 主线继续遵循用户要求的 6–9px；暗部辅助线可降至约 3–4px 和较低透明度，避免所有线一样粗、一样亮。米白正文、暖金信息、红心局部红不改为新的大面积色彩系统。\n- 只在纯黑和暗色浅波点之间交替；波点运动低于前景动作，不引入浅底、全屏闪白或多种新背景。\n\n### 时间曲线必须按动作角色区分\n\n- **划走／离开**：短等待、明显加速、快速越界；不要在越界前慢慢刹到零。可在出画后再结束状态。\n- **物件落位／激活**：较快到达，最后 10%–15% 路程减速，随后 0.10–0.18s 小幅角度／尺寸收敛；只允许一次很小回弹。\n- **线条生长**：按路径弧长推进，父段先到节点，子段随后开始；不使用一段全图统一 opacity 代替生长。\n- **信息传输**：每个脉冲有明确发射、行进、到达、结果四个状态；不能在路径尚未成立时，沿整条路径同时摆满循环粒子。\n- **文字**：默认 0.16–0.24s 清晰完成后稳定，不持续上下漂动；最多给新句一次很小的显现变化。需要强调的词用颜色／局部明暗，不让整句反复缩放。\n- **稳态**：每一解释单元必须有 0.7–1.2s 前景几乎不改变的窗口；背景可以呼吸，但不要让“停留”变成机械的全画面悬浮。\n\n### 遮罩、光效与音效的因果\n\n- 手机内容使用屏幕内部遮罩，划走时只裁切内容，不把外壳、红心和字幕一并擦除。\n- 线条揭示的 mask 与正在前进的端点保持一致；端点抵达之前，结果节点不得提前亮起。\n- 光效只跟随“激活／被记录／到达”的事件，不做全场常驻大光圈。局部反馈可约 0.08s 起、0.25–0.4s 衰减，半径随事件轻扩后回落。\n- 音效只建议落在红心激活、划走、记录点到达、推荐支路收束等少量节点。可参考既有客观起音表中 28.725s、31.648s、33.244s、45.736s 附近的时间，但必须以新动作的实际到达时刻为准。这里只作视听对齐建议，没有人工听审。\n- 沿用已核实的用户 BGM 偏移：参考／全局时间 `t` 对应用户 BGM `t+0.048s`；本样片用 BGM 28.048–48.048s。音乐不换曲、不变速。音效只作为重点反馈，不能每条线、每个字都叠加声音。\n\n## 6. 样片验收应检查连续过程\n\n1. 按正常速度看完整 20 秒：不暂停时，能否看懂红心如何变成被记录的信号、再成为推荐参考；不能只问截图是否漂亮。\n2. 逐帧检查事件前后：路径抵达前有没有结果先出现，遮罩有没有切掉不该消失的对象，物件跨构图是否保持身份。\n3. 检查每条字幕出现后的 0.7–1.2 秒：重要图形是否已经成立，字幕是否稳定，读图是否还在等下一层慢慢淡入。\n4. 检查 39s、42s、45.5s 和 48s 附近：不出现因所有层同时淡出而造成的近黑断接，不把两个语义步骤塞在一句话出现之前。\n5. 交付真实 MP4，并从该 MP4 导出 0.2–0.5s 连续联系表作内部复核；仍不能以三张关键帧、技术解码通过或工具图像卡片代替用户看到连续样片。\n\n本文件只给观察与可执行规格。本轮没有修改文案、BGM、动画源码、正式素材或输出视频，没有提交 Git，也没有重渲染整片。\n",
      "bytesBase64": "IyDov57nu63ov5Dliqjlrp7pqozvvJrlj4LogIPmi4bop6PkuI4gMjAg56eS5qC354mH6KeE5qC8CgrmnKzova7lj6rpqozor4EgMTXigJMyMCDnp5Lku6PooajmgKfliqjmgIHlm77mlofvvIzkuI3ph43muLLmn5PmlbTniYfvvIzkuI3mlLnlt7Lmibnlh4bmlofmoYjjgIHkuI3mm7TmjaLnlKjmiLcgQkdN44CC5Lul5LiL5bCG4oCc5Y+C6ICD54mH5Y+v6KeC5a+f5LqL5a6e4oCd5ZKM4oCc5ouf5Yi25L2c6KeE5qC84oCd5Yy65YiG77yM6YG/5YWN5oqK6Z2Z5bin576O5oSf562J5ZCM5LqO6L+e57ut6L+Q5Yqo5oiQ56uL44CCCgojIyAxLiDmnKzmrKHlrp7pmYXmo4Dmn6XnmoTov57nu63ljLrpl7QKCuWPguiAg+i3r+W+hOivu+WPluiHqiBgcHJvZHVjdGlvbi9uZXctbWVkaWEtdjIvYXBwcm92YWwtc3RhdGUuanNvbmAg55qEIGByZWZlcmVuY2VMb2NhbFBhdGhg44CC5Y6f54mHIDEwMjTDlzU3NuOAgTMwZnBz44CC5oyJ5Y6f5aeL5bin5Y+35oq95bin77yM5pyq5pS55Y+Y5pKt5pS+6YCf5bqm77yaCgp8IOWMuumXtCB8IOi/nue7reWPluagtyB8IOWGhemDqOivgeaNriB8CnwgLS0tIHwgLS0tIHwgLS0tIHwKfCAxLjQwMOKAkzMuOTAwc++8jOWunueJqeiQveWumiB8IOWOn+eJh+W4pyA0MuKAkzExN++8jOavjyA1IOW4p+S4gOW8oO+8jDE2IOW8oCB8IGAuY2FjaGUvcmVmZXJlbmNlLXYyL21vdGlvbi1sYWIvb2JqZWN0LTEuNC0zLjkuanBnYCB8CnwgNS42MDDigJM4LjYwMHPvvIzlm77lvaLovazor5HmiJDmoIfpopggfCDljp/niYfluKcgMTY44oCTMjU477yM5q+PIDUg5bin5LiA5byg77yMMTkg5bygIHwgYC5jYWNoZS9yZWZlcmVuY2UtdjIvbW90aW9uLWxhYi90aXRsZS01LjYtOC42LmpwZ2AgfAp8IDU5LjAwMOKAkzY1LjAwMHPvvIzmoJHlm77op6Pph4ogfCDljp/niYfluKcgMTc3MOKAkzE5NTDvvIzmr48gNiDluKfkuIDlvKDvvIwzMSDlvKAgfCBgLmNhY2hlL3JlZmVyZW5jZS12Mi9tb3Rpb24tbGFiL2RpYWdyYW0tNTktNjUuanBnYCB8Cgrlj6blrp7pmYXmo4Dmn6XlvZPliY3lrozmlbTmiJDniYcgMjjigJMzOHPjgIEzOeKAkzQ4c++8jOavjyAwLjUg56eS5LiA5byg77yM6IGU57O76KGo5YiG5Yir5pivIGBjdXJyZW50LTI4LTM4LmpwZ2Ag5LiOIGBjdXJyZW50LTM5LTQ4LmpwZ2DjgILmiYDmnInogZTns7vooajlj6rnlKjkuo7lhoXpg6jop4Llr5/vvIzmnKrkuIrkvKDlj4LogIPniYfmir3luKfjgILkuIvov7DpnaLnp6/kuI7lrZflj7fmr5TkvovmmK/nlLvpnaLkvLDmtYvvvIzkuI3mmK/ljp/lt6XnqIvlj4LmlbDvvJvml7bpl7Tnsr7luqblj5fnuqYgMC4xN+KAkzAuMjAg56eS6YeH5qC36Ze06ZqU6ZmQ5Yi244CCCgojIyAyLiDkuInnsbvov5DliqjnmoTlrp7pmYXor63ms5UKCiMjIyBBLiDlrp7nianlhaXlnLrvvJrmjqXop6bkuYvlkI7mlLbmlZvvvIzmloflrZfkuI3ot5/nnYDmmYMKCioq5LqL5a6e44CCKiogMS40cyDnmoTpqrDlrZDku43lnKjnv7vovazlubbmnInmrovlvbHvvIwxLjU2N+KAkzEuOXMg5Y+v6KeB5pyd5ZCR5b+r6YCf5Y+Y5YyW5ZKM5Zyw6Z2i5o6l6Kem77ybMi4wNjfigJMyLjU2N3Mg5YC+5pac5bmF5bqm6YCQ5q2l5pS25bCP77ybMi43MzNzIOWQjuW3suaOpei/keeos+Wumueri+aWueS9k++8jDIuOeKAkzMuMnMg5LuN5pyJ57uG5b6u6L2s5Yqo5L2G5p6E5Zu+5LiN5YaN5aSn5bmF5Y+Y5YyW44CC5Zyw6Z2i57uG5qSt5ZyG44CB56KO5bGR77yP5b6u5YWJ5ZKM5oqV5b2x5LiO5o6l6Kem5L2N572u55u45YWz6IGU44CC5LiL5pa55Y+l5a2Q5ZyoIDEuNOKAkzIuOXMg5Z+65pys5Zu65a6a77yMMy4wNjdzIOW3puWPs+aJjeW8gOWni+mAgOWOu+OAggoKLSDpqrDlrZDlrr3nuqbnlLvpnaIgMTUl4oCTMjAl77yM6auY57qmIDI1JeKAkzMzJe+8m+S4u+S9k+WcqOS4remXtOeVpeWBj+S4i++8jOW3puWPs+Wkp+mdouenr+aal+mDqOOAggotIOW6lemDqOWPpeWtkOeahOWfuue6v+e6puWcqOmrmOW6piA4NiUg5LiA5bim77yM5a2X6auY57qm6auY5bqmIDQl4oCTNSXvvJvkuLvkvZPlkozmloflrZfkuI3mmK/kuIDotbfmu5HlhaXvvI/kuIDotbflvLnot7PjgIIKLSDlj6/op4HnmoTmmK/igJzovoPlv6vnmoTnv7vovawg4oaSIOaOpeinpu+8j+Wwj+WbnuW8uSDihpIg6KGw5YeP6JC95a6aIOKGkiDnqLPmgIHpmIXor7vigJ3vvIzkuI3mmK/ljIDpgJ/ml4vovazlkI7nqoHnhLblgZzmnLrjgIIKCioq5pys6aKY5Y+v6L+B56e76KeE5qC844CCKiog57qi5b+D55qE5r+A5rS75oiW5L+h5Y+36JC954K555So55+t5L+D5o6l6Kem5Y+N6aaI77yb5L2N56e75Yiw6L6+5ZCO77yM5peL6L2s5oiW5b6u57yp5pS+5YWB6K645aSa5bu26L+fIDAuMTDigJMwLjE4IOenkuaJjeaUtuaVm+OAguS4jeiDveaKiuaVtOmil+e6ouW/g+OAgeWtl+W5leOAgeiDjOaZr+WQjOaXtuWll+S4gOadoSAxLjMg56eS57yT5Yqo44CC5peg6ZyA5aSN5Yi26aqw5a2Q44CB56KO5bGR5oiW5a6D55qE5YW35L2T6L2o6L+544CCCgojIyMgQi4g5Zu+5b2i5LiO5qCH6aKY6L2s5Zy677ya5YWI5pKk5pen54Sm54K577yM5YaN5b2i5oiQ5paw54Sm54K577yM5pyA5ZCO6KGl5YWz57O7CgoqKuS6i+WunuOAgioqIDUuNuKAkzYuMXMg55qE57q/5qGG6aqw5a2Q5LiO5ZGo5Zu0IGAxLzZgIOW3suWPr+ivu++8mzYuMjY34oCTNi40MzNzIOaXp+W6lemDqOWPpeWtkOaooeeziumAgOWHuu+8mzYuNnMg5Zu+5b2i5LuN5Zyo5bGA6YOo5YWJ6Zu+5Lit5Y+v6L6o44CCNi43NjfigJM3LjI2N3Mg5paw5qCH6aKY5LuO5bGA6YOo5qih57OK44CB54K55bCY6YCQ5q2l5riF5pmw77yM5paH5a2X5L2N572u6L+R5Ly856iz5a6a77ybNy40MzNzIOS4u+agh+mimOWfuuacrOeos+WumuOAgjcuNuKAkzguMXMg5omN5o6l552A5o+P5Ye65LiL5pa55puy57q/5ZKM6KGl5YWl6L6D5bCP6K+05piO44CC5a6D5rKh5pyJ6K6p5Li75qCH6aKY44CB5puy57q/44CB6K+05piO5ZCM5pe25a6M5oiQ5reh5YWl44CCCgotIOS4u+agh+mimOe6puWNoOWuveW6piA1MCXigJM1NSXvvIzlrZfpq5jnuqbpq5jluqYgMTMl4oCTMTYl77yM5Lit5b+D5Zyo55S76Z2i5Lit6YOo77yb5q+U5Zu+5YaF5rOo6YeK5aSn5pWw5YCN44CCCi0g5puy57q/5ZKM5bCP5a2X5bGe5LqO56ys5LqM44CB56ys5LiJ6ZiF6K+75bGC77yM562J5Li75qCH6aKY5oiQ56uL5ZCO5omN6KGl6Laz44CCCi0g5YWJ5pWI6ZuG5Lit5Zyo5pen5Li75L2T6L2s6K+R5Li65paw5Li75L2T55qE6L+H5rih5L2N572u77yb5riF5pmw5ZCO5piO5pi+5YeP5byx77yM6YG/5YWN5pW05q615oyB57ut6Zeq54OB44CCCgoqKuacrOmimOWPr+i/geenu+inhOagvOOAgioqIOeUqOWQjOS4gOmil+e6ouW/g++8j+S/oeWPt+eCueS/neaMgei6q+S7ve+8jOi/h+a4oeaXtuWFiOWHj+W8seaJi+acuuWkluahhu+8jOWGjeiuqeS/oeWPt+eCueayv+absue6v+WIsOS4i+S4gOaehOWbvueahOi+k+WFpeS9jee9ruOAguWFieaZleWPquWcqOKAnOe6ouW/g+WPmOS4uuS/oeWPt+KAneKAnOS/oeWPt+iiq+iusOW9leKAneeahOS6i+S7tumZhOi/keefreaaguWHuueOsOOAguWPguiAg+atpOWkhOaciei+g+S6rueahOWFiembvu+8jOS9hueUqOaIt+acrOeJiOimgeaxgue6r+m7keS4juaal+azoueCue+8jOWboOatpCoq5LiN5aSN5Yi25pW05bGP5rOb55m9KirvvIzku4XnlKjlsYDpg6jjgIHkvY7pgI/mmI7luqbmmpblhYnkvZzkuLrkuovku7blj43ppojjgIIKCiMjIyBDLiDlm77op6PnlJ/plb/vvJrniLboioLngrnliLDlrZDoioLngrnvvIzlvpfliLDnu5PmnpzkuYvlkI7lho3or7vnu5PmnpwKCioq5LqL5a6e44CCKiogNTkuMHMg55qE5Y+z5L6n5qCR5Zu+5Y+q5bGV5byA5Yiw5bCR5pWw6IqC54K577ybNTkuMuKAkzYwLjhzIOaMieWxguWQkeWPs+WinuWKoOWIhuaUr+WSjOiKgueCueOAgueItuWIhuaUr+WcqOWFiO+8jOaWsOS4gOWxguS7juW3sue7j+aIkOeri+eahOiKgueCuee7p+e7reeUn+mVv+OAgue6piA2MS4w4oCTNjEuMnMg5pyA5Y+z57uT5p6c6YCQ5q2l5Ye6546w77yM5bqV6YOo5Y+l5a2Q6L2s5YWl4oCcMTbnp43mnKrmnaXigJ3nmoTop6Pph4rjgII2MS404oCTNjIuMHMg57qi6Imy6Lev5b6E5LuO6LW354K56LSv6YCa5Yiw5Y+z5LiL55qE54m55a6a57uT5p6c77yM57uT5p6c5a+554Wn6ZqP5LmL5piO56Gu44CCNjIuMOKAkzYzLjJzIOW4g+WxgOWfuuacrOeos+Wumu+8jOinguS8l+iOt+W+l+avlOi+g+WSjOmYheivu+aXtumXtOOAgjYzLjbigJM2NXMg54Sm54K56L+b5LiA5q2l5YGP5ZCR5Y+z5L6n5qCR5Zu+77yM5bem5L6n5pen5q+U5YiG6YCA5pqX77yM5qCR5Zu+5L+d55WZ77yM5bm26Z2e5YWo5bGP5riF56m65YaN5Yqg6L295LiL5LiA5byg5Zu+44CCCgotIOWbvuino+WMuuWfn+e6puWNoOWuveW6piA1NSXigJM2MCXjgIHpq5jluqYgNDUl4oCTNTAl77yM5Li75L2T5Zyo5Lit5Y+z6YOo77yb5bem5L6n5pen6K+B5o2u6L6D5bCP5LiU6YCQ5q2l6YCA5pqX44CCCi0g5bqV6YOo6Kej6YeK5Y+l57un57ut5Zyo6auY5bqmIDg2JSDlt6blj7PnqLPlrprlsYXkuK3jgILml6flj6XlhYjpgIDvvIzmlrDlj6XlnKjkv6Hmga/miJDnq4vnmoTpmLbmrrXpgJDmraXlj5jmuIXmpZrvvIzmsqHmnInkuIDnm7Tov73nnYDlm77lvaLnp7vliqjjgIIKLSDnlJ/plb/kuI7or7vlj6XmnInliIblt6XvvJrnuqbkuKTnp5LlsZXlvIDvvIznuqbkuIDnp5LlvLrosIPot6/lvoTvvIzlho3nlZnkuIDnp5Lku6XkuIrmr5TovoPvvJvlroPkuI3mmK/kuIDmnaHnur/otrPotrPmhaLnlLvkupTnp5LvvIzkuZ/kuI3mmK/miYDmnInnur/kuIDotbflh7rnjrDlkI7orqnnspLlrZDnqbrovazjgIIKCioq5pys6aKY5Y+v6L+B56e76KeE5qC844CCKiog5YWI5pi+56S64oCc5YGc55WZ77yP6YeN55yL77yP54K56LWe4oCd55qE6KGM5Li65rqQ77yb5Yiw4oCc6KKr5bmz5Y+w6K6w5b2V77yM5Y+Y5oiQ5L+h5Y+34oCd5pe277yM5omN5Y+R5Ye65rK/6Lev5b6E6KGM6L+b55qE6L6T5YWl6ISJ5Yay77yb6ISJ5Yay5oq16L6+6K6w5b2V54K55ZCO77yM6K+l6IqC54K55omN5Lqu6LW377yb5Yiw4oCc5oiQ5Li65o6o6I2Q55qE5Y+C6ICD4oCd5pe277yM5YaN5bGV5byA6L6T5Ye65pSv6Lev44CC5paw5Zu+5LiN6IO95o+Q5YmN5bGV56S65bCa5pyq6K+05piO55qE57uT5p6c44CCCgojIyAzLiDlvZPliY3lrozmlbTmiJDniYfnmoTlrp7pmYXpl67popgKCui/meS6m+mXrumimOadpeiHquacrOasoei/nue7reaKveW4p+WSjCBgc3JjL25ldy1tZWRpYS12Mi9maW5hbC9OZXdNZWRpYUZpbmFsLnRzeGDjgIFgRGlhZ3JhbXMudHN4YCDnmoTlrp7pmYXlrp7njrDvvIzkuI3mmK/lj6rnnIvlsIHpnaLkvZzlh7rnmoTliKTmlq3jgIIKCjEuICoq6ZiF6K+75YWI5LqO5Zu+5b2i5oiQ56uL44CCKiogYENhcHRpb25gIOWcqCAwLjU1cyDlrozmiJDmt6HlhaXvvIzlm77op6PljbTlj6DliqAgYFZpc3VhbEdyb3VwYCAwLjhz44CBYEZpbmFsRGlhZ3JhbS5lbnRlcmAgMS4zNXMg5ZKM5ZCE5p2h6Lev5b6E6Ieq5bex55qEIDHigJMzcyDmuJDmmL7jgILlvZPliY0gMzkuMHMg5a6e6ZmF6L6T5Ye66L+R6buR77yMMzkuNXMg5Y+q5pyJ5reh5reh5Zu+5qCH77yMNDBzIOWQjue6v+WbvuaJjeW8gOWni+WPr+i+qOOAguinguS8l+WFiOivu+WIsOaVtOWPpe+8jOWGjeetieW+heWbvuino+i/veS4iu+8jOS4jeWuueaYk+aKiuWKqOivjeS4juWKqOS9nOi/nui1t+adpeOAggoyLiAqKue7k+aenOaXqeS6jui+k+WFpeOAgioqIGBzaWduYWxzYCDkuK3lpK7oioLngrnlnKggbG9jYWwgMS414oCTMi43cyDlh7rnjrDvvIzkuInmnaHovpPlhaXnur/liLAgbG9jYWwgMy4y4oCTMy42cyDmiY3lrozmiJDvvJvovpPlh7rmlK/ot68gbG9jYWwgMi4zcyDlt7LlvIDlp4vjgILlvZPliY0gNDEuNXMg5bey55yL5Yiw57uT5p6c5pa55ZCR5YiG5Y+J77yM5a2X5bmV5LuN5piv4oCc5YGc55WZ44CB6YeN55yL44CB54K56LWe4oCm4oCm4oCd44CC5bqU55Sx4oCc6L6T5YWl5Yiw6L6+4oCd6amx5Yqo6K6w5b2V54K55ZKM6L6T5Ye677yM5LiN6K6p5a6D5Lus5ZCE6Ieq5oyJ54us56uL5pe26ZKf5YWI6KGM5Ye6546w44CCCjMuICoq5Zu+5b2i6Lqr5Lu95Zyo5Zy65pmv6L6555WM5Lii5aSx44CCKiog5b2T5YmNIDM0LjXigJMzNi41cyDnuqLlv4PnvKnmiJDpnZ7luLjlsI/nmoTngrnvvIwzNi4z4oCTMzlzIOiZveaPj+WHuuS4gOadoeWxgOmDqOabsue6v++8jOS9huWcqCAzOXMg6KKr5pW05L2T5Lii5byD77yb5LiL5LiA57uE5Zu+6YeN5paw5LuO5Yir5aSE5reh5YWl44CCNDhzIOWPiOaVtOS9k+i/kem7keOAguWxgOmDqOWKqOS9nOayoeacieWunumZheaKiuinguS8l+W4pui/m+S4i+S4gOW8oOWbvu+8jOinhuinieabtOWDj+WkmuW8oOaooeadv+i9rua1geaYvumakOOAggo0LiAqKuWkp+mDqOWIhui/kOWKqOWFseeUqOS4gOS4qumAn+W6puaAp+agvOOAgioqIOS4u+WcuiBgZSgpYCDkvb/nlKjlkIzkuIDmnaEgYGN1YmljLWJlemllcigwLjQsMCwwLjIsMSlg77yb5Zu+6Kej5aSn6YePIGBwcm9ncmVzcygpYCDkvb/nlKjlkIzkuIDmnaEgYGN1YmljLWJlemllcigwLjIsMC43MiwwLjIyLDEpYOOAguWNs+S+v+epuumXtOi3r+W+hOaYr+S4ieasoei0neWhnuWwlO+8jOS9jeenu+OAgemAj+aYjuW6puOAgee6v+adoeWSjOeJqeS7tuS7jeWQjOaXtui1t+atpeOAgeWQjOaXtuWHj+mAn+OAguepuumXtOabsue6v+S4jeetieS6juacieeJqeeQhuWxguasoeeahOaXtumXtOabsue6v+OAggo1LiAqKuW+queOr+eykuWtkOayoeacieino+mHiuS6i+S7tuOAgioqIOS/oeWPt+eCueeahCBgcGhhc2VgIOWPluWFqOWxgOaXtumXtOW+queOr++8jOS4juKAnOWTquS4gOasoeWBnOeVmeinpuWPkeOAgeS9leaXtuWIsOi+vuOAgeWIsOi+vuWQjue0r+iuoeKAneayoeaciee7keWumuOAguW9k+WJjSA0M+KAkzQ3cyDlpKfpg6jliIbpqqjmnrblt7Lnu4/lrozmiJDvvIzlsJHph4/ngrnku43ku6Xnm7jkvLzpgJ/luqbmvILliqjvvJvlroPlop7liqDkuobliqjnmoTooajosaHvvIzljbTmsqHmnInmlrDlop7lj6/nkIbop6PnmoTlj43ppojjgIIKNi4gKirnn63lj6XkuZ/mtojogJflkIzmoLfnmoTlhaXlnLrml7bpl7TjgIIqKiDlvZPliY3mr4/lj6Xlm7rlrpogMC41NXMg5reh5YWl44CBMC43NXMg5b6u56e777yM5L2GIDMx4oCTMzIuNDVzIOeahOefreWPpeWPquaciSAxLjQ1c++8m+WFpeWcuuWNoOavlOS4jiAzLjUg56eS6ZW/5Y+l5beu5Yir5b6I5aSn44CC5oWi5LiN5piv5omA5pyJ5LqL5Lu26YO95ouJ6ZW/44CC5bqU5YeP5bCR5a2X5bmV5peg5oSP5LmJ55qE5YWl5Zy677yM5oqK5pe26Ze06K6p57uZ56iz5a6a6ZiF6K+75ZKM5YWz6ZSu5Yqo5L2c44CCCgojIyA0LiDlu7rorq7mnKzova7moLfniYfvvJrlhajlsYAgMjjigJM0OCDnp5IKCuivpSAyMCDnp5LlkIzml7bopobnm5bvvJrkuIDmrKHlhbfosaHnianku7blj43lupTjgIHkuIDmrKHmtojlpLHvvI/kv53nlZnnmoTlr7nnhafjgIHkuIDmrKHot6jmnoTlm77ovazor5HjgIHkuIDmrKHlm77op6Plm6DmnpzjgILlroPmr5QgMznigJM1OSDnp5Lmm7Tog73mo4DpqozigJznianku7blpoLkvZXlj5jmiJDlm77op6PigJ3vvIzogIzkuI3mmK/lj6rmo4DpqozkuInlvKDnur/lm77mqKHmnb/og73lkKbkvp3mrKHlh7rnjrDjgIIKCuS/neaMgeW3suaJueWHhueahCA4IOadoeWPpeWtkOWSjOWOn+aXtumXtOauteS4jeWPmO+8mgoKfCDlhajlsYDml7bpl7QgfCDljp/lj6UgfCDmi5/pqozor4HnmoTov5DliqjkuI7lgZznlZkgfAp8IC0tLSB8IC0tLSB8IC0tLSB8CnwgMjjigJMzMXMgfCDpobrmiYvvvIzngrnkuq7kuIDpopfnuqLlv4PjgIIgfCDmiYvmnLrlt7Lnu4/lnKjlnLrvvJvnuqLlv4PlnKggMjguMeKAkzI4LjdzIOWujOaIkOefrei3neemu+W8p+e6v++8j+a/gOa0u++8jOaOpeinpuWQjuW+ruWwj+WbnuW8ue+8jOS4jeWSjOWtl+W5leS4gOi1t+e8k+aFoumjmOWFpeOAgjI4LjnigJMzMXMg5piO56Gu5L+d5oyB5Y+v6K+756iz5oCB44CCIHwKfCAzMeKAkzMyLjQ1cyB8IOeEtuWQju+8jOWIkui1sOOAgiB8IDMxLjJzIOi1t+Wxj+W5leWGheWuueS4iuenu++8jOWJjeWNiueoi+WKoOmAn+OAgemaj+WQjui/hemAn+emu+W8gO+8jOS4jee7meaVtOS4quaJi+acuuWll+WujOaVtOe8k+aFoua3oeWHuu+8m+aJi+acuuWkluWjs+S/neeVme+8jOe6ouW/g+S4jei3n+WGheWuueS4gOWQjOa2iOWkseOAguWKqOS9nOS4u+imgeWcqOe6piAwLjY14oCTMC44cyDlhoXlrozmiJDjgIIgfAp8IDMyLjQ14oCTMzQuMXMgfCDop4bpopHov4fljrvkuobjgIIgfCDnqbrlsY/vvI/pgIDlh7rlkI7nmoTlr7nnhafkv53mjIHnuqYgMC424oCTMC44c++8jOWGjeWHj+W8seaJi+acuuWkluWjs++8m+e6ouW/g+S7jea4healmuWPr+ingeOAgui/memHjOeahOmdmeatouaYr+WPmeS6i++8jOS4jeeUqOeykuWtkOWhq+epuuOAgiB8CnwgMzQuMeKAkzM2LjNzIHwg5L2g55qE5Y+N5bqU77yM55WZ5LiL5LqG44CCIHwg57qi5b+DIDAuMzXigJMwLjVzIOaUtuaIkOS4gOS4quS7jeWPr+ivu+eahOS/oeWPt+W9ouaAge+8jOebtOW+hOe6piAzMuKAkzQ0cHjvvIzogIzpnZ7lh6DkuY7kuI3lj6/op4HnmoQgMTJweO+8m+eVmeiHs+WwkSAwLjhzIOeos+aAge+8jOinguS8l+WFiOeci+aHguKAnOS/neeVmeKAneOAgiB8CnwgMzYuM+KAkzM5cyB8IOWImuaJjemCo+WHoOenku+8jOWOu+S6huWTqumHjO+8nyB8IOWQjOS4gOS/oeWPt+ayv+S4gOadoeW8p+e6v+enu+WQkeS4i+S4gOWbvueahOKAnOeCuei1nuKAnei+k+WFpeS9jee9ru+8jOi9qOi/ueWwvumDqOmAguW6puS/neeVme+8m+S4jeaYr+WPpumAoOS4gOmil+aXoOWFs+eahOeCueOAguS4tOi/kSAzOXMg5Y+q6KGl5YWl5LiL5LiA5p6E5Zu+55qE5Lik5Liq5YW25L2Z6L6T5YWl6ZSa54K577yM5L+d5oyB5L+h5Y+36Lqr5Lu95ZKM6KeG57q/6L+e57ut44CCIHwKfCAzOeKAkzQycyB8IOWBnOeVmeOAgemHjeeci+OAgeeCuei1nuKApuKApiB8IOS4ieS4quihjOS4uua6kOS7pee6piAwLjM14oCTMC40NXMg6Ze06ZqU5L6d5qyh6KKr5r+A5rS777yb5paH5a2X5L2N572u56iz5a6a77yM5LiJ5Liq5rqQ5r+A5rS75ZCO55WZ57qmIDFzIOavlOi+g+OAguS4jeaPkOWJjeWxleW8gOWujOaVtOaOqOiNkOe7k+aenOOAgiB8CnwgNDLigJM0NS41cyB8IOWug+S7rOiiq+W5s+WPsOiusOW9le+8jOWPmOaIkOS/oeWPt+OAgiB8IOi+k+WFpeiEieWGsuS+neasoeayv+i3r+W+hOi1sOWQkeiusOW9leeCue+8jOWNleasoeS8oOi+k+e6piAwLjY14oCTMC45c++8m+aKtei+vuS5i+WQjuaJjeWHuueOsOW+ruWFie+8j+iusOW9leeCueeKtuaAgeWPmOWMlu+8jOacgOWQjuS4gOasoeaKtei+vuWQjuS/neeVmSAwLjfigJMxcyDnqLPmgIHjgILmr4/mnaHot6/lj6/ku6XmnInkuI3lkIzot6/nqIvlkozpgJ/luqbvvIzkvYbkuI3pmo/mnLrmvILliqjjgIIgfAp8IDQ1LjXigJM0OHMgfCDmiJDkuLrmjqjojZDnmoTlj4LogIPjgIIgfCDku47lt7LmiJDnq4vnmoTorrDlvZXngrnlsZXlvIDkuKTliLDkuInmnaHovpPlh7rmlK/ot6/vvIzmnKvnq6/nu5PmnpzlnKjot6/lvoTliLDovr7lkI7lh7rnjrDvvJvnuqYgNDcuMXMg5YmN5a6M5oiQ77yM5Ymp5L2Z57qmIDAuOXMg5a6M5pW06K+75Zu+44CC5pyr5bin5LuN5L+d55WZ57uT5p6E77yM5LiN5Lul5YWo6buR5L2c5Li65qC354mH57uT5bC+44CCIHwKCuS7peS4iuaYr+agt+eJh+eahOWFt+S9k+WKqOS9nOW7uuiuru+8jOS4jeaYr+WvueWPguiAg+S9nOiAheW3peeoi+WPguaVsOeahOWkjeWIu+OAguWFgeiuuOaMieWunumZheWKqOeUu+e7k+aenOW+ruiwg+WKqOS9nOWtkOWMuumXtO+8jOS9huS4jeWKqOaWh+ahiOaOqui+nuOAgeWtl+W5leauteiQveWSjCBCR00g5a+56b2Q44CCCgojIyA1LiDlj6/nm7TmjqXlrp7mlr3nmoTnlLvpnaLkuI7ov5DliqjnuqbmnZ8KCiMjIyDmnoTlm77kuI7lrZfnuqcKCi0g5L+d55WZ55So5oi35oyH5a6a55qE4oCc5Lit5b+D5Li75L2T77yL5LiL5pa55bGF5Lit6K+05piO4oCd5o6S54mI44CC5Li76KeG6KeJ5rS75Yqo5Yy657qmIGB4PTM1MOKAkzE1NzDjgIF5PTEzMOKAkzc0MGDvvJvkuLvlrZfluZXnqLPlrprlnKjlvZPliY0gYHniiYg4NDZgIOWMuuWfn++8jOW6lemDqOiHs+WwkeS/neeVmSAxMDBweCDlronlhajnqbrpl7TjgIIKLSDkv53nlZnlvZPliY3lt7LpgInlrovkvZPkuLvlrZfluZXvvIzlu7rorq7nu6fnu63kvb/nlKjnjrDmnIkgODRweO+8jOmBv+WFjeacrOi9ruWQjOaXtuaNouWtl+S9k+OAgeaUueWtl+WPt+WSjOaUuei/kOWKqOiAjOWkseWOu+avlOi+g+S+neaNruOAguWbvuWGhei+heWKqeagh+etvuS/neaMgee6piAzMuKAkzQwcHjvvJvlroPku6zmmK/liIbnsbvvvIzkuI3lho3mib/mi4Xlj6bkuIDlpZfplb/lj6XjgIIKLSDmiYvmnLrlrr3nuqYgNDIwcHjvvIjnlLvpnaLlrr0gMjIl77yJ77yb6L2s5YWl5Zu+6Kej5ZCO57uT5p6E5Y+v5Y2g5a69IDU1JeKAkzY1Je+8jOS4jeiDveiuqeWNleS4quW+rueCueWcqOaVsOenkuWGheaIkOS4uuWHoOS5juWUr+S4gOWPr+ingeWGheWuueOAguS/oeWPt+eCueWPr+S7peWwj++8jOS9huW6lOacieWPr+i+qOeahOa6kOOAgeebruagh+aIlueVmeeXleaPkOS+m+WwuuW6puOAggotIOS4u+e6v+e7p+e7remBteW+queUqOaIt+imgeaxgueahCA24oCTOXB477yb5pqX6YOo6L6F5Yqp57q/5Y+v6ZmN6Iez57qmIDPigJM0cHgg5ZKM6L6D5L2O6YCP5piO5bqm77yM6YG/5YWN5omA5pyJ57q/5LiA5qC357KX44CB5LiA5qC35Lqu44CC57Gz55m95q2j5paH44CB5pqW6YeR5L+h5oGv44CB57qi5b+D5bGA6YOo57qi5LiN5pS55Li65paw55qE5aSn6Z2i56ev6Imy5b2p57O757uf44CCCi0g5Y+q5Zyo57qv6buR5ZKM5pqX6Imy5rWF5rOi54K55LmL6Ze05Lqk5pu/77yb5rOi54K56L+Q5Yqo5L2O5LqO5YmN5pmv5Yqo5L2c77yM5LiN5byV5YWl5rWF5bqV44CB5YWo5bGP6Zeq55m95oiW5aSa56eN5paw6IOM5pmv44CCCgojIyMg5pe26Ze05puy57q/5b+F6aG75oyJ5Yqo5L2c6KeS6Imy5Yy65YiGCgotICoq5YiS6LWw77yP56a75byAKirvvJrnn63nrYnlvoXjgIHmmI7mmL7liqDpgJ/jgIHlv6vpgJ/otornlYzvvJvkuI3opoHlnKjotornlYzliY3mhaLmhaLliLnliLDpm7bjgILlj6/lnKjlh7rnlLvlkI7lho3nu5PmnZ/nirbmgIHjgIIKLSAqKueJqeS7tuiQveS9je+8j+a/gOa0uyoq77ya6L6D5b+r5Yiw6L6+77yM5pyA5ZCOIDEwJeKAkzE1JSDot6/nqIvlh4/pgJ/vvIzpmo/lkI4gMC4xMOKAkzAuMThzIOWwj+W5heinkuW6pu+8j+WwuuWvuOaUtuaVm++8m+WPquWFgeiuuOS4gOasoeW+iOWwj+WbnuW8ueOAggotICoq57q/5p2h55Sf6ZW/KirvvJrmjInot6/lvoTlvKfplb/mjqjov5vvvIzniLbmrrXlhYjliLDoioLngrnvvIzlrZDmrrXpmo/lkI7lvIDlp4vvvJvkuI3kvb/nlKjkuIDmrrXlhajlm77nu5/kuIAgb3BhY2l0eSDku6Pmm7/nlJ/plb/jgIIKLSAqKuS/oeaBr+S8oOi+kyoq77ya5q+P5Liq6ISJ5Yay5pyJ5piO56Gu5Y+R5bCE44CB6KGM6L+b44CB5Yiw6L6+44CB57uT5p6c5Zub5Liq54q25oCB77yb5LiN6IO95Zyo6Lev5b6E5bCa5pyq5oiQ56uL5pe277yM5rK/5pW05p2h6Lev5b6E5ZCM5pe25pGG5ruh5b6q546v57KS5a2Q44CCCi0gKirmloflrZcqKu+8mum7mOiupCAwLjE24oCTMC4yNHMg5riF5pmw5a6M5oiQ5ZCO56iz5a6a77yM5LiN5oyB57ut5LiK5LiL5ryC5Yqo77yb5pyA5aSa57uZ5paw5Y+l5LiA5qyh5b6I5bCP55qE5pi+546w5Y+Y5YyW44CC6ZyA6KaB5by66LCD55qE6K+N55So6aKc6Imy77yP5bGA6YOo5piO5pqX77yM5LiN6K6p5pW05Y+l5Y+N5aSN57yp5pS+44CCCi0gKirnqLPmgIEqKu+8muavj+S4gOino+mHiuWNleWFg+W/hemhu+aciSAwLjfigJMxLjJzIOWJjeaZr+WHoOS5juS4jeaUueWPmOeahOeql+WPo++8m+iDjOaZr+WPr+S7peWRvOWQuO+8jOS9huS4jeimgeiuqeKAnOWBnOeVmeKAneWPmOaIkOacuuaisOeahOWFqOeUu+mdouaCrOa1ruOAggoKIyMjIOmBrue9qeOAgeWFieaViOS4jumfs+aViOeahOWboOaenAoKLSDmiYvmnLrlhoXlrrnkvb/nlKjlsY/luZXlhoXpg6jpga7nvanvvIzliJLotbDml7blj6roo4HliIflhoXlrrnvvIzkuI3miorlpJblo7PjgIHnuqLlv4PlkozlrZfluZXkuIDlubbmk6bpmaTjgIIKLSDnur/mnaHmj63npLrnmoQgbWFzayDkuI7mraPlnKjliY3ov5vnmoTnq6/ngrnkv53mjIHkuIDoh7TvvJvnq6/ngrnmirXovr7kuYvliY3vvIznu5PmnpzoioLngrnkuI3lvpfmj5DliY3kuq7otbfjgIIKLSDlhYnmlYjlj6rot5/pmo/igJzmv4DmtLvvvI/ooqvorrDlvZXvvI/liLDovr7igJ3nmoTkuovku7bvvIzkuI3lgZrlhajlnLrluLjpqbvlpKflhYnlnIjjgILlsYDpg6jlj43ppojlj6/nuqYgMC4wOHMg6LW344CBMC4yNeKAkzAuNHMg6KGw5YeP77yM5Y2K5b6E6ZqP5LqL5Lu26L275omp5ZCO5Zue6JC944CCCi0g6Z+z5pWI5Y+q5bu66K6u6JC95Zyo57qi5b+D5r+A5rS744CB5YiS6LWw44CB6K6w5b2V54K55Yiw6L6+44CB5o6o6I2Q5pSv6Lev5pS25p2f562J5bCR6YeP6IqC54K544CC5Y+v5Y+C6ICD5pei5pyJ5a6i6KeC6LW36Z+z6KGo5LitIDI4LjcyNXPjgIEzMS42NDhz44CBMzMuMjQ0c+OAgTQ1LjczNnMg6ZmE6L+R55qE5pe26Ze077yM5L2G5b+F6aG75Lul5paw5Yqo5L2c55qE5a6e6ZmF5Yiw6L6+5pe25Yi75Li65YeG44CC6L+Z6YeM5Y+q5L2c6KeG5ZCs5a+56b2Q5bu66K6u77yM5rKh5pyJ5Lq65bel5ZCs5a6h44CCCi0g5rK/55So5bey5qC45a6e55qE55So5oi3IEJHTSDlgY/np7vvvJrlj4LogIPvvI/lhajlsYDml7bpl7QgYHRgIOWvueW6lOeUqOaItyBCR00gYHQrMC4wNDhzYO+8m+acrOagt+eJh+eUqCBCR00gMjguMDQ44oCTNDguMDQ4c+OAgumfs+S5kOS4jeaNouabsuOAgeS4jeWPmOmAn+OAgumfs+aViOWPquS9nOS4uumHjeeCueWPjemmiO+8jOS4jeiDveavj+adoee6v+OAgeavj+S4quWtl+mDveWPoOWKoOWjsOmfs+OAggoKIyMgNi4g5qC354mH6aqM5pS25bqU5qOA5p+l6L+e57ut6L+H56iLCgoxLiDmjInmraPluLjpgJ/luqbnnIvlrozmlbQgMjAg56eS77ya5LiN5pqC5YGc5pe277yM6IO95ZCm55yL5oeC57qi5b+D5aaC5L2V5Y+Y5oiQ6KKr6K6w5b2V55qE5L+h5Y+344CB5YaN5oiQ5Li65o6o6I2Q5Y+C6ICD77yb5LiN6IO95Y+q6Zeu5oiq5Zu+5piv5ZCm5ryC5Lqu44CCCjIuIOmAkOW4p+ajgOafpeS6i+S7tuWJjeWQju+8mui3r+W+hOaKtei+vuWJjeacieayoeaciee7k+aenOWFiOWHuueOsO+8jOmBrue9qeacieayoeacieWIh+aOieS4jeivpea2iOWkseeahOWvueixoe+8jOeJqeS7tui3qOaehOWbvuaYr+WQpuS/neaMgei6q+S7veOAggozLiDmo4Dmn6Xmr4/mnaHlrZfluZXlh7rnjrDlkI7nmoQgMC434oCTMS4yIOenku+8mumHjeimgeWbvuW9ouaYr+WQpuW3sue7j+aIkOeri++8jOWtl+W5leaYr+WQpueos+Wumu+8jOivu+WbvuaYr+WQpui/mOWcqOetieS4i+S4gOWxguaFouaFoua3oeWFpeOAggo0LiDmo4Dmn6UgMzlz44CBNDJz44CBNDUuNXMg5ZKMIDQ4cyDpmYTov5HvvJrkuI3lh7rnjrDlm6DmiYDmnInlsYLlkIzml7bmt6Hlh7rogIzpgKDmiJDnmoTov5Hpu5Hmlq3mjqXvvIzkuI3miorkuKTkuKror63kuYnmraXpqqTloZ7lnKjkuIDlj6Xor53lh7rnjrDkuYvliY3jgIIKNS4g5Lqk5LuY55yf5a6eIE1QNO+8jOW5tuS7juivpSBNUDQg5a+85Ye6IDAuMuKAkzAuNXMg6L+e57ut6IGU57O76KGo5L2c5YaF6YOo5aSN5qC477yb5LuN5LiN6IO95Lul5LiJ5byg5YWz6ZSu5bin44CB5oqA5pyv6Kej56CB6YCa6L+H5oiW5bel5YW35Zu+5YOP5Y2h54mH5Luj5pu/55So5oi355yL5Yiw6L+e57ut5qC354mH44CCCgrmnKzmlofku7blj6rnu5nop4Llr5/kuI7lj6/miafooYzop4TmoLzjgILmnKzova7msqHmnInkv67mlLnmlofmoYjjgIFCR03jgIHliqjnlLvmupDnoIHjgIHmraPlvI/ntKDmnZDmiJbovpPlh7rop4bpopHvvIzmsqHmnInmj5DkuqQgR2l077yM5Lmf5rKh5pyJ6YeN5riy5p+T5pW054mH44CCCg=="
    },
    "timeline": {
      "path": "src/new-media-v2/motion-lab/hyperframes/timeline.json",
      "mediaType": "application/json",
      "byteLength": 1622,
      "sha256": "05dbe360adfc10286cd49d51497c3c067920a285f0d29cbd61a66f5e04f45d8e",
      "text": "{\n  \"durationSeconds\": 20,\n  \"fps\": 60,\n  \"width\": 1920,\n  \"height\": 1080,\n  \"globalRange\": [\n    28,\n    48\n  ],\n  \"voiceover\": false,\n  \"captions\": [\n    {\n      \"unit\": 10,\n      \"start\": 0,\n      \"end\": 3,\n      \"text\": \"顺手，点亮一颗红心。\"\n    },\n    {\n      \"unit\": 11,\n      \"start\": 3,\n      \"end\": 4.45,\n      \"text\": \"然后，划走。\"\n    },\n    {\n      \"unit\": 12,\n      \"start\": 4.45,\n      \"end\": 6.1,\n      \"text\": \"视频过去了。\"\n    },\n    {\n      \"unit\": 13,\n      \"start\": 6.1,\n      \"end\": 8.3,\n      \"text\": \"你的反应，留下了。\"\n    },\n    {\n      \"unit\": 14,\n      \"start\": 8.3,\n      \"end\": 11,\n      \"text\": \"刚才那几秒，去了哪里？\"\n    },\n    {\n      \"unit\": 15,\n      \"start\": 11,\n      \"end\": 14,\n      \"text\": \"停留、重看、点赞……\"\n    },\n    {\n      \"unit\": 16,\n      \"start\": 14,\n      \"end\": 17.5,\n      \"text\": \"它们被平台记录，变成信号。\"\n    },\n    {\n      \"unit\": 17,\n      \"start\": 17.5,\n      \"end\": 20,\n      \"text\": \"成为推荐的参考。\"\n    }\n  ],\n  \"inputs\": [\n    {\n      \"id\": \"pause\",\n      \"launch\": 14.3,\n      \"arrival\": 16.1,\n      \"recordAt\": 16.1\n    },\n    {\n      \"id\": \"replay\",\n      \"launch\": 14.7,\n      \"arrival\": 16.6,\n      \"recordAt\": 16.6\n    },\n    {\n      \"id\": \"like\",\n      \"launch\": 15.5,\n      \"arrival\": 17.25,\n      \"recordAt\": 17.25\n    }\n  ],\n  \"recordActivation\": 16.1,\n  \"outputStart\": 17.5,\n  \"outputSettled\": 19.13,\n  \"runtimeDom\": {\n    \"record\": \"record-gate-back\",\n    \"output\": \"recommendation\"\n  },\n  \"musicGlobalOffsetSeconds\": 0.048,\n  \"renderer\": \"hyperframes@0.8.185\"\n}\n",
      "bytesBase64": "ewogICJkdXJhdGlvblNlY29uZHMiOiAyMCwKICAiZnBzIjogNjAsCiAgIndpZHRoIjogMTkyMCwKICAiaGVpZ2h0IjogMTA4MCwKICAiZ2xvYmFsUmFuZ2UiOiBbCiAgICAyOCwKICAgIDQ4CiAgXSwKICAidm9pY2VvdmVyIjogZmFsc2UsCiAgImNhcHRpb25zIjogWwogICAgewogICAgICAidW5pdCI6IDEwLAogICAgICAic3RhcnQiOiAwLAogICAgICAiZW5kIjogMywKICAgICAgInRleHQiOiAi6aG65omL77yM54K55Lqu5LiA6aKX57qi5b+D44CCIgogICAgfSwKICAgIHsKICAgICAgInVuaXQiOiAxMSwKICAgICAgInN0YXJ0IjogMywKICAgICAgImVuZCI6IDQuNDUsCiAgICAgICJ0ZXh0IjogIueEtuWQju+8jOWIkui1sOOAgiIKICAgIH0sCiAgICB7CiAgICAgICJ1bml0IjogMTIsCiAgICAgICJzdGFydCI6IDQuNDUsCiAgICAgICJlbmQiOiA2LjEsCiAgICAgICJ0ZXh0IjogIuinhumikei/h+WOu+S6huOAgiIKICAgIH0sCiAgICB7CiAgICAgICJ1bml0IjogMTMsCiAgICAgICJzdGFydCI6IDYuMSwKICAgICAgImVuZCI6IDguMywKICAgICAgInRleHQiOiAi5L2g55qE5Y+N5bqU77yM55WZ5LiL5LqG44CCIgogICAgfSwKICAgIHsKICAgICAgInVuaXQiOiAxNCwKICAgICAgInN0YXJ0IjogOC4zLAogICAgICAiZW5kIjogMTEsCiAgICAgICJ0ZXh0IjogIuWImuaJjemCo+WHoOenku+8jOWOu+S6huWTqumHjO+8nyIKICAgIH0sCiAgICB7CiAgICAgICJ1bml0IjogMTUsCiAgICAgICJzdGFydCI6IDExLAogICAgICAiZW5kIjogMTQsCiAgICAgICJ0ZXh0IjogIuWBnOeVmeOAgemHjeeci+OAgeeCuei1nuKApuKApiIKICAgIH0sCiAgICB7CiAgICAgICJ1bml0IjogMTYsCiAgICAgICJzdGFydCI6IDE0LAogICAgICAiZW5kIjogMTcuNSwKICAgICAgInRleHQiOiAi5a6D5Lus6KKr5bmz5Y+w6K6w5b2V77yM5Y+Y5oiQ5L+h5Y+344CCIgogICAgfSwKICAgIHsKICAgICAgInVuaXQiOiAxNywKICAgICAgInN0YXJ0IjogMTcuNSwKICAgICAgImVuZCI6IDIwLAogICAgICAidGV4dCI6ICLmiJDkuLrmjqjojZDnmoTlj4LogIPjgIIiCiAgICB9CiAgXSwKICAiaW5wdXRzIjogWwogICAgewogICAgICAiaWQiOiAicGF1c2UiLAogICAgICAibGF1bmNoIjogMTQuMywKICAgICAgImFycml2YWwiOiAxNi4xLAogICAgICAicmVjb3JkQXQiOiAxNi4xCiAgICB9LAogICAgewogICAgICAiaWQiOiAicmVwbGF5IiwKICAgICAgImxhdW5jaCI6IDE0LjcsCiAgICAgICJhcnJpdmFsIjogMTYuNiwKICAgICAgInJlY29yZEF0IjogMTYuNgogICAgfSwKICAgIHsKICAgICAgImlkIjogImxpa2UiLAogICAgICAibGF1bmNoIjogMTUuNSwKICAgICAgImFycml2YWwiOiAxNy4yNSwKICAgICAgInJlY29yZEF0IjogMTcuMjUKICAgIH0KICBdLAogICJyZWNvcmRBY3RpdmF0aW9uIjogMTYuMSwKICAib3V0cHV0U3RhcnQiOiAxNy41LAogICJvdXRwdXRTZXR0bGVkIjogMTkuMTMsCiAgInJ1bnRpbWVEb20iOiB7CiAgICAicmVjb3JkIjogInJlY29yZC1nYXRlLWJhY2siLAogICAgIm91dHB1dCI6ICJyZWNvbW1lbmRhdGlvbiIKICB9LAogICJtdXNpY0dsb2JhbE9mZnNldFNlY29uZHMiOiAwLjA0OCwKICAicmVuZGVyZXIiOiAiaHlwZXJmcmFtZXNAMC44LjE4NSIKfQo=",
      "parsed": {
        "durationSeconds": 20,
        "fps": 60,
        "width": 1920,
        "height": 1080,
        "globalRange": [
          28,
          48
        ],
        "voiceover": false,
        "captions": [
          {
            "unit": 10,
            "start": 0,
            "end": 3,
            "text": "顺手，点亮一颗红心。"
          },
          {
            "unit": 11,
            "start": 3,
            "end": 4.45,
            "text": "然后，划走。"
          },
          {
            "unit": 12,
            "start": 4.45,
            "end": 6.1,
            "text": "视频过去了。"
          },
          {
            "unit": 13,
            "start": 6.1,
            "end": 8.3,
            "text": "你的反应，留下了。"
          },
          {
            "unit": 14,
            "start": 8.3,
            "end": 11,
            "text": "刚才那几秒，去了哪里？"
          },
          {
            "unit": 15,
            "start": 11,
            "end": 14,
            "text": "停留、重看、点赞……"
          },
          {
            "unit": 16,
            "start": 14,
            "end": 17.5,
            "text": "它们被平台记录，变成信号。"
          },
          {
            "unit": 17,
            "start": 17.5,
            "end": 20,
            "text": "成为推荐的参考。"
          }
        ],
        "inputs": [
          {
            "id": "pause",
            "launch": 14.3,
            "arrival": 16.1,
            "recordAt": 16.1
          },
          {
            "id": "replay",
            "launch": 14.7,
            "arrival": 16.6,
            "recordAt": 16.6
          },
          {
            "id": "like",
            "launch": 15.5,
            "arrival": 17.25,
            "recordAt": 17.25
          }
        ],
        "recordActivation": 16.1,
        "outputStart": 17.5,
        "outputSettled": 19.13,
        "runtimeDom": {
          "record": "record-gate-back",
          "output": "recommendation"
        },
        "musicGlobalOffsetSeconds": 0.048,
        "renderer": "hyperframes@0.8.185"
      }
    },
    "assetsManifest": {
      "path": "production/new-media-v2/motion-lab/assets-manifest.json",
      "mediaType": "application/json",
      "byteLength": 19329,
      "sha256": "c63bd009d18ac905f5b3cc94b9fbd58033bb930d7b5e27050cc6040c5c71e5da",
      "text": "{\n  \"assets\": {\n    \"hero\": {\n      \"path\": \"public/images/new-media-v2/motion-lab/cat-display-hero.png\",\n      \"sha256\": \"c091ab158448ff5039f11730c9aab2876b89df815245e3382a35a569dcfb342a\",\n      \"size\": [\n        1152,\n        1152\n      ],\n      \"blendCache\": \".cache/motion-lab-assets/hero.blend\",\n      \"renderSeconds\": 99.328,\n      \"yawDegrees\": 12,\n      \"boardDimensions\": [\n        1.8,\n        0.145,\n        2.55\n      ],\n      \"sourceSize\": [\n        1145,\n        1374\n      ],\n      \"imagePlaneSize\": [\n        1.55,\n        1.8600000000000003\n      ]\n    },\n    \"morph\": {\n      \"pathPattern\": \"public/images/new-media-v2/motion-lab/morph/frame-%03d.png\",\n      \"size\": [\n        384,\n        384\n      ],\n      \"frames\": 120,\n      \"fps\": 60,\n      \"durationSeconds\": 2.0,\n      \"samples\": 32,\n      \"denoise\": false,\n      \"renderSeconds\": 323.413,\n      \"method\": \"One closed 4994-vertex UV mesh with Bead shape key; cubic eased 3D vertex interpolation.\",\n      \"material\": \"Coral-red glazed ceramic; identical lighting, camera and center in all frames.\",\n      \"blendCache\": \".cache/motion-lab-assets/heart-to-bead.blend\",\n      \"frameHashes\": [\n        {\n          \"frame\": 0,\n          \"sha256\": \"5c47cfffbc1119410f2ca97f499a891cdea98c7db45cf19d2143ed1bd48d7740\"\n        },\n        {\n          \"frame\": 1,\n          \"sha256\": \"b3bcc742106b9e62efe845dc8353746eaebdf9992725fedd2059bb88326e33d4\"\n        },\n        {\n          \"frame\": 2,\n          \"sha256\": \"4634de72687cd5875572bf3e74855c2068067200fb36030b6d17260d00e6f28d\"\n        },\n        {\n          \"frame\": 3,\n          \"sha256\": \"7b33f1330b5714d2023fae694b47da73a255483628fb6575d8180e477466b08b\"\n        },\n        {\n          \"frame\": 4,\n          \"sha256\": \"e2a0c69c70cc968f88d9ad930b32f26d71f6312ed13fc43af136847c9ea523b9\"\n        },\n        {\n          \"frame\": 5,\n          \"sha256\": \"4f88a09b1d66103f0f734f6d258dbbc35c041391201b061835531c2bcfa6eaaf\"\n        },\n        {\n          \"frame\": 6,\n          \"sha256\": \"c430dd3458ef7be3a2504325a8b1e872fe24122d9c451684d3c7359f3d6e7018\"\n        },\n        {\n          \"frame\": 7,\n          \"sha256\": \"6e0f5d10e1f668549f34c7d17008bad2e5d5bb1db9bd85e47a22a6efe90f8540\"\n        },\n        {\n          \"frame\": 8,\n          \"sha256\": \"c013f72249bfb5398a572a04b2440b9229af9bbcc79279272f51b65955fb19f6\"\n        },\n        {\n          \"frame\": 9,\n          \"sha256\": \"96abd6cf968d8450b8b1495bf6576550cf99eacae274a0a08eb5e435373b2c2a\"\n        },\n        {\n          \"frame\": 10,\n          \"sha256\": \"8821963e1b8459b5f48b16efe5561d476120cd6e9bbdce388be797a70e9cf15d\"\n        },\n        {\n          \"frame\": 11,\n          \"sha256\": \"3ab1b5df69a7db63dbd308ebf84a4b1f81f815db63f64d4898b469cd7cdc1387\"\n        },\n        {\n          \"frame\": 12,\n          \"sha256\": \"dbcd4e944a75a9b8d599fe529d79ec8fe1c82a3e6e2f23a544756394f3b4e991\"\n        },\n        {\n          \"frame\": 13,\n          \"sha256\": \"a3a0ac1124159895203ba07b437b87509e674cfd02d7a1db0bb5613c3668f922\"\n        },\n        {\n          \"frame\": 14,\n          \"sha256\": \"d89f831b514aae542e23c861d785405834bde26d84f1fb18e69e0e3dacefa8c4\"\n        },\n        {\n          \"frame\": 15,\n          \"sha256\": \"bb2e14e29ba05cf8675814c711784e22a548166f2a6dcf86261bbcd3d72a6b98\"\n        },\n        {\n          \"frame\": 16,\n          \"sha256\": \"fdedb555ce4fbde757158023ef6639f138e2d482846f833dd2050d92e3c6f700\"\n        },\n        {\n          \"frame\": 17,\n          \"sha256\": \"112eae4ac1e32fff2679124ffbea22f3c70ac0ffcc9aafb1c525053e3b4762b7\"\n        },\n        {\n          \"frame\": 18,\n          \"sha256\": \"987c4c45dbeb7484d1f06a209b675d628ff6a47ffacbaaa4f85b63dbfcda2601\"\n        },\n        {\n          \"frame\": 19,\n          \"sha256\": \"30888a3f9cdda270cc805a1875e1f097e7939e48174c88d0f1bcf8c3878a32a0\"\n        },\n        {\n          \"frame\": 20,\n          \"sha256\": \"a6c2d4bbba51954b262c9f1fa7682daeb494c62c2c73ee1ccb7152705b1615f0\"\n        },\n        {\n          \"frame\": 21,\n          \"sha256\": \"5e27d7e5fa1ce9b2bbef01f6f3edc6180a3245a7424a6ff2f0e252bbd33c4a98\"\n        },\n        {\n          \"frame\": 22,\n          \"sha256\": \"5232e233aa28e6705a0d43fbdaf2af7f1722e889c7af48cbdb47edded5a95c42\"\n        },\n        {\n          \"frame\": 23,\n          \"sha256\": \"99edaf99d7091e7f061a825401ebba9c0b5024ee530f73fbd489654568472f41\"\n        },\n        {\n          \"frame\": 24,\n          \"sha256\": \"d17342375267b88e2841a979bcd69c7631b98476ccf1c0a306698ba15902ea9b\"\n        },\n        {\n          \"frame\": 25,\n          \"sha256\": \"4c86fd7a65f3c04d9afa0334de5fc43d016649a6d74f07c12b55bbd36b08dd76\"\n        },\n        {\n          \"frame\": 26,\n          \"sha256\": \"3653c247ea01c1c37d4f55629e388582cbf9c67155292c8b067baa2378735e9c\"\n        },\n        {\n          \"frame\": 27,\n          \"sha256\": \"9dbffcfa21e378ffc895d91bbdc957e9af944500f28e62f7f3da12b5bff72022\"\n        },\n        {\n          \"frame\": 28,\n          \"sha256\": \"fcc26ba3d3af9be6ad2c67f20c69b63c1087506aa3446c92158ba3d412c78352\"\n        },\n        {\n          \"frame\": 29,\n          \"sha256\": \"761dc8a1e3b5586c0db7e73cdc02d4835d7f952a6ff0c7990aa12e294461b01d\"\n        },\n        {\n          \"frame\": 30,\n          \"sha256\": \"6cf9853d82915517b601192807def589480f6dd78b79d9c706b6b2ffa26397b0\"\n        },\n        {\n          \"frame\": 31,\n          \"sha256\": \"f887cf35f618251dd5f392ce0df9e8febd7e5d4f63608c1c627c8f5032429193\"\n        },\n        {\n          \"frame\": 32,\n          \"sha256\": \"9f1beadabd87e490f4db07992e532f04cfffbb2de354353696b7d49e3eae4024\"\n        },\n        {\n          \"frame\": 33,\n          \"sha256\": \"46ed62626757afb4df09fec394cadce71c430899211b6aff13799e7c468f10f1\"\n        },\n        {\n          \"frame\": 34,\n          \"sha256\": \"a781e31ee62955be2a5549ae4721c17ec3bb88cca795acf10506974901443deb\"\n        },\n        {\n          \"frame\": 35,\n          \"sha256\": \"aa50d97e28ae165914efa13b7b70f5ab35b910df4652b873b662b723338b227c\"\n        },\n        {\n          \"frame\": 36,\n          \"sha256\": \"6c610b8650e7bc80094ab27d95243d8454bf9124f7a82bbd27b05a0b7cba90d4\"\n        },\n        {\n          \"frame\": 37,\n          \"sha256\": \"5f32b1ad55817bfdac6d92235236eb4ce3361414d44cdebebd979c1a970e8675\"\n        },\n        {\n          \"frame\": 38,\n          \"sha256\": \"3ab258e1ef51d95d98ddf16f69135302a6a8c8c697aea7c08a6620dda980e7ce\"\n        },\n        {\n          \"frame\": 39,\n          \"sha256\": \"453f70ffff9ea289bf6c5d8c016357914d39419f2936c456d7d2cc479f366660\"\n        },\n        {\n          \"frame\": 40,\n          \"sha256\": \"3bcb99ab6bd7876526d2c1848f6ee2dd5724cd0c46b498da7065aaddb91562e5\"\n        },\n        {\n          \"frame\": 41,\n          \"sha256\": \"18d5972090b0293a13054cee5aba8bf8831502f7c20582028c054f68a63a79b3\"\n        },\n        {\n          \"frame\": 42,\n          \"sha256\": \"bed9cbd6026088c2e8fe42ee6a907ced5b1b2f7f73e5f4d7d5c3254fb950d88d\"\n        },\n        {\n          \"frame\": 43,\n          \"sha256\": \"3a7a7c0facd3ac742a88eec60f25adf22c40fad7aaeb94138c695af6cd60358c\"\n        },\n        {\n          \"frame\": 44,\n          \"sha256\": \"add49db872d6670dd94031adf350f0a1296a989a5638e958cb7067cdae728c54\"\n        },\n        {\n          \"frame\": 45,\n          \"sha256\": \"3769707525888e1be491fe0073dddd7b76d2175074aca253437022d8432e18bc\"\n        },\n        {\n          \"frame\": 46,\n          \"sha256\": \"db78c03aee5fdbc72ff48b267da22e9727a665e4548e452da752024cb6a5594c\"\n        },\n        {\n          \"frame\": 47,\n          \"sha256\": \"815c86a87229346f97554d681ae7a986d6967724b4ae5f8a0cb6f162a9696f66\"\n        },\n        {\n          \"frame\": 48,\n          \"sha256\": \"26898b42d70e970db0edd0dc71e7476a55b2e2fb7ffbc4e96b2940cc32fc234f\"\n        },\n        {\n          \"frame\": 49,\n          \"sha256\": \"599693f13f7405cbb492532acc48b9cb5abaeedbdae9e4ff638259ba8b242a44\"\n        },\n        {\n          \"frame\": 50,\n          \"sha256\": \"1201e58f95730b4037dd6596a1554f5aaef62efbcc490972307460d6337bc187\"\n        },\n        {\n          \"frame\": 51,\n          \"sha256\": \"b93b08c858853b1d3bdbf0749de157f5513d16c9b25e70d922e2f55027eb38c4\"\n        },\n        {\n          \"frame\": 52,\n          \"sha256\": \"4a1e3eb8979166e49317d5cdbb965d8f479a9c12bb1104a9482476b6f1ddbb95\"\n        },\n        {\n          \"frame\": 53,\n          \"sha256\": \"9561cd017f2fb7d8e4d3110fa3fa6adca078951f73c63944cb64f60771e04b50\"\n        },\n        {\n          \"frame\": 54,\n          \"sha256\": \"7acf3373b00c9574e81b01a7b079d9eb7cf85594824a4d88e9e7fd4373cf3bb4\"\n        },\n        {\n          \"frame\": 55,\n          \"sha256\": \"3b17fc5e1ec8baa0d7a68ef99a41a4437ca92f2f8f823788b47b968ce2815dd9\"\n        },\n        {\n          \"frame\": 56,\n          \"sha256\": \"85546b712abae979b64aac9dd840a36bb2cd0f7e767a866a4ec7f99b9cad9108\"\n        },\n        {\n          \"frame\": 57,\n          \"sha256\": \"2ede16c76345f69c713b132712b391e43f84efbac87d53feb201e9718cff0ba6\"\n        },\n        {\n          \"frame\": 58,\n          \"sha256\": \"c1aeffe5231b4c19a2308e45c52f58a9ffbbaa4c6859749c48b55e17358ab2b5\"\n        },\n        {\n          \"frame\": 59,\n          \"sha256\": \"765fc5473032e9921e530955a0b08b30bae4954a3527905a28f80075fcb48fdd\"\n        },\n        {\n          \"frame\": 60,\n          \"sha256\": \"c162aed7175163bfe6fd84f8df2d6a0aedf29ada9dda55adeb5ba18dc5d12720\"\n        },\n        {\n          \"frame\": 61,\n          \"sha256\": \"83d6277920728188e9c55786244c3ab7130aef5e542b75bdebb883ffe37b8bd5\"\n        },\n        {\n          \"frame\": 62,\n          \"sha256\": \"995df31edde0a3c2405c6740b63e7156297642c2e0ff31e5b261c4ff02f7bced\"\n        },\n        {\n          \"frame\": 63,\n          \"sha256\": \"ca1f58049b4418c0c083ec2baeba692a39880564e3a9a7e8b23916859394d028\"\n        },\n        {\n          \"frame\": 64,\n          \"sha256\": \"e874935787d2833e135da9bbc0826f8dd5384a1c1d372c7147a37369d41e971e\"\n        },\n        {\n          \"frame\": 65,\n          \"sha256\": \"6fffd2608abdebd367f1a79458bec60482882dc4ca0e1bf29909d7f2dc6f7ec7\"\n        },\n        {\n          \"frame\": 66,\n          \"sha256\": \"7d7ab78c0af76d2e933aba09aa30ac5ca3bc3bf3da8f98d6a9aeb27ee910cd2b\"\n        },\n        {\n          \"frame\": 67,\n          \"sha256\": \"eddafab10c7468b722c1bf25e27dcd8e3a5211b7ff378e0e77681351a5580d82\"\n        },\n        {\n          \"frame\": 68,\n          \"sha256\": \"14e2e07f2426d171d6ab9e200128dc02f6046add880fcd1fe81233ff6c18f5c8\"\n        },\n        {\n          \"frame\": 69,\n          \"sha256\": \"1ed8604463bd2cc00be867e3295378dc3228ecbacb08640407cf7fe6ca1a7521\"\n        },\n        {\n          \"frame\": 70,\n          \"sha256\": \"710d39d66abef5ad2c596c23f99d448009f89e64e4c6568202f262ecaa36d7ef\"\n        },\n        {\n          \"frame\": 71,\n          \"sha256\": \"0df609cfcc708d222b2249290a5eb8232e502ff6a1056987143eee49bbd3b254\"\n        },\n        {\n          \"frame\": 72,\n          \"sha256\": \"6b82076fb65e38e140e5edfe7da34ff9515719fda5796ccff6cb154c45945cfc\"\n        },\n        {\n          \"frame\": 73,\n          \"sha256\": \"2b7fc5e20e79dd9587fb2e05090a221900648a89cf9af2b85c44d7b4bf8fce58\"\n        },\n        {\n          \"frame\": 74,\n          \"sha256\": \"f790d7f0e6ac6f9c731c27685771581ad644f7767bc69d692f064c1b2832b7d4\"\n        },\n        {\n          \"frame\": 75,\n          \"sha256\": \"9d902084d73f1f595e062baeb5fd080aa5b1f7e58827bf26f9bfd38b2d9e55bd\"\n        },\n        {\n          \"frame\": 76,\n          \"sha256\": \"4f5b00e7d403233375e1efd70b3f215fe754120361bd6a6317ccbf95dd487f1b\"\n        },\n        {\n          \"frame\": 77,\n          \"sha256\": \"62eae979135a8e02fe21bc0388ca3cd7e676974392711f83bcea8db1c29b112e\"\n        },\n        {\n          \"frame\": 78,\n          \"sha256\": \"d3b7943e7ef55d99a40db85130ad32c172a74584215db84e639407444aa69906\"\n        },\n        {\n          \"frame\": 79,\n          \"sha256\": \"c3b108e22b26f1c58c05036a73680c6452074ecf9398d70cd21aa92e6a2f2996\"\n        },\n        {\n          \"frame\": 80,\n          \"sha256\": \"624d0da21f8474573d4b3d834d899b855b47c005f925fb51c0c7a51967d63a50\"\n        },\n        {\n          \"frame\": 81,\n          \"sha256\": \"752545608553969779892714854a59382f385bae461f195e13a25982a4dc0222\"\n        },\n        {\n          \"frame\": 82,\n          \"sha256\": \"939f21f5228ed15d87a199c695bf8257a556764e699903680f2381d98b674eac\"\n        },\n        {\n          \"frame\": 83,\n          \"sha256\": \"6ec830673fb518204e791c84579d176c86c25b68c70306a746e53cfee901b031\"\n        },\n        {\n          \"frame\": 84,\n          \"sha256\": \"4773d4da7ffd99541d6ae9fa339831712f097b4a76c75b2e505ccc86e63721b3\"\n        },\n        {\n          \"frame\": 85,\n          \"sha256\": \"b97c90d7d740ed0f6045354173dd85262ce389f1443d4c7e8c737e2d0ed45284\"\n        },\n        {\n          \"frame\": 86,\n          \"sha256\": \"0a6b0999fdae354ba21ec3617414518adc50aa2bb7c20ffa052c4ab3bc69f125\"\n        },\n        {\n          \"frame\": 87,\n          \"sha256\": \"6f046ee5f3056829d4976aed7b877b68c593baabd2d1d281ce0fd59367063d73\"\n        },\n        {\n          \"frame\": 88,\n          \"sha256\": \"f3c44b56a5787c3a74721c3e544e1d72910f5661a84a1a8aeec0c2041432cec6\"\n        },\n        {\n          \"frame\": 89,\n          \"sha256\": \"38e61b419688389662beacc0691f2bb6e6c90b419dfa626c3d4347b55351d365\"\n        },\n        {\n          \"frame\": 90,\n          \"sha256\": \"8197bc1f989dd0a24c037a5c33782e84c9431c25c46fd37af8eb6bec31ba96dd\"\n        },\n        {\n          \"frame\": 91,\n          \"sha256\": \"01d979287ea5a569d27573c3cde0fa49d37ad01739eedb0045d3576662a22402\"\n        },\n        {\n          \"frame\": 92,\n          \"sha256\": \"3fdf879fed9622596a3b9a0f4340b93e82d70ec508b52807a0edefec49c337ad\"\n        },\n        {\n          \"frame\": 93,\n          \"sha256\": \"ae93096798dc290afc396a64dda7f566b4f39816890cea4fa579c2073508dc59\"\n        },\n        {\n          \"frame\": 94,\n          \"sha256\": \"8d19edc7e01f214b8898673067f3b2b06e8e17e791dd878d8744ab45ca6f4ce0\"\n        },\n        {\n          \"frame\": 95,\n          \"sha256\": \"81dc159cfa4a18ca9609251827a89e7cc3e80d0b465d79bd63d915b5671d965c\"\n        },\n        {\n          \"frame\": 96,\n          \"sha256\": \"b6f594551154d6df79e0b1e355dfbfc22189f02d6bb71696a2bcc8e63824baf5\"\n        },\n        {\n          \"frame\": 97,\n          \"sha256\": \"b435b04f93e3a95fc2210c50dbc6c12115379603453788a3e0384e1be3168d8b\"\n        },\n        {\n          \"frame\": 98,\n          \"sha256\": \"d9ffc5b9e4a4103da54468daee99933ceed023fbaf9c2785dda1f9207412207d\"\n        },\n        {\n          \"frame\": 99,\n          \"sha256\": \"38355eeb37d0a3fce1d425fdb8e335e06d49f13c5a29920aa90bcae95b3646b0\"\n        },\n        {\n          \"frame\": 100,\n          \"sha256\": \"1fd335ae9dfbbaa4dca429a6bd1d2f11752cae73bc0400fe794b565d4ed03afe\"\n        },\n        {\n          \"frame\": 101,\n          \"sha256\": \"ca9aa1113ce546e66714b3475928427fc8ea9484a7b361ce0963e177ced71db1\"\n        },\n        {\n          \"frame\": 102,\n          \"sha256\": \"78eef9c5cf274faceeab26abc7dc147af980da570ca11ea4ed41706a868d0224\"\n        },\n        {\n          \"frame\": 103,\n          \"sha256\": \"a7c5b22dca0ab1868f553b7b9e42bc5d33bc141989f1c742f40f255b549bf30b\"\n        },\n        {\n          \"frame\": 104,\n          \"sha256\": \"e5c7d57f64c6bed171f6644f5ac76c0ad69ab3dd531adec7dcc625dfd617e7e7\"\n        },\n        {\n          \"frame\": 105,\n          \"sha256\": \"c627a43fda77fa8dc177c87daec9229ad9d10418f5f2806171d35f6edf223da0\"\n        },\n        {\n          \"frame\": 106,\n          \"sha256\": \"8344c39c26ccfc048dc4ba9f60b762f0c7f30db7a253a00871079b0f4bc0a434\"\n        },\n        {\n          \"frame\": 107,\n          \"sha256\": \"c488445db0a08d086201661863918c326f9ee090de90ee74b994f3c3b04fec32\"\n        },\n        {\n          \"frame\": 108,\n          \"sha256\": \"71d06bb1d05eed19b82d9875b60e5543ae3fe691ec3ba0e8e4744e76ce45f1eb\"\n        },\n        {\n          \"frame\": 109,\n          \"sha256\": \"dd35fd076995653ef5ba1dee52029eaa74eb093f97ef9a93099fbd23fc2faffd\"\n        },\n        {\n          \"frame\": 110,\n          \"sha256\": \"55bc4b426d2b06716913817ff162ed0272e271740edfd77ff9dc00de8bb080ac\"\n        },\n        {\n          \"frame\": 111,\n          \"sha256\": \"2248ac192c0b3f3b934e62b64dcc569a66df69ab09a1a252482d881e6163fca9\"\n        },\n        {\n          \"frame\": 112,\n          \"sha256\": \"b0baadd2aa0c7bcadd0fa3b4f716ca638469b5f8ce844d777102cdfcf08a6bdc\"\n        },\n        {\n          \"frame\": 113,\n          \"sha256\": \"ef51bb8ed3931320eec2504853e491d148c322f6dc7af3199a88502d3cf495fe\"\n        },\n        {\n          \"frame\": 114,\n          \"sha256\": \"a9995f5b20499cdd6d07b6bb85d025b207da3d44b357fd433775af5e8d5c15a6\"\n        },\n        {\n          \"frame\": 115,\n          \"sha256\": \"c1b2aafc22e997a857366d232e2de7a317dfc6e1dc4fae57361455fe56414be4\"\n        },\n        {\n          \"frame\": 116,\n          \"sha256\": \"e1da0d9e9f1a067cad4b718d8c7325c26450d5cc149b9b67c425114052a0c7b5\"\n        },\n        {\n          \"frame\": 117,\n          \"sha256\": \"230b369a5ec0b7595c5cb8f6e8c9b46adbbbe6f88311087037ddc1c4b1f5d106\"\n        },\n        {\n          \"frame\": 118,\n          \"sha256\": \"19deeffb195278a45c842e8afb67a35af44c1500a49a2465e1e0786a3d3633f5\"\n        },\n        {\n          \"frame\": 119,\n          \"sha256\": \"34b30b823e2af6df5efc22220636d80061761ebfbb0e8806902727ee39d4d7f6\"\n        }\n      ]\n    },\n    \"bead\": {\n      \"path\": \"public/images/new-media-v2/motion-lab/coral-bead.png\",\n      \"sha256\": \"85f9ee5dd018b63f3c0d0446c297a141182074d81f793b207e0651ba83d8587a\",\n      \"size\": [\n        640,\n        640\n      ],\n      \"blendCache\": \".cache/motion-lab-assets/bead.blend\",\n      \"renderSeconds\": 18.297,\n      \"radius\": 0.49,\n      \"material\": \"Coral-red glazed ceramic\",\n      \"geometry\": \"Same topology and framing as heart-to-bead morph endpoint\"\n    },\n    \"edge\": {\n      \"path\": \"public/images/new-media-v2/motion-lab/cat-display-edge.png\",\n      \"sha256\": \"64a4cc5ac29d45a0ad1f382393c1f6d43f994bd466ae582782867e67c334ff38\",\n      \"size\": [\n        1152,\n        1152\n      ],\n      \"blendCache\": \".cache/motion-lab-assets/edge.blend\",\n      \"renderSeconds\": 114.714,\n      \"yawDegrees\": 35,\n      \"boardDimensions\": [\n        1.8,\n        0.145,\n        2.55\n      ],\n      \"sourceSize\": [\n        1145,\n        1374\n      ],\n      \"imagePlaneSize\": [\n        1.55,\n        1.8600000000000003\n      ]\n    },\n    \"heart\": {\n      \"path\": \"public/images/new-media-v2/motion-lab/coral-heart.png\",\n      \"sha256\": \"a0805b0a8c9873b5c90b3c45d8a248475d65f4a113a330bad661b5bba6150a37\",\n      \"size\": [\n        1024,\n        1024\n      ],\n      \"blendCache\": \".cache/motion-lab-assets/heart.blend\",\n      \"renderSeconds\": 36.57,\n      \"material\": \"Coral-red glazed ceramic\",\n      \"maximumThickness\": 0.5,\n      \"geometry\": \"Same closed UV topology and framing as heart-to-bead morph start\"\n    }\n  },\n  \"generator\": \"scripts/generate-motion-lab-assets.py\",\n  \"generatorSha256\": \"e42f9a6aacd856fb6b16acf5497029e25f75dba070f6de66d292c27f448c201c\",\n  \"blenderVersion\": \"4.3.2\",\n  \"blenderPythonVersion\": \"3.13.5\",\n  \"renderEngine\": \"Cycles CPU\",\n  \"threads\": 2,\n  \"samples\": 64,\n  \"seed\": 271828,\n  \"denoise\": false,\n  \"transparentFilm\": true,\n  \"output\": \"RGBA PNG, 8-bit\",\n  \"denoiseUnavailableReason\": \"System Blender build has no OpenImageDenoise support; verified by initial failed render.\",\n  \"colorManagement\": \"AgX / Medium High Contrast / exposure +0.15\",\n  \"lighting\": \"Large warm softbox 620W/4.2; cool front fill115W/3.5; weak cool edge95W/2.5\",\n  \"catSource\": {\n    \"path\": \"public/images/new-media-v2/kitten-study.png\",\n    \"sha256\": \"c9323eafa7cec497714b16f57ffeeade8c0cf86ea817cd55236b350f6cb6ee70\"\n  },\n  \"notes\": \"Direct Blender output. No image editing, generated background, UI, text or paid API.\"\n}\n",
      "bytesBase64": "ewogICJhc3NldHMiOiB7CiAgICAiaGVybyI6IHsKICAgICAgInBhdGgiOiAicHVibGljL2ltYWdlcy9uZXctbWVkaWEtdjIvbW90aW9uLWxhYi9jYXQtZGlzcGxheS1oZXJvLnBuZyIsCiAgICAgICJzaGEyNTYiOiAiYzA5MWFiMTU4NDQ4ZmY1MDM5ZjExNzMwYzlhYWIyODc2Yjg5ZGY4MTUyNDVlMzM4MmEzNWE1NjlkY2ZiMzQyYSIsCiAgICAgICJzaXplIjogWwogICAgICAgIDExNTIsCiAgICAgICAgMTE1MgogICAgICBdLAogICAgICAiYmxlbmRDYWNoZSI6ICIuY2FjaGUvbW90aW9uLWxhYi1hc3NldHMvaGVyby5ibGVuZCIsCiAgICAgICJyZW5kZXJTZWNvbmRzIjogOTkuMzI4LAogICAgICAieWF3RGVncmVlcyI6IDEyLAogICAgICAiYm9hcmREaW1lbnNpb25zIjogWwogICAgICAgIDEuOCwKICAgICAgICAwLjE0NSwKICAgICAgICAyLjU1CiAgICAgIF0sCiAgICAgICJzb3VyY2VTaXplIjogWwogICAgICAgIDExNDUsCiAgICAgICAgMTM3NAogICAgICBdLAogICAgICAiaW1hZ2VQbGFuZVNpemUiOiBbCiAgICAgICAgMS41NSwKICAgICAgICAxLjg2MDAwMDAwMDAwMDAwMDMKICAgICAgXQogICAgfSwKICAgICJtb3JwaCI6IHsKICAgICAgInBhdGhQYXR0ZXJuIjogInB1YmxpYy9pbWFnZXMvbmV3LW1lZGlhLXYyL21vdGlvbi1sYWIvbW9ycGgvZnJhbWUtJTAzZC5wbmciLAogICAgICAic2l6ZSI6IFsKICAgICAgICAzODQsCiAgICAgICAgMzg0CiAgICAgIF0sCiAgICAgICJmcmFtZXMiOiAxMjAsCiAgICAgICJmcHMiOiA2MCwKICAgICAgImR1cmF0aW9uU2Vjb25kcyI6IDIuMCwKICAgICAgInNhbXBsZXMiOiAzMiwKICAgICAgImRlbm9pc2UiOiBmYWxzZSwKICAgICAgInJlbmRlclNlY29uZHMiOiAzMjMuNDEzLAogICAgICAibWV0aG9kIjogIk9uZSBjbG9zZWQgNDk5NC12ZXJ0ZXggVVYgbWVzaCB3aXRoIEJlYWQgc2hhcGUga2V5OyBjdWJpYyBlYXNlZCAzRCB2ZXJ0ZXggaW50ZXJwb2xhdGlvbi4iLAogICAgICAibWF0ZXJpYWwiOiAiQ29yYWwtcmVkIGdsYXplZCBjZXJhbWljOyBpZGVudGljYWwgbGlnaHRpbmcsIGNhbWVyYSBhbmQgY2VudGVyIGluIGFsbCBmcmFtZXMuIiwKICAgICAgImJsZW5kQ2FjaGUiOiAiLmNhY2hlL21vdGlvbi1sYWItYXNzZXRzL2hlYXJ0LXRvLWJlYWQuYmxlbmQiLAogICAgICAiZnJhbWVIYXNoZXMiOiBbCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMCwKICAgICAgICAgICJzaGEyNTYiOiAiNWM0N2NmZmZiYzExMTk0MTBmMmNhOTdmNDk5YTg5MWNkZWE5OGM3ZGI0NWNmMTlkMjE0M2VkMWJkNDhkNzc0MCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEsCiAgICAgICAgICAic2hhMjU2IjogImIzYmNjNzQyMTA2YjllNjJlZmU4NDVkYzgzNTM3NDZlYWViZGY5OTkyNzI1ZmVkZDIwNTliYjg4MzI2ZTMzZDQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAyLAogICAgICAgICAgInNoYTI1NiI6ICI0NjM0ZGU3MjY4N2NkNTg3NTU3MmJmM2U3NDg1NWMyMDY4MDY3MjAwZmIzNjAzMGI2ZDE3MjYwZDAwZTZmMjhkIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMywKICAgICAgICAgICJzaGEyNTYiOiAiN2IzM2YxMzMwYjU3MTRkMjAyM2ZhZTY5NGI0N2RhNzNhMjU1NDgzNjI4ZmI2NTc1ZDgxODBlNDc3NDY2YjA4YiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDQsCiAgICAgICAgICAic2hhMjU2IjogImUyYTBjNjljNzBjYzk2OGY4OGQ5YWQ5MzBiMzJmMjZkNzFmNjMxMmVkMTNmYzQzYWYxMzY4NDdjOWVhNTIzYjkiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA1LAogICAgICAgICAgInNoYTI1NiI6ICI0Zjg4YTA5YjFkNjYxMDNmMGY3MzRmNmQyNThkYmJjMzVjMDQxMzkxMjAxYjA2MTgzNTUzMWMyYmNmYTZlYWFmIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNiwKICAgICAgICAgICJzaGEyNTYiOiAiYzQzMGRkMzQ1OGVmN2JlM2EyNTA0MzI1YThiMWU4NzJmZTI0MTIyZDljNDUxNjg0ZDNjNzM1OWYzZDZlNzAxOCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDcsCiAgICAgICAgICAic2hhMjU2IjogIjZlMGY1ZDEwZTFmNjY4NTQ5ZjM0YzdkMTcwMDhiYWQyZTVkNWJiMWRiOWJkODVlNDdhMjJhNmVmZTkwZjg1NDAiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA4LAogICAgICAgICAgInNoYTI1NiI6ICJjMDEzZjcyMjQ5YmZiNTM5OGE1NzJhMDRiMjQ0MGI5MjI5YWY5YmJjYzc5Mjc5MjcyZjUxYjY1OTU1ZmIxOWY2IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogOSwKICAgICAgICAgICJzaGEyNTYiOiAiOTZhYmQ2Y2Y5NjhkODQ1MGI4YjE0OTViZjY1NzY1NTBjZjk5ZWFjYWUyNzRhMGEwOGViNWU0MzUzNzNiMmMyYSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwLAogICAgICAgICAgInNoYTI1NiI6ICI4ODIxOTYzZTFiODQ1OWI1ZjQ4YjE2ZWZlNTU2MWQ0NzYxMjBjZDZlOWJiZGNlMzg4YmU3OTdhNzBlOWNmMTVkIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMTEsCiAgICAgICAgICAic2hhMjU2IjogIjNhYjFiNWRmNjlhN2RiNjNkYmQzMDhlYmY4NGE0YjFmODFmODE1ZGI2M2Y2NGQ0ODk4YjQ2OWNkN2NkYzEzODciCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAxMiwKICAgICAgICAgICJzaGEyNTYiOiAiZGJjZDRlOTQ0YTc1YTliOGQ1OTlmZTUyOWQ3OWVjOGZlMWM4MmEzZTZlMmYyM2E1NDQ3NTYzOTRmM2I0ZTk5MSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEzLAogICAgICAgICAgInNoYTI1NiI6ICJhM2EwYWMxMTI0MTU5ODk1MjAzYmEwN2I0MzdiODc1MDllNjc0Y2ZkMDJkN2ExZGIwYmI1NjEzYzM2NjhmOTIyIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMTQsCiAgICAgICAgICAic2hhMjU2IjogImQ4OWY4MzFiNTE0YWFlNTQyZTIzYzg2MWQ3ODU0MDU4MzRiZGUyNmQ4NGYxZmIxOGU2OWUwZTNkYWNlZmE4YzQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAxNSwKICAgICAgICAgICJzaGEyNTYiOiAiYmIyZTE0ZTI5YmEwNWNmODY3NTgxNGM3MTE3ODRlMjJhNTQ4MTY2ZjJhNmRjZjg2MjYxYmJjZDNkNzJhNmI5OCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDE2LAogICAgICAgICAgInNoYTI1NiI6ICJmZGVkYjU1NWNlNGZiZGU3NTcxNTgwMjNlZjY2MzlmMTM4ZTJkNDgyODQ2ZjgzM2RkMjA1MGQ5MmUzYzZmNzAwIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMTcsCiAgICAgICAgICAic2hhMjU2IjogIjExMmVhZTRhYzFlMzJmZmYyNjc5MTI0ZmZiZWEyMmYzYzcwYWMwZmZjYzlhYWZiMWM1MjUwNTNlM2I0NzYyYjciCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAxOCwKICAgICAgICAgICJzaGEyNTYiOiAiOTg3YzRjNDVkYmViNzQ4NGQxZjA2YTIwOWI2NzVkNjI4ZmY2YTQ3ZmZhY2JhYWE0Zjg1YjYzZGJmY2RhMjYwMSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDE5LAogICAgICAgICAgInNoYTI1NiI6ICIzMDg4OGEzZjljZGRhMjcwY2M4MDVhMTg3NWUxZjA5N2U3OTM5ZTQ4MTc0Yzg4ZDBmMWJjZjhjMzg3OGEzMmEwIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMjAsCiAgICAgICAgICAic2hhMjU2IjogImE2YzJkNGJiYmE1MTk1NGIyNjJjOWYxZmE3NjgyZGFlYjQ5NGM2MmMyYzczZWUxY2NiNzE1MjcwNWIxNjE1ZjAiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAyMSwKICAgICAgICAgICJzaGEyNTYiOiAiNWUyN2Q3ZTVmYTFjZTliMmJiZWYwMWY2ZjNlZGM2MTgwYTMyNDVhNzQyNGE2ZmYyZjBlMjUyYmJkMzNjNGE5OCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDIyLAogICAgICAgICAgInNoYTI1NiI6ICI1MjMyZTIzM2FhMjhlNjcwNWEwZDQzZmJkYWYyYWY3ZjE3MjJlODg5YzdhZjQ4Y2JkYjQ3ZWRkZWQ1YTk1YzQyIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMjMsCiAgICAgICAgICAic2hhMjU2IjogIjk5ZWRhZjk5ZDcwOTFlN2YwNjFhODI1NDAxZWJiYTljMGI1MDI0ZWU1MzBmNzNmYmQ0ODk2NTQ1Njg0NzJmNDEiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAyNCwKICAgICAgICAgICJzaGEyNTYiOiAiZDE3MzQyMzc1MjY3Yjg4ZTI4NDFhOTc5YmNkNjljNzYzMWI5ODQ3NmNjZjFjMGEzMDY2OThiYTE1OTAyZWE5YiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDI1LAogICAgICAgICAgInNoYTI1NiI6ICI0Yzg2ZmQ3YTY1ZjNjMDRkOWFmYTAzMzRkZTVmYzQzZDAxNjY0OWE2ZDc0ZjA3YzEyYjU1YmJkMzZiMDhkZDc2IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMjYsCiAgICAgICAgICAic2hhMjU2IjogIjM2NTNjMjQ3ZWEwMWMxYzM3ZDRmNTU2MjllMzg4NTgyY2JmOWM2NzE1NTI5MmM4YjA2N2JhYTIzNzg3MzVlOWMiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAyNywKICAgICAgICAgICJzaGEyNTYiOiAiOWRiZmZjZmEyMWUzNzhmZmM4OTVkOTFiYmRjOTU3ZTlhZjk0NDUwMGYyOGU2MmY3ZjNkYTEyYjViZmY3MjAyMiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDI4LAogICAgICAgICAgInNoYTI1NiI6ICJmY2MyNmJhM2QzYWY5YmU2YWQyYzY3ZjIwYzY5YjYzYzEwODc1MDZhYTM0NDZjOTIxNThiYTNkNDEyYzc4MzUyIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMjksCiAgICAgICAgICAic2hhMjU2IjogIjc2MWRjOGExZTNiNTU4NmMwZGI3ZTczY2RjMDJkNDgzNWQ3Zjk1MmE2ZmYwYzc5OTBhYTEyZTI5NDQ2MWIwMWQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAzMCwKICAgICAgICAgICJzaGEyNTYiOiAiNmNmOTg1M2Q4MjkxNTUxN2I2MDExOTI4MDdkZWY1ODk0ODBmNmRkNzhiNzlkOWM3MDZiNmIyZmZhMjYzOTdiMCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDMxLAogICAgICAgICAgInNoYTI1NiI6ICJmODg3Y2YzNWY2MTgyNTFkZDVmMzkyY2UwZGY5ZThmZWJkN2U1ZDRmNjM2MDhjMWM2MjdjOGY1MDMyNDI5MTkzIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMzIsCiAgICAgICAgICAic2hhMjU2IjogIjlmMWJlYWRhYmQ4N2U0OTBmNGRiMDc5OTJlNTMyZjA0Y2ZmZmJiMmRlMzU0MzUzNjk2YjdkNDllM2VhZTQwMjQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAzMywKICAgICAgICAgICJzaGEyNTYiOiAiNDZlZDYyNjI2NzU3YWZiNGRmMDlmZWMzOTRjYWRjZTcxYzQzMDg5OTIxMWI2YWZmMTM3OTllN2M0NjhmMTBmMSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDM0LAogICAgICAgICAgInNoYTI1NiI6ICJhNzgxZTMxZWU2Mjk1NWJlMmE1NTQ5YWU0NzIxYzE3ZWMzYmI4OGNjYTc5NWFjZjEwNTA2OTc0OTAxNDQzZGViIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMzUsCiAgICAgICAgICAic2hhMjU2IjogImFhNTBkOTdlMjhhZTE2NTkxNGVmYTEzYjdiNzBmNWFiMzViOTEwZGY0NjUyYjg3M2I2NjJiNzIzMzM4YjIyN2MiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAzNiwKICAgICAgICAgICJzaGEyNTYiOiAiNmM2MTBiODY1MGU3YmM4MDA5NGFiMjdkOTUyNDNkODQ1NGJmOTEyNGY3YTgyYmJkMjdiMDVhMGI3Y2JhOTBkNCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDM3LAogICAgICAgICAgInNoYTI1NiI6ICI1ZjMyYjFhZDU1ODE3YmZkYWM2ZDkyMjM1MjM2ZWI0Y2UzMzYxNDE0ZDQ0Y2RlYmViZDk3OWMxYTk3MGU4Njc1IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogMzgsCiAgICAgICAgICAic2hhMjU2IjogIjNhYjI1OGUxZWY1MWQ5NWQ5OGRkZjE2ZjY5MTM1MzAyYTZhOGM4YzY5N2FlYTdjMDhhNjYyMGRkYTk4MGU3Y2UiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiAzOSwKICAgICAgICAgICJzaGEyNTYiOiAiNDUzZjcwZmZmZjllYTI4OWJmNmM1ZDhjMDE2MzU3OTE0ZDM5NDE5ZjI5MzZjNDU2ZDdkMmNjNDc5ZjM2NjY2MCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDQwLAogICAgICAgICAgInNoYTI1NiI6ICIzYmNiOTlhYjZiZDc4NzY1MjZkMmMxODQ4ZjZlZTJkZDU3MjRjZDBjNDZiNDk4ZGE3MDY1YWFkZGI5MTU2MmU1IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNDEsCiAgICAgICAgICAic2hhMjU2IjogIjE4ZDU5NzIwOTBiMDI5M2ExMzA1NGNlZTVhYmE4YmY4ODMxNTAyZjdjMjA1ODIwMjhjMDU0ZjY4YTYzYTc5YjMiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA0MiwKICAgICAgICAgICJzaGEyNTYiOiAiYmVkOWNiZDYwMjYwODhjMmU4ZmU0MmVlNmE5MDdjZWQ1YjFiMmY3ZjczZTVmNGQ3ZDVjMzI1NGZiOTUwZDg4ZCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDQzLAogICAgICAgICAgInNoYTI1NiI6ICIzYTdhN2MwZmFjZDNhYzc0MmE4OGVlYzYwZjI1YWRmMjJjNDBmYWQ3YWFlYjk0MTM4YzY5NWFmNmNkNjAzNThjIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNDQsCiAgICAgICAgICAic2hhMjU2IjogImFkZDQ5ZGI4NzJkNjY3MGRkOTQwMzFhZGYzNTBmMGExMjk2YTk4OWE1NjM4ZTk1OGNiNzA2N2NkYWU3MjhjNTQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA0NSwKICAgICAgICAgICJzaGEyNTYiOiAiMzc2OTcwNzUyNTg4OGUxYmU0OTFmZTAwNzNkZGRkN2I3NmQyMTc1MDc0YWNhMjUzNDM3MDIyZDg0MzJlMThiYyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDQ2LAogICAgICAgICAgInNoYTI1NiI6ICJkYjc4YzAzYWVlNWZkYmM3MmZmNDhiMjY3ZGEyMmU5NzI3YTY2NWU0NTQ4ZTQ1MmRhNzUyMDI0Y2I2YTU1OTRjIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNDcsCiAgICAgICAgICAic2hhMjU2IjogIjgxNWM4NmE4NzIyOTM0NmY5NzU1NGQ2ODFhZTdhOTg2ZDY5Njc3MjRiNGFlNWY4YTBjYjZmMTYyYTk2OTZmNjYiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA0OCwKICAgICAgICAgICJzaGEyNTYiOiAiMjY4OThiNDJkNzBlOTcwZGIwZWRkMGRjNzFlNzQ3NmE1NWIyZTJmYjdmZmJjNGU5NmIyOTQwY2MzMmZjMjM0ZiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDQ5LAogICAgICAgICAgInNoYTI1NiI6ICI1OTk2OTNmMTNmNzQwNWNiYjQ5MjUzMmFjYzQ4YjljYjVhYmFlZWRiZGFlOWU0ZmY2MzgyNTliYThiMjQyYTQ0IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNTAsCiAgICAgICAgICAic2hhMjU2IjogIjEyMDFlNThmOTU3MzBiNDAzN2RkNjU5NmExNTU0ZjVhYWVmNjJlZmJjYzQ5MDk3MjMwNzQ2MGQ2MzM3YmMxODciCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA1MSwKICAgICAgICAgICJzaGEyNTYiOiAiYjkzYjA4Yzg1ODg1M2IxZDNiZGJmMDc0OWRlMTU3ZjU1MTNkMTZjOWIyNWU3MGQ5MjJlMmY1NTAyN2ViMzhjNCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDUyLAogICAgICAgICAgInNoYTI1NiI6ICI0YTFlM2ViODk3OTE2NmU0OTMxN2Q1Y2RiYjk2NWQ4ZjQ3OWE5YzEyYmIxMTA0YTk0ODI0NzZiNmYxZGRiYjk1IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNTMsCiAgICAgICAgICAic2hhMjU2IjogIjk1NjFjZDAxN2YyZmI3ZDhlNGQzMTEwZmEzZmE2YWRjYTA3ODk1MWY3M2M2Mzk0NGNiNjRmNjA3NzFlMDRiNTAiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA1NCwKICAgICAgICAgICJzaGEyNTYiOiAiN2FjZjMzNzNiMDBjOTU3NGU4MWIwMWE3YjA3OWQ5ZWI3Y2Y4NTU5NDgyNGE0ZDg4ZTllN2ZkNDM3M2NmM2JiNCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDU1LAogICAgICAgICAgInNoYTI1NiI6ICIzYjE3ZmM1ZTFlYzhiYWEwZDdhNjhlZjk5YTQxYTQ0MzdjYTkyZjJmOGY4MjM3ODhiNDdiOTY4Y2UyODE1ZGQ5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNTYsCiAgICAgICAgICAic2hhMjU2IjogIjg1NTQ2YjcxMmFiYWU5NzliNjRhYWM5ZGQ4NDBhMzZiYjJjZDBmN2U3NjdhODY2YTRlYzdmOTliOWNhZDkxMDgiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA1NywKICAgICAgICAgICJzaGEyNTYiOiAiMmVkZTE2Yzc2MzQ1ZjY5YzcxM2IxMzI3MTJiMzkxZTQzZjg0ZWZiYWM4N2Q1M2ZlYjIwMWU5NzE4Y2ZmMGJhNiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDU4LAogICAgICAgICAgInNoYTI1NiI6ICJjMWFlZmZlNTIzMWI0YzE5YTIzMDhlNDVjNTJmNThhOWZmYmJhYTRjNjg1OTc0OWM0OGI1NWUxNzM1OGFiMmI1IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNTksCiAgICAgICAgICAic2hhMjU2IjogIjc2NWZjNTQ3MzAzMmU5OTIxZTUzMDk1NWEwYjA4YjMwYmFlNDk1NGEzNTI3OTA1YTI4ZjgwMDc1ZmNiNDhmZGQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA2MCwKICAgICAgICAgICJzaGEyNTYiOiAiYzE2MmFlZDcxNzUxNjNiZmU2ZmQ4NGY4ZGYyZDZhMGFlZGYyOWFkYTlkZGE1NWFkZWI1YmExOGRjNWQxMjcyMCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDYxLAogICAgICAgICAgInNoYTI1NiI6ICI4M2Q2Mjc3OTIwNzI4MTg4ZTljNTU3ODYyNDRjM2FiNzEzMGFlZjVlNTQyYjc1YmRlYmI4ODNmZmUzN2I4YmQ1IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNjIsCiAgICAgICAgICAic2hhMjU2IjogIjk5NWRmMzFlZGRlMGEzYzI0MDVjNjc0MGI2M2U3MTU2Mjk3NjQyYzJlMGZmMzFlNWIyNjFjNGZmMDJmN2JjZWQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA2MywKICAgICAgICAgICJzaGEyNTYiOiAiY2ExZjU4MDQ5YjQ0MThjMGMwODNlYzJiYWViYTY5MmEzOTg4MDU2NGUzYTlhN2U4YjIzOTE2ODU5Mzk0ZDAyOCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDY0LAogICAgICAgICAgInNoYTI1NiI6ICJlODc0OTM1Nzg3ZDI4MzNlMTM1ZGE5YmJjMDgyNmY4ZGQ1Mzg0YTFjMWQzNzJjNzE0N2EzNzM2OWQ0MWU5NzFlIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNjUsCiAgICAgICAgICAic2hhMjU2IjogIjZmZmZkMjYwOGFiZGViZDM2N2YxYTc5NDU4YmVjNjA0ODI4ODJkYzRjYTBlMWJmMjk5MDlkN2YyZGM2ZjdlYzciCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA2NiwKICAgICAgICAgICJzaGEyNTYiOiAiN2Q3YWI3OGMwYWY3NmQyZTkzM2FiYTA5YWEzMGFjNWNhM2JjM2JmM2RhOGY5OGQ2YTlhZWIyN2VlOTEwY2QyYiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDY3LAogICAgICAgICAgInNoYTI1NiI6ICJlZGRhZmFiMTBjNzQ2OGI3MjJjMWJmMjVlMjdkY2Q4ZTNhNTIxMWI3ZmYzNzhlMGU3NzY4MTM1MWE1NTgwZDgyIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNjgsCiAgICAgICAgICAic2hhMjU2IjogIjE0ZTJlMDdmMjQyNmQxNzFkNmFiOWUyMDAxMjhkYzAyZjYwNDZhZGQ4ODBmY2QxZmU4MTIzM2ZmNmMxOGY1YzgiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA2OSwKICAgICAgICAgICJzaGEyNTYiOiAiMWVkODYwNDQ2M2JkMmNjMDBiZTg2N2UzMjk1Mzc4ZGMzMjI4ZWNiYWNiMDg2NDA0MDdjZjdmZTZjYTFhNzUyMSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDcwLAogICAgICAgICAgInNoYTI1NiI6ICI3MTBkMzlkNjZhYmVmNWFkMmM1OTZjMjNmOTlkNDQ4MDA5Zjg5ZTY0ZTRjNjU2ODIwMmYyNjJlY2FhMzZkN2VmIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNzEsCiAgICAgICAgICAic2hhMjU2IjogIjBkZjYwOWNmY2M3MDhkMjIyYjIyNDkyOTBhNWViODIzMmU1MDJmZjZhMTA1Njk4NzE0M2VlZTQ5YmJkM2IyNTQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA3MiwKICAgICAgICAgICJzaGEyNTYiOiAiNmI4MjA3NmZiNjVlMzhlMTQwZTVlZGZlN2RhMzRmZjk1MTU3MTlmZGE1Nzk2Y2NmZjZjYjE1NGM0NTk0NWNmYyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDczLAogICAgICAgICAgInNoYTI1NiI6ICIyYjdmYzVlMjBlNzlkZDk1ODdmYjJlMDUwOTBhMjIxOTAwNjQ4YTg5Y2Y5YWYyYjg1YzQ0ZDdiNGJmOGZjZTU4IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNzQsCiAgICAgICAgICAic2hhMjU2IjogImY3OTBkN2YwZTZhYzZmOWM3MzFjMjc2ODU3NzE1ODFhZDY0NGY3NzY3YmM2OWQ2OTJmMDY0YzFiMjgzMmI3ZDQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA3NSwKICAgICAgICAgICJzaGEyNTYiOiAiOWQ5MDIwODRkNzNmMWY1OTVlMDYyYmFlYjVmZDA4MGFhNWIxZjdlNTg4MjdiZjI2ZjliZmQzOGIyZDllNTViZCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDc2LAogICAgICAgICAgInNoYTI1NiI6ICI0ZjViMDBlN2Q0MDMyMzMzNzVlMWVmZDcwYjNmMjE1ZmU3NTQxMjAzNjFiZDZhNjMxN2NjYmY5NWRkNDg3ZjFiIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogNzcsCiAgICAgICAgICAic2hhMjU2IjogIjYyZWFlOTc5MTM1YThlMDJmZTIxYmMwMzg4Y2EzY2Q3ZTY3Njk3NDM5MjcxMWY4M2JjZWE4ZGIxYzI5YjExMmUiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA3OCwKICAgICAgICAgICJzaGEyNTYiOiAiZDNiNzk0M2U3ZWY1NWQ5OWE0MGRiODUxMzBhZDMyYzE3MmE3NDU4NDIxNWRiODRlNjM5NDA3NDQ0YWE2OTkwNiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDc5LAogICAgICAgICAgInNoYTI1NiI6ICJjM2IxMDhlMjJiMjZmMWM1OGMwNTAzNmE3MzY4MGM2NDUyMDc0ZWNmOTM5OGQ3MGNkMjFhYTkyZTZhMmYyOTk2IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogODAsCiAgICAgICAgICAic2hhMjU2IjogIjYyNGQwZGEyMWY4NDc0NTczZDRiM2Q4MzRkODk5Yjg1NWI0N2MwMDVmOTI1ZmI1MWMwYzdhNTE5NjdkNjNhNTAiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA4MSwKICAgICAgICAgICJzaGEyNTYiOiAiNzUyNTQ1NjA4NTUzOTY5Nzc5ODkyNzE0ODU0YTU5MzgyZjM4NWJhZTQ2MWYxOTVlMTNhMjU5ODJhNGRjMDIyMiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDgyLAogICAgICAgICAgInNoYTI1NiI6ICI5MzlmMjFmNTIyOGVkMTVkODdhMTk5YzY5NWJmODI1N2E1NTY3NjRlNjk5OTAzNjgwZjIzODFkOThiNjc0ZWFjIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogODMsCiAgICAgICAgICAic2hhMjU2IjogIjZlYzgzMDY3M2ZiNTE4MjA0ZTc5MWM4NDU3OWQxNzZjODZjMjViNjhjNzAzMDZhNzQ2ZTUzY2ZlZTkwMWIwMzEiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA4NCwKICAgICAgICAgICJzaGEyNTYiOiAiNDc3M2Q0ZGE3ZmZkOTk1NDFkNmFlOWZhMzM5ODMxNzEyZjA5N2I0YTc2Yzc1YjJlNTA1Y2NjODZlNjM3MjFiMyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDg1LAogICAgICAgICAgInNoYTI1NiI6ICJiOTdjOTBkN2Q3NDBlZDBmNjA0NTM1NDE3M2RkODUyNjJjZTM4OWYxNDQzZDRjN2U4YzczN2UyZDBlZDQ1Mjg0IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogODYsCiAgICAgICAgICAic2hhMjU2IjogIjBhNmIwOTk5ZmRhZTM1NGJhMjFlYzM2MTc0MTQ1MThhZGM1MGFhMmJiN2MyMGZmYTA1MmM0YWIzYmM2OWYxMjUiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA4NywKICAgICAgICAgICJzaGEyNTYiOiAiNmYwNDZlZTVmMzA1NjgyOWQ0OTc2YWVkN2I4NzdiNjhjNTkzYmFhYmQyZDFkMjgxY2UwZmQ1OTM2NzA2M2Q3MyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDg4LAogICAgICAgICAgInNoYTI1NiI6ICJmM2M0NGI1NmE1Nzg3YzNhNzQ3MjFjM2U1NDRlMWQ3MjkxMGY1NjYxYTg0YTFhOGFlZWMwYzIwNDE0MzJjZWM2IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogODksCiAgICAgICAgICAic2hhMjU2IjogIjM4ZTYxYjQxOTY4ODM4OTY2MmJlYWNjMDY5MWYyYmI2ZTZjOTBiNDE5ZGZhNjI2YzNkNDM0N2I1NTM1MWQzNjUiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA5MCwKICAgICAgICAgICJzaGEyNTYiOiAiODE5N2JjMWY5ODlkZDBhMjRjMDM3YTVjMzM3ODJlODRjOTQzMWMyNWM0NmZkMzdhZjhlYjZiZWMzMWJhOTZkZCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDkxLAogICAgICAgICAgInNoYTI1NiI6ICIwMWQ5NzkyODdlYTVhNTY5ZDI3NTczYzNjZGUwZmE0OWQzN2FkMDE3MzllZWRiMDA0NWQzNTc2NjYyYTIyNDAyIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogOTIsCiAgICAgICAgICAic2hhMjU2IjogIjNmZGY4NzlmZWQ5NjIyNTk2YTNiOWEwZjQzNDBiOTNlODJkNzBlYzUwOGI1MjgwN2EwZWRlZmVjNDljMzM3YWQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA5MywKICAgICAgICAgICJzaGEyNTYiOiAiYWU5MzA5Njc5OGRjMjkwYWZjMzk2YTY0ZGRhN2Y1NjZiNGYzOTgxNjg5MGNlYTRmYTU3OWMyMDczNTA4ZGM1OSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDk0LAogICAgICAgICAgInNoYTI1NiI6ICI4ZDE5ZWRjN2UwMWYyMTRiODg5ODY3MzA2N2YzYjJiMDZlOGUxN2U3OTFkZDg3OGQ4NzQ0YWI0NWNhNmY0Y2UwIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogOTUsCiAgICAgICAgICAic2hhMjU2IjogIjgxZGMxNTljZmE0YTE4Y2E5NjA5MjUxODI3YTg5ZTdjYzNlODBkMGI0NjVkNzliZDYzZDkxNWI1NjcxZDk2NWMiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA5NiwKICAgICAgICAgICJzaGEyNTYiOiAiYjZmNTk0NTUxMTU0ZDZkZjc5ZTBiMWUzNTVkZmJmYzIyMTg5ZjAyZDZiYjcxNjk2YTJiY2M4ZTYzODI0YmFmNSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDk3LAogICAgICAgICAgInNoYTI1NiI6ICJiNDM1YjA0ZjkzZTNhOTVmYzIyMTBjNTBkYmM2YzEyMTE1Mzc5NjAzNDUzNzg4YTNlMDM4NGUxYmUzMTY4ZDhiIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImZyYW1lIjogOTgsCiAgICAgICAgICAic2hhMjU2IjogImQ5ZmZjNWI5ZTRhNDEwM2RhNTQ0NjhkYWVlOTk5MzNjZWVkMDIzZmJhZjljMjc4NWRkYTFmOTIwNzQxMjIwN2QiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiZnJhbWUiOiA5OSwKICAgICAgICAgICJzaGEyNTYiOiAiMzgzNTVlZWIzN2QwYTNmY2UxZDQyNWZkYjhlMzM1ZTA2ZDQ5ZjEzYzVhMjk5MjBhYTkwYmNhZTk1YjM2NDZiMCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwMCwKICAgICAgICAgICJzaGEyNTYiOiAiMWZkMzM1YWU5ZGZiYmFhNGRjYTQyOWE2YmQxZDJmMTE3NTJjYWU3M2JjMDQwMGZlNzk0YjU2NWQ0ZWQwM2FmZSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwMSwKICAgICAgICAgICJzaGEyNTYiOiAiY2E5YWExMTEzY2U1NDZlNjY3MTRiMzQ3NTkyODQyN2ZjOGVhOTQ4NGE3YjM2MWNlMDk2M2UxNzdjZWQ3MWRiMSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwMiwKICAgICAgICAgICJzaGEyNTYiOiAiNzhlZWY5YzVjZjI3NGZhY2VlYWIyNmFiYzdkYzE0N2FmOTgwZGE1NzBjYTExZWE0ZWQ0MTcwNmE4NjhkMDIyNCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwMywKICAgICAgICAgICJzaGEyNTYiOiAiYTdjNWIyMmRjYTBhYjE4NjhmNTUzYjdiOWU0MmJjNWQzM2JjMTQxOTg5ZjFjNzQyZjQwZjI1NWI1NDliZjMwYiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwNCwKICAgICAgICAgICJzaGEyNTYiOiAiZTVjN2Q1N2Y2NGM2YmVkMTcxZjY2NDRmNWFjNzZjMGFkNjlhYjNkZDUzMWFkZWM3ZGNjNjI1ZGZkNjE3ZTdlNyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwNSwKICAgICAgICAgICJzaGEyNTYiOiAiYzYyN2E0M2ZkYTc3ZmE4ZGMxNzdjODdkYWVjOTIyOWFkOWQxMDQxOGY1ZjI4MDYxNzFkMzVmNmVkZjIyM2RhMCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwNiwKICAgICAgICAgICJzaGEyNTYiOiAiODM0NGMzOWMyNmNjZmMwNDhkYzRiYTlmNjBiNzYyZjBjN2YzMGRiN2EyNTNhMDA4NzEwNzliMGY0YmMwYTQzNCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwNywKICAgICAgICAgICJzaGEyNTYiOiAiYzQ4ODQ0NWRiMGEwOGQwODYyMDE2NjE4NjM5MThjMzI2ZjllZTA5MGRlOTBlZTc0Yjk5NGYzYzNiMDRmZWMzMiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwOCwKICAgICAgICAgICJzaGEyNTYiOiAiNzFkMDZiYjFkMDVlZWQxOWI4MmQ5ODc1YjYwZTU1NDNhZTNmZTY5MWVjM2JhMGU4ZTQ3NDRlNzZjZTQ1ZjFlYiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDEwOSwKICAgICAgICAgICJzaGEyNTYiOiAiZGQzNWZkMDc2OTk1NjUzZWY1YmExZGVlNTIwMjllYWE3NGViMDkzZjk3ZWY5YTkzMDk5ZmJkMjNmYzJmYWZmZCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExMCwKICAgICAgICAgICJzaGEyNTYiOiAiNTViYzRiNDI2ZDJiMDY3MTY5MTM4MTdmZjE2MmVkMDI3MmUyNzE3NDBlZGZkNzdmZjlkYzAwZGU4YmIwODBhYyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExMSwKICAgICAgICAgICJzaGEyNTYiOiAiMjI0OGFjMTkyYzBiM2YzYjkzNGU2MmI2NGRjYzU2OWE2NmRmNjlhYjA5YTFhMjUyNDgyZDg4MWU2MTYzZmNhOSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExMiwKICAgICAgICAgICJzaGEyNTYiOiAiYjBiYWFkZDJhYTBjN2JjYWRkMGZhM2I0ZjcxNmNhNjM4NDY5YjVmOGNlODQ0ZDc3NzEwMmNkZmNmMDhhNmJkYyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExMywKICAgICAgICAgICJzaGEyNTYiOiAiZWY1MWJiOGVkMzkzMTMyMGVlYzI1MDQ4NTNlNDkxZDE0OGMzMjJmNmRjN2FmMzE5OWE4ODUwMmQzY2Y0OTVmZSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExNCwKICAgICAgICAgICJzaGEyNTYiOiAiYTk5OTVmNWIyMDQ5OWNkZDZkMDdiNmJiODVkMDI1YjIwN2RhM2Q0NGIzNTdmZDQzMzc3NWFmNWU4ZDVjMTVhNiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExNSwKICAgICAgICAgICJzaGEyNTYiOiAiYzFiMmFhZmMyMmU5OTdhODU3MzY2ZDIzMmUyZGU3YTMxN2RmYzZlMWRjNGZhZTU3MzYxNDU1ZmU1NjQxNGJlNCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExNiwKICAgICAgICAgICJzaGEyNTYiOiAiZTFkYTBkOWU5ZjFhMDY3Y2FkNGI3MThkOGM3MzI1YzI2NDUwZDVjYzE0OWI5YjY3YzQyNTExNDA1MmEwYzdiNSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExNywKICAgICAgICAgICJzaGEyNTYiOiAiMjMwYjM2OWE1ZWMwYjc1OTVjNWNiOGY2ZThjOWI0NmFkYmJiZTZmODgzMTEwODcwMzdkZGMxYzRiMWY1ZDEwNiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExOCwKICAgICAgICAgICJzaGEyNTYiOiAiMTlkZWVmZmIxOTUyNzhhNDVjODQyZThhZmI2N2EzNWFmNDRjMTUwMGE0OWEyNDY1ZTFlMDc4NmEzZDM2MzNmNSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJmcmFtZSI6IDExOSwKICAgICAgICAgICJzaGEyNTYiOiAiMzRiMzBiODIzZTJhZjZkZjVlZmMyMjIyMDYzNmQ4MDA2MTc2MWViZmJiMGU4ODA2OTAyNzI3ZWUzOWQ0ZDdmNiIKICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICAiYmVhZCI6IHsKICAgICAgInBhdGgiOiAicHVibGljL2ltYWdlcy9uZXctbWVkaWEtdjIvbW90aW9uLWxhYi9jb3JhbC1iZWFkLnBuZyIsCiAgICAgICJzaGEyNTYiOiAiODVmOWVlNWRkMDE4YjYzZjNjMGQwNDQ2YzI5N2ExNDExODIwNzRkODFmNzkzYjIwN2UwNjUxYmE4M2Q4NTg3YSIsCiAgICAgICJzaXplIjogWwogICAgICAgIDY0MCwKICAgICAgICA2NDAKICAgICAgXSwKICAgICAgImJsZW5kQ2FjaGUiOiAiLmNhY2hlL21vdGlvbi1sYWItYXNzZXRzL2JlYWQuYmxlbmQiLAogICAgICAicmVuZGVyU2Vjb25kcyI6IDE4LjI5NywKICAgICAgInJhZGl1cyI6IDAuNDksCiAgICAgICJtYXRlcmlhbCI6ICJDb3JhbC1yZWQgZ2xhemVkIGNlcmFtaWMiLAogICAgICAiZ2VvbWV0cnkiOiAiU2FtZSB0b3BvbG9neSBhbmQgZnJhbWluZyBhcyBoZWFydC10by1iZWFkIG1vcnBoIGVuZHBvaW50IgogICAgfSwKICAgICJlZGdlIjogewogICAgICAicGF0aCI6ICJwdWJsaWMvaW1hZ2VzL25ldy1tZWRpYS12Mi9tb3Rpb24tbGFiL2NhdC1kaXNwbGF5LWVkZ2UucG5nIiwKICAgICAgInNoYTI1NiI6ICI2NGE0Y2M1YWMyOWQ0NWEwYWQxZjM4MjM5M2MxZjZkNDNmOTk0YmQ0NjZhZTU4Mjc4Mjg2N2U2N2MzMzRmZjM4IiwKICAgICAgInNpemUiOiBbCiAgICAgICAgMTE1MiwKICAgICAgICAxMTUyCiAgICAgIF0sCiAgICAgICJibGVuZENhY2hlIjogIi5jYWNoZS9tb3Rpb24tbGFiLWFzc2V0cy9lZGdlLmJsZW5kIiwKICAgICAgInJlbmRlclNlY29uZHMiOiAxMTQuNzE0LAogICAgICAieWF3RGVncmVlcyI6IDM1LAogICAgICAiYm9hcmREaW1lbnNpb25zIjogWwogICAgICAgIDEuOCwKICAgICAgICAwLjE0NSwKICAgICAgICAyLjU1CiAgICAgIF0sCiAgICAgICJzb3VyY2VTaXplIjogWwogICAgICAgIDExNDUsCiAgICAgICAgMTM3NAogICAgICBdLAogICAgICAiaW1hZ2VQbGFuZVNpemUiOiBbCiAgICAgICAgMS41NSwKICAgICAgICAxLjg2MDAwMDAwMDAwMDAwMDMKICAgICAgXQogICAgfSwKICAgICJoZWFydCI6IHsKICAgICAgInBhdGgiOiAicHVibGljL2ltYWdlcy9uZXctbWVkaWEtdjIvbW90aW9uLWxhYi9jb3JhbC1oZWFydC5wbmciLAogICAgICAic2hhMjU2IjogImEwODA1YjBhOGM5ODczYjVjOTBiM2M0NWQ4YTI0ODQ3NWQ2NWY0YTExM2EzMzBiYWQ2NjFiNWJiYTYxNTBhMzciLAogICAgICAic2l6ZSI6IFsKICAgICAgICAxMDI0LAogICAgICAgIDEwMjQKICAgICAgXSwKICAgICAgImJsZW5kQ2FjaGUiOiAiLmNhY2hlL21vdGlvbi1sYWItYXNzZXRzL2hlYXJ0LmJsZW5kIiwKICAgICAgInJlbmRlclNlY29uZHMiOiAzNi41NywKICAgICAgIm1hdGVyaWFsIjogIkNvcmFsLXJlZCBnbGF6ZWQgY2VyYW1pYyIsCiAgICAgICJtYXhpbXVtVGhpY2tuZXNzIjogMC41LAogICAgICAiZ2VvbWV0cnkiOiAiU2FtZSBjbG9zZWQgVVYgdG9wb2xvZ3kgYW5kIGZyYW1pbmcgYXMgaGVhcnQtdG8tYmVhZCBtb3JwaCBzdGFydCIKICAgIH0KICB9LAogICJnZW5lcmF0b3IiOiAic2NyaXB0cy9nZW5lcmF0ZS1tb3Rpb24tbGFiLWFzc2V0cy5weSIsCiAgImdlbmVyYXRvclNoYTI1NiI6ICJlNDJmOWE2YWFjZDg1NmZiNmIxNmFjZjU0OTcwMjllMjVmNzVkYmEwNzBmNmRlNjZkMjkyYzI3ZjQ0OGMyMDFjIiwKICAiYmxlbmRlclZlcnNpb24iOiAiNC4zLjIiLAogICJibGVuZGVyUHl0aG9uVmVyc2lvbiI6ICIzLjEzLjUiLAogICJyZW5kZXJFbmdpbmUiOiAiQ3ljbGVzIENQVSIsCiAgInRocmVhZHMiOiAyLAogICJzYW1wbGVzIjogNjQsCiAgInNlZWQiOiAyNzE4MjgsCiAgImRlbm9pc2UiOiBmYWxzZSwKICAidHJhbnNwYXJlbnRGaWxtIjogdHJ1ZSwKICAib3V0cHV0IjogIlJHQkEgUE5HLCA4LWJpdCIsCiAgImRlbm9pc2VVbmF2YWlsYWJsZVJlYXNvbiI6ICJTeXN0ZW0gQmxlbmRlciBidWlsZCBoYXMgbm8gT3BlbkltYWdlRGVub2lzZSBzdXBwb3J0OyB2ZXJpZmllZCBieSBpbml0aWFsIGZhaWxlZCByZW5kZXIuIiwKICAiY29sb3JNYW5hZ2VtZW50IjogIkFnWCAvIE1lZGl1bSBIaWdoIENvbnRyYXN0IC8gZXhwb3N1cmUgKzAuMTUiLAogICJsaWdodGluZyI6ICJMYXJnZSB3YXJtIHNvZnRib3ggNjIwVy80LjI7IGNvb2wgZnJvbnQgZmlsbDExNVcvMy41OyB3ZWFrIGNvb2wgZWRnZTk1Vy8yLjUiLAogICJjYXRTb3VyY2UiOiB7CiAgICAicGF0aCI6ICJwdWJsaWMvaW1hZ2VzL25ldy1tZWRpYS12Mi9raXR0ZW4tc3R1ZHkucG5nIiwKICAgICJzaGEyNTYiOiAiYzkzMjNlYWZhN2NlYzQ5NzcxNGIxNmY1N2ZmZWVhZGU4YzBjZjg2ZWE4MTdjZDU1MjM2YjM1MGY2Y2I2ZWU3MCIKICB9LAogICJub3RlcyI6ICJEaXJlY3QgQmxlbmRlciBvdXRwdXQuIE5vIGltYWdlIGVkaXRpbmcsIGdlbmVyYXRlZCBiYWNrZ3JvdW5kLCBVSSwgdGV4dCBvciBwYWlkIEFQSS4iCn0K",
      "parsed": {
        "assets": {
          "hero": {
            "path": "public/images/new-media-v2/motion-lab/cat-display-hero.png",
            "sha256": "c091ab158448ff5039f11730c9aab2876b89df815245e3382a35a569dcfb342a",
            "size": [
              1152,
              1152
            ],
            "blendCache": ".cache/motion-lab-assets/hero.blend",
            "renderSeconds": 99.328,
            "yawDegrees": 12,
            "boardDimensions": [
              1.8,
              0.145,
              2.55
            ],
            "sourceSize": [
              1145,
              1374
            ],
            "imagePlaneSize": [
              1.55,
              1.8600000000000003
            ]
          },
          "morph": {
            "pathPattern": "public/images/new-media-v2/motion-lab/morph/frame-%03d.png",
            "size": [
              384,
              384
            ],
            "frames": 120,
            "fps": 60,
            "durationSeconds": 2,
            "samples": 32,
            "denoise": false,
            "renderSeconds": 323.413,
            "method": "One closed 4994-vertex UV mesh with Bead shape key; cubic eased 3D vertex interpolation.",
            "material": "Coral-red glazed ceramic; identical lighting, camera and center in all frames.",
            "blendCache": ".cache/motion-lab-assets/heart-to-bead.blend",
            "frameHashes": [
              {
                "frame": 0,
                "sha256": "5c47cfffbc1119410f2ca97f499a891cdea98c7db45cf19d2143ed1bd48d7740"
              },
              {
                "frame": 1,
                "sha256": "b3bcc742106b9e62efe845dc8353746eaebdf9992725fedd2059bb88326e33d4"
              },
              {
                "frame": 2,
                "sha256": "4634de72687cd5875572bf3e74855c2068067200fb36030b6d17260d00e6f28d"
              },
              {
                "frame": 3,
                "sha256": "7b33f1330b5714d2023fae694b47da73a255483628fb6575d8180e477466b08b"
              },
              {
                "frame": 4,
                "sha256": "e2a0c69c70cc968f88d9ad930b32f26d71f6312ed13fc43af136847c9ea523b9"
              },
              {
                "frame": 5,
                "sha256": "4f88a09b1d66103f0f734f6d258dbbc35c041391201b061835531c2bcfa6eaaf"
              },
              {
                "frame": 6,
                "sha256": "c430dd3458ef7be3a2504325a8b1e872fe24122d9c451684d3c7359f3d6e7018"
              },
              {
                "frame": 7,
                "sha256": "6e0f5d10e1f668549f34c7d17008bad2e5d5bb1db9bd85e47a22a6efe90f8540"
              },
              {
                "frame": 8,
                "sha256": "c013f72249bfb5398a572a04b2440b9229af9bbcc79279272f51b65955fb19f6"
              },
              {
                "frame": 9,
                "sha256": "96abd6cf968d8450b8b1495bf6576550cf99eacae274a0a08eb5e435373b2c2a"
              },
              {
                "frame": 10,
                "sha256": "8821963e1b8459b5f48b16efe5561d476120cd6e9bbdce388be797a70e9cf15d"
              },
              {
                "frame": 11,
                "sha256": "3ab1b5df69a7db63dbd308ebf84a4b1f81f815db63f64d4898b469cd7cdc1387"
              },
              {
                "frame": 12,
                "sha256": "dbcd4e944a75a9b8d599fe529d79ec8fe1c82a3e6e2f23a544756394f3b4e991"
              },
              {
                "frame": 13,
                "sha256": "a3a0ac1124159895203ba07b437b87509e674cfd02d7a1db0bb5613c3668f922"
              },
              {
                "frame": 14,
                "sha256": "d89f831b514aae542e23c861d785405834bde26d84f1fb18e69e0e3dacefa8c4"
              },
              {
                "frame": 15,
                "sha256": "bb2e14e29ba05cf8675814c711784e22a548166f2a6dcf86261bbcd3d72a6b98"
              },
              {
                "frame": 16,
                "sha256": "fdedb555ce4fbde757158023ef6639f138e2d482846f833dd2050d92e3c6f700"
              },
              {
                "frame": 17,
                "sha256": "112eae4ac1e32fff2679124ffbea22f3c70ac0ffcc9aafb1c525053e3b4762b7"
              },
              {
                "frame": 18,
                "sha256": "987c4c45dbeb7484d1f06a209b675d628ff6a47ffacbaaa4f85b63dbfcda2601"
              },
              {
                "frame": 19,
                "sha256": "30888a3f9cdda270cc805a1875e1f097e7939e48174c88d0f1bcf8c3878a32a0"
              },
              {
                "frame": 20,
                "sha256": "a6c2d4bbba51954b262c9f1fa7682daeb494c62c2c73ee1ccb7152705b1615f0"
              },
              {
                "frame": 21,
                "sha256": "5e27d7e5fa1ce9b2bbef01f6f3edc6180a3245a7424a6ff2f0e252bbd33c4a98"
              },
              {
                "frame": 22,
                "sha256": "5232e233aa28e6705a0d43fbdaf2af7f1722e889c7af48cbdb47edded5a95c42"
              },
              {
                "frame": 23,
                "sha256": "99edaf99d7091e7f061a825401ebba9c0b5024ee530f73fbd489654568472f41"
              },
              {
                "frame": 24,
                "sha256": "d17342375267b88e2841a979bcd69c7631b98476ccf1c0a306698ba15902ea9b"
              },
              {
                "frame": 25,
                "sha256": "4c86fd7a65f3c04d9afa0334de5fc43d016649a6d74f07c12b55bbd36b08dd76"
              },
              {
                "frame": 26,
                "sha256": "3653c247ea01c1c37d4f55629e388582cbf9c67155292c8b067baa2378735e9c"
              },
              {
                "frame": 27,
                "sha256": "9dbffcfa21e378ffc895d91bbdc957e9af944500f28e62f7f3da12b5bff72022"
              },
              {
                "frame": 28,
                "sha256": "fcc26ba3d3af9be6ad2c67f20c69b63c1087506aa3446c92158ba3d412c78352"
              },
              {
                "frame": 29,
                "sha256": "761dc8a1e3b5586c0db7e73cdc02d4835d7f952a6ff0c7990aa12e294461b01d"
              },
              {
                "frame": 30,
                "sha256": "6cf9853d82915517b601192807def589480f6dd78b79d9c706b6b2ffa26397b0"
              },
              {
                "frame": 31,
                "sha256": "f887cf35f618251dd5f392ce0df9e8febd7e5d4f63608c1c627c8f5032429193"
              },
              {
                "frame": 32,
                "sha256": "9f1beadabd87e490f4db07992e532f04cfffbb2de354353696b7d49e3eae4024"
              },
              {
                "frame": 33,
                "sha256": "46ed62626757afb4df09fec394cadce71c430899211b6aff13799e7c468f10f1"
              },
              {
                "frame": 34,
                "sha256": "a781e31ee62955be2a5549ae4721c17ec3bb88cca795acf10506974901443deb"
              },
              {
                "frame": 35,
                "sha256": "aa50d97e28ae165914efa13b7b70f5ab35b910df4652b873b662b723338b227c"
              },
              {
                "frame": 36,
                "sha256": "6c610b8650e7bc80094ab27d95243d8454bf9124f7a82bbd27b05a0b7cba90d4"
              },
              {
                "frame": 37,
                "sha256": "5f32b1ad55817bfdac6d92235236eb4ce3361414d44cdebebd979c1a970e8675"
              },
              {
                "frame": 38,
                "sha256": "3ab258e1ef51d95d98ddf16f69135302a6a8c8c697aea7c08a6620dda980e7ce"
              },
              {
                "frame": 39,
                "sha256": "453f70ffff9ea289bf6c5d8c016357914d39419f2936c456d7d2cc479f366660"
              },
              {
                "frame": 40,
                "sha256": "3bcb99ab6bd7876526d2c1848f6ee2dd5724cd0c46b498da7065aaddb91562e5"
              },
              {
                "frame": 41,
                "sha256": "18d5972090b0293a13054cee5aba8bf8831502f7c20582028c054f68a63a79b3"
              },
              {
                "frame": 42,
                "sha256": "bed9cbd6026088c2e8fe42ee6a907ced5b1b2f7f73e5f4d7d5c3254fb950d88d"
              },
              {
                "frame": 43,
                "sha256": "3a7a7c0facd3ac742a88eec60f25adf22c40fad7aaeb94138c695af6cd60358c"
              },
              {
                "frame": 44,
                "sha256": "add49db872d6670dd94031adf350f0a1296a989a5638e958cb7067cdae728c54"
              },
              {
                "frame": 45,
                "sha256": "3769707525888e1be491fe0073dddd7b76d2175074aca253437022d8432e18bc"
              },
              {
                "frame": 46,
                "sha256": "db78c03aee5fdbc72ff48b267da22e9727a665e4548e452da752024cb6a5594c"
              },
              {
                "frame": 47,
                "sha256": "815c86a87229346f97554d681ae7a986d6967724b4ae5f8a0cb6f162a9696f66"
              },
              {
                "frame": 48,
                "sha256": "26898b42d70e970db0edd0dc71e7476a55b2e2fb7ffbc4e96b2940cc32fc234f"
              },
              {
                "frame": 49,
                "sha256": "599693f13f7405cbb492532acc48b9cb5abaeedbdae9e4ff638259ba8b242a44"
              },
              {
                "frame": 50,
                "sha256": "1201e58f95730b4037dd6596a1554f5aaef62efbcc490972307460d6337bc187"
              },
              {
                "frame": 51,
                "sha256": "b93b08c858853b1d3bdbf0749de157f5513d16c9b25e70d922e2f55027eb38c4"
              },
              {
                "frame": 52,
                "sha256": "4a1e3eb8979166e49317d5cdbb965d8f479a9c12bb1104a9482476b6f1ddbb95"
              },
              {
                "frame": 53,
                "sha256": "9561cd017f2fb7d8e4d3110fa3fa6adca078951f73c63944cb64f60771e04b50"
              },
              {
                "frame": 54,
                "sha256": "7acf3373b00c9574e81b01a7b079d9eb7cf85594824a4d88e9e7fd4373cf3bb4"
              },
              {
                "frame": 55,
                "sha256": "3b17fc5e1ec8baa0d7a68ef99a41a4437ca92f2f8f823788b47b968ce2815dd9"
              },
              {
                "frame": 56,
                "sha256": "85546b712abae979b64aac9dd840a36bb2cd0f7e767a866a4ec7f99b9cad9108"
              },
              {
                "frame": 57,
                "sha256": "2ede16c76345f69c713b132712b391e43f84efbac87d53feb201e9718cff0ba6"
              },
              {
                "frame": 58,
                "sha256": "c1aeffe5231b4c19a2308e45c52f58a9ffbbaa4c6859749c48b55e17358ab2b5"
              },
              {
                "frame": 59,
                "sha256": "765fc5473032e9921e530955a0b08b30bae4954a3527905a28f80075fcb48fdd"
              },
              {
                "frame": 60,
                "sha256": "c162aed7175163bfe6fd84f8df2d6a0aedf29ada9dda55adeb5ba18dc5d12720"
              },
              {
                "frame": 61,
                "sha256": "83d6277920728188e9c55786244c3ab7130aef5e542b75bdebb883ffe37b8bd5"
              },
              {
                "frame": 62,
                "sha256": "995df31edde0a3c2405c6740b63e7156297642c2e0ff31e5b261c4ff02f7bced"
              },
              {
                "frame": 63,
                "sha256": "ca1f58049b4418c0c083ec2baeba692a39880564e3a9a7e8b23916859394d028"
              },
              {
                "frame": 64,
                "sha256": "e874935787d2833e135da9bbc0826f8dd5384a1c1d372c7147a37369d41e971e"
              },
              {
                "frame": 65,
                "sha256": "6fffd2608abdebd367f1a79458bec60482882dc4ca0e1bf29909d7f2dc6f7ec7"
              },
              {
                "frame": 66,
                "sha256": "7d7ab78c0af76d2e933aba09aa30ac5ca3bc3bf3da8f98d6a9aeb27ee910cd2b"
              },
              {
                "frame": 67,
                "sha256": "eddafab10c7468b722c1bf25e27dcd8e3a5211b7ff378e0e77681351a5580d82"
              },
              {
                "frame": 68,
                "sha256": "14e2e07f2426d171d6ab9e200128dc02f6046add880fcd1fe81233ff6c18f5c8"
              },
              {
                "frame": 69,
                "sha256": "1ed8604463bd2cc00be867e3295378dc3228ecbacb08640407cf7fe6ca1a7521"
              },
              {
                "frame": 70,
                "sha256": "710d39d66abef5ad2c596c23f99d448009f89e64e4c6568202f262ecaa36d7ef"
              },
              {
                "frame": 71,
                "sha256": "0df609cfcc708d222b2249290a5eb8232e502ff6a1056987143eee49bbd3b254"
              },
              {
                "frame": 72,
                "sha256": "6b82076fb65e38e140e5edfe7da34ff9515719fda5796ccff6cb154c45945cfc"
              },
              {
                "frame": 73,
                "sha256": "2b7fc5e20e79dd9587fb2e05090a221900648a89cf9af2b85c44d7b4bf8fce58"
              },
              {
                "frame": 74,
                "sha256": "f790d7f0e6ac6f9c731c27685771581ad644f7767bc69d692f064c1b2832b7d4"
              },
              {
                "frame": 75,
                "sha256": "9d902084d73f1f595e062baeb5fd080aa5b1f7e58827bf26f9bfd38b2d9e55bd"
              },
              {
                "frame": 76,
                "sha256": "4f5b00e7d403233375e1efd70b3f215fe754120361bd6a6317ccbf95dd487f1b"
              },
              {
                "frame": 77,
                "sha256": "62eae979135a8e02fe21bc0388ca3cd7e676974392711f83bcea8db1c29b112e"
              },
              {
                "frame": 78,
                "sha256": "d3b7943e7ef55d99a40db85130ad32c172a74584215db84e639407444aa69906"
              },
              {
                "frame": 79,
                "sha256": "c3b108e22b26f1c58c05036a73680c6452074ecf9398d70cd21aa92e6a2f2996"
              },
              {
                "frame": 80,
                "sha256": "624d0da21f8474573d4b3d834d899b855b47c005f925fb51c0c7a51967d63a50"
              },
              {
                "frame": 81,
                "sha256": "752545608553969779892714854a59382f385bae461f195e13a25982a4dc0222"
              },
              {
                "frame": 82,
                "sha256": "939f21f5228ed15d87a199c695bf8257a556764e699903680f2381d98b674eac"
              },
              {
                "frame": 83,
                "sha256": "6ec830673fb518204e791c84579d176c86c25b68c70306a746e53cfee901b031"
              },
              {
                "frame": 84,
                "sha256": "4773d4da7ffd99541d6ae9fa339831712f097b4a76c75b2e505ccc86e63721b3"
              },
              {
                "frame": 85,
                "sha256": "b97c90d7d740ed0f6045354173dd85262ce389f1443d4c7e8c737e2d0ed45284"
              },
              {
                "frame": 86,
                "sha256": "0a6b0999fdae354ba21ec3617414518adc50aa2bb7c20ffa052c4ab3bc69f125"
              },
              {
                "frame": 87,
                "sha256": "6f046ee5f3056829d4976aed7b877b68c593baabd2d1d281ce0fd59367063d73"
              },
              {
                "frame": 88,
                "sha256": "f3c44b56a5787c3a74721c3e544e1d72910f5661a84a1a8aeec0c2041432cec6"
              },
              {
                "frame": 89,
                "sha256": "38e61b419688389662beacc0691f2bb6e6c90b419dfa626c3d4347b55351d365"
              },
              {
                "frame": 90,
                "sha256": "8197bc1f989dd0a24c037a5c33782e84c9431c25c46fd37af8eb6bec31ba96dd"
              },
              {
                "frame": 91,
                "sha256": "01d979287ea5a569d27573c3cde0fa49d37ad01739eedb0045d3576662a22402"
              },
              {
                "frame": 92,
                "sha256": "3fdf879fed9622596a3b9a0f4340b93e82d70ec508b52807a0edefec49c337ad"
              },
              {
                "frame": 93,
                "sha256": "ae93096798dc290afc396a64dda7f566b4f39816890cea4fa579c2073508dc59"
              },
              {
                "frame": 94,
                "sha256": "8d19edc7e01f214b8898673067f3b2b06e8e17e791dd878d8744ab45ca6f4ce0"
              },
              {
                "frame": 95,
                "sha256": "81dc159cfa4a18ca9609251827a89e7cc3e80d0b465d79bd63d915b5671d965c"
              },
              {
                "frame": 96,
                "sha256": "b6f594551154d6df79e0b1e355dfbfc22189f02d6bb71696a2bcc8e63824baf5"
              },
              {
                "frame": 97,
                "sha256": "b435b04f93e3a95fc2210c50dbc6c12115379603453788a3e0384e1be3168d8b"
              },
              {
                "frame": 98,
                "sha256": "d9ffc5b9e4a4103da54468daee99933ceed023fbaf9c2785dda1f9207412207d"
              },
              {
                "frame": 99,
                "sha256": "38355eeb37d0a3fce1d425fdb8e335e06d49f13c5a29920aa90bcae95b3646b0"
              },
              {
                "frame": 100,
                "sha256": "1fd335ae9dfbbaa4dca429a6bd1d2f11752cae73bc0400fe794b565d4ed03afe"
              },
              {
                "frame": 101,
                "sha256": "ca9aa1113ce546e66714b3475928427fc8ea9484a7b361ce0963e177ced71db1"
              },
              {
                "frame": 102,
                "sha256": "78eef9c5cf274faceeab26abc7dc147af980da570ca11ea4ed41706a868d0224"
              },
              {
                "frame": 103,
                "sha256": "a7c5b22dca0ab1868f553b7b9e42bc5d33bc141989f1c742f40f255b549bf30b"
              },
              {
                "frame": 104,
                "sha256": "e5c7d57f64c6bed171f6644f5ac76c0ad69ab3dd531adec7dcc625dfd617e7e7"
              },
              {
                "frame": 105,
                "sha256": "c627a43fda77fa8dc177c87daec9229ad9d10418f5f2806171d35f6edf223da0"
              },
              {
                "frame": 106,
                "sha256": "8344c39c26ccfc048dc4ba9f60b762f0c7f30db7a253a00871079b0f4bc0a434"
              },
              {
                "frame": 107,
                "sha256": "c488445db0a08d086201661863918c326f9ee090de90ee74b994f3c3b04fec32"
              },
              {
                "frame": 108,
                "sha256": "71d06bb1d05eed19b82d9875b60e5543ae3fe691ec3ba0e8e4744e76ce45f1eb"
              },
              {
                "frame": 109,
                "sha256": "dd35fd076995653ef5ba1dee52029eaa74eb093f97ef9a93099fbd23fc2faffd"
              },
              {
                "frame": 110,
                "sha256": "55bc4b426d2b06716913817ff162ed0272e271740edfd77ff9dc00de8bb080ac"
              },
              {
                "frame": 111,
                "sha256": "2248ac192c0b3f3b934e62b64dcc569a66df69ab09a1a252482d881e6163fca9"
              },
              {
                "frame": 112,
                "sha256": "b0baadd2aa0c7bcadd0fa3b4f716ca638469b5f8ce844d777102cdfcf08a6bdc"
              },
              {
                "frame": 113,
                "sha256": "ef51bb8ed3931320eec2504853e491d148c322f6dc7af3199a88502d3cf495fe"
              },
              {
                "frame": 114,
                "sha256": "a9995f5b20499cdd6d07b6bb85d025b207da3d44b357fd433775af5e8d5c15a6"
              },
              {
                "frame": 115,
                "sha256": "c1b2aafc22e997a857366d232e2de7a317dfc6e1dc4fae57361455fe56414be4"
              },
              {
                "frame": 116,
                "sha256": "e1da0d9e9f1a067cad4b718d8c7325c26450d5cc149b9b67c425114052a0c7b5"
              },
              {
                "frame": 117,
                "sha256": "230b369a5ec0b7595c5cb8f6e8c9b46adbbbe6f88311087037ddc1c4b1f5d106"
              },
              {
                "frame": 118,
                "sha256": "19deeffb195278a45c842e8afb67a35af44c1500a49a2465e1e0786a3d3633f5"
              },
              {
                "frame": 119,
                "sha256": "34b30b823e2af6df5efc22220636d80061761ebfbb0e8806902727ee39d4d7f6"
              }
            ]
          },
          "bead": {
            "path": "public/images/new-media-v2/motion-lab/coral-bead.png",
            "sha256": "85f9ee5dd018b63f3c0d0446c297a141182074d81f793b207e0651ba83d8587a",
            "size": [
              640,
              640
            ],
            "blendCache": ".cache/motion-lab-assets/bead.blend",
            "renderSeconds": 18.297,
            "radius": 0.49,
            "material": "Coral-red glazed ceramic",
            "geometry": "Same topology and framing as heart-to-bead morph endpoint"
          },
          "edge": {
            "path": "public/images/new-media-v2/motion-lab/cat-display-edge.png",
            "sha256": "64a4cc5ac29d45a0ad1f382393c1f6d43f994bd466ae582782867e67c334ff38",
            "size": [
              1152,
              1152
            ],
            "blendCache": ".cache/motion-lab-assets/edge.blend",
            "renderSeconds": 114.714,
            "yawDegrees": 35,
            "boardDimensions": [
              1.8,
              0.145,
              2.55
            ],
            "sourceSize": [
              1145,
              1374
            ],
            "imagePlaneSize": [
              1.55,
              1.8600000000000003
            ]
          },
          "heart": {
            "path": "public/images/new-media-v2/motion-lab/coral-heart.png",
            "sha256": "a0805b0a8c9873b5c90b3c45d8a248475d65f4a113a330bad661b5bba6150a37",
            "size": [
              1024,
              1024
            ],
            "blendCache": ".cache/motion-lab-assets/heart.blend",
            "renderSeconds": 36.57,
            "material": "Coral-red glazed ceramic",
            "maximumThickness": 0.5,
            "geometry": "Same closed UV topology and framing as heart-to-bead morph start"
          }
        },
        "generator": "scripts/generate-motion-lab-assets.py",
        "generatorSha256": "e42f9a6aacd856fb6b16acf5497029e25f75dba070f6de66d292c27f448c201c",
        "blenderVersion": "4.3.2",
        "blenderPythonVersion": "3.13.5",
        "renderEngine": "Cycles CPU",
        "threads": 2,
        "samples": 64,
        "seed": 271828,
        "denoise": false,
        "transparentFilm": true,
        "output": "RGBA PNG, 8-bit",
        "denoiseUnavailableReason": "System Blender build has no OpenImageDenoise support; verified by initial failed render.",
        "colorManagement": "AgX / Medium High Contrast / exposure +0.15",
        "lighting": "Large warm softbox 620W/4.2; cool front fill115W/3.5; weak cool edge95W/2.5",
        "catSource": {
          "path": "public/images/new-media-v2/kitten-study.png",
          "sha256": "c9323eafa7cec497714b16f57ffeeade8c0cf86ea817cd55236b350f6cb6ee70"
        },
        "notes": "Direct Blender output. No image editing, generated background, UI, text or paid API."
      }
    },
    "audioManifest": {
      "path": "production/new-media-v2/motion-lab/audio-manifest.json",
      "mediaType": "application/json",
      "byteLength": 7837,
      "sha256": "e00b08e3fb3efe5adfa744c6b24067067025fc24f18f8c272681c1b92d01984a",
      "text": "{\n  \"schema\": \"motion-lab-audio-v1\",\n  \"status\": \"generated-and-verified\",\n  \"durationSeconds\": 20.0,\n  \"sampleRate\": 48000,\n  \"channels\": 2,\n  \"addedVoiceover\": false,\n  \"sourcePurityOrVocalContentAssessed\": false,\n  \"musicBed\": {\n    \"sourceType\": \"user-supplied-bgm-file\",\n    \"sourceFile\": \"/workspace/attachments/fbe8109f-0ab9-4284-ac06-71a509607930/bgm.mp4\",\n    \"sourceFileSha256\": \"d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59\",\n    \"originalUserUploadSha256\": \"d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59\",\n    \"sourceAudioMetadata\": {\n      \"codec_name\": \"aac\",\n      \"sample_rate\": \"44100\",\n      \"channels\": 1,\n      \"duration\": \"133.073560\"\n    },\n    \"sourceChannels\": 1,\n    \"outputChannels\": 2,\n    \"referenceSceneSeconds\": [\n      28.0,\n      48.0\n    ],\n    \"referenceToMusicOffsetSeconds\": 0.048,\n    \"sourceExcerptSeconds\": [\n      28.048,\n      48.048\n    ],\n    \"gainDb\": -7.7,\n    \"fadeInSeconds\": 0.06,\n    \"fadeOutSeconds\": 0.06,\n    \"looping\": false,\n    \"tempoChanged\": false,\n    \"eqOrCompressionApplied\": false,\n    \"localDuckingApplied\": false,\n    \"measurementAfterFixedGainAndFades\": {\n      \"integratedLoudnessLUFS\": -16.5,\n      \"truePeakDbTP\": -6.3\n    }\n  },\n  \"originalSfx\": {\n    \"seed\": 2026102203,\n    \"downloadedSamplesUsed\": false,\n    \"eventCount\": 9,\n    \"events\": [\n      {\n        \"name\": \"ceramic-heart\",\n        \"sourceType\": \"original-deterministic-programmatic-material-synthesis\",\n        \"sourceFile\": \"public/audio/new-media-v2/motion-lab/sfx/ceramic-heart.wav\",\n        \"sourceFileSha256\": \"33936aaf9e6b08ce101ae8e6169f691830946b678f613104fbe92afecdcb1818\",\n        \"startSeconds\": 0.65,\n        \"endSeconds\": 0.91,\n        \"durationSeconds\": 0.26,\n        \"requestedPeakDbFS\": -24.0,\n        \"purpose\": \"One light ceramic contact as the heart lands\"\n      },\n      {\n        \"name\": \"paper-air-arc\",\n        \"sourceType\": \"original-deterministic-programmatic-material-synthesis\",\n        \"sourceFile\": \"public/audio/new-media-v2/motion-lab/sfx/paper-air-arc.wav\",\n        \"sourceFileSha256\": \"e56cfd50c5662a4d13db1f929636c25ceed51df3b9a38c088b5af8013f100f4d\",\n        \"startSeconds\": 3.15,\n        \"endSeconds\": 5.2,\n        \"durationSeconds\": 2.05,\n        \"requestedPeakDbFS\": -28.0,\n        \"purpose\": \"Soft paper/air arc while the cat display leaves\"\n      },\n      {\n        \"name\": \"bead-gather\",\n        \"sourceType\": \"original-deterministic-programmatic-material-synthesis\",\n        \"sourceFile\": \"public/audio/new-media-v2/motion-lab/sfx/bead-gather.wav\",\n        \"sourceFileSha256\": \"67c202fbb919962b3049a972bc997c4dd0dbcf70aed1e64fd127c9ddfd18c3fc\",\n        \"startSeconds\": 6.1,\n        \"endSeconds\": 8.1,\n        \"durationSeconds\": 2.0,\n        \"requestedPeakDbFS\": -28.0,\n        \"purpose\": \"Fine particles converge as the heart becomes a bead\"\n      },\n      {\n        \"name\": \"pause-contact\",\n        \"sourceType\": \"original-deterministic-programmatic-material-synthesis\",\n        \"sourceFile\": \"public/audio/new-media-v2/motion-lab/sfx/pause-contact.wav\",\n        \"sourceFileSha256\": \"9681a1037ebdf2ccee2310bedaba07a697e69657e2585f27753bfeaf1897b075\",\n        \"startSeconds\": 11.25,\n        \"endSeconds\": 11.43,\n        \"durationSeconds\": 0.18,\n        \"requestedPeakDbFS\": -27.0,\n        \"purpose\": \"A small pause trigger, not a per-character accent\"\n      },\n      {\n        \"name\": \"replay-brush\",\n        \"sourceType\": \"original-deterministic-programmatic-material-synthesis\",\n        \"sourceFile\": \"public/audio/new-media-v2/motion-lab/sfx/replay-brush.wav\",\n        \"sourceFileSha256\": \"88396d8171526e33ddcd261c23a672f952c12a983c40dfd7430944a77c966a6b\",\n        \"startSeconds\": 12.2,\n        \"endSeconds\": 12.47,\n        \"durationSeconds\": 0.27,\n        \"requestedPeakDbFS\": -30.0,\n        \"purpose\": \"A small replay brush\"\n      },\n      {\n        \"name\": \"like-contact\",\n        \"sourceType\": \"original-deterministic-programmatic-material-synthesis\",\n        \"sourceFile\": \"public/audio/new-media-v2/motion-lab/sfx/like-contact.wav\",\n        \"sourceFileSha256\": \"e1478b6b5ba2bbda234efd8501d385ad79674bf26f8e9e220c6c42815b48be8b\",\n        \"startSeconds\": 13.1,\n        \"endSeconds\": 13.33,\n        \"durationSeconds\": 0.23,\n        \"requestedPeakDbFS\": -27.0,\n        \"purpose\": \"A small like trigger related to the opening heart\"\n      },\n      {\n        \"name\": \"bead-travel\",\n        \"sourceType\": \"original-deterministic-programmatic-material-synthesis\",\n        \"sourceFile\": \"public/audio/new-media-v2/motion-lab/sfx/bead-travel.wav\",\n        \"sourceFileSha256\": \"639f2cb546f9cb3ed378cdbdfe5cafe93cfa4d4acecca9f9aa303b685e8641dd\",\n        \"startSeconds\": 14.2,\n        \"endSeconds\": 17.3,\n        \"durationSeconds\": 3.1,\n        \"requestedPeakDbFS\": -30.0,\n        \"purpose\": \"Sparse rolling grains as the bead enters the record band\"\n      },\n      {\n        \"name\": \"record-arrival\",\n        \"sourceType\": \"original-deterministic-programmatic-material-synthesis\",\n        \"sourceFile\": \"public/audio/new-media-v2/motion-lab/sfx/record-arrival.wav\",\n        \"sourceFileSha256\": \"4c950121f23c772e06d07e2687785bc36654880e3a38f0b4693f3294c55ef295\",\n        \"startSeconds\": 17.3,\n        \"endSeconds\": 17.6,\n        \"durationSeconds\": 0.3,\n        \"requestedPeakDbFS\": -25.0,\n        \"purpose\": \"Warm tactile arrival, without a success cue\"\n      },\n      {\n        \"name\": \"branch-air\",\n        \"sourceType\": \"original-deterministic-programmatic-material-synthesis\",\n        \"sourceFile\": \"public/audio/new-media-v2/motion-lab/sfx/branch-air.wav\",\n        \"sourceFileSha256\": \"97d93b1506e4c4542b838e84843c1a4452c93eec4cf768265c6706ad949a5daa\",\n        \"startSeconds\": 17.8,\n        \"endSeconds\": 19.1,\n        \"durationSeconds\": 1.3,\n        \"requestedPeakDbFS\": -32.0,\n        \"purpose\": \"A small amount of air in the branching outflow\"\n      }\n    ],\n    \"sfxMasterGainLinear\": 1.0,\n    \"sfxMasterGainDb\": 0.0,\n    \"peakManagement\": \"Only added SFX may be attenuated statically; BGM fixed gain is preserved\",\n    \"quietWindows\": [\n      {\n        \"fromSeconds\": 8.3,\n        \"toSeconds\": 11.0,\n        \"reason\": \"Question segment: strictly no added SFX\",\n        \"actualPcmAllZero\": true\n      },\n      {\n        \"fromSeconds\": 19.1,\n        \"toSeconds\": 20.0,\n        \"reason\": \"Stable final hold: strictly no added SFX\",\n        \"actualPcmAllZero\": true\n      }\n    ]\n  },\n  \"generator\": {\n    \"file\": \"scripts/generate-motion-lab-audio.py\",\n    \"sha256\": \"a0f68b1b8879cf64e3369a8cc3f82f1e0bf0bd007a3ae9994af6e108b36686ac\",\n    \"measurementHelper\": \"scripts/generate-new-media-v2-review-sfx.py\",\n    \"measurementHelperSha256\": \"fcaa8d56f05a8c2e8f3f4e53c49525e44b3cb529c7c66f1a42524e56b56b3564\",\n    \"dependencies\": \"Python standard library and system FFmpeg/ffprobe; no paid services\"\n  },\n  \"outputs\": {\n    \"public/audio/new-media-v2/motion-lab/mix.wav\": {\n      \"codec_name\": \"pcm_s16le\",\n      \"sample_rate\": \"48000\",\n      \"channels\": 2,\n      \"duration\": \"20.000000\",\n      \"frames\": 960000,\n      \"samplePeakDbFS\": -6.3139,\n      \"integratedLoudnessLUFS\": -16.5,\n      \"truePeakDbTP\": -6.3,\n      \"firstAndLastStereoFrameZero\": true,\n      \"fullDecode\": \"passed\",\n      \"sha256\": \"ca54a4a13b87cbe1b66f7920c4f1b3c74e2a3a3b4a5268228682c73d8f13e47e\"\n    },\n    \"public/audio/new-media-v2/motion-lab/sfx-only.wav\": {\n      \"codec_name\": \"pcm_s16le\",\n      \"sample_rate\": \"48000\",\n      \"channels\": 2,\n      \"duration\": \"20.000000\",\n      \"frames\": 960000,\n      \"samplePeakDbFS\": -24.0022,\n      \"integratedLoudnessLUFS\": -40.4,\n      \"truePeakDbTP\": -24.0,\n      \"firstAndLastStereoFrameZero\": true,\n      \"fullDecode\": \"passed\",\n      \"sha256\": \"cedcc4b9a4adb17469e316f931f5882e86cc26788ac63ad44e21a9afa5983ea5\"\n    }\n  },\n  \"standaloneMusicPublished\": false,\n  \"generatedAudioDirectoryGitIgnored\": true\n}\n",
      "bytesBase64": "ewogICJzY2hlbWEiOiAibW90aW9uLWxhYi1hdWRpby12MSIsCiAgInN0YXR1cyI6ICJnZW5lcmF0ZWQtYW5kLXZlcmlmaWVkIiwKICAiZHVyYXRpb25TZWNvbmRzIjogMjAuMCwKICAic2FtcGxlUmF0ZSI6IDQ4MDAwLAogICJjaGFubmVscyI6IDIsCiAgImFkZGVkVm9pY2VvdmVyIjogZmFsc2UsCiAgInNvdXJjZVB1cml0eU9yVm9jYWxDb250ZW50QXNzZXNzZWQiOiBmYWxzZSwKICAibXVzaWNCZWQiOiB7CiAgICAic291cmNlVHlwZSI6ICJ1c2VyLXN1cHBsaWVkLWJnbS1maWxlIiwKICAgICJzb3VyY2VGaWxlIjogIi93b3Jrc3BhY2UvYXR0YWNobWVudHMvZmJlODEwOWYtMGFiOS00Mjg0LWFjMDYtNzFhNTA5NjA3OTMwL2JnbS5tcDQiLAogICAgInNvdXJjZUZpbGVTaGEyNTYiOiAiZDI3NWJiN2EyNmQxNzU1ZTZiMTkzZDk3MDU2MzQzNDk4MDUxZTM3ZGM2ODVjMjMzZDNjN2VhMjQxOTEyZGM1OSIsCiAgICAib3JpZ2luYWxVc2VyVXBsb2FkU2hhMjU2IjogImQyNzViYjdhMjZkMTc1NWU2YjE5M2Q5NzA1NjM0MzQ5ODA1MWUzN2RjNjg1YzIzM2QzYzdlYTI0MTkxMmRjNTkiLAogICAgInNvdXJjZUF1ZGlvTWV0YWRhdGEiOiB7CiAgICAgICJjb2RlY19uYW1lIjogImFhYyIsCiAgICAgICJzYW1wbGVfcmF0ZSI6ICI0NDEwMCIsCiAgICAgICJjaGFubmVscyI6IDEsCiAgICAgICJkdXJhdGlvbiI6ICIxMzMuMDczNTYwIgogICAgfSwKICAgICJzb3VyY2VDaGFubmVscyI6IDEsCiAgICAib3V0cHV0Q2hhbm5lbHMiOiAyLAogICAgInJlZmVyZW5jZVNjZW5lU2Vjb25kcyI6IFsKICAgICAgMjguMCwKICAgICAgNDguMAogICAgXSwKICAgICJyZWZlcmVuY2VUb011c2ljT2Zmc2V0U2Vjb25kcyI6IDAuMDQ4LAogICAgInNvdXJjZUV4Y2VycHRTZWNvbmRzIjogWwogICAgICAyOC4wNDgsCiAgICAgIDQ4LjA0OAogICAgXSwKICAgICJnYWluRGIiOiAtNy43LAogICAgImZhZGVJblNlY29uZHMiOiAwLjA2LAogICAgImZhZGVPdXRTZWNvbmRzIjogMC4wNiwKICAgICJsb29waW5nIjogZmFsc2UsCiAgICAidGVtcG9DaGFuZ2VkIjogZmFsc2UsCiAgICAiZXFPckNvbXByZXNzaW9uQXBwbGllZCI6IGZhbHNlLAogICAgImxvY2FsRHVja2luZ0FwcGxpZWQiOiBmYWxzZSwKICAgICJtZWFzdXJlbWVudEFmdGVyRml4ZWRHYWluQW5kRmFkZXMiOiB7CiAgICAgICJpbnRlZ3JhdGVkTG91ZG5lc3NMVUZTIjogLTE2LjUsCiAgICAgICJ0cnVlUGVha0RiVFAiOiAtNi4zCiAgICB9CiAgfSwKICAib3JpZ2luYWxTZngiOiB7CiAgICAic2VlZCI6IDIwMjYxMDIyMDMsCiAgICAiZG93bmxvYWRlZFNhbXBsZXNVc2VkIjogZmFsc2UsCiAgICAiZXZlbnRDb3VudCI6IDksCiAgICAiZXZlbnRzIjogWwogICAgICB7CiAgICAgICAgIm5hbWUiOiAiY2VyYW1pYy1oZWFydCIsCiAgICAgICAgInNvdXJjZVR5cGUiOiAib3JpZ2luYWwtZGV0ZXJtaW5pc3RpYy1wcm9ncmFtbWF0aWMtbWF0ZXJpYWwtc3ludGhlc2lzIiwKICAgICAgICAic291cmNlRmlsZSI6ICJwdWJsaWMvYXVkaW8vbmV3LW1lZGlhLXYyL21vdGlvbi1sYWIvc2Z4L2NlcmFtaWMtaGVhcnQud2F2IiwKICAgICAgICAic291cmNlRmlsZVNoYTI1NiI6ICIzMzkzNmFhZjllNmIwOGNlMTAxYWU4ZTYxNjlmNjkxODMwOTQ2YjY3OGY2MTMxMDRmYmU5MmFmZWNkY2IxODE4IiwKICAgICAgICAic3RhcnRTZWNvbmRzIjogMC42NSwKICAgICAgICAiZW5kU2Vjb25kcyI6IDAuOTEsCiAgICAgICAgImR1cmF0aW9uU2Vjb25kcyI6IDAuMjYsCiAgICAgICAgInJlcXVlc3RlZFBlYWtEYkZTIjogLTI0LjAsCiAgICAgICAgInB1cnBvc2UiOiAiT25lIGxpZ2h0IGNlcmFtaWMgY29udGFjdCBhcyB0aGUgaGVhcnQgbGFuZHMiCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAibmFtZSI6ICJwYXBlci1haXItYXJjIiwKICAgICAgICAic291cmNlVHlwZSI6ICJvcmlnaW5hbC1kZXRlcm1pbmlzdGljLXByb2dyYW1tYXRpYy1tYXRlcmlhbC1zeW50aGVzaXMiLAogICAgICAgICJzb3VyY2VGaWxlIjogInB1YmxpYy9hdWRpby9uZXctbWVkaWEtdjIvbW90aW9uLWxhYi9zZngvcGFwZXItYWlyLWFyYy53YXYiLAogICAgICAgICJzb3VyY2VGaWxlU2hhMjU2IjogImU1NmNmZDUwYzU2NjJhNGQxM2RiMWY5Mjk2MzZjMjVjZWVkNTFkZjNiOWEzOGMwODhiNWFmODAxM2YxMDBmNGQiLAogICAgICAgICJzdGFydFNlY29uZHMiOiAzLjE1LAogICAgICAgICJlbmRTZWNvbmRzIjogNS4yLAogICAgICAgICJkdXJhdGlvblNlY29uZHMiOiAyLjA1LAogICAgICAgICJyZXF1ZXN0ZWRQZWFrRGJGUyI6IC0yOC4wLAogICAgICAgICJwdXJwb3NlIjogIlNvZnQgcGFwZXIvYWlyIGFyYyB3aGlsZSB0aGUgY2F0IGRpc3BsYXkgbGVhdmVzIgogICAgICB9LAogICAgICB7CiAgICAgICAgIm5hbWUiOiAiYmVhZC1nYXRoZXIiLAogICAgICAgICJzb3VyY2VUeXBlIjogIm9yaWdpbmFsLWRldGVybWluaXN0aWMtcHJvZ3JhbW1hdGljLW1hdGVyaWFsLXN5bnRoZXNpcyIsCiAgICAgICAgInNvdXJjZUZpbGUiOiAicHVibGljL2F1ZGlvL25ldy1tZWRpYS12Mi9tb3Rpb24tbGFiL3NmeC9iZWFkLWdhdGhlci53YXYiLAogICAgICAgICJzb3VyY2VGaWxlU2hhMjU2IjogIjY3YzIwMmZiYjkxOTk2MmIzMDQ5YTk3MmJjOTk3YzRkZDBkYmNmNzBhZWQxZTY0ZmQxMjdjOWRkZmQxOGMzZmMiLAogICAgICAgICJzdGFydFNlY29uZHMiOiA2LjEsCiAgICAgICAgImVuZFNlY29uZHMiOiA4LjEsCiAgICAgICAgImR1cmF0aW9uU2Vjb25kcyI6IDIuMCwKICAgICAgICAicmVxdWVzdGVkUGVha0RiRlMiOiAtMjguMCwKICAgICAgICAicHVycG9zZSI6ICJGaW5lIHBhcnRpY2xlcyBjb252ZXJnZSBhcyB0aGUgaGVhcnQgYmVjb21lcyBhIGJlYWQiCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAibmFtZSI6ICJwYXVzZS1jb250YWN0IiwKICAgICAgICAic291cmNlVHlwZSI6ICJvcmlnaW5hbC1kZXRlcm1pbmlzdGljLXByb2dyYW1tYXRpYy1tYXRlcmlhbC1zeW50aGVzaXMiLAogICAgICAgICJzb3VyY2VGaWxlIjogInB1YmxpYy9hdWRpby9uZXctbWVkaWEtdjIvbW90aW9uLWxhYi9zZngvcGF1c2UtY29udGFjdC53YXYiLAogICAgICAgICJzb3VyY2VGaWxlU2hhMjU2IjogIjk2ODFhMTAzN2ViZGYyY2NlZTIzMTBiZWRhYmEwN2E2OTdlNjk2NTdlMjU4NWYyNzc1M2JmZWFmMTg5N2IwNzUiLAogICAgICAgICJzdGFydFNlY29uZHMiOiAxMS4yNSwKICAgICAgICAiZW5kU2Vjb25kcyI6IDExLjQzLAogICAgICAgICJkdXJhdGlvblNlY29uZHMiOiAwLjE4LAogICAgICAgICJyZXF1ZXN0ZWRQZWFrRGJGUyI6IC0yNy4wLAogICAgICAgICJwdXJwb3NlIjogIkEgc21hbGwgcGF1c2UgdHJpZ2dlciwgbm90IGEgcGVyLWNoYXJhY3RlciBhY2NlbnQiCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAibmFtZSI6ICJyZXBsYXktYnJ1c2giLAogICAgICAgICJzb3VyY2VUeXBlIjogIm9yaWdpbmFsLWRldGVybWluaXN0aWMtcHJvZ3JhbW1hdGljLW1hdGVyaWFsLXN5bnRoZXNpcyIsCiAgICAgICAgInNvdXJjZUZpbGUiOiAicHVibGljL2F1ZGlvL25ldy1tZWRpYS12Mi9tb3Rpb24tbGFiL3NmeC9yZXBsYXktYnJ1c2gud2F2IiwKICAgICAgICAic291cmNlRmlsZVNoYTI1NiI6ICI4ODM5NmQ4MTcxNTI2ZTMzZGRjZDI2MWMyM2E2NzJmOTUyYzEyYTk4M2M0MGRmZDc0MzA5NDRhNzdjOTY2YTZiIiwKICAgICAgICAic3RhcnRTZWNvbmRzIjogMTIuMiwKICAgICAgICAiZW5kU2Vjb25kcyI6IDEyLjQ3LAogICAgICAgICJkdXJhdGlvblNlY29uZHMiOiAwLjI3LAogICAgICAgICJyZXF1ZXN0ZWRQZWFrRGJGUyI6IC0zMC4wLAogICAgICAgICJwdXJwb3NlIjogIkEgc21hbGwgcmVwbGF5IGJydXNoIgogICAgICB9LAogICAgICB7CiAgICAgICAgIm5hbWUiOiAibGlrZS1jb250YWN0IiwKICAgICAgICAic291cmNlVHlwZSI6ICJvcmlnaW5hbC1kZXRlcm1pbmlzdGljLXByb2dyYW1tYXRpYy1tYXRlcmlhbC1zeW50aGVzaXMiLAogICAgICAgICJzb3VyY2VGaWxlIjogInB1YmxpYy9hdWRpby9uZXctbWVkaWEtdjIvbW90aW9uLWxhYi9zZngvbGlrZS1jb250YWN0LndhdiIsCiAgICAgICAgInNvdXJjZUZpbGVTaGEyNTYiOiAiZTE0NzhiNmI1YmEyYmJkYTIzNGVmZDg1MDFkMzg1YWQ3OTY3NGJmMjZmOGU5ZTIyMGM2YzQyODE1YjQ4YmU4YiIsCiAgICAgICAgInN0YXJ0U2Vjb25kcyI6IDEzLjEsCiAgICAgICAgImVuZFNlY29uZHMiOiAxMy4zMywKICAgICAgICAiZHVyYXRpb25TZWNvbmRzIjogMC4yMywKICAgICAgICAicmVxdWVzdGVkUGVha0RiRlMiOiAtMjcuMCwKICAgICAgICAicHVycG9zZSI6ICJBIHNtYWxsIGxpa2UgdHJpZ2dlciByZWxhdGVkIHRvIHRoZSBvcGVuaW5nIGhlYXJ0IgogICAgICB9LAogICAgICB7CiAgICAgICAgIm5hbWUiOiAiYmVhZC10cmF2ZWwiLAogICAgICAgICJzb3VyY2VUeXBlIjogIm9yaWdpbmFsLWRldGVybWluaXN0aWMtcHJvZ3JhbW1hdGljLW1hdGVyaWFsLXN5bnRoZXNpcyIsCiAgICAgICAgInNvdXJjZUZpbGUiOiAicHVibGljL2F1ZGlvL25ldy1tZWRpYS12Mi9tb3Rpb24tbGFiL3NmeC9iZWFkLXRyYXZlbC53YXYiLAogICAgICAgICJzb3VyY2VGaWxlU2hhMjU2IjogIjYzOWYyY2I1NDZmOWNiM2VkMzc4Y2RiZGZlNWNhZmU5M2NmYTRkNGFjZWNjYTlmOWFhMzAzYjY4NWU4NjQxZGQiLAogICAgICAgICJzdGFydFNlY29uZHMiOiAxNC4yLAogICAgICAgICJlbmRTZWNvbmRzIjogMTcuMywKICAgICAgICAiZHVyYXRpb25TZWNvbmRzIjogMy4xLAogICAgICAgICJyZXF1ZXN0ZWRQZWFrRGJGUyI6IC0zMC4wLAogICAgICAgICJwdXJwb3NlIjogIlNwYXJzZSByb2xsaW5nIGdyYWlucyBhcyB0aGUgYmVhZCBlbnRlcnMgdGhlIHJlY29yZCBiYW5kIgogICAgICB9LAogICAgICB7CiAgICAgICAgIm5hbWUiOiAicmVjb3JkLWFycml2YWwiLAogICAgICAgICJzb3VyY2VUeXBlIjogIm9yaWdpbmFsLWRldGVybWluaXN0aWMtcHJvZ3JhbW1hdGljLW1hdGVyaWFsLXN5bnRoZXNpcyIsCiAgICAgICAgInNvdXJjZUZpbGUiOiAicHVibGljL2F1ZGlvL25ldy1tZWRpYS12Mi9tb3Rpb24tbGFiL3NmeC9yZWNvcmQtYXJyaXZhbC53YXYiLAogICAgICAgICJzb3VyY2VGaWxlU2hhMjU2IjogIjRjOTUwMTIxZjIzYzc3MmUwNmQwN2UyNjg3Nzg1YmMzNjY1NDg4MGUzYTM4ZjBiNDY5M2YzMjk0YzU1ZWYyOTUiLAogICAgICAgICJzdGFydFNlY29uZHMiOiAxNy4zLAogICAgICAgICJlbmRTZWNvbmRzIjogMTcuNiwKICAgICAgICAiZHVyYXRpb25TZWNvbmRzIjogMC4zLAogICAgICAgICJyZXF1ZXN0ZWRQZWFrRGJGUyI6IC0yNS4wLAogICAgICAgICJwdXJwb3NlIjogIldhcm0gdGFjdGlsZSBhcnJpdmFsLCB3aXRob3V0IGEgc3VjY2VzcyBjdWUiCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAibmFtZSI6ICJicmFuY2gtYWlyIiwKICAgICAgICAic291cmNlVHlwZSI6ICJvcmlnaW5hbC1kZXRlcm1pbmlzdGljLXByb2dyYW1tYXRpYy1tYXRlcmlhbC1zeW50aGVzaXMiLAogICAgICAgICJzb3VyY2VGaWxlIjogInB1YmxpYy9hdWRpby9uZXctbWVkaWEtdjIvbW90aW9uLWxhYi9zZngvYnJhbmNoLWFpci53YXYiLAogICAgICAgICJzb3VyY2VGaWxlU2hhMjU2IjogIjk3ZDkzYjE1MDZlNGM0NTQyYjgzOGU4NDg0M2MxYTQ0NTJjOTNlZWM0Y2Y3NjgyNjVjNjcwNmFkOTQ5YTVkYWEiLAogICAgICAgICJzdGFydFNlY29uZHMiOiAxNy44LAogICAgICAgICJlbmRTZWNvbmRzIjogMTkuMSwKICAgICAgICAiZHVyYXRpb25TZWNvbmRzIjogMS4zLAogICAgICAgICJyZXF1ZXN0ZWRQZWFrRGJGUyI6IC0zMi4wLAogICAgICAgICJwdXJwb3NlIjogIkEgc21hbGwgYW1vdW50IG9mIGFpciBpbiB0aGUgYnJhbmNoaW5nIG91dGZsb3ciCiAgICAgIH0KICAgIF0sCiAgICAic2Z4TWFzdGVyR2FpbkxpbmVhciI6IDEuMCwKICAgICJzZnhNYXN0ZXJHYWluRGIiOiAwLjAsCiAgICAicGVha01hbmFnZW1lbnQiOiAiT25seSBhZGRlZCBTRlggbWF5IGJlIGF0dGVudWF0ZWQgc3RhdGljYWxseTsgQkdNIGZpeGVkIGdhaW4gaXMgcHJlc2VydmVkIiwKICAgICJxdWlldFdpbmRvd3MiOiBbCiAgICAgIHsKICAgICAgICAiZnJvbVNlY29uZHMiOiA4LjMsCiAgICAgICAgInRvU2Vjb25kcyI6IDExLjAsCiAgICAgICAgInJlYXNvbiI6ICJRdWVzdGlvbiBzZWdtZW50OiBzdHJpY3RseSBubyBhZGRlZCBTRlgiLAogICAgICAgICJhY3R1YWxQY21BbGxaZXJvIjogdHJ1ZQogICAgICB9LAogICAgICB7CiAgICAgICAgImZyb21TZWNvbmRzIjogMTkuMSwKICAgICAgICAidG9TZWNvbmRzIjogMjAuMCwKICAgICAgICAicmVhc29uIjogIlN0YWJsZSBmaW5hbCBob2xkOiBzdHJpY3RseSBubyBhZGRlZCBTRlgiLAogICAgICAgICJhY3R1YWxQY21BbGxaZXJvIjogdHJ1ZQogICAgICB9CiAgICBdCiAgfSwKICAiZ2VuZXJhdG9yIjogewogICAgImZpbGUiOiAic2NyaXB0cy9nZW5lcmF0ZS1tb3Rpb24tbGFiLWF1ZGlvLnB5IiwKICAgICJzaGEyNTYiOiAiYTBmNjhiMWI4ODc5Y2Y2NGUzMzY5YThjYzNmODJmMWUwYmYwYmQwMDdhM2FlOTk5NGFmNmUxMDhiMzY2ODZhYyIsCiAgICAibWVhc3VyZW1lbnRIZWxwZXIiOiAic2NyaXB0cy9nZW5lcmF0ZS1uZXctbWVkaWEtdjItcmV2aWV3LXNmeC5weSIsCiAgICAibWVhc3VyZW1lbnRIZWxwZXJTaGEyNTYiOiAiZmNhYThkNTZmMDVhOGMyZThmM2Y0ZTUzYzQ5NTI1ZTQ0YjNjYjUyOWM3YzY2ZjFhNDI1MjRlNTZiNTZiMzU2NCIsCiAgICAiZGVwZW5kZW5jaWVzIjogIlB5dGhvbiBzdGFuZGFyZCBsaWJyYXJ5IGFuZCBzeXN0ZW0gRkZtcGVnL2ZmcHJvYmU7IG5vIHBhaWQgc2VydmljZXMiCiAgfSwKICAib3V0cHV0cyI6IHsKICAgICJwdWJsaWMvYXVkaW8vbmV3LW1lZGlhLXYyL21vdGlvbi1sYWIvbWl4LndhdiI6IHsKICAgICAgImNvZGVjX25hbWUiOiAicGNtX3MxNmxlIiwKICAgICAgInNhbXBsZV9yYXRlIjogIjQ4MDAwIiwKICAgICAgImNoYW5uZWxzIjogMiwKICAgICAgImR1cmF0aW9uIjogIjIwLjAwMDAwMCIsCiAgICAgICJmcmFtZXMiOiA5NjAwMDAsCiAgICAgICJzYW1wbGVQZWFrRGJGUyI6IC02LjMxMzksCiAgICAgICJpbnRlZ3JhdGVkTG91ZG5lc3NMVUZTIjogLTE2LjUsCiAgICAgICJ0cnVlUGVha0RiVFAiOiAtNi4zLAogICAgICAiZmlyc3RBbmRMYXN0U3RlcmVvRnJhbWVaZXJvIjogdHJ1ZSwKICAgICAgImZ1bGxEZWNvZGUiOiAicGFzc2VkIiwKICAgICAgInNoYTI1NiI6ICJjYTU0YTRhMTNiODdjYmUxYjY2Zjc5MjBjNGYxYjNjNzRlMmEzYTNiNGE1MjY4MjI4NjgyYzczZDhmMTNlNDdlIgogICAgfSwKICAgICJwdWJsaWMvYXVkaW8vbmV3LW1lZGlhLXYyL21vdGlvbi1sYWIvc2Z4LW9ubHkud2F2IjogewogICAgICAiY29kZWNfbmFtZSI6ICJwY21fczE2bGUiLAogICAgICAic2FtcGxlX3JhdGUiOiAiNDgwMDAiLAogICAgICAiY2hhbm5lbHMiOiAyLAogICAgICAiZHVyYXRpb24iOiAiMjAuMDAwMDAwIiwKICAgICAgImZyYW1lcyI6IDk2MDAwMCwKICAgICAgInNhbXBsZVBlYWtEYkZTIjogLTI0LjAwMjIsCiAgICAgICJpbnRlZ3JhdGVkTG91ZG5lc3NMVUZTIjogLTQwLjQsCiAgICAgICJ0cnVlUGVha0RiVFAiOiAtMjQuMCwKICAgICAgImZpcnN0QW5kTGFzdFN0ZXJlb0ZyYW1lWmVybyI6IHRydWUsCiAgICAgICJmdWxsRGVjb2RlIjogInBhc3NlZCIsCiAgICAgICJzaGEyNTYiOiAiY2VkY2M0YjlhNGFkYjE3NDY5ZTMxNmY5MzFmNTg4MmU4NmNjMjY3ODhhYzYzYWQ0NGUyMWE5YWZhNTk4M2VhNSIKICAgIH0KICB9LAogICJzdGFuZGFsb25lTXVzaWNQdWJsaXNoZWQiOiBmYWxzZSwKICAiZ2VuZXJhdGVkQXVkaW9EaXJlY3RvcnlHaXRJZ25vcmVkIjogdHJ1ZQp9Cg==",
      "parsed": {
        "schema": "motion-lab-audio-v1",
        "status": "generated-and-verified",
        "durationSeconds": 20,
        "sampleRate": 48000,
        "channels": 2,
        "addedVoiceover": false,
        "sourcePurityOrVocalContentAssessed": false,
        "musicBed": {
          "sourceType": "user-supplied-bgm-file",
          "sourceFile": "/workspace/attachments/fbe8109f-0ab9-4284-ac06-71a509607930/bgm.mp4",
          "sourceFileSha256": "d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59",
          "originalUserUploadSha256": "d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59",
          "sourceAudioMetadata": {
            "codec_name": "aac",
            "sample_rate": "44100",
            "channels": 1,
            "duration": "133.073560"
          },
          "sourceChannels": 1,
          "outputChannels": 2,
          "referenceSceneSeconds": [
            28,
            48
          ],
          "referenceToMusicOffsetSeconds": 0.048,
          "sourceExcerptSeconds": [
            28.048,
            48.048
          ],
          "gainDb": -7.7,
          "fadeInSeconds": 0.06,
          "fadeOutSeconds": 0.06,
          "looping": false,
          "tempoChanged": false,
          "eqOrCompressionApplied": false,
          "localDuckingApplied": false,
          "measurementAfterFixedGainAndFades": {
            "integratedLoudnessLUFS": -16.5,
            "truePeakDbTP": -6.3
          }
        },
        "originalSfx": {
          "seed": 2026102203,
          "downloadedSamplesUsed": false,
          "eventCount": 9,
          "events": [
            {
              "name": "ceramic-heart",
              "sourceType": "original-deterministic-programmatic-material-synthesis",
              "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/ceramic-heart.wav",
              "sourceFileSha256": "33936aaf9e6b08ce101ae8e6169f691830946b678f613104fbe92afecdcb1818",
              "startSeconds": 0.65,
              "endSeconds": 0.91,
              "durationSeconds": 0.26,
              "requestedPeakDbFS": -24,
              "purpose": "One light ceramic contact as the heart lands"
            },
            {
              "name": "paper-air-arc",
              "sourceType": "original-deterministic-programmatic-material-synthesis",
              "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/paper-air-arc.wav",
              "sourceFileSha256": "e56cfd50c5662a4d13db1f929636c25ceed51df3b9a38c088b5af8013f100f4d",
              "startSeconds": 3.15,
              "endSeconds": 5.2,
              "durationSeconds": 2.05,
              "requestedPeakDbFS": -28,
              "purpose": "Soft paper/air arc while the cat display leaves"
            },
            {
              "name": "bead-gather",
              "sourceType": "original-deterministic-programmatic-material-synthesis",
              "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/bead-gather.wav",
              "sourceFileSha256": "67c202fbb919962b3049a972bc997c4dd0dbcf70aed1e64fd127c9ddfd18c3fc",
              "startSeconds": 6.1,
              "endSeconds": 8.1,
              "durationSeconds": 2,
              "requestedPeakDbFS": -28,
              "purpose": "Fine particles converge as the heart becomes a bead"
            },
            {
              "name": "pause-contact",
              "sourceType": "original-deterministic-programmatic-material-synthesis",
              "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/pause-contact.wav",
              "sourceFileSha256": "9681a1037ebdf2ccee2310bedaba07a697e69657e2585f27753bfeaf1897b075",
              "startSeconds": 11.25,
              "endSeconds": 11.43,
              "durationSeconds": 0.18,
              "requestedPeakDbFS": -27,
              "purpose": "A small pause trigger, not a per-character accent"
            },
            {
              "name": "replay-brush",
              "sourceType": "original-deterministic-programmatic-material-synthesis",
              "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/replay-brush.wav",
              "sourceFileSha256": "88396d8171526e33ddcd261c23a672f952c12a983c40dfd7430944a77c966a6b",
              "startSeconds": 12.2,
              "endSeconds": 12.47,
              "durationSeconds": 0.27,
              "requestedPeakDbFS": -30,
              "purpose": "A small replay brush"
            },
            {
              "name": "like-contact",
              "sourceType": "original-deterministic-programmatic-material-synthesis",
              "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/like-contact.wav",
              "sourceFileSha256": "e1478b6b5ba2bbda234efd8501d385ad79674bf26f8e9e220c6c42815b48be8b",
              "startSeconds": 13.1,
              "endSeconds": 13.33,
              "durationSeconds": 0.23,
              "requestedPeakDbFS": -27,
              "purpose": "A small like trigger related to the opening heart"
            },
            {
              "name": "bead-travel",
              "sourceType": "original-deterministic-programmatic-material-synthesis",
              "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/bead-travel.wav",
              "sourceFileSha256": "639f2cb546f9cb3ed378cdbdfe5cafe93cfa4d4acecca9f9aa303b685e8641dd",
              "startSeconds": 14.2,
              "endSeconds": 17.3,
              "durationSeconds": 3.1,
              "requestedPeakDbFS": -30,
              "purpose": "Sparse rolling grains as the bead enters the record band"
            },
            {
              "name": "record-arrival",
              "sourceType": "original-deterministic-programmatic-material-synthesis",
              "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/record-arrival.wav",
              "sourceFileSha256": "4c950121f23c772e06d07e2687785bc36654880e3a38f0b4693f3294c55ef295",
              "startSeconds": 17.3,
              "endSeconds": 17.6,
              "durationSeconds": 0.3,
              "requestedPeakDbFS": -25,
              "purpose": "Warm tactile arrival, without a success cue"
            },
            {
              "name": "branch-air",
              "sourceType": "original-deterministic-programmatic-material-synthesis",
              "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/branch-air.wav",
              "sourceFileSha256": "97d93b1506e4c4542b838e84843c1a4452c93eec4cf768265c6706ad949a5daa",
              "startSeconds": 17.8,
              "endSeconds": 19.1,
              "durationSeconds": 1.3,
              "requestedPeakDbFS": -32,
              "purpose": "A small amount of air in the branching outflow"
            }
          ],
          "sfxMasterGainLinear": 1,
          "sfxMasterGainDb": 0,
          "peakManagement": "Only added SFX may be attenuated statically; BGM fixed gain is preserved",
          "quietWindows": [
            {
              "fromSeconds": 8.3,
              "toSeconds": 11,
              "reason": "Question segment: strictly no added SFX",
              "actualPcmAllZero": true
            },
            {
              "fromSeconds": 19.1,
              "toSeconds": 20,
              "reason": "Stable final hold: strictly no added SFX",
              "actualPcmAllZero": true
            }
          ]
        },
        "generator": {
          "file": "scripts/generate-motion-lab-audio.py",
          "sha256": "a0f68b1b8879cf64e3369a8cc3f82f1e0bf0bd007a3ae9994af6e108b36686ac",
          "measurementHelper": "scripts/generate-new-media-v2-review-sfx.py",
          "measurementHelperSha256": "fcaa8d56f05a8c2e8f3f4e53c49525e44b3cb529c7c66f1a42524e56b56b3564",
          "dependencies": "Python standard library and system FFmpeg/ffprobe; no paid services"
        },
        "outputs": {
          "public/audio/new-media-v2/motion-lab/mix.wav": {
            "codec_name": "pcm_s16le",
            "sample_rate": "48000",
            "channels": 2,
            "duration": "20.000000",
            "frames": 960000,
            "samplePeakDbFS": -6.3139,
            "integratedLoudnessLUFS": -16.5,
            "truePeakDbTP": -6.3,
            "firstAndLastStereoFrameZero": true,
            "fullDecode": "passed",
            "sha256": "ca54a4a13b87cbe1b66f7920c4f1b3c74e2a3a3b4a5268228682c73d8f13e47e"
          },
          "public/audio/new-media-v2/motion-lab/sfx-only.wav": {
            "codec_name": "pcm_s16le",
            "sample_rate": "48000",
            "channels": 2,
            "duration": "20.000000",
            "frames": 960000,
            "samplePeakDbFS": -24.0022,
            "integratedLoudnessLUFS": -40.4,
            "truePeakDbTP": -24,
            "firstAndLastStereoFrameZero": true,
            "fullDecode": "passed",
            "sha256": "cedcc4b9a4adb17469e316f931f5882e86cc26788ac63ad44e21a9afa5983ea5"
          }
        },
        "standaloneMusicPublished": false,
        "generatedAudioDirectoryGitIgnored": true
      }
    },
    "refinements": {
      "path": "production/new-media-v2/motion-lab/refinements.json",
      "mediaType": "application/json",
      "byteLength": 6768,
      "sha256": "bc6d27429be42bc117d696866c269ea1a4883816e17445ac20dfb8e058f4bd43",
      "text": "{\n  \"status\": \"authored-refinement-parameters-after-actual-snapshot-review\",\n  \"userApprovalOfEachNumericValue\": false,\n  \"originalStoryboardMutated\": false,\n  \"reviewEvidence\": [\n    \".cache/motion-lab/review/review-beats.jpg\",\n    \".cache/motion-lab/exit-review/contact-sheet-1.jpg\",\n    \".cache/motion-lab/exit-review/contact-sheet-2.jpg\"\n  ],\n  \"refinements\": [\n    {\n      \"id\": \"single-board-projection\",\n      \"reason\": \"3.433–3.6s actual crossfade shows double cats and frame edges\",\n      \"method\": \"Use only rendered hero board; one perspective-projected image. Do not present as full 3D turntable. Edge still retained as unused authored asset.\",\n      \"heroOpacity\": 1,\n      \"edgeOpacity\": 0,\n      \"perspectivePx\": 1100,\n      \"rotationYDegreesAtExit\": -24,\n      \"rotationZDegrees\": \"-3*peel-16*peel^2.15\",\n      \"localRangeSeconds\": [\n        3.15,\n        4.4\n      ],\n      \"exitDistancePx\": [\n        -420,\n        -1145\n      ]\n    },\n    {\n      \"id\": \"retained-stay-orbit\",\n      \"reason\": \"10s actual frame lacks inherited spatial reference\",\n      \"centerPx\": [\n        960,\n        430\n      ],\n      \"radiusPx\": 215,\n      \"startDegrees\": -65,\n      \"sweepDegrees\": 287,\n      \"strokePx\": 8,\n      \"strokeColor\": \"#809887\",\n      \"maxOpacity\": 0.38,\n      \"revealSeconds\": [\n        6.1,\n        8.1\n      ],\n      \"retireSeconds\": [\n        11.5,\n        13.8\n      ],\n      \"questionCameraScaleFromTo\": [\n        1,\n        1.08\n      ],\n      \"questionCameraMoveSeconds\": [\n        8.3,\n        9.3\n      ],\n      \"questionCameraReturnSeconds\": [\n        10.7,\n        11.6\n      ]\n    },\n    {\n      \"id\": \"existing-aggregate-depth\",\n      \"reason\": \"18s actual frame has two lone paths and too few population signals\",\n      \"geometry\": \"Retained top/bottom rails, equal arc-length. All population beads follow current morphing rail.\",\n      \"revealSeconds\": [\n        14.8,\n        15.8\n      ],\n      \"beads\": [\n        {\n          \"id\": \"population-00\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.06,\n          \"radiusPx\": 8,\n          \"opacity\": 0.32\n        },\n        {\n          \"id\": \"population-01\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.06,\n          \"radiusPx\": 11,\n          \"opacity\": 0.52\n        },\n        {\n          \"id\": \"population-02\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.129,\n          \"radiusPx\": 15,\n          \"opacity\": 0.78\n        },\n        {\n          \"id\": \"population-03\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.129,\n          \"radiusPx\": 10,\n          \"opacity\": 0.4\n        },\n        {\n          \"id\": \"population-04\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.198,\n          \"radiusPx\": 13,\n          \"opacity\": 0.32\n        },\n        {\n          \"id\": \"population-05\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.198,\n          \"radiusPx\": 17,\n          \"opacity\": 0.52\n        },\n        {\n          \"id\": \"population-06\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.267,\n          \"radiusPx\": 8,\n          \"opacity\": 0.78\n        },\n        {\n          \"id\": \"population-07\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.267,\n          \"radiusPx\": 11,\n          \"opacity\": 0.4\n        },\n        {\n          \"id\": \"population-08\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.336,\n          \"radiusPx\": 15,\n          \"opacity\": 0.32\n        },\n        {\n          \"id\": \"population-09\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.336,\n          \"radiusPx\": 10,\n          \"opacity\": 0.52\n        },\n        {\n          \"id\": \"population-10\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.405,\n          \"radiusPx\": 13,\n          \"opacity\": 0.78\n        },\n        {\n          \"id\": \"population-11\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.405,\n          \"radiusPx\": 17,\n          \"opacity\": 0.4\n        },\n        {\n          \"id\": \"population-12\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.474,\n          \"radiusPx\": 8,\n          \"opacity\": 0.32\n        },\n        {\n          \"id\": \"population-13\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.474,\n          \"radiusPx\": 11,\n          \"opacity\": 0.52\n        },\n        {\n          \"id\": \"population-14\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.543,\n          \"radiusPx\": 15,\n          \"opacity\": 0.78\n        },\n        {\n          \"id\": \"population-15\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.543,\n          \"radiusPx\": 10,\n          \"opacity\": 0.4\n        },\n        {\n          \"id\": \"population-16\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.612,\n          \"radiusPx\": 13,\n          \"opacity\": 0.32\n        },\n        {\n          \"id\": \"population-17\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.612,\n          \"radiusPx\": 17,\n          \"opacity\": 0.52\n        },\n        {\n          \"id\": \"population-18\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.681,\n          \"radiusPx\": 8,\n          \"opacity\": 0.78\n        },\n        {\n          \"id\": \"population-19\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.681,\n          \"radiusPx\": 11,\n          \"opacity\": 0.4\n        },\n        {\n          \"id\": \"population-20\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.75,\n          \"radiusPx\": 15,\n          \"opacity\": 0.32\n        },\n        {\n          \"id\": \"population-21\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.75,\n          \"radiusPx\": 10,\n          \"opacity\": 0.52\n        },\n        {\n          \"id\": \"population-22\",\n          \"rail\": \"top\",\n          \"arcFraction\": 0.819,\n          \"radiusPx\": 13,\n          \"opacity\": 0.78\n        },\n        {\n          \"id\": \"population-23\",\n          \"rail\": \"bottom\",\n          \"arcFraction\": 0.819,\n          \"radiusPx\": 17,\n          \"opacity\": 0.4\n        }\n      ],\n      \"depthStrokeWidthPx\": 18,\n      \"edgeStrokeWidthPx\": 2.8,\n      \"primaryRailStrokeWidthPx\": 9,\n      \"fixedBranchPaths\": [\n        \"M245 260 C365 260 390 355 485.255 329.704\",\n        \"M280 650 C410 650 445 580 563.393 574.293\",\n        \"M1568.752 312.897 C1680 305 1700 220 1770 220\",\n        \"M1568.655 552.852 C1670 560 1700 675 1770 675\"\n      ],\n      \"branchStrokePx\": 7,\n      \"branchOpacity\": 0.32,\n      \"outputBranchRevealAfterSeconds\": 18.15,\n      \"branchAttachment\": {\n        \"inputArcSampleIndices\": [\n          29,\n          38\n        ],\n        \"outputArcSampleIndex\": 90,\n        \"followDeformingParent\": true\n      }\n    },\n    {\n      \"id\": \"source-legibility\",\n      \"sourceLabelExitSeconds\": [\n        14.55,\n        15.05\n      ],\n      \"replayArrowPath\": \"M1290 337 L1317 345 L1307 373\",\n      \"arcRevealBeforeSemanticActivation\": false\n    }\n  ]\n}\n",
      "bytesBase64": "ewogICJzdGF0dXMiOiAiYXV0aG9yZWQtcmVmaW5lbWVudC1wYXJhbWV0ZXJzLWFmdGVyLWFjdHVhbC1zbmFwc2hvdC1yZXZpZXciLAogICJ1c2VyQXBwcm92YWxPZkVhY2hOdW1lcmljVmFsdWUiOiBmYWxzZSwKICAib3JpZ2luYWxTdG9yeWJvYXJkTXV0YXRlZCI6IGZhbHNlLAogICJyZXZpZXdFdmlkZW5jZSI6IFsKICAgICIuY2FjaGUvbW90aW9uLWxhYi9yZXZpZXcvcmV2aWV3LWJlYXRzLmpwZyIsCiAgICAiLmNhY2hlL21vdGlvbi1sYWIvZXhpdC1yZXZpZXcvY29udGFjdC1zaGVldC0xLmpwZyIsCiAgICAiLmNhY2hlL21vdGlvbi1sYWIvZXhpdC1yZXZpZXcvY29udGFjdC1zaGVldC0yLmpwZyIKICBdLAogICJyZWZpbmVtZW50cyI6IFsKICAgIHsKICAgICAgImlkIjogInNpbmdsZS1ib2FyZC1wcm9qZWN0aW9uIiwKICAgICAgInJlYXNvbiI6ICIzLjQzM+KAkzMuNnMgYWN0dWFsIGNyb3NzZmFkZSBzaG93cyBkb3VibGUgY2F0cyBhbmQgZnJhbWUgZWRnZXMiLAogICAgICAibWV0aG9kIjogIlVzZSBvbmx5IHJlbmRlcmVkIGhlcm8gYm9hcmQ7IG9uZSBwZXJzcGVjdGl2ZS1wcm9qZWN0ZWQgaW1hZ2UuIERvIG5vdCBwcmVzZW50IGFzIGZ1bGwgM0QgdHVybnRhYmxlLiBFZGdlIHN0aWxsIHJldGFpbmVkIGFzIHVudXNlZCBhdXRob3JlZCBhc3NldC4iLAogICAgICAiaGVyb09wYWNpdHkiOiAxLAogICAgICAiZWRnZU9wYWNpdHkiOiAwLAogICAgICAicGVyc3BlY3RpdmVQeCI6IDExMDAsCiAgICAgICJyb3RhdGlvbllEZWdyZWVzQXRFeGl0IjogLTI0LAogICAgICAicm90YXRpb25aRGVncmVlcyI6ICItMypwZWVsLTE2KnBlZWxeMi4xNSIsCiAgICAgICJsb2NhbFJhbmdlU2Vjb25kcyI6IFsKICAgICAgICAzLjE1LAogICAgICAgIDQuNAogICAgICBdLAogICAgICAiZXhpdERpc3RhbmNlUHgiOiBbCiAgICAgICAgLTQyMCwKICAgICAgICAtMTE0NQogICAgICBdCiAgICB9LAogICAgewogICAgICAiaWQiOiAicmV0YWluZWQtc3RheS1vcmJpdCIsCiAgICAgICJyZWFzb24iOiAiMTBzIGFjdHVhbCBmcmFtZSBsYWNrcyBpbmhlcml0ZWQgc3BhdGlhbCByZWZlcmVuY2UiLAogICAgICAiY2VudGVyUHgiOiBbCiAgICAgICAgOTYwLAogICAgICAgIDQzMAogICAgICBdLAogICAgICAicmFkaXVzUHgiOiAyMTUsCiAgICAgICJzdGFydERlZ3JlZXMiOiAtNjUsCiAgICAgICJzd2VlcERlZ3JlZXMiOiAyODcsCiAgICAgICJzdHJva2VQeCI6IDgsCiAgICAgICJzdHJva2VDb2xvciI6ICIjODA5ODg3IiwKICAgICAgIm1heE9wYWNpdHkiOiAwLjM4LAogICAgICAicmV2ZWFsU2Vjb25kcyI6IFsKICAgICAgICA2LjEsCiAgICAgICAgOC4xCiAgICAgIF0sCiAgICAgICJyZXRpcmVTZWNvbmRzIjogWwogICAgICAgIDExLjUsCiAgICAgICAgMTMuOAogICAgICBdLAogICAgICAicXVlc3Rpb25DYW1lcmFTY2FsZUZyb21UbyI6IFsKICAgICAgICAxLAogICAgICAgIDEuMDgKICAgICAgXSwKICAgICAgInF1ZXN0aW9uQ2FtZXJhTW92ZVNlY29uZHMiOiBbCiAgICAgICAgOC4zLAogICAgICAgIDkuMwogICAgICBdLAogICAgICAicXVlc3Rpb25DYW1lcmFSZXR1cm5TZWNvbmRzIjogWwogICAgICAgIDEwLjcsCiAgICAgICAgMTEuNgogICAgICBdCiAgICB9LAogICAgewogICAgICAiaWQiOiAiZXhpc3RpbmctYWdncmVnYXRlLWRlcHRoIiwKICAgICAgInJlYXNvbiI6ICIxOHMgYWN0dWFsIGZyYW1lIGhhcyB0d28gbG9uZSBwYXRocyBhbmQgdG9vIGZldyBwb3B1bGF0aW9uIHNpZ25hbHMiLAogICAgICAiZ2VvbWV0cnkiOiAiUmV0YWluZWQgdG9wL2JvdHRvbSByYWlscywgZXF1YWwgYXJjLWxlbmd0aC4gQWxsIHBvcHVsYXRpb24gYmVhZHMgZm9sbG93IGN1cnJlbnQgbW9ycGhpbmcgcmFpbC4iLAogICAgICAicmV2ZWFsU2Vjb25kcyI6IFsKICAgICAgICAxNC44LAogICAgICAgIDE1LjgKICAgICAgXSwKICAgICAgImJlYWRzIjogWwogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTAwIiwKICAgICAgICAgICJyYWlsIjogInRvcCIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjA2LAogICAgICAgICAgInJhZGl1c1B4IjogOCwKICAgICAgICAgICJvcGFjaXR5IjogMC4zMgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImlkIjogInBvcHVsYXRpb24tMDEiLAogICAgICAgICAgInJhaWwiOiAiYm90dG9tIiwKICAgICAgICAgICJhcmNGcmFjdGlvbiI6IDAuMDYsCiAgICAgICAgICAicmFkaXVzUHgiOiAxMSwKICAgICAgICAgICJvcGFjaXR5IjogMC41MgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImlkIjogInBvcHVsYXRpb24tMDIiLAogICAgICAgICAgInJhaWwiOiAidG9wIiwKICAgICAgICAgICJhcmNGcmFjdGlvbiI6IDAuMTI5LAogICAgICAgICAgInJhZGl1c1B4IjogMTUsCiAgICAgICAgICAib3BhY2l0eSI6IDAuNzgKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTAzIiwKICAgICAgICAgICJyYWlsIjogImJvdHRvbSIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjEyOSwKICAgICAgICAgICJyYWRpdXNQeCI6IDEwLAogICAgICAgICAgIm9wYWNpdHkiOiAwLjQKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTA0IiwKICAgICAgICAgICJyYWlsIjogInRvcCIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjE5OCwKICAgICAgICAgICJyYWRpdXNQeCI6IDEzLAogICAgICAgICAgIm9wYWNpdHkiOiAwLjMyCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaWQiOiAicG9wdWxhdGlvbi0wNSIsCiAgICAgICAgICAicmFpbCI6ICJib3R0b20iLAogICAgICAgICAgImFyY0ZyYWN0aW9uIjogMC4xOTgsCiAgICAgICAgICAicmFkaXVzUHgiOiAxNywKICAgICAgICAgICJvcGFjaXR5IjogMC41MgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImlkIjogInBvcHVsYXRpb24tMDYiLAogICAgICAgICAgInJhaWwiOiAidG9wIiwKICAgICAgICAgICJhcmNGcmFjdGlvbiI6IDAuMjY3LAogICAgICAgICAgInJhZGl1c1B4IjogOCwKICAgICAgICAgICJvcGFjaXR5IjogMC43OAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImlkIjogInBvcHVsYXRpb24tMDciLAogICAgICAgICAgInJhaWwiOiAiYm90dG9tIiwKICAgICAgICAgICJhcmNGcmFjdGlvbiI6IDAuMjY3LAogICAgICAgICAgInJhZGl1c1B4IjogMTEsCiAgICAgICAgICAib3BhY2l0eSI6IDAuNAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImlkIjogInBvcHVsYXRpb24tMDgiLAogICAgICAgICAgInJhaWwiOiAidG9wIiwKICAgICAgICAgICJhcmNGcmFjdGlvbiI6IDAuMzM2LAogICAgICAgICAgInJhZGl1c1B4IjogMTUsCiAgICAgICAgICAib3BhY2l0eSI6IDAuMzIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTA5IiwKICAgICAgICAgICJyYWlsIjogImJvdHRvbSIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjMzNiwKICAgICAgICAgICJyYWRpdXNQeCI6IDEwLAogICAgICAgICAgIm9wYWNpdHkiOiAwLjUyCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaWQiOiAicG9wdWxhdGlvbi0xMCIsCiAgICAgICAgICAicmFpbCI6ICJ0b3AiLAogICAgICAgICAgImFyY0ZyYWN0aW9uIjogMC40MDUsCiAgICAgICAgICAicmFkaXVzUHgiOiAxMywKICAgICAgICAgICJvcGFjaXR5IjogMC43OAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImlkIjogInBvcHVsYXRpb24tMTEiLAogICAgICAgICAgInJhaWwiOiAiYm90dG9tIiwKICAgICAgICAgICJhcmNGcmFjdGlvbiI6IDAuNDA1LAogICAgICAgICAgInJhZGl1c1B4IjogMTcsCiAgICAgICAgICAib3BhY2l0eSI6IDAuNAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImlkIjogInBvcHVsYXRpb24tMTIiLAogICAgICAgICAgInJhaWwiOiAidG9wIiwKICAgICAgICAgICJhcmNGcmFjdGlvbiI6IDAuNDc0LAogICAgICAgICAgInJhZGl1c1B4IjogOCwKICAgICAgICAgICJvcGFjaXR5IjogMC4zMgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImlkIjogInBvcHVsYXRpb24tMTMiLAogICAgICAgICAgInJhaWwiOiAiYm90dG9tIiwKICAgICAgICAgICJhcmNGcmFjdGlvbiI6IDAuNDc0LAogICAgICAgICAgInJhZGl1c1B4IjogMTEsCiAgICAgICAgICAib3BhY2l0eSI6IDAuNTIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTE0IiwKICAgICAgICAgICJyYWlsIjogInRvcCIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjU0MywKICAgICAgICAgICJyYWRpdXNQeCI6IDE1LAogICAgICAgICAgIm9wYWNpdHkiOiAwLjc4CiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaWQiOiAicG9wdWxhdGlvbi0xNSIsCiAgICAgICAgICAicmFpbCI6ICJib3R0b20iLAogICAgICAgICAgImFyY0ZyYWN0aW9uIjogMC41NDMsCiAgICAgICAgICAicmFkaXVzUHgiOiAxMCwKICAgICAgICAgICJvcGFjaXR5IjogMC40CiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaWQiOiAicG9wdWxhdGlvbi0xNiIsCiAgICAgICAgICAicmFpbCI6ICJ0b3AiLAogICAgICAgICAgImFyY0ZyYWN0aW9uIjogMC42MTIsCiAgICAgICAgICAicmFkaXVzUHgiOiAxMywKICAgICAgICAgICJvcGFjaXR5IjogMC4zMgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImlkIjogInBvcHVsYXRpb24tMTciLAogICAgICAgICAgInJhaWwiOiAiYm90dG9tIiwKICAgICAgICAgICJhcmNGcmFjdGlvbiI6IDAuNjEyLAogICAgICAgICAgInJhZGl1c1B4IjogMTcsCiAgICAgICAgICAib3BhY2l0eSI6IDAuNTIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTE4IiwKICAgICAgICAgICJyYWlsIjogInRvcCIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjY4MSwKICAgICAgICAgICJyYWRpdXNQeCI6IDgsCiAgICAgICAgICAib3BhY2l0eSI6IDAuNzgKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTE5IiwKICAgICAgICAgICJyYWlsIjogImJvdHRvbSIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjY4MSwKICAgICAgICAgICJyYWRpdXNQeCI6IDExLAogICAgICAgICAgIm9wYWNpdHkiOiAwLjQKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTIwIiwKICAgICAgICAgICJyYWlsIjogInRvcCIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjc1LAogICAgICAgICAgInJhZGl1c1B4IjogMTUsCiAgICAgICAgICAib3BhY2l0eSI6IDAuMzIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTIxIiwKICAgICAgICAgICJyYWlsIjogImJvdHRvbSIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjc1LAogICAgICAgICAgInJhZGl1c1B4IjogMTAsCiAgICAgICAgICAib3BhY2l0eSI6IDAuNTIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpZCI6ICJwb3B1bGF0aW9uLTIyIiwKICAgICAgICAgICJyYWlsIjogInRvcCIsCiAgICAgICAgICAiYXJjRnJhY3Rpb24iOiAwLjgxOSwKICAgICAgICAgICJyYWRpdXNQeCI6IDEzLAogICAgICAgICAgIm9wYWNpdHkiOiAwLjc4CiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaWQiOiAicG9wdWxhdGlvbi0yMyIsCiAgICAgICAgICAicmFpbCI6ICJib3R0b20iLAogICAgICAgICAgImFyY0ZyYWN0aW9uIjogMC44MTksCiAgICAgICAgICAicmFkaXVzUHgiOiAxNywKICAgICAgICAgICJvcGFjaXR5IjogMC40CiAgICAgICAgfQogICAgICBdLAogICAgICAiZGVwdGhTdHJva2VXaWR0aFB4IjogMTgsCiAgICAgICJlZGdlU3Ryb2tlV2lkdGhQeCI6IDIuOCwKICAgICAgInByaW1hcnlSYWlsU3Ryb2tlV2lkdGhQeCI6IDksCiAgICAgICJmaXhlZEJyYW5jaFBhdGhzIjogWwogICAgICAgICJNMjQ1IDI2MCBDMzY1IDI2MCAzOTAgMzU1IDQ4NS4yNTUgMzI5LjcwNCIsCiAgICAgICAgIk0yODAgNjUwIEM0MTAgNjUwIDQ0NSA1ODAgNTYzLjM5MyA1NzQuMjkzIiwKICAgICAgICAiTTE1NjguNzUyIDMxMi44OTcgQzE2ODAgMzA1IDE3MDAgMjIwIDE3NzAgMjIwIiwKICAgICAgICAiTTE1NjguNjU1IDU1Mi44NTIgQzE2NzAgNTYwIDE3MDAgNjc1IDE3NzAgNjc1IgogICAgICBdLAogICAgICAiYnJhbmNoU3Ryb2tlUHgiOiA3LAogICAgICAiYnJhbmNoT3BhY2l0eSI6IDAuMzIsCiAgICAgICJvdXRwdXRCcmFuY2hSZXZlYWxBZnRlclNlY29uZHMiOiAxOC4xNSwKICAgICAgImJyYW5jaEF0dGFjaG1lbnQiOiB7CiAgICAgICAgImlucHV0QXJjU2FtcGxlSW5kaWNlcyI6IFsKICAgICAgICAgIDI5LAogICAgICAgICAgMzgKICAgICAgICBdLAogICAgICAgICJvdXRwdXRBcmNTYW1wbGVJbmRleCI6IDkwLAogICAgICAgICJmb2xsb3dEZWZvcm1pbmdQYXJlbnQiOiB0cnVlCiAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICJpZCI6ICJzb3VyY2UtbGVnaWJpbGl0eSIsCiAgICAgICJzb3VyY2VMYWJlbEV4aXRTZWNvbmRzIjogWwogICAgICAgIDE0LjU1LAogICAgICAgIDE1LjA1CiAgICAgIF0sCiAgICAgICJyZXBsYXlBcnJvd1BhdGgiOiAiTTEyOTAgMzM3IEwxMzE3IDM0NSBMMTMwNyAzNzMiLAogICAgICAiYXJjUmV2ZWFsQmVmb3JlU2VtYW50aWNBY3RpdmF0aW9uIjogZmFsc2UKICAgIH0KICBdCn0K",
      "parsed": {
        "status": "authored-refinement-parameters-after-actual-snapshot-review",
        "userApprovalOfEachNumericValue": false,
        "originalStoryboardMutated": false,
        "reviewEvidence": [
          ".cache/motion-lab/review/review-beats.jpg",
          ".cache/motion-lab/exit-review/contact-sheet-1.jpg",
          ".cache/motion-lab/exit-review/contact-sheet-2.jpg"
        ],
        "refinements": [
          {
            "id": "single-board-projection",
            "reason": "3.433–3.6s actual crossfade shows double cats and frame edges",
            "method": "Use only rendered hero board; one perspective-projected image. Do not present as full 3D turntable. Edge still retained as unused authored asset.",
            "heroOpacity": 1,
            "edgeOpacity": 0,
            "perspectivePx": 1100,
            "rotationYDegreesAtExit": -24,
            "rotationZDegrees": "-3*peel-16*peel^2.15",
            "localRangeSeconds": [
              3.15,
              4.4
            ],
            "exitDistancePx": [
              -420,
              -1145
            ]
          },
          {
            "id": "retained-stay-orbit",
            "reason": "10s actual frame lacks inherited spatial reference",
            "centerPx": [
              960,
              430
            ],
            "radiusPx": 215,
            "startDegrees": -65,
            "sweepDegrees": 287,
            "strokePx": 8,
            "strokeColor": "#809887",
            "maxOpacity": 0.38,
            "revealSeconds": [
              6.1,
              8.1
            ],
            "retireSeconds": [
              11.5,
              13.8
            ],
            "questionCameraScaleFromTo": [
              1,
              1.08
            ],
            "questionCameraMoveSeconds": [
              8.3,
              9.3
            ],
            "questionCameraReturnSeconds": [
              10.7,
              11.6
            ]
          },
          {
            "id": "existing-aggregate-depth",
            "reason": "18s actual frame has two lone paths and too few population signals",
            "geometry": "Retained top/bottom rails, equal arc-length. All population beads follow current morphing rail.",
            "revealSeconds": [
              14.8,
              15.8
            ],
            "beads": [
              {
                "id": "population-00",
                "rail": "top",
                "arcFraction": 0.06,
                "radiusPx": 8,
                "opacity": 0.32
              },
              {
                "id": "population-01",
                "rail": "bottom",
                "arcFraction": 0.06,
                "radiusPx": 11,
                "opacity": 0.52
              },
              {
                "id": "population-02",
                "rail": "top",
                "arcFraction": 0.129,
                "radiusPx": 15,
                "opacity": 0.78
              },
              {
                "id": "population-03",
                "rail": "bottom",
                "arcFraction": 0.129,
                "radiusPx": 10,
                "opacity": 0.4
              },
              {
                "id": "population-04",
                "rail": "top",
                "arcFraction": 0.198,
                "radiusPx": 13,
                "opacity": 0.32
              },
              {
                "id": "population-05",
                "rail": "bottom",
                "arcFraction": 0.198,
                "radiusPx": 17,
                "opacity": 0.52
              },
              {
                "id": "population-06",
                "rail": "top",
                "arcFraction": 0.267,
                "radiusPx": 8,
                "opacity": 0.78
              },
              {
                "id": "population-07",
                "rail": "bottom",
                "arcFraction": 0.267,
                "radiusPx": 11,
                "opacity": 0.4
              },
              {
                "id": "population-08",
                "rail": "top",
                "arcFraction": 0.336,
                "radiusPx": 15,
                "opacity": 0.32
              },
              {
                "id": "population-09",
                "rail": "bottom",
                "arcFraction": 0.336,
                "radiusPx": 10,
                "opacity": 0.52
              },
              {
                "id": "population-10",
                "rail": "top",
                "arcFraction": 0.405,
                "radiusPx": 13,
                "opacity": 0.78
              },
              {
                "id": "population-11",
                "rail": "bottom",
                "arcFraction": 0.405,
                "radiusPx": 17,
                "opacity": 0.4
              },
              {
                "id": "population-12",
                "rail": "top",
                "arcFraction": 0.474,
                "radiusPx": 8,
                "opacity": 0.32
              },
              {
                "id": "population-13",
                "rail": "bottom",
                "arcFraction": 0.474,
                "radiusPx": 11,
                "opacity": 0.52
              },
              {
                "id": "population-14",
                "rail": "top",
                "arcFraction": 0.543,
                "radiusPx": 15,
                "opacity": 0.78
              },
              {
                "id": "population-15",
                "rail": "bottom",
                "arcFraction": 0.543,
                "radiusPx": 10,
                "opacity": 0.4
              },
              {
                "id": "population-16",
                "rail": "top",
                "arcFraction": 0.612,
                "radiusPx": 13,
                "opacity": 0.32
              },
              {
                "id": "population-17",
                "rail": "bottom",
                "arcFraction": 0.612,
                "radiusPx": 17,
                "opacity": 0.52
              },
              {
                "id": "population-18",
                "rail": "top",
                "arcFraction": 0.681,
                "radiusPx": 8,
                "opacity": 0.78
              },
              {
                "id": "population-19",
                "rail": "bottom",
                "arcFraction": 0.681,
                "radiusPx": 11,
                "opacity": 0.4
              },
              {
                "id": "population-20",
                "rail": "top",
                "arcFraction": 0.75,
                "radiusPx": 15,
                "opacity": 0.32
              },
              {
                "id": "population-21",
                "rail": "bottom",
                "arcFraction": 0.75,
                "radiusPx": 10,
                "opacity": 0.52
              },
              {
                "id": "population-22",
                "rail": "top",
                "arcFraction": 0.819,
                "radiusPx": 13,
                "opacity": 0.78
              },
              {
                "id": "population-23",
                "rail": "bottom",
                "arcFraction": 0.819,
                "radiusPx": 17,
                "opacity": 0.4
              }
            ],
            "depthStrokeWidthPx": 18,
            "edgeStrokeWidthPx": 2.8,
            "primaryRailStrokeWidthPx": 9,
            "fixedBranchPaths": [
              "M245 260 C365 260 390 355 485.255 329.704",
              "M280 650 C410 650 445 580 563.393 574.293",
              "M1568.752 312.897 C1680 305 1700 220 1770 220",
              "M1568.655 552.852 C1670 560 1700 675 1770 675"
            ],
            "branchStrokePx": 7,
            "branchOpacity": 0.32,
            "outputBranchRevealAfterSeconds": 18.15,
            "branchAttachment": {
              "inputArcSampleIndices": [
                29,
                38
              ],
              "outputArcSampleIndex": 90,
              "followDeformingParent": true
            }
          },
          {
            "id": "source-legibility",
            "sourceLabelExitSeconds": [
              14.55,
              15.05
            ],
            "replayArrowPath": "M1290 337 L1317 345 L1307 373",
            "arcRevealBeforeSemanticActivation": false
          }
        ]
      }
    }
  },
  "film": {
    "status": "approved-script-awaiting-style-review",
    "copyApproved": true,
    "scriptApproved": true,
    "assetsAndStyleApproved": false,
    "fullEditStarted": false,
    "title": "一颗红心，去了哪里？",
    "fps": 60,
    "width": 1920,
    "height": 1080,
    "durationInFrames": 7800,
    "durationSeconds": 130,
    "voiceover": false,
    "approvedCopyArtifact": "copy-draft-r2.md",
    "approvedCopyUnits": [
      "你以为，他上班只是在刷手机。",
      "其实，他在研究你为什么停下。",
      "这份工作，叫新媒体运营。",
      "你正准备，把手机收起来。",
      "一只小猫，突然探进画面。",
      "它歪了歪头。",
      "你停住了。",
      "五秒。",
      "看完，又看了一遍。",
      "顺手，点亮一颗红心。",
      "然后，划走。",
      "视频过去了。",
      "你的反应，留下了。",
      "刚才那几秒，去了哪里？",
      "停留、重看、点赞……",
      "它们被平台记录，变成信号。",
      "成为推荐的参考。",
      "运营看到的，是汇总后的反馈。",
      "五秒、两秒、看到最后。",
      "当成千上万次停留汇在一起，",
      "零散的动作，慢慢显出轮廓。",
      "哪里留住了人？",
      "哪里，大家突然离开？",
      "运营，就在这片数据洪流里，",
      "寻找那些反复出现的变化。",
      "是小猫歪头的那一下？",
      "还是刚刚好的节奏？",
      "数字给出线索。",
      "原因，还要回到内容里验证。",
      "于是，下一条内容，",
      "换了一个开头，",
      "留长了一个瞬间。",
      "再等一轮，真实的回应。",
      "内容，影响着你的停留。",
      "你的停留，也在影响内容。",
      "你看到的，是一只小猫。",
      "屏幕另一边的人，",
      "想从无数个这样的瞬间里，",
      "找到让人愿意留下的理由。",
      "这，就是新媒体运营。"
    ],
    "reference": {
      "uploadedFile": "Iwanau-Vibe知识大赏_《运气的形状》本视...-20261022_092444.mp4",
      "sha256": "31444f8f66fd764c608ed393a6d2e54e62d3ade1925c3b9d2d482d0461ebd3dd",
      "sizeBytes": 11767133,
      "videoSeconds": 130,
      "audioSeconds": 130.007007,
      "independentMusicStemAvailable": false,
      "userIdentifiedOriginalMusicUrl": "https://music.163.com/song?id=3451028893",
      "userSuppliedMusicAssetAvailable": true,
      "userSuppliedMusicSha256": "d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59",
      "referenceTimeToMusicTimeOffsetSeconds": 0.048
    },
    "timingNotes": "All timings are editorial proposals, not rendered or exact verified music beat markers. The approved screen copy is unchanged.",
    "literalPause": {
      "from": 1080,
      "durationInFrames": 300
    },
    "finalStableHold": {
      "from": 7728,
      "durationInFrames": 72
    },
    "shots": [
      {
        "id": "hook",
        "start": 0,
        "end": 9,
        "copy": [
          1,
          2,
          3
        ],
        "visual": "暗处一部象牙色手机居中，内容轻轻经过；滑动突然停住，镜头靠近。同一物件带出职业，不另开标题卡。",
        "sound": "两次轻纸擦，停住时一个短促低音。开场不连续重击。",
        "from": 0,
        "durationInFrames": 540,
        "screenText": [
          "你以为，他上班只是在刷手机。",
          "其实，他在研究你为什么停下。",
          "这份工作，叫新媒体运营。"
        ],
        "textTreatment": "第一句随滑动进入；第二句中的“停下”真正停在画心；第三句完整读清后将职业名收至上角。"
      },
      {
        "id": "cat-interrupts",
        "start": 9,
        "end": 16,
        "copy": [
          4,
          5
        ],
        "visual": "手机向暗处下沉，一只暖白、有体积和柔和阴影的小猫从原画框探头，打断收手机的动作。",
        "sound": "衣料式轻擦，再给一次极轻触碰。参考音轨10–16秒较弱，保留空间。",
        "from": 540,
        "durationInFrames": 420,
        "screenText": [
          "你正准备，把手机收起来。",
          "一只小猫，突然探进画面。"
        ],
        "textTreatment": "第四句随手机下沉，第五句在小猫出现后于稳定区域显现。"
      },
      {
        "id": "five-second-pause",
        "start": 16,
        "end": 25,
        "copy": [
          6,
          7,
          8
        ],
        "visual": "小猫轻轻歪头。18.0–23.0秒真实停留五秒，主体基本安定，仅细光环缓慢走完；23秒后才显示“五秒。”。",
        "sound": "歪头一个柔和小音。真实五秒停留期间不新增音效，由音乐、主体细微呼吸和静止承担意味。",
        "from": 960,
        "durationInFrames": 540,
        "screenText": [
          "它歪了歪头。",
          "你停住了。",
          "五秒。"
        ],
        "textTreatment": "第六句配合歪头，第七句随停住出现并保持。真实五秒后再显示第八句，不新增倒计时台词。"
      },
      {
        "id": "rewatch-heart",
        "start": 25,
        "end": 31,
        "copy": [
          9,
          10
        ],
        "visual": "猫的动作回到起点再发生一次，浅重影表达重看；一枚低饱和朱红心亮起，随后留在原处。",
        "sound": "一次极轻反向扫频、一次柔软心跳式落点。红心只亮一次。",
        "from": 1500,
        "durationInFrames": 360,
        "screenText": [
          "看完，又看了一遍。",
          "顺手，点亮一颗红心。"
        ],
        "textTreatment": "第九句先完整读清，再沿回环路径移动；第十句随红心落定。"
      },
      {
        "id": "swipe-leaves-trace",
        "start": 31,
        "end": 39,
        "copy": [
          11,
          12,
          13,
          14
        ],
        "visual": "31–34秒：整个猫视频被划走，红心却缩成小点留下。视频内容与行为反应第一次分离；镜头追向留下的小点。",
        "sound": "利用原音轨31.65–33.78秒较密集瞬态承接短扫与落定；不在已有冲击上再堆重击，后半迅速收声。",
        "from": 1860,
        "durationInFrames": 480,
        "screenText": [
          "然后，划走。",
          "视频过去了。",
          "你的反应，留下了。",
          "刚才那几秒，去了哪里？"
        ],
        "textTreatment": "第十一句被划动带走，第十二句跟随视频退去，第十三句留在原处，第十四句随镜头追入慢慢显现。"
      },
      {
        "id": "actions-become-signals",
        "start": 39,
        "end": 48,
        "copy": [
          15,
          16,
          17
        ],
        "visual": "红心点与停留、重看的符号化为细颗粒，接入已有大量颗粒的分支网络；不是一颗红心独自触发一个推荐结果。",
        "sound": "三种极轻颗粒质感逐渐合拢，可借44–46秒原曲较强处完成聚合，不使用“推荐成功”提示声。",
        "from": 2340,
        "durationInFrames": 540,
        "screenText": [
          "停留、重看、点赞……",
          "它们被平台记录，变成信号。",
          "成为推荐的参考。"
        ],
        "textTreatment": "第十五句完整显示后再拆为三条线上的词；第十六句随汇入显现，第十七句稳定落在网络旁。"
      },
      {
        "id": "aggregate-feedback",
        "start": 48,
        "end": 56,
        "copy": [
          18,
          19
        ],
        "visual": "镜头越过一层朦胧纸面。行为点先合并成总体痕迹，再进入运营观察区域；画面不保留可追踪的个人身份。",
        "sound": "密集颗粒收成一次细腻聚合声，随后安静。",
        "from": 2880,
        "durationInFrames": 480,
        "screenText": [
          "运营看到的，是汇总后的反馈。",
          "五秒、两秒、看到最后。"
        ],
        "textTreatment": "“汇总后的反馈”获得空间强调；第十九句的三个部分对应三组不同长度痕迹，保持阅读顺序。"
      },
      {
        "id": "river-takes-shape",
        "start": 56,
        "end": 64,
        "copy": [
          20,
          21
        ],
        "visual": "镜头拉远，原先的痕迹只是数据河流的一角。大量金白珠点沿线流动，渐渐显出总体趋势，不套用与本题无关的钟形分布。",
        "sound": "颗粒稍加密，再以一个温和长音收拢。",
        "from": 3360,
        "durationInFrames": 480,
        "screenText": [
          "当成千上万次停留汇在一起，",
          "零散的动作，慢慢显出轮廓。"
        ],
        "textTreatment": "第二十句伴随拉远；第二十一句先完整读清，再以“零散”的分散和“轮廓”的成形呼应画面。"
      },
      {
        "id": "where-viewers-stay",
        "start": 64,
        "end": 71,
        "copy": [
          22,
          23
        ],
        "visual": "镜头沿同一条总体曲线靠近停留区，再移向回落区。只用相对形状说明差异，不虚构真实账号的百分比。",
        "sound": "两个有间隔的轻触，第二个更轻；没有警报或失败音。",
        "from": 3840,
        "durationInFrames": 420,
        "screenText": [
          "哪里留住了人？",
          "哪里，大家突然离开？"
        ],
        "textTreatment": "两句问题分别落在相应观察区附近，完整读清才移开；“哪里”负责引导视线。"
      },
      {
        "id": "observe-repetition",
        "start": 71,
        "end": 78,
        "copy": [
          24,
          25
        ],
        "visual": "暗处出现观察者剪贴轮廓，面对数据河流。一个细线观察环沿流动寻找重复形状，主角仍是反馈而非人物脸部。",
        "sound": "一道细纸擦，然后降低音效密度，为下一段留空间。",
        "from": 4260,
        "durationInFrames": 420,
        "screenText": [
          "运营，就在这片数据洪流里，",
          "寻找那些反复出现的变化。"
        ],
        "textTreatment": "第二十四句沿河流底部显现；第二十五句的“反复出现”与重复形状呼应。"
      },
      {
        "id": "hypotheses-not-answers",
        "start": 78,
        "end": 90,
        "copy": [
          26,
          27,
          28,
          29
        ],
        "visual": "曲线中的圆点放大，重新成为小猫。歪头与节奏构成两个待验证的可能，数字线退到背景，镜头回到内容。",
        "sound": "借原音轨80–90秒的较弱区留白，仅一两次柔和提示；不用“答案揭晓”声。",
        "from": 4680,
        "durationInFrames": 720,
        "screenText": [
          "是小猫歪头的那一下？",
          "还是刚刚好的节奏？",
          "数字给出线索。",
          "原因，还要回到内容里验证。"
        ],
        "textTreatment": "两个疑问依次完整出现，不加确定性对勾；数字退为背景后，第二十九句完整稳定停留。"
      },
      {
        "id": "change-next-content",
        "start": 90,
        "end": 101,
        "copy": [
          30,
          31,
          32
        ],
        "visual": "猫画面成为有实体厚度的旧胶片。第一格被替换；一个瞬间所在的胶片段被留长，动作也真正慢下来。",
        "sound": "两次有区别的纸片移动声：换开头短，留长时柔和延展。",
        "from": 5400,
        "durationInFrames": 660,
        "screenText": [
          "于是，下一条内容，",
          "换了一个开头，",
          "留长了一个瞬间。"
        ],
        "textTreatment": "第三十句先出现；“开头”随第一格移动，“留长”靠字距和稳定时间表达，不拉坏字形。"
      },
      {
        "id": "wait-for-response",
        "start": 101,
        "end": 108,
        "copy": [
          33
        ],
        "visual": "新内容送出，先只有少量回应点，随后更多颗粒归来形成细线；等待本身成为可见的过程。",
        "sound": "一个轻发送扫声，随后撤声；回流时只补少量细颗粒。",
        "from": 6060,
        "durationInFrames": 420,
        "screenText": [
          "再等一轮，真实的回应。"
        ],
        "textTreatment": "第三十三句保持完整稳定，变化发生在周围，不用文字弹跳填补等待。"
      },
      {
        "id": "mutual-influence",
        "start": 108,
        "end": 116,
        "copy": [
          34,
          35
        ],
        "visual": "送出的内容线与返回的反馈线逐渐弯成同一个环，前面的路径连续闭合，不突然切入新示意图。",
        "sound": "两个相互回应的柔和音色，闭环时一个轻落点。",
        "from": 6480,
        "durationInFrames": 480,
        "screenText": [
          "内容，影响着你的停留。",
          "你的停留，也在影响内容。"
        ],
        "textTreatment": "两句先后完整读清，随后沿相反方向接入，最终短暂共存；不让路径弯曲破坏字形。"
      },
      {
        "id": "return-to-cat-and-person",
        "start": 116,
        "end": 124,
        "copy": [
          36,
          37,
          38
        ],
        "visual": "镜头穿过闭环回到小猫，再拉远到许多微小内容瞬间。观察者留在暗处，不变成职场人物肖像宣传。",
        "sound": "音效逐层减少，只留极浅的纸面与颗粒尾音。",
        "from": 6960,
        "durationInFrames": 480,
        "screenText": [
          "你看到的，是一只小猫。",
          "屏幕另一边的人，",
          "想从无数个这样的瞬间里，"
        ],
        "textTreatment": "第三十六句靠近猫，第三十七句随拉远，第三十八句沿内容瞬间的方向缓缓展开。"
      },
      {
        "id": "ending",
        "start": 124,
        "end": 130,
        "copy": [
          39,
          40
        ],
        "visual": "颗粒渐渐收束，重回最初愿意停住的瞬间。最终安定，呼应开场“停下”；128.8–130秒不新增信息。",
        "sound": "一个克制的收束音，之后不新增音效，保留原音轨结尾。",
        "from": 7440,
        "durationInFrames": 360,
        "screenText": [
          "找到让人愿意留下的理由。",
          "这，就是新媒体运营。"
        ],
        "textTreatment": "第三十九句先完整出现，第四十句居中落定，128.8秒后稳定保持至结束。"
      }
    ]
  },
  "sample": {
    "timeline": {
      "durationSeconds": 20,
      "fps": 60,
      "width": 1920,
      "height": 1080,
      "globalRange": [
        28,
        48
      ],
      "voiceover": false,
      "captions": [
        {
          "unit": 10,
          "start": 0,
          "end": 3,
          "text": "顺手，点亮一颗红心。"
        },
        {
          "unit": 11,
          "start": 3,
          "end": 4.45,
          "text": "然后，划走。"
        },
        {
          "unit": 12,
          "start": 4.45,
          "end": 6.1,
          "text": "视频过去了。"
        },
        {
          "unit": 13,
          "start": 6.1,
          "end": 8.3,
          "text": "你的反应，留下了。"
        },
        {
          "unit": 14,
          "start": 8.3,
          "end": 11,
          "text": "刚才那几秒，去了哪里？"
        },
        {
          "unit": 15,
          "start": 11,
          "end": 14,
          "text": "停留、重看、点赞……"
        },
        {
          "unit": 16,
          "start": 14,
          "end": 17.5,
          "text": "它们被平台记录，变成信号。"
        },
        {
          "unit": 17,
          "start": 17.5,
          "end": 20,
          "text": "成为推荐的参考。"
        }
      ],
      "inputs": [
        {
          "id": "pause",
          "launch": 14.3,
          "arrival": 16.1,
          "recordAt": 16.1
        },
        {
          "id": "replay",
          "launch": 14.7,
          "arrival": 16.6,
          "recordAt": 16.6
        },
        {
          "id": "like",
          "launch": 15.5,
          "arrival": 17.25,
          "recordAt": 17.25
        }
      ],
      "recordActivation": 16.1,
      "outputStart": 17.5,
      "outputSettled": 19.13,
      "runtimeDom": {
        "record": "record-gate-back",
        "output": "recommendation"
      },
      "musicGlobalOffsetSeconds": 0.048,
      "renderer": "hyperframes@0.8.185"
    },
    "assets": {
      "assets": {
        "hero": {
          "path": "public/images/new-media-v2/motion-lab/cat-display-hero.png",
          "sha256": "c091ab158448ff5039f11730c9aab2876b89df815245e3382a35a569dcfb342a",
          "size": [
            1152,
            1152
          ],
          "blendCache": ".cache/motion-lab-assets/hero.blend",
          "renderSeconds": 99.328,
          "yawDegrees": 12,
          "boardDimensions": [
            1.8,
            0.145,
            2.55
          ],
          "sourceSize": [
            1145,
            1374
          ],
          "imagePlaneSize": [
            1.55,
            1.8600000000000003
          ]
        },
        "morph": {
          "pathPattern": "public/images/new-media-v2/motion-lab/morph/frame-%03d.png",
          "size": [
            384,
            384
          ],
          "frames": 120,
          "fps": 60,
          "durationSeconds": 2,
          "samples": 32,
          "denoise": false,
          "renderSeconds": 323.413,
          "method": "One closed 4994-vertex UV mesh with Bead shape key; cubic eased 3D vertex interpolation.",
          "material": "Coral-red glazed ceramic; identical lighting, camera and center in all frames.",
          "blendCache": ".cache/motion-lab-assets/heart-to-bead.blend",
          "frameHashes": [
            {
              "frame": 0,
              "sha256": "5c47cfffbc1119410f2ca97f499a891cdea98c7db45cf19d2143ed1bd48d7740"
            },
            {
              "frame": 1,
              "sha256": "b3bcc742106b9e62efe845dc8353746eaebdf9992725fedd2059bb88326e33d4"
            },
            {
              "frame": 2,
              "sha256": "4634de72687cd5875572bf3e74855c2068067200fb36030b6d17260d00e6f28d"
            },
            {
              "frame": 3,
              "sha256": "7b33f1330b5714d2023fae694b47da73a255483628fb6575d8180e477466b08b"
            },
            {
              "frame": 4,
              "sha256": "e2a0c69c70cc968f88d9ad930b32f26d71f6312ed13fc43af136847c9ea523b9"
            },
            {
              "frame": 5,
              "sha256": "4f88a09b1d66103f0f734f6d258dbbc35c041391201b061835531c2bcfa6eaaf"
            },
            {
              "frame": 6,
              "sha256": "c430dd3458ef7be3a2504325a8b1e872fe24122d9c451684d3c7359f3d6e7018"
            },
            {
              "frame": 7,
              "sha256": "6e0f5d10e1f668549f34c7d17008bad2e5d5bb1db9bd85e47a22a6efe90f8540"
            },
            {
              "frame": 8,
              "sha256": "c013f72249bfb5398a572a04b2440b9229af9bbcc79279272f51b65955fb19f6"
            },
            {
              "frame": 9,
              "sha256": "96abd6cf968d8450b8b1495bf6576550cf99eacae274a0a08eb5e435373b2c2a"
            },
            {
              "frame": 10,
              "sha256": "8821963e1b8459b5f48b16efe5561d476120cd6e9bbdce388be797a70e9cf15d"
            },
            {
              "frame": 11,
              "sha256": "3ab1b5df69a7db63dbd308ebf84a4b1f81f815db63f64d4898b469cd7cdc1387"
            },
            {
              "frame": 12,
              "sha256": "dbcd4e944a75a9b8d599fe529d79ec8fe1c82a3e6e2f23a544756394f3b4e991"
            },
            {
              "frame": 13,
              "sha256": "a3a0ac1124159895203ba07b437b87509e674cfd02d7a1db0bb5613c3668f922"
            },
            {
              "frame": 14,
              "sha256": "d89f831b514aae542e23c861d785405834bde26d84f1fb18e69e0e3dacefa8c4"
            },
            {
              "frame": 15,
              "sha256": "bb2e14e29ba05cf8675814c711784e22a548166f2a6dcf86261bbcd3d72a6b98"
            },
            {
              "frame": 16,
              "sha256": "fdedb555ce4fbde757158023ef6639f138e2d482846f833dd2050d92e3c6f700"
            },
            {
              "frame": 17,
              "sha256": "112eae4ac1e32fff2679124ffbea22f3c70ac0ffcc9aafb1c525053e3b4762b7"
            },
            {
              "frame": 18,
              "sha256": "987c4c45dbeb7484d1f06a209b675d628ff6a47ffacbaaa4f85b63dbfcda2601"
            },
            {
              "frame": 19,
              "sha256": "30888a3f9cdda270cc805a1875e1f097e7939e48174c88d0f1bcf8c3878a32a0"
            },
            {
              "frame": 20,
              "sha256": "a6c2d4bbba51954b262c9f1fa7682daeb494c62c2c73ee1ccb7152705b1615f0"
            },
            {
              "frame": 21,
              "sha256": "5e27d7e5fa1ce9b2bbef01f6f3edc6180a3245a7424a6ff2f0e252bbd33c4a98"
            },
            {
              "frame": 22,
              "sha256": "5232e233aa28e6705a0d43fbdaf2af7f1722e889c7af48cbdb47edded5a95c42"
            },
            {
              "frame": 23,
              "sha256": "99edaf99d7091e7f061a825401ebba9c0b5024ee530f73fbd489654568472f41"
            },
            {
              "frame": 24,
              "sha256": "d17342375267b88e2841a979bcd69c7631b98476ccf1c0a306698ba15902ea9b"
            },
            {
              "frame": 25,
              "sha256": "4c86fd7a65f3c04d9afa0334de5fc43d016649a6d74f07c12b55bbd36b08dd76"
            },
            {
              "frame": 26,
              "sha256": "3653c247ea01c1c37d4f55629e388582cbf9c67155292c8b067baa2378735e9c"
            },
            {
              "frame": 27,
              "sha256": "9dbffcfa21e378ffc895d91bbdc957e9af944500f28e62f7f3da12b5bff72022"
            },
            {
              "frame": 28,
              "sha256": "fcc26ba3d3af9be6ad2c67f20c69b63c1087506aa3446c92158ba3d412c78352"
            },
            {
              "frame": 29,
              "sha256": "761dc8a1e3b5586c0db7e73cdc02d4835d7f952a6ff0c7990aa12e294461b01d"
            },
            {
              "frame": 30,
              "sha256": "6cf9853d82915517b601192807def589480f6dd78b79d9c706b6b2ffa26397b0"
            },
            {
              "frame": 31,
              "sha256": "f887cf35f618251dd5f392ce0df9e8febd7e5d4f63608c1c627c8f5032429193"
            },
            {
              "frame": 32,
              "sha256": "9f1beadabd87e490f4db07992e532f04cfffbb2de354353696b7d49e3eae4024"
            },
            {
              "frame": 33,
              "sha256": "46ed62626757afb4df09fec394cadce71c430899211b6aff13799e7c468f10f1"
            },
            {
              "frame": 34,
              "sha256": "a781e31ee62955be2a5549ae4721c17ec3bb88cca795acf10506974901443deb"
            },
            {
              "frame": 35,
              "sha256": "aa50d97e28ae165914efa13b7b70f5ab35b910df4652b873b662b723338b227c"
            },
            {
              "frame": 36,
              "sha256": "6c610b8650e7bc80094ab27d95243d8454bf9124f7a82bbd27b05a0b7cba90d4"
            },
            {
              "frame": 37,
              "sha256": "5f32b1ad55817bfdac6d92235236eb4ce3361414d44cdebebd979c1a970e8675"
            },
            {
              "frame": 38,
              "sha256": "3ab258e1ef51d95d98ddf16f69135302a6a8c8c697aea7c08a6620dda980e7ce"
            },
            {
              "frame": 39,
              "sha256": "453f70ffff9ea289bf6c5d8c016357914d39419f2936c456d7d2cc479f366660"
            },
            {
              "frame": 40,
              "sha256": "3bcb99ab6bd7876526d2c1848f6ee2dd5724cd0c46b498da7065aaddb91562e5"
            },
            {
              "frame": 41,
              "sha256": "18d5972090b0293a13054cee5aba8bf8831502f7c20582028c054f68a63a79b3"
            },
            {
              "frame": 42,
              "sha256": "bed9cbd6026088c2e8fe42ee6a907ced5b1b2f7f73e5f4d7d5c3254fb950d88d"
            },
            {
              "frame": 43,
              "sha256": "3a7a7c0facd3ac742a88eec60f25adf22c40fad7aaeb94138c695af6cd60358c"
            },
            {
              "frame": 44,
              "sha256": "add49db872d6670dd94031adf350f0a1296a989a5638e958cb7067cdae728c54"
            },
            {
              "frame": 45,
              "sha256": "3769707525888e1be491fe0073dddd7b76d2175074aca253437022d8432e18bc"
            },
            {
              "frame": 46,
              "sha256": "db78c03aee5fdbc72ff48b267da22e9727a665e4548e452da752024cb6a5594c"
            },
            {
              "frame": 47,
              "sha256": "815c86a87229346f97554d681ae7a986d6967724b4ae5f8a0cb6f162a9696f66"
            },
            {
              "frame": 48,
              "sha256": "26898b42d70e970db0edd0dc71e7476a55b2e2fb7ffbc4e96b2940cc32fc234f"
            },
            {
              "frame": 49,
              "sha256": "599693f13f7405cbb492532acc48b9cb5abaeedbdae9e4ff638259ba8b242a44"
            },
            {
              "frame": 50,
              "sha256": "1201e58f95730b4037dd6596a1554f5aaef62efbcc490972307460d6337bc187"
            },
            {
              "frame": 51,
              "sha256": "b93b08c858853b1d3bdbf0749de157f5513d16c9b25e70d922e2f55027eb38c4"
            },
            {
              "frame": 52,
              "sha256": "4a1e3eb8979166e49317d5cdbb965d8f479a9c12bb1104a9482476b6f1ddbb95"
            },
            {
              "frame": 53,
              "sha256": "9561cd017f2fb7d8e4d3110fa3fa6adca078951f73c63944cb64f60771e04b50"
            },
            {
              "frame": 54,
              "sha256": "7acf3373b00c9574e81b01a7b079d9eb7cf85594824a4d88e9e7fd4373cf3bb4"
            },
            {
              "frame": 55,
              "sha256": "3b17fc5e1ec8baa0d7a68ef99a41a4437ca92f2f8f823788b47b968ce2815dd9"
            },
            {
              "frame": 56,
              "sha256": "85546b712abae979b64aac9dd840a36bb2cd0f7e767a866a4ec7f99b9cad9108"
            },
            {
              "frame": 57,
              "sha256": "2ede16c76345f69c713b132712b391e43f84efbac87d53feb201e9718cff0ba6"
            },
            {
              "frame": 58,
              "sha256": "c1aeffe5231b4c19a2308e45c52f58a9ffbbaa4c6859749c48b55e17358ab2b5"
            },
            {
              "frame": 59,
              "sha256": "765fc5473032e9921e530955a0b08b30bae4954a3527905a28f80075fcb48fdd"
            },
            {
              "frame": 60,
              "sha256": "c162aed7175163bfe6fd84f8df2d6a0aedf29ada9dda55adeb5ba18dc5d12720"
            },
            {
              "frame": 61,
              "sha256": "83d6277920728188e9c55786244c3ab7130aef5e542b75bdebb883ffe37b8bd5"
            },
            {
              "frame": 62,
              "sha256": "995df31edde0a3c2405c6740b63e7156297642c2e0ff31e5b261c4ff02f7bced"
            },
            {
              "frame": 63,
              "sha256": "ca1f58049b4418c0c083ec2baeba692a39880564e3a9a7e8b23916859394d028"
            },
            {
              "frame": 64,
              "sha256": "e874935787d2833e135da9bbc0826f8dd5384a1c1d372c7147a37369d41e971e"
            },
            {
              "frame": 65,
              "sha256": "6fffd2608abdebd367f1a79458bec60482882dc4ca0e1bf29909d7f2dc6f7ec7"
            },
            {
              "frame": 66,
              "sha256": "7d7ab78c0af76d2e933aba09aa30ac5ca3bc3bf3da8f98d6a9aeb27ee910cd2b"
            },
            {
              "frame": 67,
              "sha256": "eddafab10c7468b722c1bf25e27dcd8e3a5211b7ff378e0e77681351a5580d82"
            },
            {
              "frame": 68,
              "sha256": "14e2e07f2426d171d6ab9e200128dc02f6046add880fcd1fe81233ff6c18f5c8"
            },
            {
              "frame": 69,
              "sha256": "1ed8604463bd2cc00be867e3295378dc3228ecbacb08640407cf7fe6ca1a7521"
            },
            {
              "frame": 70,
              "sha256": "710d39d66abef5ad2c596c23f99d448009f89e64e4c6568202f262ecaa36d7ef"
            },
            {
              "frame": 71,
              "sha256": "0df609cfcc708d222b2249290a5eb8232e502ff6a1056987143eee49bbd3b254"
            },
            {
              "frame": 72,
              "sha256": "6b82076fb65e38e140e5edfe7da34ff9515719fda5796ccff6cb154c45945cfc"
            },
            {
              "frame": 73,
              "sha256": "2b7fc5e20e79dd9587fb2e05090a221900648a89cf9af2b85c44d7b4bf8fce58"
            },
            {
              "frame": 74,
              "sha256": "f790d7f0e6ac6f9c731c27685771581ad644f7767bc69d692f064c1b2832b7d4"
            },
            {
              "frame": 75,
              "sha256": "9d902084d73f1f595e062baeb5fd080aa5b1f7e58827bf26f9bfd38b2d9e55bd"
            },
            {
              "frame": 76,
              "sha256": "4f5b00e7d403233375e1efd70b3f215fe754120361bd6a6317ccbf95dd487f1b"
            },
            {
              "frame": 77,
              "sha256": "62eae979135a8e02fe21bc0388ca3cd7e676974392711f83bcea8db1c29b112e"
            },
            {
              "frame": 78,
              "sha256": "d3b7943e7ef55d99a40db85130ad32c172a74584215db84e639407444aa69906"
            },
            {
              "frame": 79,
              "sha256": "c3b108e22b26f1c58c05036a73680c6452074ecf9398d70cd21aa92e6a2f2996"
            },
            {
              "frame": 80,
              "sha256": "624d0da21f8474573d4b3d834d899b855b47c005f925fb51c0c7a51967d63a50"
            },
            {
              "frame": 81,
              "sha256": "752545608553969779892714854a59382f385bae461f195e13a25982a4dc0222"
            },
            {
              "frame": 82,
              "sha256": "939f21f5228ed15d87a199c695bf8257a556764e699903680f2381d98b674eac"
            },
            {
              "frame": 83,
              "sha256": "6ec830673fb518204e791c84579d176c86c25b68c70306a746e53cfee901b031"
            },
            {
              "frame": 84,
              "sha256": "4773d4da7ffd99541d6ae9fa339831712f097b4a76c75b2e505ccc86e63721b3"
            },
            {
              "frame": 85,
              "sha256": "b97c90d7d740ed0f6045354173dd85262ce389f1443d4c7e8c737e2d0ed45284"
            },
            {
              "frame": 86,
              "sha256": "0a6b0999fdae354ba21ec3617414518adc50aa2bb7c20ffa052c4ab3bc69f125"
            },
            {
              "frame": 87,
              "sha256": "6f046ee5f3056829d4976aed7b877b68c593baabd2d1d281ce0fd59367063d73"
            },
            {
              "frame": 88,
              "sha256": "f3c44b56a5787c3a74721c3e544e1d72910f5661a84a1a8aeec0c2041432cec6"
            },
            {
              "frame": 89,
              "sha256": "38e61b419688389662beacc0691f2bb6e6c90b419dfa626c3d4347b55351d365"
            },
            {
              "frame": 90,
              "sha256": "8197bc1f989dd0a24c037a5c33782e84c9431c25c46fd37af8eb6bec31ba96dd"
            },
            {
              "frame": 91,
              "sha256": "01d979287ea5a569d27573c3cde0fa49d37ad01739eedb0045d3576662a22402"
            },
            {
              "frame": 92,
              "sha256": "3fdf879fed9622596a3b9a0f4340b93e82d70ec508b52807a0edefec49c337ad"
            },
            {
              "frame": 93,
              "sha256": "ae93096798dc290afc396a64dda7f566b4f39816890cea4fa579c2073508dc59"
            },
            {
              "frame": 94,
              "sha256": "8d19edc7e01f214b8898673067f3b2b06e8e17e791dd878d8744ab45ca6f4ce0"
            },
            {
              "frame": 95,
              "sha256": "81dc159cfa4a18ca9609251827a89e7cc3e80d0b465d79bd63d915b5671d965c"
            },
            {
              "frame": 96,
              "sha256": "b6f594551154d6df79e0b1e355dfbfc22189f02d6bb71696a2bcc8e63824baf5"
            },
            {
              "frame": 97,
              "sha256": "b435b04f93e3a95fc2210c50dbc6c12115379603453788a3e0384e1be3168d8b"
            },
            {
              "frame": 98,
              "sha256": "d9ffc5b9e4a4103da54468daee99933ceed023fbaf9c2785dda1f9207412207d"
            },
            {
              "frame": 99,
              "sha256": "38355eeb37d0a3fce1d425fdb8e335e06d49f13c5a29920aa90bcae95b3646b0"
            },
            {
              "frame": 100,
              "sha256": "1fd335ae9dfbbaa4dca429a6bd1d2f11752cae73bc0400fe794b565d4ed03afe"
            },
            {
              "frame": 101,
              "sha256": "ca9aa1113ce546e66714b3475928427fc8ea9484a7b361ce0963e177ced71db1"
            },
            {
              "frame": 102,
              "sha256": "78eef9c5cf274faceeab26abc7dc147af980da570ca11ea4ed41706a868d0224"
            },
            {
              "frame": 103,
              "sha256": "a7c5b22dca0ab1868f553b7b9e42bc5d33bc141989f1c742f40f255b549bf30b"
            },
            {
              "frame": 104,
              "sha256": "e5c7d57f64c6bed171f6644f5ac76c0ad69ab3dd531adec7dcc625dfd617e7e7"
            },
            {
              "frame": 105,
              "sha256": "c627a43fda77fa8dc177c87daec9229ad9d10418f5f2806171d35f6edf223da0"
            },
            {
              "frame": 106,
              "sha256": "8344c39c26ccfc048dc4ba9f60b762f0c7f30db7a253a00871079b0f4bc0a434"
            },
            {
              "frame": 107,
              "sha256": "c488445db0a08d086201661863918c326f9ee090de90ee74b994f3c3b04fec32"
            },
            {
              "frame": 108,
              "sha256": "71d06bb1d05eed19b82d9875b60e5543ae3fe691ec3ba0e8e4744e76ce45f1eb"
            },
            {
              "frame": 109,
              "sha256": "dd35fd076995653ef5ba1dee52029eaa74eb093f97ef9a93099fbd23fc2faffd"
            },
            {
              "frame": 110,
              "sha256": "55bc4b426d2b06716913817ff162ed0272e271740edfd77ff9dc00de8bb080ac"
            },
            {
              "frame": 111,
              "sha256": "2248ac192c0b3f3b934e62b64dcc569a66df69ab09a1a252482d881e6163fca9"
            },
            {
              "frame": 112,
              "sha256": "b0baadd2aa0c7bcadd0fa3b4f716ca638469b5f8ce844d777102cdfcf08a6bdc"
            },
            {
              "frame": 113,
              "sha256": "ef51bb8ed3931320eec2504853e491d148c322f6dc7af3199a88502d3cf495fe"
            },
            {
              "frame": 114,
              "sha256": "a9995f5b20499cdd6d07b6bb85d025b207da3d44b357fd433775af5e8d5c15a6"
            },
            {
              "frame": 115,
              "sha256": "c1b2aafc22e997a857366d232e2de7a317dfc6e1dc4fae57361455fe56414be4"
            },
            {
              "frame": 116,
              "sha256": "e1da0d9e9f1a067cad4b718d8c7325c26450d5cc149b9b67c425114052a0c7b5"
            },
            {
              "frame": 117,
              "sha256": "230b369a5ec0b7595c5cb8f6e8c9b46adbbbe6f88311087037ddc1c4b1f5d106"
            },
            {
              "frame": 118,
              "sha256": "19deeffb195278a45c842e8afb67a35af44c1500a49a2465e1e0786a3d3633f5"
            },
            {
              "frame": 119,
              "sha256": "34b30b823e2af6df5efc22220636d80061761ebfbb0e8806902727ee39d4d7f6"
            }
          ]
        },
        "bead": {
          "path": "public/images/new-media-v2/motion-lab/coral-bead.png",
          "sha256": "85f9ee5dd018b63f3c0d0446c297a141182074d81f793b207e0651ba83d8587a",
          "size": [
            640,
            640
          ],
          "blendCache": ".cache/motion-lab-assets/bead.blend",
          "renderSeconds": 18.297,
          "radius": 0.49,
          "material": "Coral-red glazed ceramic",
          "geometry": "Same topology and framing as heart-to-bead morph endpoint"
        },
        "edge": {
          "path": "public/images/new-media-v2/motion-lab/cat-display-edge.png",
          "sha256": "64a4cc5ac29d45a0ad1f382393c1f6d43f994bd466ae582782867e67c334ff38",
          "size": [
            1152,
            1152
          ],
          "blendCache": ".cache/motion-lab-assets/edge.blend",
          "renderSeconds": 114.714,
          "yawDegrees": 35,
          "boardDimensions": [
            1.8,
            0.145,
            2.55
          ],
          "sourceSize": [
            1145,
            1374
          ],
          "imagePlaneSize": [
            1.55,
            1.8600000000000003
          ]
        },
        "heart": {
          "path": "public/images/new-media-v2/motion-lab/coral-heart.png",
          "sha256": "a0805b0a8c9873b5c90b3c45d8a248475d65f4a113a330bad661b5bba6150a37",
          "size": [
            1024,
            1024
          ],
          "blendCache": ".cache/motion-lab-assets/heart.blend",
          "renderSeconds": 36.57,
          "material": "Coral-red glazed ceramic",
          "maximumThickness": 0.5,
          "geometry": "Same closed UV topology and framing as heart-to-bead morph start"
        }
      },
      "generator": "scripts/generate-motion-lab-assets.py",
      "generatorSha256": "e42f9a6aacd856fb6b16acf5497029e25f75dba070f6de66d292c27f448c201c",
      "blenderVersion": "4.3.2",
      "blenderPythonVersion": "3.13.5",
      "renderEngine": "Cycles CPU",
      "threads": 2,
      "samples": 64,
      "seed": 271828,
      "denoise": false,
      "transparentFilm": true,
      "output": "RGBA PNG, 8-bit",
      "denoiseUnavailableReason": "System Blender build has no OpenImageDenoise support; verified by initial failed render.",
      "colorManagement": "AgX / Medium High Contrast / exposure +0.15",
      "lighting": "Large warm softbox 620W/4.2; cool front fill115W/3.5; weak cool edge95W/2.5",
      "catSource": {
        "path": "public/images/new-media-v2/kitten-study.png",
        "sha256": "c9323eafa7cec497714b16f57ffeeade8c0cf86ea817cd55236b350f6cb6ee70"
      },
      "notes": "Direct Blender output. No image editing, generated background, UI, text or paid API."
    },
    "audio": {
      "schema": "motion-lab-audio-v1",
      "status": "generated-and-verified",
      "durationSeconds": 20,
      "sampleRate": 48000,
      "channels": 2,
      "addedVoiceover": false,
      "sourcePurityOrVocalContentAssessed": false,
      "musicBed": {
        "sourceType": "user-supplied-bgm-file",
        "sourceFile": "/workspace/attachments/fbe8109f-0ab9-4284-ac06-71a509607930/bgm.mp4",
        "sourceFileSha256": "d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59",
        "originalUserUploadSha256": "d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59",
        "sourceAudioMetadata": {
          "codec_name": "aac",
          "sample_rate": "44100",
          "channels": 1,
          "duration": "133.073560"
        },
        "sourceChannels": 1,
        "outputChannels": 2,
        "referenceSceneSeconds": [
          28,
          48
        ],
        "referenceToMusicOffsetSeconds": 0.048,
        "sourceExcerptSeconds": [
          28.048,
          48.048
        ],
        "gainDb": -7.7,
        "fadeInSeconds": 0.06,
        "fadeOutSeconds": 0.06,
        "looping": false,
        "tempoChanged": false,
        "eqOrCompressionApplied": false,
        "localDuckingApplied": false,
        "measurementAfterFixedGainAndFades": {
          "integratedLoudnessLUFS": -16.5,
          "truePeakDbTP": -6.3
        }
      },
      "originalSfx": {
        "seed": 2026102203,
        "downloadedSamplesUsed": false,
        "eventCount": 9,
        "events": [
          {
            "name": "ceramic-heart",
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/ceramic-heart.wav",
            "sourceFileSha256": "33936aaf9e6b08ce101ae8e6169f691830946b678f613104fbe92afecdcb1818",
            "startSeconds": 0.65,
            "endSeconds": 0.91,
            "durationSeconds": 0.26,
            "requestedPeakDbFS": -24,
            "purpose": "One light ceramic contact as the heart lands"
          },
          {
            "name": "paper-air-arc",
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/paper-air-arc.wav",
            "sourceFileSha256": "e56cfd50c5662a4d13db1f929636c25ceed51df3b9a38c088b5af8013f100f4d",
            "startSeconds": 3.15,
            "endSeconds": 5.2,
            "durationSeconds": 2.05,
            "requestedPeakDbFS": -28,
            "purpose": "Soft paper/air arc while the cat display leaves"
          },
          {
            "name": "bead-gather",
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/bead-gather.wav",
            "sourceFileSha256": "67c202fbb919962b3049a972bc997c4dd0dbcf70aed1e64fd127c9ddfd18c3fc",
            "startSeconds": 6.1,
            "endSeconds": 8.1,
            "durationSeconds": 2,
            "requestedPeakDbFS": -28,
            "purpose": "Fine particles converge as the heart becomes a bead"
          },
          {
            "name": "pause-contact",
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/pause-contact.wav",
            "sourceFileSha256": "9681a1037ebdf2ccee2310bedaba07a697e69657e2585f27753bfeaf1897b075",
            "startSeconds": 11.25,
            "endSeconds": 11.43,
            "durationSeconds": 0.18,
            "requestedPeakDbFS": -27,
            "purpose": "A small pause trigger, not a per-character accent"
          },
          {
            "name": "replay-brush",
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/replay-brush.wav",
            "sourceFileSha256": "88396d8171526e33ddcd261c23a672f952c12a983c40dfd7430944a77c966a6b",
            "startSeconds": 12.2,
            "endSeconds": 12.47,
            "durationSeconds": 0.27,
            "requestedPeakDbFS": -30,
            "purpose": "A small replay brush"
          },
          {
            "name": "like-contact",
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/like-contact.wav",
            "sourceFileSha256": "e1478b6b5ba2bbda234efd8501d385ad79674bf26f8e9e220c6c42815b48be8b",
            "startSeconds": 13.1,
            "endSeconds": 13.33,
            "durationSeconds": 0.23,
            "requestedPeakDbFS": -27,
            "purpose": "A small like trigger related to the opening heart"
          },
          {
            "name": "bead-travel",
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/bead-travel.wav",
            "sourceFileSha256": "639f2cb546f9cb3ed378cdbdfe5cafe93cfa4d4acecca9f9aa303b685e8641dd",
            "startSeconds": 14.2,
            "endSeconds": 17.3,
            "durationSeconds": 3.1,
            "requestedPeakDbFS": -30,
            "purpose": "Sparse rolling grains as the bead enters the record band"
          },
          {
            "name": "record-arrival",
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/record-arrival.wav",
            "sourceFileSha256": "4c950121f23c772e06d07e2687785bc36654880e3a38f0b4693f3294c55ef295",
            "startSeconds": 17.3,
            "endSeconds": 17.6,
            "durationSeconds": 0.3,
            "requestedPeakDbFS": -25,
            "purpose": "Warm tactile arrival, without a success cue"
          },
          {
            "name": "branch-air",
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/branch-air.wav",
            "sourceFileSha256": "97d93b1506e4c4542b838e84843c1a4452c93eec4cf768265c6706ad949a5daa",
            "startSeconds": 17.8,
            "endSeconds": 19.1,
            "durationSeconds": 1.3,
            "requestedPeakDbFS": -32,
            "purpose": "A small amount of air in the branching outflow"
          }
        ],
        "sfxMasterGainLinear": 1,
        "sfxMasterGainDb": 0,
        "peakManagement": "Only added SFX may be attenuated statically; BGM fixed gain is preserved",
        "quietWindows": [
          {
            "fromSeconds": 8.3,
            "toSeconds": 11,
            "reason": "Question segment: strictly no added SFX",
            "actualPcmAllZero": true
          },
          {
            "fromSeconds": 19.1,
            "toSeconds": 20,
            "reason": "Stable final hold: strictly no added SFX",
            "actualPcmAllZero": true
          }
        ]
      },
      "generator": {
        "file": "scripts/generate-motion-lab-audio.py",
        "sha256": "a0f68b1b8879cf64e3369a8cc3f82f1e0bf0bd007a3ae9994af6e108b36686ac",
        "measurementHelper": "scripts/generate-new-media-v2-review-sfx.py",
        "measurementHelperSha256": "fcaa8d56f05a8c2e8f3f4e53c49525e44b3cb529c7c66f1a42524e56b56b3564",
        "dependencies": "Python standard library and system FFmpeg/ffprobe; no paid services"
      },
      "outputs": {
        "public/audio/new-media-v2/motion-lab/mix.wav": {
          "codec_name": "pcm_s16le",
          "sample_rate": "48000",
          "channels": 2,
          "duration": "20.000000",
          "frames": 960000,
          "samplePeakDbFS": -6.3139,
          "integratedLoudnessLUFS": -16.5,
          "truePeakDbTP": -6.3,
          "firstAndLastStereoFrameZero": true,
          "fullDecode": "passed",
          "sha256": "ca54a4a13b87cbe1b66f7920c4f1b3c74e2a3a3b4a5268228682c73d8f13e47e"
        },
        "public/audio/new-media-v2/motion-lab/sfx-only.wav": {
          "codec_name": "pcm_s16le",
          "sample_rate": "48000",
          "channels": 2,
          "duration": "20.000000",
          "frames": 960000,
          "samplePeakDbFS": -24.0022,
          "integratedLoudnessLUFS": -40.4,
          "truePeakDbTP": -24,
          "firstAndLastStereoFrameZero": true,
          "fullDecode": "passed",
          "sha256": "cedcc4b9a4adb17469e316f931f5882e86cc26788ac63ad44e21a9afa5983ea5"
        }
      },
      "standaloneMusicPublished": false,
      "generatedAudioDirectoryGitIgnored": true
    },
    "refinements": {
      "status": "authored-refinement-parameters-after-actual-snapshot-review",
      "userApprovalOfEachNumericValue": false,
      "originalStoryboardMutated": false,
      "reviewEvidence": [
        ".cache/motion-lab/review/review-beats.jpg",
        ".cache/motion-lab/exit-review/contact-sheet-1.jpg",
        ".cache/motion-lab/exit-review/contact-sheet-2.jpg"
      ],
      "refinements": [
        {
          "id": "single-board-projection",
          "reason": "3.433–3.6s actual crossfade shows double cats and frame edges",
          "method": "Use only rendered hero board; one perspective-projected image. Do not present as full 3D turntable. Edge still retained as unused authored asset.",
          "heroOpacity": 1,
          "edgeOpacity": 0,
          "perspectivePx": 1100,
          "rotationYDegreesAtExit": -24,
          "rotationZDegrees": "-3*peel-16*peel^2.15",
          "localRangeSeconds": [
            3.15,
            4.4
          ],
          "exitDistancePx": [
            -420,
            -1145
          ]
        },
        {
          "id": "retained-stay-orbit",
          "reason": "10s actual frame lacks inherited spatial reference",
          "centerPx": [
            960,
            430
          ],
          "radiusPx": 215,
          "startDegrees": -65,
          "sweepDegrees": 287,
          "strokePx": 8,
          "strokeColor": "#809887",
          "maxOpacity": 0.38,
          "revealSeconds": [
            6.1,
            8.1
          ],
          "retireSeconds": [
            11.5,
            13.8
          ],
          "questionCameraScaleFromTo": [
            1,
            1.08
          ],
          "questionCameraMoveSeconds": [
            8.3,
            9.3
          ],
          "questionCameraReturnSeconds": [
            10.7,
            11.6
          ]
        },
        {
          "id": "existing-aggregate-depth",
          "reason": "18s actual frame has two lone paths and too few population signals",
          "geometry": "Retained top/bottom rails, equal arc-length. All population beads follow current morphing rail.",
          "revealSeconds": [
            14.8,
            15.8
          ],
          "beads": [
            {
              "id": "population-00",
              "rail": "top",
              "arcFraction": 0.06,
              "radiusPx": 8,
              "opacity": 0.32
            },
            {
              "id": "population-01",
              "rail": "bottom",
              "arcFraction": 0.06,
              "radiusPx": 11,
              "opacity": 0.52
            },
            {
              "id": "population-02",
              "rail": "top",
              "arcFraction": 0.129,
              "radiusPx": 15,
              "opacity": 0.78
            },
            {
              "id": "population-03",
              "rail": "bottom",
              "arcFraction": 0.129,
              "radiusPx": 10,
              "opacity": 0.4
            },
            {
              "id": "population-04",
              "rail": "top",
              "arcFraction": 0.198,
              "radiusPx": 13,
              "opacity": 0.32
            },
            {
              "id": "population-05",
              "rail": "bottom",
              "arcFraction": 0.198,
              "radiusPx": 17,
              "opacity": 0.52
            },
            {
              "id": "population-06",
              "rail": "top",
              "arcFraction": 0.267,
              "radiusPx": 8,
              "opacity": 0.78
            },
            {
              "id": "population-07",
              "rail": "bottom",
              "arcFraction": 0.267,
              "radiusPx": 11,
              "opacity": 0.4
            },
            {
              "id": "population-08",
              "rail": "top",
              "arcFraction": 0.336,
              "radiusPx": 15,
              "opacity": 0.32
            },
            {
              "id": "population-09",
              "rail": "bottom",
              "arcFraction": 0.336,
              "radiusPx": 10,
              "opacity": 0.52
            },
            {
              "id": "population-10",
              "rail": "top",
              "arcFraction": 0.405,
              "radiusPx": 13,
              "opacity": 0.78
            },
            {
              "id": "population-11",
              "rail": "bottom",
              "arcFraction": 0.405,
              "radiusPx": 17,
              "opacity": 0.4
            },
            {
              "id": "population-12",
              "rail": "top",
              "arcFraction": 0.474,
              "radiusPx": 8,
              "opacity": 0.32
            },
            {
              "id": "population-13",
              "rail": "bottom",
              "arcFraction": 0.474,
              "radiusPx": 11,
              "opacity": 0.52
            },
            {
              "id": "population-14",
              "rail": "top",
              "arcFraction": 0.543,
              "radiusPx": 15,
              "opacity": 0.78
            },
            {
              "id": "population-15",
              "rail": "bottom",
              "arcFraction": 0.543,
              "radiusPx": 10,
              "opacity": 0.4
            },
            {
              "id": "population-16",
              "rail": "top",
              "arcFraction": 0.612,
              "radiusPx": 13,
              "opacity": 0.32
            },
            {
              "id": "population-17",
              "rail": "bottom",
              "arcFraction": 0.612,
              "radiusPx": 17,
              "opacity": 0.52
            },
            {
              "id": "population-18",
              "rail": "top",
              "arcFraction": 0.681,
              "radiusPx": 8,
              "opacity": 0.78
            },
            {
              "id": "population-19",
              "rail": "bottom",
              "arcFraction": 0.681,
              "radiusPx": 11,
              "opacity": 0.4
            },
            {
              "id": "population-20",
              "rail": "top",
              "arcFraction": 0.75,
              "radiusPx": 15,
              "opacity": 0.32
            },
            {
              "id": "population-21",
              "rail": "bottom",
              "arcFraction": 0.75,
              "radiusPx": 10,
              "opacity": 0.52
            },
            {
              "id": "population-22",
              "rail": "top",
              "arcFraction": 0.819,
              "radiusPx": 13,
              "opacity": 0.78
            },
            {
              "id": "population-23",
              "rail": "bottom",
              "arcFraction": 0.819,
              "radiusPx": 17,
              "opacity": 0.4
            }
          ],
          "depthStrokeWidthPx": 18,
          "edgeStrokeWidthPx": 2.8,
          "primaryRailStrokeWidthPx": 9,
          "fixedBranchPaths": [
            "M245 260 C365 260 390 355 485.255 329.704",
            "M280 650 C410 650 445 580 563.393 574.293",
            "M1568.752 312.897 C1680 305 1700 220 1770 220",
            "M1568.655 552.852 C1670 560 1700 675 1770 675"
          ],
          "branchStrokePx": 7,
          "branchOpacity": 0.32,
          "outputBranchRevealAfterSeconds": 18.15,
          "branchAttachment": {
            "inputArcSampleIndices": [
              29,
              38
            ],
            "outputArcSampleIndex": 90,
            "followDeformingParent": true
          }
        },
        {
          "id": "source-legibility",
          "sourceLabelExitSeconds": [
            14.55,
            15.05
          ],
          "replayArrowPath": "M1290 337 L1317 345 L1307 373",
          "arcRevealBeforeSemanticActivation": false
        }
      ]
    },
    "events": {
      "inputs": [
        {
          "id": "pause",
          "launch": 14.3,
          "arrival": 16.1,
          "recordAt": 16.1
        },
        {
          "id": "replay",
          "launch": 14.7,
          "arrival": 16.6,
          "recordAt": 16.6
        },
        {
          "id": "like",
          "launch": 15.5,
          "arrival": 17.25,
          "recordAt": 17.25
        }
      ],
      "recordActivation": 16.1,
      "outputStart": 17.5,
      "outputSettled": 19.13,
      "originalSfx": [
        {
          "name": "ceramic-heart",
          "sourceType": "original-deterministic-programmatic-material-synthesis",
          "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/ceramic-heart.wav",
          "sourceFileSha256": "33936aaf9e6b08ce101ae8e6169f691830946b678f613104fbe92afecdcb1818",
          "startSeconds": 0.65,
          "endSeconds": 0.91,
          "durationSeconds": 0.26,
          "requestedPeakDbFS": -24,
          "purpose": "One light ceramic contact as the heart lands"
        },
        {
          "name": "paper-air-arc",
          "sourceType": "original-deterministic-programmatic-material-synthesis",
          "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/paper-air-arc.wav",
          "sourceFileSha256": "e56cfd50c5662a4d13db1f929636c25ceed51df3b9a38c088b5af8013f100f4d",
          "startSeconds": 3.15,
          "endSeconds": 5.2,
          "durationSeconds": 2.05,
          "requestedPeakDbFS": -28,
          "purpose": "Soft paper/air arc while the cat display leaves"
        },
        {
          "name": "bead-gather",
          "sourceType": "original-deterministic-programmatic-material-synthesis",
          "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/bead-gather.wav",
          "sourceFileSha256": "67c202fbb919962b3049a972bc997c4dd0dbcf70aed1e64fd127c9ddfd18c3fc",
          "startSeconds": 6.1,
          "endSeconds": 8.1,
          "durationSeconds": 2,
          "requestedPeakDbFS": -28,
          "purpose": "Fine particles converge as the heart becomes a bead"
        },
        {
          "name": "pause-contact",
          "sourceType": "original-deterministic-programmatic-material-synthesis",
          "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/pause-contact.wav",
          "sourceFileSha256": "9681a1037ebdf2ccee2310bedaba07a697e69657e2585f27753bfeaf1897b075",
          "startSeconds": 11.25,
          "endSeconds": 11.43,
          "durationSeconds": 0.18,
          "requestedPeakDbFS": -27,
          "purpose": "A small pause trigger, not a per-character accent"
        },
        {
          "name": "replay-brush",
          "sourceType": "original-deterministic-programmatic-material-synthesis",
          "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/replay-brush.wav",
          "sourceFileSha256": "88396d8171526e33ddcd261c23a672f952c12a983c40dfd7430944a77c966a6b",
          "startSeconds": 12.2,
          "endSeconds": 12.47,
          "durationSeconds": 0.27,
          "requestedPeakDbFS": -30,
          "purpose": "A small replay brush"
        },
        {
          "name": "like-contact",
          "sourceType": "original-deterministic-programmatic-material-synthesis",
          "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/like-contact.wav",
          "sourceFileSha256": "e1478b6b5ba2bbda234efd8501d385ad79674bf26f8e9e220c6c42815b48be8b",
          "startSeconds": 13.1,
          "endSeconds": 13.33,
          "durationSeconds": 0.23,
          "requestedPeakDbFS": -27,
          "purpose": "A small like trigger related to the opening heart"
        },
        {
          "name": "bead-travel",
          "sourceType": "original-deterministic-programmatic-material-synthesis",
          "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/bead-travel.wav",
          "sourceFileSha256": "639f2cb546f9cb3ed378cdbdfe5cafe93cfa4d4acecca9f9aa303b685e8641dd",
          "startSeconds": 14.2,
          "endSeconds": 17.3,
          "durationSeconds": 3.1,
          "requestedPeakDbFS": -30,
          "purpose": "Sparse rolling grains as the bead enters the record band"
        },
        {
          "name": "record-arrival",
          "sourceType": "original-deterministic-programmatic-material-synthesis",
          "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/record-arrival.wav",
          "sourceFileSha256": "4c950121f23c772e06d07e2687785bc36654880e3a38f0b4693f3294c55ef295",
          "startSeconds": 17.3,
          "endSeconds": 17.6,
          "durationSeconds": 0.3,
          "requestedPeakDbFS": -25,
          "purpose": "Warm tactile arrival, without a success cue"
        },
        {
          "name": "branch-air",
          "sourceType": "original-deterministic-programmatic-material-synthesis",
          "sourceFile": "public/audio/new-media-v2/motion-lab/sfx/branch-air.wav",
          "sourceFileSha256": "97d93b1506e4c4542b838e84843c1a4452c93eec4cf768265c6706ad949a5daa",
          "startSeconds": 17.8,
          "endSeconds": 19.1,
          "durationSeconds": 1.3,
          "requestedPeakDbFS": -32,
          "purpose": "A small amount of air in the branching outflow"
        }
      ],
      "quietWindows": [
        {
          "fromSeconds": 8.3,
          "toSeconds": 11,
          "reason": "Question segment: strictly no added SFX",
          "actualPcmAllZero": true
        },
        {
          "fromSeconds": 19.1,
          "toSeconds": 20,
          "reason": "Stable final hold: strictly no added SFX",
          "actualPcmAllZero": true
        }
      ]
    }
  },
  "integrity": {
    "approvedCopyAlgorithm": "SHA-256 of UTF-8 approvedCopyUnits.join(\"\\n\"), no trailing newline",
    "approvedCopySha256": "9325dc02fb91a2bbc993e52b24372c2a17cb8eb9ff6b6d7673fce9e4b4d60773",
    "sourceDocumentCount": 10
  },
  "assetInventory": [
    {
      "sourceJsonPath": "$.sample.assets.assets.hero.path",
      "logicalPath": "public/images/new-media-v2/motion-lab/cat-display-hero.png",
      "byteLength": 1401524,
      "sha256": "c091ab158448ff5039f11730c9aab2876b89df815245e3382a35a569dcfb342a"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[0]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-000.png",
      "byteLength": 139193,
      "sha256": "5c47cfffbc1119410f2ca97f499a891cdea98c7db45cf19d2143ed1bd48d7740"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[1]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-001.png",
      "byteLength": 139338,
      "sha256": "b3bcc742106b9e62efe845dc8353746eaebdf9992725fedd2059bb88326e33d4"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[2]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-002.png",
      "byteLength": 139286,
      "sha256": "4634de72687cd5875572bf3e74855c2068067200fb36030b6d17260d00e6f28d"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[3]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-003.png",
      "byteLength": 139315,
      "sha256": "7b33f1330b5714d2023fae694b47da73a255483628fb6575d8180e477466b08b"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[4]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-004.png",
      "byteLength": 139306,
      "sha256": "e2a0c69c70cc968f88d9ad930b32f26d71f6312ed13fc43af136847c9ea523b9"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[5]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-005.png",
      "byteLength": 139188,
      "sha256": "4f88a09b1d66103f0f734f6d258dbbc35c041391201b061835531c2bcfa6eaaf"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[6]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-006.png",
      "byteLength": 139081,
      "sha256": "c430dd3458ef7be3a2504325a8b1e872fe24122d9c451684d3c7359f3d6e7018"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[7]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-007.png",
      "byteLength": 139009,
      "sha256": "6e0f5d10e1f668549f34c7d17008bad2e5d5bb1db9bd85e47a22a6efe90f8540"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[8]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-008.png",
      "byteLength": 139371,
      "sha256": "c013f72249bfb5398a572a04b2440b9229af9bbcc79279272f51b65955fb19f6"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[9]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-009.png",
      "byteLength": 139041,
      "sha256": "96abd6cf968d8450b8b1495bf6576550cf99eacae274a0a08eb5e435373b2c2a"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[10]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-010.png",
      "byteLength": 138912,
      "sha256": "8821963e1b8459b5f48b16efe5561d476120cd6e9bbdce388be797a70e9cf15d"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[11]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-011.png",
      "byteLength": 138515,
      "sha256": "3ab1b5df69a7db63dbd308ebf84a4b1f81f815db63f64d4898b469cd7cdc1387"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[12]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-012.png",
      "byteLength": 138299,
      "sha256": "dbcd4e944a75a9b8d599fe529d79ec8fe1c82a3e6e2f23a544756394f3b4e991"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[13]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-013.png",
      "byteLength": 138520,
      "sha256": "a3a0ac1124159895203ba07b437b87509e674cfd02d7a1db0bb5613c3668f922"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[14]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-014.png",
      "byteLength": 138098,
      "sha256": "d89f831b514aae542e23c861d785405834bde26d84f1fb18e69e0e3dacefa8c4"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[15]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-015.png",
      "byteLength": 138127,
      "sha256": "bb2e14e29ba05cf8675814c711784e22a548166f2a6dcf86261bbcd3d72a6b98"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[16]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-016.png",
      "byteLength": 137773,
      "sha256": "fdedb555ce4fbde757158023ef6639f138e2d482846f833dd2050d92e3c6f700"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[17]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-017.png",
      "byteLength": 137732,
      "sha256": "112eae4ac1e32fff2679124ffbea22f3c70ac0ffcc9aafb1c525053e3b4762b7"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[18]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-018.png",
      "byteLength": 137458,
      "sha256": "987c4c45dbeb7484d1f06a209b675d628ff6a47ffacbaaa4f85b63dbfcda2601"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[19]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-019.png",
      "byteLength": 137080,
      "sha256": "30888a3f9cdda270cc805a1875e1f097e7939e48174c88d0f1bcf8c3878a32a0"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[20]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-020.png",
      "byteLength": 136986,
      "sha256": "a6c2d4bbba51954b262c9f1fa7682daeb494c62c2c73ee1ccb7152705b1615f0"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[21]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-021.png",
      "byteLength": 136467,
      "sha256": "5e27d7e5fa1ce9b2bbef01f6f3edc6180a3245a7424a6ff2f0e252bbd33c4a98"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[22]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-022.png",
      "byteLength": 136555,
      "sha256": "5232e233aa28e6705a0d43fbdaf2af7f1722e889c7af48cbdb47edded5a95c42"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[23]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-023.png",
      "byteLength": 136103,
      "sha256": "99edaf99d7091e7f061a825401ebba9c0b5024ee530f73fbd489654568472f41"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[24]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-024.png",
      "byteLength": 135795,
      "sha256": "d17342375267b88e2841a979bcd69c7631b98476ccf1c0a306698ba15902ea9b"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[25]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-025.png",
      "byteLength": 135495,
      "sha256": "4c86fd7a65f3c04d9afa0334de5fc43d016649a6d74f07c12b55bbd36b08dd76"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[26]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-026.png",
      "byteLength": 135104,
      "sha256": "3653c247ea01c1c37d4f55629e388582cbf9c67155292c8b067baa2378735e9c"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[27]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-027.png",
      "byteLength": 134716,
      "sha256": "9dbffcfa21e378ffc895d91bbdc957e9af944500f28e62f7f3da12b5bff72022"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[28]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-028.png",
      "byteLength": 134678,
      "sha256": "fcc26ba3d3af9be6ad2c67f20c69b63c1087506aa3446c92158ba3d412c78352"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[29]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-029.png",
      "byteLength": 134159,
      "sha256": "761dc8a1e3b5586c0db7e73cdc02d4835d7f952a6ff0c7990aa12e294461b01d"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[30]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-030.png",
      "byteLength": 133900,
      "sha256": "6cf9853d82915517b601192807def589480f6dd78b79d9c706b6b2ffa26397b0"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[31]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-031.png",
      "byteLength": 133568,
      "sha256": "f887cf35f618251dd5f392ce0df9e8febd7e5d4f63608c1c627c8f5032429193"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[32]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-032.png",
      "byteLength": 132985,
      "sha256": "9f1beadabd87e490f4db07992e532f04cfffbb2de354353696b7d49e3eae4024"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[33]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-033.png",
      "byteLength": 132830,
      "sha256": "46ed62626757afb4df09fec394cadce71c430899211b6aff13799e7c468f10f1"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[34]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-034.png",
      "byteLength": 132317,
      "sha256": "a781e31ee62955be2a5549ae4721c17ec3bb88cca795acf10506974901443deb"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[35]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-035.png",
      "byteLength": 131986,
      "sha256": "aa50d97e28ae165914efa13b7b70f5ab35b910df4652b873b662b723338b227c"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[36]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-036.png",
      "byteLength": 131455,
      "sha256": "6c610b8650e7bc80094ab27d95243d8454bf9124f7a82bbd27b05a0b7cba90d4"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[37]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-037.png",
      "byteLength": 131395,
      "sha256": "5f32b1ad55817bfdac6d92235236eb4ce3361414d44cdebebd979c1a970e8675"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[38]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-038.png",
      "byteLength": 130939,
      "sha256": "3ab258e1ef51d95d98ddf16f69135302a6a8c8c697aea7c08a6620dda980e7ce"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[39]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-039.png",
      "byteLength": 130575,
      "sha256": "453f70ffff9ea289bf6c5d8c016357914d39419f2936c456d7d2cc479f366660"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[40]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-040.png",
      "byteLength": 130097,
      "sha256": "3bcb99ab6bd7876526d2c1848f6ee2dd5724cd0c46b498da7065aaddb91562e5"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[41]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-041.png",
      "byteLength": 129618,
      "sha256": "18d5972090b0293a13054cee5aba8bf8831502f7c20582028c054f68a63a79b3"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[42]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-042.png",
      "byteLength": 129510,
      "sha256": "bed9cbd6026088c2e8fe42ee6a907ced5b1b2f7f73e5f4d7d5c3254fb950d88d"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[43]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-043.png",
      "byteLength": 128994,
      "sha256": "3a7a7c0facd3ac742a88eec60f25adf22c40fad7aaeb94138c695af6cd60358c"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[44]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-044.png",
      "byteLength": 128363,
      "sha256": "add49db872d6670dd94031adf350f0a1296a989a5638e958cb7067cdae728c54"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[45]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-045.png",
      "byteLength": 127860,
      "sha256": "3769707525888e1be491fe0073dddd7b76d2175074aca253437022d8432e18bc"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[46]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-046.png",
      "byteLength": 127373,
      "sha256": "db78c03aee5fdbc72ff48b267da22e9727a665e4548e452da752024cb6a5594c"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[47]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-047.png",
      "byteLength": 127214,
      "sha256": "815c86a87229346f97554d681ae7a986d6967724b4ae5f8a0cb6f162a9696f66"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[48]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-048.png",
      "byteLength": 126644,
      "sha256": "26898b42d70e970db0edd0dc71e7476a55b2e2fb7ffbc4e96b2940cc32fc234f"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[49]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-049.png",
      "byteLength": 126379,
      "sha256": "599693f13f7405cbb492532acc48b9cb5abaeedbdae9e4ff638259ba8b242a44"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[50]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-050.png",
      "byteLength": 126078,
      "sha256": "1201e58f95730b4037dd6596a1554f5aaef62efbcc490972307460d6337bc187"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[51]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-051.png",
      "byteLength": 125646,
      "sha256": "b93b08c858853b1d3bdbf0749de157f5513d16c9b25e70d922e2f55027eb38c4"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[52]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-052.png",
      "byteLength": 125218,
      "sha256": "4a1e3eb8979166e49317d5cdbb965d8f479a9c12bb1104a9482476b6f1ddbb95"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[53]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-053.png",
      "byteLength": 124936,
      "sha256": "9561cd017f2fb7d8e4d3110fa3fa6adca078951f73c63944cb64f60771e04b50"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[54]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-054.png",
      "byteLength": 124602,
      "sha256": "7acf3373b00c9574e81b01a7b079d9eb7cf85594824a4d88e9e7fd4373cf3bb4"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[55]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-055.png",
      "byteLength": 124063,
      "sha256": "3b17fc5e1ec8baa0d7a68ef99a41a4437ca92f2f8f823788b47b968ce2815dd9"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[56]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-056.png",
      "byteLength": 123834,
      "sha256": "85546b712abae979b64aac9dd840a36bb2cd0f7e767a866a4ec7f99b9cad9108"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[57]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-057.png",
      "byteLength": 123285,
      "sha256": "2ede16c76345f69c713b132712b391e43f84efbac87d53feb201e9718cff0ba6"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[58]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-058.png",
      "byteLength": 122955,
      "sha256": "c1aeffe5231b4c19a2308e45c52f58a9ffbbaa4c6859749c48b55e17358ab2b5"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[59]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-059.png",
      "byteLength": 122321,
      "sha256": "765fc5473032e9921e530955a0b08b30bae4954a3527905a28f80075fcb48fdd"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[60]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-060.png",
      "byteLength": 122120,
      "sha256": "c162aed7175163bfe6fd84f8df2d6a0aedf29ada9dda55adeb5ba18dc5d12720"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[61]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-061.png",
      "byteLength": 122030,
      "sha256": "83d6277920728188e9c55786244c3ab7130aef5e542b75bdebb883ffe37b8bd5"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[62]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-062.png",
      "byteLength": 121415,
      "sha256": "995df31edde0a3c2405c6740b63e7156297642c2e0ff31e5b261c4ff02f7bced"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[63]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-063.png",
      "byteLength": 121055,
      "sha256": "ca1f58049b4418c0c083ec2baeba692a39880564e3a9a7e8b23916859394d028"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[64]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-064.png",
      "byteLength": 120766,
      "sha256": "e874935787d2833e135da9bbc0826f8dd5384a1c1d372c7147a37369d41e971e"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[65]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-065.png",
      "byteLength": 120303,
      "sha256": "6fffd2608abdebd367f1a79458bec60482882dc4ca0e1bf29909d7f2dc6f7ec7"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[66]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-066.png",
      "byteLength": 120268,
      "sha256": "7d7ab78c0af76d2e933aba09aa30ac5ca3bc3bf3da8f98d6a9aeb27ee910cd2b"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[67]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-067.png",
      "byteLength": 119827,
      "sha256": "eddafab10c7468b722c1bf25e27dcd8e3a5211b7ff378e0e77681351a5580d82"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[68]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-068.png",
      "byteLength": 119312,
      "sha256": "14e2e07f2426d171d6ab9e200128dc02f6046add880fcd1fe81233ff6c18f5c8"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[69]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-069.png",
      "byteLength": 119191,
      "sha256": "1ed8604463bd2cc00be867e3295378dc3228ecbacb08640407cf7fe6ca1a7521"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[70]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-070.png",
      "byteLength": 118637,
      "sha256": "710d39d66abef5ad2c596c23f99d448009f89e64e4c6568202f262ecaa36d7ef"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[71]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-071.png",
      "byteLength": 118467,
      "sha256": "0df609cfcc708d222b2249290a5eb8232e502ff6a1056987143eee49bbd3b254"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[72]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-072.png",
      "byteLength": 118181,
      "sha256": "6b82076fb65e38e140e5edfe7da34ff9515719fda5796ccff6cb154c45945cfc"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[73]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-073.png",
      "byteLength": 117939,
      "sha256": "2b7fc5e20e79dd9587fb2e05090a221900648a89cf9af2b85c44d7b4bf8fce58"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[74]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-074.png",
      "byteLength": 117602,
      "sha256": "f790d7f0e6ac6f9c731c27685771581ad644f7767bc69d692f064c1b2832b7d4"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[75]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-075.png",
      "byteLength": 117258,
      "sha256": "9d902084d73f1f595e062baeb5fd080aa5b1f7e58827bf26f9bfd38b2d9e55bd"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[76]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-076.png",
      "byteLength": 117132,
      "sha256": "4f5b00e7d403233375e1efd70b3f215fe754120361bd6a6317ccbf95dd487f1b"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[77]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-077.png",
      "byteLength": 116903,
      "sha256": "62eae979135a8e02fe21bc0388ca3cd7e676974392711f83bcea8db1c29b112e"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[78]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-078.png",
      "byteLength": 116339,
      "sha256": "d3b7943e7ef55d99a40db85130ad32c172a74584215db84e639407444aa69906"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[79]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-079.png",
      "byteLength": 116287,
      "sha256": "c3b108e22b26f1c58c05036a73680c6452074ecf9398d70cd21aa92e6a2f2996"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[80]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-080.png",
      "byteLength": 115830,
      "sha256": "624d0da21f8474573d4b3d834d899b855b47c005f925fb51c0c7a51967d63a50"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[81]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-081.png",
      "byteLength": 115702,
      "sha256": "752545608553969779892714854a59382f385bae461f195e13a25982a4dc0222"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[82]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-082.png",
      "byteLength": 115648,
      "sha256": "939f21f5228ed15d87a199c695bf8257a556764e699903680f2381d98b674eac"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[83]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-083.png",
      "byteLength": 115351,
      "sha256": "6ec830673fb518204e791c84579d176c86c25b68c70306a746e53cfee901b031"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[84]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-084.png",
      "byteLength": 115232,
      "sha256": "4773d4da7ffd99541d6ae9fa339831712f097b4a76c75b2e505ccc86e63721b3"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[85]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-085.png",
      "byteLength": 115141,
      "sha256": "b97c90d7d740ed0f6045354173dd85262ce389f1443d4c7e8c737e2d0ed45284"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[86]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-086.png",
      "byteLength": 114625,
      "sha256": "0a6b0999fdae354ba21ec3617414518adc50aa2bb7c20ffa052c4ab3bc69f125"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[87]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-087.png",
      "byteLength": 114542,
      "sha256": "6f046ee5f3056829d4976aed7b877b68c593baabd2d1d281ce0fd59367063d73"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[88]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-088.png",
      "byteLength": 114724,
      "sha256": "f3c44b56a5787c3a74721c3e544e1d72910f5661a84a1a8aeec0c2041432cec6"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[89]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-089.png",
      "byteLength": 114244,
      "sha256": "38e61b419688389662beacc0691f2bb6e6c90b419dfa626c3d4347b55351d365"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[90]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-090.png",
      "byteLength": 114195,
      "sha256": "8197bc1f989dd0a24c037a5c33782e84c9431c25c46fd37af8eb6bec31ba96dd"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[91]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-091.png",
      "byteLength": 114035,
      "sha256": "01d979287ea5a569d27573c3cde0fa49d37ad01739eedb0045d3576662a22402"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[92]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-092.png",
      "byteLength": 113941,
      "sha256": "3fdf879fed9622596a3b9a0f4340b93e82d70ec508b52807a0edefec49c337ad"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[93]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-093.png",
      "byteLength": 113744,
      "sha256": "ae93096798dc290afc396a64dda7f566b4f39816890cea4fa579c2073508dc59"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[94]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-094.png",
      "byteLength": 113800,
      "sha256": "8d19edc7e01f214b8898673067f3b2b06e8e17e791dd878d8744ab45ca6f4ce0"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[95]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-095.png",
      "byteLength": 113478,
      "sha256": "81dc159cfa4a18ca9609251827a89e7cc3e80d0b465d79bd63d915b5671d965c"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[96]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-096.png",
      "byteLength": 113400,
      "sha256": "b6f594551154d6df79e0b1e355dfbfc22189f02d6bb71696a2bcc8e63824baf5"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[97]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-097.png",
      "byteLength": 113223,
      "sha256": "b435b04f93e3a95fc2210c50dbc6c12115379603453788a3e0384e1be3168d8b"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[98]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-098.png",
      "byteLength": 113319,
      "sha256": "d9ffc5b9e4a4103da54468daee99933ceed023fbaf9c2785dda1f9207412207d"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[99]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-099.png",
      "byteLength": 112917,
      "sha256": "38355eeb37d0a3fce1d425fdb8e335e06d49f13c5a29920aa90bcae95b3646b0"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[100]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-100.png",
      "byteLength": 112942,
      "sha256": "1fd335ae9dfbbaa4dca429a6bd1d2f11752cae73bc0400fe794b565d4ed03afe"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[101]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-101.png",
      "byteLength": 112848,
      "sha256": "ca9aa1113ce546e66714b3475928427fc8ea9484a7b361ce0963e177ced71db1"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[102]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-102.png",
      "byteLength": 112569,
      "sha256": "78eef9c5cf274faceeab26abc7dc147af980da570ca11ea4ed41706a868d0224"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[103]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-103.png",
      "byteLength": 112725,
      "sha256": "a7c5b22dca0ab1868f553b7b9e42bc5d33bc141989f1c742f40f255b549bf30b"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[104]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-104.png",
      "byteLength": 112561,
      "sha256": "e5c7d57f64c6bed171f6644f5ac76c0ad69ab3dd531adec7dcc625dfd617e7e7"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[105]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-105.png",
      "byteLength": 112698,
      "sha256": "c627a43fda77fa8dc177c87daec9229ad9d10418f5f2806171d35f6edf223da0"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[106]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-106.png",
      "byteLength": 112626,
      "sha256": "8344c39c26ccfc048dc4ba9f60b762f0c7f30db7a253a00871079b0f4bc0a434"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[107]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-107.png",
      "byteLength": 112554,
      "sha256": "c488445db0a08d086201661863918c326f9ee090de90ee74b994f3c3b04fec32"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[108]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-108.png",
      "byteLength": 112299,
      "sha256": "71d06bb1d05eed19b82d9875b60e5543ae3fe691ec3ba0e8e4744e76ce45f1eb"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[109]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-109.png",
      "byteLength": 112620,
      "sha256": "dd35fd076995653ef5ba1dee52029eaa74eb093f97ef9a93099fbd23fc2faffd"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[110]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-110.png",
      "byteLength": 112535,
      "sha256": "55bc4b426d2b06716913817ff162ed0272e271740edfd77ff9dc00de8bb080ac"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[111]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-111.png",
      "byteLength": 112420,
      "sha256": "2248ac192c0b3f3b934e62b64dcc569a66df69ab09a1a252482d881e6163fca9"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[112]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-112.png",
      "byteLength": 112262,
      "sha256": "b0baadd2aa0c7bcadd0fa3b4f716ca638469b5f8ce844d777102cdfcf08a6bdc"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[113]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-113.png",
      "byteLength": 112472,
      "sha256": "ef51bb8ed3931320eec2504853e491d148c322f6dc7af3199a88502d3cf495fe"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[114]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-114.png",
      "byteLength": 112801,
      "sha256": "a9995f5b20499cdd6d07b6bb85d025b207da3d44b357fd433775af5e8d5c15a6"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[115]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-115.png",
      "byteLength": 112473,
      "sha256": "c1b2aafc22e997a857366d232e2de7a317dfc6e1dc4fae57361455fe56414be4"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[116]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-116.png",
      "byteLength": 112276,
      "sha256": "e1da0d9e9f1a067cad4b718d8c7325c26450d5cc149b9b67c425114052a0c7b5"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[117]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-117.png",
      "byteLength": 112324,
      "sha256": "230b369a5ec0b7595c5cb8f6e8c9b46adbbbe6f88311087037ddc1c4b1f5d106"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[118]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-118.png",
      "byteLength": 112324,
      "sha256": "19deeffb195278a45c842e8afb67a35af44c1500a49a2465e1e0786a3d3633f5"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.frameHashes[119]",
      "logicalPath": "public/images/new-media-v2/motion-lab/morph/frame-119.png",
      "byteLength": 112230,
      "sha256": "34b30b823e2af6df5efc22220636d80061761ebfbb0e8806902727ee39d4d7f6"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.bead.path",
      "logicalPath": "public/images/new-media-v2/motion-lab/coral-bead.png",
      "byteLength": 275763,
      "sha256": "85f9ee5dd018b63f3c0d0446c297a141182074d81f793b207e0651ba83d8587a"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.edge.path",
      "logicalPath": "public/images/new-media-v2/motion-lab/cat-display-edge.png",
      "byteLength": 1254598,
      "sha256": "64a4cc5ac29d45a0ad1f382393c1f6d43f994bd466ae582782867e67c334ff38"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.heart.path",
      "logicalPath": "public/images/new-media-v2/motion-lab/coral-heart.png",
      "byteLength": 828021,
      "sha256": "a0805b0a8c9873b5c90b3c45d8a248475d65f4a113a330bad661b5bba6150a37"
    },
    {
      "sourceJsonPath": "$.requiredFieldContract.runtimeMaterialRequirements.fontFiles[0]",
      "logicalPath": "public/fonts/new-media-v2/style-review/NotoSerifCJKSC-Regular.subset.woff",
      "byteLength": 182172,
      "sha256": "ae93b112cb1e88589be4d00f5793e222dd266178f12525ac28aa8fe66f13d39b"
    },
    {
      "sourceJsonPath": "$.requiredFieldContract.runtimeMaterialRequirements.fontFiles[1]",
      "logicalPath": "public/fonts/new-media-v2/style-review/NotoSerifCJKSC-Bold.subset.woff",
      "byteLength": 186844,
      "sha256": "42a6bfeae0f30e5b9433030597e6dca8665582fce80baadff07a8fcc1480b5e2"
    },
    {
      "sourceJsonPath": "$.sample.audio.musicBed.sourceFile",
      "logicalPath": "/workspace/attachments/fbe8109f-0ab9-4284-ac06-71a509607930/bgm.mp4",
      "byteLength": 14489917,
      "sha256": "d275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59"
    },
    {
      "sourceJsonPath": "$.sample.audio.originalSfx.events[0].sourceFile",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx/ceramic-heart.wav",
      "byteLength": 49964,
      "sha256": "33936aaf9e6b08ce101ae8e6169f691830946b678f613104fbe92afecdcb1818"
    },
    {
      "sourceJsonPath": "$.sample.audio.originalSfx.events[1].sourceFile",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx/paper-air-arc.wav",
      "byteLength": 393644,
      "sha256": "e56cfd50c5662a4d13db1f929636c25ceed51df3b9a38c088b5af8013f100f4d"
    },
    {
      "sourceJsonPath": "$.sample.audio.originalSfx.events[2].sourceFile",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx/bead-gather.wav",
      "byteLength": 384044,
      "sha256": "67c202fbb919962b3049a972bc997c4dd0dbcf70aed1e64fd127c9ddfd18c3fc"
    },
    {
      "sourceJsonPath": "$.sample.audio.originalSfx.events[3].sourceFile",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx/pause-contact.wav",
      "byteLength": 34604,
      "sha256": "9681a1037ebdf2ccee2310bedaba07a697e69657e2585f27753bfeaf1897b075"
    },
    {
      "sourceJsonPath": "$.sample.audio.originalSfx.events[4].sourceFile",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx/replay-brush.wav",
      "byteLength": 51884,
      "sha256": "88396d8171526e33ddcd261c23a672f952c12a983c40dfd7430944a77c966a6b"
    },
    {
      "sourceJsonPath": "$.sample.audio.originalSfx.events[5].sourceFile",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx/like-contact.wav",
      "byteLength": 44204,
      "sha256": "e1478b6b5ba2bbda234efd8501d385ad79674bf26f8e9e220c6c42815b48be8b"
    },
    {
      "sourceJsonPath": "$.sample.audio.originalSfx.events[6].sourceFile",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx/bead-travel.wav",
      "byteLength": 595244,
      "sha256": "639f2cb546f9cb3ed378cdbdfe5cafe93cfa4d4acecca9f9aa303b685e8641dd"
    },
    {
      "sourceJsonPath": "$.sample.audio.originalSfx.events[7].sourceFile",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx/record-arrival.wav",
      "byteLength": 57644,
      "sha256": "4c950121f23c772e06d07e2687785bc36654880e3a38f0b4693f3294c55ef295"
    },
    {
      "sourceJsonPath": "$.sample.audio.originalSfx.events[8].sourceFile",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx/branch-air.wav",
      "byteLength": 249644,
      "sha256": "97d93b1506e4c4542b838e84843c1a4452c93eec4cf768265c6706ad949a5daa"
    },
    {
      "sourceJsonPath": "$.sample.audio.outputs[\"public/audio/new-media-v2/motion-lab/mix.wav\"]",
      "logicalPath": "public/audio/new-media-v2/motion-lab/mix.wav",
      "byteLength": 3840044,
      "sha256": "ca54a4a13b87cbe1b66f7920c4f1b3c74e2a3a3b4a5268228682c73d8f13e47e"
    },
    {
      "sourceJsonPath": "$.sample.audio.outputs[\"public/audio/new-media-v2/motion-lab/sfx-only.wav\"]",
      "logicalPath": "public/audio/new-media-v2/motion-lab/sfx-only.wav",
      "byteLength": 3840044,
      "sha256": "cedcc4b9a4adb17469e316f931f5882e86cc26788ac63ad44e21a9afa5983ea5"
    }
  ],
  "provenanceInventory": [
    {
      "sourceJsonPath": "$.sample.assets.assets.hero.blendCache",
      "logicalPath": ".cache/motion-lab-assets/hero.blend",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 539028,
      "sha256": "fe01a5392fb5f792e9d7a20c874c160ae3c50db0fb2785964ed55025c1643ba5"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.morph.blendCache",
      "logicalPath": ".cache/motion-lab-assets/heart-to-bead.blend",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 913872,
      "sha256": "34503ab6bb5e74e63c5670fc0c9fbd937b0a9de1518e48b1163bb41676a0411e"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.bead.blendCache",
      "logicalPath": ".cache/motion-lab-assets/bead.blend",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 911160,
      "sha256": "4d71fb163508c9575247af5960bb70318c4457d76d5458350fb3e4c29d7b64c3"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.edge.blendCache",
      "logicalPath": ".cache/motion-lab-assets/edge.blend",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 539028,
      "sha256": "ef43e128a554b7291a4958245866f6757f80697a2ead0070becea205d82586db"
    },
    {
      "sourceJsonPath": "$.sample.assets.assets.heart.blendCache",
      "logicalPath": ".cache/motion-lab-assets/heart.blend",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 911160,
      "sha256": "2c06cfb0fb27642cbaf1154ff8b0af0efd3af75027ac3a2e12cbd43d03ff8c2d"
    },
    {
      "sourceJsonPath": "$.sample.assets.generator",
      "logicalPath": "scripts/generate-motion-lab-assets.py",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 16166,
      "sha256": "e42f9a6aacd856fb6b16acf5497029e25f75dba070f6de66d292c27f448c201c"
    },
    {
      "sourceJsonPath": "$.sample.assets.catSource.path",
      "logicalPath": "public/images/new-media-v2/kitten-study.png",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 1627165,
      "sha256": "c9323eafa7cec497714b16f57ffeeade8c0cf86ea817cd55236b350f6cb6ee70"
    },
    {
      "sourceJsonPath": "$.sample.audio.generator.file",
      "logicalPath": "scripts/generate-motion-lab-audio.py",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 13220,
      "sha256": "a0f68b1b8879cf64e3369a8cc3f82f1e0bf0bd007a3ae9994af6e108b36686ac"
    },
    {
      "sourceJsonPath": "$.sample.audio.generator.measurementHelper",
      "logicalPath": "scripts/generate-new-media-v2-review-sfx.py",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 17105,
      "sha256": "fcaa8d56f05a8c2e8f3f4e53c49525e44b3cb529c7c66f1a42524e56b56b3564"
    },
    {
      "sourceJsonPath": "$.sample.refinements.reviewEvidence[0]",
      "logicalPath": ".cache/motion-lab/review/review-beats.jpg",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 68359,
      "sha256": "975c102d2241e0aafe03f14f8bf3cf5ac01c2c212fee08e9bb21844f4d683219"
    },
    {
      "sourceJsonPath": "$.sample.refinements.reviewEvidence[1]",
      "logicalPath": ".cache/motion-lab/exit-review/contact-sheet-1.jpg",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 88119,
      "sha256": "de5f1a177851edb259f662dbace593891ada66df64d63632ea87ea950c38a23a"
    },
    {
      "sourceJsonPath": "$.sample.refinements.reviewEvidence[2]",
      "logicalPath": ".cache/motion-lab/exit-review/contact-sheet-2.jpg",
      "requiredForRuntime": false,
      "presentAtPackaging": true,
      "byteLength": 9687,
      "sha256": "ed1da6779e6e3485cd8d5c092649623a53eeaef06b0c915a36513f8e00d5117b"
    }
  ]
};

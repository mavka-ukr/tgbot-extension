export default {
  "version": "Bot API 6.5",
  "release_date": "February 3, 2023",
  "changelog": "https://core.telegram.org/bots/api#february-3-2023",
  "methods": {
    "getUpdates": {
      "name": "getUpdates",
      "href": "https://core.telegram.org/bots/api#getupdates",
      "description": [
        "Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects."
      ],
      "returns": [
        "Array of Update"
      ],
      "fields": [
        {
          "name": "offset",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten."
        },
        {
          "name": "limit",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100."
        },
        {
          "name": "timeout",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only."
        },
        {
          "name": "allowed_updates",
          "types": [
            "Array of String"
          ],
          "required": false,
          "description": "A JSON-serialized list of the update types you want your bot to receive. For example, specify [\"message\", \"edited_channel_post\", \"callback_query\"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time."
        }
      ]
    },
    "setWebhook": {
      "name": "setWebhook",
      "href": "https://core.telegram.org/bots/api#setwebhook",
      "description": [
        "Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.",
        "If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header \"X-Telegram-Bot-Api-Secret-Token\" with the secret token as content."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "HTTPS URL to send updates to. Use an empty string to remove webhook integration"
        },
        {
          "name": "certificate",
          "types": [
            "InputFile"
          ],
          "required": false,
          "description": "Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details."
        },
        {
          "name": "ip_address",
          "types": [
            "String"
          ],
          "required": false,
          "description": "The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS"
        },
        {
          "name": "max_connections",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput."
        },
        {
          "name": "allowed_updates",
          "types": [
            "Array of String"
          ],
          "required": false,
          "description": "A JSON-serialized list of the update types you want your bot to receive. For example, specify [\"message\", \"edited_channel_post\", \"callback_query\"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time."
        },
        {
          "name": "drop_pending_updates",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True to drop all pending updates"
        },
        {
          "name": "secret_token",
          "types": [
            "String"
          ],
          "required": false,
          "description": "A secret token to be sent in a header \"X-Telegram-Bot-Api-Secret-Token\" in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you."
        }
      ]
    },
    "deleteWebhook": {
      "name": "deleteWebhook",
      "href": "https://core.telegram.org/bots/api#deletewebhook",
      "description": [
        "Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "drop_pending_updates",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True to drop all pending updates"
        }
      ]
    },
    "getWebhookInfo": {
      "name": "getWebhookInfo",
      "href": "https://core.telegram.org/bots/api#getwebhookinfo",
      "description": [
        "Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty."
      ],
      "returns": [
        "WebhookInfo"
      ]
    },
    "getMe": {
      "name": "getMe",
      "href": "https://core.telegram.org/bots/api#getme",
      "description": [
        "A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object."
      ],
      "returns": [
        "User"
      ]
    },
    "logOut": {
      "name": "logOut",
      "href": "https://core.telegram.org/bots/api#logout",
      "description": [
        "Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters."
      ],
      "returns": [
        "Boolean"
      ]
    },
    "close": {
      "name": "close",
      "href": "https://core.telegram.org/bots/api#close",
      "description": [
        "Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters."
      ],
      "returns": [
        "Boolean"
      ]
    },
    "sendMessage": {
      "name": "sendMessage",
      "href": "https://core.telegram.org/bots/api#sendmessage",
      "description": [
        "Use this method to send text messages. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "text",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Text of the message to be sent, 1-4096 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the message text. See formatting options for more details."
        },
        {
          "name": "entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode"
        },
        {
          "name": "disable_web_page_preview",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Disables link previews for links in this message"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "forwardMessage": {
      "name": "forwardMessage",
      "href": "https://core.telegram.org/bots/api#forwardmessage",
      "description": [
        "Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "from_chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the forwarded message from forwarding and saving"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Message identifier in the chat specified in from_chat_id"
        }
      ]
    },
    "copyMessage": {
      "name": "copyMessage",
      "href": "https://core.telegram.org/bots/api#copymessage",
      "description": [
        "Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success."
      ],
      "returns": [
        "MessageId"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "from_chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Message identifier in the chat specified in from_chat_id"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the new caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendPhoto": {
      "name": "sendPhoto",
      "href": "https://core.telegram.org/bots/api#sendphoto",
      "description": [
        "Use this method to send photos. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "photo",
          "types": [
            "InputFile",
            "String"
          ],
          "required": true,
          "description": "Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the photo caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "has_spoiler",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the photo needs to be covered with a spoiler animation"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendAudio": {
      "name": "sendAudio",
      "href": "https://core.telegram.org/bots/api#sendaudio",
      "description": [
        "Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.",
        "For sending voice messages, use the sendVoice method instead."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "audio",
          "types": [
            "InputFile",
            "String"
          ],
          "required": true,
          "description": "Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Audio caption, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the audio caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Duration of the audio in seconds"
        },
        {
          "name": "performer",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Performer"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Track name"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendDocument": {
      "name": "sendDocument",
      "href": "https://core.telegram.org/bots/api#senddocument",
      "description": [
        "Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "document",
          "types": [
            "InputFile",
            "String"
          ],
          "required": true,
          "description": "File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the document caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "disable_content_type_detection",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Disables automatic server-side content type detection for files uploaded using multipart/form-data"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendVideo": {
      "name": "sendVideo",
      "href": "https://core.telegram.org/bots/api#sendvideo",
      "description": [
        "Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "video",
          "types": [
            "InputFile",
            "String"
          ],
          "required": true,
          "description": "Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Duration of sent video in seconds"
        },
        {
          "name": "width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Video width"
        },
        {
          "name": "height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Video height"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the video caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "has_spoiler",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the video needs to be covered with a spoiler animation"
        },
        {
          "name": "supports_streaming",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the uploaded video is suitable for streaming"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendAnimation": {
      "name": "sendAnimation",
      "href": "https://core.telegram.org/bots/api#sendanimation",
      "description": [
        "Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "animation",
          "types": [
            "InputFile",
            "String"
          ],
          "required": true,
          "description": "Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Duration of sent animation in seconds"
        },
        {
          "name": "width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Animation width"
        },
        {
          "name": "height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Animation height"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the animation caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "has_spoiler",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the animation needs to be covered with a spoiler animation"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendVoice": {
      "name": "sendVoice",
      "href": "https://core.telegram.org/bots/api#sendvoice",
      "description": [
        "Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "voice",
          "types": [
            "InputFile",
            "String"
          ],
          "required": true,
          "description": "Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Voice message caption, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the voice message caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Duration of the voice message in seconds"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendVideoNote": {
      "name": "sendVideoNote",
      "href": "https://core.telegram.org/bots/api#sendvideonote",
      "description": [
        "As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "video_note",
          "types": [
            "InputFile",
            "String"
          ],
          "required": true,
          "description": "Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Sending video notes by a URL is currently unsupported"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Duration of sent video in seconds"
        },
        {
          "name": "length",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Video width and height, i.e. diameter of the video message"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendMediaGroup": {
      "name": "sendMediaGroup",
      "href": "https://core.telegram.org/bots/api#sendmediagroup",
      "description": [
        "Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned."
      ],
      "returns": [
        "Array of Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "media",
          "types": [
            "Array of InputMediaAudio",
            "Array of InputMediaDocument",
            "Array of InputMediaPhoto",
            "Array of InputMediaVideo"
          ],
          "required": true,
          "description": "A JSON-serialized array describing messages to be sent, must include 2-10 items"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends messages silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent messages from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the messages are a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        }
      ]
    },
    "sendLocation": {
      "name": "sendLocation",
      "href": "https://core.telegram.org/bots/api#sendlocation",
      "description": [
        "Use this method to send point on the map. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "latitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Latitude of the location"
        },
        {
          "name": "longitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Longitude of the location"
        },
        {
          "name": "horizontal_accuracy",
          "types": [
            "Float"
          ],
          "required": false,
          "description": "The radius of uncertainty for the location, measured in meters; 0-1500"
        },
        {
          "name": "live_period",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400."
        },
        {
          "name": "heading",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified."
        },
        {
          "name": "proximity_alert_radius",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified."
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "editMessageLiveLocation": {
      "name": "editMessageLiveLocation",
      "href": "https://core.telegram.org/bots/api#editmessagelivelocation",
      "description": [
        "Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned."
      ],
      "returns": [
        "Message",
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
        },
        {
          "name": "latitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Latitude of new location"
        },
        {
          "name": "longitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Longitude of new location"
        },
        {
          "name": "horizontal_accuracy",
          "types": [
            "Float"
          ],
          "required": false,
          "description": "The radius of uncertainty for the location, measured in meters; 0-1500"
        },
        {
          "name": "heading",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified."
        },
        {
          "name": "proximity_alert_radius",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified."
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "A JSON-serialized object for a new inline keyboard."
        }
      ]
    },
    "stopMessageLiveLocation": {
      "name": "stopMessageLiveLocation",
      "href": "https://core.telegram.org/bots/api#stopmessagelivelocation",
      "description": [
        "Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned."
      ],
      "returns": [
        "Message",
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Identifier of the message with live location to stop"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "A JSON-serialized object for a new inline keyboard."
        }
      ]
    },
    "sendVenue": {
      "name": "sendVenue",
      "href": "https://core.telegram.org/bots/api#sendvenue",
      "description": [
        "Use this method to send information about a venue. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "latitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Latitude of the venue"
        },
        {
          "name": "longitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Longitude of the venue"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Name of the venue"
        },
        {
          "name": "address",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Address of the venue"
        },
        {
          "name": "foursquare_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Foursquare identifier of the venue"
        },
        {
          "name": "foursquare_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Foursquare type of the venue, if known. (For example, \"arts_entertainment/default\", \"arts_entertainment/aquarium\" or \"food/icecream\".)"
        },
        {
          "name": "google_place_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Google Places identifier of the venue"
        },
        {
          "name": "google_place_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Google Places type of the venue. (See supported types.)"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendContact": {
      "name": "sendContact",
      "href": "https://core.telegram.org/bots/api#sendcontact",
      "description": [
        "Use this method to send phone contacts. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "phone_number",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Contact's phone number"
        },
        {
          "name": "first_name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Contact's first name"
        },
        {
          "name": "last_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Contact's last name"
        },
        {
          "name": "vcard",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Additional data about the contact in the form of a vCard, 0-2048 bytes"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendPoll": {
      "name": "sendPoll",
      "href": "https://core.telegram.org/bots/api#sendpoll",
      "description": [
        "Use this method to send a native poll. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "question",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Poll question, 1-300 characters"
        },
        {
          "name": "options",
          "types": [
            "Array of String"
          ],
          "required": true,
          "description": "A JSON-serialized list of answer options, 2-10 strings 1-100 characters each"
        },
        {
          "name": "is_anonymous",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "True, if the poll needs to be anonymous, defaults to True"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Poll type, \"quiz\" or \"regular\", defaults to \"regular\""
        },
        {
          "name": "allows_multiple_answers",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False"
        },
        {
          "name": "correct_option_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "0-based identifier of the correct answer option, required for polls in quiz mode"
        },
        {
          "name": "explanation",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing"
        },
        {
          "name": "explanation_parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the explanation. See formatting options for more details."
        },
        {
          "name": "explanation_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in the poll explanation, which can be specified instead of parse_mode"
        },
        {
          "name": "open_period",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date."
        },
        {
          "name": "close_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period."
        },
        {
          "name": "is_closed",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the poll needs to be immediately closed. This can be useful for poll preview."
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendDice": {
      "name": "sendDice",
      "href": "https://core.telegram.org/bots/api#senddice",
      "description": [
        "Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "emoji",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Emoji on which the dice throw animation is based. Currently, must be one of \"\ud83c\udfb2\", \"\ud83c\udfaf\", \"\ud83c\udfc0\", \"\u26bd\", \"\ud83c\udfb3\", or \"\ud83c\udfb0\". Dice can have values 1-6 for \"\ud83c\udfb2\", \"\ud83c\udfaf\" and \"\ud83c\udfb3\", values 1-5 for \"\ud83c\udfc0\" and \"\u26bd\", and values 1-64 for \"\ud83c\udfb0\". Defaults to \"\ud83c\udfb2\""
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "sendChatAction": {
      "name": "sendChatAction",
      "href": "https://core.telegram.org/bots/api#sendchataction",
      "description": [
        "Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.",
        "We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread; supergroups only"
        },
        {
          "name": "action",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes."
        }
      ]
    },
    "getUserProfilePhotos": {
      "name": "getUserProfilePhotos",
      "href": "https://core.telegram.org/bots/api#getuserprofilephotos",
      "description": [
        "Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object."
      ],
      "returns": [
        "UserProfilePhotos"
      ],
      "fields": [
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        },
        {
          "name": "offset",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Sequential number of the first photo to be returned. By default, all photos are returned."
        },
        {
          "name": "limit",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100."
        }
      ]
    },
    "getFile": {
      "name": "getFile",
      "href": "https://core.telegram.org/bots/api#getfile",
      "description": [
        "Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.",
        "Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received."
      ],
      "returns": [
        "File"
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File identifier to get information about"
        }
      ]
    },
    "banChatMember": {
      "name": "banChatMember",
      "href": "https://core.telegram.org/bots/api#banchatmember",
      "description": [
        "Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        },
        {
          "name": "until_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only."
        },
        {
          "name": "revoke_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels."
        }
      ]
    },
    "unbanChatMember": {
      "name": "unbanChatMember",
      "href": "https://core.telegram.org/bots/api#unbanchatmember",
      "description": [
        "Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        },
        {
          "name": "only_if_banned",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Do nothing if the user is not banned"
        }
      ]
    },
    "restrictChatMember": {
      "name": "restrictChatMember",
      "href": "https://core.telegram.org/bots/api#restrictchatmember",
      "description": [
        "Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        },
        {
          "name": "permissions",
          "types": [
            "ChatPermissions"
          ],
          "required": true,
          "description": "A JSON-serialized object for new user permissions"
        },
        {
          "name": "use_independent_chat_permissions",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission."
        },
        {
          "name": "until_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever"
        }
      ]
    },
    "promoteChatMember": {
      "name": "promoteChatMember",
      "href": "https://core.telegram.org/bots/api#promotechatmember",
      "description": [
        "Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        },
        {
          "name": "is_anonymous",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator's presence in the chat is hidden"
        },
        {
          "name": "can_manage_chat",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege"
        },
        {
          "name": "can_post_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can create channel posts, channels only"
        },
        {
          "name": "can_edit_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can edit messages of other users and can pin messages, channels only"
        },
        {
          "name": "can_delete_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can delete messages of other users"
        },
        {
          "name": "can_manage_video_chats",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can manage video chats"
        },
        {
          "name": "can_restrict_members",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can restrict, ban or unban chat members"
        },
        {
          "name": "can_promote_members",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)"
        },
        {
          "name": "can_change_info",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can change chat title, photo and other settings"
        },
        {
          "name": "can_invite_users",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can invite new users to the chat"
        },
        {
          "name": "can_pin_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the administrator can pin messages, supergroups only"
        },
        {
          "name": "can_manage_topics",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the user is allowed to create, rename, close, and reopen forum topics, supergroups only"
        }
      ]
    },
    "setChatAdministratorCustomTitle": {
      "name": "setChatAdministratorCustomTitle",
      "href": "https://core.telegram.org/bots/api#setchatadministratorcustomtitle",
      "description": [
        "Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        },
        {
          "name": "custom_title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "New custom title for the administrator; 0-16 characters, emoji are not allowed"
        }
      ]
    },
    "banChatSenderChat": {
      "name": "banChatSenderChat",
      "href": "https://core.telegram.org/bots/api#banchatsenderchat",
      "description": [
        "Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "sender_chat_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target sender chat"
        }
      ]
    },
    "unbanChatSenderChat": {
      "name": "unbanChatSenderChat",
      "href": "https://core.telegram.org/bots/api#unbanchatsenderchat",
      "description": [
        "Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "sender_chat_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target sender chat"
        }
      ]
    },
    "setChatPermissions": {
      "name": "setChatPermissions",
      "href": "https://core.telegram.org/bots/api#setchatpermissions",
      "description": [
        "Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "permissions",
          "types": [
            "ChatPermissions"
          ],
          "required": true,
          "description": "A JSON-serialized object for new default chat permissions"
        },
        {
          "name": "use_independent_chat_permissions",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission."
        }
      ]
    },
    "exportChatInviteLink": {
      "name": "exportChatInviteLink",
      "href": "https://core.telegram.org/bots/api#exportchatinvitelink",
      "description": [
        "Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success."
      ],
      "returns": [
        "String"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        }
      ]
    },
    "createChatInviteLink": {
      "name": "createChatInviteLink",
      "href": "https://core.telegram.org/bots/api#createchatinvitelink",
      "description": [
        "Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object."
      ],
      "returns": [
        "ChatInviteLink"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Invite link name; 0-32 characters"
        },
        {
          "name": "expire_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Point in time (Unix timestamp) when the link will expire"
        },
        {
          "name": "member_limit",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999"
        },
        {
          "name": "creates_join_request",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified"
        }
      ]
    },
    "editChatInviteLink": {
      "name": "editChatInviteLink",
      "href": "https://core.telegram.org/bots/api#editchatinvitelink",
      "description": [
        "Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object."
      ],
      "returns": [
        "ChatInviteLink"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "invite_link",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The invite link to edit"
        },
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Invite link name; 0-32 characters"
        },
        {
          "name": "expire_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Point in time (Unix timestamp) when the link will expire"
        },
        {
          "name": "member_limit",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999"
        },
        {
          "name": "creates_join_request",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified"
        }
      ]
    },
    "revokeChatInviteLink": {
      "name": "revokeChatInviteLink",
      "href": "https://core.telegram.org/bots/api#revokechatinvitelink",
      "description": [
        "Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object."
      ],
      "returns": [
        "ChatInviteLink"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier of the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "invite_link",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The invite link to revoke"
        }
      ]
    },
    "approveChatJoinRequest": {
      "name": "approveChatJoinRequest",
      "href": "https://core.telegram.org/bots/api#approvechatjoinrequest",
      "description": [
        "Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        }
      ]
    },
    "declineChatJoinRequest": {
      "name": "declineChatJoinRequest",
      "href": "https://core.telegram.org/bots/api#declinechatjoinrequest",
      "description": [
        "Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        }
      ]
    },
    "setChatPhoto": {
      "name": "setChatPhoto",
      "href": "https://core.telegram.org/bots/api#setchatphoto",
      "description": [
        "Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "photo",
          "types": [
            "InputFile"
          ],
          "required": true,
          "description": "New chat photo, uploaded using multipart/form-data"
        }
      ]
    },
    "deleteChatPhoto": {
      "name": "deleteChatPhoto",
      "href": "https://core.telegram.org/bots/api#deletechatphoto",
      "description": [
        "Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        }
      ]
    },
    "setChatTitle": {
      "name": "setChatTitle",
      "href": "https://core.telegram.org/bots/api#setchattitle",
      "description": [
        "Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "New chat title, 1-128 characters"
        }
      ]
    },
    "setChatDescription": {
      "name": "setChatDescription",
      "href": "https://core.telegram.org/bots/api#setchatdescription",
      "description": [
        "Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": false,
          "description": "New chat description, 0-255 characters"
        }
      ]
    },
    "pinChatMessage": {
      "name": "pinChatMessage",
      "href": "https://core.telegram.org/bots/api#pinchatmessage",
      "description": [
        "Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Identifier of a message to pin"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats."
        }
      ]
    },
    "unpinChatMessage": {
      "name": "unpinChatMessage",
      "href": "https://core.telegram.org/bots/api#unpinchatmessage",
      "description": [
        "Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned."
        }
      ]
    },
    "unpinAllChatMessages": {
      "name": "unpinAllChatMessages",
      "href": "https://core.telegram.org/bots/api#unpinallchatmessages",
      "description": [
        "Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        }
      ]
    },
    "leaveChat": {
      "name": "leaveChat",
      "href": "https://core.telegram.org/bots/api#leavechat",
      "description": [
        "Use this method for your bot to leave a group, supergroup or channel. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)"
        }
      ]
    },
    "getChat": {
      "name": "getChat",
      "href": "https://core.telegram.org/bots/api#getchat",
      "description": [
        "Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success."
      ],
      "returns": [
        "Chat"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)"
        }
      ]
    },
    "getChatAdministrators": {
      "name": "getChatAdministrators",
      "href": "https://core.telegram.org/bots/api#getchatadministrators",
      "description": [
        "Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects."
      ],
      "returns": [
        "Array of ChatMember"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)"
        }
      ]
    },
    "getChatMemberCount": {
      "name": "getChatMemberCount",
      "href": "https://core.telegram.org/bots/api#getchatmembercount",
      "description": [
        "Use this method to get the number of members in a chat. Returns Int on success."
      ],
      "returns": [
        "Integer"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)"
        }
      ]
    },
    "getChatMember": {
      "name": "getChatMember",
      "href": "https://core.telegram.org/bots/api#getchatmember",
      "description": [
        "Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success."
      ],
      "returns": [
        "ChatMember"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        }
      ]
    },
    "setChatStickerSet": {
      "name": "setChatStickerSet",
      "href": "https://core.telegram.org/bots/api#setchatstickerset",
      "description": [
        "Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "sticker_set_name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Name of the sticker set to be set as the group sticker set"
        }
      ]
    },
    "deleteChatStickerSet": {
      "name": "deleteChatStickerSet",
      "href": "https://core.telegram.org/bots/api#deletechatstickerset",
      "description": [
        "Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        }
      ]
    },
    "getForumTopicIconStickers": {
      "name": "getForumTopicIconStickers",
      "href": "https://core.telegram.org/bots/api#getforumtopiciconstickers",
      "description": [
        "Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects."
      ],
      "returns": [
        "Array of Sticker"
      ]
    },
    "createForumTopic": {
      "name": "createForumTopic",
      "href": "https://core.telegram.org/bots/api#createforumtopic",
      "description": [
        "Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object."
      ],
      "returns": [
        "ForumTopic"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Topic name, 1-128 characters"
        },
        {
          "name": "icon_color",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)"
        },
        {
          "name": "icon_custom_emoji_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers."
        }
      ]
    },
    "editForumTopic": {
      "name": "editForumTopic",
      "href": "https://core.telegram.org/bots/api#editforumtopic",
      "description": [
        "Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier for the target message thread of the forum topic"
        },
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept"
        },
        {
          "name": "icon_custom_emoji_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept"
        }
      ]
    },
    "closeForumTopic": {
      "name": "closeForumTopic",
      "href": "https://core.telegram.org/bots/api#closeforumtopic",
      "description": [
        "Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier for the target message thread of the forum topic"
        }
      ]
    },
    "reopenForumTopic": {
      "name": "reopenForumTopic",
      "href": "https://core.telegram.org/bots/api#reopenforumtopic",
      "description": [
        "Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier for the target message thread of the forum topic"
        }
      ]
    },
    "deleteForumTopic": {
      "name": "deleteForumTopic",
      "href": "https://core.telegram.org/bots/api#deleteforumtopic",
      "description": [
        "Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier for the target message thread of the forum topic"
        }
      ]
    },
    "unpinAllForumTopicMessages": {
      "name": "unpinAllForumTopicMessages",
      "href": "https://core.telegram.org/bots/api#unpinallforumtopicmessages",
      "description": [
        "Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier for the target message thread of the forum topic"
        }
      ]
    },
    "editGeneralForumTopic": {
      "name": "editGeneralForumTopic",
      "href": "https://core.telegram.org/bots/api#editgeneralforumtopic",
      "description": [
        "Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "New topic name, 1-128 characters"
        }
      ]
    },
    "closeGeneralForumTopic": {
      "name": "closeGeneralForumTopic",
      "href": "https://core.telegram.org/bots/api#closegeneralforumtopic",
      "description": [
        "Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        }
      ]
    },
    "reopenGeneralForumTopic": {
      "name": "reopenGeneralForumTopic",
      "href": "https://core.telegram.org/bots/api#reopengeneralforumtopic",
      "description": [
        "Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        }
      ]
    },
    "hideGeneralForumTopic": {
      "name": "hideGeneralForumTopic",
      "href": "https://core.telegram.org/bots/api#hidegeneralforumtopic",
      "description": [
        "Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        }
      ]
    },
    "unhideGeneralForumTopic": {
      "name": "unhideGeneralForumTopic",
      "href": "https://core.telegram.org/bots/api#unhidegeneralforumtopic",
      "description": [
        "Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        }
      ]
    },
    "answerCallbackQuery": {
      "name": "answerCallbackQuery",
      "href": "https://core.telegram.org/bots/api#answercallbackquery",
      "description": [
        "Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "callback_query_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the query to be answered"
        },
        {
          "name": "text",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters"
        },
        {
          "name": "show_alert",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false."
        },
        {
          "name": "url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter."
        },
        {
          "name": "cache_time",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0."
        }
      ]
    },
    "setMyCommands": {
      "name": "setMyCommands",
      "href": "https://core.telegram.org/bots/api#setmycommands",
      "description": [
        "Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "commands",
          "types": [
            "Array of BotCommand"
          ],
          "required": true,
          "description": "A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified."
        },
        {
          "name": "scope",
          "types": [
            "BotCommandScope"
          ],
          "required": false,
          "description": "A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault."
        },
        {
          "name": "language_code",
          "types": [
            "String"
          ],
          "required": false,
          "description": "A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands"
        }
      ]
    },
    "deleteMyCommands": {
      "name": "deleteMyCommands",
      "href": "https://core.telegram.org/bots/api#deletemycommands",
      "description": [
        "Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "scope",
          "types": [
            "BotCommandScope"
          ],
          "required": false,
          "description": "A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault."
        },
        {
          "name": "language_code",
          "types": [
            "String"
          ],
          "required": false,
          "description": "A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands"
        }
      ]
    },
    "getMyCommands": {
      "name": "getMyCommands",
      "href": "https://core.telegram.org/bots/api#getmycommands",
      "description": [
        "Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned."
      ],
      "returns": [
        "Array of BotCommand"
      ],
      "fields": [
        {
          "name": "scope",
          "types": [
            "BotCommandScope"
          ],
          "required": false,
          "description": "A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault."
        },
        {
          "name": "language_code",
          "types": [
            "String"
          ],
          "required": false,
          "description": "A two-letter ISO 639-1 language code or an empty string"
        }
      ]
    },
    "setChatMenuButton": {
      "name": "setChatMenuButton",
      "href": "https://core.telegram.org/bots/api#setchatmenubutton",
      "description": [
        "Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target private chat. If not specified, default bot's menu button will be changed"
        },
        {
          "name": "menu_button",
          "types": [
            "MenuButton"
          ],
          "required": false,
          "description": "A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault"
        }
      ]
    },
    "getChatMenuButton": {
      "name": "getChatMenuButton",
      "href": "https://core.telegram.org/bots/api#getchatmenubutton",
      "description": [
        "Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success."
      ],
      "returns": [
        "MenuButton"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target private chat. If not specified, default bot's menu button will be returned"
        }
      ]
    },
    "setMyDefaultAdministratorRights": {
      "name": "setMyDefaultAdministratorRights",
      "href": "https://core.telegram.org/bots/api#setmydefaultadministratorrights",
      "description": [
        "Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "rights",
          "types": [
            "ChatAdministratorRights"
          ],
          "required": false,
          "description": "A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared."
        },
        {
          "name": "for_channels",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed."
        }
      ]
    },
    "getMyDefaultAdministratorRights": {
      "name": "getMyDefaultAdministratorRights",
      "href": "https://core.telegram.org/bots/api#getmydefaultadministratorrights",
      "description": [
        "Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success."
      ],
      "returns": [
        "ChatAdministratorRights"
      ],
      "fields": [
        {
          "name": "for_channels",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned."
        }
      ]
    },
    "editMessageText": {
      "name": "editMessageText",
      "href": "https://core.telegram.org/bots/api#editmessagetext",
      "description": [
        "Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned."
      ],
      "returns": [
        "Message",
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
        },
        {
          "name": "text",
          "types": [
            "String"
          ],
          "required": true,
          "description": "New text of the message, 1-4096 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the message text. See formatting options for more details."
        },
        {
          "name": "entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode"
        },
        {
          "name": "disable_web_page_preview",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Disables link previews for links in this message"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "A JSON-serialized object for an inline keyboard."
        }
      ]
    },
    "editMessageCaption": {
      "name": "editMessageCaption",
      "href": "https://core.telegram.org/bots/api#editmessagecaption",
      "description": [
        "Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned."
      ],
      "returns": [
        "Message",
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "New caption of the message, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Mode for parsing entities in the message caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "A JSON-serialized object for an inline keyboard."
        }
      ]
    },
    "editMessageMedia": {
      "name": "editMessageMedia",
      "href": "https://core.telegram.org/bots/api#editmessagemedia",
      "description": [
        "Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned."
      ],
      "returns": [
        "Message",
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
        },
        {
          "name": "media",
          "types": [
            "InputMedia"
          ],
          "required": true,
          "description": "A JSON-serialized object for a new media content of the message"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "A JSON-serialized object for a new inline keyboard."
        }
      ]
    },
    "editMessageReplyMarkup": {
      "name": "editMessageReplyMarkup",
      "href": "https://core.telegram.org/bots/api#editmessagereplymarkup",
      "description": [
        "Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned."
      ],
      "returns": [
        "Message",
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "A JSON-serialized object for an inline keyboard."
        }
      ]
    },
    "stopPoll": {
      "name": "stopPoll",
      "href": "https://core.telegram.org/bots/api#stoppoll",
      "description": [
        "Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned."
      ],
      "returns": [
        "Poll"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Identifier of the original message with the poll"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "A JSON-serialized object for a new message inline keyboard."
        }
      ]
    },
    "deleteMessage": {
      "name": "deleteMessage",
      "href": "https://core.telegram.org/bots/api#deletemessage",
      "description": [
        "Use this method to delete a message, including service messages, with the following limitations:",
        "- A message can only be deleted if it was sent less than 48 hours ago.",
        "- Service messages about a supergroup, channel, or forum topic creation can't be deleted.",
        "- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.",
        "- Bots can delete outgoing messages in private chats, groups, and supergroups.",
        "- Bots can delete incoming messages in private chats.",
        "- Bots granted can_post_messages permissions can delete outgoing messages in channels.",
        "- If the bot is an administrator of a group, it can delete any message there.",
        "- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.",
        "Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Identifier of the message to delete"
        }
      ]
    },
    "sendSticker": {
      "name": "sendSticker",
      "href": "https://core.telegram.org/bots/api#sendsticker",
      "description": [
        "Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "sticker",
          "types": [
            "InputFile",
            "String"
          ],
          "required": true,
          "description": "Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup",
            "ReplyKeyboardMarkup",
            "ReplyKeyboardRemove",
            "ForceReply"
          ],
          "required": false,
          "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user."
        }
      ]
    },
    "getStickerSet": {
      "name": "getStickerSet",
      "href": "https://core.telegram.org/bots/api#getstickerset",
      "description": [
        "Use this method to get a sticker set. On success, a StickerSet object is returned."
      ],
      "returns": [
        "StickerSet"
      ],
      "fields": [
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Name of the sticker set"
        }
      ]
    },
    "getCustomEmojiStickers": {
      "name": "getCustomEmojiStickers",
      "href": "https://core.telegram.org/bots/api#getcustomemojistickers",
      "description": [
        "Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects."
      ],
      "returns": [
        "Array of Sticker"
      ],
      "fields": [
        {
          "name": "custom_emoji_ids",
          "types": [
            "Array of String"
          ],
          "required": true,
          "description": "List of custom emoji identifiers. At most 200 custom emoji identifiers can be specified."
        }
      ]
    },
    "uploadStickerFile": {
      "name": "uploadStickerFile",
      "href": "https://core.telegram.org/bots/api#uploadstickerfile",
      "description": [
        "Use this method to upload a .PNG file with a sticker for later use in createNewStickerSet and addStickerToSet methods (can be used multiple times). Returns the uploaded File on success."
      ],
      "returns": [
        "File"
      ],
      "fields": [
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "User identifier of sticker file owner"
        },
        {
          "name": "png_sticker",
          "types": [
            "InputFile"
          ],
          "required": true,
          "description": "PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        }
      ]
    },
    "createNewStickerSet": {
      "name": "createNewStickerSet",
      "href": "https://core.telegram.org/bots/api#createnewstickerset",
      "description": [
        "Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You must use exactly one of the fields png_sticker, tgs_sticker, or webm_sticker. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "User identifier of created sticker set owner"
        },
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in \"_by_<bot_username>\". <bot_username> is case insensitive. 1-64 characters."
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Sticker set title, 1-64 characters"
        },
        {
          "name": "png_sticker",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "tgs_sticker",
          "types": [
            "InputFile"
          ],
          "required": false,
          "description": "TGS animation with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/stickers#animated-sticker-requirements for technical requirements"
        },
        {
          "name": "webm_sticker",
          "types": [
            "InputFile"
          ],
          "required": false,
          "description": "WEBM video with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/stickers#video-sticker-requirements for technical requirements"
        },
        {
          "name": "sticker_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Type of stickers in the set, pass \"regular\" or \"mask\". Custom emoji sticker sets can't be created via the Bot API at the moment. By default, a regular sticker set is created."
        },
        {
          "name": "emojis",
          "types": [
            "String"
          ],
          "required": true,
          "description": "One or more emoji corresponding to the sticker"
        },
        {
          "name": "mask_position",
          "types": [
            "MaskPosition"
          ],
          "required": false,
          "description": "A JSON-serialized object for position where the mask should be placed on faces"
        }
      ]
    },
    "addStickerToSet": {
      "name": "addStickerToSet",
      "href": "https://core.telegram.org/bots/api#addstickertoset",
      "description": [
        "Use this method to add a new sticker to a set created by the bot. You must use exactly one of the fields png_sticker, tgs_sticker, or webm_sticker. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "User identifier of sticker set owner"
        },
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Sticker set name"
        },
        {
          "name": "png_sticker",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "tgs_sticker",
          "types": [
            "InputFile"
          ],
          "required": false,
          "description": "TGS animation with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/stickers#animated-sticker-requirements for technical requirements"
        },
        {
          "name": "webm_sticker",
          "types": [
            "InputFile"
          ],
          "required": false,
          "description": "WEBM video with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/stickers#video-sticker-requirements for technical requirements"
        },
        {
          "name": "emojis",
          "types": [
            "String"
          ],
          "required": true,
          "description": "One or more emoji corresponding to the sticker"
        },
        {
          "name": "mask_position",
          "types": [
            "MaskPosition"
          ],
          "required": false,
          "description": "A JSON-serialized object for position where the mask should be placed on faces"
        }
      ]
    },
    "setStickerPositionInSet": {
      "name": "setStickerPositionInSet",
      "href": "https://core.telegram.org/bots/api#setstickerpositioninset",
      "description": [
        "Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "sticker",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File identifier of the sticker"
        },
        {
          "name": "position",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "New sticker position in the set, zero-based"
        }
      ]
    },
    "deleteStickerFromSet": {
      "name": "deleteStickerFromSet",
      "href": "https://core.telegram.org/bots/api#deletestickerfromset",
      "description": [
        "Use this method to delete a sticker from a set created by the bot. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "sticker",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File identifier of the sticker"
        }
      ]
    },
    "setStickerSetThumb": {
      "name": "setStickerSetThumb",
      "href": "https://core.telegram.org/bots/api#setstickersetthumb",
      "description": [
        "Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Video thumbnails can be set only for video sticker sets only. Returns True on success."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Sticker set name"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "User identifier of the sticker set owner"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "A PNG image with the thumbnail, must be up to 128 kilobytes in size and have width and height exactly 100px, or a TGS animation with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements, or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Animated sticker set thumbnails can't be uploaded via HTTP URL."
        }
      ]
    },
    "answerInlineQuery": {
      "name": "answerInlineQuery",
      "href": "https://core.telegram.org/bots/api#answerinlinequery",
      "description": [
        "Use this method to send answers to an inline query. On success, True is returned.",
        "No more than 50 results per query are allowed."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "inline_query_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the answered query"
        },
        {
          "name": "results",
          "types": [
            "Array of InlineQueryResult"
          ],
          "required": true,
          "description": "A JSON-serialized array of results for the inline query"
        },
        {
          "name": "cache_time",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300."
        },
        {
          "name": "is_personal",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query"
        },
        {
          "name": "next_offset",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes."
        },
        {
          "name": "switch_pm_text",
          "types": [
            "String"
          ],
          "required": false,
          "description": "If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter switch_pm_parameter"
        },
        {
          "name": "switch_pm_parameter",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Deep-linking parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed. Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities."
        }
      ]
    },
    "answerWebAppQuery": {
      "name": "answerWebAppQuery",
      "href": "https://core.telegram.org/bots/api#answerwebappquery",
      "description": [
        "Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned."
      ],
      "returns": [
        "SentWebAppMessage"
      ],
      "fields": [
        {
          "name": "web_app_query_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the query to be answered"
        },
        {
          "name": "result",
          "types": [
            "InlineQueryResult"
          ],
          "required": true,
          "description": "A JSON-serialized object describing the message to be sent"
        }
      ]
    },
    "sendInvoice": {
      "name": "sendInvoice",
      "href": "https://core.telegram.org/bots/api#sendinvoice",
      "description": [
        "Use this method to send invoices. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Product name, 1-32 characters"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Product description, 1-255 characters"
        },
        {
          "name": "payload",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes."
        },
        {
          "name": "provider_token",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Payment provider token, obtained via @BotFather"
        },
        {
          "name": "currency",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Three-letter ISO 4217 currency code, see more on currencies"
        },
        {
          "name": "prices",
          "types": [
            "Array of LabeledPrice"
          ],
          "required": true,
          "description": "Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)"
        },
        {
          "name": "max_tip_amount",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0"
        },
        {
          "name": "suggested_tip_amounts",
          "types": [
            "Array of Integer"
          ],
          "required": false,
          "description": "A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount."
        },
        {
          "name": "start_parameter",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter"
        },
        {
          "name": "provider_data",
          "types": [
            "String"
          ],
          "required": false,
          "description": "JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider."
        },
        {
          "name": "photo_url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for."
        },
        {
          "name": "photo_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Photo size in bytes"
        },
        {
          "name": "photo_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Photo width"
        },
        {
          "name": "photo_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Photo height"
        },
        {
          "name": "need_name",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if you require the user's full name to complete the order"
        },
        {
          "name": "need_phone_number",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if you require the user's phone number to complete the order"
        },
        {
          "name": "need_email",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if you require the user's email address to complete the order"
        },
        {
          "name": "need_shipping_address",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if you require the user's shipping address to complete the order"
        },
        {
          "name": "send_phone_number_to_provider",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the user's phone number should be sent to provider"
        },
        {
          "name": "send_email_to_provider",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the user's email address should be sent to provider"
        },
        {
          "name": "is_flexible",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the final price depends on the shipping method"
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button."
        }
      ]
    },
    "createInvoiceLink": {
      "name": "createInvoiceLink",
      "href": "https://core.telegram.org/bots/api#createinvoicelink",
      "description": [
        "Use this method to create a link for an invoice. Returns the created invoice link as String on success."
      ],
      "returns": [
        "String"
      ],
      "fields": [
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Product name, 1-32 characters"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Product description, 1-255 characters"
        },
        {
          "name": "payload",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes."
        },
        {
          "name": "provider_token",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Payment provider token, obtained via BotFather"
        },
        {
          "name": "currency",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Three-letter ISO 4217 currency code, see more on currencies"
        },
        {
          "name": "prices",
          "types": [
            "Array of LabeledPrice"
          ],
          "required": true,
          "description": "Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)"
        },
        {
          "name": "max_tip_amount",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0"
        },
        {
          "name": "suggested_tip_amounts",
          "types": [
            "Array of Integer"
          ],
          "required": false,
          "description": "A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount."
        },
        {
          "name": "provider_data",
          "types": [
            "String"
          ],
          "required": false,
          "description": "JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider."
        },
        {
          "name": "photo_url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service."
        },
        {
          "name": "photo_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Photo size in bytes"
        },
        {
          "name": "photo_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Photo width"
        },
        {
          "name": "photo_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Photo height"
        },
        {
          "name": "need_name",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if you require the user's full name to complete the order"
        },
        {
          "name": "need_phone_number",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if you require the user's phone number to complete the order"
        },
        {
          "name": "need_email",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if you require the user's email address to complete the order"
        },
        {
          "name": "need_shipping_address",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if you require the user's shipping address to complete the order"
        },
        {
          "name": "send_phone_number_to_provider",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the user's phone number should be sent to the provider"
        },
        {
          "name": "send_email_to_provider",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the user's email address should be sent to the provider"
        },
        {
          "name": "is_flexible",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the final price depends on the shipping method"
        }
      ]
    },
    "answerShippingQuery": {
      "name": "answerShippingQuery",
      "href": "https://core.telegram.org/bots/api#answershippingquery",
      "description": [
        "If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "shipping_query_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the query to be answered"
        },
        {
          "name": "ok",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)"
        },
        {
          "name": "shipping_options",
          "types": [
            "Array of ShippingOption"
          ],
          "required": false,
          "description": "Required if ok is True. A JSON-serialized array of available shipping options."
        },
        {
          "name": "error_message",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. \"Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user."
        }
      ]
    },
    "answerPreCheckoutQuery": {
      "name": "answerPreCheckoutQuery",
      "href": "https://core.telegram.org/bots/api#answerprecheckoutquery",
      "description": [
        "Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "pre_checkout_query_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the query to be answered"
        },
        {
          "name": "ok",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems."
        },
        {
          "name": "error_message",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. \"Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!\"). Telegram will display this message to the user."
        }
      ]
    },
    "setPassportDataErrors": {
      "name": "setPassportDataErrors",
      "href": "https://core.telegram.org/bots/api#setpassportdataerrors",
      "description": [
        "Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.",
        "Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues."
      ],
      "returns": [
        "Boolean"
      ],
      "fields": [
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "User identifier"
        },
        {
          "name": "errors",
          "types": [
            "Array of PassportElementError"
          ],
          "required": true,
          "description": "A JSON-serialized array describing the errors"
        }
      ]
    },
    "sendGame": {
      "name": "sendGame",
      "href": "https://core.telegram.org/bots/api#sendgame",
      "description": [
        "Use this method to send a game. On success, the sent Message is returned."
      ],
      "returns": [
        "Message"
      ],
      "fields": [
        {
          "name": "chat_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier for the target chat"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only"
        },
        {
          "name": "game_short_name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather."
        },
        {
          "name": "disable_notification",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Sends the message silently. Users will receive a notification with no sound."
        },
        {
          "name": "protect_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Protects the contents of the sent message from forwarding and saving"
        },
        {
          "name": "reply_to_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "If the message is a reply, ID of the original message"
        },
        {
          "name": "allow_sending_without_reply",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the message should be sent even if the specified replied-to message is not found"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game."
        }
      ]
    },
    "setGameScore": {
      "name": "setGameScore",
      "href": "https://core.telegram.org/bots/api#setgamescore",
      "description": [
        "Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False."
      ],
      "returns": [
        "Message",
        "Boolean"
      ],
      "fields": [
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "User identifier"
        },
        {
          "name": "score",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "New score, must be non-negative"
        },
        {
          "name": "force",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters"
        },
        {
          "name": "disable_edit_message",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Pass True if the game message should not be automatically edited to include the current scoreboard"
        },
        {
          "name": "chat_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Unique identifier for the target chat"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Identifier of the sent message"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
        }
      ]
    },
    "getGameHighScores": {
      "name": "getGameHighScores",
      "href": "https://core.telegram.org/bots/api#getgamehighscores",
      "description": [
        "Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects."
      ],
      "returns": [
        "Array of GameHighScore"
      ],
      "fields": [
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Target user id"
        },
        {
          "name": "chat_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Unique identifier for the target chat"
        },
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Required if inline_message_id is not specified. Identifier of the sent message"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
        }
      ]
    }
  },
  "types": {
    "Update": {
      "name": "Update",
      "href": "https://core.telegram.org/bots/api#update",
      "description": [
        "This object represents an incoming update.",
        "At most one of the optional parameters can be present in any given update."
      ],
      "fields": [
        {
          "name": "update_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially."
        },
        {
          "name": "message",
          "types": [
            "Message"
          ],
          "required": false,
          "description": "Optional. New incoming message of any kind - text, photo, sticker, etc."
        },
        {
          "name": "edited_message",
          "types": [
            "Message"
          ],
          "required": false,
          "description": "Optional. New version of a message that is known to the bot and was edited"
        },
        {
          "name": "channel_post",
          "types": [
            "Message"
          ],
          "required": false,
          "description": "Optional. New incoming channel post of any kind - text, photo, sticker, etc."
        },
        {
          "name": "edited_channel_post",
          "types": [
            "Message"
          ],
          "required": false,
          "description": "Optional. New version of a channel post that is known to the bot and was edited"
        },
        {
          "name": "inline_query",
          "types": [
            "InlineQuery"
          ],
          "required": false,
          "description": "Optional. New incoming inline query"
        },
        {
          "name": "chosen_inline_result",
          "types": [
            "ChosenInlineResult"
          ],
          "required": false,
          "description": "Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot."
        },
        {
          "name": "callback_query",
          "types": [
            "CallbackQuery"
          ],
          "required": false,
          "description": "Optional. New incoming callback query"
        },
        {
          "name": "shipping_query",
          "types": [
            "ShippingQuery"
          ],
          "required": false,
          "description": "Optional. New incoming shipping query. Only for invoices with flexible price"
        },
        {
          "name": "pre_checkout_query",
          "types": [
            "PreCheckoutQuery"
          ],
          "required": false,
          "description": "Optional. New incoming pre-checkout query. Contains full information about checkout"
        },
        {
          "name": "poll",
          "types": [
            "Poll"
          ],
          "required": false,
          "description": "Optional. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot"
        },
        {
          "name": "poll_answer",
          "types": [
            "PollAnswer"
          ],
          "required": false,
          "description": "Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself."
        },
        {
          "name": "my_chat_member",
          "types": [
            "ChatMemberUpdated"
          ],
          "required": false,
          "description": "Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user."
        },
        {
          "name": "chat_member",
          "types": [
            "ChatMemberUpdated"
          ],
          "required": false,
          "description": "Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify \"chat_member\" in the list of allowed_updates to receive these updates."
        },
        {
          "name": "chat_join_request",
          "types": [
            "ChatJoinRequest"
          ],
          "required": false,
          "description": "Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates."
        }
      ]
    },
    "WebhookInfo": {
      "name": "WebhookInfo",
      "href": "https://core.telegram.org/bots/api#webhookinfo",
      "description": [
        "Describes the current status of a webhook."
      ],
      "fields": [
        {
          "name": "url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Webhook URL, may be empty if webhook is not set up"
        },
        {
          "name": "has_custom_certificate",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if a custom certificate was provided for webhook certificate checks"
        },
        {
          "name": "pending_update_count",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Number of updates awaiting delivery"
        },
        {
          "name": "ip_address",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Currently used webhook IP address"
        },
        {
          "name": "last_error_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook"
        },
        {
          "name": "last_error_message",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook"
        },
        {
          "name": "last_synchronization_error_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters"
        },
        {
          "name": "max_connections",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery"
        },
        {
          "name": "allowed_updates",
          "types": [
            "Array of String"
          ],
          "required": false,
          "description": "Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member"
        }
      ]
    },
    "User": {
      "name": "User",
      "href": "https://core.telegram.org/bots/api#user",
      "description": [
        "This object represents a Telegram user or bot."
      ],
      "fields": [
        {
          "name": "id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier."
        },
        {
          "name": "is_bot",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if this user is a bot"
        },
        {
          "name": "first_name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "User's or bot's first name"
        },
        {
          "name": "last_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. User's or bot's last name"
        },
        {
          "name": "username",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. User's or bot's username"
        },
        {
          "name": "language_code",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. IETF language tag of the user's language"
        },
        {
          "name": "is_premium",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if this user is a Telegram Premium user"
        },
        {
          "name": "added_to_attachment_menu",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if this user added the bot to the attachment menu"
        },
        {
          "name": "can_join_groups",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the bot can be invited to groups. Returned only in getMe."
        },
        {
          "name": "can_read_all_group_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if privacy mode is disabled for the bot. Returned only in getMe."
        },
        {
          "name": "supports_inline_queries",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the bot supports inline queries. Returned only in getMe."
        }
      ]
    },
    "Chat": {
      "name": "Chat",
      "href": "https://core.telegram.org/bots/api#chat",
      "description": [
        "This object represents a chat."
      ],
      "fields": [
        {
          "name": "id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier."
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of chat, can be either \"private\", \"group\", \"supergroup\" or \"channel\""
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Title, for supergroups, channels and group chats"
        },
        {
          "name": "username",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Username, for private chats, supergroups and channels if available"
        },
        {
          "name": "first_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. First name of the other party in a private chat"
        },
        {
          "name": "last_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Last name of the other party in a private chat"
        },
        {
          "name": "is_forum",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the supergroup chat is a forum (has topics enabled)"
        },
        {
          "name": "photo",
          "types": [
            "ChatPhoto"
          ],
          "required": false,
          "description": "Optional. Chat photo. Returned only in getChat."
        },
        {
          "name": "active_usernames",
          "types": [
            "Array of String"
          ],
          "required": false,
          "description": "Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels. Returned only in getChat."
        },
        {
          "name": "emoji_status_custom_emoji_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Custom emoji identifier of emoji status of the other party in a private chat. Returned only in getChat."
        },
        {
          "name": "bio",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Bio of the other party in a private chat. Returned only in getChat."
        },
        {
          "name": "has_private_forwards",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user. Returned only in getChat."
        },
        {
          "name": "has_restricted_voice_and_video_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat. Returned only in getChat."
        },
        {
          "name": "join_to_send_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if users need to join the supergroup before they can send messages. Returned only in getChat."
        },
        {
          "name": "join_by_request",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if all users directly joining the supergroup need to be approved by supergroup administrators. Returned only in getChat."
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Description, for groups, supergroups and channel chats. Returned only in getChat."
        },
        {
          "name": "invite_link",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Primary invite link, for groups, supergroups and channel chats. Returned only in getChat."
        },
        {
          "name": "pinned_message",
          "types": [
            "Message"
          ],
          "required": false,
          "description": "Optional. The most recent pinned message (by sending date). Returned only in getChat."
        },
        {
          "name": "permissions",
          "types": [
            "ChatPermissions"
          ],
          "required": false,
          "description": "Optional. Default chat member permissions, for groups and supergroups. Returned only in getChat."
        },
        {
          "name": "slow_mode_delay",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user; in seconds. Returned only in getChat."
        },
        {
          "name": "message_auto_delete_time",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat."
        },
        {
          "name": "has_aggressive_anti_spam_enabled",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. Returned only in getChat."
        },
        {
          "name": "has_hidden_members",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if non-administrators can only get the list of bots and administrators in the chat. Returned only in getChat."
        },
        {
          "name": "has_protected_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if messages from the chat can't be forwarded to other chats. Returned only in getChat."
        },
        {
          "name": "sticker_set_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. For supergroups, name of group sticker set. Returned only in getChat."
        },
        {
          "name": "can_set_sticker_set",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the bot can change the group sticker set. Returned only in getChat."
        },
        {
          "name": "linked_chat_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat."
        },
        {
          "name": "location",
          "types": [
            "ChatLocation"
          ],
          "required": false,
          "description": "Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat."
        }
      ]
    },
    "Message": {
      "name": "Message",
      "href": "https://core.telegram.org/bots/api#message",
      "description": [
        "This object represents a message."
      ],
      "fields": [
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique message identifier inside this chat"
        },
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Unique identifier of a message thread to which the message belongs; for supergroups only"
        },
        {
          "name": "from",
          "types": [
            "User"
          ],
          "required": false,
          "description": "Optional. Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat."
        },
        {
          "name": "sender_chat",
          "types": [
            "Chat"
          ],
          "required": false,
          "description": "Optional. Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat."
        },
        {
          "name": "date",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Date the message was sent in Unix time"
        },
        {
          "name": "chat",
          "types": [
            "Chat"
          ],
          "required": true,
          "description": "Conversation the message belongs to"
        },
        {
          "name": "forward_from",
          "types": [
            "User"
          ],
          "required": false,
          "description": "Optional. For forwarded messages, sender of the original message"
        },
        {
          "name": "forward_from_chat",
          "types": [
            "Chat"
          ],
          "required": false,
          "description": "Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat"
        },
        {
          "name": "forward_from_message_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. For messages forwarded from channels, identifier of the original message in the channel"
        },
        {
          "name": "forward_signature",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message sender if present"
        },
        {
          "name": "forward_sender_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages"
        },
        {
          "name": "forward_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. For forwarded messages, date the original message was sent in Unix time"
        },
        {
          "name": "is_topic_message",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the message is sent to a forum topic"
        },
        {
          "name": "is_automatic_forward",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group"
        },
        {
          "name": "reply_to_message",
          "types": [
            "Message"
          ],
          "required": false,
          "description": "Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply."
        },
        {
          "name": "via_bot",
          "types": [
            "User"
          ],
          "required": false,
          "description": "Optional. Bot through which the message was sent"
        },
        {
          "name": "edit_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Date the message was last edited in Unix time"
        },
        {
          "name": "has_protected_content",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the message can't be forwarded"
        },
        {
          "name": "media_group_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. The unique identifier of a media message group this message belongs to"
        },
        {
          "name": "author_signature",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator"
        },
        {
          "name": "text",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. For text messages, the actual UTF-8 text of the message"
        },
        {
          "name": "entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text"
        },
        {
          "name": "animation",
          "types": [
            "Animation"
          ],
          "required": false,
          "description": "Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set"
        },
        {
          "name": "audio",
          "types": [
            "Audio"
          ],
          "required": false,
          "description": "Optional. Message is an audio file, information about the file"
        },
        {
          "name": "document",
          "types": [
            "Document"
          ],
          "required": false,
          "description": "Optional. Message is a general file, information about the file"
        },
        {
          "name": "photo",
          "types": [
            "Array of PhotoSize"
          ],
          "required": false,
          "description": "Optional. Message is a photo, available sizes of the photo"
        },
        {
          "name": "sticker",
          "types": [
            "Sticker"
          ],
          "required": false,
          "description": "Optional. Message is a sticker, information about the sticker"
        },
        {
          "name": "video",
          "types": [
            "Video"
          ],
          "required": false,
          "description": "Optional. Message is a video, information about the video"
        },
        {
          "name": "video_note",
          "types": [
            "VideoNote"
          ],
          "required": false,
          "description": "Optional. Message is a video note, information about the video message"
        },
        {
          "name": "voice",
          "types": [
            "Voice"
          ],
          "required": false,
          "description": "Optional. Message is a voice message, information about the file"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption for the animation, audio, document, photo, video or voice"
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption"
        },
        {
          "name": "has_media_spoiler",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the message media is covered by a spoiler animation"
        },
        {
          "name": "contact",
          "types": [
            "Contact"
          ],
          "required": false,
          "description": "Optional. Message is a shared contact, information about the contact"
        },
        {
          "name": "dice",
          "types": [
            "Dice"
          ],
          "required": false,
          "description": "Optional. Message is a dice with random value"
        },
        {
          "name": "game",
          "types": [
            "Game"
          ],
          "required": false,
          "description": "Optional. Message is a game, information about the game. More about games: https://core.telegram.org/bots/api#games"
        },
        {
          "name": "poll",
          "types": [
            "Poll"
          ],
          "required": false,
          "description": "Optional. Message is a native poll, information about the poll"
        },
        {
          "name": "venue",
          "types": [
            "Venue"
          ],
          "required": false,
          "description": "Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set"
        },
        {
          "name": "location",
          "types": [
            "Location"
          ],
          "required": false,
          "description": "Optional. Message is a shared location, information about the location"
        },
        {
          "name": "new_chat_members",
          "types": [
            "Array of User"
          ],
          "required": false,
          "description": "Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)"
        },
        {
          "name": "left_chat_member",
          "types": [
            "User"
          ],
          "required": false,
          "description": "Optional. A member was removed from the group, information about them (this member may be the bot itself)"
        },
        {
          "name": "new_chat_title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. A chat title was changed to this value"
        },
        {
          "name": "new_chat_photo",
          "types": [
            "Array of PhotoSize"
          ],
          "required": false,
          "description": "Optional. A chat photo was change to this value"
        },
        {
          "name": "delete_chat_photo",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Service message: the chat photo was deleted"
        },
        {
          "name": "group_chat_created",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Service message: the group has been created"
        },
        {
          "name": "supergroup_chat_created",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup."
        },
        {
          "name": "channel_chat_created",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel."
        },
        {
          "name": "message_auto_delete_timer_changed",
          "types": [
            "MessageAutoDeleteTimerChanged"
          ],
          "required": false,
          "description": "Optional. Service message: auto-delete timer settings changed in the chat"
        },
        {
          "name": "migrate_to_chat_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier."
        },
        {
          "name": "migrate_from_chat_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier."
        },
        {
          "name": "pinned_message",
          "types": [
            "Message"
          ],
          "required": false,
          "description": "Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply."
        },
        {
          "name": "invoice",
          "types": [
            "Invoice"
          ],
          "required": false,
          "description": "Optional. Message is an invoice for a payment, information about the invoice. More about payments: https://core.telegram.org/bots/api#payments"
        },
        {
          "name": "successful_payment",
          "types": [
            "SuccessfulPayment"
          ],
          "required": false,
          "description": "Optional. Message is a service message about a successful payment, information about the payment. More about payments: https://core.telegram.org/bots/api#payments"
        },
        {
          "name": "user_shared",
          "types": [
            "UserShared"
          ],
          "required": false,
          "description": "Optional. Service message: a user was shared with the bot"
        },
        {
          "name": "chat_shared",
          "types": [
            "ChatShared"
          ],
          "required": false,
          "description": "Optional. Service message: a chat was shared with the bot"
        },
        {
          "name": "connected_website",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. The domain name of the website on which the user has logged in. More about Telegram Login: https://core.telegram.org/widgets/login"
        },
        {
          "name": "write_access_allowed",
          "types": [
            "WriteAccessAllowed"
          ],
          "required": false,
          "description": "Optional. Service message: the user allowed the bot added to the attachment menu to write messages"
        },
        {
          "name": "passport_data",
          "types": [
            "PassportData"
          ],
          "required": false,
          "description": "Optional. Telegram Passport data"
        },
        {
          "name": "proximity_alert_triggered",
          "types": [
            "ProximityAlertTriggered"
          ],
          "required": false,
          "description": "Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location."
        },
        {
          "name": "forum_topic_created",
          "types": [
            "ForumTopicCreated"
          ],
          "required": false,
          "description": "Optional. Service message: forum topic created"
        },
        {
          "name": "forum_topic_edited",
          "types": [
            "ForumTopicEdited"
          ],
          "required": false,
          "description": "Optional. Service message: forum topic edited"
        },
        {
          "name": "forum_topic_closed",
          "types": [
            "ForumTopicClosed"
          ],
          "required": false,
          "description": "Optional. Service message: forum topic closed"
        },
        {
          "name": "forum_topic_reopened",
          "types": [
            "ForumTopicReopened"
          ],
          "required": false,
          "description": "Optional. Service message: forum topic reopened"
        },
        {
          "name": "general_forum_topic_hidden",
          "types": [
            "GeneralForumTopicHidden"
          ],
          "required": false,
          "description": "Optional. Service message: the 'General' forum topic hidden"
        },
        {
          "name": "general_forum_topic_unhidden",
          "types": [
            "GeneralForumTopicUnhidden"
          ],
          "required": false,
          "description": "Optional. Service message: the 'General' forum topic unhidden"
        },
        {
          "name": "video_chat_scheduled",
          "types": [
            "VideoChatScheduled"
          ],
          "required": false,
          "description": "Optional. Service message: video chat scheduled"
        },
        {
          "name": "video_chat_started",
          "types": [
            "VideoChatStarted"
          ],
          "required": false,
          "description": "Optional. Service message: video chat started"
        },
        {
          "name": "video_chat_ended",
          "types": [
            "VideoChatEnded"
          ],
          "required": false,
          "description": "Optional. Service message: video chat ended"
        },
        {
          "name": "video_chat_participants_invited",
          "types": [
            "VideoChatParticipantsInvited"
          ],
          "required": false,
          "description": "Optional. Service message: new participants invited to a video chat"
        },
        {
          "name": "web_app_data",
          "types": [
            "WebAppData"
          ],
          "required": false,
          "description": "Optional. Service message: data sent by a Web App"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons."
        }
      ]
    },
    "MessageId": {
      "name": "MessageId",
      "href": "https://core.telegram.org/bots/api#messageid",
      "description": [
        "This object represents a unique message identifier."
      ],
      "fields": [
        {
          "name": "message_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique message identifier"
        }
      ]
    },
    "MessageEntity": {
      "name": "MessageEntity",
      "href": "https://core.telegram.org/bots/api#messageentity",
      "description": [
        "This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the entity. Currently, can be \"mention\" (@username), \"hashtag\" (#hashtag), \"cashtag\" ($USD), \"bot_command\" (/start@jobs_bot), \"url\" (https://telegram.org), \"email\" (do-not-reply@telegram.org), \"phone_number\" (+1-212-555-0123), \"bold\" (bold text), \"italic\" (italic text), \"underline\" (underlined text), \"strikethrough\" (strikethrough text), \"spoiler\" (spoiler message), \"code\" (monowidth string), \"pre\" (monowidth block), \"text_link\" (for clickable text URLs), \"text_mention\" (for users without usernames), \"custom_emoji\" (for inline custom emoji stickers)"
        },
        {
          "name": "offset",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Offset in UTF-16 code units to the start of the entity"
        },
        {
          "name": "length",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Length of the entity in UTF-16 code units"
        },
        {
          "name": "url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. For \"text_link\" only, URL that will be opened after user taps on the text"
        },
        {
          "name": "user",
          "types": [
            "User"
          ],
          "required": false,
          "description": "Optional. For \"text_mention\" only, the mentioned user"
        },
        {
          "name": "language",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. For \"pre\" only, the programming language of the entity text"
        },
        {
          "name": "custom_emoji_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. For \"custom_emoji\" only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker"
        }
      ]
    },
    "PhotoSize": {
      "name": "PhotoSize",
      "href": "https://core.telegram.org/bots/api#photosize",
      "description": [
        "This object represents one size of a photo or a file / sticker thumbnail."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "width",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Photo width"
        },
        {
          "name": "height",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Photo height"
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. File size in bytes"
        }
      ]
    },
    "Animation": {
      "name": "Animation",
      "href": "https://core.telegram.org/bots/api#animation",
      "description": [
        "This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound)."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "width",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Video width as defined by sender"
        },
        {
          "name": "height",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Video height as defined by sender"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Duration of the video in seconds as defined by sender"
        },
        {
          "name": "thumb",
          "types": [
            "PhotoSize"
          ],
          "required": false,
          "description": "Optional. Animation thumbnail as defined by sender"
        },
        {
          "name": "file_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Original animation filename as defined by sender"
        },
        {
          "name": "mime_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. MIME type of the file as defined by sender"
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value."
        }
      ]
    },
    "Audio": {
      "name": "Audio",
      "href": "https://core.telegram.org/bots/api#audio",
      "description": [
        "This object represents an audio file to be treated as music by the Telegram clients."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Duration of the audio in seconds as defined by sender"
        },
        {
          "name": "performer",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Performer of the audio as defined by sender or by audio tags"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Title of the audio as defined by sender or by audio tags"
        },
        {
          "name": "file_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Original filename as defined by sender"
        },
        {
          "name": "mime_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. MIME type of the file as defined by sender"
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value."
        },
        {
          "name": "thumb",
          "types": [
            "PhotoSize"
          ],
          "required": false,
          "description": "Optional. Thumbnail of the album cover to which the music file belongs"
        }
      ]
    },
    "Document": {
      "name": "Document",
      "href": "https://core.telegram.org/bots/api#document",
      "description": [
        "This object represents a general file (as opposed to photos, voice messages and audio files)."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "thumb",
          "types": [
            "PhotoSize"
          ],
          "required": false,
          "description": "Optional. Document thumbnail as defined by sender"
        },
        {
          "name": "file_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Original filename as defined by sender"
        },
        {
          "name": "mime_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. MIME type of the file as defined by sender"
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value."
        }
      ]
    },
    "Video": {
      "name": "Video",
      "href": "https://core.telegram.org/bots/api#video",
      "description": [
        "This object represents a video file."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "width",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Video width as defined by sender"
        },
        {
          "name": "height",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Video height as defined by sender"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Duration of the video in seconds as defined by sender"
        },
        {
          "name": "thumb",
          "types": [
            "PhotoSize"
          ],
          "required": false,
          "description": "Optional. Video thumbnail"
        },
        {
          "name": "file_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Original filename as defined by sender"
        },
        {
          "name": "mime_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. MIME type of the file as defined by sender"
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value."
        }
      ]
    },
    "VideoNote": {
      "name": "VideoNote",
      "href": "https://core.telegram.org/bots/api#videonote",
      "description": [
        "This object represents a video message (available in Telegram apps as of v.4.0)."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "length",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Video width and height (diameter of the video message) as defined by sender"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Duration of the video in seconds as defined by sender"
        },
        {
          "name": "thumb",
          "types": [
            "PhotoSize"
          ],
          "required": false,
          "description": "Optional. Video thumbnail"
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. File size in bytes"
        }
      ]
    },
    "Voice": {
      "name": "Voice",
      "href": "https://core.telegram.org/bots/api#voice",
      "description": [
        "This object represents a voice note."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Duration of the audio in seconds as defined by sender"
        },
        {
          "name": "mime_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. MIME type of the file as defined by sender"
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value."
        }
      ]
    },
    "Contact": {
      "name": "Contact",
      "href": "https://core.telegram.org/bots/api#contact",
      "description": [
        "This object represents a phone contact."
      ],
      "fields": [
        {
          "name": "phone_number",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Contact's phone number"
        },
        {
          "name": "first_name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Contact's first name"
        },
        {
          "name": "last_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Contact's last name"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier."
        },
        {
          "name": "vcard",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Additional data about the contact in the form of a vCard"
        }
      ]
    },
    "Dice": {
      "name": "Dice",
      "href": "https://core.telegram.org/bots/api#dice",
      "description": [
        "This object represents an animated emoji that displays a random value."
      ],
      "fields": [
        {
          "name": "emoji",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Emoji on which the dice throw animation is based"
        },
        {
          "name": "value",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Value of the dice, 1-6 for \"\ud83c\udfb2\", \"\ud83c\udfaf\" and \"\ud83c\udfb3\" base emoji, 1-5 for \"\ud83c\udfc0\" and \"\u26bd\" base emoji, 1-64 for \"\ud83c\udfb0\" base emoji"
        }
      ]
    },
    "PollOption": {
      "name": "PollOption",
      "href": "https://core.telegram.org/bots/api#polloption",
      "description": [
        "This object contains information about one answer option in a poll."
      ],
      "fields": [
        {
          "name": "text",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Option text, 1-100 characters"
        },
        {
          "name": "voter_count",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Number of users that voted for this option"
        }
      ]
    },
    "PollAnswer": {
      "name": "PollAnswer",
      "href": "https://core.telegram.org/bots/api#pollanswer",
      "description": [
        "This object represents an answer of a user in a non-anonymous poll."
      ],
      "fields": [
        {
          "name": "poll_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique poll identifier"
        },
        {
          "name": "user",
          "types": [
            "User"
          ],
          "required": true,
          "description": "The user, who changed the answer to the poll"
        },
        {
          "name": "option_ids",
          "types": [
            "Array of Integer"
          ],
          "required": true,
          "description": "0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote."
        }
      ]
    },
    "Poll": {
      "name": "Poll",
      "href": "https://core.telegram.org/bots/api#poll",
      "description": [
        "This object contains information about a poll."
      ],
      "fields": [
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique poll identifier"
        },
        {
          "name": "question",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Poll question, 1-300 characters"
        },
        {
          "name": "options",
          "types": [
            "Array of PollOption"
          ],
          "required": true,
          "description": "List of poll options"
        },
        {
          "name": "total_voter_count",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Total number of users that voted in the poll"
        },
        {
          "name": "is_closed",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the poll is closed"
        },
        {
          "name": "is_anonymous",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the poll is anonymous"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Poll type, currently can be \"regular\" or \"quiz\""
        },
        {
          "name": "allows_multiple_answers",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the poll allows multiple answers"
        },
        {
          "name": "correct_option_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot."
        },
        {
          "name": "explanation",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters"
        },
        {
          "name": "explanation_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation"
        },
        {
          "name": "open_period",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Amount of time in seconds the poll will be active after creation"
        },
        {
          "name": "close_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Point in time (Unix timestamp) when the poll will be automatically closed"
        }
      ]
    },
    "Location": {
      "name": "Location",
      "href": "https://core.telegram.org/bots/api#location",
      "description": [
        "This object represents a point on the map."
      ],
      "fields": [
        {
          "name": "longitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Longitude as defined by sender"
        },
        {
          "name": "latitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Latitude as defined by sender"
        },
        {
          "name": "horizontal_accuracy",
          "types": [
            "Float"
          ],
          "required": false,
          "description": "Optional. The radius of uncertainty for the location, measured in meters; 0-1500"
        },
        {
          "name": "live_period",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only."
        },
        {
          "name": "heading",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only."
        },
        {
          "name": "proximity_alert_radius",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only."
        }
      ]
    },
    "Venue": {
      "name": "Venue",
      "href": "https://core.telegram.org/bots/api#venue",
      "description": [
        "This object represents a venue."
      ],
      "fields": [
        {
          "name": "location",
          "types": [
            "Location"
          ],
          "required": true,
          "description": "Venue location. Can't be a live location"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Name of the venue"
        },
        {
          "name": "address",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Address of the venue"
        },
        {
          "name": "foursquare_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Foursquare identifier of the venue"
        },
        {
          "name": "foursquare_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Foursquare type of the venue. (For example, \"arts_entertainment/default\", \"arts_entertainment/aquarium\" or \"food/icecream\".)"
        },
        {
          "name": "google_place_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Google Places identifier of the venue"
        },
        {
          "name": "google_place_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Google Places type of the venue. (See supported types.)"
        }
      ]
    },
    "WebAppData": {
      "name": "WebAppData",
      "href": "https://core.telegram.org/bots/api#webappdata",
      "description": [
        "Describes data sent from a Web App to the bot."
      ],
      "fields": [
        {
          "name": "data",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The data. Be aware that a bad client can send arbitrary data in this field."
        },
        {
          "name": "button_text",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field."
        }
      ]
    },
    "ProximityAlertTriggered": {
      "name": "ProximityAlertTriggered",
      "href": "https://core.telegram.org/bots/api#proximityalerttriggered",
      "description": [
        "This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user."
      ],
      "fields": [
        {
          "name": "traveler",
          "types": [
            "User"
          ],
          "required": true,
          "description": "User that triggered the alert"
        },
        {
          "name": "watcher",
          "types": [
            "User"
          ],
          "required": true,
          "description": "User that set the alert"
        },
        {
          "name": "distance",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "The distance between the users"
        }
      ]
    },
    "MessageAutoDeleteTimerChanged": {
      "name": "MessageAutoDeleteTimerChanged",
      "href": "https://core.telegram.org/bots/api#messageautodeletetimerchanged",
      "description": [
        "This object represents a service message about a change in auto-delete timer settings."
      ],
      "fields": [
        {
          "name": "message_auto_delete_time",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "New auto-delete time for messages in the chat; in seconds"
        }
      ]
    },
    "ForumTopicCreated": {
      "name": "ForumTopicCreated",
      "href": "https://core.telegram.org/bots/api#forumtopiccreated",
      "description": [
        "This object represents a service message about a new forum topic created in the chat."
      ],
      "fields": [
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Name of the topic"
        },
        {
          "name": "icon_color",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Color of the topic icon in RGB format"
        },
        {
          "name": "icon_custom_emoji_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Unique identifier of the custom emoji shown as the topic icon"
        }
      ]
    },
    "ForumTopicClosed": {
      "name": "ForumTopicClosed",
      "href": "https://core.telegram.org/bots/api#forumtopicclosed",
      "description": [
        "This object represents a service message about a forum topic closed in the chat. Currently holds no information."
      ]
    },
    "ForumTopicEdited": {
      "name": "ForumTopicEdited",
      "href": "https://core.telegram.org/bots/api#forumtopicedited",
      "description": [
        "This object represents a service message about an edited forum topic."
      ],
      "fields": [
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. New name of the topic, if it was edited"
        },
        {
          "name": "icon_custom_emoji_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed"
        }
      ]
    },
    "ForumTopicReopened": {
      "name": "ForumTopicReopened",
      "href": "https://core.telegram.org/bots/api#forumtopicreopened",
      "description": [
        "This object represents a service message about a forum topic reopened in the chat. Currently holds no information."
      ]
    },
    "GeneralForumTopicHidden": {
      "name": "GeneralForumTopicHidden",
      "href": "https://core.telegram.org/bots/api#generalforumtopichidden",
      "description": [
        "This object represents a service message about General forum topic hidden in the chat. Currently holds no information."
      ]
    },
    "GeneralForumTopicUnhidden": {
      "name": "GeneralForumTopicUnhidden",
      "href": "https://core.telegram.org/bots/api#generalforumtopicunhidden",
      "description": [
        "This object represents a service message about General forum topic unhidden in the chat. Currently holds no information."
      ]
    },
    "UserShared": {
      "name": "UserShared",
      "href": "https://core.telegram.org/bots/api#usershared",
      "description": [
        "This object contains information about the user whose identifier was shared with the bot using a KeyboardButtonRequestUser button."
      ],
      "fields": [
        {
          "name": "request_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Identifier of the request"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means."
        }
      ]
    },
    "ChatShared": {
      "name": "ChatShared",
      "href": "https://core.telegram.org/bots/api#chatshared",
      "description": [
        "This object contains information about the chat whose identifier was shared with the bot using a KeyboardButtonRequestChat button."
      ],
      "fields": [
        {
          "name": "request_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Identifier of the request"
        },
        {
          "name": "chat_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means."
        }
      ]
    },
    "WriteAccessAllowed": {
      "name": "WriteAccessAllowed",
      "href": "https://core.telegram.org/bots/api#writeaccessallowed",
      "description": [
        "This object represents a service message about a user allowing a bot added to the attachment menu to write messages. Currently holds no information."
      ]
    },
    "VideoChatScheduled": {
      "name": "VideoChatScheduled",
      "href": "https://core.telegram.org/bots/api#videochatscheduled",
      "description": [
        "This object represents a service message about a video chat scheduled in the chat."
      ],
      "fields": [
        {
          "name": "start_date",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator"
        }
      ]
    },
    "VideoChatStarted": {
      "name": "VideoChatStarted",
      "href": "https://core.telegram.org/bots/api#videochatstarted",
      "description": [
        "This object represents a service message about a video chat started in the chat. Currently holds no information."
      ]
    },
    "VideoChatEnded": {
      "name": "VideoChatEnded",
      "href": "https://core.telegram.org/bots/api#videochatended",
      "description": [
        "This object represents a service message about a video chat ended in the chat."
      ],
      "fields": [
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Video chat duration in seconds"
        }
      ]
    },
    "VideoChatParticipantsInvited": {
      "name": "VideoChatParticipantsInvited",
      "href": "https://core.telegram.org/bots/api#videochatparticipantsinvited",
      "description": [
        "This object represents a service message about new members invited to a video chat."
      ],
      "fields": [
        {
          "name": "users",
          "types": [
            "Array of User"
          ],
          "required": true,
          "description": "New members that were invited to the video chat"
        }
      ]
    },
    "UserProfilePhotos": {
      "name": "UserProfilePhotos",
      "href": "https://core.telegram.org/bots/api#userprofilephotos",
      "description": [
        "This object represent a user's profile pictures."
      ],
      "fields": [
        {
          "name": "total_count",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Total number of profile pictures the target user has"
        },
        {
          "name": "photos",
          "types": [
            "Array of Array of PhotoSize"
          ],
          "required": true,
          "description": "Requested profile pictures (in up to 4 sizes each)"
        }
      ]
    },
    "File": {
      "name": "File",
      "href": "https://core.telegram.org/bots/api#file",
      "description": [
        "This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value."
        },
        {
          "name": "file_path",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file."
        }
      ]
    },
    "WebAppInfo": {
      "name": "WebAppInfo",
      "href": "https://core.telegram.org/bots/api#webappinfo",
      "description": [
        "Describes a Web App."
      ],
      "fields": [
        {
          "name": "url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps"
        }
      ]
    },
    "ReplyKeyboardMarkup": {
      "name": "ReplyKeyboardMarkup",
      "href": "https://core.telegram.org/bots/api#replykeyboardmarkup",
      "description": [
        "This object represents a custom keyboard with reply options (see Introduction to bots for details and examples)."
      ],
      "fields": [
        {
          "name": "keyboard",
          "types": [
            "Array of Array of KeyboardButton"
          ],
          "required": true,
          "description": "Array of button rows, each represented by an Array of KeyboardButton objects"
        },
        {
          "name": "is_persistent",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon."
        },
        {
          "name": "resize_keyboard",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard."
        },
        {
          "name": "one_time_keyboard",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false."
        },
        {
          "name": "input_field_placeholder",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters"
        },
        {
          "name": "selective",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard."
        }
      ]
    },
    "KeyboardButton": {
      "name": "KeyboardButton",
      "href": "https://core.telegram.org/bots/api#keyboardbutton",
      "description": [
        "This object represents one button of the reply keyboard. For simple text buttons, String can be used instead of this object to specify the button text. The optional fields web_app, request_user, request_chat, request_contact, request_location, and request_poll are mutually exclusive.",
        "Note: request_contact and request_location options will only work in Telegram versions released after 9 April, 2016. Older clients will display unsupported message.",
        "Note: request_poll option will only work in Telegram versions released after 23 January, 2020. Older clients will display unsupported message.",
        "Note: web_app option will only work in Telegram versions released after 16 April, 2022. Older clients will display unsupported message.",
        "Note: request_user and request_chat options will only work in Telegram versions released after 3 February, 2023. Older clients will display unsupported message."
      ],
      "fields": [
        {
          "name": "text",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed"
        },
        {
          "name": "request_user",
          "types": [
            "KeyboardButtonRequestUser"
          ],
          "required": false,
          "description": "Optional. If specified, pressing the button will open a list of suitable users. Tapping on any user will send their identifier to the bot in a \"user_shared\" service message. Available in private chats only."
        },
        {
          "name": "request_chat",
          "types": [
            "KeyboardButtonRequestChat"
          ],
          "required": false,
          "description": "Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a \"chat_shared\" service message. Available in private chats only."
        },
        {
          "name": "request_contact",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only."
        },
        {
          "name": "request_location",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only."
        },
        {
          "name": "request_poll",
          "types": [
            "KeyboardButtonPollType"
          ],
          "required": false,
          "description": "Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only."
        },
        {
          "name": "web_app",
          "types": [
            "WebAppInfo"
          ],
          "required": false,
          "description": "Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a \"web_app_data\" service message. Available in private chats only."
        }
      ]
    },
    "KeyboardButtonRequestUser": {
      "name": "KeyboardButtonRequestUser",
      "href": "https://core.telegram.org/bots/api#keyboardbuttonrequestuser",
      "description": [
        "This object defines the criteria used to request a suitable user. The identifier of the selected user will be shared with the bot when the corresponding button is pressed."
      ],
      "fields": [
        {
          "name": "request_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Signed 32-bit identifier of the request, which will be received back in the UserShared object. Must be unique within the message"
        },
        {
          "name": "user_is_bot",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True to request a bot, pass False to request a regular user. If not specified, no additional restrictions are applied."
        },
        {
          "name": "user_is_premium",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True to request a premium user, pass False to request a non-premium user. If not specified, no additional restrictions are applied."
        }
      ]
    },
    "KeyboardButtonRequestChat": {
      "name": "KeyboardButtonRequestChat",
      "href": "https://core.telegram.org/bots/api#keyboardbuttonrequestchat",
      "description": [
        "This object defines the criteria used to request a suitable chat. The identifier of the selected chat will be shared with the bot when the corresponding button is pressed."
      ],
      "fields": [
        {
          "name": "request_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message"
        },
        {
          "name": "chat_is_channel",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "Pass True to request a channel chat, pass False to request a group or a supergroup chat."
        },
        {
          "name": "chat_is_forum",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied."
        },
        {
          "name": "chat_has_username",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied."
        },
        {
          "name": "chat_is_created",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied."
        },
        {
          "name": "user_administrator_rights",
          "types": [
            "ChatAdministratorRights"
          ],
          "required": false,
          "description": "Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied."
        },
        {
          "name": "bot_administrator_rights",
          "types": [
            "ChatAdministratorRights"
          ],
          "required": false,
          "description": "Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied."
        },
        {
          "name": "bot_is_member",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied."
        }
      ]
    },
    "KeyboardButtonPollType": {
      "name": "KeyboardButtonPollType",
      "href": "https://core.telegram.org/bots/api#keyboardbuttonpolltype",
      "description": [
        "This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type."
        }
      ]
    },
    "ReplyKeyboardRemove": {
      "name": "ReplyKeyboardRemove",
      "href": "https://core.telegram.org/bots/api#replykeyboardremove",
      "description": [
        "Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup)."
      ],
      "fields": [
        {
          "name": "remove_keyboard",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)"
        },
        {
          "name": "selective",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet."
        }
      ]
    },
    "InlineKeyboardMarkup": {
      "name": "InlineKeyboardMarkup",
      "href": "https://core.telegram.org/bots/api#inlinekeyboardmarkup",
      "description": [
        "This object represents an inline keyboard that appears right next to the message it belongs to.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will display unsupported message."
      ],
      "fields": [
        {
          "name": "inline_keyboard",
          "types": [
            "Array of Array of InlineKeyboardButton"
          ],
          "required": true,
          "description": "Array of button rows, each represented by an Array of InlineKeyboardButton objects"
        }
      ]
    },
    "InlineKeyboardButton": {
      "name": "InlineKeyboardButton",
      "href": "https://core.telegram.org/bots/api#inlinekeyboardbutton",
      "description": [
        "This object represents one button of an inline keyboard. You must use exactly one of the optional fields."
      ],
      "fields": [
        {
          "name": "text",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Label text on the button"
        },
        {
          "name": "url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their ID without using a username, if this is allowed by their privacy settings."
        },
        {
          "name": "callback_data",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes"
        },
        {
          "name": "web_app",
          "types": [
            "WebAppInfo"
          ],
          "required": false,
          "description": "Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot."
        },
        {
          "name": "login_url",
          "types": [
            "LoginUrl"
          ],
          "required": false,
          "description": "Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget."
        },
        {
          "name": "switch_inline_query",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm... actions - in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen."
        },
        {
          "name": "switch_inline_query_current_chat",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted. This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options."
        },
        {
          "name": "callback_game",
          "types": [
            "CallbackGame"
          ],
          "required": false,
          "description": "Optional. Description of the game that will be launched when the user presses the button. NOTE: This type of button must always be the first button in the first row."
        },
        {
          "name": "pay",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Specify True, to send a Pay button. NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages."
        }
      ]
    },
    "LoginUrl": {
      "name": "LoginUrl",
      "href": "https://core.telegram.org/bots/api#loginurl",
      "description": [
        "This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:",
        "Telegram apps support these buttons as of version 5.7."
      ],
      "fields": [
        {
          "name": "url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data. NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization."
        },
        {
          "name": "forward_text",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. New text of the button in forwarded messages."
        },
        {
          "name": "bot_username",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details."
        },
        {
          "name": "request_write_access",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True to request the permission for your bot to send messages to the user."
        }
      ]
    },
    "CallbackQuery": {
      "name": "CallbackQuery",
      "href": "https://core.telegram.org/bots/api#callbackquery",
      "description": [
        "This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present."
      ],
      "fields": [
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this query"
        },
        {
          "name": "from",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Sender"
        },
        {
          "name": "message",
          "types": [
            "Message"
          ],
          "required": false,
          "description": "Optional. Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Identifier of the message sent via the bot in inline mode, that originated the query."
        },
        {
          "name": "chat_instance",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games."
        },
        {
          "name": "data",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data."
        },
        {
          "name": "game_short_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Short name of a Game to be returned, serves as the unique identifier for the game"
        }
      ]
    },
    "ForceReply": {
      "name": "ForceReply",
      "href": "https://core.telegram.org/bots/api#forcereply",
      "description": [
        "Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode."
      ],
      "fields": [
        {
          "name": "force_reply",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'"
        },
        {
          "name": "input_field_placeholder",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters"
        },
        {
          "name": "selective",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message."
        }
      ]
    },
    "ChatPhoto": {
      "name": "ChatPhoto",
      "href": "https://core.telegram.org/bots/api#chatphoto",
      "description": [
        "This object represents a chat photo."
      ],
      "fields": [
        {
          "name": "small_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed."
        },
        {
          "name": "small_file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "big_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed."
        },
        {
          "name": "big_file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        }
      ]
    },
    "ChatInviteLink": {
      "name": "ChatInviteLink",
      "href": "https://core.telegram.org/bots/api#chatinvitelink",
      "description": [
        "Represents an invite link for a chat."
      ],
      "fields": [
        {
          "name": "invite_link",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with \"...\"."
        },
        {
          "name": "creator",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Creator of the link"
        },
        {
          "name": "creates_join_request",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if users joining the chat via the link need to be approved by chat administrators"
        },
        {
          "name": "is_primary",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the link is primary"
        },
        {
          "name": "is_revoked",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the link is revoked"
        },
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Invite link name"
        },
        {
          "name": "expire_date",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Point in time (Unix timestamp) when the link will expire or has been expired"
        },
        {
          "name": "member_limit",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999"
        },
        {
          "name": "pending_join_request_count",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Number of pending join requests created using this link"
        }
      ]
    },
    "ChatAdministratorRights": {
      "name": "ChatAdministratorRights",
      "href": "https://core.telegram.org/bots/api#chatadministratorrights",
      "description": [
        "Represents the rights of an administrator in a chat."
      ],
      "fields": [
        {
          "name": "is_anonymous",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user's presence in the chat is hidden"
        },
        {
          "name": "can_manage_chat",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege"
        },
        {
          "name": "can_delete_messages",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can delete messages of other users"
        },
        {
          "name": "can_manage_video_chats",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can manage video chats"
        },
        {
          "name": "can_restrict_members",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can restrict, ban or unban chat members"
        },
        {
          "name": "can_promote_members",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)"
        },
        {
          "name": "can_change_info",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to change the chat title, photo and other settings"
        },
        {
          "name": "can_invite_users",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to invite new users to the chat"
        },
        {
          "name": "can_post_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the administrator can post in the channel; channels only"
        },
        {
          "name": "can_edit_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the administrator can edit messages of other users and can pin messages; channels only"
        },
        {
          "name": "can_pin_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to pin messages; groups and supergroups only"
        },
        {
          "name": "can_manage_topics",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only"
        }
      ]
    },
    "ChatMember": {
      "name": "ChatMember",
      "href": "https://core.telegram.org/bots/api#chatmember",
      "description": [
        "This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:",
        "- ChatMemberOwner",
        "- ChatMemberAdministrator",
        "- ChatMemberMember",
        "- ChatMemberRestricted",
        "- ChatMemberLeft",
        "- ChatMemberBanned"
      ],
      "subtypes": [
        "ChatMemberOwner",
        "ChatMemberAdministrator",
        "ChatMemberMember",
        "ChatMemberRestricted",
        "ChatMemberLeft",
        "ChatMemberBanned"
      ]
    },
    "ChatMemberOwner": {
      "name": "ChatMemberOwner",
      "href": "https://core.telegram.org/bots/api#chatmemberowner",
      "description": [
        "Represents a chat member that owns the chat and has all administrator privileges."
      ],
      "fields": [
        {
          "name": "status",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The member's status in the chat, always \"creator\""
        },
        {
          "name": "user",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Information about the user"
        },
        {
          "name": "is_anonymous",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user's presence in the chat is hidden"
        },
        {
          "name": "custom_title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Custom title for this user"
        }
      ],
      "subtype_of": [
        "ChatMember"
      ]
    },
    "ChatMemberAdministrator": {
      "name": "ChatMemberAdministrator",
      "href": "https://core.telegram.org/bots/api#chatmemberadministrator",
      "description": [
        "Represents a chat member that has some additional privileges."
      ],
      "fields": [
        {
          "name": "status",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The member's status in the chat, always \"administrator\""
        },
        {
          "name": "user",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Information about the user"
        },
        {
          "name": "can_be_edited",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the bot is allowed to edit administrator privileges of that user"
        },
        {
          "name": "is_anonymous",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user's presence in the chat is hidden"
        },
        {
          "name": "can_manage_chat",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege"
        },
        {
          "name": "can_delete_messages",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can delete messages of other users"
        },
        {
          "name": "can_manage_video_chats",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can manage video chats"
        },
        {
          "name": "can_restrict_members",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can restrict, ban or unban chat members"
        },
        {
          "name": "can_promote_members",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)"
        },
        {
          "name": "can_change_info",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to change the chat title, photo and other settings"
        },
        {
          "name": "can_invite_users",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to invite new users to the chat"
        },
        {
          "name": "can_post_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the administrator can post in the channel; channels only"
        },
        {
          "name": "can_edit_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the administrator can edit messages of other users and can pin messages; channels only"
        },
        {
          "name": "can_pin_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to pin messages; groups and supergroups only"
        },
        {
          "name": "can_manage_topics",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only"
        },
        {
          "name": "custom_title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Custom title for this user"
        }
      ],
      "subtype_of": [
        "ChatMember"
      ]
    },
    "ChatMemberMember": {
      "name": "ChatMemberMember",
      "href": "https://core.telegram.org/bots/api#chatmembermember",
      "description": [
        "Represents a chat member that has no additional privileges or restrictions."
      ],
      "fields": [
        {
          "name": "status",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The member's status in the chat, always \"member\""
        },
        {
          "name": "user",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Information about the user"
        }
      ],
      "subtype_of": [
        "ChatMember"
      ]
    },
    "ChatMemberRestricted": {
      "name": "ChatMemberRestricted",
      "href": "https://core.telegram.org/bots/api#chatmemberrestricted",
      "description": [
        "Represents a chat member that is under certain restrictions in the chat. Supergroups only."
      ],
      "fields": [
        {
          "name": "status",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The member's status in the chat, always \"restricted\""
        },
        {
          "name": "user",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Information about the user"
        },
        {
          "name": "is_member",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is a member of the chat at the moment of the request"
        },
        {
          "name": "can_send_messages",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to send text messages, contacts, invoices, locations and venues"
        },
        {
          "name": "can_send_audios",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to send audios"
        },
        {
          "name": "can_send_documents",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to send documents"
        },
        {
          "name": "can_send_photos",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to send photos"
        },
        {
          "name": "can_send_videos",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to send videos"
        },
        {
          "name": "can_send_video_notes",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to send video notes"
        },
        {
          "name": "can_send_voice_notes",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to send voice notes"
        },
        {
          "name": "can_send_polls",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to send polls"
        },
        {
          "name": "can_send_other_messages",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to send animations, games, stickers and use inline bots"
        },
        {
          "name": "can_add_web_page_previews",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to add web page previews to their messages"
        },
        {
          "name": "can_change_info",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to change the chat title, photo and other settings"
        },
        {
          "name": "can_invite_users",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to invite new users to the chat"
        },
        {
          "name": "can_pin_messages",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to pin messages"
        },
        {
          "name": "can_manage_topics",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the user is allowed to create forum topics"
        },
        {
          "name": "until_date",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Date when restrictions will be lifted for this user; unix time. If 0, then the user is restricted forever"
        }
      ],
      "subtype_of": [
        "ChatMember"
      ]
    },
    "ChatMemberLeft": {
      "name": "ChatMemberLeft",
      "href": "https://core.telegram.org/bots/api#chatmemberleft",
      "description": [
        "Represents a chat member that isn't currently a member of the chat, but may join it themselves."
      ],
      "fields": [
        {
          "name": "status",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The member's status in the chat, always \"left\""
        },
        {
          "name": "user",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Information about the user"
        }
      ],
      "subtype_of": [
        "ChatMember"
      ]
    },
    "ChatMemberBanned": {
      "name": "ChatMemberBanned",
      "href": "https://core.telegram.org/bots/api#chatmemberbanned",
      "description": [
        "Represents a chat member that was banned in the chat and can't return to the chat or view chat messages."
      ],
      "fields": [
        {
          "name": "status",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The member's status in the chat, always \"kicked\""
        },
        {
          "name": "user",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Information about the user"
        },
        {
          "name": "until_date",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Date when restrictions will be lifted for this user; unix time. If 0, then the user is banned forever"
        }
      ],
      "subtype_of": [
        "ChatMember"
      ]
    },
    "ChatMemberUpdated": {
      "name": "ChatMemberUpdated",
      "href": "https://core.telegram.org/bots/api#chatmemberupdated",
      "description": [
        "This object represents changes in the status of a chat member."
      ],
      "fields": [
        {
          "name": "chat",
          "types": [
            "Chat"
          ],
          "required": true,
          "description": "Chat the user belongs to"
        },
        {
          "name": "from",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Performer of the action, which resulted in the change"
        },
        {
          "name": "date",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Date the change was done in Unix time"
        },
        {
          "name": "old_chat_member",
          "types": [
            "ChatMember"
          ],
          "required": true,
          "description": "Previous information about the chat member"
        },
        {
          "name": "new_chat_member",
          "types": [
            "ChatMember"
          ],
          "required": true,
          "description": "New information about the chat member"
        },
        {
          "name": "invite_link",
          "types": [
            "ChatInviteLink"
          ],
          "required": false,
          "description": "Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only."
        }
      ]
    },
    "ChatJoinRequest": {
      "name": "ChatJoinRequest",
      "href": "https://core.telegram.org/bots/api#chatjoinrequest",
      "description": [
        "Represents a join request sent to a chat."
      ],
      "fields": [
        {
          "name": "chat",
          "types": [
            "Chat"
          ],
          "required": true,
          "description": "Chat to which the request was sent"
        },
        {
          "name": "from",
          "types": [
            "User"
          ],
          "required": true,
          "description": "User that sent the join request"
        },
        {
          "name": "user_chat_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 24 hours to send messages until the join request is processed, assuming no other administrator contacted the user."
        },
        {
          "name": "date",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Date the request was sent in Unix time"
        },
        {
          "name": "bio",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Bio of the user."
        },
        {
          "name": "invite_link",
          "types": [
            "ChatInviteLink"
          ],
          "required": false,
          "description": "Optional. Chat invite link that was used by the user to send the join request"
        }
      ]
    },
    "ChatPermissions": {
      "name": "ChatPermissions",
      "href": "https://core.telegram.org/bots/api#chatpermissions",
      "description": [
        "Describes actions that a non-administrator user is allowed to take in a chat."
      ],
      "fields": [
        {
          "name": "can_send_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to send text messages, contacts, invoices, locations and venues"
        },
        {
          "name": "can_send_audios",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to send audios"
        },
        {
          "name": "can_send_documents",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to send documents"
        },
        {
          "name": "can_send_photos",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to send photos"
        },
        {
          "name": "can_send_videos",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to send videos"
        },
        {
          "name": "can_send_video_notes",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to send video notes"
        },
        {
          "name": "can_send_voice_notes",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to send voice notes"
        },
        {
          "name": "can_send_polls",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to send polls"
        },
        {
          "name": "can_send_other_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to send animations, games, stickers and use inline bots"
        },
        {
          "name": "can_add_web_page_previews",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to add web page previews to their messages"
        },
        {
          "name": "can_change_info",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups"
        },
        {
          "name": "can_invite_users",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to invite new users to the chat"
        },
        {
          "name": "can_pin_messages",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to pin messages. Ignored in public supergroups"
        },
        {
          "name": "can_manage_topics",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages"
        }
      ]
    },
    "ChatLocation": {
      "name": "ChatLocation",
      "href": "https://core.telegram.org/bots/api#chatlocation",
      "description": [
        "Represents a location to which a chat is connected."
      ],
      "fields": [
        {
          "name": "location",
          "types": [
            "Location"
          ],
          "required": true,
          "description": "The location to which the supergroup is connected. Can't be a live location."
        },
        {
          "name": "address",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Location address; 1-64 characters, as defined by the chat owner"
        }
      ]
    },
    "ForumTopic": {
      "name": "ForumTopic",
      "href": "https://core.telegram.org/bots/api#forumtopic",
      "description": [
        "This object represents a forum topic."
      ],
      "fields": [
        {
          "name": "message_thread_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the forum topic"
        },
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Name of the topic"
        },
        {
          "name": "icon_color",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Color of the topic icon in RGB format"
        },
        {
          "name": "icon_custom_emoji_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Unique identifier of the custom emoji shown as the topic icon"
        }
      ]
    },
    "BotCommand": {
      "name": "BotCommand",
      "href": "https://core.telegram.org/bots/api#botcommand",
      "description": [
        "This object represents a bot command."
      ],
      "fields": [
        {
          "name": "command",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores."
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Description of the command; 1-256 characters."
        }
      ]
    },
    "BotCommandScope": {
      "name": "BotCommandScope",
      "href": "https://core.telegram.org/bots/api#botcommandscope",
      "description": [
        "This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:",
        "- BotCommandScopeDefault",
        "- BotCommandScopeAllPrivateChats",
        "- BotCommandScopeAllGroupChats",
        "- BotCommandScopeAllChatAdministrators",
        "- BotCommandScopeChat",
        "- BotCommandScopeChatAdministrators",
        "- BotCommandScopeChatMember"
      ],
      "subtypes": [
        "BotCommandScopeDefault",
        "BotCommandScopeAllPrivateChats",
        "BotCommandScopeAllGroupChats",
        "BotCommandScopeAllChatAdministrators",
        "BotCommandScopeChat",
        "BotCommandScopeChatAdministrators",
        "BotCommandScopeChatMember"
      ]
    },
    "BotCommandScopeDefault": {
      "name": "BotCommandScopeDefault",
      "href": "https://core.telegram.org/bots/api#botcommandscopedefault",
      "description": [
        "Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Scope type, must be default"
        }
      ],
      "subtype_of": [
        "BotCommandScope"
      ]
    },
    "BotCommandScopeAllPrivateChats": {
      "name": "BotCommandScopeAllPrivateChats",
      "href": "https://core.telegram.org/bots/api#botcommandscopeallprivatechats",
      "description": [
        "Represents the scope of bot commands, covering all private chats."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Scope type, must be all_private_chats"
        }
      ],
      "subtype_of": [
        "BotCommandScope"
      ]
    },
    "BotCommandScopeAllGroupChats": {
      "name": "BotCommandScopeAllGroupChats",
      "href": "https://core.telegram.org/bots/api#botcommandscopeallgroupchats",
      "description": [
        "Represents the scope of bot commands, covering all group and supergroup chats."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Scope type, must be all_group_chats"
        }
      ],
      "subtype_of": [
        "BotCommandScope"
      ]
    },
    "BotCommandScopeAllChatAdministrators": {
      "name": "BotCommandScopeAllChatAdministrators",
      "href": "https://core.telegram.org/bots/api#botcommandscopeallchatadministrators",
      "description": [
        "Represents the scope of bot commands, covering all group and supergroup chat administrators."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Scope type, must be all_chat_administrators"
        }
      ],
      "subtype_of": [
        "BotCommandScope"
      ]
    },
    "BotCommandScopeChat": {
      "name": "BotCommandScopeChat",
      "href": "https://core.telegram.org/bots/api#botcommandscopechat",
      "description": [
        "Represents the scope of bot commands, covering a specific chat."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Scope type, must be chat"
        },
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        }
      ],
      "subtype_of": [
        "BotCommandScope"
      ]
    },
    "BotCommandScopeChatAdministrators": {
      "name": "BotCommandScopeChatAdministrators",
      "href": "https://core.telegram.org/bots/api#botcommandscopechatadministrators",
      "description": [
        "Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Scope type, must be chat_administrators"
        },
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        }
      ],
      "subtype_of": [
        "BotCommandScope"
      ]
    },
    "BotCommandScopeChatMember": {
      "name": "BotCommandScopeChatMember",
      "href": "https://core.telegram.org/bots/api#botcommandscopechatmember",
      "description": [
        "Represents the scope of bot commands, covering a specific member of a group or supergroup chat."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Scope type, must be chat_member"
        },
        {
          "name": "chat_id",
          "types": [
            "Integer",
            "String"
          ],
          "required": true,
          "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
        },
        {
          "name": "user_id",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unique identifier of the target user"
        }
      ],
      "subtype_of": [
        "BotCommandScope"
      ]
    },
    "MenuButton": {
      "name": "MenuButton",
      "href": "https://core.telegram.org/bots/api#menubutton",
      "description": [
        "This object describes the bot's menu button in a private chat. It should be one of",
        "- MenuButtonCommands",
        "- MenuButtonWebApp",
        "- MenuButtonDefault",
        "If a menu button other than MenuButtonDefault is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands."
      ],
      "subtypes": [
        "MenuButtonCommands",
        "MenuButtonWebApp",
        "MenuButtonDefault"
      ]
    },
    "MenuButtonCommands": {
      "name": "MenuButtonCommands",
      "href": "https://core.telegram.org/bots/api#menubuttoncommands",
      "description": [
        "Represents a menu button, which opens the bot's list of commands."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the button, must be commands"
        }
      ],
      "subtype_of": [
        "MenuButton"
      ]
    },
    "MenuButtonWebApp": {
      "name": "MenuButtonWebApp",
      "href": "https://core.telegram.org/bots/api#menubuttonwebapp",
      "description": [
        "Represents a menu button, which launches a Web App."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the button, must be web_app"
        },
        {
          "name": "text",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Text on the button"
        },
        {
          "name": "web_app",
          "types": [
            "WebAppInfo"
          ],
          "required": true,
          "description": "Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery."
        }
      ],
      "subtype_of": [
        "MenuButton"
      ]
    },
    "MenuButtonDefault": {
      "name": "MenuButtonDefault",
      "href": "https://core.telegram.org/bots/api#menubuttondefault",
      "description": [
        "Describes that no specific value for the menu button was set."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the button, must be default"
        }
      ],
      "subtype_of": [
        "MenuButton"
      ]
    },
    "ResponseParameters": {
      "name": "ResponseParameters",
      "href": "https://core.telegram.org/bots/api#responseparameters",
      "description": [
        "Describes why a request was unsuccessful."
      ],
      "fields": [
        {
          "name": "migrate_to_chat_id",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier."
        },
        {
          "name": "retry_after",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated"
        }
      ]
    },
    "InputMedia": {
      "name": "InputMedia",
      "href": "https://core.telegram.org/bots/api#inputmedia",
      "description": [
        "This object represents the content of a media message to be sent. It should be one of",
        "- InputMediaAnimation",
        "- InputMediaDocument",
        "- InputMediaAudio",
        "- InputMediaPhoto",
        "- InputMediaVideo"
      ],
      "subtypes": [
        "InputMediaAnimation",
        "InputMediaDocument",
        "InputMediaAudio",
        "InputMediaPhoto",
        "InputMediaVideo"
      ]
    },
    "InputMediaPhoto": {
      "name": "InputMediaPhoto",
      "href": "https://core.telegram.org/bots/api#inputmediaphoto",
      "description": [
        "Represents a photo to be sent."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be photo"
        },
        {
          "name": "media",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass \"attach://<file_attach_name>\" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the photo caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "has_spoiler",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if the photo needs to be covered with a spoiler animation"
        }
      ],
      "subtype_of": [
        "InputMedia"
      ]
    },
    "InputMediaVideo": {
      "name": "InputMediaVideo",
      "href": "https://core.telegram.org/bots/api#inputmediavideo",
      "description": [
        "Represents a video to be sent."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be video"
        },
        {
          "name": "media",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass \"attach://<file_attach_name>\" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the video to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the video caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Video width"
        },
        {
          "name": "height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Video height"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Video duration in seconds"
        },
        {
          "name": "supports_streaming",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if the uploaded video is suitable for streaming"
        },
        {
          "name": "has_spoiler",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if the video needs to be covered with a spoiler animation"
        }
      ],
      "subtype_of": [
        "InputMedia"
      ]
    },
    "InputMediaAnimation": {
      "name": "InputMediaAnimation",
      "href": "https://core.telegram.org/bots/api#inputmediaanimation",
      "description": [
        "Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be animation"
        },
        {
          "name": "media",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass \"attach://<file_attach_name>\" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the animation caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Animation width"
        },
        {
          "name": "height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Animation height"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Animation duration in seconds"
        },
        {
          "name": "has_spoiler",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if the animation needs to be covered with a spoiler animation"
        }
      ],
      "subtype_of": [
        "InputMedia"
      ]
    },
    "InputMediaAudio": {
      "name": "InputMediaAudio",
      "href": "https://core.telegram.org/bots/api#inputmediaaudio",
      "description": [
        "Represents an audio file to be treated as music to be sent."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be audio"
        },
        {
          "name": "media",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass \"attach://<file_attach_name>\" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the audio caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Duration of the audio in seconds"
        },
        {
          "name": "performer",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Performer of the audio"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Title of the audio"
        }
      ],
      "subtype_of": [
        "InputMedia"
      ]
    },
    "InputMediaDocument": {
      "name": "InputMediaDocument",
      "href": "https://core.telegram.org/bots/api#inputmediadocument",
      "description": [
        "Represents a general file to be sent."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be document"
        },
        {
          "name": "media",
          "types": [
            "String"
          ],
          "required": true,
          "description": "File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass \"attach://<file_attach_name>\" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "thumb",
          "types": [
            "InputFile",
            "String"
          ],
          "required": false,
          "description": "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the document to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the document caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "disable_content_type_detection",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album."
        }
      ],
      "subtype_of": [
        "InputMedia"
      ]
    },
    "InputFile": {
      "name": "InputFile",
      "href": "https://core.telegram.org/bots/api#inputfile",
      "description": [
        "This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser."
      ]
    },
    "Sticker": {
      "name": "Sticker",
      "href": "https://core.telegram.org/bots/api#sticker",
      "description": [
        "This object represents a sticker."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the sticker, currently one of \"regular\", \"mask\", \"custom_emoji\". The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video."
        },
        {
          "name": "width",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Sticker width"
        },
        {
          "name": "height",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Sticker height"
        },
        {
          "name": "is_animated",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the sticker is animated"
        },
        {
          "name": "is_video",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the sticker is a video sticker"
        },
        {
          "name": "thumb",
          "types": [
            "PhotoSize"
          ],
          "required": false,
          "description": "Optional. Sticker thumbnail in the .WEBP or .JPG format"
        },
        {
          "name": "emoji",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Emoji associated with the sticker"
        },
        {
          "name": "set_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Name of the sticker set to which the sticker belongs"
        },
        {
          "name": "premium_animation",
          "types": [
            "File"
          ],
          "required": false,
          "description": "Optional. For premium regular stickers, premium animation for the sticker"
        },
        {
          "name": "mask_position",
          "types": [
            "MaskPosition"
          ],
          "required": false,
          "description": "Optional. For mask stickers, the position where the mask should be placed"
        },
        {
          "name": "custom_emoji_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. For custom emoji stickers, unique identifier of the custom emoji"
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. File size in bytes"
        }
      ]
    },
    "StickerSet": {
      "name": "StickerSet",
      "href": "https://core.telegram.org/bots/api#stickerset",
      "description": [
        "This object represents a sticker set."
      ],
      "fields": [
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Sticker set name"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Sticker set title"
        },
        {
          "name": "sticker_type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of stickers in the set, currently one of \"regular\", \"mask\", \"custom_emoji\""
        },
        {
          "name": "is_animated",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the sticker set contains animated stickers"
        },
        {
          "name": "is_video",
          "types": [
            "Boolean"
          ],
          "required": true,
          "description": "True, if the sticker set contains video stickers"
        },
        {
          "name": "stickers",
          "types": [
            "Array of Sticker"
          ],
          "required": true,
          "description": "List of all set stickers"
        },
        {
          "name": "thumb",
          "types": [
            "PhotoSize"
          ],
          "required": false,
          "description": "Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format"
        }
      ]
    },
    "MaskPosition": {
      "name": "MaskPosition",
      "href": "https://core.telegram.org/bots/api#maskposition",
      "description": [
        "This object describes the position on faces where a mask should be placed by default."
      ],
      "fields": [
        {
          "name": "point",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The part of the face relative to which the mask should be placed. One of \"forehead\", \"eyes\", \"mouth\", or \"chin\"."
        },
        {
          "name": "x_shift",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position."
        },
        {
          "name": "y_shift",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position."
        },
        {
          "name": "scale",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Mask scaling coefficient. For example, 2.0 means double size."
        }
      ]
    },
    "InlineQuery": {
      "name": "InlineQuery",
      "href": "https://core.telegram.org/bots/api#inlinequery",
      "description": [
        "This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results."
      ],
      "fields": [
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this query"
        },
        {
          "name": "from",
          "types": [
            "User"
          ],
          "required": true,
          "description": "Sender"
        },
        {
          "name": "query",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Text of the query (up to 256 characters)"
        },
        {
          "name": "offset",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Offset of the results to be returned, can be controlled by the bot"
        },
        {
          "name": "chat_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Type of the chat from which the inline query was sent. Can be either \"sender\" for a private chat with the inline query sender, \"private\", \"group\", \"supergroup\", or \"channel\". The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat"
        },
        {
          "name": "location",
          "types": [
            "Location"
          ],
          "required": false,
          "description": "Optional. Sender location, only for bots that request user location"
        }
      ]
    },
    "InlineQueryResult": {
      "name": "InlineQueryResult",
      "href": "https://core.telegram.org/bots/api#inlinequeryresult",
      "description": [
        "This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:",
        "- InlineQueryResultCachedAudio",
        "- InlineQueryResultCachedDocument",
        "- InlineQueryResultCachedGif",
        "- InlineQueryResultCachedMpeg4Gif",
        "- InlineQueryResultCachedPhoto",
        "- InlineQueryResultCachedSticker",
        "- InlineQueryResultCachedVideo",
        "- InlineQueryResultCachedVoice",
        "- InlineQueryResultArticle",
        "- InlineQueryResultAudio",
        "- InlineQueryResultContact",
        "- InlineQueryResultGame",
        "- InlineQueryResultDocument",
        "- InlineQueryResultGif",
        "- InlineQueryResultLocation",
        "- InlineQueryResultMpeg4Gif",
        "- InlineQueryResultPhoto",
        "- InlineQueryResultVenue",
        "- InlineQueryResultVideo",
        "- InlineQueryResultVoice",
        "Note: All URLs passed in inline query results will be available to end users and therefore must be assumed to be public."
      ],
      "subtypes": [
        "InlineQueryResultCachedAudio",
        "InlineQueryResultCachedDocument",
        "InlineQueryResultCachedGif",
        "InlineQueryResultCachedMpeg4Gif",
        "InlineQueryResultCachedPhoto",
        "InlineQueryResultCachedSticker",
        "InlineQueryResultCachedVideo",
        "InlineQueryResultCachedVoice",
        "InlineQueryResultArticle",
        "InlineQueryResultAudio",
        "InlineQueryResultContact",
        "InlineQueryResultGame",
        "InlineQueryResultDocument",
        "InlineQueryResultGif",
        "InlineQueryResultLocation",
        "InlineQueryResultMpeg4Gif",
        "InlineQueryResultPhoto",
        "InlineQueryResultVenue",
        "InlineQueryResultVideo",
        "InlineQueryResultVoice"
      ]
    },
    "InlineQueryResultArticle": {
      "name": "InlineQueryResultArticle",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultarticle",
      "description": [
        "Represents a link to an article or web page."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be article"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 Bytes"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Title of the result"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": true,
          "description": "Content of the message to be sent"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. URL of the result"
        },
        {
          "name": "hide_url",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if you don't want the URL to be shown in the message"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Short description of the result"
        },
        {
          "name": "thumb_url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Url of the thumbnail for the result"
        },
        {
          "name": "thumb_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail width"
        },
        {
          "name": "thumb_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail height"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultPhoto": {
      "name": "InlineQueryResultPhoto",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultphoto",
      "description": [
        "Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be photo"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "photo_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB"
        },
        {
          "name": "thumb_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "URL of the thumbnail for the photo"
        },
        {
          "name": "photo_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Width of the photo"
        },
        {
          "name": "photo_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Height of the photo"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Title for the result"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Short description of the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the photo caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the photo"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultGif": {
      "name": "InlineQueryResultGif",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultgif",
      "description": [
        "Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be gif"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "gif_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid URL for the GIF file. File size must not exceed 1MB"
        },
        {
          "name": "gif_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Width of the GIF"
        },
        {
          "name": "gif_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Height of the GIF"
        },
        {
          "name": "gif_duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Duration of the GIF in seconds"
        },
        {
          "name": "thumb_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result"
        },
        {
          "name": "thumb_mime_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. MIME type of the thumbnail, must be one of \"image/jpeg\", \"image/gif\", or \"video/mp4\". Defaults to \"image/jpeg\""
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Title for the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the GIF animation"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultMpeg4Gif": {
      "name": "InlineQueryResultMpeg4Gif",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif",
      "description": [
        "Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be mpeg4_gif"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "mpeg4_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid URL for the MPEG4 file. File size must not exceed 1MB"
        },
        {
          "name": "mpeg4_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Video width"
        },
        {
          "name": "mpeg4_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Video height"
        },
        {
          "name": "mpeg4_duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Video duration in seconds"
        },
        {
          "name": "thumb_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result"
        },
        {
          "name": "thumb_mime_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. MIME type of the thumbnail, must be one of \"image/jpeg\", \"image/gif\", or \"video/mp4\". Defaults to \"image/jpeg\""
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Title for the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the video animation"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultVideo": {
      "name": "InlineQueryResultVideo",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultvideo",
      "description": [
        "Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be video"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "video_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid URL for the embedded video player or video file"
        },
        {
          "name": "mime_type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "MIME type of the content of the video URL, \"text/html\" or \"video/mp4\""
        },
        {
          "name": "thumb_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "URL of the thumbnail (JPEG only) for the video"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Title for the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the video to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the video caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "video_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Video width"
        },
        {
          "name": "video_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Video height"
        },
        {
          "name": "video_duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Video duration in seconds"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Short description of the result"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video)."
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultAudio": {
      "name": "InlineQueryResultAudio",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultaudio",
      "description": [
        "Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be audio"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "audio_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid URL for the audio file"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Title"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the audio caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "performer",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Performer"
        },
        {
          "name": "audio_duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Audio duration in seconds"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the audio"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultVoice": {
      "name": "InlineQueryResultVoice",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultvoice",
      "description": [
        "Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be voice"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "voice_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid URL for the voice recording"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Recording title"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the voice message caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "voice_duration",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Recording duration in seconds"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the voice recording"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultDocument": {
      "name": "InlineQueryResultDocument",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultdocument",
      "description": [
        "Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be document"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Title for the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the document to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the document caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "document_url",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid URL for the file"
        },
        {
          "name": "mime_type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "MIME type of the content of the file, either \"application/pdf\" or \"application/zip\""
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Short description of the result"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the file"
        },
        {
          "name": "thumb_url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. URL of the thumbnail (JPEG only) for the file"
        },
        {
          "name": "thumb_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail width"
        },
        {
          "name": "thumb_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail height"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultLocation": {
      "name": "InlineQueryResultLocation",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultlocation",
      "description": [
        "Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be location"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 Bytes"
        },
        {
          "name": "latitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Location latitude in degrees"
        },
        {
          "name": "longitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Location longitude in degrees"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Location title"
        },
        {
          "name": "horizontal_accuracy",
          "types": [
            "Float"
          ],
          "required": false,
          "description": "Optional. The radius of uncertainty for the location, measured in meters; 0-1500"
        },
        {
          "name": "live_period",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Period in seconds for which the location can be updated, should be between 60 and 86400."
        },
        {
          "name": "heading",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified."
        },
        {
          "name": "proximity_alert_radius",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified."
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the location"
        },
        {
          "name": "thumb_url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Url of the thumbnail for the result"
        },
        {
          "name": "thumb_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail width"
        },
        {
          "name": "thumb_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail height"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultVenue": {
      "name": "InlineQueryResultVenue",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultvenue",
      "description": [
        "Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be venue"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 Bytes"
        },
        {
          "name": "latitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Latitude of the venue location in degrees"
        },
        {
          "name": "longitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Longitude of the venue location in degrees"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Title of the venue"
        },
        {
          "name": "address",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Address of the venue"
        },
        {
          "name": "foursquare_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Foursquare identifier of the venue if known"
        },
        {
          "name": "foursquare_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Foursquare type of the venue, if known. (For example, \"arts_entertainment/default\", \"arts_entertainment/aquarium\" or \"food/icecream\".)"
        },
        {
          "name": "google_place_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Google Places identifier of the venue"
        },
        {
          "name": "google_place_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Google Places type of the venue. (See supported types.)"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the venue"
        },
        {
          "name": "thumb_url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Url of the thumbnail for the result"
        },
        {
          "name": "thumb_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail width"
        },
        {
          "name": "thumb_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail height"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultContact": {
      "name": "InlineQueryResultContact",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultcontact",
      "description": [
        "Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be contact"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 Bytes"
        },
        {
          "name": "phone_number",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Contact's phone number"
        },
        {
          "name": "first_name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Contact's first name"
        },
        {
          "name": "last_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Contact's last name"
        },
        {
          "name": "vcard",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the contact"
        },
        {
          "name": "thumb_url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Url of the thumbnail for the result"
        },
        {
          "name": "thumb_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail width"
        },
        {
          "name": "thumb_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Thumbnail height"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultGame": {
      "name": "InlineQueryResultGame",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultgame",
      "description": [
        "Represents a Game.",
        "Note: This will only work in Telegram versions released after October 1, 2016. Older clients will not display any inline results if a game result is among them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be game"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "game_short_name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Short name of the game"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultCachedPhoto": {
      "name": "InlineQueryResultCachedPhoto",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultcachedphoto",
      "description": [
        "Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be photo"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "photo_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid file identifier of the photo"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Title for the result"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Short description of the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the photo caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the photo"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultCachedGif": {
      "name": "InlineQueryResultCachedGif",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultcachedgif",
      "description": [
        "Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be gif"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "gif_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid file identifier for the GIF file"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Title for the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the GIF animation"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultCachedMpeg4Gif": {
      "name": "InlineQueryResultCachedMpeg4Gif",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif",
      "description": [
        "Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be mpeg4_gif"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "mpeg4_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid file identifier for the MPEG4 file"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Title for the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the video animation"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultCachedSticker": {
      "name": "InlineQueryResultCachedSticker",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultcachedsticker",
      "description": [
        "Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.",
        "Note: This will only work in Telegram versions released after 9 April, 2016 for static stickers and after 06 July, 2019 for animated stickers. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be sticker"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "sticker_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid file identifier of the sticker"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the sticker"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultCachedDocument": {
      "name": "InlineQueryResultCachedDocument",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultcacheddocument",
      "description": [
        "Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be document"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Title for the result"
        },
        {
          "name": "document_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid file identifier for the file"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Short description of the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the document to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the document caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the file"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultCachedVideo": {
      "name": "InlineQueryResultCachedVideo",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultcachedvideo",
      "description": [
        "Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be video"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "video_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid file identifier for the video file"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Title for the result"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Short description of the result"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption of the video to be sent, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the video caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the video"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultCachedVoice": {
      "name": "InlineQueryResultCachedVoice",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultcachedvoice",
      "description": [
        "Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be voice"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "voice_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid file identifier for the voice message"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Voice message title"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the voice message caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the voice message"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InlineQueryResultCachedAudio": {
      "name": "InlineQueryResultCachedAudio",
      "href": "https://core.telegram.org/bots/api#inlinequeryresultcachedaudio",
      "description": [
        "Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.",
        "Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of the result, must be audio"
        },
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this result, 1-64 bytes"
        },
        {
          "name": "audio_file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "A valid file identifier for the audio file"
        },
        {
          "name": "caption",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Caption, 0-1024 characters after entities parsing"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the audio caption. See formatting options for more details."
        },
        {
          "name": "caption_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode"
        },
        {
          "name": "reply_markup",
          "types": [
            "InlineKeyboardMarkup"
          ],
          "required": false,
          "description": "Optional. Inline keyboard attached to the message"
        },
        {
          "name": "input_message_content",
          "types": [
            "InputMessageContent"
          ],
          "required": false,
          "description": "Optional. Content of the message to be sent instead of the audio"
        }
      ],
      "subtype_of": [
        "InlineQueryResult"
      ]
    },
    "InputMessageContent": {
      "name": "InputMessageContent",
      "href": "https://core.telegram.org/bots/api#inputmessagecontent",
      "description": [
        "This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:",
        "- InputTextMessageContent",
        "- InputLocationMessageContent",
        "- InputVenueMessageContent",
        "- InputContactMessageContent",
        "- InputInvoiceMessageContent"
      ],
      "subtypes": [
        "InputTextMessageContent",
        "InputLocationMessageContent",
        "InputVenueMessageContent",
        "InputContactMessageContent",
        "InputInvoiceMessageContent"
      ]
    },
    "InputTextMessageContent": {
      "name": "InputTextMessageContent",
      "href": "https://core.telegram.org/bots/api#inputtextmessagecontent",
      "description": [
        "Represents the content of a text message to be sent as the result of an inline query."
      ],
      "fields": [
        {
          "name": "message_text",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Text of the message to be sent, 1-4096 characters"
        },
        {
          "name": "parse_mode",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Mode for parsing entities in the message text. See formatting options for more details."
        },
        {
          "name": "entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. List of special entities that appear in message text, which can be specified instead of parse_mode"
        },
        {
          "name": "disable_web_page_preview",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Disables link previews for links in the sent message"
        }
      ],
      "subtype_of": [
        "InputMessageContent"
      ]
    },
    "InputLocationMessageContent": {
      "name": "InputLocationMessageContent",
      "href": "https://core.telegram.org/bots/api#inputlocationmessagecontent",
      "description": [
        "Represents the content of a location message to be sent as the result of an inline query."
      ],
      "fields": [
        {
          "name": "latitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Latitude of the location in degrees"
        },
        {
          "name": "longitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Longitude of the location in degrees"
        },
        {
          "name": "horizontal_accuracy",
          "types": [
            "Float"
          ],
          "required": false,
          "description": "Optional. The radius of uncertainty for the location, measured in meters; 0-1500"
        },
        {
          "name": "live_period",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Period in seconds for which the location can be updated, should be between 60 and 86400."
        },
        {
          "name": "heading",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified."
        },
        {
          "name": "proximity_alert_radius",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified."
        }
      ],
      "subtype_of": [
        "InputMessageContent"
      ]
    },
    "InputVenueMessageContent": {
      "name": "InputVenueMessageContent",
      "href": "https://core.telegram.org/bots/api#inputvenuemessagecontent",
      "description": [
        "Represents the content of a venue message to be sent as the result of an inline query."
      ],
      "fields": [
        {
          "name": "latitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Latitude of the venue in degrees"
        },
        {
          "name": "longitude",
          "types": [
            "Float"
          ],
          "required": true,
          "description": "Longitude of the venue in degrees"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Name of the venue"
        },
        {
          "name": "address",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Address of the venue"
        },
        {
          "name": "foursquare_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Foursquare identifier of the venue, if known"
        },
        {
          "name": "foursquare_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Foursquare type of the venue, if known. (For example, \"arts_entertainment/default\", \"arts_entertainment/aquarium\" or \"food/icecream\".)"
        },
        {
          "name": "google_place_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Google Places identifier of the venue"
        },
        {
          "name": "google_place_type",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Google Places type of the venue. (See supported types.)"
        }
      ],
      "subtype_of": [
        "InputMessageContent"
      ]
    },
    "InputContactMessageContent": {
      "name": "InputContactMessageContent",
      "href": "https://core.telegram.org/bots/api#inputcontactmessagecontent",
      "description": [
        "Represents the content of a contact message to be sent as the result of an inline query."
      ],
      "fields": [
        {
          "name": "phone_number",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Contact's phone number"
        },
        {
          "name": "first_name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Contact's first name"
        },
        {
          "name": "last_name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Contact's last name"
        },
        {
          "name": "vcard",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes"
        }
      ],
      "subtype_of": [
        "InputMessageContent"
      ]
    },
    "InputInvoiceMessageContent": {
      "name": "InputInvoiceMessageContent",
      "href": "https://core.telegram.org/bots/api#inputinvoicemessagecontent",
      "description": [
        "Represents the content of an invoice message to be sent as the result of an inline query."
      ],
      "fields": [
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Product name, 1-32 characters"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Product description, 1-255 characters"
        },
        {
          "name": "payload",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes."
        },
        {
          "name": "provider_token",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Payment provider token, obtained via @BotFather"
        },
        {
          "name": "currency",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Three-letter ISO 4217 currency code, see more on currencies"
        },
        {
          "name": "prices",
          "types": [
            "Array of LabeledPrice"
          ],
          "required": true,
          "description": "Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)"
        },
        {
          "name": "max_tip_amount",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0"
        },
        {
          "name": "suggested_tip_amounts",
          "types": [
            "Array of Integer"
          ],
          "required": false,
          "description": "Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount."
        },
        {
          "name": "provider_data",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider."
        },
        {
          "name": "photo_url",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service."
        },
        {
          "name": "photo_size",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Photo size in bytes"
        },
        {
          "name": "photo_width",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Photo width"
        },
        {
          "name": "photo_height",
          "types": [
            "Integer"
          ],
          "required": false,
          "description": "Optional. Photo height"
        },
        {
          "name": "need_name",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if you require the user's full name to complete the order"
        },
        {
          "name": "need_phone_number",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if you require the user's phone number to complete the order"
        },
        {
          "name": "need_email",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if you require the user's email address to complete the order"
        },
        {
          "name": "need_shipping_address",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if you require the user's shipping address to complete the order"
        },
        {
          "name": "send_phone_number_to_provider",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if the user's phone number should be sent to provider"
        },
        {
          "name": "send_email_to_provider",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if the user's email address should be sent to provider"
        },
        {
          "name": "is_flexible",
          "types": [
            "Boolean"
          ],
          "required": false,
          "description": "Optional. Pass True if the final price depends on the shipping method"
        }
      ],
      "subtype_of": [
        "InputMessageContent"
      ]
    },
    "ChosenInlineResult": {
      "name": "ChosenInlineResult",
      "href": "https://core.telegram.org/bots/api#choseninlineresult",
      "description": [
        "Represents a result of an inline query that was chosen by the user and sent to their chat partner.",
        "Note: It is necessary to enable inline feedback via @BotFather in order to receive these objects in updates."
      ],
      "fields": [
        {
          "name": "result_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The unique identifier for the result that was chosen"
        },
        {
          "name": "from",
          "types": [
            "User"
          ],
          "required": true,
          "description": "The user that chose the result"
        },
        {
          "name": "location",
          "types": [
            "Location"
          ],
          "required": false,
          "description": "Optional. Sender location, only for bots that require user location"
        },
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message."
        },
        {
          "name": "query",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The query that was used to obtain the result"
        }
      ]
    },
    "SentWebAppMessage": {
      "name": "SentWebAppMessage",
      "href": "https://core.telegram.org/bots/api#sentwebappmessage",
      "description": [
        "Describes an inline message sent by a Web App on behalf of a user."
      ],
      "fields": [
        {
          "name": "inline_message_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message."
        }
      ]
    },
    "LabeledPrice": {
      "name": "LabeledPrice",
      "href": "https://core.telegram.org/bots/api#labeledprice",
      "description": [
        "This object represents a portion of the price for goods or services."
      ],
      "fields": [
        {
          "name": "label",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Portion label"
        },
        {
          "name": "amount",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies)."
        }
      ]
    },
    "Invoice": {
      "name": "Invoice",
      "href": "https://core.telegram.org/bots/api#invoice",
      "description": [
        "This object contains basic information about an invoice."
      ],
      "fields": [
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Product name"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Product description"
        },
        {
          "name": "start_parameter",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique bot deep-linking parameter that can be used to generate this invoice"
        },
        {
          "name": "currency",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Three-letter ISO 4217 currency code"
        },
        {
          "name": "total_amount",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies)."
        }
      ]
    },
    "ShippingAddress": {
      "name": "ShippingAddress",
      "href": "https://core.telegram.org/bots/api#shippingaddress",
      "description": [
        "This object represents a shipping address."
      ],
      "fields": [
        {
          "name": "country_code",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Two-letter ISO 3166-1 alpha-2 country code"
        },
        {
          "name": "state",
          "types": [
            "String"
          ],
          "required": true,
          "description": "State, if applicable"
        },
        {
          "name": "city",
          "types": [
            "String"
          ],
          "required": true,
          "description": "City"
        },
        {
          "name": "street_line1",
          "types": [
            "String"
          ],
          "required": true,
          "description": "First line for the address"
        },
        {
          "name": "street_line2",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Second line for the address"
        },
        {
          "name": "post_code",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Address post code"
        }
      ]
    },
    "OrderInfo": {
      "name": "OrderInfo",
      "href": "https://core.telegram.org/bots/api#orderinfo",
      "description": [
        "This object represents information about an order."
      ],
      "fields": [
        {
          "name": "name",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. User name"
        },
        {
          "name": "phone_number",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. User's phone number"
        },
        {
          "name": "email",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. User email"
        },
        {
          "name": "shipping_address",
          "types": [
            "ShippingAddress"
          ],
          "required": false,
          "description": "Optional. User shipping address"
        }
      ]
    },
    "ShippingOption": {
      "name": "ShippingOption",
      "href": "https://core.telegram.org/bots/api#shippingoption",
      "description": [
        "This object represents one shipping option."
      ],
      "fields": [
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Shipping option identifier"
        },
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Option title"
        },
        {
          "name": "prices",
          "types": [
            "Array of LabeledPrice"
          ],
          "required": true,
          "description": "List of price portions"
        }
      ]
    },
    "SuccessfulPayment": {
      "name": "SuccessfulPayment",
      "href": "https://core.telegram.org/bots/api#successfulpayment",
      "description": [
        "This object contains basic information about a successful payment."
      ],
      "fields": [
        {
          "name": "currency",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Three-letter ISO 4217 currency code"
        },
        {
          "name": "total_amount",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies)."
        },
        {
          "name": "invoice_payload",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Bot specified invoice payload"
        },
        {
          "name": "shipping_option_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Identifier of the shipping option chosen by the user"
        },
        {
          "name": "order_info",
          "types": [
            "OrderInfo"
          ],
          "required": false,
          "description": "Optional. Order information provided by the user"
        },
        {
          "name": "telegram_payment_charge_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Telegram payment identifier"
        },
        {
          "name": "provider_payment_charge_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Provider payment identifier"
        }
      ]
    },
    "ShippingQuery": {
      "name": "ShippingQuery",
      "href": "https://core.telegram.org/bots/api#shippingquery",
      "description": [
        "This object contains information about an incoming shipping query."
      ],
      "fields": [
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique query identifier"
        },
        {
          "name": "from",
          "types": [
            "User"
          ],
          "required": true,
          "description": "User who sent the query"
        },
        {
          "name": "invoice_payload",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Bot specified invoice payload"
        },
        {
          "name": "shipping_address",
          "types": [
            "ShippingAddress"
          ],
          "required": true,
          "description": "User specified shipping address"
        }
      ]
    },
    "PreCheckoutQuery": {
      "name": "PreCheckoutQuery",
      "href": "https://core.telegram.org/bots/api#precheckoutquery",
      "description": [
        "This object contains information about an incoming pre-checkout query."
      ],
      "fields": [
        {
          "name": "id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique query identifier"
        },
        {
          "name": "from",
          "types": [
            "User"
          ],
          "required": true,
          "description": "User who sent the query"
        },
        {
          "name": "currency",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Three-letter ISO 4217 currency code"
        },
        {
          "name": "total_amount",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies)."
        },
        {
          "name": "invoice_payload",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Bot specified invoice payload"
        },
        {
          "name": "shipping_option_id",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Identifier of the shipping option chosen by the user"
        },
        {
          "name": "order_info",
          "types": [
            "OrderInfo"
          ],
          "required": false,
          "description": "Optional. Order information provided by the user"
        }
      ]
    },
    "PassportData": {
      "name": "PassportData",
      "href": "https://core.telegram.org/bots/api#passportdata",
      "description": [
        "Describes Telegram Passport data shared with the bot by the user."
      ],
      "fields": [
        {
          "name": "data",
          "types": [
            "Array of EncryptedPassportElement"
          ],
          "required": true,
          "description": "Array with information about documents and other Telegram Passport elements that was shared with the bot"
        },
        {
          "name": "credentials",
          "types": [
            "EncryptedCredentials"
          ],
          "required": true,
          "description": "Encrypted credentials required to decrypt the data"
        }
      ]
    },
    "PassportFile": {
      "name": "PassportFile",
      "href": "https://core.telegram.org/bots/api#passportfile",
      "description": [
        "This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB."
      ],
      "fields": [
        {
          "name": "file_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Identifier for this file, which can be used to download or reuse the file"
        },
        {
          "name": "file_unique_id",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file."
        },
        {
          "name": "file_size",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "File size in bytes"
        },
        {
          "name": "file_date",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Unix time when the file was uploaded"
        }
      ]
    },
    "EncryptedPassportElement": {
      "name": "EncryptedPassportElement",
      "href": "https://core.telegram.org/bots/api#encryptedpassportelement",
      "description": [
        "Describes documents or other Telegram Passport elements shared with the bot by the user."
      ],
      "fields": [
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Element type. One of \"personal_details\", \"passport\", \"driver_license\", \"identity_card\", \"internal_passport\", \"address\", \"utility_bill\", \"bank_statement\", \"rental_agreement\", \"passport_registration\", \"temporary_registration\", \"phone_number\", \"email\"."
        },
        {
          "name": "data",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Base64-encoded encrypted Telegram Passport element data provided by the user, available for \"personal_details\", \"passport\", \"driver_license\", \"identity_card\", \"internal_passport\" and \"address\" types. Can be decrypted and verified using the accompanying EncryptedCredentials."
        },
        {
          "name": "phone_number",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. User's verified phone number, available only for \"phone_number\" type"
        },
        {
          "name": "email",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. User's verified email address, available only for \"email\" type"
        },
        {
          "name": "files",
          "types": [
            "Array of PassportFile"
          ],
          "required": false,
          "description": "Optional. Array of encrypted files with documents provided by the user, available for \"utility_bill\", \"bank_statement\", \"rental_agreement\", \"passport_registration\" and \"temporary_registration\" types. Files can be decrypted and verified using the accompanying EncryptedCredentials."
        },
        {
          "name": "front_side",
          "types": [
            "PassportFile"
          ],
          "required": false,
          "description": "Optional. Encrypted file with the front side of the document, provided by the user. Available for \"passport\", \"driver_license\", \"identity_card\" and \"internal_passport\". The file can be decrypted and verified using the accompanying EncryptedCredentials."
        },
        {
          "name": "reverse_side",
          "types": [
            "PassportFile"
          ],
          "required": false,
          "description": "Optional. Encrypted file with the reverse side of the document, provided by the user. Available for \"driver_license\" and \"identity_card\". The file can be decrypted and verified using the accompanying EncryptedCredentials."
        },
        {
          "name": "selfie",
          "types": [
            "PassportFile"
          ],
          "required": false,
          "description": "Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available for \"passport\", \"driver_license\", \"identity_card\" and \"internal_passport\". The file can be decrypted and verified using the accompanying EncryptedCredentials."
        },
        {
          "name": "translation",
          "types": [
            "Array of PassportFile"
          ],
          "required": false,
          "description": "Optional. Array of encrypted files with translated versions of documents provided by the user. Available if requested for \"passport\", \"driver_license\", \"identity_card\", \"internal_passport\", \"utility_bill\", \"bank_statement\", \"rental_agreement\", \"passport_registration\" and \"temporary_registration\" types. Files can be decrypted and verified using the accompanying EncryptedCredentials."
        },
        {
          "name": "hash",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded element hash for using in PassportElementErrorUnspecified"
        }
      ]
    },
    "EncryptedCredentials": {
      "name": "EncryptedCredentials",
      "href": "https://core.telegram.org/bots/api#encryptedcredentials",
      "description": [
        "Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes."
      ],
      "fields": [
        {
          "name": "data",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication"
        },
        {
          "name": "hash",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded data hash for data authentication"
        },
        {
          "name": "secret",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption"
        }
      ]
    },
    "PassportElementError": {
      "name": "PassportElementError",
      "href": "https://core.telegram.org/bots/api#passportelementerror",
      "description": [
        "This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:",
        "- PassportElementErrorDataField",
        "- PassportElementErrorFrontSide",
        "- PassportElementErrorReverseSide",
        "- PassportElementErrorSelfie",
        "- PassportElementErrorFile",
        "- PassportElementErrorFiles",
        "- PassportElementErrorTranslationFile",
        "- PassportElementErrorTranslationFiles",
        "- PassportElementErrorUnspecified"
      ],
      "subtypes": [
        "PassportElementErrorDataField",
        "PassportElementErrorFrontSide",
        "PassportElementErrorReverseSide",
        "PassportElementErrorSelfie",
        "PassportElementErrorFile",
        "PassportElementErrorFiles",
        "PassportElementErrorTranslationFile",
        "PassportElementErrorTranslationFiles",
        "PassportElementErrorUnspecified"
      ]
    },
    "PassportElementErrorDataField": {
      "name": "PassportElementErrorDataField",
      "href": "https://core.telegram.org/bots/api#passportelementerrordatafield",
      "description": [
        "Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes."
      ],
      "fields": [
        {
          "name": "source",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error source, must be data"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The section of the user's Telegram Passport which has the error, one of \"personal_details\", \"passport\", \"driver_license\", \"identity_card\", \"internal_passport\", \"address\""
        },
        {
          "name": "field_name",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Name of the data field which has the error"
        },
        {
          "name": "data_hash",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded data hash"
        },
        {
          "name": "message",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error message"
        }
      ],
      "subtype_of": [
        "PassportElementError"
      ]
    },
    "PassportElementErrorFrontSide": {
      "name": "PassportElementErrorFrontSide",
      "href": "https://core.telegram.org/bots/api#passportelementerrorfrontside",
      "description": [
        "Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes."
      ],
      "fields": [
        {
          "name": "source",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error source, must be front_side"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The section of the user's Telegram Passport which has the issue, one of \"passport\", \"driver_license\", \"identity_card\", \"internal_passport\""
        },
        {
          "name": "file_hash",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded hash of the file with the front side of the document"
        },
        {
          "name": "message",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error message"
        }
      ],
      "subtype_of": [
        "PassportElementError"
      ]
    },
    "PassportElementErrorReverseSide": {
      "name": "PassportElementErrorReverseSide",
      "href": "https://core.telegram.org/bots/api#passportelementerrorreverseside",
      "description": [
        "Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes."
      ],
      "fields": [
        {
          "name": "source",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error source, must be reverse_side"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The section of the user's Telegram Passport which has the issue, one of \"driver_license\", \"identity_card\""
        },
        {
          "name": "file_hash",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded hash of the file with the reverse side of the document"
        },
        {
          "name": "message",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error message"
        }
      ],
      "subtype_of": [
        "PassportElementError"
      ]
    },
    "PassportElementErrorSelfie": {
      "name": "PassportElementErrorSelfie",
      "href": "https://core.telegram.org/bots/api#passportelementerrorselfie",
      "description": [
        "Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes."
      ],
      "fields": [
        {
          "name": "source",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error source, must be selfie"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The section of the user's Telegram Passport which has the issue, one of \"passport\", \"driver_license\", \"identity_card\", \"internal_passport\""
        },
        {
          "name": "file_hash",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded hash of the file with the selfie"
        },
        {
          "name": "message",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error message"
        }
      ],
      "subtype_of": [
        "PassportElementError"
      ]
    },
    "PassportElementErrorFile": {
      "name": "PassportElementErrorFile",
      "href": "https://core.telegram.org/bots/api#passportelementerrorfile",
      "description": [
        "Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes."
      ],
      "fields": [
        {
          "name": "source",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error source, must be file"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The section of the user's Telegram Passport which has the issue, one of \"utility_bill\", \"bank_statement\", \"rental_agreement\", \"passport_registration\", \"temporary_registration\""
        },
        {
          "name": "file_hash",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded file hash"
        },
        {
          "name": "message",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error message"
        }
      ],
      "subtype_of": [
        "PassportElementError"
      ]
    },
    "PassportElementErrorFiles": {
      "name": "PassportElementErrorFiles",
      "href": "https://core.telegram.org/bots/api#passportelementerrorfiles",
      "description": [
        "Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes."
      ],
      "fields": [
        {
          "name": "source",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error source, must be files"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "The section of the user's Telegram Passport which has the issue, one of \"utility_bill\", \"bank_statement\", \"rental_agreement\", \"passport_registration\", \"temporary_registration\""
        },
        {
          "name": "file_hashes",
          "types": [
            "Array of String"
          ],
          "required": true,
          "description": "List of base64-encoded file hashes"
        },
        {
          "name": "message",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error message"
        }
      ],
      "subtype_of": [
        "PassportElementError"
      ]
    },
    "PassportElementErrorTranslationFile": {
      "name": "PassportElementErrorTranslationFile",
      "href": "https://core.telegram.org/bots/api#passportelementerrortranslationfile",
      "description": [
        "Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes."
      ],
      "fields": [
        {
          "name": "source",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error source, must be translation_file"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of element of the user's Telegram Passport which has the issue, one of \"passport\", \"driver_license\", \"identity_card\", \"internal_passport\", \"utility_bill\", \"bank_statement\", \"rental_agreement\", \"passport_registration\", \"temporary_registration\""
        },
        {
          "name": "file_hash",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded file hash"
        },
        {
          "name": "message",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error message"
        }
      ],
      "subtype_of": [
        "PassportElementError"
      ]
    },
    "PassportElementErrorTranslationFiles": {
      "name": "PassportElementErrorTranslationFiles",
      "href": "https://core.telegram.org/bots/api#passportelementerrortranslationfiles",
      "description": [
        "Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change."
      ],
      "fields": [
        {
          "name": "source",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error source, must be translation_files"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of element of the user's Telegram Passport which has the issue, one of \"passport\", \"driver_license\", \"identity_card\", \"internal_passport\", \"utility_bill\", \"bank_statement\", \"rental_agreement\", \"passport_registration\", \"temporary_registration\""
        },
        {
          "name": "file_hashes",
          "types": [
            "Array of String"
          ],
          "required": true,
          "description": "List of base64-encoded file hashes"
        },
        {
          "name": "message",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error message"
        }
      ],
      "subtype_of": [
        "PassportElementError"
      ]
    },
    "PassportElementErrorUnspecified": {
      "name": "PassportElementErrorUnspecified",
      "href": "https://core.telegram.org/bots/api#passportelementerrorunspecified",
      "description": [
        "Represents an issue in an unspecified place. The error is considered resolved when new data is added."
      ],
      "fields": [
        {
          "name": "source",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error source, must be unspecified"
        },
        {
          "name": "type",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Type of element of the user's Telegram Passport which has the issue"
        },
        {
          "name": "element_hash",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Base64-encoded element hash"
        },
        {
          "name": "message",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Error message"
        }
      ],
      "subtype_of": [
        "PassportElementError"
      ]
    },
    "Game": {
      "name": "Game",
      "href": "https://core.telegram.org/bots/api#game",
      "description": [
        "This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers."
      ],
      "fields": [
        {
          "name": "title",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Title of the game"
        },
        {
          "name": "description",
          "types": [
            "String"
          ],
          "required": true,
          "description": "Description of the game"
        },
        {
          "name": "photo",
          "types": [
            "Array of PhotoSize"
          ],
          "required": true,
          "description": "Photo that will be displayed in the game message in chats."
        },
        {
          "name": "text",
          "types": [
            "String"
          ],
          "required": false,
          "description": "Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters."
        },
        {
          "name": "text_entities",
          "types": [
            "Array of MessageEntity"
          ],
          "required": false,
          "description": "Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc."
        },
        {
          "name": "animation",
          "types": [
            "Animation"
          ],
          "required": false,
          "description": "Optional. Animation that will be displayed in the game message in chats. Upload via BotFather"
        }
      ]
    },
    "CallbackGame": {
      "name": "CallbackGame",
      "href": "https://core.telegram.org/bots/api#callbackgame",
      "description": [
        "A placeholder, currently holds no information. Use BotFather to set up your game."
      ]
    },
    "GameHighScore": {
      "name": "GameHighScore",
      "href": "https://core.telegram.org/bots/api#gamehighscore",
      "description": [
        "This object represents one row of the high scores table for a game."
      ],
      "fields": [
        {
          "name": "position",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Position in high score table for the game"
        },
        {
          "name": "user",
          "types": [
            "User"
          ],
          "required": true,
          "description": "User"
        },
        {
          "name": "score",
          "types": [
            "Integer"
          ],
          "required": true,
          "description": "Score"
        }
      ]
    }
  }
};

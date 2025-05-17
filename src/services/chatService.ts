import supabaseClient from '../utils/supabaseClient';
import { DB_TABLES } from '../config/backend';

/**
 * Interface for chat data
 */
export interface ChatData {
  title: string;
  description: string;
  created_by: string;
  is_public: boolean;
}

/**
 * Interface for message data
 */
export interface MessageData {
  chat_id: number;
  user_name: string;
  user_email: string;
  content: string;
  parent_id?: number;
}

/**
 * Interface for tag data
 */
export interface TagData {
  name: string;
  color?: string;
}

/**
 * Create a new chat/discussion
 * @param chatData The chat data
 * @returns Promise that resolves with the result of the creation
 */
export const createChat = async (chatData: ChatData) => {
  try {
    const { data, error } = await supabaseClient
      .from(DB_TABLES.CHATS)
      .insert([
        {
          title: chatData.title,
          description: chatData.description,
          created_by: chatData.created_by,
          is_public: chatData.is_public,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Error creating chat:', error);
      return {
        success: false,
        message: 'Failed to create discussion. Please try again.',
        error
      };
    }

    return {
      success: true,
      message: 'Discussion created successfully!',
      data
    };
  } catch (error) {
    console.error('Unexpected error in createChat:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

/**
 * Get all public chats/discussions
 * @returns Promise that resolves with the chats
 */
export const getPublicChats = async () => {
  try {
    // First, get all public chats
    const { data: chats, error } = await supabaseClient
      .from(DB_TABLES.CHATS)
      .select('*')
      .eq('is_public', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching public chats:', error);
      return {
        success: false,
        message: 'Failed to fetch discussions. Please try again.',
        error
      };
    }

    // If we have chats, get the message counts for each chat
    if (chats && chats.length > 0) {
      // Create a modified version of the chats with message counts
      const chatsWithMessageCounts = await Promise.all(
        chats.map(async (chat) => {
          try {
            // For each chat, count the messages
            const url = new URL(`${SUPABASE_URL}/rest/v1/${DB_TABLES.MESSAGES}`);
            url.searchParams.append('select', 'count');
            url.searchParams.append('chat_id', `eq.${chat.id}`);

            const response = await fetch(url.toString(), {
              headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'count=exact'
              }
            });

            if (!response.ok) {
              console.error(`Error counting messages for chat ${chat.id}:`, await response.json());
              return {
                ...chat,
                messages: [{ count: 0 }]
              };
            }

            const count = parseInt(response.headers.get('content-range')?.split('/')[1] || '0');

            return {
              ...chat,
              messages: [{ count }]
            };
          } catch (error) {
            console.error(`Error counting messages for chat ${chat.id}:`, error);
            return {
              ...chat,
              messages: [{ count: 0 }]
            };
          }
        })
      );

      return {
        success: true,
        data: chatsWithMessageCounts
      };
    }

    return {
      success: true,
      data: chats
    };
  } catch (error) {
    console.error('Unexpected error in getPublicChats:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

/**
 * Get a specific chat by ID
 * @param chatId The chat ID
 * @returns Promise that resolves with the chat
 */
export const getChatById = async (chatId: number) => {
  try {
    const { data, error } = await supabaseClient
      .from(DB_TABLES.CHATS)
      .select('*')
      .eq('id', chatId)
      .single();

    if (error) {
      console.error('Error fetching chat:', error);
      return {
        success: false,
        message: 'Failed to fetch discussion. Please try again.',
        error
      };
    }

    return {
      success: true,
      data
    };
  } catch (error) {
    console.error('Unexpected error in getChatById:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

/**
 * Add a message to a chat
 * @param messageData The message data
 * @returns Promise that resolves with the result of the addition
 */
export const addMessage = async (messageData: MessageData) => {
  try {
    const { data, error } = await supabaseClient
      .from(DB_TABLES.MESSAGES)
      .insert([
        {
          chat_id: messageData.chat_id,
          user_name: messageData.user_name,
          user_email: messageData.user_email,
          content: messageData.content,
          parent_id: messageData.parent_id || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Error adding message:', error);
      return {
        success: false,
        message: 'Failed to add message. Please try again.',
        error
      };
    }

    return {
      success: true,
      message: 'Message added successfully!',
      data
    };
  } catch (error) {
    console.error('Unexpected error in addMessage:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

/**
 * Get messages for a specific chat
 * @param chatId The chat ID
 * @returns Promise that resolves with the messages
 */
export const getMessagesByChatId = async (chatId: number) => {
  try {
    // First, get all messages for the chat
    const { data: messages, error } = await supabaseClient
      .from(DB_TABLES.MESSAGES)
      .select('*')
      .eq('chat_id', chatId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
      return {
        success: false,
        message: 'Failed to fetch messages. Please try again.',
        error
      };
    }

    // If we have messages, get the likes and tags for each message
    if (messages && messages.length > 0) {
      // Create a modified version of the messages with likes and tags
      const messagesWithLikesAndTags = await Promise.all(
        messages.map(async (message) => {
          try {
            // For each message, count the likes
            const likesUrl = new URL(`${SUPABASE_URL}/rest/v1/${DB_TABLES.LIKES}`);
            likesUrl.searchParams.append('select', 'count');
            likesUrl.searchParams.append('message_id', `eq.${message.id}`);

            const likesResponse = await fetch(likesUrl.toString(), {
              headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'count=exact'
              }
            });

            let likes = [{ count: 0 }];
            if (likesResponse.ok) {
              const count = parseInt(likesResponse.headers.get('content-range')?.split('/')[1] || '0');
              likes = [{ count }];
            } else {
              console.error(`Error counting likes for message ${message.id}:`, await likesResponse.json());
            }

            // For each message, get the tags
            const tagsUrl = new URL(`${SUPABASE_URL}/rest/v1/${DB_TABLES.MESSAGE_TAGS}`);
            tagsUrl.searchParams.append('select', 'tag_id');
            tagsUrl.searchParams.append('message_id', `eq.${message.id}`);

            const tagsResponse = await fetch(tagsUrl.toString(), {
              headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
              }
            });

            let tags = [];
            if (tagsResponse.ok) {
              const messageTags = await tagsResponse.json();

              // If we have message tags, get the tag details
              if (messageTags && messageTags.length > 0) {
                tags = await Promise.all(
                  messageTags.map(async (messageTag: { tag_id: number }) => {
                    try {
                      const tagUrl = new URL(`${SUPABASE_URL}/rest/v1/${DB_TABLES.TAGS}`);
                      tagUrl.searchParams.append('select', '*');
                      tagUrl.searchParams.append('id', `eq.${messageTag.tag_id}`);

                      const tagResponse = await fetch(tagUrl.toString(), {
                        headers: {
                          'apikey': SUPABASE_ANON_KEY,
                          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                          'Content-Type': 'application/json'
                        }
                      });

                      if (tagResponse.ok) {
                        const tagData = await tagResponse.json();
                        return { tag: tagData[0] || null };
                      } else {
                        console.error(`Error fetching tag ${messageTag.tag_id}:`, await tagResponse.json());
                        return { tag: null };
                      }
                    } catch (error) {
                      console.error(`Error fetching tag ${messageTag.tag_id}:`, error);
                      return { tag: null };
                    }
                  })
                );
              }
            } else {
              console.error(`Error fetching tags for message ${message.id}:`, await tagsResponse.json());
            }

            return {
              ...message,
              likes,
              tags
            };
          } catch (error) {
            console.error(`Error processing message ${message.id}:`, error);
            return {
              ...message,
              likes: [{ count: 0 }],
              tags: []
            };
          }
        })
      );

      return {
        success: true,
        data: messagesWithLikesAndTags
      };
    }

    return {
      success: true,
      data: messages
    };
  } catch (error) {
    console.error('Unexpected error in getMessagesByChatId:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

/**
 * Like a message
 * @param messageId The message ID
 * @param userEmail The user's email
 * @returns Promise that resolves with the result of the like
 */
export const likeMessage = async (messageId: number, userEmail: string) => {
  try {
    // First check if the user has already liked this message
    const { data: existingLike, error: checkError } = await supabaseClient
      .from(DB_TABLES.LIKES)
      .select('*')
      .eq('message_id', messageId)
      .eq('user_email', userEmail)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking existing like:', checkError);
      return {
        success: false,
        message: 'Failed to process like. Please try again.',
        error: checkError
      };
    }

    // If the user has already liked the message, remove the like (unlike)
    if (existingLike) {
      const { error: unlikeError } = await supabaseClient
        .from(DB_TABLES.LIKES)
        .delete()
        .eq('id', existingLike.id);

      if (unlikeError) {
        console.error('Error removing like:', unlikeError);
        return {
          success: false,
          message: 'Failed to unlike message. Please try again.',
          error: unlikeError
        };
      }

      return {
        success: true,
        message: 'Message unliked successfully!',
        action: 'unliked'
      };
    }

    // Otherwise, add a new like
    const { data, error } = await supabaseClient
      .from(DB_TABLES.LIKES)
      .insert([
        {
          message_id: messageId,
          user_email: userEmail,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Error liking message:', error);
      return {
        success: false,
        message: 'Failed to like message. Please try again.',
        error
      };
    }

    return {
      success: true,
      message: 'Message liked successfully!',
      action: 'liked',
      data
    };
  } catch (error) {
    console.error('Unexpected error in likeMessage:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

/**
 * Create a new tag
 * @param tagData The tag data
 * @returns Promise that resolves with the result of the creation
 */
export const createTag = async (tagData: TagData) => {
  try {
    // Check if tag already exists
    const { data: existingTag, error: checkError } = await supabaseClient
      .from(DB_TABLES.TAGS)
      .select('*')
      .eq('name', tagData.name.toLowerCase())
      .maybeSingle();

    if (checkError) {
      console.error('Error checking existing tag:', checkError);
      return {
        success: false,
        message: 'Failed to check existing tags. Please try again.',
        error: checkError
      };
    }

    // If tag already exists, return it
    if (existingTag) {
      return {
        success: true,
        message: 'Tag already exists',
        data: existingTag,
        isExisting: true
      };
    }

    // Otherwise, create a new tag
    const { data, error } = await supabaseClient
      .from(DB_TABLES.TAGS)
      .insert([
        {
          name: tagData.name.toLowerCase(),
          color: tagData.color || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Error creating tag:', error);
      return {
        success: false,
        message: 'Failed to create tag. Please try again.',
        error
      };
    }

    return {
      success: true,
      message: 'Tag created successfully!',
      data,
      isExisting: false
    };
  } catch (error) {
    console.error('Unexpected error in createTag:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

/**
 * Add a tag to a message
 * @param messageId The message ID
 * @param tagId The tag ID
 * @returns Promise that resolves with the result of the addition
 */
export const addTagToMessage = async (messageId: number, tagId: number) => {
  try {
    // Check if the tag is already added to the message
    const { data: existingTag, error: checkError } = await supabaseClient
      .from(DB_TABLES.MESSAGE_TAGS)
      .select('*')
      .eq('message_id', messageId)
      .eq('tag_id', tagId)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking existing message tag:', checkError);
      return {
        success: false,
        message: 'Failed to check existing tags. Please try again.',
        error: checkError
      };
    }

    // If tag is already added to the message, return early
    if (existingTag) {
      return {
        success: true,
        message: 'Tag already added to this message',
        data: existingTag,
        isExisting: true
      };
    }

    // Otherwise, add the tag to the message
    const { data, error } = await supabaseClient
      .from(DB_TABLES.MESSAGE_TAGS)
      .insert([
        {
          message_id: messageId,
          tag_id: tagId,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Error adding tag to message:', error);
      return {
        success: false,
        message: 'Failed to add tag to message. Please try again.',
        error
      };
    }

    return {
      success: true,
      message: 'Tag added to message successfully!',
      data,
      isExisting: false
    };
  } catch (error) {
    console.error('Unexpected error in addTagToMessage:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

/**
 * Get all tags
 * @returns Promise that resolves with the tags
 */
export const getAllTags = async () => {
  try {
    const { data, error } = await supabaseClient
      .from(DB_TABLES.TAGS)
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching tags:', error);
      return {
        success: false,
        message: 'Failed to fetch tags. Please try again.',
        error
      };
    }

    return {
      success: true,
      data
    };
  } catch (error) {
    console.error('Unexpected error in getAllTags:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

export default {
  createChat,
  getPublicChats,
  getChatById,
  addMessage,
  getMessagesByChatId,
  likeMessage,
  createTag,
  addTagToMessage,
  getAllTags,
};

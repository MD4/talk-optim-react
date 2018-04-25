export const getInitialState = () => ({
  conversation: {
    messages: [
      {
        participant: {
          avatar: '/avatars/george.jpg',
        },
        mine: false,
        text: 'Salut toi.',
        date: new Date(),
        id: `msg-${String(+new Date())}-1`,
      },
      {
        participant: {
          avatar: '/avatars/george.jpg',
        },
        mine: false,
        text: 'Sais-tu la différence entre la coquetterie et la classe ?',
        date: new Date(),
        id: `msg-${String(+new Date())}-2`,
      },
      {
        participant: {
          avatar: '/avatars/md4-near.png',
        },
        mine: true,
        text: 'Pardon ?',
        date: new Date(),
        id: `msg-${String(+new Date())}-3`,
      },
    ],
    currentInput: '',
  },
});

export const composeInputChanged = (state, currentInput) => ({
  ...state,
  currentInput,
});

export const composeInputSendPressed = (state) => ({
  ...state,
  conversation: {
    ...state.conversation,
    messages: [
      ...state.conversation.messages,
      {
        participant: {
          avatar: '/avatars/md4-near.png',
        },
        text: state.currentInput,
        date: new Date(),
        id: `msg-${String(+new Date())}`,
        mine: true,
      },
    ],
  },
  currentInput: '',
});

export const messageDeleted = (state, idToDelete) => ({
  ...state,
  conversation: {
    ...state.conversation,
    messages: [
      ...state.conversation.messages.filter(
        ({ id }) => (id !== idToDelete),
      ),
    ],
  },
});

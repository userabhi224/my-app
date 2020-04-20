import React from 'react'
import { storiesOf } from '@storybook/react'
import Comment from './Comment'

const comment = {
    text: 'This is the comment text',
    author: {
      name: 'Hello React',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  }

storiesOf("Comment", module)
    .add("Comment Box", () => <Comment text={comment.text} author={comment.author} />)

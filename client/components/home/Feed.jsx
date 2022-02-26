import React from 'react'
import { BsStars } from 'react-icons/bs';
import TweetBox from './TweetBox';
import Post from '../Post';

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `stickt top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Ibrahim',
    userName: '0x9EBeC3F8cBb00248b5f3dE845244EF9525fc1986',
    avatar:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    text: 'Good Morning',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Ibrahim',
    userName: '0x9EBeC3F8cBb00248b5f3dE845244EF9525fc1986',
    avatar:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    text: 'Good Morning',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Ibrahim',
    userName: '0x9EBeC3F8cBb00248b5f3dE845244EF9525fc1986',
    avatar:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    text: 'Good Morning',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Ibrahim',
    userName: '0x9EBeC3F8cBb00248b5f3dE845244EF9525fc1986',
    avatar:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    text: 'Good Morning',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
]
const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
import React from 'react'
import Post from '../Post'


const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
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

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName='Ibrahim'
          userName={`${tweet.userName.slice(
            0,
            4
          )}...${tweet.userName.slice(41)}`}
          text={tweet.text}
          avatar={tweet.avatar}
          timestamp={tweet.timestamp}
          isProfileImageNft={tweet.isProfileImageNft}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
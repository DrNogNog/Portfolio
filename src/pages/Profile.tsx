import { MessageCircle, MoreHorizontal, Home, Bell, Search, ThumbsUp, Heart, Laugh, Angry, Salad as Sad } from 'lucide-react';

interface User {
  name: string;
  avatar: string;
  bio?: string;
}

interface Friend {
  name: string;
  avatar: string;
}

interface Post {
  user: User;
  date: string;
  content: string;
  image?: string;
  reactions: number;
  comments: number;
}

const currentUser: User = {
  name: "Gordon",
  avatar: "/images/profilepic.png",
  bio: "Images"
};

const friends: Friend[] = [
  { name: "Thomas Wood", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { name: "Valentine Basser", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { name: "Remi Bordeaux", avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
];

const posts: Post[] = [
  {
    user: currentUser,
    date: "20 minutes ago",
    content: "First day in holiday! Enjoying the incredible sunset in New York City!",
    image: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reactions: 79,
    comments: 12
  }
];

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              
            </div>
            <div className="flex items-center space-x-4">
              <Home className="w-6 h-6" />
              <Bell className="w-6 h-6" />
              <MessageCircle className="w-6 h-6" />
              <MoreHorizontal className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Profile */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold">{currentUser.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{currentUser.bio}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-4">Photos</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${500 + i}?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80`}
                        alt={`Photo ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <button className="text-sm text-blue-600 mt-2">+125 more</button>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-4">Friends</h3>
                <div className="grid grid-cols-3 gap-2">
                  {friends.map((friend, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <button className="text-sm text-blue-600 mt-2">+961 more</button>
              </div>
            </div>
          </div>

          {/* Main Content - Posts */}
          <div className="col-span-6">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="bg-gray-100 rounded-full px-4 py-2 flex-1 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                  Post
                </button>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow mb-6">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{post.user.name}</h3>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                      </div>
                    </div>
                    <button>
                      <MoreHorizontal className="text-gray-500" />
                    </button>
                  </div>
                  
                  <p className="mt-4">{post.content}</p>
                  
                  {post.image && (
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full"
                      />
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        <ThumbsUp className="w-4 h-4 text-blue-600" />
                        <Heart className="w-4 h-4 text-red-500" />
                        <Laugh className="w-4 h-4 text-yellow-500" />
                      </div>
                      <span>{post.reactions}</span>
                    </div>
                    <span>{post.comments} comments</span>
                  </div>
                </div>

                <div className="border-t px-4 py-3">
                  <div className="flex items-center justify-around">
                    <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                      <ThumbsUp className="w-5 h-5" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                      <MessageCircle className="w-5 h-5" />
                      <span>Comment</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar - Friends */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold mb-4">Friends</h3>
              <div className="space-y-4">
                {friends.map((friend, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium">{friend.name}</span>
                  </div>
                ))}
                <button className="text-sm text-blue-600 w-full text-left">
                  See all friends
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
import { MessageCircle, MoreHorizontal, Home, Bell, Search, ThumbsUp, Heart, Laugh, Angry, Frown as Sad } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  bio: "Images",
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
    comments: 12,
  },
];

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" aria-label="Home">
                <Home className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
              </Link>
              <button aria-label="Notifications">
                <Bell className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
              </button>
              <button aria-label="Messages">
                <MessageCircle className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
              </button>
              <button aria-label="More options">
                <MoreHorizontal className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Profile Section */}
              <div className="text-center">
                <img
                  src={currentUser.avatar}
                  alt={`${currentUser.name}'s avatar`}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-gray-200"
                />
                <h2 className="text-xl font-semibold text-gray-800">{currentUser.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{currentUser.bio}</p>
              </div>

              {/* Photos */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Photos</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src="/images/exterior.jpeg"
                        alt={`Photo ${i}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                <button className="text-sm text-blue-600 hover:underline mt-3">+125 more</button>
              </div>

              {/* Friends */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Friends</h3>
                <div className="grid grid-cols-3 gap-2">
                  {friends.map((friend, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={friend.avatar}
                        alt={`${friend.name}'s avatar`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                <button className="text-sm text-blue-600 hover:underline mt-3">+961 more</button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-6">
            {/* Create Post */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={currentUser.avatar}
                  alt={`${currentUser.name}'s avatar`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="bg-gray-100 rounded-full px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                  aria-label="Create a new post"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Post
                </button>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.user.avatar}
                        alt={`${post.user.name}'s avatar`}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">{post.user.name}</h3>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                      </div>
                    </div>
                    <button aria-label="Post options">
                      <MoreHorizontal className="text-gray-500 hover:text-gray-700 w-5 h-5" />
                    </button>
                  </div>

                  <p className="mt-4 text-gray-700">{post.content}</p>

                  {post.image && (
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full object-cover max-h-96"
                      />
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        <ThumbsUp className="w-4 h-4 text-blue-600" />
                        <Heart className="w-4 h-4 text-red-500" />
                        <Laugh className="w-4 h-4 text-yellow-500" />
                      </div>
                      <span>{post.reactions} reactions</span>
                    </div>
                    <span>{post.comments} comments</span>
                  </div>
                </div>

                <div className="border-t px-6 py-3 bg-gray-50">
                  <div className="flex items-center justify-around">
                    <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>Comment</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Friends</h3>
              <div className="space-y-4">
                {friends.map((friend, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={friend.avatar}
                      alt={`${friend.name}'s avatar`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-800">{friend.name}</span>
                  </div>
                ))}
                <button className="text-sm text-blue-600 hover:underline w-full text-left">
                  See all friends
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Profile;
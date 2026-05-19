import { useState } from "react";

interface Props {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
}

export default function ProfileCard({ name, role, bio, avatarUrl }: Props) {
  const [likes, setLikes] = useState(0);
  const [followed, setFollowed] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full border border-gray-100">
      {/* Badge */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          ⚛️ React Component
        </span>
        <span className="text-xs text-gray-400">interactive</span>
      </div>

      {/* Avatar + Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold shrink-0">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name[0]
          )}
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">{bio}</p>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => setLikes((l) => l + 1)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 transition-colors"
        >
          ♥ {likes > 0 ? likes : "Like"}
        </button>
        <button
          onClick={() => setFollowed((f) => !f)}
          className={`flex-1 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            followed
              ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {followed ? "Following ✓" : "Follow"}
        </button>
      </div>

      {/* State hint */}
      <p className="text-xs text-gray-400 mt-3 text-center">
        useState keeps likes & follow state in the browser
      </p>
    </div>
  );
}
